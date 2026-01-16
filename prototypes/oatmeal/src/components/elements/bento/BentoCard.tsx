'use client'

import { cn } from '@/lib/cn'
import { motion, type HTMLMotionProps } from 'motion/react'
import type { ReactNode } from 'react'

type BentoCardProps = HTMLMotionProps<'div'> & {
  children: ReactNode
}

export function BentoCard({ className, children, ...props }: BentoCardProps) {
  return (
    <motion.div
      className={cn(
        'group relative overflow-hidden rounded-3xl border border-olive-900/10 bg-white/50 p-6 backdrop-blur-sm',
        'hover:shadow-lg hover:border-olive-900/20 transition-all duration-300',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function BentoCardHeader({ className, children, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex flex-col gap-2 mb-6', className)} {...props}>
      {children}
    </div>
  )
}

export function BentoCardTitle({ className, children, ...props }: React.ComponentProps<'h3'>) {
  return (
    <h3 className={cn('text-xl font-serif font-medium text-olive-900', className)} {...props}>
      {children}
    </h3>
  )
}

export function BentoCardDescription({ className, children, ...props }: React.ComponentProps<'p'>) {
  return (
    <p className={cn('text-sm text-olive-600', className)} {...props}>
      {children}
    </p>
  )
}

export function BentoCardContent({ className, children, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('relative', className)} {...props}>
      {children}
    </div>
  )
}
