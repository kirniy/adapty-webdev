"use client";

import { cn } from "@/lib/cn";
import { motion } from "motion/react";

/* ═══════════════════════════════════════════════════════════════
   SCHEMATIC LINE SYSTEM
   Ultra-thin dotted lines for technical diagram aesthetic
   Inspired by Attio, Linear, and enterprise dashboard UIs
   ═══════════════════════════════════════════════════════════════ */

interface SchematicLineProps {
  /** Line direction */
  direction?: "vertical" | "horizontal";
  /** Length of the line (CSS value) */
  length?: string;
  /** Show connection nodes */
  withNode?: "start" | "end" | "both" | "none";
  /** Use accent color (lime) */
  accent?: boolean;
  /** Solid vs dotted line */
  solid?: boolean;
  /** Node size */
  nodeSize?: "sm" | "md" | "lg";
  /** Custom className */
  className?: string;
  /** Animation delay in seconds */
  delay?: number;
  /** Disable animation */
  noAnimation?: boolean;
}

/**
 * SchematicLine - Primary dotted line component
 * Creates ultra-thin technical diagram lines
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

  // Line styles
  const lineColor = accent
    ? "rgba(193, 255, 114, 0.6)"
    : "rgba(0, 0, 0, 0.08)";

  const dottedPattern = isVertical
    ? `repeating-linear-gradient(to bottom, ${lineColor} 0px, ${lineColor} 2px, transparent 2px, transparent 8px)`
    : `repeating-linear-gradient(to right, ${lineColor} 0px, ${lineColor} 2px, transparent 2px, transparent 8px)`;

  const solidPattern = lineColor;

  const nodeSizes = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-3 h-3",
  };

  const LineContent = (
    <div
      className={cn(
        "relative",
        isVertical ? "w-px" : "h-px",
        className
      )}
      style={{
        [isVertical ? "height" : "width"]: length,
        background: solid ? solidPattern : dottedPattern,
      }}
    >
      {/* Start Node */}
      {(withNode === "start" || withNode === "both") && (
        <div
          className={cn(
            "absolute rounded-full border",
            accent ? "border-brand-lime bg-brand-lime/20" : "border-stone-300 bg-white",
            nodeSizes[nodeSize],
            isVertical ? "-translate-x-1/2 -top-0.5" : "-translate-y-1/2 -left-0.5"
          )}
          style={{
            left: isVertical ? "50%" : undefined,
            top: isVertical ? undefined : "50%",
          }}
        />
      )}

      {/* End Node */}
      {(withNode === "end" || withNode === "both") && (
        <div
          className={cn(
            "absolute rounded-full border",
            accent ? "border-brand-lime bg-brand-lime/20" : "border-stone-300 bg-white",
            nodeSizes[nodeSize],
            isVertical ? "-translate-x-1/2 -bottom-0.5" : "-translate-y-1/2 -right-0.5"
          )}
          style={{
            left: isVertical ? "50%" : undefined,
            top: isVertical ? undefined : "50%",
          }}
        />
      )}
    </div>
  );

  if (noAnimation) {
    return LineContent;
  }

  return (
    <motion.div
      initial={{
        clipPath: isVertical
          ? "inset(0 0 100% 0)"
          : "inset(0 100% 0 0)"
      }}
      whileInView={{
        clipPath: "inset(0 0 0% 0)"
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {LineContent}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CONNECTION NODE
   Junction point circles for schematic intersections
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
  const sizes = {
    xs: "w-1 h-1",
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-3 h-3",
  };

  return (
    <div
      className={cn(
        "rounded-full",
        sizes[size],
        filled
          ? accent
            ? "bg-brand-lime"
            : "bg-stone-400"
          : accent
          ? "border border-brand-lime bg-brand-lime/20"
          : "border border-stone-300 bg-white",
        pulse && "animate-pulse",
        className
      )}
    />
  );
}

/* ═══════════════════════════════════════════════════════════════
   SCHEMATIC CORNER
   L-shaped connectors for flow diagrams
   ═══════════════════════════════════════════════════════════════ */

interface SchematicCornerProps {
  corner?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: string;
  accent?: boolean;
  withNode?: boolean;
  className?: string;
}

export function SchematicCorner({
  corner = "top-left",
  size = "24px",
  accent = false,
  withNode = false,
  className,
}: SchematicCornerProps) {
  const lineColor = accent
    ? "rgba(193, 255, 114, 0.6)"
    : "rgba(0, 0, 0, 0.08)";

  const cornerStyles = {
    "top-left": {
      borderTop: `1px dotted ${lineColor}`,
      borderLeft: `1px dotted ${lineColor}`,
      borderTopLeftRadius: "4px",
    },
    "top-right": {
      borderTop: `1px dotted ${lineColor}`,
      borderRight: `1px dotted ${lineColor}`,
      borderTopRightRadius: "4px",
    },
    "bottom-left": {
      borderBottom: `1px dotted ${lineColor}`,
      borderLeft: `1px dotted ${lineColor}`,
      borderBottomLeftRadius: "4px",
    },
    "bottom-right": {
      borderBottom: `1px dotted ${lineColor}`,
      borderRight: `1px dotted ${lineColor}`,
      borderBottomRightRadius: "4px",
    },
  };

  return (
    <div
      className={cn("relative", className)}
      style={{
        width: size,
        height: size,
        ...cornerStyles[corner],
      }}
    >
      {withNode && (
        <ConnectionNode
          size="sm"
          accent={accent}
          className={cn(
            "absolute",
            corner.includes("top") ? "-top-0.5" : "-bottom-0.5",
            corner.includes("left") ? "-left-0.5" : "-right-0.5"
          )}
        />
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BEAM NOODLE
   Animated flowing beam for tech aesthetic
   ═══════════════════════════════════════════════════════════════ */

interface BeamNoodleProps {
  direction?: "horizontal" | "vertical";
  length?: string;
  /** Gradient start position */
  from?: "left" | "right" | "top" | "bottom";
  className?: string;
  delay?: number;
}

export function BeamNoodle({
  direction = "horizontal",
  length = "100%",
  from = "left",
  className,
  delay = 0,
}: BeamNoodleProps) {
  const isHorizontal = direction === "horizontal";

  const gradientDirection = {
    left: "to right",
    right: "to left",
    top: "to bottom",
    bottom: "to top",
  }[from];

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden",
        isHorizontal ? "h-[2px]" : "w-[2px]",
        className
      )}
      style={{
        [isHorizontal ? "width" : "height"]: length,
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Base glow line */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(${gradientDirection}, transparent, rgba(193, 255, 114, 0.3), transparent)`,
        }}
      />

      {/* Animated beam particle */}
      <motion.div
        className="absolute"
        style={{
          [isHorizontal ? "height" : "width"]: "100%",
          [isHorizontal ? "width" : "height"]: "40%",
          background: `linear-gradient(${gradientDirection}, transparent, #c1ff72, transparent)`,
          boxShadow: "0 0 10px rgba(193, 255, 114, 0.8)",
        }}
        animate={{
          [isHorizontal ? "x" : "y"]: ["0%", "200%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "linear",
          delay: delay + 0.5,
        }}
      />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SCHEMATIC CONNECTOR
   Complete path connector with multiple segments
   ═══════════════════════════════════════════════════════════════ */

interface SchematicConnectorProps {
  /** Path type */
  path: "straight-v" | "straight-h" | "l-down-right" | "l-down-left" | "l-up-right" | "l-up-left";
  primaryLength?: string;
  secondaryLength?: string;
  accent?: boolean;
  withNodes?: boolean;
  className?: string;
}

export function SchematicConnector({
  path,
  primaryLength = "48px",
  secondaryLength = "48px",
  accent = false,
  withNodes = false,
  className,
}: SchematicConnectorProps) {
  if (path === "straight-v") {
    return (
      <SchematicLine
        direction="vertical"
        length={primaryLength}
        withNode={withNodes ? "both" : "none"}
        accent={accent}
        className={className}
      />
    );
  }

  if (path === "straight-h") {
    return (
      <SchematicLine
        direction="horizontal"
        length={primaryLength}
        withNode={withNodes ? "both" : "none"}
        accent={accent}
        className={className}
      />
    );
  }

  // L-shaped paths
  const isDownward = path.includes("down");
  const isRightward = path.includes("right");

  return (
    <div className={cn("relative", className)}>
      {/* Primary segment (vertical for down/up) */}
      <SchematicLine
        direction="vertical"
        length={primaryLength}
        withNode={withNodes ? "start" : "none"}
        accent={accent}
        noAnimation
      />

      {/* Corner */}
      <SchematicCorner
        corner={
          isDownward
            ? isRightward
              ? "bottom-right"
              : "bottom-left"
            : isRightward
            ? "top-right"
            : "top-left"
        }
        accent={accent}
        className={cn(
          "absolute",
          isDownward ? "bottom-0" : "top-0",
          isRightward ? "left-0" : "right-0"
        )}
      />

      {/* Secondary segment (horizontal) */}
      <SchematicLine
        direction="horizontal"
        length={secondaryLength}
        withNode={withNodes ? "end" : "none"}
        accent={accent}
        noAnimation
        className={cn(
          "absolute",
          isDownward ? "bottom-0" : "top-0",
          isRightward ? "left-6" : "right-6"
        )}
      />
    </div>
  );
}
