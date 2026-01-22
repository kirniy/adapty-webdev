---
project: adapty-redesign
version: 4.1.0
last_updated: 2026-01-22T12:00:00Z
owner: kirill-kholodenko
stakeholder: sergey-muratov
phase: achromatic-production
status: active
tags: [redesign, nextjs, tailwind, design-system, achromatic, vanilla-tailwind, monorepo]
---

# ADAPTY Website Redesign - Navigation & Context

> **IMPORTANT**: This is a living navigation document. Update after every significant change.
> Last significant update: 2026-01-22 - Debug system fully wired with 24+ variant types. Page-specific feature hooks added. Logos removed from product pages. Dead code cleanup complete.

---

## ABSOLUTE RULES (NON-NEGOTIABLE)

### NO EMOJIS - EVER
**NEVER use emojis in any code, comments, UI text, documentation, or any file in this project.**
- No emoji flags for language switchers (use text abbreviations or SVG icons)
- No emoji icons in UI components
- No emoji in commit messages
- No emoji in documentation
- No exceptions. Zero tolerance.

---

## SESSION START INSTRUCTIONS (READ FIRST)

### Current Status: ACHROMATIC-PROTO ACTIVE

**Main project: `/prototypes/achromatic-proto/`**

This is a monorepo based on the Achromatic SaaS starter kit with:
- Marketing app at `/apps/marketing/` (port 3001)
- Comprehensive debug menu system with 20+ section variants
- AI-generated illustrations (3 style sets)
- Full content parity with adapty.io navigation

