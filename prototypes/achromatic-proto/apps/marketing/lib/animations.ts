/**
 * Animation utilities following Emil Kowalski's animations.dev principles
 *
 * Core philosophy:
 * - Only animate `transform` and `opacity` (compositor-only properties)
 * - Never animate width, height, padding, margin, top, left
 * - Always check `useReducedMotion()` before animating
 * - Scale from 0.95-0.98, never from 0 or 1
 */

// ============================================================
// EASING TOKENS
// ============================================================

/**
 * ease-out: Use for elements entering the viewport (dropdowns, modals, tooltips)
 * Sorted from weak to strong
 */
export const EASE_OUT = {
  quad: [0.25, 0.46, 0.45, 0.94] as const,
  cubic: [0.215, 0.61, 0.355, 1] as const,
  quart: [0.165, 0.84, 0.44, 1] as const, // RECOMMENDED for most enter animations
  quint: [0.23, 1, 0.32, 1] as const,
  expo: [0.19, 1, 0.22, 1] as const,
  circ: [0.075, 0.82, 0.165, 1] as const
};

/**
 * ease-in-out: Use for elements already on screen that need to move/morph
 * Sorted from weak to strong
 */
export const EASE_IN_OUT = {
  quad: [0.455, 0.03, 0.515, 0.955] as const,
  cubic: [0.645, 0.045, 0.355, 1] as const, // RECOMMENDED for layout shifts
  quart: [0.77, 0, 0.175, 1] as const,
  quint: [0.86, 0, 0.07, 1] as const,
  expo: [1, 0, 0, 1] as const,
  circ: [0.785, 0.135, 0.15, 0.86] as const
};

// Shorthand aliases for the most commonly used easings
export const EASE_OUT_QUART = EASE_OUT.quart;
export const EASE_IN_OUT_CUBIC = EASE_IN_OUT.cubic;

// ============================================================
// DURATION TOKENS
// ============================================================

/**
 * Duration guidelines:
 * - Micro-interactions: 100-150ms
 * - Standard UI (tooltips, dropdowns): 150-250ms
 * - Modals, drawers: 200-300ms
 * - Page transitions: 300-400ms
 * - Marketing animations: 400-600ms
 */
export const DURATION = {
  /** 100ms - Button press, instant feedback */
  micro: 0.1,
  /** 150ms - Hover states, small interactions */
  fast: 0.15,
  /** 180ms - Standard UI animations (tooltips, dropdowns) */
  normal: 0.18,
  /** 240ms - Modals, drawers, larger elements */
  slow: 0.24,
  /** 300ms - Page transitions */
  page: 0.3,
  /** 500ms - Marketing hero animations */
  marketing: 0.5
} as const;

// ============================================================
// SCALE TOKENS (Never animate from scale(0)!)
// ============================================================

export const SCALE = {
  /** Small elements (buttons, badges) */
  small: { from: 0.97, to: 1 },
  /** Medium elements (cards, tooltips) */
  medium: { from: 0.95, to: 1 },
  /** Large elements (modals, sheets) */
  large: { from: 0.94, to: 1 },
  /** Press feedback (buttons) */
  press: { from: 1, to: 0.97 },
  /** Hover lift (cards) */
  hover: { from: 1, to: 1.02 }
} as const;

// ============================================================
// MOTION VARIANTS (for motion/react)
// ============================================================

/**
 * Standard entrance animation
 * Use: Elements entering the viewport
 */
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: DURATION.normal, ease: EASE_OUT_QUART }
};

/**
 * Slide up entrance (most common)
 * Use: Cards, sections, content blocks
 */
export const slideUp = {
  initial: { opacity: 0, y: 20, scale: SCALE.medium.from },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: SCALE.medium.from },
  transition: { duration: DURATION.normal, ease: EASE_OUT_QUART }
};

/**
 * Slide down entrance
 * Use: Dropdowns, menus
 */
export const slideDown = {
  initial: { opacity: 0, y: -10, scale: SCALE.small.from },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: SCALE.small.from },
  transition: { duration: DURATION.fast, ease: EASE_OUT_QUART }
};

/**
 * Scale in from center
 * Use: Modals, dialogs, centered elements
 */
