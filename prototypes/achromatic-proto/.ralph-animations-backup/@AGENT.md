# Achromatic-Proto Animation Project

## Project Overview
Marketing website for Adapty built with Next.js 15.5, React 19, Tailwind CSS 4.0, and motion/react.

## Build & Run Commands

### Development Server
```bash
cd /Users/kirniy/dev/adapty-dev/prototypes/achromatic-proto
pnpm --filter marketing dev
# Runs on http://localhost:3001
```

### Production Build (Use for verification)
```bash
cd /Users/kirniy/dev/adapty-dev/prototypes/achromatic-proto
pnpm --filter marketing build
```

### Lint
```bash
cd /Users/kirniy/dev/adapty-dev/prototypes/achromatic-proto
pnpm --filter marketing lint
```

## Key Directories

### Components
- **Sections**: `apps/marketing/components/sections/`
- **Fragments**: `apps/marketing/components/fragments/`
- **Layout**: `apps/marketing/components/layout/`
- **Debug**: `apps/marketing/components/debug/`

### Content & State
- **Content**: `apps/marketing/lib/content.ts`
- **Debug Context**: `apps/marketing/lib/debug-context.tsx`

### Assets
- **Hero Images**: `apps/marketing/public/assets/hero/`
- **Role Images**: `apps/marketing/public/assets/roles/`

## Animation Library

### Primary: motion/react
```jsx
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
```

### Key Imports
- `motion` - Animated components
- `AnimatePresence` - Enter/exit animations
- `useReducedMotion` - Accessibility hook

## Important Patterns

### Section Structure
Most sections follow this pattern:
```jsx
<GridSection>
  <BlurFade delay={0.1}>
    {/* Content */}
  </BlurFade>
</GridSection>
```

### Debug Context Variants
Sections read variants from debug context:
```jsx
const { heroVariant, roleVariant } = useDebugSettings();
```

### Shared Fragments
- `BlurFade` - Blur-in entrance animation
- `BorderBeam` - Animated border beam effect
- `NumberTicker` - Counting animation

## Discovered Patterns & Gotchas

### Already Using Correct Patterns
- `useReducedMotion()` hook is imported in most sections
- Spring transitions used throughout
- Custom easing: `[0.645, 0.045, 0.355, 1]` (ease-in-out-cubic)

### Common Issues to Fix
- Some animations may exceed 300ms
- Check for ease-in usage (should be ease-out)
- Verify scale animations don't start from 0
- Ensure all hover effects work only with `@media (hover: hover)`

### Performance Notes
- Avoid blur over 20px
- Only animate transform and opacity
- Use will-change sparingly

## Progress Notes
<!-- Add learnings after each loop -->

---
Last updated: Starting animation polish
