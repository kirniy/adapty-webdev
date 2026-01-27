# Linear Design System - Extracted DNA

## Overview
This document captures the exact design values extracted from analyzing Linear.app homepage videos frame by frame.

---

## 1. TYPOGRAPHY SYSTEM

### Font Family
- **Primary**: Inter (system-ui fallback)
- **Weights Used**: 400 (regular), 500 (medium), 600 (semibold)
- **Never uses**: Bold (700) - too heavy for Linear's aesthetic

### Type Scale (Exact Values)

| Element | Size | Weight | Letter Spacing | Line Height |
|---------|------|--------|----------------|-------------|
| H1 (Hero) | 48-56px | 600 | -0.02em | 1.1 |
| H2 (Section) | 40-48px | 600 | -0.02em | 1.15 |
| H3 (Card Title) | 20-24px | 500 | -0.01em | 1.3 |
| Body Large | 16px | 400 | 0 | 1.6 |
| Body | 14px | 400 | 0 | 1.5 |
| Small/Caption | 12px | 500 | 0.01em | 1.4 |
| Label/Tag | 11-12px | 500 | 0.02em | 1 |

### Key Typography Rules
- **NEVER more than 3 lines** of text in any description
- Headings use tight tracking (-0.02em) for premium feel
- Body text uses muted color (text-zinc-400, ~60% opacity)
- Feature tags: Small text with colored dot prefix

---

## 2. SPACING SYSTEM

### Section Spacing
| Breakpoint | Padding Y |
|------------|-----------|
| Desktop (lg+) | 120-160px |
| Tablet (md) | 80-100px |
| Mobile | 60-80px |

### Container
- **Max Width**: 1200px (max-w-6xl in Tailwind)
- **Padding X**: 24px mobile, 32px tablet, 48px desktop

### Component Spacing
| Element | Value |
|---------|-------|
| Card Padding | 24-32px |
| Grid Gap | 16-24px |
| Element Margin | 16px default |
| Section Header to Content | 48-64px |

---

## 3. BORDER RADIUS SYSTEM (CRITICAL)

Linear uses a CONSISTENT radius system - same values reused everywhere:

| Token | Value | Usage |
|-------|-------|-------|
| `sm` | 6px | Small buttons, tags, inputs |
| `md` | 8px | Standard buttons, cards |
| `lg` | 12px | Feature cards |
| `xl` | 16px | Large cards, modals |
| `2xl` | 20-24px | Hero images, modals |

### Verified from Videos:
- Feature cards: `rounded-[20px]` (or rounded-2xl)
- Buttons: `rounded-lg` (8px)
- Modal: `rounded-2xl` (16-20px)
- Input fields: `rounded-md` (6px)

---

## 4. COLOR SYSTEM

### Background Colors
| Element | Color |
|---------|-------|
| Page Background | `#000000` (pure black) |
| Card Background | `rgba(255,255,255,0.03)` or `#111111` |
| Modal Background | `#111111` or `#0A0A0A` |
| Elevated Surface | `rgba(255,255,255,0.05)` |

### Border Colors
| Element | Color |
|---------|-------|
| Subtle Border | `rgba(255,255,255,0.1)` |
| Separator | `rgba(255,255,255,0.08)` |
| Hover Border | `rgba(255,255,255,0.2)` |

### Text Colors
| Element | Color |
|---------|-------|
| Primary Text | `#FFFFFF` |
| Secondary Text | `rgba(255,255,255,0.6)` or `#A1A1AA` |
| Muted Text | `rgba(255,255,255,0.4)` or `#71717A` |
| Accent/Link | `#FFFFFF` with hover opacity |

---

## 5. SEPARATORS & DIVIDERS

### T-Separator Pattern (Signature Linear Pattern)
```
┌─────────────────────────────────────┐
│         Main Feature (Full)         │
│         ──────────────────          │ ← Horizontal border-bottom
├──────────────────┬──────────────────┤
│  Left Feature    │  Right Feature   │ ← Vertical divider between
│                  │                  │
└──────────────────┴──────────────────┘
```

### Separator Specifications
- **Thickness**: 1px
- **Color**: `border-white/10` or `border-zinc-800`
- **Opacity**: Very subtle, barely visible
- **Usage**: Between major feature groups only

### Implementation
```tsx
// Main feature with bottom border
<div className="pb-8 border-b border-white/10">
  {/* Main feature content */}
</div>

// Two features below with vertical divider
<div className="grid grid-cols-2">
  <div className="pt-8 pr-8 border-r border-white/10">
    {/* Left feature */}
  </div>
  <div className="pt-8 pl-8">
    {/* Right feature */}
  </div>
</div>
```

---

## 6. MODAL SYSTEM

### Animation (CRITICAL - This is Linear's Signature)

