"use client";

import React from "react";

/**
 * DS1 (Linear) Asset: "Living Noise"
 * 
 * A high-fidelity, monochromatic noise filter that adds tactile "matte" texture 
 * to dark backgrounds, eliminating banding and adding a premium print-like feel.
 * 
 * It uses an SVG feTurbulence filter applied via mix-blend-mode: overlay.
 */
export function NoiseTexture({ opacity = 0.05 }: { opacity?: number }) {
    return (
        <div
            className="pointer-events-none fixed inset-0 z-50 h-full w-full"
            style={{ opacity }}
        >
            <svg className="h-full w-full opacity-100">
                <filter id="noiseFilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.85"
                        numOctaves="3"
                        stitchTiles="stitch"
                    />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
        </div>
    );
}
