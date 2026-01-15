'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { cn } from '@/lib/cn'
import { itemVariants } from './MenuContainer'

interface MenuItemProps {
  title: string
  description?: string
  icon?: string
  href: string
  badge?: 'new' | 'beta' | 'weekly' | string
  /** Compact mode - icon + title only, no description */
  compact?: boolean
  className?: string
}

/**
 * Badge color mapping for different badge types
 */
const badgeStyles: Record<string, string> = {
  new: 'bg-adapty-100 text-adapty-700',
  beta: 'bg-olive-200 text-olive-700',
  weekly: 'bg-olive-200 text-olive-700',
  default: 'bg-olive-100 text-olive-600',
}

/**
 * Reusable menu item component
 *
 * Features:
 * - Icon with hover opacity transition
 * - Title with optional badge
 * - Optional description
 * - Hover lift animation (x: 2px)
 * - Compact mode for dense layouts
 */
export function MenuItem({
  title,
  description,
  icon,
  href,
  badge,
  compact = false,
  className,
}: MenuItemProps) {
  const badgeStyle = badge ? (badgeStyles[badge] || badgeStyles.default) : ''

  return (
    <motion.div variants={itemVariants}>
      <Link
        href={href}
        className={cn(
          'group flex items-start gap-3 rounded-xl transition-colors',
          compact ? 'p-2 hover:bg-olive-100/50' : 'p-3 hover:bg-olive-100',
          className
        )}
      >
        {icon && (
          <div
            className={cn(
              'shrink-0 relative',
              compact ? 'w-5 h-5 mt-0.5' : 'w-6 h-6 mt-0.5',
              'opacity-70 group-hover:opacity-100 transition-opacity'
            )}
          >
            <Image
              src={icon}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <motion.span
              className={cn(
                'font-medium text-olive-900 group-hover:text-olive-700 transition-colors',
                compact ? 'text-sm' : 'text-sm'
              )}
              whileHover={{ x: 2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              {title}
            </motion.span>
            {badge && (
              <span
                className={cn(
                  'px-1.5 py-0.5 text-[10px] font-semibold uppercase rounded leading-none',
                  badgeStyle
                )}
              >
                {badge}
              </span>
            )}
          </div>
          {description && !compact && (
            <p className="text-xs text-olive-500 mt-0.5 line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  )
}
