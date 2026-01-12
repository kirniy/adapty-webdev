#!/bin/bash

# =============================================================================
# ADAPTY Redesign - Prototype Generator Script
# Creates a new Next.js prototype project with specified design system
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
SKELETON_DIR="$PROJECT_ROOT/skeleton"
DS_DIR="$PROJECT_ROOT/design-systems"
PROTOTYPES_DIR="$PROJECT_ROOT/prototypes"

# Help message
show_help() {
    echo -e "${BLUE}ADAPTY Prototype Generator${NC}"
    echo ""
    echo "Usage: $0 <name> <design-system> [phase]"
    echo ""
    echo "Arguments:"
    echo "  name          Prototype name (e.g., ds1, ds2, shadcn-ui)"
    echo "  design-system Design system to use (1-5 or path)"
    echo "  phase         Phase A or B (default: auto-detect)"
    echo ""
    echo "Examples:"
    echo "  $0 ds1 1 a                # Phase A: DS1 with Linear-inspired"
    echo "  $0 ds2 2 a                # Phase A: DS2 with Attio-inspired"
    echo "  $0 shadcn-ui 1 b          # Phase B: shadcn-ui with DS1"
    echo ""
    echo "Design Systems:"
    echo "  1 - Linear-inspired"
    echo "  2 - Attio-inspired"
    echo "  3 - Polar-minimal"
    echo "  4 - Vercel-bold"
    echo "  5 - Hybrid-premium"
}

# Validate arguments
if [ "$#" -lt 2 ]; then
    show_help
    exit 1
fi

PROTO_NAME="$1"
DS_NUM="$2"
PHASE="${3:-a}"

# Determine design system path
case "$DS_NUM" in
    1) DS_PATH="$DS_DIR/ds-1-linear-inspired" ;;
    2) DS_PATH="$DS_DIR/ds-2-attio-inspired" ;;
    3) DS_PATH="$DS_DIR/ds-3-polar-minimal" ;;
    4) DS_PATH="$DS_DIR/ds-4-vercel-bold" ;;
    5) DS_PATH="$DS_DIR/ds-5-hybrid-premium" ;;
    *) DS_PATH="$DS_NUM" ;;
esac

# Determine output directory based on phase
if [ "${PHASE,,}" = "a" ]; then
    OUTPUT_DIR="$PROTOTYPES_DIR/phase-a-design-systems/proto-$PROTO_NAME"
else
    OUTPUT_DIR="$PROTOTYPES_DIR/phase-b-libraries/proto-$PROTO_NAME"
fi

echo -e "${BLUE}=== ADAPTY Prototype Generator ===${NC}"
echo ""
echo -e "Prototype: ${GREEN}$PROTO_NAME${NC}"
echo -e "Design System: ${GREEN}$DS_PATH${NC}"
echo -e "Phase: ${GREEN}$PHASE${NC}"
echo -e "Output: ${GREEN}$OUTPUT_DIR${NC}"
echo ""

# Check if prototype already exists
if [ -d "$OUTPUT_DIR" ]; then
    echo -e "${YELLOW}Warning: Prototype already exists at $OUTPUT_DIR${NC}"
    read -p "Overwrite? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${RED}Aborted${NC}"
        exit 1
    fi
    rm -rf "$OUTPUT_DIR"
fi

# Create prototype directory
mkdir -p "$OUTPUT_DIR"
cd "$OUTPUT_DIR"

echo -e "${BLUE}Creating Next.js project...${NC}"

# Create Next.js project with specific options
npx create-next-app@latest . \
    --typescript \
    --tailwind \
    --eslint \
    --app \
    --src-dir \
    --import-alias "@/*" \
    --no-git \
    --yes

echo -e "${GREEN}Next.js project created${NC}"

# Copy design system tokens
echo -e "${BLUE}Copying design system tokens...${NC}"

if [ -f "$DS_PATH/tokens.css" ]; then
    cp "$DS_PATH/tokens.css" "$OUTPUT_DIR/src/styles/tokens.css"
    echo -e "${GREEN}Copied tokens.css${NC}"
fi

if [ -f "$DS_PATH/tailwind.config.ts" ]; then
    cp "$DS_PATH/tailwind.config.ts" "$OUTPUT_DIR/tailwind.config.ts"
    echo -e "${GREEN}Copied tailwind.config.ts${NC}"
