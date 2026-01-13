"use client";

import React, { useEffect, useRef } from "react";

/**
 * DS3 (Polar) Asset: "Moiré Interference Grid"
 * 
 * Creates a dynamic, shimmering geometric texture purely through math.
 * Two grids: one static, one slightly offset/scaled. 
 * Their interference creates Moiré patterns that shift with scroll or mouse.
 * 
 * Aesthetic: Raw computation, "Bare Metal", Architectural, Security Printing.
 */
export function MoireInterference({ opacity = 0.15 }: { opacity?: number }) {
    const frontGridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!frontGridRef.current) return;

            // Extremely subtle movement to create the "shimmer"
            // We only move 1-2px, which is enough to shift the Moiré pattern significantly
            const x = (e.clientX / window.innerWidth) * 2;
            const y = (e.clientY / window.innerHeight) * 2;

            frontGridRef.current.style.transform = `translate(${x}px, ${y}px)`;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none mix-blend-overlay" style={{ opacity }}>
            {/* Base Grid - Static (12px) */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: "radial-gradient(circle, #333 1px, transparent 1px)",
                    backgroundSize: "12px 12px",
                    maskImage: "linear-gradient(to bottom, black, transparent)",
                    WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                }}
            />

            {/* Interference Grid - Slight offset scale (12.1px) + Dynamic Position */}
            <div
                ref={frontGridRef}
                className="absolute inset-[-20px]"
                style={{
                    backgroundImage: "radial-gradient(circle, #333 1px, transparent 1px)",
                    backgroundSize: "12.2px 12.2px", // Slight mismatch causes Moiré
                    maskImage: "linear-gradient(to bottom, black, transparent)",
                    WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                    transition: "transform 0.1s linear"
                }}
            />
        </div>
    );
}
