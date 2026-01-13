"use client";

import { cn } from "~/lib/utils";
import { motion } from "motion/react";

/**
 * SchematicLine - Attio's signature connector line system
 *
 * Creates ultra-thin dotted lines that connect elements in a technical diagram aesthetic.
 * The lines are barely perceptible - very subtle like the real Attio site.
 * Can include connection nodes (small circles) at start/end points.
 *
 * @example
 * // Vertical dotted line with node at bottom
 * <SchematicLine direction="vertical" withNode="end" className="h-12" />
 *
 * // Horizontal accent line (solid)
 * <SchematicLine direction="horizontal" accent solid className="w-full" />
 */

interface SchematicLineProps {
  /** Line direction */
  direction: "vertical" | "horizontal";
  /** Where to place connection nodes */
  withNode?: "start" | "end" | "both" | "none";
  /** Use accent color instead of default gray */
  accent?: boolean;
  /** Use solid line instead of dotted (default is dotted for Attio authenticity) */
  solid?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Node size variant */
  nodeSize?: "sm" | "md" | "lg";
  /** Whether the node should be filled */
  nodeFilled?: boolean;
}

export function SchematicLine({
  direction,
  withNode = "none",
  accent = false,
  solid = false,
  className,
  nodeSize = "sm", // Default to small for subtlety
  nodeFilled = false,
}: SchematicLineProps) {
  const nodeSizes = {
    sm: "w-1 h-1",
    md: "w-1.5 h-1.5",
    lg: "w-2 h-2",
  };

  const nodeClasses = cn(
    "absolute rounded-full border z-10",
    nodeSizes[nodeSize],
    accent
      ? "border-[var(--schematic-line-accent)]"
      : "border-[var(--node-color)]",
    nodeFilled
      ? accent
        ? "bg-[var(--schematic-line-accent)]"
        : "bg-[var(--node-color)]"
      : "bg-[var(--node-fill)]"
  );

  // Dotted line using repeating gradient (Attio's signature look)
  const dottedStyle = direction === "vertical"
    ? {
      backgroundImage: `repeating-linear-gradient(to bottom, var(--schematic-line-color) 0px, var(--schematic-line-color) 2px, transparent 2px, transparent 6px)`,
      backgroundSize: "1px 100%",
    }
    : {
      backgroundImage: `repeating-linear-gradient(to right, var(--schematic-line-color) 0px, var(--schematic-line-color) 2px, transparent 2px, transparent 6px)`,
      backgroundSize: "100% 1px",
    };

  return (
    <motion.div
      className={cn(
        "relative opacity-[var(--schematic-line-opacity)]",
        direction === "vertical" ? "w-[1px]" : "h-[1px]",
        solid && (accent
          ? "bg-[var(--schematic-line-accent)]"
          : "bg-[var(--schematic-line-color)]"),
        className
      )}
      style={solid ? undefined : dottedStyle}
      initial={{
        clipPath: direction === "vertical" ? "inset(0 0 100% 0)" : "inset(0 100% 0 0)"
      }}
      whileInView={{
        clipPath: "inset(0 0 0% 0)"
      }}
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
        ease: [0.4, 0, 0.2, 1] // Cinematic ease
      }}
    >
      {/* Start Node */}
      {(withNode === "start" || withNode === "both") && (
        <div
          className={cn(
            nodeClasses,
            direction === "vertical"
              ? "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
              : "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
          )}
        />
      )}

      {/* End Node */}
      {(withNode === "end" || withNode === "both") && (
        <div
          className={cn(
            nodeClasses,
            direction === "vertical"
              ? "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
              : "right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
          )}
        />
      )}
    </motion.div>
  );
}

/**
 * SchematicCorner - Creates an L-shaped connector
 */
interface SchematicCornerProps {
  /** Corner orientation */
  corner: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  /** Size of each arm */
  size?: string;
  /** Use accent color */
  accent?: boolean;
  /** Show node at corner junction */
  withNode?: boolean;
  className?: string;
}

export function SchematicCorner({
  corner,
  size = "24px",
  accent = false,
  withNode = false,
  className,
}: SchematicCornerProps) {
  const lineColor = accent
    ? "bg-[var(--schematic-line-accent)]"
    : "bg-[var(--schematic-line-color)]";

  const nodeColor = accent
    ? "border-[var(--schematic-line-accent)]"
    : "border-[var(--schematic-line-color)]";

  return (
    <div className={cn("relative", className)} style={{ width: size, height: size }}>
      {/* Horizontal arm */}
      <div
        className={cn(
          "absolute h-[1px]",
          lineColor,
          corner.includes("left") ? "left-0" : "right-0",
          corner.includes("top") ? "top-0" : "bottom-0"
        )}
        style={{ width: size }}
      />

      {/* Vertical arm */}
      <div
        className={cn(
          "absolute w-[1px]",
          lineColor,
          corner.includes("left") ? "left-0" : "right-0",
          corner.includes("top") ? "top-0" : "bottom-0"
        )}
        style={{ height: size }}
      />

      {/* Corner node */}
      {withNode && (
        <div
          className={cn(
            "absolute w-2 h-2 rounded-full border-2 bg-[var(--bg-primary)]",
            nodeColor,
            corner === "top-left" && "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
            corner === "top-right" && "top-0 right-0 translate-x-1/2 -translate-y-1/2",
            corner === "bottom-left" && "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
            corner === "bottom-right" && "bottom-0 right-0 translate-x-1/2 translate-y-1/2"
          )}
        />
      )}
    </div>
  );
}

