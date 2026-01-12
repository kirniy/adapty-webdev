#!/bin/bash

# =============================================================================
# ADAPTY Redesign - Comparison Report Generator
# Generates a comparison report across all prototypes
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

# Configuration
PROTOTYPES_DIR="$PROJECT_ROOT/prototypes"
REPORTS_DIR="$PROJECT_ROOT/docs/reports"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

# Help message
show_help() {
    echo -e "${BLUE}ADAPTY Comparison Report Generator${NC}"
    echo ""
    echo "Usage: $0 [phase] [--lighthouse] [--screenshots]"
    echo ""
    echo "Arguments:"
    echo "  phase         Phase to compare: a, b, or all (default: all)"
    echo "  --lighthouse  Run Lighthouse audits (requires Chrome)"
    echo "  --screenshots Capture screenshots (requires Playwright)"
    echo ""
    echo "Examples:"
    echo "  $0 a                       # Compare Phase A prototypes"
    echo "  $0 b --lighthouse          # Compare Phase B with Lighthouse"
    echo "  $0 all --screenshots       # Full comparison with screenshots"
}

PHASE="${1:-all}"
RUN_LIGHTHOUSE=false
RUN_SCREENSHOTS=false

# Parse flags
for arg in "$@"; do
    case $arg in
        --lighthouse) RUN_LIGHTHOUSE=true ;;
        --screenshots) RUN_SCREENSHOTS=true ;;
    esac
done

echo -e "${BLUE}=== ADAPTY Comparison Report Generator ===${NC}"
echo ""
echo -e "Phase: ${GREEN}$PHASE${NC}"
echo -e "Lighthouse: ${GREEN}$RUN_LIGHTHOUSE${NC}"
echo -e "Screenshots: ${GREEN}$RUN_SCREENSHOTS${NC}"
echo ""

# Create reports directory
mkdir -p "$REPORTS_DIR"

# Report file
REPORT_FILE="$REPORTS_DIR/comparison_${PHASE}_$TIMESTAMP.md"

# Start report
cat > "$REPORT_FILE" << EOF
# ADAPTY Prototype Comparison Report

**Generated**: $(date "+%Y-%m-%d %H:%M:%S")
**Phase**: $PHASE

---

## Summary

| Prototype | Status | URL | Bundle Size | LCP | FID | CLS |
|-----------|--------|-----|-------------|-----|-----|-----|
EOF

# Function to get prototype info
get_prototype_info() {
    local proto_dir="$1"
    local proto_name=$(basename "$proto_dir")
    local url="N/A"
    local status="Not deployed"
    local bundle_size="N/A"

    # Check for deployment URL
    if [ -f "$proto_dir/.vercel-url" ]; then
        url=$(cat "$proto_dir/.vercel-url")
        status="Deployed"
    fi

    # Get bundle size if built
    if [ -d "$proto_dir/.next" ]; then
        bundle_size=$(du -sh "$proto_dir/.next" 2>/dev/null | cut -f1)
    fi

    echo "| $proto_name | $status | $url | $bundle_size | - | - | - |"
}

# Collect prototypes based on phase
if [ "$PHASE" = "a" ] || [ "$PHASE" = "all" ]; then
    echo -e "${BLUE}Analyzing Phase A prototypes...${NC}"
    echo "" >> "$REPORT_FILE"
    echo "### Phase A: Design Systems" >> "$REPORT_FILE"
    echo "" >> "$REPORT_FILE"

    for proto in "$PROTOTYPES_DIR/phase-a-design-systems/proto-"*; do
        if [ -d "$proto" ]; then
            get_prototype_info "$proto" >> "$REPORT_FILE"
        fi
    done
fi

if [ "$PHASE" = "b" ] || [ "$PHASE" = "all" ]; then
    echo -e "${BLUE}Analyzing Phase B prototypes...${NC}"
    echo "" >> "$REPORT_FILE"
    echo "### Phase B: UI Libraries" >> "$REPORT_FILE"
    echo "" >> "$REPORT_FILE"

    for proto in "$PROTOTYPES_DIR/phase-b-libraries/proto-"*; do
        if [ -d "$proto" ]; then
            get_prototype_info "$proto" >> "$REPORT_FILE"
        fi
    done
fi

