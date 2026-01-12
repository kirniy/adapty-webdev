#!/bin/bash

# =============================================================================
# ADAPTY Redesign - Prototype Deployment Script
# Deploys a prototype to Vercel and updates tracking
# =============================================================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Help message
show_help() {
    echo -e "${BLUE}ADAPTY Prototype Deployer${NC}"
    echo ""
    echo "Usage: $0 <prototype-folder> [--prod]"
    echo ""
    echo "Arguments:"
    echo "  prototype-folder  Path to prototype (relative to prototypes/)"
    echo "  --prod            Deploy to production (default: preview)"
    echo ""
    echo "Examples:"
    echo "  $0 phase-a-design-systems/proto-ds1"
    echo "  $0 phase-b-libraries/proto-shadcn-ui --prod"
}

# Validate arguments
if [ "$#" -lt 1 ]; then
    show_help
    exit 1
fi

PROTO_PATH="$1"
PROD_FLAG=""

if [ "$2" = "--prod" ]; then
    PROD_FLAG="--prod"
fi

# Resolve full path
if [[ "$PROTO_PATH" != /* ]]; then
    FULL_PATH="$PROJECT_ROOT/prototypes/$PROTO_PATH"
else
    FULL_PATH="$PROTO_PATH"
fi

# Check if directory exists
if [ ! -d "$FULL_PATH" ]; then
    echo -e "${RED}Error: Directory not found: $FULL_PATH${NC}"
    exit 1
fi

# Extract prototype name
PROTO_NAME=$(basename "$FULL_PATH")

echo -e "${BLUE}=== ADAPTY Prototype Deployer ===${NC}"
echo ""
echo -e "Prototype: ${GREEN}$PROTO_NAME${NC}"
echo -e "Path: ${GREEN}$FULL_PATH${NC}"
echo -e "Mode: ${GREEN}${PROD_FLAG:-preview}${NC}"
echo ""

cd "$FULL_PATH"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}Installing Vercel CLI...${NC}"
    npm install -g vercel
fi

# Build the project first
echo -e "${BLUE}Building project...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}Build failed!${NC}"
    exit 1
fi

echo -e "${GREEN}Build successful${NC}"

# Deploy to Vercel
echo -e "${BLUE}Deploying to Vercel...${NC}"

if [ -n "$PROD_FLAG" ]; then
    DEPLOY_OUTPUT=$(vercel --prod --yes 2>&1)
else
    DEPLOY_OUTPUT=$(vercel --yes 2>&1)
fi

# Extract URL from output
DEPLOY_URL=$(echo "$DEPLOY_OUTPUT" | grep -oE 'https://[a-zA-Z0-9.-]+\.vercel\.app' | head -1)

if [ -z "$DEPLOY_URL" ]; then
    echo -e "${YELLOW}Warning: Could not extract deployment URL${NC}"
    echo "$DEPLOY_OUTPUT"
else
    echo ""
    echo -e "${GREEN}=== Deployment Successful ===${NC}"
    echo ""
    echo -e "URL: ${BLUE}$DEPLOY_URL${NC}"
    echo ""

    # Update README with deployment URL
    README_FILE="$PROJECT_ROOT/prototypes/README.md"
    if [ -f "$README_FILE" ]; then
        # Update the deployment table
        if grep -q "| $PROTO_NAME |" "$README_FILE"; then
            # Update existing entry
            sed -i '' "s|$PROTO_NAME | TBD | Pending|$PROTO_NAME | $DEPLOY_URL | Deployed|" "$README_FILE" 2>/dev/null || \
            sed -i "s|$PROTO_NAME | TBD | Pending|$PROTO_NAME | $DEPLOY_URL | Deployed|" "$README_FILE"
            echo -e "${GREEN}Updated README.md with deployment URL${NC}"
        fi
    fi

    # Save URL to a file for easy reference
    echo "$DEPLOY_URL" > "$FULL_PATH/.vercel-url"
    echo -e "${GREEN}Saved URL to .vercel-url${NC}"
fi

echo ""
echo "Done!"
