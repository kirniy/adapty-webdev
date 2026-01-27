#!/bin/bash

# =============================================================================
# RALPH PHASE 3 - Mobile Responsiveness Runner
# =============================================================================
# Runs mobile responsiveness testing with appropriate tools enabled.
# Does NOT use session continuation to avoid "Prompt too long" errors.
# =============================================================================

RALPH_DIR="/Users/kirniy/dev/adapty-dev/prototypes/achromatic-proto"
PROMPT_FILE="$RALPH_DIR/.ralph/PROMPT-PHASE3.md"
LOG_DIR="$RALPH_DIR/.ralph/logs"
OUTPUT_LOG="$RALPH_DIR/.ralph/ralph_phase3_output.log"
STOP_FILE="$RALPH_DIR/.ralph/STOP"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

log() {
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "${BLUE}[$timestamp]${NC} $1"
    echo "[$timestamp] $1" >> "$OUTPUT_LOG"
}

log_success() {
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "${GREEN}[$timestamp] OK:${NC} $1"
    echo "[$timestamp] OK: $1" >> "$OUTPUT_LOG"
}

log_error() {
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "${RED}[$timestamp] ERROR:${NC} $1"
    echo "[$timestamp] ERROR: $1" >> "$OUTPUT_LOG"
}

# Create log directory if needed
mkdir -p "$LOG_DIR"

# Clear old output log
> "$OUTPUT_LOG"

echo ""
echo "=============================================="
echo "  RALPH PHASE 3 - Mobile Responsiveness"
echo "=============================================="
echo ""
echo "  Prompt: $PROMPT_FILE"
echo "  Log: $OUTPUT_LOG"
echo "  To stop: touch $STOP_FILE"
echo "=============================================="
echo ""

rm -f "$STOP_FILE"

# Change to project directory
cd "$RALPH_DIR"

# Run count
run_count=0
max_runs=20  # Maximum number of runs
success_count=0

while [ $run_count -lt $max_runs ]; do
    # Check stop file
    if [ -f "$STOP_FILE" ]; then
        log "Stop file detected. Exiting."
        break
    fi

    run_count=$((run_count + 1))
    log "Starting run #$run_count / $max_runs..."

    timestamp=$(date '+%Y-%m-%d_%H-%M-%S')
    run_log="$LOG_DIR/phase3_run_${timestamp}.log"

    # Run Claude with appropriate tools for mobile testing
    # No --continue flag to avoid accumulated context
    # Include all tools needed for mobile responsiveness work
    timeout 1200 claude \
        --output-format json \
        --allowedTools Read Write Edit Bash Grep Glob Task Skill TodoWrite \
        -p "$(cat "$PROMPT_FILE")" \
        > "$run_log" 2>&1

    exit_code=$?

    # Check results
    if [ -f "$run_log" ]; then
        file_size=$(stat -f%z "$run_log" 2>/dev/null || echo "0")

        if [ "$file_size" -gt 100 ]; then
            # Check for success
            if /usr/bin/grep -q '"is_error":false' "$run_log"; then
                success_count=$((success_count + 1))
                log_success "Run #$run_count completed successfully (total successes: $success_count)"

                # Extract result summary
                result=$(/usr/bin/grep -o '"result":"[^"]*"' "$run_log" 2>/dev/null | head -1 | cut -d'"' -f4)
                if [ -n "$result" ]; then
                    log "Result: ${result:0:200}..."
                fi
            else
                # Check for specific errors
                if /usr/bin/grep -q "Prompt is too long" "$run_log"; then
                    log_error "Prompt too long error - this shouldn't happen!"
                    break
                fi

                if /usr/bin/grep -q "rate" "$run_log"; then
                    log "Possible rate limiting. Waiting 5 minutes..."
                    sleep 300
                    continue
                fi

                log_error "Run #$run_count had errors"
            fi
        else
            log_error "Run #$run_count produced no output (size: $file_size)"
        fi
    else
        log_error "Run #$run_count failed - no log file created"
    fi

    if [ $exit_code -ne 0 ]; then
        log "Exit code: $exit_code"
        if [ $exit_code -eq 124 ]; then
            log "Timeout reached (20 min)"
        fi
    fi

    # Check for file changes as progress indicator
    changes=$(find "$RALPH_DIR/apps/marketing/components" -name "*.tsx" -mmin -5 2>/dev/null | wc -l | tr -d ' ')
    if [ "$changes" -gt 0 ]; then
        log_success "Progress: $changes files modified in last 5 minutes"
    fi

    # Brief pause between runs
    log "Waiting 30 seconds before next run..."
    sleep 30
done

log "Phase 3 runner finished after $run_count runs ($success_count successful)"

# Final summary
echo ""
echo "=============================================="
echo "  PHASE 3 COMPLETE"
echo "=============================================="
echo "  Total runs: $run_count"
echo "  Successful: $success_count"
echo "=============================================="
