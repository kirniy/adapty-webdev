'use client'

import { useDebug, type OpacityLevel, type ThicknessLevel } from '@/lib/debug-context'
import { cn } from '@/lib/cn'

// Opacity values for inline styles (more reliable than Tailwind classes for dynamic values)
const OPACITY_VALUES: Record<OpacityLevel, number> = {
  low: 0.2,
  medium: 0.4,
  high: 0.7,
}

// Width values in pixels
const WIDTH_VALUES: Record<ThicknessLevel, number> = {
  hairline: 0.5,
  thin: 1,
  medium: 2,
}

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
  const { showGridLines, gridLinesDashed, gridLinesOpacity, gridLinesWidth } = useDebug()

  const opacityValue = OPACITY_VALUES[gridLinesOpacity]
  const widthValue = WIDTH_VALUES[gridLinesWidth]

  // Common styles for both solid and dashed lines
  const lineStyle: React.CSSProperties = {
    opacity: showGridLines ? opacityValue : 0,
    transition: 'opacity 200ms ease',
  }

  // For solid lines, use background with width
  // For dashed lines, use border with border-width
  const solidStyle: React.CSSProperties = {
    ...lineStyle,
    width: `${widthValue}px`,
    backgroundColor: 'rgb(168 162 158)', // olive-300
  }

  const dashedStyle: React.CSSProperties = {
    ...lineStyle,
    width: 0,
    borderLeftWidth: `${widthValue}px`,
    borderLeftStyle: 'dashed',
    borderLeftColor: 'rgb(168 162 158)', // olive-300
  }

  const leftLineStyle = gridLinesDashed ? dashedStyle : solidStyle
  const rightLineStyle = gridLinesDashed 
    ? { ...lineStyle, width: 0, borderRightWidth: `${widthValue}px`, borderRightStyle: 'dashed' as const, borderRightColor: 'rgb(168 162 158)' }
    : solidStyle

  return (
    <>
      {/* Left vertical edge line */}
      <div
        className={cn(
          'pointer-events-none fixed z-40',
          'left-4 sm:left-[max(1rem,calc((100vw_-_1280px)_/_2))]',
          'top-0 bottom-0'
        )}
        style={leftLineStyle}
        aria-hidden="true"
      />

      {/* Right vertical edge line */}
      <div
        className={cn(
          'pointer-events-none fixed z-40',
          'right-4 sm:right-[max(1rem,calc((100vw_-_1280px)_/_2))]',
          'top-0 bottom-0'
        )}
        style={rightLineStyle}
        aria-hidden="true"
      />
    </>
  )
}
