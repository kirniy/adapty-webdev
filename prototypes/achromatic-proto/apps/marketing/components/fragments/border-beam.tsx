'use client';

import { cn } from '@workspace/ui/lib/utils';
import * as React from 'react';

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

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = '#ffaa40',
  colorTo = '#9c40ff',
  delay = 0,
}: BorderBeamProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
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
      `}} />
      <div
        style={
          {
            '--size': size,
            '--duration': duration,
            '--anchor': anchor,
            '--border-width': borderWidth,
            '--color-from': colorFrom,
            '--color-to': colorTo,
            '--delay': delay,
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
