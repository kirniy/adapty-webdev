# Animation Guidelines Specification

Based on Emil Kowalski's "Animations on the Web" course (animations.dev).

## The Easing Blueprint

### ease-out (Most Common - Use for Enter/Exit)
Elements entering or exiting should use ease-out. The fast start creates responsiveness.

```css
/* Sorted weak to strong */
--ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);
--ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
--ease-out-quint: cubic-bezier(0.23, 1, 0.32, 1);
--ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
--ease-out-circ: cubic-bezier(0.075, 0.82, 0.165, 1);
```

### ease-in-out (For On-Screen Movement)
Use only when elements already on screen need to move or morph.

```css
/* Sorted weak to strong */
--ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
--ease-in-out-cubic: cubic-bezier(0.645, 0.045, 0.355, 1);
--ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
--ease-in-out-quint: cubic-bezier(0.86, 0, 0.07, 1);
--ease-in-out-expo: cubic-bezier(1, 0, 0, 1);
--ease-in-out-circ: cubic-bezier(0.785, 0.135, 0.15, 0.86);
```

### ease (For Hover Effects)
Use for hover states and color transitions.

```css
transition: background-color 150ms ease;
```

### linear (Avoid in UI)
Only use for:
- Constant-speed animations (marquees, tickers)
- Time visualization (progress indicators)

### ease-in (NEVER Use)
Makes interfaces feel sluggish. Avoid completely.

## Duration Guidelines

| Element Type                      | Duration  |
| --------------------------------- | --------- |
| Micro-interactions                | 100-150ms |
| Standard UI (tooltips, dropdowns) | 150-250ms |
| Modals, drawers                   | 200-300ms |
| Page transitions                  | 300-400ms |

**Rule**: UI animations should stay under 300ms. Larger elements animate slower than smaller ones.

## Frequency Principle
- **100+ times/day** -> No animation (or drastically reduced)
- **Occasional use** -> Standard animation
- **Rare/first-time** -> Can add delight

## Spring Animations (motion/react)

### When to Use Springs
- Drag interactions with momentum
- Elements that should feel "alive"
- Gestures that can be interrupted mid-animation
- Organic, playful interfaces

### Apple's Configuration (Recommended)
```js
{ type: "spring", duration: 0.5, bounce: 0.2 }
```

### Bounce Guidelines
- Avoid bounce in most UI contexts
- Use bounce for drag-to-dismiss, playful interactions
- Keep bounce subtle (0.1-0.3) when used

## Performance Rules

### The Golden Rule
Only animate `transform` and `opacity`. These skip layout and paint stages.

### Avoid Animating
- `padding`, `margin`, `height`, `width` (trigger layout)
- `blur` filters above 20px (expensive, especially Safari)
- CSS variables in deep component trees

### GPU Acceleration
```css
.animated-element {
  will-change: transform;
}
```

### motion/react Hardware Acceleration
```jsx
// Hardware accelerated (transform as string)
<motion.div animate={{ transform: "translateX(100px)" }} />

// NOT hardware accelerated (more readable but slower)
<motion.div animate={{ x: 100 }} />
```

## Accessibility (REQUIRED)

### prefers-reduced-motion
Every animated element needs reduced motion support:

```jsx
import { useReducedMotion } from "motion/react";

function Component() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    />
  );
}
```

### Touch Device Considerations
```css
/* Disable hover animations on touch devices */
@media (hover: hover) and (pointer: fine) {
  .element:hover {
    transform: scale(1.05);
  }
}
```

## Common Patterns

### Button Press Feedback
```css
button:active {
  transform: scale(0.97);
}
```

### Entry Animations (Never scale from 0)
```css
/* Bad */
.element { transform: scale(0); }

/* Good */
.element {
  transform: scale(0.95);
  opacity: 0;
}
.element.visible {
  transform: scale(1);
  opacity: 1;
}
```

### Hover Card Lift
```jsx
<motion.div
  whileHover={{ y: -3 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
/>
```

### Stagger Pattern
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};
```

### Paired Elements Rule
Elements that animate together must use the same easing and duration:
```css
.modal { transition: transform 200ms ease-out; }
.overlay { transition: opacity 200ms ease-out; }
```

## Fix Checklist Per Section

1. **Easing**: Replace ease-in with ease-out for enter/exit
2. **Timing**: Under 300ms for UI, under 400ms for pages
3. **Scale**: Never from 0, use 0.95-0.98 range
4. **Accessibility**: useReducedMotion implemented
5. **Performance**: Only transform/opacity, will-change if needed
6. **Hover**: Only with @media (hover: hover)

## Quick Decision Flowchart

```
Is the element entering or exiting the viewport?
|- Yes -> ease-out
|- No
   |- Is it moving/morphing on screen?
   |  |- Yes -> ease-in-out
   |- Is it a hover change?
   |  |- Yes -> ease
   |- Is it constant motion?
   |  |- Yes -> linear
   |- Default -> ease-out
```
