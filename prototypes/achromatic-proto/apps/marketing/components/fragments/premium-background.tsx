'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'motion/react';

import { cn } from '@workspace/ui/lib/utils';

import { useBackgroundVariant } from '~/lib/debug-context';

/**
 * PremiumBackground - Subtle animated background
 * Supports both light and dark modes
 *
 * Variants:
 * - off: Plain background (white/dark)
 * - on: Animated gradient orbs with film grain
 */

// Animated gradient orb - soft, flowing shapes
function GradientOrb({
  className,
  lightColor,
  darkColor,
  delay = 0
}: {
  className?: string;
  lightColor: string;
  darkColor: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <>
        <div
          className={cn('absolute rounded-full blur-[100px] opacity-30 dark:hidden', className)}
          style={{ background: lightColor }}
        />
        <div
          className={cn('absolute rounded-full blur-[100px] opacity-30 hidden dark:block', className)}
          style={{ background: darkColor }}
        />
      </>
    );
  }

  return (
    <>
      <motion.div
        className={cn('absolute rounded-full blur-[100px] dark:hidden', className)}
        style={{ background: lightColor }}
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
      <motion.div
        className={cn('absolute rounded-full blur-[100px] hidden dark:block', className)}
        style={{ background: darkColor }}
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
    </>
  );
}

// Film grain texture overlay
function FilmGrain() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[100] opacity-[0.015] dark:opacity-[0.03]"
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
      {/* Base background - light and dark modes */}
      <div className="fixed inset-0 bg-[#fafafa] dark:bg-[#0a0a0a] -z-50" />

      {/* Animated gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-40">
        {/* Top left orb */}
        <GradientOrb
          className="w-[800px] h-[600px] -top-[200px] -left-[200px] opacity-40"
          lightColor="linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 50%, #cbd5e1 100%)"
          darkColor="linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)"
          delay={0}
        />

        {/* Top right orb */}
        <GradientOrb
          className="w-[600px] h-[500px] -top-[100px] right-[10%] opacity-30"
          lightColor="linear-gradient(225deg, #f5f3ff 0%, #ede9fe 50%, #ddd6fe 100%)"
          darkColor="linear-gradient(225deg, #2e1065 0%, #3b0764 50%, #4c1d95 100%)"
          delay={4}
        />

        {/* Bottom right orb */}
        <GradientOrb
          className="w-[700px] h-[600px] bottom-[10%] -right-[100px] opacity-35"
          lightColor="linear-gradient(45deg, #f1f5f9 0%, #e2e8f0 50%, #cbd5e1 100%)"
          darkColor="linear-gradient(45deg, #1e293b 0%, #334155 50%, #475569 100%)"
          delay={8}
        />

        {/* Center glow */}
        <motion.div
          className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] bg-white/60 dark:bg-white/5"
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
    return <div className="fixed inset-0 bg-white dark:bg-[#0a0a0a] -z-50" />;
  }

  return <AnimatedBackground />;
}
