'use client';

import React, { useRef, useState, useEffect } from 'react';

import { cn } from '@workspace/ui/lib/utils';

export function Spotlight({
    className,
    size = 200,
    fill = 'white',
}: {
    className?: string;
    size?: number;
    fill?: string;
}) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                'pointer-events-none absolute -inset-px overflow-hidden opacity-0 transition duration-300',
                className
            )}
            style={{
                opacity,
            }}
        >
            <div
                className="pointer-events-none absolute -inset-px transition duration-300"
                style={{
                    background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, ${fill}, transparent 80%)`,
                }}
            />
        </div>
    );
}
