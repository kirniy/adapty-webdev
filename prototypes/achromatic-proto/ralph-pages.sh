#!/bin/bash
# Ralph wrapper for page creation task
# Uses .ralph-pages/ instead of .ralph/

# Override RALPH_DIR for this run
export RALPH_DIR=".ralph-pages"

# Create necessary subdirectories
mkdir -p .ralph-pages/logs .ralph-pages/docs/generated

# Copy the main Ralph script and modify it inline
RALPH_HOME="${RALPH_HOME:-$HOME/.ralph}"

# Run Ralph with modified config
sed 's/RALPH_DIR=".ralph"/RALPH_DIR=".ralph-pages"/' "$RALPH_HOME/ralph_loop.sh" | bash -s -- "$@"
