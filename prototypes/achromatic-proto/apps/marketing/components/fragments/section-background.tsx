'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'motion/react';

import {
  useGridColorVariant,
  useGridOpacityVariant,
  useGridVariant,
  useGridZIndexVariant
} from '~/lib/debug-context';

/**
 * SectionBackground Component
 * 
 * Provides subtle background effects for sections.
 * Supports light theme with subtle gradient animations.
 */

// Slow drift gradient component - Light theme optimized
function SlowDriftGradient({
  colorHex,
  opacityValue,
  zIndexClass
}: {
  colorHex: string;
  opacityValue: number;
  zIndexClass: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const gradientColor = colorHex === 'currentColor' ? '#3B82F6' : colorHex;

  // If reduced motion, show static gradient
  if (shouldReduceMotion) {
    return (
      <div
        className={`absolute inset-0 ${zIndexClass} pointer-events-none`}
        style={{
          opacity: opacityValue * 1.5,
          background: `radial-gradient(ellipse 60% 40% at 50% 50%, ${gradientColor}08 0%, transparent 60%)`
        }}
      />
    );
  }

  return (
    <motion.div
      className={`absolute inset-0 ${zIndexClass} pointer-events-none`}
      animate={{
        background: [
          `radial-gradient(ellipse 60% 40% at 30% 30%, ${gradientColor}06 0%, transparent 60%)`,
          `radial-gradient(ellipse 50% 50% at 70% 40%, ${gradientColor}04 0%, transparent 55%)`,
          `radial-gradient(ellipse 70% 35% at 50% 60%, ${gradientColor}06 0%, transparent 60%)`,
          `radial-gradient(ellipse 55% 45% at 40% 35%, ${gradientColor}04 0%, transparent 55%)`,
          `radial-gradient(ellipse 60% 40% at 30% 30%, ${gradientColor}06 0%, transparent 60%)`
        ]
      }}
      transition={{
        duration: 20,
        ease: 'linear',
        repeat: Infinity
      }}
      style={{ opacity: opacityValue * 1.5 }}
    />
  );
}

export function SectionBackground({
  height = 800,
  className
}: {
  height?: number;
  className?: string;
}): React.JSX.Element | null {
  const gridVariant = useGridVariant();
  const gridColor = useGridColorVariant();
  const gridOpacity = useGridOpacityVariant();
  const gridZIndex = useGridZIndexVariant();

  if (gridVariant === 'off') return null;

  // Map variants to values
  const zIndexClass =
    gridZIndex === 'deep'
      ? '-z-10'
      : gridZIndex === 'back'
        ? '-z-1'
        : gridZIndex === 'normal'
          ? 'z-0'
          : 'z-10';

  const opacityValue =
    gridOpacity === 'faint'
      ? 0.1
      : gridOpacity === 'subtle'
        ? 0.2
        : gridOpacity === 'visible'
          ? 0.4
          : 0.6;

  const colorHex =
    gridColor === 'muted'
      ? '#9CA3AF'
      : gridColor === 'accent'
        ? '#3B82F6'
        : gridColor === 'blue'
          ? '#3B82F6'
          : gridColor === 'purple'
            ? '#8B5CF6'
            : 'currentColor';

  // Slow drift variant: Subtle animated gradient movement (light theme)
  if (gridVariant === 'slow-drift' || gridVariant === 'default') {
    return (
      <SlowDriftGradient
        colorHex={colorHex}
        opacityValue={opacityValue}
        zIndexClass={zIndexClass}
      />
    );
  }

  // Cursor tracking - simplified for light theme
  if (gridVariant === 'cursor-tracking') {
    return (
      <div
        className={`absolute inset-0 ${zIndexClass} pointer-events-none ${className}`}
        style={{
          opacity: opacityValue,
          background: `radial-gradient(ellipse 80% 50% at 50% 50%, ${colorHex === 'currentColor' ? '#3B82F6' : colorHex}08 0%, transparent 50%)`
        }}
      />
    );
  }

  // Flickering grid - disabled for light theme (doesn't work well)
  if (gridVariant === 'flickering') {
    return (
      <div
        className={`absolute inset-0 ${zIndexClass} pointer-events-none ${className}`}
        style={{
          opacity: 0.03,
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
    );
  }

  // Default: subtle diagonal lines
  const borderColor = colorHex === 'currentColor' ? '#E5E7EB' : colorHex;
  const backgroundGradient = `repeating-linear-gradient(
    -45deg,
    transparent,
    ${borderColor}20 1px,
    transparent 1px,
    transparent 12px
  )`;

  return (
    <div
      className={`absolute inset-0 ${zIndexClass} pointer-events-none ${className}`}
      style={{
        opacity: opacityValue * 0.5,
        backgroundImage: backgroundGradient
      }}
    />
  );
}
