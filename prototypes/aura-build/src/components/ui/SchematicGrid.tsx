"use client";

import { cn } from "@/lib/cn";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

/* ═══════════════════════════════════════════════════════════════
   SCHEMATIC GRID SYSTEM
   Intricate, animated background system for technical aesthetic
   ═══════════════════════════════════════════════════════════════ */

interface SchematicGridProps {
  className?: string;
  /** Number of vertical lines to distribute */
  cols?: number;
  /** Number of horizontal lines to distribute */
  rows?: number;
  /** Opacity of the inactive grid lines */
  opacity?: number;
}

export function SchematicGrid({
  className,
  cols = 6,
  rows = 6,
  opacity = 0.05,
}: SchematicGridProps) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden select-none", className)}>
      {/* 
         GRID LINES 
         We render explicit lines to allow for beam animations along specific tracks 
      */}
      
      {/* Vertical Lines */}
      <div className="absolute inset-0 flex justify-between">
        {Array.from({ length: cols }).map((_, i) => (
          <div key={`col-${i}`} className="relative h-full w-px bg-stone-900" style={{ opacity }}>
            {/* Random beams on specific columns */}
            {i % 2 === 0 && (
              <Beam
                direction="vertical"
                duration={3 + Math.random() * 4}
                delay={Math.random() * 5}
              />
            )}
          </div>
        ))}
      </div>

      {/* Horizontal Lines */}
      <div className="absolute inset-0 flex flex-col justify-between">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={`row-${i}`} className="relative w-full h-px bg-stone-900" style={{ opacity }}>
             {/* Random beams on specific rows */}
             {i % 3 === 0 && (
              <Beam
                direction="horizontal"
                duration={4 + Math.random() * 5}
                delay={Math.random() * 5}
              />
            )}
          </div>
        ))}
      </div>

      {/* 
         INTERSECTION NODES
         Subtle dots at key intersections for "schematic" feel
      */}
      <div className="absolute inset-0 flex flex-col justify-between">
         {Array.from({ length: rows }).map((_, r) => (
            <div key={`nodes-row-${r}`} className="flex justify-between w-full h-0">
               {Array.from({ length: cols }).map((_, c) => (
                  <div key={`node-${r}-${c}`} className="relative">
                    {/* Only show some nodes to avoid clutter */}
                    {(r + c) % 2 === 0 && (
                       <div className="absolute -top-[1.5px] -left-[1.5px] w-[3px] h-[3px] rounded-full bg-stone-900" style={{ opacity: opacity * 4 }} />
                    )}
                    {/* Occasional "Active" Node */}
                    {(r * c) % 11 === 0 && r > 0 && c > 0 && (
                        <div className="absolute -top-[2px] -left-[2px] w-[4px] h-[4px] rounded-full bg-brand-lime shadow-[0_0_10px_#c1ff72] animate-pulse" />
                    )}
                  </div>
               ))}
            </div>
         ))}
      </div>
    </div>
  );
}

interface BeamProps {
  direction: "vertical" | "horizontal";
  duration?: number;
  delay?: number;
}

function Beam({ direction, duration = 3, delay = 0 }: BeamProps) {
  const isVertical = direction === "vertical";

  return (
    <motion.div
      className={cn(
        "absolute bg-gradient-to-r from-transparent via-brand-lime to-transparent",
        isVertical ? "w-[2px] h-[15%] -left-[0.5px]" : "h-[2px] w-[15%] -top-[0.5px]"
      )}
      style={{
        background: isVertical 
          ? "linear-gradient(to bottom, transparent, #c1ff72, transparent)" 
          : "linear-gradient(to right, transparent, #c1ff72, transparent)",
        boxShadow: "0 0 10px rgba(193, 255, 114, 0.5)"
      }}
      animate={{
        [isVertical ? "top" : "left"]: ["-20%", "120%"],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatDelay: Math.random() * 5, // Random pause between beams
        ease: "linear",
        delay,
      }}
    />
  );
}
