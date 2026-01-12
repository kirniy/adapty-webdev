---
project: adapty-redesign
type: synthesis
tags: [synthesis, differentiators, design-system, competitive-analysis]
created: 2026-01-12
---

# Unique Design Approaches Per Site

## Linear - Premium Micro-Interactions

### Unique Characteristics
1. **67+ Custom Animations**: Most comprehensive animation library observed
2. **Layered Background System**: Multiple gray levels (level-0 through level-3)
3. **Inter Variable with Custom Features**: OpenType features `cv01, ss03` enabled
4. **Dedicated Component Animations**: Unique animations for specific components (commandMenu, toast, modal)

### Signature Elements
- **Scale Animation Origin**: Animations start at 0.96, not smaller
- **Multiple Easing Curves**: Different curves for different interaction types
- **Shadow Layers**: Up to 5-layer shadows for depth perception
- **Highlight Colors**: Sophisticated highlight/focus states

### What Makes It Premium
```css
/* Linear's attention to detail */
--animation-duration-fast: 100ms;
--animation-duration-normal: 150ms;
--animation-duration-slow: 200ms;
/* Three distinct speed tiers for micro-interactions */
```

### Lessons for Adapty
- Invest in comprehensive animation library
- Use layered backgrounds for depth
- Multiple easing curves add sophistication
- Component-specific animations feel intentional

---

## Attio - LAB Color & Editorial Typography

### Unique Characteristics
1. **LAB Color Space**: First major SaaS using perceptually uniform colors
2. **4-Font System**: Most diverse typography (Inter, Inter Display, Tiempos Text, JetBrains Mono)
3. **Editorial Design**: Serif font (Tiempos) for marketing content
4. **500 Weight Default**: Heavier body text than typical

### Signature Elements
- **LAB Color Definition**: `lab(47.8503% 16.7831 -73.4422)` format
- **Semantic Font Assignment**: Different fonts for different content types
- **Dynamic Header Height**: `calc(68px + 0px + 48px)` - modular calculation
- **Comprehensive z-index System**: Named layers (dialogs: 100-101, menus: 200-202)

### What Makes It Premium
```css
/* Attio's perceptually uniform colors */
--color-blue-500: lab(47.8503% 16.7831 -73.4422);
/* Equal numeric changes = equal perceived changes */
```

### Lessons for Adapty
- Consider LAB for more accurate color perception
- Serif fonts can add editorial sophistication
- Multiple font families enable content differentiation
- Heavier body text (500) improves readability

---

## Polar - Minimal Code Aesthetic

### Unique Characteristics
1. **Geist Typography**: Uses Vercel's font system (modern association)
2. **Custom "Polar" Color Scale**: 11 unique gray levels
3. **Larger Base Radius**: 0.6rem (9.6px) vs typical 6-8px
4. **Fast Animations**: 0.15s duration (fastest observed)

### Signature Elements
- **Monospace Prominence**: Code aesthetic throughout brand
- **Minimal Surface Hierarchy**: Cards match page background
- **Simple Border System**: Single border color (#1d1d20) everywhere
- **Muted Foreground**: #6f717b for secondary text (softer than typical)

### What Makes It Premium
```css
/* Polar's speed and simplicity */
--animation-duration: 0.15s;
--border: #1d1d20; /* One border to rule them all */
```

### Lessons for Adapty
- Speed matters - faster animations feel more responsive
- Simplicity is its own aesthetic
- Consistent single values (one border color) reduce visual noise
- Developer audience appreciates code aesthetics

---

## Vercel - Comprehensive Design System

### Unique Characteristics
1. **True Black Background**: hsla(0,0%,0%,1) - boldest choice
2. **Signature Gradients**: Three named gradient themes (Develop, Preview, Ship)
3. **HSLA with 10-Level Scales**: Most comprehensive color system
4. **Bouncy Easing**: `cubic-bezier(.175,.885,.32,1.1)` with overshoot

### Signature Elements
- **"ds-" Prefix**: Mature design system namespace
- **Compound Shadows**: White border + black outline + blur layers
- **Gray Alpha Scale**: Separate transparency scale for overlays
- **Space Grotesk Display**: Distinctive headline font

### What Makes It Premium
```css
/* Vercel's signature bouncy easing */
--motion-swift: cubic-bezier(.175,.885,.32,1.1);
/* Note: 1.1 creates slight overshoot = premium feel */

/* Compound shadows for dark mode */
--shadow-border: 0 0 0 1px #ffffff25, 0 0 0 1px hsla(0,0%,0%,1);
```

### Lessons for Adapty
- True black is bold but works for Vercel's brand
- Bouncy easing creates memorable interactions
- Compound shadows solve dark mode depth
- Named gradients create brand recognition
- 10-level color scales enable precision

---

## Clerk - Developer-Friendly Light Theme

### Unique Characteristics
1. **Warm Gray Background**: #F7F7F8 (softer than pure white)
2. **Suisse International**: European, geometric feel
3. **Extreme Letter-Spacing**: -2.24px on H1 (-3.5%)
4. **Pill Buttons**: 24px radius (fully rounded) for CTAs

### Signature Elements
- **Purple Brand Color**: #6C47FF (distinctive in blue-dominated space)
- **Geist Numbers**: Separate font for tabular data
- **Söhne Mono**: Premium monospace choice
- **Label-Style H2s**: 13px, 500 weight, brand color

### What Makes It Premium
```css
/* Clerk's extreme letter-spacing */
h1 {
  letter-spacing: -2.24px; /* -3.5% of 64px */
}

/* Warm gray is easier on eyes */
background: #F7F7F8; /* Not pure white */
```

### Lessons for Adapty
- Warm gray backgrounds are friendlier
- Extreme letter-spacing on headlines creates impact
- Purple stands out in blue-dominated industry
- Pill buttons feel approachable
- Specialized fonts (numbers, mono) show attention to detail

---

## Comparative Matrix

| Feature | Linear | Attio | Polar | Vercel | Clerk |
|---------|--------|-------|-------|--------|-------|
| Theme | Dark | Light | Dark | Dark | Light |
| BG Color | #08090a | #FFFFFF | #171719 | #000000 | #F7F7F8 |
| Primary Font | Inter Variable | Inter | Geist | Geist | Suisse |
| Font Count | 1 | 4 | 2 | 3 | 3 |
| Animation Speed | Variable | - | Fast (0.15s) | Bouncy | - |
| Color System | HSL | LAB | Hex+LAB | HSLA 10-scale | Hex |
| Radius | 8px | 8px | 9.6px | 6px | 24px (pills) |
| Unique Feature | Animations | LAB colors | Speed | Gradients | Letter-spacing |

## What Each Site Does Best

| Site | Excels At | Consider For |
|------|-----------|--------------|
| Linear | Micro-interactions, polish | Animation system, depth |
| Attio | Color accuracy, typography | Multi-font strategy, LAB colors |
| Polar | Speed, simplicity | Fast animations, minimal approach |
| Vercel | System completeness | Design system architecture |
| Clerk | Light theme, friendliness | Approachable developer tools |

## Unique Innovations Worth Adopting

### From Linear
- Component-specific animation libraries
- Layered background system for depth

### From Attio
- LAB color space for perceptual accuracy
- Editorial serif fonts for marketing

### From Polar
- Sub-200ms animations for responsiveness
- Single-value simplicity (one border color)

### From Vercel
- Bouncy easing for premium feel
- Compound shadows for dark mode
- Named brand gradients

### From Clerk
- Warm gray over pure white
- Extreme headline letter-spacing
- Pill-shaped CTA buttons
