'use client'

import { cn } from '@/lib/cn'
import { motion, useInView } from 'motion/react'
import type { ReactNode } from 'react'
import { useRef } from 'react'

type FadeInProps = {
  delay?: number
  duration?: number
  blur?: boolean
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  className?: string
  children?: ReactNode
}

export function FadeIn({
  delay = 0,
  duration = 0.6,
  blur = true,
  direction = 'up',
  distance = 20,
  className,
  children,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        filter: blur ? 'blur(10px)' : 'blur(0)',
        ...directions[direction],
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              filter: 'blur(0)',
              x: 0,
              y: 0,
            }
          : undefined
      }
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        mass: 1.2,
        delay,
        duration,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
