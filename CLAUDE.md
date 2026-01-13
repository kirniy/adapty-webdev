---
project: adapty-redesign
version: 3.1.0
last_updated: 2026-01-13T21:00:00Z
owner: kirill-kholodenko
stakeholder: sergey-muratov
phase: phase-b-shadcn
status: active
tags: [redesign, nextjs, tailwind, design-system, shadcn-ui, tailark]
---

# ADAPTY Website Redesign - Navigation & Context

> **IMPORTANT**: This is a living navigation document. Update after every significant change.
> Last significant update: 2026-01-13 - Phase B setup complete, ready for implementation

---

## SESSION START INSTRUCTIONS (READ FIRST)

### Required Skills to Activate
```
1. styling-with-shadcn    - shadcn/ui patterns and best practices
2. frontend-design        - Distinctive, production-grade UI
3. frontend-ui-ux         - Designer-turned-developer mindset
```

### Required MCP: shadcn
The **shadcn MCP** has been installed. Verify it's active:
1. Run `/mcp` command to see active servers
2. Look for `shadcn` in the list
3. If missing, reinstall: `pnpm dlx shadcn@latest mcp init --client claude`

**ALWAYS use the shadcn MCP for:**
- Adding new components
- Exploring available components
- Component documentation

### Current Work: Building proto-ds1-linear
- **Status**: In progress
- **Location**: `/prototypes/phase-b-shadcn/proto-ds1-linear/`
- **Plan**: `/docs/PHASE-B-PLAN.md`
- **Local docs**: `/prototypes/phase-b-shadcn/proto-ds1-linear/CLAUDE.md`

### What's Done
- [x] Next.js 15 scaffolded
- [x] shadcn/ui initialized
- [x] Base components installed
- [x] globals.css with DS1 Linear tokens

### What's Next (DISCOVERY FIRST - DO NOT SKIP)
1. **Verify shadcn MCP** is active (run `/mcp`)
2. **Use shadcn MCP** to explore ALL available components
3. **For EACH of 14 sections**: Use MCP to decide which components fit
4. **Document decisions** in `/docs/COMPONENT-DECISIONS.md` with rationale
5. **ONLY THEN**: Build sections with decided components

**DO NOT assume components. EXPLORE first, DECIDE second, BUILD third.**

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
current_phase: "Phase B - shadcn/ui Design System Testing"
next_phase: "Phase B Part 2 - Tailark Marketing Blocks"
blocking_tasks: []
completed_phases:
  phase_a:
    - ✅ Phase A prototype with 5-way theme switcher (adapty-prototype.vercel.app)
    - ✅ DS wireframe comparison audit (all 5 variants vs reference sites)
    - ✅ Phase B research complete (shadcn/ui selected as primary)
in_progress:
  - Building 5 fresh shadcn/ui prototypes from scratch
pending:
  - Deploy all 5 Phase B prototypes to Vercel
  - Build Phase B Part 2 (Tailark marketing blocks)
  - Present findings to Sergey

# Phase B Architecture
phase_b_structure:
  part_1_shadcn: "/prototypes/phase-b-shadcn/"  # Current focus
  part_2_tailark: "/prototypes/phase-b-tailark/"  # Future

# 5 Prototypes (Part 1: Pure shadcn/ui)
prototypes:
  proto-ds1-linear:
    status: "in_progress"
    theme: "Dark (#08090a), premium, 3D depth"
    signature: "Floating cards, glow hover, -0.04em tracking"
  proto-ds2-attio:
    status: "pending"
    theme: "Light (#ffffff), editorial sophistication"
    signature: "Serif accents, schematic lines, LAB colors"
  proto-ds3-polar:
    status: "pending"
    theme: "Dark (#171719), code aesthetics"
    signature: "Geist fonts, 150ms timing, gradient code blocks"
  proto-ds4-vercel:
    status: "pending"
    theme: "True black (#000000), bold"
    signature: "Gradient hero band, bouncy easing, compound shadows"
  proto-ds5-clerk:
    status: "pending"
    theme: "Warm gray (#F7F7F8), friendly"
    signature: "Pill buttons (24px), purple accent, background patterns"

# Phase A Reference (completed)
phase_a_reference:
  location: "/prototypes/adapty-prototype"
  deployed: true
  url: "adapty-prototype.vercel.app"
  theme_switcher: "Top-right corner, persists via localStorage + URL ?ds=ds1-5"

# Design System DNA
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
├── 01-roadmap/                    # TODAY - Research roadmap (READY)
│   └── message.md
├── 02-reference-analysis/         # Reference site analysis
├── 03-ds-results/                 # Phase A results
└── 04-library-results/            # Phase B results
```

**Local conventions:**
- All messages to Sergey in RUSSIAN
- Include clear next steps and questions
- Reference specific deliverables

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

**Research Conclusions:**
- Primary: shadcn/ui + MCP integration for Claude
- Animation: ReactBits + 21stDev for micro-interactions (future)
- Alternative: Shadcn Blocks for pre-built components
- Marketing Blocks: Tailark (https://tailark.com/docs) for Phase B Part 2

**Tailark Integration:**
```bash
# Add to components.json registries
"@tailark": "https://tailark.com/r"

# Install components
pnpm dlx shadcn add @tailark/hero-1
pnpm dlx shadcn add @tailark/features-1
```

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