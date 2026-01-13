---
project: adapty-redesign
version: 3.2.0
last_updated: 2026-01-13T22:30:00Z
owner: kirill-kholodenko
stakeholder: sergey-muratov
phase: decision-point
status: paused-for-review
tags: [redesign, nextjs, tailwind, design-system, shadcn-ui, tailark]
---

# ADAPTY Website Redesign - Navigation & Context

> **IMPORTANT**: This is a living navigation document. Update after every significant change.
> Last significant update: 2026-01-13 - Phase B assessment complete. shadcn/ui underperformed vs Phase A.

---

## SESSION START INSTRUCTIONS (READ FIRST)

### Current Status: DECISION POINT

**Phase B (shadcn/ui) has been evaluated and found lacking.**

Results:
- Phase A (vanilla Tailwind): Quality 7/10, unique, full control
- Phase B (shadcn/ui): Quality 4/10, generic, over-engineered

### What Exists Now

| Prototype | Location | Status | Quality |
|-----------|----------|--------|---------|
| **Phase A** | `/prototypes/adapty-prototype/` | DEPLOYED | Good base |
| **DS1-Linear (shadcn)** | `/prototypes/phase-b-shadcn/proto-ds1-linear/` | 14/14 sections | Weak |
| **DS2-Attio (shadcn)** | `/prototypes/phase-b-shadcn/proto-ds2-attio/` | 10/14 sections | Weak |
| **DS3-Polar (shadcn)** | `/prototypes/phase-b-shadcn/proto-ds3-polar/` | Scaffolded only | - |

### Awaiting Decision

Three options proposed to Sergey (see `/messages/03-phase-b-assessment/message.md`):

**Option A (Recommended):** Enhance Phase A prototype with polish and animations
**Option B:** Try Tailark marketing blocks (shadcn extension for landing pages)
**Option C:** Hybrid - vanilla Tailwind for marketing, shadcn for functional components

### Skills for Next Phase
```
1. frontend-design        - Distinctive, production-grade UI
2. frontend-ui-ux         - Designer-turned-developer mindset
3. (conditional) styling-with-shadcn - Only if Option B or C chosen
```

---

## Quick Navigation

| Area | Path | Purpose | Status |
|------|------|---------|--------|
| **Project Root** | `/` | Main workspace | Active |
| **Reference Source** | `/adapty-pt2/` | READ-ONLY source of truth | Locked |
| **Design Systems** | `/design-systems/` | 5 DS variants for testing | ✅ Tokens filled |
| **Prototypes** | `/prototypes/` | Phase A & B builds | ✅ Deployed |
| **Skeleton** | `/skeleton/` | Shared content/assets | Complete |
| **References** | `/references/` | Site analysis data | ✅ COMPLETE |
| **Messages** | `/messages/` | Sergey communications | 01-roadmap ready |
| **Scripts** | `/scripts/` | Automation tools | Ready |
| **Docs** | `/docs/` | Project documentation | Partial |
| **Reports** | `/reports/` | Audits, comparisons, research | Active |
| **Research** | `/research/` | Phase B library research | ✅ Complete |

---

## Current State (UPDATE THIS SECTION REGULARLY)

