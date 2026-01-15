'use client'

import { AnimatedGrid } from '@/components/effects/AnimatedGrid'
import type { ReactNode } from 'react'

interface PageFrameProps {
  children: ReactNode
}

export function PageFrame({ children }: PageFrameProps) {
  return (
    <>
      {/* Site-wide AnimatedGrid background */}
      <AnimatedGrid className="fixed inset-0 z-0" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </>
  )
}
