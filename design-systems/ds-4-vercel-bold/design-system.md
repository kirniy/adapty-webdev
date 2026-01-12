# Design System 4: Vercel-Bold

## Philosophy

**Vision**: Bold visuals with strong metrics presentation and colorful accents
**Inspiration**: vercel.com
**Key Differentiators**: Vibrant gradients, bold numbers/metrics, confident typography, dynamic visuals

---

## Color Tokens

### Primary Palette
```css
--color-primary: /* TODO: Extract from Vercel */
--color-primary-hover:
--color-primary-active:
```

### Backgrounds
```css
--bg-primary: /* Dark, but with color vibrancy */
--bg-secondary:
--bg-tertiary:
--bg-gradient: /* Gradient backgrounds */
--bg-elevated:
```

### Text Colors
```css
--text-primary:
--text-secondary:
--text-tertiary:
--text-muted:
--text-highlight: /* For metrics/numbers */
```

### Semantic Colors
```css
--color-success:
--color-warning:
--color-error:
--color-info:
```

### Accent Colors
```css
--accent-cyan:
--accent-purple:
--accent-pink:
--accent-orange:
--accent-blue:
```

### Gradients
```css
--gradient-primary:
--gradient-rainbow:
--gradient-accent:
--gradient-glow:
```

### Borders
```css
--border-default:
--border-subtle:
--border-gradient:
```

---

## Typography

### Font Family
```css
--font-sans: /* TODO: Extract exact font stack */
--font-mono:
--font-display: /* For bold headlines/metrics */
```

### Size Scale
```css
--text-xs:
--text-sm:
--text-base:
--text-lg:
--text-xl:
--text-2xl:
--text-3xl:
--text-4xl:
--text-5xl:
--text-6xl:
--text-7xl: /* Large metrics display */
--text-8xl:
```

### Weight Usage
```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

### Line Heights
```css
--leading-none: 1;
--leading-tight: 1.1;
--leading-snug: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
```

### Letter Spacing
```css
--tracking-tighter:
--tracking-tight:
--tracking-normal:
--tracking-wide:
```

---

## Spacing

### Base Unit
```css
--spacing-unit: /* TODO: Identify base unit */
```

### Scale System
```css
--space-0: 0;
--space-1:
--space-2:
--space-3:
--space-4:
--space-5:
--space-6:
--space-8:
--space-10:
--space-12:
--space-16:
--space-20:
--space-24:
--space-32:
--space-40:
--space-48:
--space-64:
--space-80:
--space-96:
```

### Section Padding
```css
--section-padding-y: /* Generous padding for impact */
--section-padding-x:
```

### Component Gaps
```css
--gap-xs:
--gap-sm:
--gap-md:
--gap-lg:
--gap-xl:
--gap-2xl:
```

---

## Border & Radius

### Border Widths
```css
--border-width-thin:
--border-width-default:
--border-width-thick:
```

### Radius Scale
```css
--radius-none: 0;
--radius-sm:
--radius-md:
--radius-lg:
--radius-xl:
--radius-2xl:
--radius-full: 9999px;
```

---

## Shadows

### Levels
```css
--shadow-xs:
--shadow-sm:
--shadow-md:
--shadow-lg:
--shadow-xl:
--shadow-glow: /* Colorful glow effects */
--shadow-gradient:
```

---

## Animations

### Timing Functions
```css
--ease-linear: linear;
--ease-in:
--ease-out:
--ease-in-out:
--ease-spring:
--ease-bounce:
```

### Duration Standards
```css
--duration-instant: 0ms;
--duration-fast:
--duration-normal:
--duration-slow:
--duration-slower:
```

### Hover Behaviors
- Button hover: Bold, confident transitions
- Link hover: Color shifts with gradients
- Card hover: Elevation + glow

### Visual Effects
- Gradient animations:
- Particle effects:
- Number counters:
- Glow pulses:

### Scroll Effects
- Reveal animations:
- Parallax:
- Stagger animations:

---

## Component Guidelines

### Buttons
```
Primary: Bold, gradient-capable
Secondary: Outlined with accent
Ghost: Minimal but confident
Sizes: sm, md, lg, xl
States: default, hover, active, disabled, loading
```

### Metrics Display
```
Large number display:
Animated counters:
Progress indicators:
Comparison visualizations:
```

### Cards
```
Default card:
Feature card:
Stats card:
Hover effect: Glow/elevation
```

### Inputs
```
Default state:
Focus state: Accent glow
Error state:
```

### Navigation
```
Header style:
Dropdown style:
Mobile menu:
```

---

## Raw Data Reference

After extraction, raw JSON files will be stored in:
`/references/vercel/raw-data/`

---

## Implementation Notes

<!-- Notes from implementation will be added here -->

