'use client'

import { motion } from 'motion/react'
import { cn } from '@/lib/cn'
import { itemVariants } from './MenuContainer'
import type { ReactNode } from 'react'

interface MenuSectionProps {
  title: string
  children: ReactNode
  className?: string
  /** Number of columns for grid layout */
  columns?: 1 | 2 | 3 | 4
  /** Spacing between items */
  gap?: 'tight' | 'normal' | 'loose'
}

const columnClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
}

const gapClasses = {
  tight: 'gap-1',
  normal: 'gap-2',
  loose: 'gap-4',
}

/**
 * Menu section with uppercase tracking title
 *
 * Features:
 * - Consistent header styling (uppercase, tracking-wider)
 * - Configurable grid layout
 * - Animated entrance with stagger
 */
export function MenuSection({
  title,
  children,
  className,
  columns = 1,
  gap = 'normal',
}: MenuSectionProps) {
  return (
    <motion.div variants={itemVariants} className={className}>
      <h4 className="text-xs font-semibold text-olive-400 uppercase tracking-wider mb-3 px-3">
        {title}
      </h4>
      <div
        className={cn(
          columns > 1 ? 'grid' : 'space-y-1',
          columns > 1 && columnClasses[columns],
          columns > 1 && gapClasses[gap]
        )}
      >
        {children}
      </div>
    </motion.div>
  )
}
