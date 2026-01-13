"use client";

import { cn } from "~/lib/utils";
import { ConnectionNode, StatusNode } from "./ConnectionNode";
import { Check, Circle, Zap, ArrowRight } from "lucide-react";

/**
 * FlowDiagramCard - Attio's workflow card with connection points
 *
 * Cards that appear in flow diagrams with status badges, labels, and
 * connection points for schematic lines.
 *
 * @example
 * <FlowDiagramCard
 *   label="Trigger"
 *   title="When Deal updated"
 *   subtitle="Deals"
 *   status="triggered"
 *   connectionPoints={['bottom']}
 * />
 */

interface FlowDiagramCardProps {
  /** Small label above title (e.g., "Trigger", "Condition") */
  label?: string;
  /** Label icon */
  labelIcon?: React.ReactNode;
  /** Main title text */
  title: string;
  /** Subtitle or secondary text */
  subtitle?: string;
  /** Description text */
  description?: string;
  /** Status badge */
  status?: "triggered" | "completed" | "pending" | "active" | "error";
  /** Where to show connection points */
  connectionPoints?: Array<"top" | "bottom" | "left" | "right">;
  /** Card size variant */
  size?: "sm" | "md" | "lg";
  /** Additional content */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

export function FlowDiagramCard({
  label,
  labelIcon,
  title,
  subtitle,
  description,
  status,
  connectionPoints = [],
  size = "md",
  children,
  className,
  onClick,
}: FlowDiagramCardProps) {
  const sizes = {
    sm: "p-3 min-w-[180px]",
    md: "p-4 min-w-[220px]",
    lg: "p-5 min-w-[280px]",
  };

  const statusConfig = {
    triggered: {
      text: "Triggered",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      icon: <Check className="w-3 h-3" />,
    },
    completed: {
      text: "Completed",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      icon: <Check className="w-3 h-3" />,
    },
    pending: {
      text: "Pending",
      bgColor: "bg-gray-50",
      textColor: "text-gray-500",
      icon: <Circle className="w-3 h-3" />,
    },
    active: {
      text: "Active",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      icon: <Zap className="w-3 h-3" />,
    },
    error: {
      text: "Error",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      icon: <Circle className="w-3 h-3" />,
    },
  };

  return (
    <div className={cn("relative inline-block", className)}>
      {/* Connection Points */}
      {connectionPoints.includes("top") && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <ConnectionNode />
        </div>
      )}
      {connectionPoints.includes("bottom") && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
          <ConnectionNode />
        </div>
      )}
      {connectionPoints.includes("left") && (
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <ConnectionNode />
        </div>
      )}
      {connectionPoints.includes("right") && (
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10">
          <ConnectionNode />
        </div>
      )}

      {/* Card */}
      <div
        className={cn(
          "rounded-lg border border-[var(--border-default)] bg-[var(--bg-primary)]",
          "transition-shadow duration-150",
          onClick && "cursor-pointer hover:shadow-md",
          sizes[size]
        )}
        onClick={onClick}
      >
        {/* Header Row: Label + Status */}
        {(label || status) && (
          <div className="flex items-center justify-between mb-2">
            {label && (
              <div className="flex items-center gap-1.5">
                {labelIcon && (
                  <span className="text-[var(--text-muted)]">{labelIcon}</span>
                )}
                <span className="text-xs font-medium text-[var(--text-muted)]">
                  {label}
                </span>
              </div>
            )}
            {status && statusConfig[status] && (
              <span
                className={cn(
                  "inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded",
                  statusConfig[status].bgColor,
                  statusConfig[status].textColor
                )}
              >
                {statusConfig[status].icon}
                {statusConfig[status].text}
              </span>
            )}
          </div>
        )}

        {/* Title Row */}
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-[var(--text-primary)]">{title}</h4>
          {subtitle && (
            <span className="text-xs text-[var(--text-muted)] ml-2 px-2 py-0.5 rounded bg-[var(--bg-secondary)]">
              {subtitle}
            </span>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            {description}
          </p>
        )}

        {/* Additional Content */}
        {children}
      </div>
    </div>
  );
}

/**
 * FlowDiagramBranch - Shows a branching point with labels
 */
interface FlowDiagramBranchProps {
  leftLabel: string;
  rightLabel: string;
  leftActive?: boolean;
  rightActive?: boolean;
  className?: string;
}

export function FlowDiagramBranch({
  leftLabel,
  rightLabel,
  leftActive = false,
  rightActive = false,
  className,
}: FlowDiagramBranchProps) {
  return (
    <div className={cn("relative flex items-start justify-center gap-16", className)}>
      {/* Central node */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <ConnectionNode />
      </div>

      {/* Left branch */}
      <div className="flex flex-col items-center">
        <div className="w-[1px] h-4 bg-[var(--schematic-line-color)]" />
        <span
          className={cn(
            "text-xs font-medium px-2 py-0.5 rounded",
            leftActive
              ? "bg-blue-50 text-blue-600"
              : "bg-gray-50 text-gray-500"
          )}
        >
          {leftLabel}
        </span>
        <div className="w-[1px] h-4 bg-[var(--schematic-line-color)]" />
        <ConnectionNode />
      </div>

      {/* Horizontal connector left */}
      <div className="absolute top-0 left-1/2 -translate-x-full w-8 h-[1px] bg-[var(--schematic-line-color)]" />

      {/* Horizontal connector right */}
      <div className="absolute top-0 left-1/2 w-8 h-[1px] bg-[var(--schematic-line-color)]" />

      {/* Right branch */}
      <div className="flex flex-col items-center">
        <div className="w-[1px] h-4 bg-[var(--schematic-line-color)]" />
        <span
          className={cn(
            "text-xs font-medium px-2 py-0.5 rounded",
            rightActive
              ? "bg-blue-50 text-blue-600"
              : "bg-gray-50 text-gray-500"
          )}
        >
          {rightLabel}
        </span>
        <div className="w-[1px] h-4 bg-[var(--schematic-line-color)]" />
        <ConnectionNode />
      </div>
    </div>
  );
}

/**
 * FlowDiagramResult - Shows an AI/automated result line
 */
interface FlowDiagramResultProps {
  icon?: React.ReactNode;
  text: string;
  highlight?: string;
  className?: string;
}

export function FlowDiagramResult({
  icon,
  text,
  highlight,
  className,
}: FlowDiagramResultProps) {
  return (
    <div className={cn("flex items-center gap-2 mt-2 text-sm", className)}>
      {icon && <span className="text-[var(--text-muted)]">{icon}</span>}
      <span className="text-[var(--text-secondary)]">{text}</span>
      {highlight && (
        <span className="text-blue-600 font-medium">{highlight}</span>
      )}
    </div>
  );
}

export default FlowDiagramCard;
