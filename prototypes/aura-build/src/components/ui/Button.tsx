import { cn } from "@/lib/cn";
import { forwardRef, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "lime" | "glass";
  size?: "sm" | "md" | "lg";
  /** Enable border beam animation on hover (for standard variants) */
  beam?: boolean;
  /** Enable glow effect on hover */
  glow?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      beam = false,
      glow = false,
      children,
      ...props
    },
    ref
  ) => {
    // Glass button uses specific CSS structure
    if (variant === "glass") {
      return (
        <button
          ref={ref}
          className={cn(
            "glass-button relative group cursor-pointer outline-none overflow-hidden rounded-full font-semibold text-stone-900 tracking-tight transition-transform active:scale-[0.98]",
            {
              sm: "text-xs py-2 px-4",
              md: "text-sm py-3 px-6",
              lg: "text-lg py-4 px-8",
            }[size],
            className
          )}
          {...props}
        >
          <span className="relative z-10">{children}</span>
          <div className="button-shine" />
        </button>
      );
    }

    const baseButton = (
      <button
        ref={ref}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center gap-2 font-semibold transition-all",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          // Hover transform for premium feel
          "hover:scale-[1.02] active:scale-[0.98]",
          // Size variants
          {
            sm: "px-3 py-1.5 text-xs rounded-md",
            md: "px-4 py-2 text-sm rounded-lg",
            lg: "px-6 py-3 text-sm rounded-full",
          }[size],
          // Color variants
          {
            primary:
              "bg-stone-900 text-white hover:bg-stone-800 focus:ring-stone-400",
            secondary:
              "bg-white text-stone-900 border border-stone-300 hover:bg-stone-50 focus:ring-stone-200",
            ghost:
              "text-stone-600 hover:text-stone-900 hover:bg-stone-100 focus:ring-stone-200",
            lime: cn(
              "bg-brand-lime text-stone-900 hover:bg-brand-lime-dark focus:ring-brand-lime/50",
              glow && "hover:shadow-[0_0_30px_rgba(193,255,114,0.5)]"
            ),
            glass: "", // Handled above
          }[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );

    // Wrap with beam effect if enabled (for non-glass variants)
    if (beam && (variant === "lime" || variant === "primary")) {
      return (
        <div className="relative inline-flex group">
          {/* Beam container */}
          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Rotating conic gradient */}
            <div
              className="absolute inset-[-200%] animate-[borderBeamSpin_3s_linear_infinite]"
              style={{
                background:
                  variant === "lime"
                    ? "conic-gradient(from 0deg, transparent 0deg 330deg, #0a0a0a 360deg)"
                    : "conic-gradient(from 0deg, transparent 0deg 330deg, #c1ff72 360deg)",
              }}
            />
            {/* Inner mask */}
            <div
              className={cn(
                "absolute inset-[2px] rounded-full",
                variant === "lime" ? "bg-brand-lime" : "bg-stone-900"
              )}
            />
          </div>
          <div className="relative z-10">{baseButton}</div>
        </div>
      );
    }

    return baseButton;
  }
);

Button.displayName = "Button";

export { Button };