export const scaleIn = {
  initial: { opacity: 0, scale: SCALE.large.from },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: SCALE.large.from },
  transition: { duration: DURATION.slow, ease: EASE_OUT_QUART }
};

/**
 * Marketing hero entrance
 * Use: Hero sections, landing page elements
 */
export const heroEntrance = {
  initial: { opacity: 0, y: 30, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: DURATION.marketing, ease: EASE_OUT_QUART }
};

// ============================================================
// STAGGER HELPERS
// ============================================================

/**
 * Generate stagger delay for list items
 * @param index - Item index in the list
 * @param baseDelay - Initial delay before stagger starts (default: 0.05s)
 * @param increment - Delay increment per item (default: 0.05s)
 */
export const stagger = (index: number, baseDelay = 0.05, increment = 0.05) => ({
  transition: { delay: baseDelay + index * increment }
});

/**
 * Stagger container variant for motion/react
 * Use with `staggerChildren` on parent
 */
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

/**
 * Stagger child variant
 * Use as child of staggerContainer
 */
export const staggerChild = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

// ============================================================
// SPRING CONFIGURATIONS
// ============================================================

/**
 * Spring configs using Apple's duration+bounce approach
 * Easier to understand than mass/stiffness/damping
 */
export const SPRING = {
  /** Subtle spring for small movements */
  gentle: { type: 'spring' as const, duration: 0.4, bounce: 0.15 },
  /** Standard spring for most UI */
  default: { type: 'spring' as const, duration: 0.5, bounce: 0.2 },
  /** Bouncy spring for playful interactions */
  bouncy: { type: 'spring' as const, duration: 0.6, bounce: 0.3 },
  /** Stiff spring for snappy feedback */
  stiff: { type: 'spring' as const, duration: 0.3, bounce: 0.1 }
} as const;

// ============================================================
// HOVER & INTERACTION VARIANTS
// ============================================================

/**
 * Card hover effect
 * Use: Clickable cards, feature cards
 */
export const cardHover = {
  rest: { scale: 1, boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)' },
  hover: { scale: 1.02, boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' },
  tap: { scale: 0.98 }
};

/**
 * Button hover/press effect
 * Use: Buttons, clickable elements
 */
export const buttonInteraction = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.97 }
};

/**
 * Icon hover effect
 * Use: Interactive icons, icon buttons
 */
export const iconHover = {
  rest: { rotate: 0 },
  hover: { rotate: 5 }
};

// ============================================================
// REDUCED MOTION HELPERS
// ============================================================

/**
 * Get animation props with reduced motion fallback
 * Use: When you need conditional animations based on user preference
 *
 * @example
 * const shouldReduceMotion = useReducedMotion();
 * const animationProps = getReducedMotionProps(shouldReduceMotion, slideUp);
 */
export const getReducedMotionProps = (
  shouldReduceMotion: boolean | null,
  fullAnimation: typeof slideUp
) => {
  if (shouldReduceMotion) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0 }
    };
  }
  return fullAnimation;
};

// ============================================================
// CSS TRANSITION CLASSES (Tailwind-compatible)
// ============================================================

/**
 * Tailwind classes for common transitions
 * Use in className when you don't need motion/react
 */
export const TRANSITION_CLASSES = {
  /** Default transition for hover states */
  default: 'transition-all duration-150 ease-out',
  /** Fast transition for micro-interactions */
  fast: 'transition-all duration-100 ease-out',
  /** Slow transition for larger elements */
  slow: 'transition-all duration-300 ease-out',
  /** Color-only transition */
  color: 'transition-colors duration-150 ease',
  /** Transform-only transition */
  transform: 'transition-transform duration-150 ease-out',
  /** Opacity-only transition */
  opacity: 'transition-opacity duration-150 ease-out'
} as const;

// ============================================================
// COUNT-UP ANIMATION HELPER
// ============================================================

/**
 * Easing function for count-up animations
 * @param t - Progress (0-1)
 * @returns Eased progress
 */
export const easeOutQuart = (t: number): number => {
  return 1 - Math.pow(1 - t, 4);
};

/**
 * Linear interpolation
 */
export const lerp = (start: number, end: number, t: number): number => {
  return start + (end - start) * t;
};
