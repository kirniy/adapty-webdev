"use client";

import { cn } from "@/lib/cn";
import { ConnectionNode } from "./SchematicLine";
import { Check, Circle, Lightning, ArrowRight, WarningCircle } from "@phosphor-icons/react/dist/ssr";

interface FlowCardProps {
  label?: string;
  labelIcon?: React.ReactNode;
  title: string;
  subtitle?: string;
  description?: string;
  status?: "triggered" | "completed" | "pending" | "active" | "error";
  connectionPoints?: Array<"top" | "bottom" | "left" | "right">;
  className?: string;
  onClick?: () => void;
}

export function FlowCard({
  label,
  labelIcon,
  title,
  subtitle,
  description,
  status,
  connectionPoints = [],
  className,
  onClick,
}: FlowCardProps) {
  const statusConfig = {
    triggered: {
      text: "Triggered",
      bgColor: "bg-emerald-500/10",
      textColor: "text-emerald-500",
      borderColor: "border-emerald-500/20",
      icon: <Check size={12} weight="bold" />,
    },
    completed: {
      text: "Completed",
      bgColor: "bg-emerald-500/10",
      textColor: "text-emerald-500",
      borderColor: "border-emerald-500/20",
      icon: <Check size={12} weight="bold" />,
    },
    pending: {
      text: "Pending",
      bgColor: "bg-stone-500/10",
      textColor: "text-stone-500",
      borderColor: "border-stone-500/20",
      icon: <Circle size={12} weight="bold" />,
    },
    active: {
      text: "Active",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-500",
      borderColor: "border-blue-500/20",
      icon: <Lightning size={12} weight="fill" />,
    },
    error: {
      text: "Error",
      bgColor: "bg-red-500/10",
      textColor: "text-red-500",
      borderColor: "border-red-500/20",
      icon: <WarningCircle size={12} weight="bold" />,
    },
  };

  return (
    <div className={cn("relative inline-block group", className)}>
      {/* Connection Points */}
      {connectionPoints.map((point) => (
        <div
          key={point}
          className={cn(
            "absolute z-10",
            point === "top" && "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
            point === "bottom" && "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
            point === "left" && "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
            point === "right" && "right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
          )}
        >
          <ConnectionNode size="sm" filled className="bg-stone-900 border-stone-800" />
        </div>
      ))}

      {/* Card Body - Glass Style */}
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border border-stone-200/50 bg-white/60 backdrop-blur-sm p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] hover:bg-white/80",
          onClick && "cursor-pointer"
        )}
        onClick={onClick}
      >
        {/* Header Row: Label + Status */}
        {(label || status) && (
          <div className="flex items-center justify-between mb-3 gap-4">
            {label && (
              <div className="flex items-center gap-1.5 min-w-0">
                {labelIcon && <span className="text-stone-400 shrink-0">{labelIcon}</span>}
                <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider truncate">
                  {label}
                </span>
              </div>
            )}
            {status && statusConfig[status] && (
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 text-[10px] font-medium px-2 py-0.5 rounded-full border shrink-0",
                  statusConfig[status].bgColor,
                  statusConfig[status].textColor,
                  statusConfig[status].borderColor
                )}
              >
                {statusConfig[status].icon}
                {statusConfig[status].text}
              </span>
            )}
          </div>
        )}

        {/* Title Row */}
        <div className="flex items-center justify-between gap-4 mb-1">
          <h4 className="font-bold text-stone-900 leading-tight">{title}</h4>
          {subtitle && (
            <span className="text-[10px] font-mono text-stone-500 bg-stone-100 px-1.5 py-0.5 rounded border border-stone-200 shrink-0">
              {subtitle}
            </span>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="mt-2 text-xs leading-relaxed text-stone-500">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
