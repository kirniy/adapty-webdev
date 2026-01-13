"use client";

import { motion, useInView, type HTMLMotionProps } from "motion/react";
import { useRef, type ReactNode } from "react";
import { useTheme } from "next-themes";
import {
    MOTION_CONFIGS,
    type DesignSystem,
    fadeUpVariants,
    scaleInVariants,
    staggerContainerVariants
} from "~/lib/motion-config";

// Helper to get current DS config safely
function useDSConfig() {
    const { theme } = useTheme();
    // Default to ds5 if theme is undefined or system
    const currentDS = (theme && theme.startsWith("ds") ? theme : "ds5") as DesignSystem;
    return {
        ds: currentDS,
        config: MOTION_CONFIGS[currentDS]
    };
}

interface MotionProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    delay?: number;
    className?: string;
    viewportAmount?: number;
}

export function FadeIn({ children, delay = 0, className, viewportAmount = 0.3, ...props }: MotionProps) {
    const { config } = useDSConfig();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: viewportAmount });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            transition={{
                ...config.transition,
                delay: delay,
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function ScaleIn({ children, delay = 0, className, viewportAmount = 0.3, ...props }: MotionProps) {
    const { config } = useDSConfig();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: viewportAmount });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={scaleInVariants}
            transition={{
                ...config.transition,
                delay: delay,
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function StaggerContainer({ children, delay = 0, className, viewportAmount = 0.1, ...props }: MotionProps) {
    const { ds } = useDSConfig();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: viewportAmount });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainerVariants}
            custom={ds}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}

// Optimization: A specialized component for heavily animated hero sections
// to prevent hydration mismatch or layout thrashing
export function HeroMotionWrapper({ children, className }: { children: ReactNode; className?: string }) {
    const { config } = useDSConfig();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }} // Base fade for safety
            className={className}
        >
            {children}
        </motion.div>
    );
}
