import React from "react";
import { cn } from "@/lib/cn";

interface SchematicLineProps {
  className?: string;
  variant?: "dashed" | "dotted" | "solid";
  orientation?: "horizontal" | "vertical";
}

export function SchematicLine({ className, variant = "dashed", orientation = "horizontal" }: SchematicLineProps) {
  return (
    <svg 
      className={cn("absolute pointer-events-none text-stone-300", className)}
      width={orientation === "vertical" ? "1" : "100%"}
      height={orientation === "horizontal" ? "1" : "100%"}
    >
      <line
        x1="0"
        y1="0"
        x2={orientation === "horizontal" ? "100%" : "0"}
        y2={orientation === "vertical" ? "100%" : "0"}
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray={variant === "dashed" ? "4 6" : variant === "dotted" ? "1 4" : "none"}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SchematicNode({ className, filled = false }: { className?: string; filled?: boolean }) {
  return (
    <div className={cn(
      "node-point absolute z-10",
      filled && "node-point-filled",
      className
    )} />
  );
}
