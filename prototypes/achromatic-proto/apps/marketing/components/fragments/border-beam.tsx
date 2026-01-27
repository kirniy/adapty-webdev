'use client';

import * as React from 'react';

import { cn } from '@workspace/ui/lib/utils';

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

// Adapty brand purple - used when hsl(var(--primary)) is passed
const ADAPTY_PRIMARY = '#6720FF';

// Resolve CSS variable references to actual colors
function resolveColor(color: string): string {
  // Handle transparent/0 opacity cases first (including hsl(var(--primary)/0))
  if (
    color.includes('/0)') ||
    color.includes('/0 )') ||
    color.match(/\/\s*0\s*\)/)
  ) {
    return 'transparent';
  }
  // Handle hsl(var(--primary)) or similar patterns
  if (color.includes('var(--primary)')) {
    // Check for opacity modifier like hsl(var(--primary)/0.3)
    const opacityMatch = color.match(/\/\s*([\d.]+)/);
    if (opacityMatch) {
      const opacity = parseFloat(opacityMatch[1]);
      // Convert hex to rgba with opacity
      return `rgba(103, 32, 255, ${opacity})`;
    }
    return ADAPTY_PRIMARY;
  }
  return color;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = '#ffaa40',
  colorTo = '#9c40ff',
  delay = 0
}: BorderBeamProps) {
  // Resolve CSS variable references
  const resolvedColorFrom = resolveColor(colorFrom);
  const resolvedColorTo = resolveColor(colorTo);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes border-beam {
          100% {
            offset-distance: 100%;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .border-beam-animated::after {
            animation: none !important;
          }
        }
      `
        }}
      />
      <div
        style={
          {
            '--size': size,
            '--duration': duration,
            '--anchor': anchor,
            '--border-width': borderWidth,
            '--color-from': resolvedColorFrom,
            '--color-to': resolvedColorTo,
            '--delay': delay
          } as React.CSSProperties
        }
        className={cn(
          'border-beam-animated absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] pointer-events-none',
          '![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]',
          'after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:[animation:border-beam_calc(var(--duration)*1s)_infinite_linear] after:[animation-delay:var(--delay)s] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]',
          className
        )}
      />
    </>
  );
}
