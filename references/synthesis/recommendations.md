---
project: adapty-redesign
type: synthesis
tags: [synthesis, recommendations, design-system, adapty, actionable]
created: 2026-01-12
---

# Design System Recommendations for Adapty

## Executive Summary

Based on analysis of 5 premium SaaS sites (Linear, Attio, Polar, Vercel, Clerk), we recommend a **light theme with warm undertones**, **Inter + display font combination**, **bouncy micro-interactions**, and **approachable but professional aesthetics**. Adapty should feel modern and developer-friendly while remaining accessible to non-technical stakeholders.

## Theme Recommendation: Light with Warmth

### Why Light Theme?
- Adapty is a business tool, not a code editor
- Mobile SDK documentation needs readability
- Broader appeal beyond hardcore developers
- Differentiates from dark-themed competitors

### Background Approach
```css
/* Recommended: Warm gray like Clerk, not pure white */
--bg-page: #F7F7F8;        /* Main background */
--bg-card: #FFFFFF;        /* Elevated surfaces */
--bg-subtle: #FAFAFA;      /* Subtle differentiation */
--bg-muted: #F1F1F3;       /* Muted sections */
```

### Rationale
Clerk's warm gray (#F7F7F8) is easier on eyes than pure white while maintaining a clean, professional appearance. This approach works well for documentation-heavy products.

---

## Typography Recommendation

### Font Stack
```css
/* Primary: Inter - Industry standard, excellent readability */
--font-sans: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;

/* Display: Inter Display or Geist for headlines (optional) */
--font-display: "Inter Display", var(--font-sans);

/* Mono: JetBrains Mono for code - developer favorite */
--font-mono: "JetBrains Mono", "Fira Code", monospace;
```

### Type Scale
```css
/* Based on Linear/Clerk patterns */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */
```

### Letter Spacing
```css
/* Negative spacing for headlines (Clerk-inspired) */
--tracking-tighter: -0.05em;   /* Headlines */
--tracking-tight: -0.025em;    /* Subheadings */
--tracking-normal: 0;          /* Body text */
```

---

## Color System Recommendation

### Brand Colors
```css
/* Primary: Blue-purple spectrum (industry standard for dev tools) */
--brand-primary: #6366F1;      /* Indigo - between Linear and Clerk */
--brand-primary-light: #818CF8;
--brand-primary-dark: #4F46E5;

/* Consider: Adapty's existing brand colors if established */
```

### Gray Scale (Warm)
```css
/* Warm grays inspired by Clerk */
--gray-50: #FAFAFA;
--gray-100: #F4F4F5;
--gray-200: #E4E4E7;
--gray-300: #D4D4D8;
--gray-400: #A1A1AA;
--gray-500: #71717A;
--gray-600: #52525B;
--gray-700: #3F3F46;
--gray-800: #27272A;
--gray-900: #18181B;
--gray-950: #09090B;
```

### Semantic Colors
```css
/* Standard semantic colors */
--success: #22C55E;    /* Green */
--warning: #F59E0B;    /* Amber */
--error: #EF4444;      /* Red */
--info: #3B82F6;       /* Blue */
```

---

## Spacing System

### Base Unit: 4px
```css
/* Vercel-inspired comprehensive scale */
--space-0: 0;
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-5: 1.25rem;    /* 20px */
--space-6: 1.5rem;     /* 24px - PRIMARY GAP */
--space-8: 2rem;       /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
```

### Primary Gap
24px (--space-6) should be the default gap for most layouts, matching industry standard.

---

## Border Radius

### Recommendation: Professional but Friendly
```css
/* Vercel-inspired compact radii with Clerk pill option */
--radius-sm: 4px;      /* Subtle rounding */
--radius-md: 6px;      /* Default - professional */
--radius-lg: 8px;      /* Cards, containers */
--radius-xl: 12px;     /* Large cards */
--radius-2xl: 16px;    /* Hero sections */
--radius-full: 9999px; /* Pills, avatars */
```

