"use client";

import { cn } from "@/lib/cn";
import { useRef, type HTMLAttributes } from "react";

interface SpotlightCardProps extends HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  from?: string;
  via?: string;
  size?: number;
}

export function SpotlightCard({
  children,
  className,
  as: Component = "div",
  from = "rgba(193, 255, 114, 0.15)",
  size = 400,
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <Component
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={cn("spotlight-card relative overflow-hidden", className)}
      style={
        {
          "--spotlight-color": from,
          "--spotlight-radius": `${size}px`,
        } as React.CSSProperties
      }
      {...props}
    >
      {children}
    </Component>
  );
}
