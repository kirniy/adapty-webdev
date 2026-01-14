"use client";

import { ReactNode } from "react";

export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full min-h-screen flex flex-col">
      {children}
    </div>
  );
}
