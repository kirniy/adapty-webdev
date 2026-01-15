"use client";

import dynamic from "next/dynamic";

// PERF: Defer heavy canvas animation component after hydration
// This reduces initial bundle size and improves LCP
// ssr: false is valid here because this is a Client Component
const TheInfiniteGrid = dynamic(
  () => import("@/components/ui/TheInfiniteGrid").then((m) => m.TheInfiniteGrid),
  { ssr: false }
);

interface AnimatedBackgroundProps {
  className?: string;
}

export function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  return <TheInfiniteGrid className={className} />;
}
