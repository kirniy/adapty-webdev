"use client";

import { cn } from "@/lib/cn";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

/* ═══════════════════════════════════════════════════════════════
   SCHEMATIC LINE SYSTEM (CSS + SVG HYBRID)
   ═══════════════════════════════════════════════════════════════ */

interface SchematicLineProps {
  direction?: "vertical" | "horizontal";
  length?: string;
  withNode?: "start" | "end" | "both" | "none";
  accent?: boolean;
  solid?: boolean;
  nodeSize?: "sm" | "md" | "lg";
  className?: string;
  delay?: number;
  noAnimation?: boolean;
}

/**
 * Legacy CSS-based Line (kept for straight lines)
 */
export function SchematicLine({
  direction = "vertical",
  length = "100%",
  withNode = "none",
  accent = false,
  solid = false,
  nodeSize = "md",
  className,
  delay = 0,
  noAnimation = false,
}: SchematicLineProps) {
  const isVertical = direction === "vertical";
  const lineColor = accent ? "rgba(193, 255, 114, 0.6)" : "rgba(0, 0, 0, 0.08)";
  
  const dottedPattern = isVertical
    ? `repeating-linear-gradient(to bottom, ${lineColor} 0px, ${lineColor} 2px, transparent 2px, transparent 8px)`
    : `repeating-linear-gradient(to right, ${lineColor} 0px, ${lineColor} 2px, transparent 2px, transparent 8px)`;

  const solidPattern = lineColor;

  const nodeSizes = { sm: "w-1.5 h-1.5", md: "w-2 h-2", lg: "w-3 h-3" };

  const LineContent = (
    <div
      className={cn("relative", isVertical ? "w-px" : "h-px", className)}
      style={{
        [isVertical ? "height" : "width"]: length,
        background: solid ? solidPattern : dottedPattern,
      }}
    >
      {(withNode === "start" || withNode === "both") && (
        <ConnectionNode
          size={nodeSize}
          accent={accent}
          className={cn("absolute", isVertical ? "-top-1 left-1/2 -translate-x-1/2" : "-left-1 top-1/2 -translate-y-1/2")}
        />
      )}
      {(withNode === "end" || withNode === "both") && (
        <ConnectionNode
          size={nodeSize}
          accent={accent}
          className={cn("absolute", isVertical ? "-bottom-1 left-1/2 -translate-x-1/2" : "-right-1 top-1/2 -translate-y-1/2")}
        />
      )}
    </div>
  );

  if (noAnimation) return LineContent;

  return (
    <motion.div
      initial={{ clipPath: isVertical ? "inset(0 0 100% 0)" : "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {LineContent}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CONNECTION NODE (With Sonar)
   ═══════════════════════════════════════════════════════════════ */

interface ConnectionNodeProps {
  size?: "xs" | "sm" | "md" | "lg";
  filled?: boolean;
  accent?: boolean;
  pulse?: boolean;
  className?: string;
}

export function ConnectionNode({
  size = "md",
  filled = false,
  accent = false,
  pulse = false,
  className,
}: ConnectionNodeProps) {
  const sizes = { xs: "w-1 h-1", sm: "w-1.5 h-1.5", md: "w-2 h-2", lg: "w-3 h-3" };
  
  return (
    <div className={cn("relative flex items-center justify-center", sizes[size], className)}>
      <div
        className={cn(
          "relative z-10 rounded-full w-full h-full",
          filled
            ? accent ? "bg-brand-lime" : "bg-stone-400"
            : accent ? "border border-brand-lime bg-brand-lime/20" : "border border-stone-300 bg-white"
        )}
      />
      {pulse && (
        <div
          className={cn(
            "absolute inset-0 rounded-full animate-ping opacity-75",
            accent ? "bg-brand-lime" : "bg-stone-400"
          )}
        />
      )}
      {/* Sonar Ripple for Interactions */}
      <div className={cn(
        "absolute inset-[-4px] rounded-full border opacity-0 animate-sonar",
        accent ? "border-brand-lime" : "border-stone-300"
      )} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SVG BEAM CONNECTOR ("Noodle")
   High-end curved connector with travelling light beam
   ═══════════════════════════════════════════════════════════════ */

interface SVGBeamProps {
  width?: number;
  height?: number;
  from?: { x: number; y: number };
  to?: { x: number; y: number };
  curvature?: number;
  delay?: number;
  duration?: number;
  dashed?: boolean;
  className?: string;
}

export function SVGBeam({
  width = 100,
  height = 50,
  from = { x: 0, y: 0 },
  to = { x: 100, y: 50 },
  curvature = 0.5,
  delay = 0,
  duration = 3,
  dashed = false,
  className,
}: SVGBeamProps) {
  const [pathD, setPathD] = useState("");

  useEffect(() => {
    // Calculate bezier curve
    const midX = from.x + (to.x - from.x) * curvature;
    const midY = from.y; // Keep Y flat for first half for "circuit" look, or interpolate
    // Simple S-curve for now: M start C c1x c1y, c2x c2y, end
    
    // For a "circuit" look (horizontal -> vertical -> horizontal)
    // or smooth curve
    const dist = Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2));
    
    // Smooth standard bezier
    const c1x = from.x + (to.x - from.x) / 2;
    const c1y = from.y;
    const c2x = from.x + (to.x - from.x) / 2;
    const c2y = to.y;
    
    setPathD(`M ${from.x} ${from.y} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${to.x} ${to.y}`);
  }, [from, to, curvature]);

  return (
    <div className={cn("absolute pointer-events-none overflow-visible", className)} style={{ width, height }}>
      <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
        {/* Base Track */}
        <path
          d={pathD}
          fill="none"
          stroke="rgba(0,0,0,0.06)"
          strokeWidth="1"
          strokeDasharray={dashed ? "4 4" : "none"}
        />
        
        {/* Animated Beam */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="url(#beam-gradient)"
          strokeWidth="2"
          strokeDasharray="20 300" // The "beam" length vs total gap
          strokeDashoffset={320}
          strokeLinecap="round"
          animate={{ strokeDashoffset: -320 }}
          transition={{
            duration: duration,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "linear",
            delay: delay
          }}
        />
        
        <defs>
          <linearGradient id="beam-gradient" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#c1ff72" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/**
 * BeamNoodle - Deprecated in favor of SVGBeam but kept for compatibility
 */
export function BeamNoodle({ direction = "horizontal", length = "100%", from = "left", className, delay = 0 }: any) {
  return <SchematicLine direction={direction} length={length} accent delay={delay} className={className} />;
}
