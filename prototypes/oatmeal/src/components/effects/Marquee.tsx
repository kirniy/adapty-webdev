'use client'

import { cn } from '@/lib/cn'
import type { ComponentProps } from 'react'

type MarqueeProps = {
  speed?: 'slow' | 'normal' | 'fast'
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
} & ComponentProps<'div'>

const speedClasses = {
  slow: '[--duration:60s]',
  normal: '[--duration:40s]',
  fast: '[--duration:20s]',
}

export function Marquee({
  speed = 'normal',
  direction = 'left',
  pauseOnHover = false,
  className,
  children,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn(
        'marquee-container relative flex overflow-hidden',
        speedClasses[speed],
        pauseOnHover && 'hover:[&>*]:pause',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'flex shrink-0 gap-8 animate-marquee',
          direction === 'right' && '[animation-direction:reverse]'
        )}
        style={{ animationDuration: 'var(--duration)' }}
      >
        {children}
      </div>
      <div
        className={cn(
          'flex shrink-0 gap-8 animate-marquee',
          direction === 'right' && '[animation-direction:reverse]'
        )}
        style={{ animationDuration: 'var(--duration)' }}
        aria-hidden
      >
        {children}
      </div>
    </div>
  )
}
