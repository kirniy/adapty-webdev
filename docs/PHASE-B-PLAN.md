# Phase B Implementation Plan - shadcn/ui Design Systems

> **Master plan for building 5 shadcn/ui prototypes, each implementing one design system.**

---

## CRITICAL: The Process

### 1. USE THE SHADCN MCP FIRST
Before writing ANY code:
1. **Verify MCP is active**: Run `/mcp` → Look for `shadcn` server
2. **Explore components**: Use shadcn MCP to list and understand available components
3. **Study each section**: Read SKELETON.md requirements
4. **DECIDE**: For each section, use MCP to find best-fit components
5. **Document decision**: Record WHY this component was chosen
6. **Then implement**: Only after informed decision

### 2. DON'T ASSUME COMPONENTS
The pre-filled "Component Mapping" tables in earlier versions were WRONG.
The AI must USE the shadcn MCP to discover and select components.

### 3. THINK BEFORE BUILDING
For each of the 14 sections:
- What does SKELETON.md specify?
- What shadcn components could work? (Use MCP to explore)
- What's the DS1 Linear aesthetic requirement?
- What custom work is needed beyond shadcn?
- Document the decision, THEN build.

---

## Design System DNA (Reference Only)

### DS1: Linear-Inspired
| Trait | Value |
|-------|-------|
| Theme | Dark (#08090a) with subtle gray hierarchy |
| Typography | Inter Variable, -0.04em tracking |
| Signature | 3D perspective layers, floating cards, glow hover |
| Motion | 67+ animation types, parallax depth |
| Border Radius | 30px cards, 8px buttons |
| Shadows | Layered with white ring borders |

### DS2-DS5: See `/design-systems/` folder

---

## Implementation Workflow

### Phase 1: Component Discovery (DO THIS FIRST)

**For each section in SKELETON.md:**

```
1. Read section requirements from SKELETON.md
2. USE shadcn MCP to explore available components
3. Evaluate: Which shadcn components fit this section?
4. Document: Write decision in /docs/COMPONENT-DECISIONS.md
5. Only then: Proceed to implementation
```

**Questions to answer per section:**
- What content/layout does SKELETON.md require?
- What shadcn primitives could compose this?
- What gaps exist that need custom components?
- How does DS1 Linear aesthetic affect the choice?

### Phase 2: Build with Decisions Made

Once component decisions are documented:
1. Use shadcn MCP to add chosen components
2. Create section in `/src/components/sections/`
3. Apply DS1 tokens from globals.css
4. Add DS1-specific animations and effects
5. Test responsive behavior
6. Mark complete

---

## Current State: Proto-DS1-Linear

### Setup Complete
- [x] Next.js 15 scaffolded
- [x] shadcn/ui initialized
- [x] Base components installed (button, card, input, badge, separator, tabs, navigation-menu, dropdown-menu, avatar)
- [x] globals.css with DS1 Linear tokens

### NEXT: Component Discovery Phase
- [ ] Use shadcn MCP to explore ALL available components
- [ ] Create /docs/COMPONENT-DECISIONS.md
- [ ] For each of 14 sections, document component selection with rationale

### THEN: Implementation Phase
- [ ] Build sections using decided components
- [ ] Apply DS1 Linear styling
- [ ] Test and polish

---

## 14 Sections to Build (from SKELETON.md)

| # | Section | SKELETON.md Requirement | shadcn Decision |
|---|---------|------------------------|-----------------|
| 1 | Header | Logo, nav items, dropdowns, auth buttons | TBD - use MCP |
| 2 | Hero | Badge, H1, subheadline, email CTA, trust text | TBD - use MCP |
| 3 | TrustedBy | Label, logo marquee | TBD - use MCP |
| 4 | Features (x6) | Title, subtitle, features list, metrics | TBD - use MCP |
| 5 | Integrations | Title, logo marquee | TBD - use MCP |
| 6 | RoleCards | Headline, 3-column cards | TBD - use MCP |
| 7 | Stats | 4 large metrics | TBD - use MCP |
| 8 | SDKCodeSnippet | Tabs, code blocks, platform icons | TBD - use MCP |
| 9 | Testimonials | Carousel, quote cards, avatars | TBD - use MCP |
| 10 | G2Badges | Badge grid | TBD - use MCP |
| 11 | CaseStudies | Headline, 3x3 card grid | TBD - use MCP |
| 12 | Enterprise | Badges/icons, feature list, CTA | TBD - use MCP |
| 13 | FinalCTA | Dark section, headline, email CTA | TBD - use MCP |
| 14 | Footer | Multi-column links, social, copyright | TBD - use MCP |

---

## Success Criteria

| Metric | Target |
|--------|--------|
| Component decisions documented | 14/14 sections with rationale |
| Sections implemented | 14/14 per prototype |
| Content accuracy | 100% match to SKELETON.md |
| DS fidelity | >80% match to DS1 Linear DNA |
| Deployment | All 5 on Vercel |

---

## Reference Files

| File | Purpose |
|------|---------|
| `/skeleton/SKELETON.md` | Exact content specification |
| `/skeleton/assets/` | All images, logos, icons |
| `/prototypes/adapty-prototype/` | Phase A reference (DO NOT MODIFY) |
| `/design-systems/ds-1-linear-inspired/` | DS1 specification |
| `/references/linear/analysis.md` | Linear site analysis |
| `/docs/COMPONENT-DECISIONS.md` | Component selection rationale (TO CREATE) |
