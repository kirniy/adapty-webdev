#!/bin/bash

# =============================================================================
# RALPH WATCHDOG v3 - Multi-Phase Overnight Runner
# =============================================================================
#
# Monitors Ralph and chains multiple phases:
# - Phase 1: PROMPT.md - Add animations to all pages
# - Phase 2: PROMPT-PHASE2.md - Verify, polish, perfect
# - Phase 3: PROMPT-PHASE3.md - Mobile responsiveness & debug expansion
#
# Detects:
# 1. Ralph stopped running
# 2. Ralph stuck (no progress for 30 min)
# 3. Ralph completed (triggers next phase)
#
# =============================================================================

RALPH_DIR="/Users/kirniy/dev/adapty-dev/prototypes/achromatic-proto"
RALPH_SCRIPT="/Users/kirniy/.ralph/ralph_loop.sh"
LOG_FILE="$RALPH_DIR/.ralph/watchdog.log"
STOP_FILE="$RALPH_DIR/.ralph/STOP"
STATUS_FILE="$RALPH_DIR/.ralph/status.json"
MARKETING_DIR="$RALPH_DIR/apps/marketing"
PHASE_FILE="$RALPH_DIR/.ralph/.current_phase"

# Prompts for each phase
PROMPT_PHASE1="$RALPH_DIR/.ralph/PROMPT.md"
PROMPT_PHASE2="$RALPH_DIR/.ralph/PROMPT-PHASE2.md"
PROMPT_PHASE3="$RALPH_DIR/.ralph/PROMPT-PHASE3.md"

CHECK_INTERVAL=60           # Check every 60 seconds
STUCK_THRESHOLD=1800        # 30 minutes without progress = stuck
RESTART_DELAY=30            # Wait 30 seconds before restarting
MAX_RESTARTS_PER_HOUR=3     # Prevent infinite restart loops
COMPLETION_CHECK_LOOPS=3    # Check completion N times before confirming
RATE_LIMIT_WAIT=3600        # Wait 1 hour when rate limited

# State tracking
last_loop_count=0
last_progress_time=$(date +%s)
restarts_this_hour=0
hour_start=$(date +%s)
completion_checks=0
current_phase=1

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m'

log() {
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "${BLUE}[$timestamp]${NC} $1"
    echo "[$timestamp] $1" >> "$LOG_FILE"
}

log_success() {
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "${GREEN}[$timestamp] OK:${NC} $1"
    echo "[$timestamp] OK: $1" >> "$LOG_FILE"
}

log_warning() {
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "${YELLOW}[$timestamp] WARN:${NC} $1"
    echo "[$timestamp] WARN: $1" >> "$LOG_FILE"
}

log_error() {
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "${RED}[$timestamp] ERROR:${NC} $1"
    echo "[$timestamp] ERROR: $1" >> "$LOG_FILE"
}

log_progress() {
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "${MAGENTA}[$timestamp] PROGRESS:${NC} $1"
    echo "[$timestamp] PROGRESS: $1" >> "$LOG_FILE"
}

log_phase() {
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "${CYAN}[$timestamp] PHASE:${NC} $1"
    echo "[$timestamp] PHASE: $1" >> "$LOG_FILE"
}

check_ralph_running() {
    pgrep -f "ralph_loop.sh" > /dev/null 2>&1
    return $?
}

get_loop_count() {
    if [ -f "$STATUS_FILE" ]; then
        /usr/bin/grep -o '"loop_count": [0-9]*' "$STATUS_FILE" 2>/dev/null | /usr/bin/grep -o '[0-9]*' || echo "0"
    else
        echo "0"
    fi
}

get_recent_file_changes() {
    find "$MARKETING_DIR/components/sections" -name "*.tsx" -mmin -10 2>/dev/null | wc -l | tr -d ' '
}

get_recent_git_changes() {
    cd "$RALPH_DIR"
    git diff --name-only 2>/dev/null | wc -l | tr -d ' '
}

