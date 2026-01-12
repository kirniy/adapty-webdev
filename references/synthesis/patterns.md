---
project: adapty-redesign
type: synthesis
tags: [synthesis, patterns, design-system, all-sites]
created: 2026-01-12
---

# Common Design Patterns Across Reference Sites

## Overview
Analysis of 5 premium SaaS sites reveals consistent patterns in modern web design. These patterns represent industry best practices for developer-focused B2B products.

## Typography Patterns

### Font Choices
| Site | Primary | Display | Mono | Serif |
|------|---------|---------|------|-------|
| Linear | Inter Variable | - | - | - |
| Attio | Inter | Inter Display | JetBrains Mono | Tiempos Text |
| Polar | Geist Sans | - | Geist Mono | - |
| Vercel | Geist | Space Grotesk | Geist Mono | - |
| Clerk | Suisse International | - | Söhne Mono | - |

**Pattern**: All sites use geometric sans-serif fonts. Inter/Geist dominate. Premium sites add display fonts for headlines.

### Letter Spacing
All sites use negative letter-spacing on headlines:
- Linear: -0.25px on body, tighter on headings
- Vercel: Tight tracking throughout
- Clerk: -2.24px on H1 (-3.5%)
- Attio: -0.005em to -0.02em scale

**Pattern**: Negative letter-spacing creates modern, premium feel. Tighter on larger text.

### Type Scale
Common sizes across sites:
- H1: 48-64px, weight 600-700
- H2: 24-36px, weight 500-600
- Body: 14-16px, weight 400-500
- Small: 12-14px

**Pattern**: Base 16px, 1.5 line-height. Scale multiplier ~1.25-1.5.

## Color Systems

### Background Philosophy
| Site | Theme | Primary BG | Approach |
|------|-------|------------|----------|
| Linear | Dark | #08090a | Near-black with layered grays |
| Attio | Light | #FFFFFF | Pure white with subtle accents |
| Polar | Dark | #171719 | Near-black, minimal surfaces |
| Vercel | Dark | #000000 | True black, bold choice |
| Clerk | Light | #F7F7F8 | Warm gray, softer than white |

**Pattern**: 3 dark, 2 light. Dark sites prefer near-black over true black (except Vercel). Light sites use warm grays.

### Color Format
- Linear: HSL format
- Attio: LAB color space (cutting-edge)
- Polar: Hex + LAB hybrid
- Vercel: HSLA with comprehensive scales
- Clerk: Hex

**Pattern**: HSL/HSLA preferred for programmatic control. LAB for perceptual accuracy.

