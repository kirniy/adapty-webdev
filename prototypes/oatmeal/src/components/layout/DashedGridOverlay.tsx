'use client'

import { useDebug } from '@/lib/debug-context'
import { cn } from '@/lib/cn'
import { motion } from 'motion/react'

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
  const { showDashedGrid, dashedGridStyle } = useDebug()

  // Opacity multiplier based on style: subtle = 0.5x, visible = 1x
  const opacityMultiplier = dashedGridStyle === 'subtle' ? 0.5 : 1

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
          stroke="currentColor"
          strokeOpacity={0.08 * opacityMultiplier}
          strokeDasharray="5 5"
          strokeLinecap="round"
          className="text-olive-400"
        />

        {/* Center-left line - 33.33% from left (1/3 of viewport) */}
        <line
          x1="33.33%"
          y1="0"
          x2="33.33%"
          y2="100%"
          stroke="currentColor"
          strokeOpacity={0.05 * opacityMultiplier}
          strokeDasharray="4 6"
          strokeLinecap="round"
          className="text-olive-400"
        />

        {/* Center line - 50% */}
        <line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
          stroke="currentColor"
          strokeOpacity={0.06 * opacityMultiplier}
          strokeDasharray="5 5"
          strokeLinecap="round"
          className="text-olive-400"
        />

        {/* Center-right line - 66.67% from left (2/3 of viewport) */}
        <line
          x1="66.67%"
          y1="0"
          x2="66.67%"
          y2="100%"
          stroke="currentColor"
          strokeOpacity={0.05 * opacityMultiplier}
          strokeDasharray="4 6"
          strokeLinecap="round"
          className="text-olive-400"
        />

        {/* Right inner line - 83.33% from left (5/6 of viewport) */}
        <line
          x1="83.33%"
          y1="0"
          x2="83.33%"
          y2="100%"
          stroke="currentColor"
          strokeOpacity={0.08 * opacityMultiplier}
          strokeDasharray="5 5"
          strokeLinecap="round"
          className="text-olive-400"
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
          stroke="currentColor"
          strokeOpacity={0.04 * opacityMultiplier}
          strokeDasharray="6 8"
          strokeLinecap="round"
          className="text-olive-400"
        />

        {/* Center horizontal */}
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke="currentColor"
          strokeOpacity={0.03 * opacityMultiplier}
          strokeDasharray="8 12"
          strokeLinecap="round"
          className="text-olive-400"
        />

        {/* Bottom third horizontal */}
        <line
          x1="0"
          y1="66.67%"
          x2="100%"
          y2="66.67%"
          stroke="currentColor"
          strokeOpacity={0.04 * opacityMultiplier}
          strokeDasharray="6 8"
          strokeLinecap="round"
          className="text-olive-400"
        />
      </svg>
    </motion.div>
  )
}
