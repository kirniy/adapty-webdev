import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "dark" | "lime" | "glass";
  hover?: boolean;
  /** Enable spotlight effect (requires SpotlightGrid parent for mouse tracking) */
  spotlight?: boolean;
  children: ReactNode;
}

export function Card({
  className,
  variant = "default",
  hover = true,
  spotlight = true, // Enabled by default for premium feel
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl p-8 transition-all duration-300",
        // Variant styles
        {
          default: "bg-white border border-stone-200 shadow-sm",
          dark: "bg-stone-900 text-white border border-stone-800",
          lime: "bg-[#f0fdf4] border border-[#dcfce7]",
          glass: "glass-card border border-white/20",
        }[variant],
        // Hover effect
        hover && "hover:shadow-md hover:-translate-y-0.5",
        // Spotlight effect
        spotlight && "spotlight-card",
        className
      )}
      style={{
        "--mouse-x": "50%",
        "--mouse-y": "50%",
        "--spotlight-color":
          variant === "dark"
            ? "rgba(193, 255, 114, 0.1)"
            : "rgba(193, 255, 114, 0.15)",
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardIconProps extends HTMLAttributes<HTMLDivElement> {
  color?: "blue" | "red" | "green" | "orange" | "purple" | "lime" | "default";
  children: ReactNode;
}

export function CardIcon({
  className,
  color = "default",
  children,
  ...props
}: CardIconProps) {
  return (
    <div
      className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center mb-6",
        {
          blue: "bg-blue-50 text-blue-600",
          red: "bg-red-50 text-red-600",
          green: "bg-green-50 text-green-600",
          orange: "bg-orange-50 text-orange-600",
          purple: "bg-purple-50 text-purple-600",
          lime: "bg-brand-lime/20 text-stone-900",
          default: "bg-stone-100 text-stone-600",
        }[color],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
