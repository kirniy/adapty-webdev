'use client';

import * as React from 'react';
import { useInView, useMotionValue, useSpring, useReducedMotion } from 'motion/react';

import { cn } from '@workspace/ui/lib/utils';

export type NumberTickerProps = Omit<
  React.HtmlHTMLAttributes<HTMLSpanElement>,
  'ref'
> & {
  value: number;
  direction?: 'up' | 'down';
  className?: string;
  delay?: number; // delay in s
  decimalPlaces?: number;
};

export function NumberTicker({
  value,
  direction = 'up',
  delay = 0,
  className,
  decimalPlaces = 0,
  ...other
}: NumberTickerProps): React.JSX.Element {
  const ref = React.useRef<HTMLSpanElement>(null);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const motionValue = useMotionValue(direction === 'down' ? value : 0);
  // Faster spring for snappier animation
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 120
  });
  const isInView = useInView(ref, { once: true, margin: '0px' });
  const formatter = React.useMemo(
    () =>
      new Intl.NumberFormat('en-US', {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces
      }),
    [decimalPlaces]
  );

  React.useEffect(() => {
    if (!isInView) return;

    // If reduced motion, show final value immediately
    if (shouldReduceMotion) {
      if (ref.current) {
        ref.current.textContent = formatter.format(
          Number((direction === 'down' ? 0 : value).toFixed(decimalPlaces))
        );
      }
      return;
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      motionValue.set(direction === 'down' ? 0 : value);
    }, delay * 1000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [motionValue, isInView, delay, value, direction, shouldReduceMotion, formatter, decimalPlaces]);

  React.useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current && !shouldReduceMotion) {
          ref.current.textContent = formatter.format(
            Number(latest.toFixed(decimalPlaces))
          );
        }
      }),
    [springValue, decimalPlaces, formatter, shouldReduceMotion]
  );

  return (
    <span
      ref={ref}
      className={cn('inline-block tabular-nums tracking-wider', className)}
      {...other}
    >
      {shouldReduceMotion ? formatter.format(Number((direction === 'down' ? 0 : value).toFixed(decimalPlaces))) : '0'}
    </span>
  );
}
