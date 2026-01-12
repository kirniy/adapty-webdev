# Design System 2: Attio-Inspired

## Philosophy

**Vision**: Clean, light theme with excellent information hierarchy and subtle animations
**Inspiration**: attio.com
**Key Differentiators**: Light-first design, sophisticated hierarchy, refined interactions

---

## Color Tokens

### Primary Palette
```css
--color-primary: /* TODO: Extract from Attio */
--color-primary-hover:
--color-primary-active:
```

### Backgrounds
```css
--bg-primary: /* Light background - likely white or near-white */
--bg-secondary:
--bg-tertiary:
--bg-elevated:
--bg-overlay:
```

### Text Colors
```css
--text-primary:
--text-secondary:
--text-tertiary:
--text-muted:
--text-inverse:
```

### Semantic Colors
```css
--color-success:
--color-warning:
--color-error:
--color-info:
```

### Borders
```css
--border-default:
--border-subtle:
--border-strong:
```

### Accents
```css
--accent-1: /* Attio often uses subtle color accents */
--accent-2:
--accent-3:
```

---

## Typography

### Font Family
```css
--font-sans: /* TODO: Extract exact font stack */
--font-mono:
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
```

### Weight Usage
```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Line Heights
```css
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
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
```

### Section Padding
```css
--section-padding-y:
--section-padding-x:
```

### Component Gaps
```css
--gap-xs:
--gap-sm:
--gap-md:
--gap-lg:
--gap-xl:
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
--shadow-2xl:
```

---

## Animations

### Timing Functions
```css
--ease-linear: linear;
--ease-in:
--ease-out:
--ease-in-out:
--ease-subtle: /* Attio-specific subtle easing */
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
- Button hover:
- Link hover:
- Card hover:

### Scroll Effects
- Fade-in reveals:
- Stagger animations:

### Information Hierarchy
- Section reveals:
- Content prioritization:

---

## Component Guidelines

### Buttons
```
Primary:
Secondary:
Ghost:
Sizes: sm, md, lg
States: default, hover, active, disabled, loading
```

### Cards
```
Default card:
Feature card:
Testimonial card:
Hover effect:
```

### Inputs
```
Default state:
Focus state:
Error state:
Disabled state:
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
`/references/attio/raw-data/`

---

## Implementation Notes

<!-- Notes from implementation will be added here -->