check_rate_limited() {
    # Check for rate limit errors in recent output
    if [ -f "$RALPH_DIR/.ralph/ralph_output.log" ]; then
        if tail -100 "$RALPH_DIR/.ralph/ralph_output.log" | /usr/bin/grep -qiE "rate.?limit|too many requests|429|quota exceeded|capacity|overloaded"; then
            return 0  # Rate limited
        fi
    fi

    # Check circuit breaker state
    if [ -f "$RALPH_DIR/.ralph/.circuit_breaker_state" ]; then
        local state=$(cat "$RALPH_DIR/.ralph/.circuit_breaker_state" 2>/dev/null | /usr/bin/grep -o '"state": "[^"]*"' | /usr/bin/grep -o '"[^"]*"$' | tr -d '"')
        if [ "$state" = "OPEN" ]; then
            return 0  # Circuit breaker tripped (likely rate limit)
        fi
    fi

    return 1  # Not rate limited
}

check_ralph_completed() {
    # Check if Ralph signaled completion
    if [ -f "$STATUS_FILE" ]; then
        local status=$(/usr/bin/grep -o '"status": "[^"]*"' "$STATUS_FILE" 2>/dev/null | /usr/bin/grep -o '"[^"]*"$' | tr -d '"')
        if [ "$status" = "completed" ] || [ "$status" = "done" ]; then
            return 0
        fi
    fi

    # Check for completion signals in exit_signals
    if [ -f "$RALPH_DIR/.ralph/.exit_signals" ]; then
        local done_count=$(/usr/bin/grep -c '"done_signals"' "$RALPH_DIR/.ralph/.exit_signals" 2>/dev/null || echo "0")
        if [ "$done_count" -gt 0 ]; then
            # Check if done_signals array has items
            local signals=$(/usr/bin/grep -o '"done_signals": \[[^]]*\]' "$RALPH_DIR/.ralph/.exit_signals" 2>/dev/null)
            if echo "$signals" | /usr/bin/grep -q '\[.*[^]]'; then
                return 0
            fi
        fi
    fi

    # Check output log for completion phrases
    if [ -f "$RALPH_DIR/.ralph/ralph_output.log" ]; then
        if tail -50 "$RALPH_DIR/.ralph/ralph_output.log" | /usr/bin/grep -qiE "all (pages|tasks|items) (complete|done|finished)|session complete|work complete"; then
            return 0
        fi
    fi

    return 1
}

check_progress() {
    local current_loop=$(get_loop_count)
    local file_changes=$(get_recent_file_changes)
    local git_changes=$(get_recent_git_changes)

    local progress_made=false

    if [ "$current_loop" -gt "$last_loop_count" ]; then
        log_progress "Loop count: $last_loop_count -> $current_loop"
        last_loop_count=$current_loop
        progress_made=true
    fi

    if [ "$file_changes" -gt 0 ]; then
        log_progress "Files modified recently: $file_changes"
        progress_made=true
    fi

    if [ "$git_changes" -gt 0 ]; then
        log_progress "Uncommitted changes: $git_changes files"
        progress_made=true
    fi

    if [ "$progress_made" = true ]; then
        last_progress_time=$(date +%s)
        completion_checks=0  # Reset completion checks when progress is made
        return 0
    else
        return 1
    fi
}

kill_ralph() {
    log_warning "Killing Ralph processes..."
    pkill -f "ralph_loop.sh" 2>/dev/null
    pkill -f "claude.*--print" 2>/dev/null
    sleep 5

    if check_ralph_running; then
        log_warning "Force killing Ralph..."
        pkill -9 -f "ralph_loop.sh" 2>/dev/null
        sleep 2
    fi
}

get_current_prompt() {
    case $current_phase in
        1) echo "$PROMPT_PHASE1" ;;
        2) echo "$PROMPT_PHASE2" ;;
        3) echo "$PROMPT_PHASE3" ;;
        *) echo "$PROMPT_PHASE1" ;;
    esac
}