### Brand Colors
All sites have a single memorable accent:
- Linear: Blue/Indigo (#5e6ad2)
- Attio: Blue (LAB-defined)
- Polar: Blue (deep, vivid)
- Vercel: Multi-gradient (blue→cyan, purple→pink, red→yellow)
- Clerk: Purple (#6C47FF)

**Pattern**: Blue-purple spectrum dominates tech products. One accent color, used sparingly.

### Semantic Colors
Universal semantic color naming:
- Success: Green (various shades)
- Warning: Yellow/Amber
- Error: Red
- Info: Blue

**Pattern**: Consistent semantic colors across all sites. 10-level scales common (100-1000).

## Spacing Systems

### Base Units
- Linear: Not explicitly defined, appears 4px-based
- Attio: 4px base (Tailwind-compatible)
- Polar: 0.25rem (4px) base
- Vercel: 4px explicit base with multipliers
- Clerk: Appears 4px-based

**Pattern**: Universal 4px base unit. Multiplier scale: 2x, 4x, 6x, 8x, 12x, 16x, 24x.

### Common Spacing Values
```
4px   - Tight spacing, icon padding
8px   - Small gaps, button padding
12px  - Medium gaps
16px  - Standard section padding
24px  - Primary gap (most common)
32px  - Section margins
48px  - Large separations
64px+ - Hero sections
```

## Border Radius

### Patterns
| Site | Default | Large | Philosophy |
|------|---------|-------|------------|
| Linear | 8px | 12-16px | Consistent medium radius |
| Attio | 8px | 12px | Similar to Linear |
| Polar | 9.6px (0.6rem) | 32px | Slightly larger base |
| Vercel | 6px | 8px | Compact, professional |
| Clerk | 24px (pills) | - | Fully rounded for CTAs |

**Pattern**: 6-12px range for default. Smaller radius = more professional. Pill shapes for CTAs gaining popularity.

## Shadow Systems

### Dark Mode Shadows
Sites use different approaches for dark mode:
- Linear: Multiple subtle shadows with blur
- Vercel: Compound shadows with white border overlay (`0 0 0 1px #ffffff25`)
- Polar: Minimal shadows, rely on borders

**Pattern**: Dark mode needs border definition, not just shadows. White/light border overlays create depth.

### Shadow Levels
Common hierarchy:
1. Border - Subtle definition
2. Small - Cards, inputs
3. Medium - Dropdowns, popovers
4. Large - Modals, dialogs

## Animation Patterns

### Timing Functions
| Site | Primary Easing | Feel |
|------|----------------|------|
| Linear | Multiple custom curves | Varied by context |
| Vercel | `cubic-bezier(.175,.885,.32,1.1)` | Bouncy, premium |
| Polar | `cubic-bezier(.4,0,.2,1)` | Standard ease-in-out |

**Pattern**: Custom easing functions for premium feel. Slight overshoot (>1.0) creates bouncy animations.

### Animation Durations
- Fast (micro-interactions): 100-200ms
- Standard (transitions): 200-300ms
- Slow (overlays, modals): 300-500ms

**Pattern**: Faster = more responsive feel. 150-200ms sweet spot for most interactions.

### Common Animation Patterns
All sites implement:
- `fadeIn/fadeOut` - Opacity transitions
- `scaleIn/scaleOut` - Scale from 0.96-1.0
- `slideIn/slideOut` - Directional movement
- `spin` - Loading indicators

**Pattern**: Scale animations start at 0.96 (not 0), creating subtle "pop" effect.

## Component Patterns

### Buttons
Common button patterns:
- Primary: Solid background, contrast text
- Secondary: Outline or ghost style
- Sizes: Small (32px), Default (40px), Large (48px)

**Pattern**: 8px height increments. Pill shapes emerging for CTAs.

### Navigation
- Header height: 64-85px range
- Minimal styling - text links without visible buttons
- Sticky headers common
- Mobile: hamburger with slide-out

### Cards
- Background matches or slightly differs from page
- Subtle borders over shadows
- Consistent padding (16-24px)
- Large radius (12-16px)

## Layout Patterns

### Max Widths
- Content: 1200-1400px
- Text: 65-75ch
- Wide sections: 100% with padding

### Grid Systems
- 12-column base
- Gap: 24px (standard), 16px (compact)
- Responsive: Stack on mobile

### Section Spacing
- Hero: 48-96px vertical padding
- Content sections: 64-128px
- Footer: 48-64px

## Key Insights

### Universal Patterns
1. **4px base spacing** - Industry standard
2. **Geometric sans-serif fonts** - Inter/Geist dominant
3. **Negative letter-spacing** - Premium typography
4. **Blue-purple accent colors** - Tech industry standard
5. **6-12px border radius** - Professional but modern
6. **200-300ms animations** - Responsive but smooth

### Emerging Patterns
1. **LAB color space** - More accurate colors
2. **Bouncy easing** - Premium micro-interactions
3. **Compound shadows** - Better dark mode depth
4. **Pill-shaped CTAs** - Friendly, modern feel
5. **Display fonts for headlines** - Visual hierarchy

### Anti-Patterns to Avoid
1. Large border radius everywhere (too playful)
2. Heavy shadows in dark mode (doesn't work)
3. Too many accent colors (dilutes brand)
4. Slow animations (feels sluggish)
5. Pure white backgrounds (harsh on eyes)