### Button Strategy
- Default buttons: 6px radius (professional)
- Primary CTAs: Consider pill (full radius) like Clerk for friendliness
- Icon buttons: Full radius

---

## Shadow System

### Light Theme Shadows
```css
/* Subtle, professional shadows */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);

/* Border-based elevation (alternative) */
--shadow-border: 0 0 0 1px rgb(0 0 0 / 0.05);
```

---

## Animation System

### Timing
```css
/* Polar-inspired speed with Vercel bounce */
--duration-fast: 150ms;     /* Micro-interactions */
--duration-normal: 200ms;   /* Standard transitions */
--duration-slow: 300ms;     /* Overlays, modals */
```

### Easing Functions
```css
/* Vercel-inspired bouncy feel */
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);           /* Standard */
--ease-in: cubic-bezier(0.4, 0, 1, 1);                  /* Accelerate */
--ease-out: cubic-bezier(0, 0, 0.2, 1);                 /* Decelerate */
--ease-bounce: cubic-bezier(0.175, 0.885, 0.32, 1.1);   /* Premium bounce */
```

### Key Animations
```css
/* Linear-inspired animation library */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes slideInUp {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

---

## Component Recommendations

### Buttons
```css
/* Size scale matching Vercel */
--button-height-sm: 32px;
--button-height-md: 40px;
--button-height-lg: 48px;

/* Padding */
--button-padding-x-sm: 12px;
--button-padding-x-md: 16px;
--button-padding-x-lg: 24px;
```

### Inputs
```css
/* Match button heights for alignment */
--input-height-sm: 32px;
--input-height-md: 40px;
--input-height-lg: 48px;
```

### Navigation
```css
--header-height: 64px;    /* Industry standard */
--sidebar-width: 280px;   /* Dashboard sidebar */
```

---

## Layout

### Container Widths
```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1400px;  /* Max page width */
```

### Content Width
```css
--prose-width: 65ch;      /* Optimal reading width */
```

---

## Design System Variants for Testing

Based on the analysis, here are 5 distinct DS variants to test:

### DS1: Linear-Inspired (Premium Dark)
- Dark theme (#08090a background)
- Comprehensive animation library
- Layered backgrounds
- Best for: Premium positioning

### DS2: Attio-Inspired (Editorial Light)
- Light theme with pure white
- Multi-font hierarchy
- LAB colors (if technically feasible)
- Best for: Content-heavy sections

### DS3: Polar-Inspired (Minimal)
- Fast animations (150ms)
- Single border color
- Geist fonts
- Best for: Developer audience

### DS4: Vercel-Inspired (Comprehensive)
- Bouncy easing
- Signature gradients
- 10-level color scales
- Best for: Design system scalability

### DS5: Hybrid Premium
- Clerk's warm gray background
- Linear's animations
- Vercel's bouncy easing
- Polar's speed
- Best for: Balanced approach

---

## Implementation Priority

### Phase 1: Core Tokens
1. Color system (background, text, brand)
2. Typography (fonts, scale, spacing)
3. Spacing system (4px base)
4. Border radius scale

### Phase 2: Components
1. Buttons (sizes, variants)
2. Inputs (text, select)
3. Cards
4. Navigation

### Phase 3: Polish
1. Animation library
2. Shadows
3. Focus states
4. Transitions

---

## Key Decisions Required

1. **Theme**: Light (recommended) vs Dark vs Both
2. **Brand Color**: Keep existing Adapty colors or adopt new palette?
3. **Font License**: Inter (free) vs premium options (Geist, Suisse)?
4. **Animation Depth**: Minimal (Polar) vs Comprehensive (Linear)?
5. **Radius Style**: Professional (6px) vs Friendly (pills)?

---

## Next Steps

1. Fill DS1-DS5 token files with specific values
2. Build Phase A prototypes using skeleton content
3. Deploy to Vercel for comparison testing
4. Gather feedback from Sergey and team
5. Select winner for Phase B library integration
