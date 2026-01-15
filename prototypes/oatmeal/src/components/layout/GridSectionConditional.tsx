'use client'

import { useDebug } from '@/lib/debug-context'
import { GridSection, type GridSectionProps } from './GridSection'
import type { ReactNode } from 'react'

/**
 * GridSectionConditional - Wrapper that conditionally applies GridSection based on debug toggle
 *
 * When showGridLines is enabled in the debug menu, this wraps children in GridSection.
 * When disabled, it renders children directly without the grid lines.
 */
export function GridSectionConditional({
  children,
  hideVerticalLines,
  hideBottomLine,
  dashed,
  className,
  containerClassName,
}: Omit<GridSectionProps, 'children'> & { children: ReactNode }) {
  const { showGridLines, gridLinesDashed } = useDebug()

  if (!showGridLines) {
    // Just render the section without grid lines
    return <section className={className}>{children}</section>
  }

  return (
    <GridSection
      hideVerticalLines={hideVerticalLines}
      hideBottomLine={hideBottomLine}
      dashed={gridLinesDashed ?? dashed}
      className={className}
      containerClassName={containerClassName}
    >
      {children}
    </GridSection>
  )
}
