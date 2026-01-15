'use client'

import { useDebug } from '@/lib/debug-context'
import { cn } from '@/lib/cn'

/**
 * GridLines - Fixed vertical lines at container edges (achromatic-inspired)
 *
 * Architecture:
 * - Rendered at root level (in PageFrame) to avoid stacking context issues
 * - Uses fixed positioning relative to viewport
 * - Lines align with max-w-7xl container (1280px) + padding
 * - Uses opacity transitions for smooth show/hide
 *
 * Why at root level?
 * - If placed inside a parent with `position: relative` and `z-index`,
 *   the fixed elements' z-index is relative to that stacking context.
 * - By placing at root level, z-index works as expected relative to viewport.
 */
export function GridLines() {
  const { showGridLines, gridLinesDashed } = useDebug()

  return (
    <>
      {/* Left vertical edge line */}
      <div
        className={cn(
          // Fixed positioning at viewport level
          'pointer-events-none fixed z-40',
          // Position: 1rem from edge on mobile, aligned with container on desktop
          // Container is max-w-7xl (1280px) centered, plus px-6 (1.5rem) padding
          'left-4 sm:left-[max(1rem,calc((100vw-1280px)/2))]',
          'top-0 bottom-0 w-px',
          // Smooth opacity transition
          'transition-opacity duration-200',
          showGridLines ? 'opacity-100' : 'opacity-0',
          // Solid vs dashed style
          gridLinesDashed
            ? 'border-l border-dashed border-olive-300/70'
            : 'bg-olive-300/50'
        )}
        aria-hidden="true"
      />

      {/* Right vertical edge line */}
      <div
        className={cn(
          'pointer-events-none fixed z-40',
          'right-4 sm:right-[max(1rem,calc((100vw-1280px)/2))]',
          'top-0 bottom-0 w-px',
          'transition-opacity duration-200',
          showGridLines ? 'opacity-100' : 'opacity-0',
          gridLinesDashed
            ? 'border-r border-dashed border-olive-300/70'
            : 'bg-olive-300/50'
        )}
        aria-hidden="true"
      />
    </>
  )
}
