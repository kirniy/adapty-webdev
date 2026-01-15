'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { MenuContainer, itemVariants } from './MenuContainer'
import { RESOURCES } from './data/menuContent'
import { cn } from '@/lib/cn'

/**
 * Badge styles for different badge types
 */
const badgeStyles: Record<string, string> = {
  new: 'bg-adapty-100 text-adapty-700',
  weekly: 'bg-olive-200 text-olive-700',
}

interface ResourceLinkProps {
  title: string
  href: string
  icon: string
  badge?: string
}

function ResourceLink({ title, href, icon, badge }: ResourceLinkProps) {
  const badgeStyle = badge ? (badgeStyles[badge] || badgeStyles.new) : ''

  return (
    <motion.div variants={itemVariants}>
      <Link
        href={href}
        className="group flex items-center gap-2.5 p-2 -ml-1 rounded-lg hover:bg-olive-100/50 transition-colors"
      >
        <div className="w-5 h-5 shrink-0 relative opacity-70 group-hover:opacity-100 transition-opacity">
          <Image
            src={icon}
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <span className="text-sm font-medium text-olive-700 group-hover:text-olive-900 transition-colors">
          {title}
        </span>
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
      </Link>
    </motion.div>
  )
}

/**
 * ResourcesMenu - "The Knowledge Hub"
 *
 * Layout: 1100px wide, 5 sections across
 * - LEARN: Blog, Podcasts, Glossary
 * - CONNECT: Community, Webinars, Events, Careers
 * - DISCOVER: Tools, calculators, library
 * - EBOOKS: Growth guides
 * - RESEARCH: Reports with NEW badge
 *
 * Features:
 * - Section headers with uppercase tracking
 * - WEEKLY badge for newsletter
 * - NEW badge for research items
 * - Column separators for visual grouping
 */
export function ResourcesMenu() {
  return (
    <MenuContainer width={1100} className="flex p-8 gap-10">
      {/* Column 1: Learn & Connect */}
      <div className="flex flex-col gap-8 w-[200px] shrink-0">
        {/* LEARN */}
        <div className="flex flex-col gap-2">
          <motion.h4
            variants={itemVariants}
            className="text-xs font-semibold text-olive-400 uppercase tracking-wider mb-1 px-1"
          >
            {RESOURCES.LEARN.title}
          </motion.h4>
          {RESOURCES.LEARN.items.map((item) => (
            <ResourceLink key={item.title} {...item} />
          ))}
        </div>

        {/* CONNECT */}
        <div className="flex flex-col gap-2">
          <motion.h4
            variants={itemVariants}
            className="text-xs font-semibold text-olive-400 uppercase tracking-wider mb-1 px-1"
          >
            {RESOURCES.CONNECT.title}
          </motion.h4>
          {RESOURCES.CONNECT.items.map((item) => (
            <ResourceLink key={item.title} {...item} />
          ))}
        </div>
      </div>

      {/* Column separator */}
      <div className="w-px bg-olive-200/50 self-stretch" />

      {/* Column 2: Discover */}
      <div className="flex flex-col gap-2 w-[260px] shrink-0">
        <motion.h4
          variants={itemVariants}
          className="text-xs font-semibold text-olive-400 uppercase tracking-wider mb-1 px-1"
        >
          {RESOURCES.DISCOVER.title}
        </motion.h4>
        {RESOURCES.DISCOVER.items.map((item) => (
          <ResourceLink key={item.title} {...item} />
        ))}
      </div>

      {/* Column separator */}
      <div className="w-px bg-olive-200/50 self-stretch" />

      {/* Column 3: Ebooks & Research */}
      <div className="flex-1 flex flex-col gap-8">
        {/* EBOOKS */}
        <div className="flex flex-col gap-2">
          <motion.h4
            variants={itemVariants}
            className="text-xs font-semibold text-olive-400 uppercase tracking-wider mb-1 px-1"
          >
            {RESOURCES.EBOOKS.title}
          </motion.h4>
          {RESOURCES.EBOOKS.items.map((item) => (
            <ResourceLink key={item.title} {...item} />
          ))}
        </div>

        {/* RESEARCH */}
        <div className="flex flex-col gap-2">
          <motion.h4
            variants={itemVariants}
            className="text-xs font-semibold text-olive-400 uppercase tracking-wider mb-1 px-1"
          >
            {RESOURCES.RESEARCH.title}
          </motion.h4>
          {RESOURCES.RESEARCH.items.map((item) => (
            <ResourceLink key={item.title} {...item} />
          ))}
        </div>
      </div>
    </MenuContainer>
  )
}
