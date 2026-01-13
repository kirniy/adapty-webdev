/**
 * DS1 LINEAR FRAMER MOTION ANIMATION LIBRARY
 *
 * Linear.app uses 67+ distinct animation types with premium micro-interactions.
 * This library provides authentic Linear-style motion primitives.
 */

import { Variants, Transition, TargetAndTransition } from "framer-motion";

// =============================================================================
// LINEAR EASING FUNCTIONS (from reference analysis)
// =============================================================================

export const linearEasing = {
  // Snappy interactions (hover, click)
  snappy: [0.23, 1, 0.32, 1] as const,
  // Dramatic reveals (hero, modals)
  dramatic: [0.19, 1, 0.22, 1] as const,
  // Premium smooth (general transitions)
  premium: [0.16, 1, 0.3, 1] as const,
  // Default fallback
  default: [0.645, 0.045, 0.355, 1] as const,
  // Spring-like (bouncy interactions)
  spring: [0.34, 1.56, 0.64, 1] as const,
} as const;

// CSS easing strings for non-Framer contexts
export const linearEasingCSS = {
  snappy: "cubic-bezier(0.23, 1, 0.32, 1)",
  dramatic: "cubic-bezier(0.19, 1, 0.22, 1)",
  premium: "cubic-bezier(0.16, 1, 0.3, 1)",
  default: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
};

// =============================================================================
// LINEAR DURATION TOKENS (ms)
// =============================================================================

export const linearDuration = {
  instant: 0.05,  // 50ms - micro feedback
  fast: 0.1,      // 100ms - quick interactions
  normal: 0.25,   // 250ms - standard transitions
  slow: 0.4,      // 400ms - emphasis
  dramatic: 0.6,  // 600ms - hero reveals
  stagger: 0.05,  // 50ms - between stagger items
};

// =============================================================================
// TRANSITION PRESETS
// =============================================================================

export const transition = {
  snappy: {
    duration: linearDuration.normal,
    ease: linearEasing.snappy,
  } as Transition,

  dramatic: {
    duration: linearDuration.dramatic,
    ease: linearEasing.dramatic,
  } as Transition,

  premium: {
    duration: linearDuration.normal,
    ease: linearEasing.premium,
  } as Transition,

  spring: {
    type: "spring",
    stiffness: 400,
    damping: 30,
  } as Transition,

  springBouncy: {
    type: "spring",
    stiffness: 300,
    damping: 20,
  } as Transition,

  springGentle: {
    type: "spring",
    stiffness: 200,
    damping: 25,
  } as Transition,
};

// =============================================================================
// FADE VARIANTS
// =============================================================================

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transition.premium,
  },
};

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition.dramatic,
  },
};

export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition.dramatic,
  },
};

export const fadeInScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transition.dramatic,
  },
};

// =============================================================================
// STAGGER VARIANTS (for lists and grids)
// =============================================================================

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: linearDuration.stagger,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition.snappy,
  },
};

export const staggerItemScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transition.springBouncy,
  },
};

// =============================================================================
// HOVER VARIANTS (Linear-style micro-interactions)
// =============================================================================

export const hoverScale: TargetAndTransition = {
  scale: 1.02,
  transition: transition.spring,
};

export const hoverScaleSubtle: TargetAndTransition = {
  scale: 0.98, // Linear uses scale-down on press
  transition: transition.spring,
};

export const hoverLift: TargetAndTransition = {
  y: -6,
  transition: transition.spring,
};

export const hoverGlow = (color: string = "rgba(94, 106, 210, 0.5)"): TargetAndTransition => ({
  boxShadow: `0 0 30px ${color}`,
  transition: transition.snappy,
});

export const tapScale: TargetAndTransition = {
  scale: 0.97,
  transition: { duration: 0.1 },
};

// =============================================================================
// 3D TRANSFORMS (Linear's signature depth effects)
// =============================================================================

