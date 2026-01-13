"use client";

import React from "react";

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
            <div
                className="absolute -top-[100px] -left-[100px] h-[400px] w-[400px] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(0,0,0,0.08) 0%, transparent 70%)",
                }}
            />

            {/* Bottom Right - Soft Deepening */}
            <div
                className="absolute -bottom-[100px] -right-[100px] h-[500px] w-[500px] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(0,0,0,0.06) 0%, transparent 70%)",
                }}
            />

            {/* Top Center - Slight Highlight (Ambient Light) */}
            <div
                className="absolute -top-[200px] left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-[100%]"
                style={{
                    background: "radial-gradient(ellipse, rgba(255,255,255,0.4) 0%, transparent 70%)",
                    mixBlendMode: "soft-light"
                }}
            />
        </div>
    );
}
