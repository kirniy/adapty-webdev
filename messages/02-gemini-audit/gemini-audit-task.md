# Design System Audit Task for Gemini 3.0 Pro

## Mission Overview

You are auditing a multi-design-system prototype for **Adapty** (a mobile subscription management platform). We've created a single Next.js prototype that supports 5 different design system themes, each inspired by a reference website.

**Your task**: Verify that our extracted reference data is accurate and that our prototype CSS tokens correctly match the actual reference websites.

---

## Repository Structure

```
/Users/kirniy/dev/adapty-dev/
├── prototypes/adapty-prototype/     # The main prototype (Next.js 15)
│   └── src/
│       ├── styles/globals.css       # CSS tokens for all 5 DS variants
│       ├── components/ui/Button.tsx # Button component using tokens
│       └── components/sections/     # Page section components
│
├── references/                       # Extracted data from reference sites
│   ├── linear/
│   │   ├── analysis.md              # Human-readable analysis
│   │   └── raw-data/01-css-variables.json  # Extracted CSS variables
│   ├── attio/
│   │   ├── analysis.md
│   │   └── raw-data/01-css-variables.json
│   ├── polar/
│   │   ├── analysis.md
│   │   └── raw-data/01-css-variables.json
│   ├── vercel/
│   │   ├── analysis.md
│   │   └── raw-data/01-css-variables.json
│   ├── clerk/
│   │   ├── analysis.md
│   │   └── raw-data/01-css-variables.json
│   └── synthesis/
│       ├── patterns.md              # Common patterns across sites
│       ├── differentiators.md       # Unique approaches per site
│       └── recommendations.md       # Recommendations for Adapty
│
├── design-systems/                   # DS specification documents
│   ├── ds-1-linear-inspired/
│   ├── ds-2-attio-inspired/
│   ├── ds-3-polar-minimal/
│   ├── ds-4-vercel-bold/
│   └── ds-5-hybrid-premium/
│
└── messages/                         # Communication documents
```

---

## Design System Mapping

| DS Variant | Theme Attribute | Inspired By | Reference URL |
|------------|-----------------|-------------|---------------|
| DS1 | `data-theme="ds1"` | Linear | https://linear.app |
| DS2 | `data-theme="ds2"` | Attio | https://attio.com |
| DS3 | `data-theme="ds3"` | Polar | https://polar.sh |
| DS4 | `data-theme="ds4"` | Vercel | https://vercel.com |
| DS5 | `data-theme="ds5"` | Clerk | https://clerk.com |

---

## Critical Files to Examine

### 1. Main CSS Token File
**Path**: `/Users/kirniy/dev/adapty-dev/prototypes/adapty-prototype/src/styles/globals.css`

This file contains CSS custom properties for all 5 design systems. Each DS is defined in a `[data-theme="dsX"]` block with tokens for:
- Background colors (`--bg-primary`, `--bg-secondary`, etc.)
- Text colors (`--text-primary`, `--text-secondary`, etc.)
- Primary button color (`--color-primary`)
- Accent colors (`--color-accent`)
- Border colors and radii
- Typography settings
- Animation timings
- Shadow definitions

### 2. Reference Extraction Files
For each reference site, examine:
- `/references/{site}/raw-data/01-css-variables.json` - Raw extracted CSS values
- `/references/{site}/analysis.md` - Human analysis of the design system

### 3. Button Component
**Path**: `/Users/kirniy/dev/adapty-dev/prototypes/adapty-prototype/src/components/ui/Button.tsx`

Uses CSS tokens for styling. Primary buttons use:
- `--color-primary` for background
- `--text-inverse` for text color

---

## Verification Tasks

### Task 1: Verify Reference Data Accuracy

For each reference website, open it in your browser and verify:

#### Linear (https://linear.app)
- [ ] Background color of the page
- [ ] Primary CTA button color and text color (e.g., "Start building" button)
- [ ] Accent/brand colors used for links and highlights
- [ ] Typography (font family, weights)
- [ ] Border radius on buttons and cards

#### Attio (https://attio.com)
- [ ] Background color of the page (should be white/light)
- [ ] Primary CTA button color (should be BLACK with white text)
- [ ] Text colors for headings and body
- [ ] Typography system
- [ ] Border/outline button styles

#### Polar (https://polar.sh)
- [ ] Background color (dark theme)
- [ ] Primary button color (blue)
- [ ] Text colors (muted gray scale)
- [ ] Animation durations (should be fast ~150ms)
- [ ] Minimal shadow usage

