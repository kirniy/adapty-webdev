"use client";

import { cn } from "@/lib/cn";
import { motion } from "motion/react";

/**
 * BlueprintElements - Attio-inspired schematic design system
 *
 * Uses SVG stroke-dasharray for precise, hardware-accelerated dashed lines.
 * Key pattern from Attio: stroke-dasharray="4 6" (4px dash, 6px gap)
 */

// ─────────────────────────────────────────────────────────────────
// HORIZONTAL SEPARATORS
// ─────────────────────────────────────────────────────────────────

/**
 * BlueprintSeparator - Full-width horizontal hairline with Attio dash pattern
 */
export function BlueprintSeparator({
  className,
  opacity = 0.08,
  dashPattern = "4 6",
  animate = false,
}: {
  className?: string;
  opacity?: number;
  dashPattern?: string;
  animate?: boolean;
}) {
  return (
    <div className={cn("w-full h-px relative overflow-hidden", className)}>
      <svg
        width="100%"
        height="1"
        className="absolute inset-0"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="0.5"
          x2="100%"
          y2="0.5"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray={dashPattern}
          style={{ opacity }}
          className="text-stone-900"
        />
      </svg>
      {animate && (
        <motion.div
          className="absolute top-0 h-full w-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(193, 255, 114, 0.6), transparent)",
          }}
          animate={{ left: ["-10%", "110%"] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}
    </div>
  );
}

/**
 * BlueprintDivider - Section divider with optional nodes
 */
export function BlueprintDivider({
  className,
  showNodes = true,
  animate = true,
}: {
  className?: string;
  showNodes?: boolean;
  animate?: boolean;
}) {
  return (
    <div className={cn("relative w-full py-6", className)}>
      {showNodes && (
        <>
          <BlueprintNode className="absolute left-8 top-1/2 -translate-y-1/2" />
          <BlueprintNode className="absolute right-8 top-1/2 -translate-y-1/2" />
        </>
      )}
      <BlueprintSeparator className="mx-8" animate={animate} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// VERTICAL CONNECTORS
// ─────────────────────────────────────────────────────────────────

/**
 * BlueprintVertical - Vertical dashed line connector
 */
export function BlueprintVertical({
  className,
  height = 64,
  opacity = 0.12,
  dashPattern = "4 6",
  animate = true,
}: {
  className?: string;
  height?: number;
  opacity?: number;
  dashPattern?: string;
  animate?: boolean;
}) {
  return (
    <div
      className={cn("relative mx-auto overflow-hidden", className)}
      style={{ width: 1, height }}
    >
      <svg width="1" height="100%" className="absolute inset-0">
        <line
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="100%"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray={dashPattern}
          style={{ opacity }}
          className="text-stone-900"
        />
      </svg>
      {animate && (
        <motion.div
          className="absolute left-0 w-full h-8 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(193, 255, 114, 0.7), transparent)",
          }}
          animate={{ top: ["-20%", "120%"] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// NODES
// ─────────────────────────────────────────────────────────────────

/**
 * BlueprintNode - Intersection node with optional pulse
 */
export function BlueprintNode({
  className,
  size = 6,
  pulse = true,
}: {
  className?: string;
  size?: number;
  pulse?: boolean;
}) {
  return (
    <div className={cn("relative", className)}>
      {/* Core node */}
      <div
        className="rounded-full bg-stone-300"
        style={{ width: size, height: size }}
      />
      {/* Pulse ring */}
      {pulse && (
        <motion.div
          className="absolute rounded-full border border-stone-300/50"
          style={{
            width: size,
            height: size,
            top: 0,
            left: 0,
          }}
          animate={{
            scale: [1, 2.5],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      )}
    </div>
  );
}

/**
 * BlueprintNodeAccent - Accent-colored node (lime)
 */
export function BlueprintNodeAccent({
  className,
  size = 8,
  pulse = true,
}: {
  className?: string;
  size?: number;
  pulse?: boolean;
}) {
  return (
    <div className={cn("relative", className)}>
      <div
        className="rounded-full bg-brand-lime"
        style={{ width: size, height: size }}
      />
      {pulse && (
        <motion.div
          className="absolute rounded-full border border-brand-lime/60"
          style={{
            width: size,
            height: size,
            top: 0,
            left: 0,
          }}
          animate={{
            scale: [1, 3],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// CARD CONNECTORS (ERD-style)
// ─────────────────────────────────────────────────────────────────

/**
 * CardConnector - Bezier curve connecting two points (ERD-style)
 */
export function CardConnector({
  className,
  startX,
  startY,
  endX,
  endY,
  curvature = 0.5,
  opacity = 0.08,
  dashPattern = "4 6",
  showNodes = true,
}: {
  className?: string;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  curvature?: number;
  opacity?: number;
  dashPattern?: string;
  showNodes?: boolean;
}) {
  // Calculate control points for smooth bezier curve
  const midX = (startX + endX) / 2;
  const cpOffset = Math.abs(endX - startX) * curvature;

  const path =
    startX < endX
      ? `M ${startX} ${startY} C ${startX + cpOffset} ${startY}, ${endX - cpOffset} ${endY}, ${endX} ${endY}`
      : `M ${startX} ${startY} C ${startX - cpOffset} ${startY}, ${endX + cpOffset} ${endY}, ${endX} ${endY}`;

  return (
    <svg
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{ overflow: "visible" }}
    >
      <path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray={dashPattern}
        style={{ opacity }}
        className="text-stone-900"
      />
      {showNodes && (
        <>
          <circle
            cx={startX}
            cy={startY}
            r="3"
            className="fill-stone-300"
          />
          <circle
            cx={endX}
            cy={endY}
            r="3"
            className="fill-stone-300"
          />
        </>
      )}
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────
// GRID BACKGROUNDS
// ─────────────────────────────────────────────────────────────────

/**
 * BlueprintGrid - Ruled horizontal lines background (like notebook paper)
 */
export function BlueprintGrid({
  className,
  spacing = 24,
  opacity = 0.04,
  dashPattern = "4 6",
}: {
  className?: string;
  spacing?: number;
  opacity?: number;
  dashPattern?: string;
}) {
  const lineCount = 50; // Enough for most sections

  return (
    <svg
      className={cn(
        "absolute inset-0 w-full h-full pointer-events-none",
        className
      )}
      preserveAspectRatio="none"
    >
      {Array.from({ length: lineCount }).map((_, i) => (
        <line
          key={i}
          x1="0"
          y1={i * spacing}
          x2="100%"
          y2={i * spacing}
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray={dashPattern}
          style={{ opacity }}
          className="text-stone-900"
        />
      ))}
    </svg>
  );
}

/**
 * CrosshatchPattern - Diagonal hatching fill pattern
 * Used for chart bars and decorative fills
 */
export function CrosshatchPattern({
  id = "crosshatch",
  angle = 45,
  spacing = 8,
  strokeWidth = 1,
  opacity = 0.06,
}: {
  id?: string;
  angle?: number;
  spacing?: number;
  strokeWidth?: number;
  opacity?: number;
}) {
  return (
    <defs>
      <pattern
        id={id}
        width={spacing}
        height={spacing}
        patternUnits="userSpaceOnUse"
        patternTransform={`rotate(${angle})`}
      >
        <line
          x1="0"
          y1="0"
          x2="0"
          y2={spacing}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          style={{ opacity }}
          className="text-stone-900"
        />
      </pattern>
    </defs>
  );
}

// ─────────────────────────────────────────────────────────────────
// SECTION WRAPPER
// ─────────────────────────────────────────────────────────────────

/**
 * BlueprintSection - Wrapper that adds subtle ruled lines to a section
 */
export function BlueprintSection({
  children,
  className,
  showGrid = true,
  gridSpacing = 32,
  gridOpacity = 0.03,
}: {
  children: React.ReactNode;
  className?: string;
  showGrid?: boolean;
  gridSpacing?: number;
  gridOpacity?: number;
}) {
  return (
    <div className={cn("relative", className)}>
      {showGrid && (
        <BlueprintGrid
          spacing={gridSpacing}
          opacity={gridOpacity}
          className="z-0"
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
