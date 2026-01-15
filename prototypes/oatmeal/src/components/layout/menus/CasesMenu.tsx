'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight } from '@phosphor-icons/react'
import { MenuContainer, itemVariants } from './MenuContainer'
import { CASE_STUDIES } from './data/menuContent'
import { cn } from '@/lib/cn'

/**
 * CasesMenu - "The Success Gallery"
 *
 * Layout: 1000px wide, 4-column grid
 * - 11 case studies + View All link
 * - App icons with shadows
 * - Metric highlights in adapty purple
 * - Card hover lift animation
 *
 * Features:
 * - Stagger animation for items
 * - Hover lift with spring physics
 * - Real success metrics displayed prominently
 */
export function CasesMenu() {
  return (
    <MenuContainer width={1000} className="p-6">
      {/* Header */}
      <motion.h4
        variants={itemVariants}
        className="text-xs font-semibold text-olive-400 uppercase tracking-wider mb-6 px-2"
      >
        User Stories
      </motion.h4>

      {/* Grid of case studies */}
      <div className="grid grid-cols-4 gap-4">
        {CASE_STUDIES.map((study, index) => (
          <motion.div
            key={study.name}
            variants={itemVariants}
            custom={index}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Link
              href={study.href}
              className={cn(
                'group flex items-start gap-3 p-3 rounded-xl',
                'hover:bg-olive-100/50 transition-colors'
              )}
            >
              {/* App Icon */}
              <div className="w-12 h-12 shrink-0 relative overflow-hidden rounded-2xl border border-olive-200 shadow-lg">
                <Image
                  src={study.icon}
                  alt={study.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <span className="text-sm font-semibold text-olive-900 group-hover:text-olive-700 transition-colors block">
                  {study.name}
                </span>
                <p className="text-xs text-olive-500 mt-0.5 line-clamp-2">
                  {study.description}
                </p>
                {study.metric && (
                  <span className="text-xs font-semibold text-adapty-500 mt-1 inline-block">
                    {study.metric}
                  </span>
                )}
              </div>
            </Link>
          </motion.div>
        ))}

        {/* View All Link */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center"
        >
          <Link
            href="https://adapty.io/clients/"
            className="group flex items-center gap-2 text-sm font-semibold text-olive-900 hover:text-adapty-600 transition-colors"
          >
            View all
            <ArrowRight
              size={16}
              weight="bold"
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </MenuContainer>
  )
}
