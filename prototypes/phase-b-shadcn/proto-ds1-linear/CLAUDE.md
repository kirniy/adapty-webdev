# Proto-DS1-Linear - Phase B shadcn/ui Implementation

> **CRITICAL**: Read this entire file before doing anything. Use shadcn skill + shadcn MCP.

---

## Immediate Actions on Session Start

1. **Activate Skills**:
   - `styling-with-shadcn` - shadcn/ui patterns and best practices
   - `frontend-design` - Distinctive, production-grade UI
   - `frontend-ui-ux` - Designer-turned-developer mindset

2. **Verify shadcn MCP**: Run `/mcp` to confirm `shadcn` server is active
   - If not visible, the MCP needs restart or reinstall: `pnpm dlx shadcn@latest mcp init --client claude`

3. **Use shadcn MCP for ALL component work**:
   - Adding components: Use MCP tool, not CLI
   - The MCP provides better integration with Claude

4. **Follow the implementation plan**: See `/docs/PHASE-B-PLAN.md`

---

## Project Context

### What This Is
- **Proto-DS1-Linear**: One of 5 Phase B prototypes
- **Design System**: DS1 Linear-inspired (Dark, premium, 3D depth, micro-interactions)
- **Stack**: Next.js 15 + shadcn/ui + Tailwind CSS 4

### Design DNA (DS1 Linear)
| Token | Value | Notes |
|-------|-------|-------|
| Background | `#08090a` | Near-black, layered hierarchy |
| Accent | `#5e6ad2` | Purple/indigo like Linear |
| Card Radius | `30px` | Large, premium feel |
| Button Radius | `8px` | Subtle rounding |
| Letter Spacing | `-0.04em` | Tight, precision typography |
| Font | Inter Variable | With `cv01`, `ss03` features |
| Shadows | Layered with white ring | 3D depth effect |
| Animations | Float, glow, parallax | 67+ animation types |

### What's Already Done
- [x] Next.js 15 scaffolded
- [x] shadcn/ui initialized
- [x] Basic components installed (button, card, input, badge, separator, tabs, navigation-menu, dropdown-menu, avatar)
- [x] globals.css with DS1 Linear tokens (345 lines)

### What Needs Building
14 sections per SKELETON.md specification:
1. [ ] Header / Navigation
2. [ ] Hero Section
3. [ ] Trusted By (logo marquee)
4. [ ] Feature Sections (6 total)
5. [ ] Integrations Marquee
6. [ ] Role Cards Section
7. [ ] Stats Section
8. [ ] SDK Code Snippet Section
9. [ ] Testimonials Carousel
10. [ ] G2 Badges Section
11. [ ] Case Studies Section
12. [ ] Enterprise Section
13. [ ] Final CTA Section
14. [ ] Footer

---

## Implementation Approach - DISCOVERY FIRST

### CRITICAL: Don't Assume Components
DO NOT pre-decide which shadcn components to use.
The process is: EXPLORE → DECIDE → DOCUMENT → BUILD

### Step 1: Component Discovery Phase (DO THIS FIRST)
For EACH of the 14 sections:
1. **Read SKELETON.md** - What does this section need?
2. **Use shadcn MCP** - Explore available components
3. **Evaluate** - Which components fit? What's missing?
4. **Document** - Write decision + rationale in `/docs/COMPONENT-DECISIONS.md`

### Step 2: Implementation Phase (AFTER decisions documented)
Once ALL 14 sections have documented component decisions:
1. Use shadcn MCP to add chosen components
2. Create section in `/src/components/sections/`
3. Apply DS1 Linear tokens from globals.css
4. Add animations and micro-interactions
5. Test responsive behavior

### Step 3: Compose and Polish
- Import all sections into `/src/app/page.tsx`
- Test full page flow
- Verify against SKELETON.md content spec
- Polish DS1 Linear aesthetic details

---

## File Structure

```
proto-ds1-linear/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (needs Inter Variable font)
│   │   ├── page.tsx            # Homepage composition
│   │   └── globals.css         # DS1 Linear tokens (COMPLETE)
│   ├── components/
│   │   ├── ui/                 # shadcn components
│   │   └── sections/           # 14 homepage sections (TO BUILD)
│   └── lib/
│       └── utils.ts            # cn() helper
├── public/                     # Assets (copy from skeleton)
├── components.json             # shadcn config
└── CLAUDE.md                   # This file
```

---

## Key References

| Resource | Path | Purpose |
|----------|------|---------|
| Skeleton Spec | `/skeleton/SKELETON.md` | 14-section homepage spec with exact content |
| DS1 Tokens | `/design-systems/ds-1-linear-inspired/` | Design system specification |
| Phase A Reference | `/prototypes/adapty-prototype/` | Working implementation to study (DO NOT MODIFY) |
| Assets | `/skeleton/assets/` | Images, logos, icons to copy |
| Phase B Plan | `/docs/PHASE-B-PLAN.md` | Master implementation plan |

---

## Critical Rules

1. **USE SHADCN MCP** - Not CLI commands for component work
2. **DO NOT MODIFY Phase A** - Only study it as reference
3. **IDENTICAL CONTENT** - All 5 prototypes have same content, only styling differs
4. **DS1 LINEAR AESTHETIC** - Dark, premium, 3D depth, micro-interactions
5. **FOLLOW SKELETON.MD** - Exact 14 sections with specified content
6. **NEVER USE EMOJIS** - No emojis in code, comments, or UI text


<claude-mem-context>
# Recent Activity

<!-- This section is auto-generated by claude-mem. Edit content outside the tags. -->

### Jan 13, 2026

| ID | Time | T | Title | Read |
|----|------|---|-------|------|
| #488 | 8:50 PM | 🟣 | Shadcn MCP Server Configured in Proto-ds1-linear Project | ~373 |
| #485 | 8:48 PM | ✅ | CLAUDE.md Documentation Created for proto-ds1-linear | ~782 |
</claude-mem-context>