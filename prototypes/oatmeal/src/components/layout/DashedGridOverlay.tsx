'use client'

import { useDebug, type OpacityLevel } from '@/lib/debug-context'
import { cn } from '@/lib/cn'
import { motion } from 'motion/react'

// Opacity multipliers for the dashed grid intensity
const OPACITY_MULTIPLIER: Record<OpacityLevel, number> = {
  low: 0.4,
  medium: 1,
  high: 2,
}

/**
 * DashedGridOverlay - Achromatic-inspired decorative SVG dashed grid lines
 *
 * Architecture:
 * - Renders at viewport level (fixed positioning) for global coverage
 * - Uses SVG lines with strokeDasharray for dashed appearance
 * - Gradient masks create fade effects at top and bottom
 * - Positioned at inner grid points (not container edges - those are in GridLines)
 *
 * Why SVG lines?
 * - More precise control over dash patterns vs CSS border-dashed
 * - Can apply gradient masks for professional fade effects
 * - Better rendering at subpixel positions
 *
 * Design reference: achromatic-template hero section
 */
export function DashedGridOverlay() {
  const { showDashedGrid, dashedGridStyle, dashedGridOpacity } = useDebug()

  // Base opacities tuned against bg-olive-100 for real contrast.
  const styleMultiplier = dashedGridStyle === 'subtle' ? 0.5 : 1
  const opacityMultiplier = OPACITY_MULTIPLIER[dashedGridOpacity]
  const intensity = styleMultiplier * opacityMultiplier

  // Compute actual opacity values (clamped to reasonable range)
  const opacity = {
    major: Math.min(0.28 * intensity, 0.8),
    mid: Math.min(0.22 * intensity, 0.7),
    minor: Math.min(0.18 * intensity, 0.6),
    support: Math.min(0.14 * intensity, 0.5),
    supportMid: Math.min(0.11 * intensity, 0.4),
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: showDashedGrid ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="pointer-events-none fixed inset-0 z-30"
      aria-hidden="true"
    >
      {/* Main decorative grid lines - positioned at ~16% and ~84% from edges */}
      <svg
        className={cn(
          'absolute inset-0 h-full w-full',
          // Gradient mask for top/bottom fade
          '[mask-image:linear-gradient(to_bottom,transparent,black_128px,black_calc(100%-128px),transparent)]'
        )}
        preserveAspectRatio="none"
      >
        {/* Left inner line - 16.67% from left (1/6 of viewport) */}
        <line
          x1="16.67%"
          y1="0"
          x2="16.67%"
          y2="100%"
          stroke="rgb(168 162 158)"
          strokeOpacity={opacity.major}
          strokeDasharray="5 5"
          strokeLinecap="round"
        />

        {/* Center-left line - 33.33% from left (1/3 of viewport) */}
        <line
          x1="33.33%"
          y1="0"
          x2="33.33%"
          y2="100%"
          stroke="rgb(168 162 158)"
          strokeOpacity={opacity.minor}
          strokeDasharray="4 6"
          strokeLinecap="round"
        />

        {/* Center line - 50% */}
        <line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
          stroke="rgb(168 162 158)"
          strokeOpacity={opacity.mid}
          strokeDasharray="5 5"
          strokeLinecap="round"
        />

        {/* Center-right line - 66.67% from left (2/3 of viewport) */}
        <line
          x1="66.67%"
          y1="0"
          x2="66.67%"
          y2="100%"
          stroke="rgb(168 162 158)"
          strokeOpacity={opacity.minor}
          strokeDasharray="4 6"
          strokeLinecap="round"
        />

        {/* Right inner line - 83.33% from left (5/6 of viewport) */}
        <line
          x1="83.33%"
          y1="0"
          x2="83.33%"
          y2="100%"
          stroke="rgb(168 162 158)"
          strokeOpacity={opacity.major}
          strokeDasharray="5 5"
          strokeLinecap="round"
        />
      </svg>

      {/* Supportive horizontal lines at key vertical positions */}
      <svg
        className={cn(
          'absolute inset-0 h-full w-full',
          // Gradient mask for left/right fade
          '[mask-image:linear-gradient(to_right,transparent,black_64px,black_calc(100%-64px),transparent)]'
        )}
        preserveAspectRatio="none"
      >
        {/* Top third horizontal */}
        <line
          x1="0"
          y1="33.33%"
          x2="100%"
          y2="33.33%"
          stroke="rgb(168 162 158)"
          strokeOpacity={opacity.support}
          strokeDasharray="6 8"
          strokeLinecap="round"
        />

        {/* Center horizontal */}
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke="rgb(168 162 158)"
          strokeOpacity={opacity.supportMid}
          strokeDasharray="8 12"
          strokeLinecap="round"
        />

        {/* Bottom third horizontal */}
        <line
          x1="0"
          y1="66.67%"
          x2="100%"
          y2="66.67%"
          stroke="rgb(168 162 158)"
          strokeOpacity={opacity.support}
          strokeDasharray="6 8"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  )
}