#### Vercel (https://vercel.com)
- [ ] Background color (should be TRUE BLACK #000000)
- [ ] Primary CTA button color (should be WHITE with black text)
- [ ] Secondary button color (should be BLACK with white text)
- [ ] Gradient colors for "Develop/Preview/Ship"
- [ ] Compound shadow styles

#### Clerk (https://clerk.com)
- [ ] Background color (warm gray #F7F7F8)
- [ ] Primary CTA button color (purple #6C47FF)
- [ ] Button border radius (should be pill-shaped 24px)
- [ ] Typography and text colors

### Task 2: Compare Against Our Tokens

After verifying the actual websites, compare against our `globals.css` tokens:

#### Expected Token Values (Current Implementation)

**DS1 (Linear)**:
```css
--bg-primary: #08090a
--color-primary: #ffffff  /* WHITE button */
--color-accent: #5e6ad2   /* Purple for links/badges */
--text-primary: #f7f8f8
--text-inverse: #08090a
```

**DS2 (Attio)**:
```css
--bg-primary: #ffffff
--color-primary: #000000  /* BLACK button */
--color-accent: #4682F0   /* Blue for links */
--text-primary: #131316
--text-inverse: #ffffff
```

**DS3 (Polar)**:
```css
--bg-primary: #171719
--color-primary: #3B82F6  /* Blue button */
--text-primary: #D7D7DB
--border-default: #1D1D20
--duration-normal: 150ms  /* Fast animations */
```

**DS4 (Vercel)**:
```css
--bg-primary: #000000     /* TRUE BLACK */
--color-primary: #ffffff  /* WHITE button */
--color-accent: #0070F3   /* Blue for gradients/links */
--text-inverse: #000000
--gradient-develop: linear-gradient(90deg, #007CF0, #00DFD8)
--gradient-preview: linear-gradient(90deg, #7928CA, #FF0080)
--gradient-ship: linear-gradient(90deg, #FF4D4D, #F9CB28)
```

**DS5 (Clerk)**:
```css
--bg-primary: #F7F7F8     /* Warm gray */
--color-primary: #6C47FF  /* Purple button */
--text-primary: #131316
--button-radius: 24px     /* Pill buttons */
```

### Task 3: Document Discrepancies

Create a report documenting:

1. **Extraction Errors**: Any values in our `/references/*/raw-data/` files that don't match the actual websites

2. **Token Mismatches**: Any values in `globals.css` that don't match the reference sites

3. **Missing Tokens**: Any important design tokens from reference sites that we haven't captured

4. **Recommendations**: Specific CSS changes needed to fix any issues

---

## Expected Output Format

Please provide your findings in this format:

```markdown
# Gemini Design System Audit Report

## Executive Summary
[Brief overview of findings]

## Site-by-Site Verification

### Linear (DS1)
**Verified Values:**
- Background: [actual value] vs our [#08090a] - [MATCH/MISMATCH]
- Primary Button: [actual value] vs our [#ffffff] - [MATCH/MISMATCH]
- [etc.]

**Issues Found:**
- [List any discrepancies]

### Attio (DS2)
[Same format]

### Polar (DS3)
[Same format]

### Vercel (DS4)
[Same format]

### Clerk (DS5)
[Same format]

## Recommended Changes

### globals.css Changes
```css
/* Specific CSS changes needed */
```

### Reference Data Corrections
[Any corrections to the extraction files]

## Conclusion
[Overall assessment and next steps]
```

---

## Additional Context

### Recent Changes Made
We recently fixed primary button colors for DS1, DS2, and DS4:
- DS1: Changed from purple (#5e6ad2) to WHITE (#ffffff)
- DS2: Changed from blue (#4682F0) to BLACK (#000000)
- DS4: Changed from blue (#0070F3) to WHITE (#ffffff)

These changes need verification against the actual sites.

### Key Insight
The primary CTA button colors on modern SaaS sites often DON'T match the brand accent color:
- Linear uses WHITE buttons (not their purple brand)
- Attio uses BLACK buttons (not their blue brand)
- Vercel uses WHITE buttons (not their blue brand)
- Clerk uses PURPLE buttons (matches their brand)

Brand colors are typically reserved for accents, links, and highlights - not primary CTAs.

---

## How to Test Our Prototype

The prototype is deployed and can be tested by appending `?ds=ds1` through `?ds=ds5` to the URL:
- DS1 (Linear): `http://localhost:3000/?ds=ds1`
- DS2 (Attio): `http://localhost:3000/?ds=ds2`
- DS3 (Polar): `http://localhost:3000/?ds=ds3`
- DS4 (Vercel): `http://localhost:3000/?ds=ds4`
- DS5 (Clerk): `http://localhost:3000/?ds=ds5`

Or use the theme switcher in the bottom-right corner.

---

## Questions to Answer

1. Are our extracted CSS values in `/references/*/raw-data/` accurate?
2. Do our `globals.css` tokens correctly implement each reference design?
3. Are there any visual elements we're missing (gradients, shadows, animations)?
4. Are the typography settings (fonts, weights, letter-spacing) correct?
5. Are border radii matching the reference sites?
6. Are animation timings and easings correct?

Please be thorough and specific with hex color codes, pixel values, and CSS property names.
