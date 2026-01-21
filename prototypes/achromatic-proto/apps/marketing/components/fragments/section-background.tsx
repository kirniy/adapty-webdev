'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  useGridVariant,
  useGridThicknessVariant,
  useGridColorVariant,
  useGridOpacityVariant,
  useGridZIndexVariant
} from '~/lib/debug-context';
import { FlickeringGrid } from '~/components/fragments/flickering-grid';

// Cursor-tracking gradient component
function CursorTrackingGradient({
  colorHex,
  opacityValue,
  zIndexClass
}: {
  colorHex: string;
  opacityValue: number;
  zIndexClass: string;
}) {
  const [mousePos, setMousePos] = React.useState({ x: 50, y: 50 });
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Convert to percentage of viewport
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [shouldReduceMotion]);

  const gradientColor = colorHex === 'currentColor' ? '#6720FF' : colorHex;

  return (
    <motion.div
      className={`absolute inset-0 ${zIndexClass} pointer-events-none`}
      animate={{
        background: `radial-gradient(ellipse 80% 50% at ${mousePos.x}% ${mousePos.y}%, ${gradientColor}15 0%, transparent 50%)`,
      }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.15, ease: 'linear' }}
      style={{ opacity: opacityValue * 2 }} // Slightly more visible for cursor tracking
    />
  );
}

// Slow drift gradient component
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
  const gradientColor = colorHex === 'currentColor' ? '#6720FF' : colorHex;

  // If reduced motion, show static gradient
  if (shouldReduceMotion) {
    return (
      <div
        className={`absolute inset-0 ${zIndexClass} pointer-events-none`}
        style={{
          opacity: opacityValue * 1.5,
          background: `radial-gradient(ellipse 60% 40% at 50% 50%, ${gradientColor}10 0%, transparent 60%)`,
        }}
      />
    );
  }

  return (
    <motion.div
      className={`absolute inset-0 ${zIndexClass} pointer-events-none`}
      animate={{
        background: [
          `radial-gradient(ellipse 60% 40% at 30% 30%, ${gradientColor}12 0%, transparent 60%)`,
          `radial-gradient(ellipse 50% 50% at 70% 40%, ${gradientColor}10 0%, transparent 55%)`,
          `radial-gradient(ellipse 70% 35% at 50% 60%, ${gradientColor}12 0%, transparent 60%)`,
          `radial-gradient(ellipse 55% 45% at 40% 35%, ${gradientColor}10 0%, transparent 55%)`,
          `radial-gradient(ellipse 60% 40% at 30% 30%, ${gradientColor}12 0%, transparent 60%)`,
        ],
      }}
      transition={{
        duration: 20,
        ease: 'linear',
        repeat: Infinity,
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
  const gridThickness = useGridThicknessVariant();
  const gridColor = useGridColorVariant();
  const gridOpacity = useGridOpacityVariant();
  const gridZIndex = useGridZIndexVariant();

  if (gridVariant === 'off') return null;

  // Map variants to values
  const zIndexClass =
    gridZIndex === 'deep' ? '-z-10' :
    gridZIndex === 'back' ? '-z-1' :
    gridZIndex === 'normal' ? 'z-0' :
    'z-10';

  const opacityValue =
    gridOpacity === 'faint' ? 0.1 :
    gridOpacity === 'subtle' ? 0.2 :
    gridOpacity === 'visible' ? 0.4 :
    0.6;

  const colorHex =
    gridColor === 'muted' ? '#9CA3AF' :
    gridColor === 'accent' ? '#6720FF' :
    gridColor === 'blue' ? '#3B82F6' :
    gridColor === 'purple' ? '#8B5CF6' :
    'currentColor'; // Default uses current color (border usually)

  // Cursor-tracking variant: Gradient follows mouse position
  if (gridVariant === 'cursor-tracking') {
    return (
      <CursorTrackingGradient
        colorHex={colorHex}
        opacityValue={opacityValue}
        zIndexClass={zIndexClass}
      />
    );
  }

  // Slow drift variant: Subtle animated gradient movement
  if (gridVariant === 'slow-drift') {
    return (
      <SlowDriftGradient
        colorHex={colorHex}
        opacityValue={opacityValue}
        zIndexClass={zIndexClass}
      />
    );
  }

  if (gridVariant === 'flickering') {
     return (
       <div className={`absolute inset-0 ${zIndexClass} pointer-events-none ${className}`}>
        <FlickeringGrid
          squareSize={4}
          gridGap={6}
          color={colorHex === 'currentColor' ? '#6B7280' : colorHex}
          maxOpacity={opacityValue}
          flickerChance={0.1}
          className="size-full"
          height={height}
        />
      </div>
     )
  }

  // Default: Diagonal Lines using CSS repeating-linear-gradient (matches template's .bg-diagonal-lines)
  // Template CSS: repeating-linear-gradient(-45deg, var(--background), var(--border) 1px, var(--background) 1px, var(--background) 8px)
  const strokeWidth = gridThickness === 'thin' ? 0.5 : gridThickness === 'thick' ? 2 : 1;
  const spacing = gridThickness === 'thin' ? 6 : gridThickness === 'thick' ? 12 : 8;

  // Build the gradient - uses CSS variables for theme support
  const borderColor = colorHex === 'currentColor' ? 'var(--border)' : colorHex;
  const backgroundGradient = `repeating-linear-gradient(
    -45deg,
    var(--background),
    ${borderColor} ${strokeWidth}px,
    var(--background) ${strokeWidth}px,
    var(--background) ${spacing}px
  )`;

  return (
    <div
      className={`absolute inset-0 ${zIndexClass} pointer-events-none ${className}`}
      style={{
        opacity: opacityValue,
        backgroundImage: backgroundGradient
      }}
    />
  );
}
