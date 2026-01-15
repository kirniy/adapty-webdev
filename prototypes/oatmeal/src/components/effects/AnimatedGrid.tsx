'use client'

import { cn } from '@/lib/cn'
import { useGridVariant, type GridVariant } from '@/lib/debug-context'
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  type MotionValue,
} from 'motion/react'
import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'

interface AnimatedGridProps {
  className?: string
  children?: ReactNode
}

export function AnimatedGrid({ className, children }: AnimatedGridProps) {
  const variant = useGridVariant()

  // If variant is 'off', render nothing
  if (variant === 'off') {
    return children ? (
      <div className={cn('relative w-full h-full', className)}>
        <div className="relative z-10">{children}</div>
      </div>
    ) : null
  }

  return (
    <AnimatedGridInner className={className} variant={variant}>
      {children}
    </AnimatedGridInner>
  )
}

// Inner component to handle the actual grid rendering
function AnimatedGridInner({
  className,
  children,
  variant,
}: AnimatedGridProps & { variant: Exclude<GridVariant, 'off'> }) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse position for cursor-tracking mode
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Only track mouse if in cursor-tracking mode
  useEffect(() => {
    if (variant !== 'cursor-tracking') return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (rect) {
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY, variant])

  // Grid offset for animation (used in cursor-tracking and slow-drift modes)
  const gridOffsetX = useMotionValue(0)
  const gridOffsetY = useMotionValue(0)

  const speedX = 0.12
  const speedY = 0.12

  // Only animate if not static
  useAnimationFrame(() => {
    if (variant === 'static') return

    const currentX = gridOffsetX.get()
    const currentY = gridOffsetY.get()
    gridOffsetX.set((currentX + speedX) % 40)
    gridOffsetY.set((currentY + speedY) % 40)
  })

  // Mask for cursor-tracking mode
  const maskImage = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black, transparent)`

  // For static mode, gridOffsetX/Y stay at 0 since useAnimationFrame returns early

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full h-full overflow-hidden pointer-events-none',
        className
      )}
    >
      {/* Base Grid (Always visible, very faint) */}
      <div className="absolute inset-0 z-0 opacity-[0.04]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} id="grid-base" />
      </div>

      {/* Revealed Grid - Only for cursor-tracking mode */}
      {variant === 'cursor-tracking' && (
        <motion.div
          className="absolute inset-0 z-0"
          style={{ maskImage, WebkitMaskImage: maskImage }}
        >
          {/* Olive tint behind revealed grid */}
          <div className="absolute inset-0 bg-gradient-to-r from-olive-400/20 to-olive-600/10 opacity-40" />
          <GridPattern
            offsetX={gridOffsetX}
            offsetY={gridOffsetY}
            className="text-olive-500/50"
            id="grid-reveal"
          />
        </motion.div>
      )}

      {/* Ambient Background Blobs - All modes except off */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute right-[-20%] top-[-20%] w-[40%] h-[40%] rounded-full bg-olive-400/15 blur-[120px]" />
        <div className="absolute right-[10%] top-[-10%] w-[20%] h-[20%] rounded-full bg-olive-500/10 blur-[100px]" />
        <div className="absolute left-[-10%] bottom-[-20%] w-[40%] h-[40%] rounded-full bg-olive-600/10 blur-[120px]" />
      </div>

      {/* Pass through content */}
      {children && (
        <div className="relative z-10 pointer-events-auto">{children}</div>
      )}
    </div>
  )
}

function GridPattern({
  offsetX,
  offsetY,
  className,
  id,
}: {
  offsetX: MotionValue<number>
  offsetY: MotionValue<number>
  className?: string
  id: string
}) {
  return (
    <svg className={cn('w-full h-full', className)}>
      <defs>
        <motion.pattern
          id={id}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-olive-400"
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
