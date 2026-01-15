'use client'

import { useDebug } from '@/lib/debug-context'
import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'
import React from 'react'

/**
 * SectionGrid - Wraps page sections with horizontal dividers between them
 *
 * Architecture:
 * - Adds horizontal dividers between child sections
 * - Vertical lines are handled separately by GridLines component (at PageFrame level)
 * - Uses opacity transitions for smooth show/hide controlled by debug menu
 *
 * Why separate from GridLines?
 * - Horizontal dividers are relative-positioned within content flow
 * - Vertical lines need fixed positioning at viewport level
 * - Keeping them separate avoids stacking context conflicts
 */
export function SectionGrid({ children }: { children: ReactNode }) {
  const { showGridLines, gridLinesDashed } = useDebug()

  // Convert children to array to add dividers between them
  const childArray = React.Children.toArray(children)

  return (
    <>
      {childArray.map((child, index) => (
        <React.Fragment key={index}>
          {child}
          {/* Horizontal divider after each section (except last) */}
          {index < childArray.length - 1 && (
            <div
              className={cn(
                'h-px w-full',
                'transition-opacity duration-200',
                showGridLines ? 'opacity-100' : 'opacity-0',
                gridLinesDashed
                  ? 'border-t border-dashed border-olive-300/70'
                  : 'bg-olive-300/50'
              )}
              aria-hidden="true"
            />
          )}
        </React.Fragment>
      ))}
    </>
  )
}
