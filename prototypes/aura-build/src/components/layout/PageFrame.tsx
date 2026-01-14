"use client";

import { ReactNode } from "react";

export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative max-w-[1440px] mx-auto border-l border-r border-stone-200/40 bg-white shadow-2xl shadow-stone-200/20 min-h-screen flex flex-col">
      {/* Blueprint Grid Background - Subtle */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
}
