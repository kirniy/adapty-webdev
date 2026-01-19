'use client'

import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

/**
 * GridSection - Achromatic-inspired section wrapper with optional vertical border lines
 *
 * Creates visual structure and rhythm across sections. The dashed or solid lines
 * add a premium feel and help define content boundaries.
 *
 * @example
 * <GridSection>
 *   <div className="container py-16">Content here</div>
 * </GridSection>
 *
 * @example With hidden lines
 * <GridSection hideVerticalLines hideBottomLine>
 *   <div className="container py-16">Content here</div>
 * </GridSection>
 */
export interface GridSectionProps {
  children: ReactNode
  /** Hide the vertical border lines on left/right edges */
  hideVerticalLines?: boolean
  /** Hide the horizontal bottom border line */
  hideBottomLine?: boolean
  /** Use dashed lines instead of solid */
  dashed?: boolean
  /** Additional className for the section element */
  className?: string
  /** Additional className for the inner container */
  containerClassName?: string
}

export function GridSection({
  children,
  hideVerticalLines = false,
  hideBottomLine = false,
  dashed = false,
  className,
  containerClassName,
}: GridSectionProps) {
  const lineStyle = dashed ? 'border-dashed' : 'border-solid'

  return (
    <section className={cn('relative', className)}>
      <div className={cn('px-4 sm:container mx-auto', containerClassName)}>
        <div className="relative">
          {/* Vertical border lines on left/right edges */}
          {!hideVerticalLines && (
            <>
              <div
                className={cn(
                  'pointer-events-none absolute inset-y-0 left-0 w-px bg-olive-200/50',
                  lineStyle === 'border-dashed' && 'border-l border-dashed border-olive-200/50 bg-transparent'
                )}
                aria-hidden="true"
              />
              <div
                className={cn(
                  'pointer-events-none absolute inset-y-0 right-0 w-px bg-olive-200/50',
                  lineStyle === 'border-dashed' && 'border-r border-dashed border-olive-200/50 bg-transparent'
                )}
                aria-hidden="true"
              />
            </>
          )}
          {children}
        </div>
      </div>
      {/* Bottom border line */}
      {!hideBottomLine && (
        <div
          className={cn(
            'h-px w-full bg-olive-200/50',
            lineStyle === 'border-dashed' && 'border-t border-dashed border-olive-200/50 bg-transparent'
          )}
          aria-hidden="true"
        />
      )}
    </section>
  )
}

/**
 * Hook-aware GridSection that respects the debug context toggle.
 * Use this in sections to conditionally wrap content with grid lines.
 */
export { GridSectionConditional } from './GridSectionConditional'
