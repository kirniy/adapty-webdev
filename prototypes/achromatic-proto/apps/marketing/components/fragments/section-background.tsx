'use client';

import * as React from 'react';
import { 
  useGridVariant, 
  useGridThicknessVariant, 
  useGridColorVariant, 
  useGridOpacityVariant, 
  useGridZIndexVariant 
} from '~/lib/debug-context';
import { FlickeringGrid } from '~/components/fragments/flickering-grid';

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
