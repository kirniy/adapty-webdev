---
project: adapty-redesign
version: 2.1.0
last_updated: 2026-01-13T18:48:00Z
owner: kirill-kholodenko
stakeholder: sergey-muratov
phase: phase-a-testing
status: active
tags: [redesign, nextjs, tailwind, design-system, a-b-testing]
---

# ADAPTY Website Redesign - Navigation & Context

> **IMPORTANT**: This is a living navigation document. Update after every significant change.
> Last significant update: 2026-01-13 - Repo cleanup, DS wireframe comparison audit complete

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
current_phase: "Phase A - Design System Testing"
next_phase: "Improve DS variants based on audit findings"
blocking_tasks: []
completed_today:
  - ✅ Phase B research complete (Gemini + Opus 4.5)
  - ✅ DS wireframe comparison audit (all 5 variants vs reference sites)
  - ✅ Repo cleanup (removed duplicate folders, scattered CLAUDE.md files)
  - ✅ Reports folder structure created
  - ✅ Research folder organized with Gemini prompt and findings
  - ✅ ASCII wireframes added to Vercel and Clerk analysis.md files
  - ✅ All 5 reference analysis.md files now have comprehensive wireframes
in_progress:
  - Improve DS variants based on audit findings
pending:
  - Fix critical gaps identified in audit (DS4 Vercel gradient, DS1 Linear animations)
  - Gather feedback from Sergey
prototype_status:
  location: "/prototypes/adapty-prototype"
  deployed: true
  url: "adapty-prototype.vercel.app"
  theme_switcher: "Top-right corner, persists via localStorage + URL ?ds=ds1-5"
extraction_results:
  linear: "Dark theme, 67+ animations, Inter Variable, layered backgrounds"
  attio: "Light theme, LAB colors, 4-font system (Inter, Display, Tiempos, JetBrains)"
  polar: "Dark theme, Geist fonts, fast 150ms animations, minimal"
  vercel: "True black, bouncy easing, compound shadows, signature gradients"
  clerk: "Light warm gray (#F7F7F8), Suisse font, purple accent, pill buttons"
ds_token_summary:
  DS1_Linear: "8px buttons, 30px cards, #08090a bg, tight letter-spacing"
  DS2_Attio: "10px buttons, 12px cards, #ffffff bg, ghost buttons"
  DS3_Polar: "10px buttons, 10px cards, #171719 bg, ALL 150ms anims"
  DS4_Vercel: "6px buttons, 8px cards, #000000 bg, compound shadows"
  DS5_Clerk: "24px pill buttons, 12px cards, #F7F7F8 bg, purple accent"
audit_results:
  DS1_Linear: "45% match - missing layered hero, animated cards"
  DS2_Attio: "55% match - missing serif font emphasis"
  DS3_Polar: "40% match - missing embedded mini-UIs in cards"
  DS4_Vercel: "30% match - CRITICAL: missing signature gradient hero"
  DS5_Clerk: "60% match - closest, missing background pattern"
session_notes:
  - Audit report: reports/audits/2026-01-13-1700-ds-wireframe-comparison-audit.md
  - Priority fixes: DS4 gradient hero, DS1 animated cards, DS2 serif fonts
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
├── shared/                        # Shared dependencies
│   └── base-dependencies.json     # Base package.json reference
├── phase-a-design-systems/        # DS testing (no libraries)
│   ├── proto-ds1/                 # (TODO: create)
│   ├── proto-ds2/                 # (TODO: create)
│   ├── proto-ds3/                 # (TODO: create)
│   ├── proto-ds4/                 # (TODO: create)
│   └── proto-ds5/                 # (TODO: create)
└── phase-b-libraries/             # Library testing (with winner DS)
    ├── proto-shadcn-ui/           # (TODO: after Phase A)
    ├── proto-shadcn-blocks/
    ├── proto-21st-dev/
    ├── proto-react-bits/
    └── proto-custom-mix/
```

**Local conventions:**
- Each prototype is independent Next.js 15 project
- Use `/scripts/create-prototype.sh` to scaffold
- Use `/scripts/deploy-prototype.sh` to deploy
- All use same skeleton content from `/skeleton/`

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
- Animation: ReactBits + 21stDev for micro-interactions
- Alternative: Shadcn Blocks for pre-built components

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

### Current Sprint (2026-01-13)
```
[x] Create repository structure
[x] Write initial CLAUDE.md
[x] Create SKELETON.md (14 sections)
[x] Extract assets from adapty-pt2
[x] Create DS templates (5 variants)
[x] Create automation scripts
[x] Write message 01-roadmap for Sergey
[x] Restructure CLAUDE.md as navigation layer
[x] Set up memory system (claude-mem) - ACTIVE
[x] Extract reference sites via Chrome - 5/5 COMPLETE
[x] Create synthesis docs (patterns, differentiators, recommendations)
[x] Fill DS tokens from extraction data - ALL 5 COMPLETE
[x] Build Phase A prototype with 5-way theme switcher
[x] Deploy to Vercel (adapty-prototype.vercel.app)
[x] Phase B research (Gemini + Opus 4.5) - shadcn/ui + MCP selected
[x] DS wireframe comparison audit - all 5 variants analyzed
[x] Repo cleanup - removed duplicates, organized reports/research
[>] Improve DS variants based on audit findings
[ ] Present findings to Sergey
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