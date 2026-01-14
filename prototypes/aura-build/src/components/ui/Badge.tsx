import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "lime" | "outline";
  children: ReactNode;
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium transition-colors",
        {
          default: "bg-stone-100 text-stone-600",
          lime: "bg-brand-lime text-stone-900",
          outline:
            "border border-stone-200 bg-white text-stone-600 hover:border-stone-300",
        }[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
