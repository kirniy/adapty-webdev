# Design System 3: Polar-Minimal

## Philosophy

**Vision**: Maximum minimalism with code-focused aesthetics and exceptional readability
**Inspiration**: polar.sh
**Key Differentiators**: Developer-centric, monospace accents, minimal chrome, high contrast

---

## Color Tokens

### Primary Palette
```css
--color-primary: /* TODO: Extract from Polar */
--color-primary-hover:
--color-primary-active:
```

### Backgrounds
```css
--bg-primary: /* Likely dark with high contrast */
--bg-secondary:
--bg-tertiary:
--bg-code: /* Code block backgrounds */
--bg-elevated:
```

### Text Colors
```css
--text-primary:
--text-secondary:
--text-tertiary:
--text-muted:
--text-code: /* Code text color */
```

### Semantic Colors
```css
--color-success:
--color-warning:
--color-error:
--color-info:
```

### Syntax Highlighting
```css
--syntax-keyword:
--syntax-string:
--syntax-number:
--syntax-comment:
--syntax-function:
--syntax-variable:
```

### Borders
```css
--border-default:
--border-subtle:
--border-code:
```

---

## Typography

### Font Family
```css
--font-sans: /* TODO: Extract exact font stack */
--font-mono: /* Primary for code blocks */
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
--leading-code: /* Code-specific line height */
--leading-normal: 1.5;
--leading-relaxed: 1.625;
```

### Letter Spacing
```css
--tracking-tighter:
--tracking-tight:
--tracking-normal:
--tracking-wide:
--tracking-mono: /* Monospace-specific */
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

### Code Block Spacing
```css
--code-padding:
--code-margin:
```

---

## Border & Radius

### Border Widths
```css
--border-width-thin:
--border-width-default:
```

### Radius Scale
```css
--radius-none: 0;
--radius-sm:
--radius-md:
--radius-lg:
--radius-code: /* Code block radius */
```

---

## Shadows

### Levels
```css
--shadow-xs: /* Minimal shadow usage expected */
--shadow-sm:
--shadow-md:
```

---

## Animations

### Timing Functions
```css
--ease-linear: linear;
--ease-out:
--ease-in-out:
```

### Duration Standards
```css
--duration-instant: 0ms;
--duration-fast:
--duration-normal:
```

### Hover Behaviors
- Button hover: /* Minimal, functional */
- Link hover: /* Underline or color shift */
- Card hover: /* Subtle border change */

### Scroll Effects
- Minimal to none (focus on readability)

---

## Component Guidelines

### Buttons
```
Primary: Minimal, clear action
Secondary: Ghost/outline style
Sizes: sm, md, lg
States: default, hover, active, disabled
```

### Code Blocks
```
Default:
With line numbers:
Copy button:
Language indicator:
```

### Cards
```
Default card: Clean, minimal chrome
Feature card: Focus on content
Hover effect: Subtle
```

### Inputs
```
Default state:
Focus state:
Error state:
```

### Navigation
```
Header style: Minimal, functional
Mobile menu: Clean, accessible
```

---

## Raw Data Reference

After extraction, raw JSON files will be stored in:
`/references/polar/raw-data/`

---

## Implementation Notes

<!-- Notes from implementation will be added here -->

