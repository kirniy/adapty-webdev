"use client";

import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface AuroraBackgroundProps {
  children: ReactNode;
  className?: string;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col h-[100vh] items-center justify-center bg-stone-950 text-stone-200 transition-bg",
        className
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
            [--brand-lime:theme(colors.lime.400)]
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--brand-lime)_10%,theme(colors.emerald.300)_15%,theme(colors.lime.300)_20%,theme(colors.green.400)_25%,theme(colors.emerald.200)_30%)]
            [background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter
            blur-[10px]
            invert
            dark:invert-0
            after:content-[""]
            after:absolute
            after:inset-0
            after:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-aurora
            after:[background-attachment:fixed]
            after:mix-blend-difference
            pointer-events-none
            absolute
            -inset-[10px]
            opacity-50
            will-change-transform`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
          )}
        />
      </div>
      {children}
    </div>
  );
};
