"use client";

import { cn } from "@/lib/cn";
import { ReactNode } from "react";

/* ═══════════════════════════════════════════════════════════════
   SONAR NODE
   Wrapper component that adds animated sonar/ripple effects
   Common in AI/Tech sites for "live" connection indicators
   ═══════════════════════════════════════════════════════════════ */

interface SonarNodeProps {
  children: ReactNode;
  /** Number of ripple rings (1-3) */
  rings?: 1 | 2 | 3;
  /** Color variant */
  variant?: "default" | "lime" | "dark";
  /** Size of the sonar effect */
  size?: "sm" | "md" | "lg";
  /** Disable animation */
  paused?: boolean;
  className?: string;
}

/**
 * SonarNode - Adds pulsing sonar rings around any element
 *
 * @example
 * <SonarNode rings={2} variant="lime">
 *   <div className="w-10 h-10 rounded-full bg-lime-400" />
 * </SonarNode>
 */
export function SonarNode({
  children,
  rings = 2,
  variant = "default",
  size = "md",
  paused = false,
  className,
}: SonarNodeProps) {
  const colorClasses = {
    default: "border-stone-300",
    lime: "border-brand-lime",
    dark: "border-stone-600",
  };

  const ringOpacities = {
    1: [0.6],
    2: [0.6, 0.4],
    3: [0.6, 0.4, 0.2],
  };

  const ringDelays = {
    1: [0],
    2: [0, 0.5],
    3: [0, 0.4, 0.8],
  };

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      {/* The wrapped content */}
      <div className="relative z-10">{children}</div>

      {/* Sonar rings */}
      {Array.from({ length: rings }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 rounded-full border",
            colorClasses[variant],
            paused ? "" : "animate-sonar",
            "pointer-events-none"
          )}
          style={{
            opacity: ringOpacities[rings][i],
            animationDelay: `${ringDelays[rings][i]}s`,
            animationPlayState: paused ? "paused" : "running",
          }}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PULSE DOT
   Simple pulsing indicator dot for status displays
   ═══════════════════════════════════════════════════════════════ */

interface PulseDotProps {
  /** Color variant */
  variant?: "lime" | "green" | "blue" | "red" | "amber";
  /** Size */
  size?: "xs" | "sm" | "md";
  className?: string;
}

export function PulseDot({
  variant = "lime",
  size = "sm",
  className,
}: PulseDotProps) {
  const sizeClasses = {
    xs: "w-1.5 h-1.5",
    sm: "w-2 h-2",
    md: "w-3 h-3",
  };

  const colorClasses = {
    lime: "bg-brand-lime",
    green: "bg-green-500",
    blue: "bg-blue-500",
    red: "bg-red-500",
    amber: "bg-amber-500",
  };

  return (
    <span className={cn("relative inline-flex", className)}>
      <span
        className={cn(
          "rounded-full",
          sizeClasses[size],
          colorClasses[variant],
          "animate-pulse"
        )}
      />
      {/* Glow ring */}
      <span
        className={cn(
          "absolute inset-0 rounded-full",
          colorClasses[variant],
          "animate-ping opacity-75"
        )}
        style={{ animationDuration: "2s" }}
      />
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════════
   RIPPLE BUTTON WRAPPER
   Adds ripple effect on click to any button
   ═══════════════════════════════════════════════════════════════ */

interface RippleWrapperProps {
  children: ReactNode;
  className?: string;
}

export function RippleWrapper({ children, className }: RippleWrapperProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement("span");
    ripple.className = "ripple-effect absolute pointer-events-none";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.width = "100px";
    ripple.style.height = "100px";
    ripple.style.marginLeft = "-50px";
    ripple.style.marginTop = "-50px";

    target.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 1500);
  };

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
