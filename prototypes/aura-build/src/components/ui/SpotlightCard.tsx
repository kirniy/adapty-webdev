"use client";

import { cn } from "@/lib/cn";
import { useRef, type HTMLAttributes } from "react";

interface SpotlightCardProps extends HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  from?: string;
  via?: string;
  size?: number;
  mode?: "after" | "before"; // where to put the spotlight
}

export function SpotlightCard({
  children,
  className,
  as: Component = "div",
  from = "rgba(193, 255, 114, 0.15)",
  size = 400,
  mode = "before",
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
      className={cn(
        "spotlight-card relative overflow-hidden",
        "before:absolute before:inset-0 before:pointer-events-none",
        "before:bg-[radial-gradient(var(--spotlight-radius)_circle_at_var(--mouse-x)_var(--mouse-y),var(--spotlight-color),transparent_100%)]",
        "before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
        className
      )}
      style={
        {
          "--spotlight-color": from,
          "--spotlight-radius": `${size}px`,
          "--mouse-x": "-1000px",
          "--mouse-y": "-1000px"
        } as React.CSSProperties
      }
      {...props}
    >
      {/* 
          Border Reveal Effect:
          We need a border that is slightly visible by default (white/5),
          and lights up near mouse (white/20).
          
          Implementation:
          1. Base border via CSS class or style.
          2. Hover border via radial gradient on a separate layer.
      */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 border border-white/5 rounded-[inherit]" 
      />
      <div 
        className="absolute inset-0 pointer-events-none z-0 rounded-[inherit]"
        style={{
            background: `radial-gradient(${size}px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.2), transparent 40%)`,
            maskImage: "linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px" // The border width
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </Component>
  );
}