start_ralph() {
    local prompt_file=$(get_current_prompt)
    log_phase "Starting Ralph Phase $current_phase..."
    log "Using prompt: $prompt_file"

    cd "$RALPH_DIR"

    # Reset circuit breaker if needed
    if [ -f "$RALPH_DIR/.ralph/.circuit_breaker_state" ]; then
        circuit_state=$(cat "$RALPH_DIR/.ralph/.circuit_breaker_state" 2>/dev/null | /usr/bin/grep -o '"state": "[^"]*"' | /usr/bin/grep -o '"[^"]*"$' | tr -d '"')
        if [ "$circuit_state" = "OPEN" ]; then
            log_warning "Resetting circuit breaker..."
            "$RALPH_SCRIPT" --reset-circuit 2>/dev/null
            sleep 2
        fi
    fi

    # Reset session for new phase
    "$RALPH_SCRIPT" --reset-session 2>/dev/null
    sleep 2

    # Start Ralph with the appropriate prompt
    nohup "$RALPH_SCRIPT" --timeout 20 --calls 80 --prompt "$prompt_file" >> "$RALPH_DIR/.ralph/ralph_output.log" 2>&1 &

    sleep 10

    if check_ralph_running; then
        log_success "Ralph Phase $current_phase started (PID: $(pgrep -f 'ralph_loop.sh' | head -1))"
        last_loop_count=$(get_loop_count)
        last_progress_time=$(date +%s)
        echo "$current_phase" > "$PHASE_FILE"
        return 0
    else
        log_error "Failed to start Ralph"
        return 1
    fi
}

advance_phase() {
    if [ $current_phase -lt 3 ]; then
        current_phase=$((current_phase + 1))
        log_phase "=== ADVANCING TO PHASE $current_phase ==="
        echo "$current_phase" > "$PHASE_FILE"

        # Commit Phase 1 work before starting Phase 2
        if [ $current_phase -eq 2 ]; then
            log "Committing Phase 1 work..."
            cd "$RALPH_DIR"
            git add -A 2>/dev/null
            git commit -m "chore: Ralph Phase 1 - Add animations to all pages

Automated by Ralph overnight session.

Co-Authored-By: Claude <noreply@anthropic.com>" 2>/dev/null || true
        fi

        # Commit Phase 2 work before starting Phase 3
        if [ $current_phase -eq 3 ]; then
            log "Committing Phase 2 work..."
            cd "$RALPH_DIR"
            git add -A 2>/dev/null
            git commit -m "chore: Ralph Phase 2 - Verify and polish all pages

Automated by Ralph overnight session.

Co-Authored-By: Claude <noreply@anthropic.com>" 2>/dev/null || true
        fi

        return 0
    else
        log_phase "=== ALL PHASES COMPLETE ==="
        log_success "Overnight session finished. Committing final work..."

        cd "$RALPH_DIR"
        git add -A 2>/dev/null
        git commit -m "chore: Ralph Phase 3 - Mobile responsiveness & debug expansion

Automated by Ralph overnight session.

Co-Authored-By: Claude <noreply@anthropic.com>" 2>/dev/null || true

        return 1  # Signal to stop
    fi
}

reset_hourly_counter() {
    local current_time=$(date +%s)
    local elapsed=$((current_time - hour_start))

    if [ $elapsed -ge 3600 ]; then
        restarts_this_hour=0
        hour_start=$current_time
        log "Hourly restart counter reset"
    fi
}

cleanup() {
    log "Watchdog shutting down..."
    exit 0
}

trap cleanup SIGINT SIGTERM

# =============================================================================
# MAIN
# =============================================================================

echo ""
echo "=============================================="
echo "  RALPH WATCHDOG v3 - Multi-Phase Runner"
echo "=============================================="
echo ""
echo "  Phase 1: Add animations (PROMPT.md)"
echo "  Phase 2: Verify & polish (PROMPT-PHASE2.md)"
echo "  Phase 3: Mobile responsiveness (PROMPT-PHASE3.md)"
echo ""
echo "  Stuck threshold: ${STUCK_THRESHOLD}s (30 min)"
echo "  Max restarts/hour: $MAX_RESTARTS_PER_HOUR"
echo ""
echo "  To stop: touch $STOP_FILE"
echo "=============================================="
echo ""

rm -f "$STOP_FILE"

# Load current phase if exists
if [ -f "$PHASE_FILE" ]; then
    current_phase=$(cat "$PHASE_FILE")
    log "Resuming from Phase $current_phase"
else
    current_phase=1
    echo "$current_phase" > "$PHASE_FILE"
fi

log "Watchdog v3 starting (Phase $current_phase)..."

