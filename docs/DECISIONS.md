---
project: adapty-redesign
type: decision-log
status: active
last_updated: 2026-01-12
tags: [decisions, architecture, rationale]
---

# ADAPTY Redesign - Decision Log

> **Usage**: Document all significant decisions with rationale. Helps future-you understand past choices.

---

## Decision Template

```markdown
### DEC-XXX: [Title]
**Date**: YYYY-MM-DD
**Status**: Proposed | Accepted | Deprecated | Superseded
**Deciders**: [Names]

**Context**: What is the issue?
**Decision**: What was decided?
**Rationale**: Why this choice?
**Consequences**: What are the trade-offs?
**Alternatives Considered**: What else was considered?
```

---

## Decisions

### DEC-001: A/B Testing Methodology
**Date**: 2026-01-12
**Status**: Accepted
**Deciders**: Kirill, guided by Sergey's methodology

**Context**: Need to redesign ADAPTY website but unsure which design direction and tooling is optimal.

**Decision**: Use systematic A/B testing with isolated variables:
- Phase A: Test 5 design systems WITHOUT UI libraries
- Phase B: Test UI libraries WITH winning DS

**Rationale**:
- Isolates variables for valid comparison
- Prevents "gut feeling" decisions
- Creates deployable evidence for stakeholder review
- Allows systematic evaluation of both aesthetics and tooling

**Consequences**:
- (+) Clear, defensible design choices
- (+) Reusable DS and component documentation
- (-) More upfront work before "real" development
- (-) Requires discipline to build same content 10 times

**Alternatives Considered**:
1. Single design approach - Rejected: Too risky, no comparison
2. Parallel full-page builds - Rejected: Too much scope, can't isolate variables

---

### DEC-002: Homepage-Only Skeleton
**Date**: 2026-01-12
**Status**: Accepted
**Deciders**: Kirill

**Context**: Need to decide scope of test builds for A/B comparison.

**Decision**: Test only homepage (14 sections) across all variants.

**Rationale**:
- Homepage contains all major component types
- Reduces scope to manageable level
- Enables "apples to apples" comparison
- Still demonstrates full design system capability

**Consequences**:
- (+) Faster iteration on design variants
- (+) Clear comparison criteria
- (-) Some page-specific patterns not tested until later
- (-) May need adjustments when building other pages

**Alternatives Considered**:
1. Full MVP (9 pages) - Rejected: Too much work for testing phase
2. Landing page only - Rejected: Not comprehensive enough

---

### DEC-003: Vanilla Tailwind for Phase A
**Date**: 2026-01-12
**Status**: Accepted
**Deciders**: Kirill, from meeting discussion

**Context**: Need to choose tooling for Phase A design system testing.

**Decision**: Use vanilla Tailwind CSS 4 without any UI component libraries.

**Rationale**:
- Isolates design system variable from library variable
- Forces focus on visual language, not component convenience
- Creates clean baseline for Phase B comparison
- Aligns with Code-First Design philosophy

**Consequences**:
- (+) Pure design system comparison
- (+) No library bias in visual evaluation
- (-) More manual component building
- (-) Slower initial development

**Alternatives Considered**:
1. shadcn/ui from start - Rejected: Conflates DS with library evaluation
2. CSS-in-JS - Rejected: Tailwind is team preference

---

### DEC-004: Design DNA Extraction Protocol
**Date**: 2026-01-12
**Status**: Accepted
**Deciders**: Kirill

**Context**: Need method to capture exact design parameters from reference sites.

**Decision**: Use 33-script extraction protocol via Claude Code Chrome extension.

**Rationale**:
- Captures exact values, not approximations
- Covers all design dimensions (colors, typography, spacing, animation, etc.)
- Produces machine-readable JSON for processing
- Enables systematic synthesis across sites

**Consequences**:
- (+) Precise design tokens
- (+) Reproducible extraction process
- (+) Comprehensive coverage
- (-) Requires Chrome extension setup
- (-) Manual execution per site

**Alternatives Considered**:
1. Manual inspection - Rejected: Imprecise, time-consuming
2. Design tool export - Rejected: Don't have access to their Figma
3. Automated scraping - Rejected: Less reliable for computed styles

---

### DEC-005: 5 Design System Variants
**Date**: 2026-01-12
**Status**: Accepted
**Deciders**: Kirill

**Context**: Need to decide how many and which design directions to test.

**Decision**: Create 5 DS variants:
1. Linear-inspired (premium, micro-interactions)
2. Attio-inspired (light, hierarchical)
3. Polar-minimal (clean, code-focused)
4. Vercel-bold (colorful, metrics)
5. Hybrid-premium (best of all)

**Rationale**:
- Covers diverse aesthetic spectrum
- Matches reference site priorities from meeting
- Hybrid provides synthesis option
- 5 is manageable for comparison

**Consequences**:
- (+) Comprehensive design exploration
- (+) Clear reference for each variant
- (-) 5x build effort in Phase A
- (-) May be hard to choose between similar options

**Alternatives Considered**:
1. 3 variants - Rejected: Not enough exploration
2. 7+ variants - Rejected: Diminishing returns, too much work

---

### DEC-006: CLAUDE.md as Navigation Layer
**Date**: 2026-01-12
**Status**: Accepted
**Deciders**: Kirill

**Context**: Need effective AI context management across sessions.

**Decision**: Restructure CLAUDE.md as:
- Table of contents / navigation layer
- Directory routers with local conventions
- Current state tracker
- Tag system for queryable docs
- Not a comprehensive README

**Rationale**:
- High-leverage point (affects every session)
- Reduces need for re-explanation
- Enables focused context retrieval
- Keeps context fresh (must be updated)

**Consequences**:
- (+) Faster session starts
- (+) Consistent AI behavior
- (+) Living documentation
- (-) Requires discipline to update
- (-) Risk of staleness if neglected

**Alternatives Considered**:
1. Static README - Rejected: Gets stale, not navigable
2. No CLAUDE.md - Rejected: Too much context loss between sessions

---

### DEC-007: T3 Stack Consideration
**Date**: 2026-01-12
**Status**: Proposed
**Deciders**: Kirill

**Context**: Considering boilerplate options for Next.js prototypes.

**Decision**: Evaluate T3 stack (create-t3-app) for prototypes.

**Rationale**:
- Provides typesafe foundation
- Includes tRPC for type-safe APIs
- Well-maintained, community-backed
- Modular - can take what we need

**Consequences**:
- (+) Faster project scaffolding
- (+) Built-in best practices
- (+) TypeScript-first
- (-) May include more than needed for prototypes
- (-) Learning curve for tRPC if not familiar

**Status**: To be evaluated during prototype phase.

---

## Pending Decisions

### PENDING: Winner DS Selection Criteria
**Context**: Need to define how Phase A winner will be chosen.
**Options**:
1. Stakeholder visual preference
2. Quantitative metrics (Lighthouse, bundle size)
3. Alignment with ADAPTY brand
4. Combination scoring matrix

### PENDING: Production CMS Strategy
**Context**: adapty-pt2 uses Sanity. Confirm for production.
**Options**:
1. Keep Sanity
2. Switch to different CMS
3. Static content initially