/**
 * SchematicConnector - Creates a complete path between two points
 * Ultra-subtle dotted lines like Attio's technical diagram aesthetic
 */
interface SchematicConnectorProps {
  /** Path type */
  path: "straight-v" | "straight-h" | "l-down-right" | "l-down-left" | "l-up-right" | "l-up-left";
  /** Length of primary segment */
  primaryLength?: string;
  /** Length of secondary segment (for L-paths) */
  secondaryLength?: string;
  /** Show nodes at endpoints */
  withNodes?: boolean;
  /** Use accent color */
  accent?: boolean;
  /** Use solid line instead of dotted */
  solid?: boolean;
  className?: string;
}

export function SchematicConnector({
  path,
  primaryLength = "48px",
  secondaryLength = "48px",
  withNodes = false, // Default to no nodes for subtlety
  accent = false,
  solid = false,
  className,
}: SchematicConnectorProps) {
  const lineColor = accent
    ? "bg-[var(--schematic-line-accent)]"
    : "bg-[var(--schematic-line-color)]";

  const nodeColor = accent
    ? "border-[var(--schematic-line-accent)]"
    : "border-[var(--node-color)]";

  // Dotted line styles (Attio's signature look)
  const dottedStyleV = {
    backgroundImage: `repeating-linear-gradient(to bottom, var(--schematic-line-color) 0px, var(--schematic-line-color) 2px, transparent 2px, transparent 6px)`,
    backgroundSize: "1px 100%",
    height: primaryLength,
  };

  const dottedStyleH = {
    backgroundImage: `repeating-linear-gradient(to right, var(--schematic-line-color) 0px, var(--schematic-line-color) 2px, transparent 2px, transparent 6px)`,
    backgroundSize: "100% 1px",
    width: primaryLength,
  };

  if (path === "straight-v") {
    return (
      <div className={cn("relative flex flex-col items-center opacity-[var(--schematic-line-opacity)]", className)}>
        {withNodes && (
          <div className={cn("w-1 h-1 rounded-full border bg-[var(--node-fill)]", nodeColor)} />
        )}
        <div
          className={cn("w-[1px]", solid && lineColor)}
          style={solid ? { height: primaryLength } : dottedStyleV}
        />
        {withNodes && (
          <div className={cn("w-1 h-1 rounded-full border bg-[var(--node-fill)]", nodeColor)} />
        )}
      </div>
    );
  }

  if (path === "straight-h") {
    return (
      <div className={cn("relative flex items-center opacity-[var(--schematic-line-opacity)]", className)}>
        {withNodes && (
          <div className={cn("w-1 h-1 rounded-full border bg-[var(--node-fill)]", nodeColor)} />
        )}
        <div
          className={cn("h-[1px]", solid && lineColor)}
          style={solid ? { width: primaryLength } : dottedStyleH}
        />
        {withNodes && (
          <div className={cn("w-1 h-1 rounded-full border bg-[var(--node-fill)]", nodeColor)} />
        )}
      </div>
    );
  }

  // L-shaped paths
  const isDown = path.includes("down");
  const isRight = path.includes("right");

  return (
    <div className={cn("relative", className)}>
      {/* Start node */}
      {withNodes && (
        <div
          className={cn(
            "absolute w-2 h-2 rounded-full border-2 bg-[var(--bg-primary)] z-10",
            nodeColor,
            "left-1/2 -translate-x-1/2",
            isDown ? "-top-1" : "-bottom-1"
          )}
        />
      )}

      {/* Vertical segment */}
      <div
        className={cn("absolute left-1/2 -translate-x-1/2 w-[1px]", lineColor)}
        style={{
          height: primaryLength,
          [isDown ? "top" : "bottom"]: 0,
        }}
      />

      {/* Corner */}
      <div
        className={cn("absolute w-2 h-2 rounded-full border-2 bg-[var(--bg-primary)]", nodeColor)}
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          [isDown ? "top" : "bottom"]: primaryLength,
        }}
      />

      {/* Horizontal segment */}
      <div
        className={cn("absolute h-[1px]", lineColor)}
        style={{
          width: secondaryLength,
          [isDown ? "top" : "bottom"]: primaryLength,
          [isRight ? "left" : "right"]: "50%",
        }}
      />

      {/* End node */}
      {withNodes && (
        <div
          className={cn(
            "absolute w-2 h-2 rounded-full border-2 bg-[var(--bg-primary)] z-10",
            nodeColor
          )}
          style={{
            [isDown ? "top" : "bottom"]: primaryLength,
            [isRight ? "left" : "right"]: `calc(50% + ${secondaryLength})`,
            transform: isRight ? "translateX(50%)" : "translateX(-50%)",
          }}
        />
      )}
    </div>
  );
}

export default SchematicLine;