```yaml
current_phase: "Decision Point - Awaiting Sergey's direction"
next_phase: "TBD based on decision (Option A, B, or C)"
blocking_tasks:
  - Awaiting stakeholder decision on direction

# Completed Work
completed_phases:
  phase_a:
    status: "COMPLETE - DEPLOYED"
    url: "https://adapty-prototype.vercel.app"
    quality: "7/10 - Good base, room for polish"
    sections: "14/14"
    verdict: "WINNER - vanilla Tailwind provides more control"

  phase_b_part_1_assessment:
    status: "EVALUATED - NOT RECOMMENDED"
    quality: "4/10 - Generic, over-engineered"
    conclusion: "shadcn/ui adds friction for marketing sites"
    prototypes_built:
      - "proto-ds1-linear: 14/14 sections (weak result)"
      - "proto-ds2-attio: 10/14 sections (weak result)"
      - "proto-ds3-polar: scaffolded only (not built)"
      - "proto-ds4-vercel: not started"
      - "proto-ds5-clerk: not started"

# Proposed Options (see /messages/03-phase-b-assessment/message.md)
options:
  option_a:
    name: "Enhance Phase A"
    description: "Polish existing prototype with animations"
    recommended: true
  option_b:
    name: "Try Tailark"
    description: "Marketing blocks for landing pages"
    recommended: false
  option_c:
    name: "Hybrid approach"
    description: "Vanilla for marketing, shadcn for functional"
    recommended: false

# Key Learning
key_insight: >
  shadcn/ui is optimized for dashboards and apps, not landing pages.
  Marketing sites need pixel-perfect control that component libraries
  make harder, not easier. Phase A's vanilla Tailwind approach
  produced better results with similar effort.

# Phase A Reference (the winner)
phase_a_reference:
  location: "/prototypes/adapty-prototype"
  deployed: true
  url: "adapty-prototype.vercel.app"
  theme_switcher: "Top-right corner, persists via localStorage + URL ?ds=ds1-5"
  potential: "High - needs polish, animations, and focus on one DS"

# Design System DNA (for reference)
ds_token_summary:
  DS1_Linear: "8px buttons, 30px cards, #08090a bg, tight letter-spacing"
  DS2_Attio: "10px buttons, 12px cards, #ffffff bg, ghost buttons"
  DS3_Polar: "10px buttons, 10px cards, #171719 bg, ALL 150ms anims"
  DS4_Vercel: "6px buttons, 8px cards, #000000 bg, compound shadows"
  DS5_Clerk: "24px pill buttons, 12px cards, #F7F7F8 bg, purple accent"
```

---

## Directory Routers

### `/design-systems/` - Design System Variants

```
/design-systems/
├── README.md                      # DS methodology guide
├── ds-1-linear-inspired/          # Premium, micro-interactions
│   ├── design-system.md           # Full spec (TODO: fill from extraction)
│   ├── tokens.css                 # CSS custom properties (TODO: fill)
│   └── tailwind.config.ts         # Tailwind extension (TODO: fill)
├── ds-2-attio-inspired/           # Light, hierarchical
├── ds-3-polar-minimal/            # Clean, code-focused
├── ds-4-vercel-bold/              # Colorful, metrics
└── ds-5-hybrid-premium/           # Best of all
```

**Local conventions:**
- Each DS folder has identical structure
- `design-system.md` is human-readable spec
- `tokens.css` is CSS custom properties (copy to prototype)
- `tailwind.config.ts` extends base Tailwind (copy to prototype)
- Fill values from reference extraction data

### `/prototypes/` - Test Builds

```
/prototypes/
├── README.md                      # Testing methodology
├── adapty-prototype/              # ✅ Phase A - 5-way theme switcher (DEPLOYED)
│
├── phase-b-shadcn/                # 🔄 Phase B Part 1 - Pure shadcn/ui (IN PROGRESS)
│   ├── proto-ds1-linear/          # Dark, premium, 3D depth
│   ├── proto-ds2-attio/           # Light, editorial, serif
│   ├── proto-ds3-polar/           # Dark, minimal, code-first
│   ├── proto-ds4-vercel/          # True black, gradient hero
│   └── proto-ds5-clerk/           # Warm gray, pill buttons
│
└── phase-b-tailark/               # 📋 Phase B Part 2 - Tailark blocks (FUTURE)
    ├── proto-ds1-linear/          # DS1 with @tailark/* components
    ├── proto-ds2-attio/           # DS2 with @tailark/* components
    ├── proto-ds3-polar/           # DS3 with @tailark/* components
    ├── proto-ds4-vercel/          # DS4 with @tailark/* components
    └── proto-ds5-clerk/           # DS5 with @tailark/* components
```

**Phase B Part 1 (Current):**
- Each prototype is independent Next.js 15 + shadcn/ui project
- 5 fresh implementations from scratch (not ports of Phase A)
- Same content, different design system DNA
- Goal: Impress with visual quality and shadcn mastery

