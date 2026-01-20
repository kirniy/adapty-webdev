---
project: adapty-redesign
type: task-tracker
status: active
last_updated: 2026-01-20
tags: [tasks, tracking, sprint]
---

# ADAPTY Redesign - Task Tracker

> **Usage**: Update this file as tasks progress. Use with CLAUDE.md navigation.

---

## Task States

| Symbol | State | Description |
|--------|-------|-------------|
| `[ ]` | Pending | Not started |
| `[>]` | In Progress | Currently active |
| `[x]` | Complete | Done and verified |
| `[!]` | Blocked | Waiting on dependency |
| `[-]` | Cancelled | No longer needed |

---

## Current Status

**Main Project**: `/prototypes/achromatic-proto/`
**Production URL**: [adapty-achromatic-proto.vercel.app](https://adapty-achromatic-proto.vercel.app)
**Current Phase**: Homepage complete, preparing for additional pages

---

## Completed Phases

### Phase 0: Project Setup [COMPLETE]
- [x] Repository structure
- [x] CLAUDE.md navigation
- [x] SKELETON.md (14 sections)
- [x] Asset extraction from adapty-pt2
- [x] 5 design system templates

### Phase A: Design System Testing [COMPLETE]
- [x] Reference site extraction (5 sites)
- [x] DS tokens filled
- [x] Phase A prototype built
- [x] Deployed to adapty-prototype.vercel.app

### Phase B: Library Testing [EVALUATED]
- [x] shadcn/ui tested
- [x] Result: Not recommended for marketing sites
- [-] Additional library testing (cancelled - vanilla Tailwind preferred)

### Oatmeal/Aura Iteration [COMPLETE]
- [x] Oatmeal template integrated
- [x] AuraBuild prototype created
- [x] Debug menu system
- [x] Mega-menu header ported

### Achromatic-Proto Integration [COMPLETE]
- [x] Achromatic SaaS starter kit integrated
- [x] Marketing app configured
- [x] Debug menu system with 20+ variants
- [x] All homepage sections implemented
- [x] Deployed to adapty-achromatic-proto.vercel.app

---

## Current Sprint: Homepage Polish (2026-01-20)

### Completed This Sprint
- [x] Roles section (3 variants: cards, bento, stacked)
- [x] Hover-to-reveal-color effect
- [x] Auto-rotating tabs in Hero
- [x] Mobile responsiveness fixes
- [x] AI-generated role images (3 sets)
- [x] Repository cleanup
- [x] Documentation update

### Remaining
- [ ] Review all section variants for quality
- [ ] Final polish pass
- [ ] Stakeholder presentation

---

## Next Sprint: Additional Pages

### Priority Pages (in order)
1. [ ] Pricing page
2. [ ] Schedule a demo page
3. [ ] Feature pages
   - [ ] paywall-builder
   - [ ] paywall-ab-testing
   - [ ] onboarding-builder
4. [ ] Role pages
   - [ ] for-marketers
   - [ ] for-developers
   - [ ] for-app-owners

---

## Infrastructure Tasks

### Completed
- [x] Single Vercel deployment configured (adapty-achromatic-proto)
- [x] Removed old .vercel directories
- [x] claude-mem disabled
- [x] Documentation updated

### Pending
- [ ] Consider removing archived prototypes (oatmeal, aura-build, adapty-prototype)
- [ ] Clean up /docs folder (old docx generation scripts)

---

## Notes

- **Main project**: achromatic-proto (monorepo structure)
- **Marketing app**: `/apps/marketing/` on port 3001
- **Vercel**: Only adapty-achromatic-proto auto-deploys
- **claude-mem**: Disabled for this project
