---
project: adapty-redesign
type: library-doc
library: shadcn-ui
version: latest
last_verified: 2026-01-12
tags: [library, components, ui, radix, tailwind]
---

# shadcn/ui - Local Documentation

> **Source**: https://ui.shadcn.com
> **Purpose**: Copy-paste component library built on Radix UI + Tailwind

---

## Overview

shadcn/ui is NOT a component library you install via npm. Instead, you copy components directly into your project, giving full ownership and customization control.

**Philosophy**: "This is NOT a component library. It's a collection of re-usable components that you can copy and paste into your apps."

---

## Key Concepts

### Not a Dependency
- Components live in YOUR codebase
- Full control over styling and behavior
- No version lock-in or breaking updates

### Built On
- **Radix UI** - Accessible primitives
- **Tailwind CSS** - Styling
- **Class Variance Authority (CVA)** - Variant handling
- **clsx + tailwind-merge** - Class merging

---

## Installation

```bash
# Initialize shadcn in existing Next.js project
npx shadcn@latest init

# Add specific components
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add tabs
```

---

## Component Structure

```
src/
└── components/
    └── ui/           # shadcn components live here
        ├── button.tsx
        ├── card.tsx
        ├── dialog.tsx
        └── ...
```

---

## Customization

### Theming (CSS Variables)
```css
/* globals.css */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... */
}
```

### Component Modification
Since components are in your codebase, modify directly:
```tsx
// components/ui/button.tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center...",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground...",
        destructive: "bg-destructive...",
        // Add custom variant
        brand: "bg-brand text-brand-foreground...",
      },
    },
  }
)
```

---

## ADAPTY Usage Plan

### Phase A (No Libraries)
- Do NOT use shadcn/ui
- Build components from scratch with vanilla Tailwind
- Purpose: Test design systems in isolation

### Phase B (Library Testing)
- Use shadcn/ui as BASE library
- Test: shadcn/ui, shadcn-blocks, 21st.dev, React Bits
- Compare: Development speed, customization effort, output quality

### Production
- Likely use shadcn/ui as foundation
- Customize to match winning DS
- Extend with additional components as needed

---

## Components Relevant to ADAPTY

| Component | Section Use |
|-----------|-------------|
| Button | CTAs, navigation |
| Card | Features, testimonials, case studies |
| Dialog | Modals, popovers |
| Dropdown Menu | Navigation |
| Tabs | SDK code snippets |
| Carousel | Testimonials, logos |
| Input | Email signup forms |
| Badge | Tags, labels |
| Navigation Menu | Header navigation |
| Avatar | Testimonials |

---

## Related Libraries

### shadcn-blocks
- Pre-built page sections using shadcn/ui
- Marketing blocks, pricing tables, feature grids
- **Use case**: Faster section building in Phase B

### 21st.dev
- AI-powered component search
- MCP integration available
- **Use case**: Component discovery and generation

### React Bits
- Animation-focused components
- Micro-interactions library
- **Use case**: Adding polish and delight

---

## Quick Commands

```bash
# Initialize
npx shadcn@latest init

# Add components
npx shadcn@latest add [component]

# Add multiple
npx shadcn@latest add button card dialog

# List available components
npx shadcn@latest add --all
```
