'use client'

import { cn } from '@/lib/cn'
import type { ComponentProps } from 'react'

type MarqueeProps = {
  speed?: 'slow' | 'normal' | 'fast'
  direction?: 'left' | 'right' | 'up' | 'down'
  pauseOnHover?: boolean
  vertical?: boolean
  repeat?: number
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
  vertical = false,
  repeat = 4,
  className,
  children,
  ...props
}: MarqueeProps) {
  // If direction is up/down, force vertical true if not set
  const isVertical = vertical || direction === 'up' || direction === 'down'

  return (
    <div
      className={cn(
        'marquee-container group flex overflow-hidden',
        speedClasses[speed],
        pauseOnHover && 'hover:[&>*]:pause',
        {
          'flex-row': !isVertical,
          'flex-col': isVertical,
        },
        className
      )}
      {...props}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              'flex shrink-0 gap-8',
              {
                'animate-marquee flex-row': !isVertical,
                'animate-marquee-vertical flex-col': isVertical,
                '[animation-direction:reverse]': direction === 'right' || direction === 'down',
              }
            )}
            style={{ animationDuration: 'var(--duration)' }}
          >
            {children}
          </div>
        ))}
    </div>
  )
}
