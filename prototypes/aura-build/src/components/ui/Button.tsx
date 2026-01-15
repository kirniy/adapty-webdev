"use client";

import { cn } from "@/lib/cn";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { motion } from "motion/react";
import { MagneticButton } from "@/components/ui/MotionPrimitives";

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
    
    // Internal button content
    const ButtonContent = (
      <>
        <span className="relative z-10">{children}</span>
        
        {/* Shimmer Effect */}
        <motion.div
            className="absolute top-0 bottom-0 left-[-100%] w-[50%] skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-20"
            animate={{ left: "200%" }}
            transition={{
                repeat: Infinity,
                duration: 3,
                ease: "linear",
                repeatDelay: 2
            }}
        />

        {variant === "glass" && <div className="button-shine" />}
      </>
    );

    // Style configuration based on variant
    const buttonStyles = cn(
        "relative inline-flex items-center justify-center gap-2 font-semibold transition-all overflow-hidden cursor-pointer",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        // Snappy spring is handled by Motion, but we keep hover scale for simple CSS backup or use Motion wrapper
        "active:scale-[0.98]", 
        {
          sm: "px-3 py-1.5 text-xs rounded-md",
          md: "px-4 py-2 text-sm rounded-lg",
          lg: "px-6 py-3 text-sm rounded-full",
        }[size],
        {
            primary: "bg-stone-900 text-white hover:bg-stone-800 focus:ring-stone-400",
            secondary: "bg-white text-stone-900 border border-stone-300 hover:bg-stone-50 focus:ring-stone-200",
            ghost: "text-stone-600 hover:text-stone-900 hover:bg-stone-100 focus:ring-stone-200",
            lime: cn(
              "bg-brand-lime text-stone-900 hover:bg-brand-lime-dark focus:ring-brand-lime/50",
              glow && "hover:shadow-[0_0_30px_rgba(193,255,114,0.5)]"
            ),
            glass: "glass-button outline-none rounded-full text-stone-900 tracking-tight",
        }[variant],
        className
    );

    // Render logic
    const buttonElement = (
      <button ref={ref} className={buttonStyles} {...props}>
        {ButtonContent}
      </button>
    );

    // Wrap with Magnetic if primary/glass/lime
    if (variant === "primary" || variant === "glass" || variant === "lime") {
        return (
            <MagneticButton className="inline-block">
                {buttonElement}
            </MagneticButton>
        );
    }

    return buttonElement;
  }
);

Button.displayName = "Button";

export { Button };
