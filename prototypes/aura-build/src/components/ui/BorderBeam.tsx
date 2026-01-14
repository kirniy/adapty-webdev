"use client";

import { cn } from "@/lib/cn";

interface BorderBeamProps {
  children: React.ReactNode;
  className?: string;
  /** Duration of full rotation in seconds */
  duration?: number;
  /** Size of the beam highlight in pixels */
  beamSize?: number;
  /** Color of the beam (defaults to brand lime) */
  color?: string;
  /** Whether to show the beam on hover only */
  hoverOnly?: boolean;
  /** Border radius in pixels or CSS value */
  borderRadius?: number | string;
}

/**
 * BorderBeam - A premium button wrapper with animated border beam effect
 *
 * Usage:
 * <BorderBeam>
 *   <button>Click me</button>
 * </BorderBeam>
 */
export function BorderBeam({
  children,
  className,
  duration = 3,
  beamSize = 100,
  color = "var(--color-brand-lime, #c1ff72)",
  hoverOnly = true,
  borderRadius = 9999,
}: BorderBeamProps) {
  const radius = typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius;

  return (
    <div
      className={cn(
        "relative inline-flex group",
        className
      )}
      style={{
        borderRadius: radius,
      }}
    >
      {/* Beam container */}
      <div
        className={cn(
          "absolute inset-0 overflow-hidden pointer-events-none",
          hoverOnly && "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        )}
        style={{ borderRadius: radius }}
      >
        {/* Rotating conic gradient */}
        <div
          className="absolute inset-[-200%]"
          style={{
            background: `conic-gradient(from 0deg, transparent 0deg 330deg, ${color} 360deg)`,
            animation: `borderBeamSpin ${duration}s linear infinite`,
          }}
        />
        {/* Inner mask to create border effect */}
        <div
          className="absolute inset-[1px] bg-white dark:bg-stone-900"
          style={{ borderRadius: `calc(${radius} - 1px)` }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/**
 * GlowButton - A button with animated glow on hover
 */
interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "lime" | "white" | "dark";
  size?: "sm" | "md" | "lg";
}

export function GlowButton({
  children,
  className,
  variant = "lime",
  size = "md",
  ...props
}: GlowButtonProps) {
  const variants = {
    lime: "bg-brand-lime text-black hover:shadow-[0_0_30px_rgba(193,255,114,0.5)]",
    white: "bg-white text-stone-900 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]",
    dark: "bg-stone-900 text-white hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={cn(
        "relative font-medium rounded-full transition-all duration-300",
        "transform hover:scale-[1.02] active:scale-[0.98]",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {/* Inner glow layer */}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-white/10 to-transparent" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}

/**
 * PulseNode - A decorative node with sonar/pulse effect
 */
interface PulseNodeProps {
  className?: string;
  color?: string;
  size?: number;
  rings?: number;
}

export function PulseNode({
  className,
  color = "var(--color-brand-lime, #c1ff72)",
  size = 12,
  rings = 3,
}: PulseNodeProps) {
  return (
    <div
      className={cn("relative", className)}
      style={{ width: size, height: size }}
    >
      {/* Core node */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: color,
          boxShadow: `0 0 ${size}px ${color}, 0 0 ${size * 2}px ${color}50`,
        }}
      />
      {/* Sonar rings */}
      {Array.from({ length: rings }).map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full animate-sonar"
          style={{
            border: `1px solid ${color}`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
}