**Production URL**: [adapty-achromatic-proto.vercel.app](https://adapty-achromatic-proto.vercel.app)

### What Exists Now

| Prototype | Location | Status | Notes |
|-----------|----------|--------|-------|
| **Achromatic** | `/prototypes/achromatic-proto/` | PRODUCTION | Main active project |
| Oatmeal | `/prototypes/oatmeal/` | Archived | Earlier iteration |
| AuraBuild | `/prototypes/aura-build/` | Archived | Performance experiments |
| Phase A | `/prototypes/adapty-prototype/` | Archived | Initial 5-way theme switcher |

### Required Skills (ALWAYS LOAD)

**For ALL React/Next.js work in this project:**
```
react-best-practices     - Vercel Engineering performance guidelines (MANDATORY)
```

Apply patterns from highest impact first:
1. **CRITICAL**: Eliminate waterfalls (`Promise.all`, defer await)
2. **CRITICAL**: Bundle size (avoid barrel imports, dynamic imports)
3. **HIGH**: Server performance (`React.cache()`, parallel fetching)
4. **MEDIUM**: Re-render optimization (memo, transitions, derived state)

**Reference files**: `~/.claude/skills/react-best-practices/references/rules/`

### Skills Used in This Project

| Skill | Purpose | When to Use |
|-------|---------|-------------|
| `react-best-practices` | Performance patterns | All React/Next.js code changes |
| `Explore` subagent | Codebase analysis | Finding files, understanding architecture |
| `Task` with parallel agents | Comprehensive audits | Multi-file analysis, finding inconsistencies |

### Codebase Analysis Best Practices

When auditing the codebase, launch **parallel Task agents** for:
1. **Section consistency** - Pages using correct hooks and sections
2. **Unused components** - Dead code to remove
3. **Debug menu completeness** - All variants properly wired
4. **Content issues** - Placeholders, broken links
5. **Type consistency** - Variant types matching debug context
6. **Import/export issues** - Unused imports, missing exports

---

## Quick Navigation

| Area | Path | Purpose | Status |
|------|------|---------|--------|
| **Main Prototype** | `/prototypes/achromatic-proto/` | Production build | Active |
| **Marketing App** | `/prototypes/achromatic-proto/apps/marketing/` | Website code | Active |
| **Design Systems** | `/design-systems/` | 5 DS variants | Reference |
| **Skeleton** | `/skeleton/` | Shared content/assets | Reference |
| **References** | `/references/` | Site analysis data | Complete |
| **Messages** | `/messages/` | Sergey communications | 11-daily-report-jan21 |

---

## Current State

```yaml
current_phase: "Production iteration - All pages scaffolded"
next_phase: "Content refinement, form implementations"
blocking_tasks: []

# Main Prototype
achromatic_proto:
  status: "PRODUCTION"
  location: "/prototypes/achromatic-proto/apps/marketing/"
  url: "adapty-achromatic-proto.vercel.app"
  quality: "9/10"

  pages_complete: 42
  sections_with_variants: 24+

  sections_implemented:
    - Hero (4 variants: achromatic, centered-demo, minimal-text, split-left)
    - TrustedBy (3 variants: marquee, static-grid, static-minimal)
    - CoreFeatures (3 variants: colorful, muted, monochrome + tabs)
    - Roles (3 variants: cards, bento, stacked)
    - Stats (4 variants: cards, inline, graph, floating)
    - SDK (5-platform support)
    - Testimonials (3 variants: editorial, wall, carousel)
    - Integrations (3 variants: grid, marquee, categorized)
    - CaseStudies
    - Pricing
    - CTA
    - Footer (2 variants: default, flickering)
    - Page-specific features (10 pages with dedicated variants)

  debug_menu_features:
    - Grid background (cursor-tracking, slow-drift, static, off)
    - Guide lines toggle
    - Header variants (pill-navbar, mega-menu)
    - All section variant switching
    - Image set switching (set1, set2, set3)
    - localStorage persistence
    - Page-specific section configs (42 pages mapped)

  recent_additions:
    - "Page-specific feature variant hooks (10 pages)"
    - "Removed logos from product feature pages"
    - "Bento as default variant for all feature sections"
    - "Deleted 6 unused/orphan components (~1000 lines)"
    - "Build fix with --webpack flag for Next.js 16"

# Key Learnings
key_insights:
  - "Vanilla Tailwind > shadcn/ui for marketing sites"
  - "Debug menu enables rapid iteration"
  - "optimizePackageImports critical for barrel imports"
  - "Content parity with adapty.io essential"
  - "Monorepo structure (achromatic) scales better than single-app"
  - "Page-specific hooks for multi-variant sections, generic hooks for single-variant"
  - "Section components that support variants export their own type"
  - "Debug context 'off' option handled by switchers, not components"
  - "Next.js 16 with Turbopack has font issues - use --webpack flag"
```

---

## Project Structure

```
adapty-webdev/
|
+-- prototypes/
|   +-- achromatic-proto/              # MAIN ACTIVE PROJECT
|       +-- apps/
|       |   +-- marketing/             # Marketing website (port 3001)
|       |       +-- app/               # Next.js App Router
|       |       +-- components/
|       |       |   +-- debug/         # DebugMenu.tsx
|       |       |   +-- fragments/     # Reusable UI fragments
|       |       |   +-- layout/        # Header, Footer
|       |       |   +-- sections/      # All page sections
|       |       +-- lib/
|       |       |   +-- content.ts     # All content/copy
|       |       |   +-- debug-context.tsx  # Debug state
|       |       +-- public/
|       |           +-- assets/hero/   # AI-generated (set1, set2, set3)
|       |           +-- assets/roles/  # Role images (set1, set2, set3)
|       +-- packages/
|           +-- ui/                    # Shared components
|
+-- design-systems/                    # DS specs (reference)
+-- references/                        # Site analysis (reference)
+-- skeleton/                          # Content spec (reference)
+-- messages/                          # Stakeholder comms
|
+-- CLAUDE.md                          # This file
+-- README.md                          # Project README
```

---

## Debug Context Architecture

The debug menu system is the core of rapid prototyping in this project.

### Key Files
- `lib/debug-context.tsx` - All variant types, state, hooks
- `components/debug/DebugMenu.tsx` - UI controls, page configs
- `components/sections/section-switchers.tsx` - Wrapper components

### Pattern: Page-Specific vs Generic Hooks

**Use page-specific hooks when:**
- Component supports multiple variants (grid, bento, tabs)
- Component exports its own variant type
- Example: `usePaywallBuilderFeaturesVariant()` for `PaywallBuilderFeatures`

**Use generic hooks when:**
- Component is single-variant (no switching needed)
- Only need the 'off' option to hide/show
- Example: `useFeaturesVariant()` for `AIPaywallGeneratorFeatures`

### Adding a New Page-Specific Variant

1. **In debug-context.tsx:**
   ```typescript
   // Add type (include 'off')
   export type MyPageFeaturesVariant = 'grid' | 'bento' | 'tabs' | 'off'

   // Add options array
   export const MY_PAGE_FEATURES_VARIANTS = ['grid', 'bento', 'tabs', 'off'] as const

   // Add to DebugState interface
   myPageFeaturesVariant: MyPageFeaturesVariant

   // Add to DebugContextValue (setter)
   setMyPageFeaturesVariant: (v: MyPageFeaturesVariant) => void

   // Add default value
   myPageFeaturesVariant: 'bento',

   // Add to PAGE_KEYS
   'myPageFeaturesVariant',

   // Add setter callback
   const setMyPageFeaturesVariant = useCallback(...)

   // Add to context value
   myPageFeaturesVariant, setMyPageFeaturesVariant,

   // Export hook
   export function useMyPageFeaturesVariant() { ... }
   ```

2. **In DebugMenu.tsx:**
   - Import variant array
   - Add to PageSections type
   - Add page config in PAGE_SECTIONS
   - Add UI section in render

3. **In page file:**
   - Import and use dedicated hook
   - Pass variant to component (switcher handles 'off')

### Section Without Logos

Product feature pages (paywall-ab-testing, autopilot, ltv-analytics, etc.) don't show logos.
Role pages and main pages (homepage, pricing, schedule-demo) do show logos for credibility.

---

## Development Commands

```bash
# Navigate to main project
cd /Users/kirniy/dev/adapty-dev/prototypes/achromatic-proto

# Start dev server (marketing on port 3001)
pnpm --filter marketing dev

# Build
pnpm --filter marketing build

# Lint
pnpm --filter marketing lint
```

---

## Stakeholder Requirements

### Priority Pages (in order)
1. **Homepage** - COMPLETE
2. **Pricing** - Next
3. **Schedule a demo** - Planned
4. **Feature pages**: paywall-builder, paywall-ab-testing, onboarding-builder
5. **Role pages**: for-marketers, for-developers, for-app-owners

### Design Direction
- **Theme**: LIGHT theme, less dense information
- **Primary refs**: Linear, Attio, Polar.sh, Vercel, Clerk
- **Color**: Adapty purple (#6720FF) as primary accent
- **Typography**: Inter throughout

---

## Tech Stack

| Technology | Version | Purpose |
|:-----------|:--------|:--------|
| Next.js | 16.0.10 | React framework |
| React | 19.1 | UI library |
| TypeScript | 5.0 | Type safety |
| Tailwind CSS | 4.0 | Styling |
| motion/react | 12.x | Animations (formerly framer-motion) |
| lucide-react | latest | Icons (primary) |
| @phosphor-icons/react | latest | Icons (secondary) |
| Vercel | - | Deployment |

### Build Configuration

```bash
# IMPORTANT: Use --webpack flag due to Turbopack font issues in Next.js 16
pnpm --filter marketing build  # Uses webpack (configured in package.json)
```

The `package.json` has `"build": "content-collections build && next build --webpack"` to avoid Turbopack font loading errors.

---

## Icon Library

**Using**: @phosphor-icons/react (4,500+ icons, 6 weights)

```tsx
import { Icon } from "@phosphor-icons/react"
<Icon size={24} weight="regular" />
```

Weights: thin, light, regular, bold, fill, duotone

---

## Completed Work

### Phase A (Complete)
- 5 design system variants tested
- Vanilla Tailwind approach validated
- Deployed to adapty-prototype.vercel.app

### Phase B (Evaluated)
- shadcn/ui tested, not recommended for marketing
- Component libraries add friction for landing pages

### Achromatic Integration (Complete)
- Premium SaaS starter kit integrated
- Debug menu system added
- 20+ section variants implemented
- Content parity achieved

### January 19-20, 2026
- Roles section with 3 variants
- Auto-rotating tabs in Hero
- Mobile responsiveness fixes
- AI-generated role images
- Repository cleanup
- Single Vercel deployment configured

### January 21-22, 2026
- **Debug System Overhaul**:
  - Added 10 page-specific feature variant hooks
  - Wired all 42 pages to debug menu PAGE_SECTIONS
  - Set 'bento' as default for all feature sections
- **Product Page Cleanup**:
  - Removed logos from 14 product feature pages
  - Logos remain on role pages and main pages for credibility
- **Dead Code Removal**:
  - Deleted 6 unused/orphan components (~1000 lines)
  - compare-inhouse.tsx (duplicate), problem.tsx, features-sticky-scroll.tsx
  - role-cards.tsx, text-link.tsx, text-generate-effect.tsx
- **Build Configuration**:
  - Fixed Turbopack font issue with --webpack flag
- **Comprehensive Audit**:
  - Launched 6 parallel agents for codebase analysis
  - Documented all patterns and learnings

---

## Documentation Files (Update Periodically)

These files should be updated at the end of significant work sessions:

| File | Purpose | Update Frequency |
|------|---------|------------------|
| `/docs/PROGRESS.md` | Daily work log, accomplishments | End of each session |
| `/docs/TASKS.md` | Task tracker, sprint status | When tasks change |
| `/CLAUDE.md` | Project navigation, current state | After significant changes |
| `/README.md` | Public-facing project info | After major milestones |

### How to Update

**PROGRESS.md**: Add new entry with session summary, accomplishments, metrics
**TASKS.md**: Update task states ([x], [>], [ ]), add new tasks as needed
**CLAUDE.md**: Update "Current State" yaml block, add new sections if needed

---

## Notes

### Memory System (claude-mem)
**Status**: DISABLED for this project (see `.claude/settings.json`)

### Vercel Deployment
Only `adapty-achromatic-proto` auto-deploys. Other projects disconnected.
