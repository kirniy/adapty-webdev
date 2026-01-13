"use client";

import React from "react";
import { motion } from "motion/react";

/**
 * DS2 (Attio) Asset: "Ambient Occlusion / Inverted Shadow"
 * 
 * Adds subtle, radial gradients to the corners of the viewport or container.
 * This creates a physical sense of depth, as if the UI content is slightly 
 * recessed or acting as a "lightbox" on a physical surface.
 */
export function SoftCornerGradient({ opacity = 0.4 }: { opacity?: number }) {
    return (
        <div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
            style={{ opacity }}
        >
            {/* Top Left - Soft Deepening */}
            <motion.div
                className="absolute -top-[100px] -left-[100px] h-[400px] w-[400px] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(0,0,0,0.08) 0%, transparent 70%)",
                }}
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [1, 0.8, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Bottom Right - Soft Deepening */}
            <motion.div
                className="absolute -bottom-[100px] -right-[100px] h-[500px] w-[500px] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(0,0,0,0.06) 0%, transparent 70%)",
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [1, 0.7, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            {/* Top Center - Slight Highlight (Ambient Light) */}
            <motion.div
                className="absolute -top-[200px] left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-[100%]"
                style={{
                    background: "radial-gradient(ellipse, rgba(255,255,255,0.4) 0%, transparent 70%)",
                    mixBlendMode: "soft-light"
                }}
                animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.02, 1]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
            />
        </div>
    );
}
