"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/cn";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
  type MotionValue,
} from "motion/react";

interface TheInfiniteGridProps {
  className?: string;
  children?: React.ReactNode;
}

export function TheInfiniteGrid({ className, children }: TheInfiniteGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Get offset relative to container if possible, but window is fine for fixed/bg
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const speedX = 0.15;
  const speedY = 0.15;

  useAnimationFrame(() => {
    const currentX = gridOffsetX.get();
    const currentY = gridOffsetY.get();
    gridOffsetX.set((currentX + speedX) % 40);
    gridOffsetY.set((currentY + speedY) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-full overflow-hidden pointer-events-none",
        className
      )}
    >
      {/* Base Grid (Very Faint) */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} id="grid-base" />
      </div>

      {/* Revealed Grid (Stronger on mouse hover) */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        {/* Lime tint behind revealed grid */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-lime/20 to-green-500/10 opacity-30" />
        <GridPattern
          offsetX={gridOffsetX}
          offsetY={gridOffsetY}
          className="text-brand-lime/60"
          id="grid-reveal"
        />
      </motion.div>

      {/* Ambient Background Blobs (Lime Accent) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute right-[-20%] top-[-20%] w-[40%] h-[40%] rounded-full bg-brand-lime/20 blur-[120px]" />
        <div className="absolute right-[10%] top-[-10%] w-[20%] h-[20%] rounded-full bg-green-400/15 blur-[100px]" />
        <div className="absolute left-[-10%] bottom-[-20%] w-[40%] h-[40%] rounded-full bg-emerald-500/15 blur-[120px]" />
      </div>

      {/* Pass through content */}
      {children && (
        <div className="relative z-10 pointer-events-auto">{children}</div>
      )}
    </div>
  );
}

function GridPattern({
  offsetX,
  offsetY,
  className,
  id,
}: {
  offsetX: MotionValue<number>;
  offsetY: MotionValue<number>;
  className?: string;
  id: string;
}) {
  return (
    <svg className={cn("w-full h-full", className)}>
      <defs>
        <motion.pattern
          id={id}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-stone-900"
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