fi

# Copy skeleton assets
echo -e "${BLUE}Copying skeleton assets...${NC}"

if [ -d "$SKELETON_DIR/assets" ]; then
    mkdir -p "$OUTPUT_DIR/public"
    cp -r "$SKELETON_DIR/assets/"* "$OUTPUT_DIR/public/"
    echo -e "${GREEN}Copied skeleton assets${NC}"
fi

# Create globals.css with token import
echo -e "${BLUE}Updating globals.css...${NC}"

cat > "$OUTPUT_DIR/src/app/globals.css" << 'EOF'
@import '../styles/tokens.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Base styles */
body {
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-sans);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Selection styling */
::selection {
  background: var(--color-primary);
  color: var(--text-inverse);
}

/* Focus visible */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
EOF

echo -e "${GREEN}Updated globals.css${NC}"

# Create placeholder page
echo -e "${BLUE}Creating placeholder page...${NC}"

cat > "$OUTPUT_DIR/src/app/page.tsx" << 'EOF'
/**
 * ADAPTY Homepage Prototype
 *
 * This is a placeholder. Implement the 14 sections from SKELETON.md:
 * 1. Header / Navigation
 * 2. Hero Section
 * 3. Trusted By Section
 * 4. Feature Sections (6 total)
 * 5. Integrations Marquee
 * 6. Role Cards Section
 * 7. Stats Section
 * 8. SDK Code Snippet Section
 * 9. Testimonials Carousel
 * 10. G2 Badges Section
 * 11. Case Studies Section
 * 12. Enterprise Section
 * 13. Final CTA Section
 * 14. Footer
 */

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* TODO: Implement sections from SKELETON.md */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">ADAPTY Prototype</h1>
          <p className="text-foreground-secondary">
            Design System ready. Implement 14 sections from SKELETON.md
          </p>
        </div>
      </div>
    </main>
  );
}
EOF

echo -e "${GREEN}Created placeholder page${NC}"

# Create Vercel config
echo -e "${BLUE}Creating Vercel config...${NC}"

cat > "$OUTPUT_DIR/vercel.json" << EOF
{
  "name": "adapty-proto-$PROTO_NAME",
  "framework": "nextjs",
  "buildCommand": "next build",
  "devCommand": "next dev",
  "installCommand": "npm install"
}
EOF

echo -e "${GREEN}Created vercel.json${NC}"

# Create README
cat > "$OUTPUT_DIR/README.md" << EOF
# ADAPTY Prototype: $PROTO_NAME

## Design System
- Based on: DS$DS_NUM
- Phase: $PHASE

## Development

\`\`\`bash
npm run dev
\`\`\`

## Implementation Checklist

- [ ] Section 1: Header / Navigation
- [ ] Section 2: Hero Section
- [ ] Section 3: Trusted By Section
- [ ] Section 4A: Paywall A/B Testing
- [ ] Section 4B: Refund Saver
- [ ] Section 4C: Subscription Analytics
- [ ] Section 4D: No-Code Paywall Builder
- [ ] Section 4E: FunnelFox (Web-to-App)
- [ ] Section 4F: Revenue Sync (Integrations)
- [ ] Section 5: Integrations Marquee
- [ ] Section 6: Role Cards Section
- [ ] Section 7: Stats Section
- [ ] Section 8: SDK Code Snippet Section
- [ ] Section 9: Testimonials Carousel
- [ ] Section 10: G2 Badges Section
- [ ] Section 11: Case Studies Section
- [ ] Section 12: Enterprise Section
- [ ] Section 13: Final CTA Section
- [ ] Section 14: Footer

## Deployment

Deploy to Vercel:
\`\`\`bash
vercel
\`\`\`
EOF

echo ""
echo -e "${GREEN}=== Prototype Created Successfully ===${NC}"
echo ""
echo -e "Location: ${BLUE}$OUTPUT_DIR${NC}"
echo ""
echo "Next steps:"
echo "  1. cd $OUTPUT_DIR"
echo "  2. npm run dev"
echo "  3. Implement sections from SKELETON.md"
echo "  4. vercel (to deploy)"
