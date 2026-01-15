'use client'

import dynamic from 'next/dynamic'
import type { ReactNode } from 'react'

// Dynamic import - AnimatedGrid is a heavy animation component
// Loads after hydration, doesn't block initial render
const AnimatedGrid = dynamic(
  () => import('@/components/effects/AnimatedGrid').then((m) => m.AnimatedGrid),
  { ssr: false }
)

interface PageFrameProps {
  children: ReactNode
}

export function PageFrame({ children }: PageFrameProps) {
  return (
    <>
      {/* Site-wide AnimatedGrid background - loads after hydration */}
      <AnimatedGrid className="fixed inset-0 z-0" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </>
  )
}
