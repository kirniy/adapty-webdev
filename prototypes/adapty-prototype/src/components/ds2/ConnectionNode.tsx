"use client";

import { cn } from "~/lib/utils";

/**
 * ConnectionNode - Attio's signature junction point circles
 *
 * Small circles that appear at connection points in the schematic system.
 * Can be hollow (border only) or filled.
 *
 * @example
 * // Default hollow node
 * <ConnectionNode />
 *
 * // Filled accent node
 * <ConnectionNode filled accent />
 */

interface ConnectionNodeProps {
  /** Size variant */
  size?: "xs" | "sm" | "md" | "lg";
  /** Fill the node instead of hollow */
  filled?: boolean;
  /** Use accent color */
  accent?: boolean;
  /** Pulse animation for active state */
  pulse?: boolean;
  /** Additional CSS classes */
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
    lg: "w-2.5 h-2.5",
  };

  const borderWidths = {
    xs: "border",
    sm: "border-[1.5px]",
    md: "border-2",
    lg: "border-2",
  };

  return (
    <div
      className={cn(
        "rounded-full transition-colors duration-150",
        sizes[size],
        borderWidths[size],
        accent
          ? "border-[var(--schematic-line-accent)]"
          : "border-[var(--schematic-line-color)]",
        filled
          ? accent
            ? "bg-[var(--schematic-line-accent)]"
            : "bg-[var(--schematic-line-color)]"
          : "bg-[var(--bg-primary)]",
        pulse && "animate-pulse",
        className
      )}
    />
  );
}

/**
 * StatusNode - A connection node with status indicator
 * Used in flow diagrams to show state
 */
interface StatusNodeProps {
  status: "active" | "completed" | "pending" | "error";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function StatusNode({ status, size = "md", className }: StatusNodeProps) {
  const sizes = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-2.5 h-2.5",
  };

  const statusColors = {
    active: "bg-blue-500 border-blue-500",
    completed: "bg-green-500 border-green-500",
    pending: "bg-gray-300 border-gray-300",
    error: "bg-red-500 border-red-500",
  };

  return (
    <div
      className={cn(
        "rounded-full border-2",
        sizes[size],
        statusColors[status],
        status === "active" && "animate-pulse",
        className
      )}
    />
  );
}

export default ConnectionNode;
