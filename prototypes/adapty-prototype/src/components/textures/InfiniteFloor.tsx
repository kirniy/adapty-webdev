"use client";

import React from "react";
import { motion } from "motion/react";

/**
 * DS4 (Vercel) Asset: "Perspective Floor" (The Infrastructure)
 * 
 * A 3D-transformed grid plane that recedes into the darkness.
 * It provides a massive sense of scale, implying "infrastructure", "deployment", 
 * and "infinite scalability".
 * 
 * Uses CSS 3D transforms (perspective + rotateX) + mask-image for fade out.
 */
export function InfiniteFloor() {
    return (
        <div
            className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
            style={{
                perspective: "1000px",
            }}
        >
            <motion.div
                className="absolute inset-0 origin-bottom"
                style={{
                    transform: "rotateX(60deg) scale(2) translateY(-20%)",
                    backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                    maskImage: "linear-gradient(to bottom, transparent 0%, black 40%, black 80%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 40%, black 80%, transparent 100%)",
                    // The floor should fade out towards the horizon (top of this DIV due to 3D rotation)
                }}
                animate={{
                    backgroundPosition: ["0px 0px", "0px 60px"]
                }}
                transition={{
                    duration: 3,
                    ease: "linear",
                    repeat: Infinity
                }}
            />

            {/* Horizon Glow */}
            <div
                className="absolute top-[40%] left-0 right-0 h-[200px]"
                style={{
                    background: "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)",
                    transform: "translateY(-50%)",
                    filter: "blur(40px)"
                }}
            />
        </div>
    );
}