export const float: Variants = {
  initial: {
    y: 0,
    rotateX: 0,
  },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export const perspective3D: Variants = {
  hidden: {
    opacity: 0,
    rotateX: 15,
    rotateY: -15,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      duration: linearDuration.dramatic,
      ease: linearEasing.dramatic,
    },
  },
};

export const isometric: Variants = {
  hidden: {
    opacity: 0,
    rotateX: 55,
    rotateZ: -45,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    rotateX: 55,
    rotateZ: -45,
    scale: 1,
    transition: {
      duration: linearDuration.dramatic,
      ease: linearEasing.dramatic,
    },
  },
};

// =============================================================================
// SCROLL-TRIGGERED ANIMATIONS
// =============================================================================

export const scrollReveal: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: linearDuration.slow,
      ease: linearEasing.dramatic,
    },
  },
};

export const scrollRevealScale: Variants = {
  offscreen: {
    scale: 0.95,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: linearDuration.slow,
      ease: linearEasing.dramatic,
    },
  },
};

export const scrollParallax = (offset: number = 50): Variants => ({
  offscreen: {
    y: offset,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: linearDuration.dramatic,
      ease: linearEasing.premium,
    },
  },
});

// =============================================================================
// HERO-SPECIFIC ANIMATIONS
// =============================================================================

export const heroHeadline: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: linearDuration.dramatic,
      ease: linearEasing.dramatic,
    },
  },
};

export const heroSubheadline: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: linearDuration.slow,
      ease: linearEasing.premium,
      delay: 0.2,
    },
  },
};

export const heroCTA: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: linearDuration.normal,
      ease: linearEasing.snappy,
      delay: 0.4,
    },
  },
};

export const heroDashboard: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
    rotateX: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: linearEasing.dramatic,
      delay: 0.3,
    },
  },
};

// =============================================================================
// CARD ANIMATIONS
// =============================================================================

export const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: transition.dramatic,
  },
};

export const cardHover: TargetAndTransition = {
  y: -8,
  scale: 1.02,
  boxShadow: `
    0 0 0 1px rgba(255, 255, 255, 0.1),
    0 4px 6px -1px rgba(0, 0, 0, 0.3),
    0 10px 15px -3px rgba(0, 0, 0, 0.2),
    0 0 30px rgba(94, 106, 210, 0.2)
  `,
  transition: transition.spring,
};

// =============================================================================
// BADGE & PILL ANIMATIONS
// =============================================================================

export const badgePulse: Variants = {
  initial: {
    scale: 1,
    boxShadow: "0 0 0 0 rgba(94, 106, 210, 0.4)",
  },
  animate: {
    scale: [1, 1.02, 1],
    boxShadow: [
      "0 0 0 0 rgba(94, 106, 210, 0.4)",
      "0 0 20px 10px rgba(94, 106, 210, 0.2)",
      "0 0 0 0 rgba(94, 106, 210, 0)",
    ],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

// =============================================================================
// MARQUEE & LOGO ANIMATIONS
// =============================================================================

export const marquee = (direction: "left" | "right" = "left", duration: number = 30): Variants => ({
  animate: {
    x: direction === "left" ? [0, -1920] : [-1920, 0],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
    },
  },
});

export const logoHover: TargetAndTransition = {
  scale: 1.1,
  opacity: 1,
  filter: "grayscale(0)",
  transition: transition.snappy,
};

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Create stagger delay for children
 */
export const getStaggerDelay = (index: number, baseDelay: number = 0.05): number => {
  return index * baseDelay;
};

/**
 * Create viewport options for scroll-triggered animations
 */
export const viewportOnce = {
  once: true,
  margin: "-100px",
};

export const viewportRepeat = {
  once: false,
  margin: "-50px",
  amount: 0.3,
};

/**
 * Combine animation variants
 */
export const combineVariants = (...variants: Variants[]): Variants => {
  return variants.reduce((acc, variant) => ({
    ...acc,
    hidden: { ...acc.hidden, ...variant.hidden },
    visible: { ...acc.visible, ...variant.visible },
  }), { hidden: {}, visible: {} });
};
