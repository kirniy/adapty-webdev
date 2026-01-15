'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { cn } from '@/lib/cn'
import { itemVariants } from './MenuContainer'
import type { ProductSidebarLink } from './data/menuContent'

interface MenuSidebarProps {
  links: ProductSidebarLink[]
  className?: string
  /** Show pulsing status indicator for status link */
  showStatusPulse?: boolean
}

/**
 * Sidebar component for Product and Docs menus
 *
 * Features:
 * - Primary and secondary link styling
 * - Gradient background (olive-50 to olive-100)
 * - Optional pulsing status indicator
 * - Hover state with smooth transition
 */
export function MenuSidebar({
  links,
  className,
  showStatusPulse = true,
}: MenuSidebarProps) {
  return (
    <motion.div
      variants={itemVariants}
      className={cn(
        'w-[200px] flex-shrink-0 flex flex-col gap-1 p-4',
        'bg-gradient-to-b from-olive-50 to-olive-100/50',
        'border-r border-olive-200/50',
        className
      )}
    >
      {links.map((link, index) => {
        const isStatusLink = link.title.toLowerCase().includes('status')
        const isSecondary = link.secondary
        const showDivider = !isSecondary && links[index + 1]?.secondary

        return (
          <div key={link.title}>
            <Link
              href={link.href}
              className={cn(
                'flex items-center gap-2 py-2 px-3 rounded-lg transition-colors',
                'hover:bg-olive-200/50',
                isSecondary
                  ? 'text-sm text-olive-600 hover:text-olive-900'
                  : 'text-[15px] font-medium text-olive-900'
              )}
            >
              {isStatusLink && showStatusPulse && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
              )}
              <span>{link.title}</span>
            </Link>
            {showDivider && (
              <div className="h-px bg-olive-200/50 my-2 mx-3" />
            )}
          </div>
        )
      })}
    </motion.div>
  )
}
