"use client";

import { cn } from "@/lib/cn";
import { forwardRef, type ButtonHTMLAttributes } from "react";

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Show animated shine effect on hover */
  shine?: boolean;
  /** Make button full width */
  fullWidth?: boolean;
}

/**
 * GlassButton - Premium glassmorphism button with animated shine effect
 *
 * Features:
 * - Backdrop blur glassmorphism
 * - Animated gradient shine on hover
 * - Subtle inset shadows for depth
 * - Lime accent tint in gradients
 */
const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  (
    { className, size = "lg", shine = true, fullWidth = false, children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "glass-button",
          "relative group",
          "cursor-pointer outline-none focus:outline-none",
          "rounded-full overflow-hidden",
          // Size variants
          {
            sm: "",
            md: "",
            lg: "",
          }[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {/* Button text with padding */}
        <span
          className={cn(
            "button-text block select-none relative z-10",
            "font-semibold text-stone-900 tracking-tight",
            // Size-based padding and text
            {
              sm: "px-4 py-2 text-sm",
              md: "px-6 py-3 text-base",
              lg: "px-8 py-4 text-lg",
            }[size]
          )}
        >
          {children}
        </span>

        {/* Animated shine overlay */}
        {shine && <div className="button-shine" aria-hidden="true" />}
      </button>
    );
  }
);

GlassButton.displayName = "GlassButton";

export { GlassButton };
