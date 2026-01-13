import type { Transition, Variants, TargetAndTransition } from "motion/react";

// ============================================
// MOTION DNA CONFIGURATION
// Pedantic physics definitions for each Design System
// ============================================

export type DesignSystem = "ds1" | "ds2" | "ds3" | "ds4" | "ds5";

interface MotionProfile {
    transition: Transition;
    button: {
        hover: TargetAndTransition;
        tap: TargetAndTransition;
    };
    stagger: number;
}

// DS1: LINEAR (Mechanical, Precise, Instant)
export const MOTION_DS1: MotionProfile = {
    transition: {
        type: "tween",
        ease: [0.16, 1, 0.3, 1], // Custom "Linear" ease
        duration: 0.3
    },
    button: {
        hover: { scale: 1.0, transition: { duration: 0.12, ease: "linear" } },
        tap: { scale: 0.96, transition: { duration: 0.05, ease: "linear" } },
    },
    stagger: 0.03,
};

// DS2: ATTIO (Cinematic, Heavy, Fluid)
export const MOTION_DS2: MotionProfile = {
    transition: {
        type: "tween",
        ease: [0.4, 0, 0.2, 1], // Cinematic ease
        duration: 0.5
    },
    button: {
        hover: { scale: 1.0, opacity: 0.8, transition: { duration: 0.4, ease: "easeOut" } },
        tap: { scale: 0.98, transition: { duration: 0.2, ease: "easeOut" } },
    },
    stagger: 0.1,
};

// DS3: POLAR (Robotic, Instant, Computed)
export const MOTION_DS3: MotionProfile = {
    transition: {
        type: "tween",
        ease: "linear",
        duration: 0.15
    },
    button: {
        hover: { scale: 1.0, filter: "brightness(1.2)", transition: { duration: 0 } },
        tap: { scale: 0.98, transition: { duration: 0 } },
    },
    stagger: 0.05,
};

// DS4: VERCEL (Bouncy, Organic, Masterful)
export const MOTION_DS4: MotionProfile = {
    transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 1
    },
    button: {
        hover: { scale: 1.02, transition: { type: "spring", stiffness: 700, damping: 20 } },
        tap: { scale: 0.95, transition: { type: "spring", stiffness: 1000, damping: 30 } },
    },
    stagger: 0.05,
};

// DS5: CLERK (Soft, Accessible, Standard)
export const MOTION_DS5: MotionProfile = {
    transition: {
        type: "tween",
        ease: [0.25, 0.1, 0.25, 1],
        duration: 0.3
    },
    button: {
        hover: { y: -1, transition: { duration: 0.2, ease: "easeOut" } },
        tap: { y: 1, scale: 0.98, transition: { duration: 0.1, ease: "easeOut" } },
    },
    stagger: 0.05,
};

export const MOTION_CONFIGS: Record<DesignSystem, MotionProfile> = {
    ds1: MOTION_DS1,
    ds2: MOTION_DS2,
    ds3: MOTION_DS3,
    ds4: MOTION_DS4,
    ds5: MOTION_DS5,
};

// ============================================
// SHARED VARIANTS
// ============================================

export const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)"
    },
};

export const scaleInVariants: Variants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
};

export const staggerContainerVariants: Variants = {
    hidden: {},
    visible: (custom: DesignSystem = "ds5") => ({
        transition: {
            staggerChildren: MOTION_CONFIGS[custom].stagger,
        },
    }),
};
