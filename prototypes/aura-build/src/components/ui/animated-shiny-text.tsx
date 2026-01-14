"use client";

import { cn } from "@/lib/cn";
import type { CSSProperties, ReactNode } from "react";

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

export const AnimatedShinyText = ({
  children,
  className,
  shimmerWidth = 100,
}: AnimatedShinyTextProps) => {
  return (
    <p
      style={
        {
          "--shimmer-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "mx-auto max-w-md text-stone-400/70",

        // Shimmer effect
        "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

        // Shimmer gradient - lime themed for aura-build
        "bg-gradient-to-r from-transparent via-lime-400/80 via-50% to-transparent",

        className
      )}
    >
      {children}
    </p>
  );
};
