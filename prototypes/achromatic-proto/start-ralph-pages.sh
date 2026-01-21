#!/bin/bash
# Start Ralph for page creation task
# Uses .ralph-pages/ directory instead of .ralph/

cd /Users/kirniy/dev/adapty-dev/prototypes/achromatic-proto

# Temporarily swap directories
if [ -d ".ralph" ]; then
    mv .ralph .ralph-animations-backup
fi
mv .ralph-pages .ralph

# Run Ralph
~/.ralph/ralph_loop.sh --monitor

# Restore after Ralph exits
mv .ralph .ralph-pages
if [ -d ".ralph-animations-backup" ]; then
    mv .ralph-animations-backup .ralph
fi
