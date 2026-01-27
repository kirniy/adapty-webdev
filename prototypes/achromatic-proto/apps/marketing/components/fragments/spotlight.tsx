'use client';

import React, { useEffect, useRef, useState } from 'react';

import { cn } from '@workspace/ui/lib/utils';

export function Spotlight({
  className,
  size = 200,
  fill = 'white'
}: {
  className?: string;
  size?: number;
  fill?: string;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0
  });
  const [opacity, setOpacity] = useState(0);

  // Attach mouse event listeners to the parent element
  // This way the Spotlight can remain pointer-events-none (not block clicks)
  // while still tracking mouse position via the parent
  useEffect(() => {
    const element = divRef.current;
    if (!element) return;

    const parent = element.parentElement;
    if (!parent) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
      setOpacity(1);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseenter', handleMouseEnter);
    parent.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseenter', handleMouseEnter);
      parent.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={divRef}
      className={cn(
        'pointer-events-none absolute -inset-px overflow-hidden transition duration-300',
        className
      )}
      style={{
        opacity
      }}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, ${fill}, transparent 80%)`
        }}
      />
    </div>
  );
}
