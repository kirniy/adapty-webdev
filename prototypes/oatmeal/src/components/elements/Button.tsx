'use client'

import { cn } from '@/lib/cn'
import { motion } from 'motion/react'
import type { ReactNode } from 'react'

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

const variants = {
  primary:
    'bg-olive-950 text-white hover:bg-olive-800 shadow-sm hover:shadow-md',
  secondary:
    'bg-white text-olive-950 hover:bg-olive-50 border border-olive-200 shadow-sm hover:shadow-md',
  soft:
    'bg-olive-950/10 text-olive-950 hover:bg-olive-950/15',
  ghost:
    'text-olive-950 hover:bg-olive-950/10',
  light:
    'bg-white text-olive-950 hover:bg-olive-100',
  dark:
    'bg-olive-950 text-white hover:bg-olive-800 shadow-sm hover:shadow-md',
}

type ButtonProps = {
  size?: keyof typeof sizes
  variant?: keyof typeof variants
  shimmer?: boolean
  className?: string
  children?: ReactNode
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export function Button({
  size = 'md',
  variant = 'primary',
  shimmer = false,
  className,
  children,
  disabled,
  type = 'button',
  onClick,
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={disabled ? undefined : { y: -2 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={cn(
        'inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium',
        'transition-colors duration-150',
        'focus:outline-none focus:ring-2 focus:ring-olive-500/50 focus:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        sizes[size],
        variants[variant],
        shimmer && 'shimmer',
        className
      )}
    >
      {children}
    </motion.button>
  )
}

type ButtonLinkProps = {
  href: string
  size?: keyof typeof sizes
  variant?: keyof typeof variants
  shimmer?: boolean
  className?: string
  children?: ReactNode
}

export function ButtonLink({
  size = 'md',
  variant = 'primary',
  shimmer = false,
  href,
  className,
  children,
}: ButtonLinkProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={cn(
        'inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium',
        'transition-colors duration-150',
        'focus:outline-none focus:ring-2 focus:ring-olive-500/50 focus:ring-offset-2',
        sizes[size],
        variants[variant],
        shimmer && 'shimmer',
        className
      )}
    >
      {children}
    </motion.a>
  )
}