# Initialize
if check_ralph_running; then
    last_loop_count=$(get_loop_count)
    last_progress_time=$(date +%s)
    log_success "Ralph already running (loop: $last_loop_count)"
else
    log "Ralph not running, starting Phase $current_phase..."
    start_ralph
fi

# =============================================================================
# MONITOR LOOP
# =============================================================================

while true; do
    # Check stop signal
    if [ -f "$STOP_FILE" ]; then
        log "Stop file detected"
        break
    fi

    reset_hourly_counter

    current_time=$(date +%s)
    time_since_progress=$((current_time - last_progress_time))

    # Check 1: Is Ralph running?
    if ! check_ralph_running; then
        # Ralph stopped - check if it completed or crashed
        if check_ralph_completed; then
            log_success "Ralph Phase $current_phase COMPLETED!"

            if advance_phase; then
                # Start next phase
                sleep 5
                start_ralph
            else
                # All phases done
                log_success "All phases complete. Watchdog stopping."
                break
            fi
        else
            # Ralph crashed
            log_error "Ralph stopped unexpectedly!"

            if [ $restarts_this_hour -ge $MAX_RESTARTS_PER_HOUR ]; then
                log_error "Max restarts reached. Waiting 5 min..."
                sleep 300
                continue
            fi

            restarts_this_hour=$((restarts_this_hour + 1))
            log "Restart attempt #$restarts_this_hour"

            sleep $RESTART_DELAY
            start_ralph
        fi
        continue
    fi

    # Check 2: Is Ralph making progress?
    if check_progress; then
        # Progress detected
        :
    else
        # No progress - might be stuck or might be completing
        if [ $time_since_progress -ge $STUCK_THRESHOLD ]; then
            # Check if it's completing rather than stuck
            if check_ralph_completed; then
                log_success "Ralph Phase $current_phase COMPLETED (detected via completion check)!"

                kill_ralph

                if advance_phase; then
                    sleep 5
                    start_ralph
                else
                    log_success "All phases complete. Watchdog stopping."
                    break
                fi
            else
                # Check if rate limited before declaring stuck
                if check_rate_limited; then
                    log_warning "Rate limit detected. Waiting ${RATE_LIMIT_WAIT}s (1 hour)..."
                    log "Ralph's circuit breaker will handle retry. Watchdog waiting."

                    # Wait but check periodically if limits are lifted
                    local wait_elapsed=0
                    while [ $wait_elapsed -lt $RATE_LIMIT_WAIT ]; do
                        sleep 300  # Check every 5 minutes
                        wait_elapsed=$((wait_elapsed + 300))

                        if [ -f "$STOP_FILE" ]; then
                            break
                        fi

                        # Check if Ralph started working again
                        if check_progress; then
                            log_success "Rate limits lifted! Ralph resumed."
                            break
                        fi

                        log "Still rate limited. Waited ${wait_elapsed}s / ${RATE_LIMIT_WAIT}s"
                    done
                    continue
                fi

                log_error "STUCK DETECTED! No progress for ${time_since_progress}s"

                if [ $restarts_this_hour -ge $MAX_RESTARTS_PER_HOUR ]; then
                    log_error "Max restarts reached. Waiting 5 min..."
                    sleep 300
                    continue
                fi

                log_warning "Killing stuck Ralph..."
                kill_ralph

                restarts_this_hour=$((restarts_this_hour + 1))
                sleep $RESTART_DELAY
                start_ralph
            fi
        else
            remaining=$((STUCK_THRESHOLD - time_since_progress))
            # Only log every 5 minutes to reduce noise
            if [ $((time_since_progress % 300)) -lt $CHECK_INTERVAL ]; then
                log "No recent progress. Stuck detection in ${remaining}s"
            fi
        fi
    fi

    # Heartbeat every 5 minutes
    if [ $((current_time % 300)) -lt $CHECK_INTERVAL ]; then
        loop=$(get_loop_count)
        log_success "Heartbeat: Phase=$current_phase, loop=$loop, restarts=$restarts_this_hour, idle=${time_since_progress}s"
    fi

    sleep $CHECK_INTERVAL
done

log "Watchdog stopped"