**Phase B Part 2 (Future):**
- Uses Tailark marketing blocks (https://tailark.com/docs)
- Integrates via shadcn CLI: `pnpm dlx shadcn add @tailark/{component}`
- Compare development speed vs hand-crafted approach

**Local conventions:**
- Each prototype is independent Next.js 15 project
- Content sourced from `/adapty-pt2/` (READ-ONLY reference)
- Assets copied from adapty-pt2/public/

### `/skeleton/` - Shared Test Content

```
/skeleton/
├── SKELETON.md                    # 14-section homepage spec (COMPLETE)
├── content/                       # JSON content files (TODO)
├── assets/                        # Images, logos, icons
│   ├── images/
│   ├── logos/
│   ├── icons/
│   ├── sdks/
│   └── integrations/
└── component-specs/               # Component architecture (TODO)
```

**Local conventions:**
- SKELETON.md is the source of truth for what to build
- All prototypes must implement all 14 sections
- Content must be IDENTICAL across prototypes
- Only styling/DS differs

### `/references/` - Design Analysis ✅ COMPLETE

```
/references/
├── linear/                        # ✅ Dark theme, 67+ animations
│   ├── analysis.md
│   └── raw-data/01-css-variables.json
├── attio/                         # ✅ Light theme, LAB colors
│   ├── analysis.md
│   └── raw-data/01-css-variables.json
├── polar/                         # ✅ Dark, minimal, fast
│   ├── analysis.md
│   └── raw-data/01-css-variables.json
├── vercel/                        # ✅ Comprehensive DS
│   ├── analysis.md
│   └── raw-data/01-css-variables.json
├── clerk/                         # ✅ Light, warm gray
│   ├── analysis.md
│   └── raw-data/01-css-variables.json
└── synthesis/                     # ✅ Cross-site insights
    ├── patterns.md                # Common patterns
    ├── differentiators.md         # Unique approaches
    └── recommendations.md         # Adapty recommendations
```

**Extraction Summary:**
| Site | Theme | Font | Key Feature |
|------|-------|------|-------------|
| Linear | Dark | Inter Variable | 67+ animations |
| Attio | Light | Inter + 3 others | LAB color space |
| Polar | Dark | Geist | Fast 150ms anims |
| Vercel | Dark | Geist + Space Grotesk | Bouncy easing |
| Clerk | Light | Suisse | Pill buttons |

### `/messages/` - Sergey Communications

```
/messages/
├── 01-roadmap/                    # Initial research roadmap
│   └── message.md
├── 02-gemini-audit/               # Gemini audit reports (v1-v3)
│   ├── audit-report.md
│   ├── audit-report-v2.md
│   └── audit-report-v3.md
├── 02-reference-analysis/         # Reference site analysis
├── 03-phase-b-assessment/         # NEW - Phase B results & recommendations
│   └── message.md                 # Russian: shadcn didn't work, options A/B/C
├── 03-ds-results/                 # Phase A results (legacy)
└── 04-library-results/            # Phase B results (legacy)
```

**Local conventions:**
- All messages to Sergey in RUSSIAN
- Include clear next steps and questions
- Reference specific deliverables
- Latest message: `/messages/03-phase-b-assessment/message.md`

### `/scripts/` - Automation

```
/scripts/
├── create-prototype.sh            # Scaffold new prototype (READY)
├── deploy-prototype.sh            # Deploy to Vercel (READY)
└── generate-comparison.sh         # Generate comparison report (READY)
```

**Usage:**
```bash
# Create Phase A prototype
./scripts/create-prototype.sh ds1 1 a

# Deploy prototype
./scripts/deploy-prototype.sh phase-a-design-systems/proto-ds1

# Generate comparison report
./scripts/generate-comparison.sh a --lighthouse --screenshots
```

### `/reports/` - Project Reports

```
/reports/
├── audits/                        # DS wireframe audits, code audits
│   └── 2026-01-13-1700-ds-wireframe-comparison-audit.md
├── comparisons/                   # Side-by-side comparisons
└── research/                      # Research summaries
```

**Local conventions:**
- All report files named with date-time prefix: `YYYY-MM-DD-HHMM-description.md`
- Audits compare prototypes vs reference sites
- Comparisons are side-by-side DS or library evaluations
- Research contains summarized findings

### `/research/` - Phase B Research

```
/research/
├── phase-b-ui-libraries-research.md     # Opus 4.5 research summary
├── phase-b-gemini-ui-libraries-research.md  # Gemini Deep Research
├── phase-b-report-sergey.docx           # Russian report for stakeholder
├── gemini-research-prompt.md            # Prompt used for Gemini research
├── ui-libraries/                        # Individual library analysis
└── animation-libraries/                 # Animation library research
```

**Research Conclusions (UPDATED 2026-01-13):**
- **INITIAL**: shadcn/ui + MCP integration for Claude
- **ACTUAL RESULT**: shadcn/ui underperformed for marketing pages
- **Lesson**: Component libraries add friction for landing pages where every pixel matters
- **Still worth trying**: Tailark marketing blocks (https://tailark.com/docs)
- **Animation**: ReactBits + 21stDev for micro-interactions (if proceeding with shadcn)
- **Recommendation**: Return to vanilla Tailwind (Phase A approach) for marketing sections

**Tailark Integration:**
```bash
# Add to components.json registries
"@tailark": "https://tailark.com/r"

# Install components
pnpm dlx shadcn add @tailark/hero-1
pnpm dlx shadcn add @tailark/features-1
```

---

## Stakeholder Requirements (from Slack 2026-01-13)

### Priority Pages (in order)
1. **Homepage** - most visits
2. **Pricing**
3. **Schedule a demo**
4. **Feature pages**: paywall-builder, paywall-ab-testing, onboarding-builder
5. **Role pages**: for-marketers, for-developers, for-app-owners

**Timeline**: Full site migration in ~1 month, starting with priority pages.

### Sergey's Design Direction
- **Theme preference**: LIGHT theme, less dense information
- **Primary refs**: Linear, Attio, Polar.sh, Vercel, Clerk
- **Caution**: Stripe (outdated, over-copied before)
- **Competitors to study**: RevenueCat, Superwall (information packaging)
- **Additional refs**: WorkOS, Railway, Render, Fly.io, Neon, Supabase, Webflow, Raycast, Retool, Notion, Figma, Slack

### External Resources
- **Figma board**: https://www.figma.com/board/p8dkKA6wUlntwTJFjU3bMB/New-website-references
- **Existing vibe-code**: https://next-adapty.vercel.app/
- **Preferred style examples**:
  - https://adapty.io/apple-ads-manager/
  - https://adapty.io/apple-fiscal-calendar/

### MCP Resources (from Sergey)
| Resource | MCP Available | Pricing |
|----------|---------------|---------|
| shadcn UI | https://ui.shadcn.com/docs/mcp | FREE |
| shadcn Blocks | https://www.shadcnblocks.com/pricing | Paid only |
| React Bits | https://reactbits.dev/get-started/mcp | Free (Pro coming) |
| 21st.dev | https://21st.dev/mcp | $16+ (API key) |
| shadcn/studio | https://shadcnstudio.com/mcp/onboarding | $200 PRO |

**Note**: Kirill has prior experience with 21st.dev Magic MCP from founder contact.

---

## Key Context

### Project Background
Kirill was hired as AI-native web developer at ADAPTY. Entry task (adapty-pt2) was successful recreation of ADAPTY website. Now doing full strategic redesign using systematic A/B testing.

### Core Methodology
```
Phase A: Test 5 Design Systems (vanilla Tailwind, NO libraries)
    ↓ Select winner DS
Phase B: Test 5 UI Libraries (WITH winner DS)
    ↓ Select winner Library
Phase C: (Optional) Cross-validation
```

### Key Meeting Insights
- **Code-First Design**: Figma is auxiliary, code is source of truth
- **Full Autonomy**: Kirill has carte blanche on design decisions
- **LEGO Approach**: Use shadcn/ui as foundation
- **Target Aesthetic**: Light, airy, modern (not "heavy luxury 2020")

### Reference Sites (Priority)
1. Linear - Micro-interactions, premium feel
2. Attio - Light theme, hierarchy
3. Polar.sh - Minimalism, code aesthetics
4. Vercel - Bold visuals, metrics
5. Clerk - Developer-friendly

### Tech Stack
- Next.js 15 (App Router)
- Tailwind CSS 4
- TypeScript
- shadcn/ui ecosystem
- Framer Motion
- Vercel deployment

### Icon Libraries (January 2026 Recommendations)

**Avoid**: Lucide (default shadcn) - too common, "cliche" look

**Recommended Alternatives**:
| Library | Icons | Weights | Best For | Package |
|---------|-------|---------|----------|---------|
| **Phosphor** | 4,500+ | 6 (thin, light, regular, bold, fill, duotone) | Premium apps, versatile | `@phosphor-icons/react` |
| **Tabler** | 4,500+ | 1 (outline) | Dashboards, SaaS | `@tabler/icons-react` |
| **Iconoir** | 1,500+ | 1 (outline) | Minimal, clean UI | `iconoir-react` |
| **Hugeicons** | 40,000+ | 9 styles | Maximum variety | `hugeicons-react` |

**Installation**:
```bash
# Phosphor (recommended for DS1 Linear - duotone weight fits premium aesthetic)
pnpm add @phosphor-icons/react

# Usage
import { Gear, User, ArrowRight } from "@phosphor-icons/react"
<Gear size={24} weight="duotone" />

# Tabler (recommended for dashboards)
pnpm add @tabler/icons-react

# Usage
import { IconSettings, IconUser } from "@tabler/icons-react"
<IconSettings size={24} stroke={1.5} />
```

**DS-Specific Recommendations**:
- **DS1 Linear**: Phosphor (duotone weight) - matches premium 3D depth aesthetic
- **DS2 Attio**: Phosphor (regular) or Iconoir - clean editorial feel
- **DS3 Polar**: Tabler - code/developer aesthetic
- **DS4 Vercel**: Phosphor (bold) - matches bold visual style
- **DS5 Clerk**: Phosphor (light/regular) - friendly, approachable

---

## Task System

### Active Tasks File
Location: `/docs/TASKS.md` (create if not exists)

### Task States
- `[ ]` Pending
- `[>]` In Progress
- `[x]` Complete
- `[!]` Blocked
- `[-]` Cancelled

### Phase A Completed Tasks
```
[x] Create repository structure
[x] Write initial CLAUDE.md
[x] Create SKELETON.md (14 sections)
[x] Extract assets from adapty-pt2
[x] Create DS templates (5 variants)
[x] Extract reference sites via Chrome - 5/5 COMPLETE
[x] Fill DS tokens from extraction data - ALL 5 COMPLETE
[x] Build Phase A prototype with 5-way theme switcher
[x] Deploy to Vercel (adapty-prototype.vercel.app)
[x] Phase B research (Gemini + Opus 4.5) - shadcn/ui selected
[x] DS wireframe comparison audit - all 5 variants analyzed
```

### Current Sprint: Phase B Part 1 (2026-01-13)
```
[x] Update CLAUDE.md for Phase B
[>] Create /prototypes/phase-b-shadcn/ structure
[>] Build proto-ds1-linear (Dark, premium, 3D depth)
[ ] Build proto-ds2-attio (Light, editorial, serif)
[ ] Build proto-ds3-polar (Dark, minimal, code-first)
[ ] Build proto-ds4-vercel (True black, gradient hero)
[ ] Build proto-ds5-clerk (Warm gray, pill buttons)
[ ] Deploy all 5 to Vercel
[ ] Create comparison report
[ ] Present to Sergey
```

### Future: Phase B Part 2 (Tailark)
```
[ ] Create /prototypes/phase-b-tailark/ structure
[ ] Build 5 prototypes using @tailark/* blocks
[ ] Compare dev speed vs Part 1 (hand-crafted)
[ ] Final recommendation
```

---

## Memory System (claude-mem) ✅ ACTIVE

### How It Works
Claude-mem is an MCP plugin that **automatically** saves observations from coding sessions. No manual action needed - it captures context via lifecycle hooks (session start, prompt submit, tool usage, session end).

### What Gets Saved Automatically
- Session summaries and discoveries
- Files created/modified with context
- Decisions made and rationale
- Key technical findings

### MCP Tools Available
| Tool | Purpose |
|------|---------|
| `search` | Query memories by text/type/date/project |
| `timeline` | Get chronological context around an observation |
| `get_observations` | Fetch full details by ID |

### 3-Layer Efficient Workflow
1. **search(query)** → Get compact index (~50-100 tokens/result)
2. **timeline(anchor=ID)** → Get context around interesting results
3. **get_observations([IDs])** → Fetch full details for filtered IDs only

### Web Viewer
Browse memories visually at: http://localhost:37777

### Privacy
Wrap sensitive content in `<private>` tags to exclude from storage.

### For AI Assistants
**The memory system is automatic.** Context is injected at session start via the `<claude-mem-context>
# Recent Activity

<!-- This section is auto-generated by claude-mem. Edit content outside the tags. -->

### Jan 12, 2026

| ID | Time | T | Title | Read |
|----|------|---|-------|------|
| #3 | 7:09 PM | 🔵 | Adapty Redesign Project State and Infrastructure | ~558 |
</claude-mem-context>