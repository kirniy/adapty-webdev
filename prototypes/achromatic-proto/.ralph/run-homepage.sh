#!/bin/bash

# =============================================================================
# RALPH: Homepage Redesign Runner
# =============================================================================
# Implements the Linear-style homepage simplification.
# Runs through Phase 0-3 systematically.
# =============================================================================

RALPH_DIR="/Users/kirniy/dev/adapty-dev/prototypes/achromatic-proto"
PROMPT_FILE="$RALPH_DIR/.ralph/PROMPT-HOMEPAGE-REDESIGN.md"
LOG_DIR="$RALPH_DIR/.ralph/logs"
OUTPUT_LOG="$RALPH_DIR/.ralph/ralph_homepage_output.log"
STOP_FILE="$RALPH_DIR/.ralph/STOP"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
CYAN='\033[0;36m'
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

log_phase() {
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo ""
    echo -e "${CYAN}[$timestamp] === $1 ===${NC}"
    echo "[$timestamp] === $1 ===" >> "$OUTPUT_LOG"
}

# Create log directory if needed
mkdir -p "$LOG_DIR"

# Clear old output log
> "$OUTPUT_LOG"

echo ""
echo "=============================================="
echo "  RALPH: Homepage Redesign"
echo "=============================================="
echo ""
echo "  Target: 11,113px -> ~4,550px (-59%)"
echo "  Sections: 12 -> 8"
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
max_runs=30  # More runs for comprehensive redesign
success_count=0

while [ $run_count -lt $max_runs ]; do
    # Check stop file
    if [ -f "$STOP_FILE" ]; then
        log "Stop file detected. Exiting."
        break
    fi

    run_count=$((run_count + 1))
    log_phase "RUN #$run_count / $max_runs"

    timestamp=$(date '+%Y-%m-%d_%H-%M-%S')
    run_log="$LOG_DIR/homepage_run_${timestamp}.log"

    # Run Claude with all necessary tools
    # No --continue flag to avoid context buildup
    timeout 1800 claude \
        --output-format json \
        --allowedTools Read Write Edit Bash Grep Glob Task \
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
                log_success "Run #$run_count completed (total: $success_count)"

                # Extract what was done
                result=$(/usr/bin/grep -o '"result":"[^"]*"' "$run_log" 2>/dev/null | head -1 | cut -d'"' -f4)
                if [ -n "$result" ]; then
                    log "Result: ${result:0:300}..."
                fi
            else
                # Check for specific errors
                if /usr/bin/grep -q "Prompt is too long" "$run_log"; then
                    log_error "Prompt too long - shouldn't happen with fresh starts"
                    break
                fi

                if /usr/bin/grep -q "rate" "$run_log"; then
                    log "Rate limiting detected. Waiting 5 minutes..."
                    sleep 300
                    continue
                fi

                log_error "Run #$run_count had errors"
            fi
        else
            log_error "Run #$run_count produced no output"
        fi
    else
        log_error "No log file created"
    fi

    if [ $exit_code -ne 0 ]; then
        log "Exit code: $exit_code"
        if [ $exit_code -eq 124 ]; then
            log "Timeout reached (30 min)"
        fi
    fi

    # Check progress indicators
    log "Checking progress..."

    # Check if blog.tsx is deleted
    if [ ! -f "$RALPH_DIR/apps/marketing/components/sections/blog.tsx" ]; then
        log_success "Phase 0.1: Blog section deleted"
    fi

    # Check for recent file changes
    changes=$(find "$RALPH_DIR/apps/marketing" -name "*.tsx" -mmin -10 2>/dev/null | wc -l | tr -d ' ')
    if [ "$changes" -gt 0 ]; then
        log_success "Progress: $changes files modified in last 10 minutes"
    fi

    # TypeScript check
    log "Running TypeScript check..."
    cd "$RALPH_DIR"
    if pnpm --filter marketing tsc --noEmit > /dev/null 2>&1; then
        log_success "TypeScript: No errors"
    else
        log_error "TypeScript errors detected"
    fi

    # Brief pause between runs
    log "Waiting 30 seconds before next run..."
    sleep 30
done

log_phase "COMPLETE"
log "Finished after $run_count runs ($success_count successful)"

# Final summary
echo ""
echo "=============================================="
echo "  HOMEPAGE REDESIGN COMPLETE"
echo "=============================================="
echo "  Total runs: $run_count"
echo "  Successful: $success_count"
echo ""
echo "  Next steps:"
echo "  1. Review changes in apps/marketing/"
echo "  2. Run: pnpm --filter marketing dev"
echo "  3. Check page at http://localhost:3001"
echo "=============================================="
