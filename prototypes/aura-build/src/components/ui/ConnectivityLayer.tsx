"use client";

import { cn } from "@/lib/cn";

interface ConnectivityLayerProps {
  className?: string;
}

export function ConnectivityLayer({ className }: ConnectivityLayerProps) {
  // Using viewBox coordinates for proper percentage-like positioning
  // viewBox="0 0 300 200" means we work in a 300x200 coordinate space
  // that scales to fill the container

  return (
    <div className={cn("absolute inset-0 pointer-events-none z-0", className)}>
      <svg
        className="w-full h-full"
        viewBox="0 0 300 200"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id="beam-gradient-v" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="var(--color-brand-lime)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="beam-gradient-h" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="var(--color-brand-lime)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/*
           Grid Lines (LG Layout - 3 cols, 2 rows)
           Using viewBox coordinates:
           - 33.33% = 100 in our 300-wide viewBox
           - 66.66% = 200
           - 50% height = 100 in our 200-tall viewBox
        */}

        {/* Base Skeleton Lines (Low Opacity) */}
        <g stroke="white" strokeOpacity="0.08" strokeWidth="0.5" fill="none">
          {/* Vertical Split 1 (Between Col 1 & 2) - x=100 */}
          <line x1="100" y1="0" x2="100" y2="200" />

          {/* Horizontal Split (Between Row 1 & 2, starting from Col 2) - y=100 */}
          <line x1="100" y1="100" x2="300" y2="100" />

          {/* Vertical Split 2 (Between Col 2 & 3, lower half) - x=200 */}
          <line x1="200" y1="100" x2="200" y2="200" />
        </g>

        {/* Active Beams (Pulse) */}
        <g fill="none" strokeLinecap="round">
          {/* Vertical Beam 1 */}
          <line
            x1="100" y1="0" x2="100" y2="200"
            stroke="url(#beam-gradient-v)"
            strokeWidth="1.5"
            strokeDasharray="40 160"
            filter="url(#glow)"
            className="animate-beam-path"
            style={{ animationDuration: "4s" }}
          />

          {/* Horizontal Beam */}
          <line
            x1="100" y1="100" x2="300" y2="100"
            stroke="url(#beam-gradient-h)"
            strokeWidth="1.5"
            strokeDasharray="40 160"
            filter="url(#glow)"
            className="animate-beam-path"
            style={{ animationDuration: "5s", animationDelay: "1s" }}
          />

          {/* Vertical Beam 2 */}
          <line
            x1="200" y1="100" x2="200" y2="200"
            stroke="url(#beam-gradient-v)"
            strokeWidth="1.5"
            strokeDasharray="20 80"
            filter="url(#glow)"
            className="animate-beam-path"
            style={{ animationDuration: "3s", animationDelay: "2s" }}
          />
        </g>

        {/* Sonar Ripples at Intersections */}
        {/* x=100 (33.33%), y=100 (50%) */}
        <g style={{ transformOrigin: "100px 100px", transformBox: "fill-box" as never }}>
          <circle cx="100" cy="100" r="2" fill="var(--color-brand-lime)" opacity="0.6" />
          <circle
            cx="100" cy="100" r="4"
            fill="none"
            stroke="var(--color-brand-lime)"
            strokeWidth="0.5"
            opacity="0.4"
            className="animate-sonar"
          />
          <circle
            cx="100" cy="100" r="4"
            fill="none"
            stroke="var(--color-brand-lime)"
            strokeWidth="0.5"
            opacity="0.4"
            className="animate-sonar"
            style={{ animationDelay: "1s" }}
          />
        </g>

        {/* x=200 (66.66%), y=100 (50%) */}
        <g style={{ transformOrigin: "200px 100px", transformBox: "fill-box" as never }}>
          <circle cx="200" cy="100" r="2" fill="var(--color-brand-lime)" opacity="0.6" />
          <circle
            cx="200" cy="100" r="4"
            fill="none"
            stroke="var(--color-brand-lime)"
            strokeWidth="0.5"
            opacity="0.4"
            className="animate-sonar"
            style={{ animationDelay: "1.5s" }}
          />
          <circle
            cx="200" cy="100" r="4"
            fill="none"
            stroke="var(--color-brand-lime)"
            strokeWidth="0.5"
            opacity="0.4"
            className="animate-sonar"
            style={{ animationDelay: "2.5s" }}
          />
        </g>
      </svg>
    </div>
  );
}