```tsx
const modalAnimation = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
  transition: { 
    duration: 0.2,  // 200ms - FAST
    ease: [0.16, 1, 0.3, 1]  // ease-out-expo
  }
};
```

### Backdrop
```tsx
className="bg-black/60 backdrop-blur-sm"
```

### Modal Container
```tsx
className="bg-[#111111] rounded-2xl max-w-[680px] w-full mx-4"
```

### Modal Structure
1. Close button (top-right, X icon)
2. Hero image/visual (full width, top)
3. Title (large heading)
4. Description paragraphs (max 3 lines each)
5. Testimonial quote (centered, with logo)
6. Stats grid (2x2 or similar)

### Close Button
- Position: Top-right corner
- Style: Circular, subtle bg on hover
- Icon: X (lucide-react)

---

## 7. ANIMATION SYSTEM

### Timing Guidelines
| Animation Type | Duration | Easing |
|----------------|----------|--------|
| Micro-interaction | 100-150ms | ease |
| Hover states | 150ms | ease |
| Modal enter | 200ms | ease-out-expo |
| Modal exit | 150ms | ease-in |
| Card hover | 150ms | ease-out |
| Page transitions | 300ms | ease-out |

### Easing Curves
```css
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-expo: cubic-bezier(0.4, 0, 1, 1);
--ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);
```

### Micro-interactions

#### Card Hover
```tsx
<motion.div
  whileHover={{ y: -2 }}
  transition={{ duration: 0.15, ease: "easeOut" }}
>
```
- **Max translateY**: 2px (never more!)
- **No scale transform**
- Border opacity increase on hover

#### Button Hover
```tsx
<button className="transition-colors duration-150 hover:bg-white/10">
```
- Color change only
- NO movement
- 150ms duration

#### Button Active/Press
```tsx
<button className="active:scale-[0.98] transition-transform">
```
- Subtle scale down (0.98)
- Immediate feedback

---

## 8. CARD SYSTEM

### Feature Cards (3-column layout)
```tsx
className="bg-white/[0.03] border border-white/10 rounded-[20px] p-6"
```

### Card Hover State
```tsx
className="hover:bg-white/[0.05] hover:border-white/20 transition-all duration-150"
```

### Card Content Structure
1. Visual/illustration (top, full width)
2. Title (bottom-left)
3. Plus icon (bottom-right, opens modal)

---

## 9. BUTTON SYSTEM

### Primary Button
```tsx
className="bg-white text-black rounded-lg px-5 py-2.5 font-medium text-sm"
```

### Secondary Button (Ghost)
```tsx
className="bg-transparent text-white rounded-lg px-5 py-2.5 font-medium text-sm border border-white/20"
```

### Text Link with Arrow
```tsx
className="text-white text-sm font-medium flex items-center gap-1 group"
// With chevron-right icon that shifts on hover
```

---

## 10. ICON SYSTEM

### Style
- **Type**: Outline (never filled)
- **Stroke Width**: 1.5px
- **Size**: 16px (small), 20px (medium), 24px (large)
- **Library**: Lucide React

### Icon Usage
- Feature tags: Small colored dot + text
- Plus icons in cards: Bottom-right, opens modal
- Navigation: 20px size

---

## 11. IMAGE SYSTEM

### Aspect Ratios
- Hero screenshots: 16:9 or wider
- Feature card images: 4:3 or 16:10
- Modal hero images: 16:9

### Treatment
- Subtle rounded corners (rounded-2xl)
- Optional: Fade edges with gradient overlay
- Shadow: Subtle glow for product screenshots

---

## 12. KEY PRINCIPLES (DO NOT BREAK)

1. **No text blocks > 3 lines** - EVER
2. **Consistent radius** - Use the 4-value system
3. **Subtle separators** - 1px, low opacity
4. **Fast animations** - 200ms max for UI
5. **Minimal movement** - 2px hover lift max
6. **Pure black background** - #000000
7. **Muted text** - 60% opacity for descriptions
8. **T-pattern layout** - For feature sections
9. **Modal scale animation** - 0.96 → 1, 200ms
10. **Border consistency** - white/10 default, white/20 hover

---

## 13. ANTI-PATTERNS (NEVER DO)

- ❌ Border radius that varies between similar elements
- ❌ Text descriptions longer than 3 lines
- ❌ Heavy drop shadows
- ❌ Gradients in backgrounds
- ❌ Scale transforms > 1.02 on hover
- ❌ translateY > 3px on any animation
- ❌ Animations > 300ms for UI elements
- ❌ Bouncy/spring animations (too playful)
- ❌ Pure white backgrounds
- ❌ Bold (700) font weights

---

*Extracted from Linear.app homepage videos - Round 1 Analysis*
