'use client'

import dynamic from 'next/dynamic'
import type { ReactNode } from 'react'
import { DebugProvider } from '@/lib/debug-context'
import { DebugMenu } from '@/components/debug/DebugMenu'
import { GridLines } from '@/components/layout/GridLines'

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
    <DebugProvider>
      {/* Site-wide AnimatedGrid background - loads after hydration */}
      <AnimatedGrid className="fixed inset-0 z-0" />

      {/* Achromatic-inspired grid lines - at root level to avoid stacking context issues */}
      <GridLines />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Debug Menu - floating panel for variant switching */}
      <DebugMenu />
    </DebugProvider>
  )
}
