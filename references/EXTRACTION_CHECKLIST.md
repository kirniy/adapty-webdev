---
project: adapty-redesign
type: checklist
tags: [extraction, chrome, reference, workflow]
status: complete
completed: 2026-01-12
---

# Reference Site Extraction Checklist ✅ COMPLETE

> **Tool**: Claude Code for Chrome extension
> **Completed**: 2026-01-12 via Chrome automation

---

## Pre-Extraction Setup ✅

- [x] Chrome browser ready
- [x] Claude Code Chrome extension installed
- [x] DevTools accessible (Cmd+Option+I)
- [x] Folder structure ready for each site

---

## Sites Extracted

### 1. Linear (linear.app) ✅
**Focus**: Premium feel, micro-interactions, bold typography
**Key Finding**: 67+ keyframe animations, layered backgrounds, Inter Variable

- [x] Navigate to https://linear.app
- [x] Extract CSS variables via JavaScript
- [x] Save to `/references/linear/raw-data/01-css-variables.json`
- [x] Write analysis.md summary

### 2. Attio (attio.com) ✅
**Focus**: Light theme, information hierarchy, subtle animations
**Key Finding**: LAB color space, 4-font system, 500 weight body text

- [x] Navigate to https://attio.com
- [x] Extract CSS variables via JavaScript
- [x] Save to `/references/attio/raw-data/01-css-variables.json`
- [x] Write analysis.md summary

### 3. Polar (polar.sh) ✅
**Focus**: Minimalism, code aesthetics, readability
**Key Finding**: Geist fonts, fastest animations (150ms), minimal surfaces

- [x] Navigate to https://polar.sh
- [x] Extract CSS variables via JavaScript
- [x] Save to `/references/polar/raw-data/01-css-variables.json`
- [x] Write analysis.md summary

### 4. Vercel (vercel.com) ✅
**Focus**: Bold visuals, metrics presentation, gradients
**Key Finding**: True black (#000), bouncy easing, signature gradients

- [x] Navigate to https://vercel.com
- [x] Extract CSS variables via JavaScript
- [x] Save to `/references/vercel/raw-data/01-css-variables.json`
- [x] Write analysis.md summary

### 5. Clerk (clerk.com) ✅
**Focus**: Developer-friendly, modern SaaS patterns
**Key Finding**: Warm gray (#F7F7F8), Suisse font, pill buttons

- [x] Navigate to https://clerk.com
- [x] Extract CSS variables via JavaScript
- [x] Save to `/references/clerk/raw-data/01-css-variables.json`
- [x] Write analysis.md summary

---

## Synthesis Documents ✅

- [x] `/references/synthesis/patterns.md` - Common patterns
- [x] `/references/synthesis/differentiators.md` - Unique approaches
- [x] `/references/synthesis/recommendations.md` - Adapty recommendations

---

## 33 Extraction Scripts Quick Reference

| # | Script | Output File |
|---|--------|-------------|
| 1 | CSS Custom Properties | `01-css-variables.json` |
| 2 | Typography | `02-typography.json` |
| 3 | Color Palette | `03-colors.json` |
| 4 | Spacing System | `04-spacing.json` |
| 5 | Border Radius | `05-radii.json` |
| 6 | Animations/Transitions | `06-animations.json` |
| 7 | Component Structure | (manual notes) |
| 8 | Layout/Containers | `07-layout.json` |
| 9 | Font Files | `08-fonts.json` |
| 10 | Visual Capture | (screenshots) |
| 11 | Network Analysis | (manual notes) |
| 12 | Semantic Structure | (manual notes) |
| 13 | Framework Detection | `13-frameworks.json` |
| 14 | CDN Resources | `14-cdn-resources.json` |
| 15 | Image Patterns | `15-images.json` |
| 16 | Z-Index Mapping | `16-z-index.json` |
| 17 | Scroll Behaviors | `17-scroll.json` |
| 18 | Accessibility Styles | `18-accessibility.json` |
| 19 | Dark Mode | `19-dark-mode.json` |
| 20 | Gradients/Effects | `20-effects.json` |
| 21 | Icon System | `21-icons.json` |
| 22 | Breakpoints | `22-breakpoints.json` |
| 23 | Cursors | `23-cursors.json` |
| 24 | Selection Styles | `24-selection.json` |
| 25 | Loading States | `25-loading.json` |
| 26 | Meta/SEO | `26-meta.json` |
| 27 | Button Variants | `27-buttons.json` |
| 28 | Input Styles | `28-inputs.json` |
| 29 | Motion/Timing | `29-motion.json` |
| 30 | CSS Vars Organized | `30-css-vars-organized.json` |
| 31 | Tailwind Classes | `31-tailwind.json` |
| 32 | Scrollbars | `32-scrollbars.json` |
| 33 | Grid System | `33-grids.json` |

---

## Screenshot Checklist (per site)

- [ ] Full page desktop (1440px)
- [ ] Full page mobile (375px)
- [ ] Hero section
- [ ] Navigation default
- [ ] Navigation hover states
- [ ] Navigation mobile menu
- [ ] Button variants
- [ ] Card components
- [ ] Form inputs
- [ ] Footer
- [ ] Unique/signature elements

---

## Post-Extraction

After extracting all 5 sites:

1. [ ] Create `/references/synthesis/patterns.md` - Common patterns
2. [ ] Create `/references/synthesis/differentiators.md` - Unique approaches
3. [ ] Create `/references/synthesis/recommendations.md` - Our synthesis
4. [ ] Fill DS1-DS5 tokens from extracted data
5. [ ] Notify Claude Code CLI to continue with prototypes

---

## Quick Start Commands

```javascript
// In DevTools Console, paste extraction scripts from:
// ~/.claude/plans/mellow-leaping-kay.md

// Example: CSS Variables extraction
(() => {
  const styles = getComputedStyle(document.documentElement);
  const cssVars = {};
  for (let i = 0; i < styles.length; i++) {
    const prop = styles[i];
    if (prop.startsWith('--')) {
      cssVars[prop] = styles.getPropertyValue(prop).trim();
    }
  }
  console.log(JSON.stringify(cssVars, null, 2));
})();
```

Copy output → Save to appropriate JSON file.
