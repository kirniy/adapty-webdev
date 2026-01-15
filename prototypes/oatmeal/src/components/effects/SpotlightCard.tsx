'use client'

import { cn } from '@/lib/cn'
import type { ComponentProps, MouseEvent } from 'react'
import { useCallback, useRef } from 'react'

type SpotlightCardProps = {
  spotlightColor?: string
} & ComponentProps<'div'>

export function SpotlightCard({
  spotlightColor = 'rgba(156, 168, 143, 0.15)',
  className,
  children,
  style,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      cardRef.current.style.setProperty('--mouse-x', `${x}%`)
      cardRef.current.style.setProperty('--mouse-y', `${y}%`)
    },
    []
  )

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return
    cardRef.current.style.setProperty('--mouse-x', '50%')
    cardRef.current.style.setProperty('--mouse-y', '50%')
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('spotlight-card', className)}
      style={
        {
          '--spotlight-color': spotlightColor,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  )
}
