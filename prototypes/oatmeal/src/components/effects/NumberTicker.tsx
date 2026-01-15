'use client'

import { cn } from '@/lib/cn'
import { motion, useInView, useSpring, useTransform } from 'motion/react'
import type { ComponentProps } from 'react'
import { useEffect, useRef } from 'react'

type NumberTickerProps = {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  duration?: number
} & Omit<ComponentProps<'span'>, 'children'>

export function NumberTicker({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2,
  className,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 30,
    duration: duration * 1000,
  })

  const display = useTransform(spring, (current) => {
    const formatted = current.toFixed(decimals)
    // Add commas for thousands
    const parts = formatted.split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return parts.join('.')
  })

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  return (
    <span ref={ref} className={cn('tabular-nums', className)} {...props}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  )
}
