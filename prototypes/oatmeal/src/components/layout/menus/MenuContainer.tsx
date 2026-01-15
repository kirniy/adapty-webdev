'use client'

import { motion, type Variants } from 'motion/react'
import { forwardRef, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

/**
 * Animation variants for menu entry/exit with spring physics
 * Matches Oatmeal's "Editorial Elegance" design philosophy
 */
export const menuVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
    scale: 0.98,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.2,
      ease: [0.16, 1, 0.3, 1], // --ease-spring from Oatmeal
      staggerChildren: 0.03,
    },
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: { duration: 0.15 },
  },
}

/**
 * Item variants for stagger animation
 */
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 4 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.15 },
  },
}

interface MenuContainerProps {
  children: ReactNode
  className?: string
  width?: number | string
}

/**
 * Shared menu container with consistent styling and animations
 *
 * Features:
 * - Rounded corners with subtle border
 * - Shadow for depth
 * - Backdrop blur for glass effect
 * - Entry/exit animations with spring physics
 */
export const MenuContainer = forwardRef<HTMLDivElement, MenuContainerProps>(
  ({ children, className, width }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={cn(
          // Base styles - neutral, works for both header variants
          'bg-white/95 backdrop-blur-xl',
          'overflow-hidden',
          className
        )}
        style={{ width }}
      >
        {children}
      </motion.div>
    )
  }
)

MenuContainer.displayName = 'MenuContainer'
