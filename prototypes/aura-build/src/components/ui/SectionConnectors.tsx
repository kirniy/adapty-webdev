"use client";

import { cn } from "@/lib/cn";
import { motion } from "motion/react";

/**
 * SectionConnectors - Components for seamless section transitions
 *
 * Creates the interconnected look between page sections with:
 * - Vertical connectors (animated dotted lines between sections)
 * - Horizontal dividers (animated beams across the page)
 * - Connection nodes (glowing dots at intersections)
 */

/**
 * VerticalConnector - Animated vertical line for section transitions
 */
export function VerticalConnector({
  className,
  height = "64px",
  showBeam = true,
}: {
  className?: string;
  height?: string;
  showBeam?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative w-px overflow-hidden pointer-events-none mx-auto",
        className
      )}
      style={{ height }}
    >
      {/* Base dotted line */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "repeating-linear-gradient(to bottom, rgba(193, 255, 114, 0.2) 0px, rgba(193, 255, 114, 0.2) 4px, transparent 4px, transparent 12px)",
        }}
      />
      {/* Animated beam */}
      {showBeam && (
        <motion.div
          className="absolute left-0 w-full h-8"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(193, 255, 114, 0.8), transparent)",
          }}
          animate={{ top: ["-30%", "130%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}
    </div>
  );
}

/**
 * HorizontalConnector - Animated horizontal line that can span sections
 */
export function HorizontalConnector({
  className,
  showBeam = true,
  dashed = true,
}: {
  className?: string;
  showBeam?: boolean;
  dashed?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative w-full h-px overflow-hidden pointer-events-none",
        className
      )}
    >
      {/* Base line */}
      <div
        className="absolute inset-0"
        style={{
          background: dashed
            ? "repeating-linear-gradient(to right, rgba(193, 255, 114, 0.2) 0px, rgba(193, 255, 114, 0.2) 4px, transparent 4px, transparent 12px)"
            : "rgba(193, 255, 114, 0.15)",
        }}
      />
      {/* Animated beam */}
      {showBeam && (
        <motion.div
          className="absolute top-0 h-full w-24"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(193, 255, 114, 0.8), transparent)",
          }}
          animate={{ left: ["-10%", "110%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}
    </div>
  );
}

/**
 * ConnectionNode - Small glowing node at intersection points
 */
export function ConnectionNode({
  className,
  pulse = true,
  size = "sm",
}: {
  className?: string;
  pulse?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-3 h-3",
  };

  return (
    <div
      className={cn(
        "rounded-full bg-brand-lime/40",
        sizeClasses[size],
        pulse && "animate-pulse",
        className
      )}
    />
  );
}

/**
 * SectionDivider - Full-width divider between sections
 * Replaces hard borders with elegant dotted lines + beam
 */
export function SectionDivider({
  className,
  showNodes = true,
}: {
  className?: string;
  showNodes?: boolean;
}) {
  return (
    <div className={cn("relative w-full py-8", className)}>
      {/* Connector nodes */}
      {showNodes && (
        <>
          <ConnectionNode className="absolute left-8 top-1/2 -translate-y-1/2" />
          <ConnectionNode className="absolute right-8 top-1/2 -translate-y-1/2" />
        </>
      )}
      {/* Horizontal line */}
      <HorizontalConnector className="mx-8" />
    </div>
  );
}