# Run Lighthouse if requested
if [ "$RUN_LIGHTHOUSE" = true ]; then
    echo -e "${BLUE}Running Lighthouse audits...${NC}"
    echo "" >> "$REPORT_FILE"
    echo "## Lighthouse Scores" >> "$REPORT_FILE"
    echo "" >> "$REPORT_FILE"
    echo "| Prototype | Performance | Accessibility | Best Practices | SEO |" >> "$REPORT_FILE"
    echo "|-----------|-------------|---------------|----------------|-----|" >> "$REPORT_FILE"

    # Check for lighthouse
    if ! command -v lighthouse &> /dev/null; then
        echo -e "${YELLOW}Lighthouse CLI not found. Install with: npm install -g lighthouse${NC}"
    else
        for proto in "$PROTOTYPES_DIR"/*/proto-*; do
            if [ -f "$proto/.vercel-url" ]; then
                url=$(cat "$proto/.vercel-url")
                proto_name=$(basename "$proto")
                echo -e "  Auditing ${GREEN}$proto_name${NC}..."

                # Run lighthouse
                lighthouse "$url" \
                    --output=json \
                    --output-path="$REPORTS_DIR/${proto_name}_lighthouse.json" \
                    --chrome-flags="--headless" \
                    --quiet 2>/dev/null || true

                if [ -f "$REPORTS_DIR/${proto_name}_lighthouse.json" ]; then
                    perf=$(jq '.categories.performance.score * 100 | floor' "$REPORTS_DIR/${proto_name}_lighthouse.json" 2>/dev/null || echo "N/A")
                    a11y=$(jq '.categories.accessibility.score * 100 | floor' "$REPORTS_DIR/${proto_name}_lighthouse.json" 2>/dev/null || echo "N/A")
                    bp=$(jq '.categories["best-practices"].score * 100 | floor' "$REPORTS_DIR/${proto_name}_lighthouse.json" 2>/dev/null || echo "N/A")
                    seo=$(jq '.categories.seo.score * 100 | floor' "$REPORTS_DIR/${proto_name}_lighthouse.json" 2>/dev/null || echo "N/A")
                    echo "| $proto_name | $perf | $a11y | $bp | $seo |" >> "$REPORT_FILE"
                fi
            fi
        done
    fi
fi

# Capture screenshots if requested
if [ "$RUN_SCREENSHOTS" = true ]; then
    echo -e "${BLUE}Capturing screenshots...${NC}"
    echo "" >> "$REPORT_FILE"
    echo "## Screenshots" >> "$REPORT_FILE"
    echo "" >> "$REPORT_FILE"

    SCREENSHOTS_DIR="$REPORTS_DIR/screenshots_$TIMESTAMP"
    mkdir -p "$SCREENSHOTS_DIR"

    # Check for playwright
    if ! npx playwright --version &> /dev/null; then
        echo -e "${YELLOW}Playwright not found. Install with: npm install -g playwright${NC}"
    else
        for proto in "$PROTOTYPES_DIR"/*/proto-*; do
            if [ -f "$proto/.vercel-url" ]; then
                url=$(cat "$proto/.vercel-url")
                proto_name=$(basename "$proto")
                echo -e "  Capturing ${GREEN}$proto_name${NC}..."

                # Capture with Playwright
                npx playwright screenshot \
                    --full-page \
                    --viewport-size="1440,900" \
                    "$url" \
                    "$SCREENSHOTS_DIR/${proto_name}_desktop.png" 2>/dev/null || true

                npx playwright screenshot \
                    --full-page \
                    --viewport-size="375,812" \
                    "$url" \
                    "$SCREENSHOTS_DIR/${proto_name}_mobile.png" 2>/dev/null || true

                echo "### $proto_name" >> "$REPORT_FILE"
                echo "" >> "$REPORT_FILE"
                echo "Desktop: ![Desktop](screenshots_$TIMESTAMP/${proto_name}_desktop.png)" >> "$REPORT_FILE"
                echo "" >> "$REPORT_FILE"
                echo "Mobile: ![Mobile](screenshots_$TIMESTAMP/${proto_name}_mobile.png)" >> "$REPORT_FILE"
                echo "" >> "$REPORT_FILE"
            fi
        done
    fi
fi

# Add recommendations section
cat >> "$REPORT_FILE" << 'EOF'

---

## Recommendations

### Phase A Winner
<!-- Fill in after visual comparison -->
**Winner**: TBD
**Rationale**: TBD

### Phase B Winner (if applicable)
<!-- Fill in after library comparison -->
**Winner**: TBD
**Rationale**: TBD

---

## Next Steps

1. [ ] Review all prototypes visually
2. [ ] Compare against design criteria
3. [ ] Select winner(s)
4. [ ] Document decision rationale
5. [ ] Proceed to next phase

EOF

echo ""
echo -e "${GREEN}=== Report Generated ===${NC}"
echo ""
echo -e "Report: ${BLUE}$REPORT_FILE${NC}"
echo ""
echo "Done!"
