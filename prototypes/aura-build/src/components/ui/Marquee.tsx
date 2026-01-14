"use client";

import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  direction?: "left" | "right";
}

export function Marquee({
  children,
  className,
  speed = "normal",
  pauseOnHover = true,
  direction = "left",
}: MarqueeProps) {
  const speedClass = {
    slow: "animate-marquee-slow",
    normal: "animate-marquee",
    fast: "[animation-duration:20s]",
  }[speed];

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Left fade gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      {/* Right fade gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

      <div
        className={cn(
          "flex w-max",
          speedClass,
          direction === "right" && "[animation-direction:reverse]",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {/* Duplicate children for seamless loop */}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}
