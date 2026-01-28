'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'motion/react';

import { cn } from '@workspace/ui/lib/utils';

import { useBackgroundVariant } from '~/lib/debug-context';

/**
 * PremiumBackground - Subtle animated background
 *
 * Variants:
 * - off: Plain white
 * - on: Animated gradient orbs with film grain
 */

// Animated gradient orb - soft, flowing shapes
function GradientOrb({
  className,
  color,
  delay = 0
}: {
  className?: string;
  color: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div
        className={cn('absolute rounded-full blur-[100px] opacity-30', className)}
        style={{ background: color }}
      />
    );
  }

  return (
    <motion.div
      className={cn('absolute rounded-full blur-[100px]', className)}
      style={{ background: color }}
      animate={{
        x: [0, 30, -20, 10, 0],
        y: [0, -30, 20, -10, 0],
        scale: [1, 1.1, 0.95, 1.05, 1],
      }}
      transition={{
        duration: 25,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

// Film grain texture overlay
function FilmGrain() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[100] opacity-[0.015]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }}
    />
  );
}

// Main premium background with animated orbs
function AnimatedBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Base - very subtle warm-neutral */}
      <div className="fixed inset-0 bg-[#fafafa] -z-50" />

      {/* Animated gradient orbs - cool gray/blue tones */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-40">
        {/* Top left orb - cool gray with hint of blue */}
        <GradientOrb
          className="w-[800px] h-[600px] -top-[200px] -left-[200px] opacity-40"
          color="linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 50%, #cbd5e1 100%)"
          delay={0}
        />

        {/* Top right orb - subtle purple-gray */}
        <GradientOrb
          className="w-[600px] h-[500px] -top-[100px] right-[10%] opacity-30"
          color="linear-gradient(225deg, #f5f3ff 0%, #ede9fe 50%, #ddd6fe 100%)"
          delay={4}
        />

        {/* Bottom right orb - cool slate */}
        <GradientOrb
          className="w-[700px] h-[600px] bottom-[10%] -right-[100px] opacity-35"
          color="linear-gradient(45deg, #f1f5f9 0%, #e2e8f0 50%, #cbd5e1 100%)"
          delay={8}
        />

        {/* Center glow - soft white */}
        <motion.div
          className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] bg-white/60"
          animate={shouldReduceMotion ? {} : {
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <FilmGrain />
    </>
  );
}

// Main component that switches based on variant
export function PremiumBackground(): React.JSX.Element {
  const variant = useBackgroundVariant();

  if (variant === 'off') {
    return <div className="fixed inset-0 bg-white -z-50" />;
  }

  return <AnimatedBackground />;
}
