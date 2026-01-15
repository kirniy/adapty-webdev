'use client'

import { cn } from '@/lib/cn'
import { motion, useInView } from 'motion/react'
import type { ComponentProps } from 'react'
import { useRef } from 'react'

type TextRevealProps = {
  delay?: number
  staggerDelay?: number
} & ComponentProps<'span'>

export function TextReveal({
  delay = 0,
  staggerDelay = 0.05,
  className,
  children,
  ...props
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  const text = typeof children === 'string' ? children : ''
  const words = text.split(' ')

  return (
    <span ref={ref} className={cn('inline', className)} {...props}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{
            opacity: 0,
            filter: 'blur(8px)',
            y: 10,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  filter: 'blur(0)',
                  y: 0,
                }
              : undefined
          }
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            delay: delay + i * staggerDelay,
          }}
          className="inline-block"
        >
          {word}
          {i < words.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </span>
  )
}
