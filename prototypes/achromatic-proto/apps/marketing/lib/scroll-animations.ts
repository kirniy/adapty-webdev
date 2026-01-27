'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { easeOutQuart, lerp } from './animations';

// ============================================================
// INTERSECTION OBSERVER HOOK
// ============================================================

interface UseInViewOptions {
  /** Threshold for intersection (0-1) */
  threshold?: number;
  /** Root margin (e.g., "-100px" to trigger 100px before entering) */
  rootMargin?: string;
  /** Only trigger once */
  triggerOnce?: boolean;
}

/**
 * Hook to detect when an element is in view
 *
 * @example
 * const [ref, isInView] = useInView({ triggerOnce: true });
 * return <div ref={ref}>{isInView && <AnimatedContent />}</div>
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
): [React.RefObject<T | null>, boolean] {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isInView];
}

// ============================================================
// COUNT-UP ANIMATION HOOK
// ============================================================

interface UseCountUpOptions {
  /** Starting value */
  from?: number;
  /** Ending value */
  to: number;
  /** Animation duration in ms */
  duration?: number;
  /** Decimal places */
  decimals?: number;
  /** Whether to start animation */
  enabled?: boolean;
  /** Prefix (e.g., "$") */
  prefix?: string;
  /** Suffix (e.g., "%", "K", "M") */
  suffix?: string;
}

/**
 * Hook for count-up number animation
 *
 * @example
 * const [ref, isInView] = useInView({ triggerOnce: true });
 * const count = useCountUp({ to: 1000, enabled: isInView, suffix: "+" });
 * return <div ref={ref}>{count}</div>
 */
export function useCountUp({
  from = 0,
  to,
  duration = 2000,
  decimals = 0,
  enabled = true,
  prefix = '',
  suffix = ''
}: UseCountUpOptions): string {
  const [value, setValue] = useState(from);
  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) {
      setValue(from);
      return;
    }

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const currentValue = lerp(from, to, easedProgress);

      setValue(currentValue);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
      startTimeRef.current = null;
    };
  }, [from, to, duration, enabled]);

  const formattedValue = value.toFixed(decimals);
  return `${prefix}${formattedValue}${suffix}`;
}

// ============================================================
// SCROLL PROGRESS HOOK
// ============================================================

/**
 * Hook to track scroll progress of an element
 *
 * @example
 * const [ref, progress] = useScrollProgress();
 * // progress is 0-1 based on how much the element has scrolled through viewport
 */
export function useScrollProgress<T extends HTMLElement = HTMLDivElement>(): [
  React.RefObject<T | null>,
  number
] {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateProgress = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress: 0 when element enters viewport, 1 when it exits
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Start counting when element enters viewport from bottom
      // End when element exits viewport from top
      const start = windowHeight;
      const end = -elementHeight;
      const current = elementTop;

      const rawProgress = (start - current) / (start - end);
      setProgress(Math.max(0, Math.min(1, rawProgress)));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return [ref, progress];
}

// ============================================================
// PARALLAX HOOK
// ============================================================

interface UseParallaxOptions {
  /** Speed multiplier (0.5 = half speed, 2 = double speed) */
  speed?: number;
  /** Direction of parallax */
  direction?: 'up' | 'down';
}

/**
 * Hook for simple parallax effect
 *
 * @example
 * const [ref, offset] = useParallax({ speed: 0.5 });
 * return <div ref={ref} style={{ transform: `translateY(${offset}px)` }} />
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(
  options: UseParallaxOptions = {}
): [React.RefObject<T | null>, number] {
  const { speed = 0.5, direction = 'up' } = options;
  const ref = useRef<T>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const updateOffset = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const windowCenter = windowHeight / 2;
      const distance = elementCenter - windowCenter;
      const multiplier = direction === 'up' ? -1 : 1;

      setOffset(distance * speed * multiplier);
    };

    updateOffset();
    window.addEventListener('scroll', updateOffset, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateOffset);
    };
  }, [speed, direction]);

  return [ref, offset];
}

// ============================================================
// STAGGERED REVEAL HOOK
// ============================================================

interface UseStaggeredRevealOptions {
  /** Number of items */
  count: number;
  /** Base delay before first item */
  baseDelay?: number;
  /** Delay increment per item */
  staggerDelay?: number;
  /** Whether animation is enabled */
  enabled?: boolean;
}

/**
 * Hook for staggered reveal animations
 * Returns array of booleans indicating which items should be visible
 *
 * @example
 * const [ref, isInView] = useInView({ triggerOnce: true });
 * const visibleItems = useStaggeredReveal({ count: items.length, enabled: isInView });
 *
 * return (
 *   <div ref={ref}>
 *     {items.map((item, i) => (
 *       <div style={{ opacity: visibleItems[i] ? 1 : 0 }}>{item}</div>
 *     ))}
 *   </div>
 * );
 */
export function useStaggeredReveal({
  count,
  baseDelay = 100,
  staggerDelay = 50,
  enabled = true
}: UseStaggeredRevealOptions): boolean[] {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(count).fill(false)
  );

  useEffect(() => {
    if (!enabled) {
      setVisibleItems(new Array(count).fill(false));
      return;
    }

    const timeouts: NodeJS.Timeout[] = [];

    for (let i = 0; i < count; i++) {
      const timeout = setTimeout(
        () => {
          setVisibleItems((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        },
        baseDelay + i * staggerDelay
      );

      timeouts.push(timeout);
    }

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [count, baseDelay, staggerDelay, enabled]);

  return visibleItems;
}

// ============================================================
// MOUSE POSITION HOOK (for gradient follow effects)
// ============================================================

interface MousePosition {
  x: number;
  y: number;
  /** x position as percentage (0-100) */
  xPercent: number;
  /** y position as percentage (0-100) */
  yPercent: number;
}

/**
 * Hook to track mouse position relative to an element
 *
 * @example
 * const [ref, mousePos] = useMousePosition();
 * return (
 *   <div
 *     ref={ref}
 *     style={{
 *       background: `radial-gradient(at ${mousePos.xPercent}% ${mousePos.yPercent}%, ...)`
 *     }}
 *   />
 * );
 */
export function useMousePosition<T extends HTMLElement = HTMLDivElement>(): [
  React.RefObject<T | null>,
  MousePosition
] {
  const ref = useRef<T>(null);
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    xPercent: 50,
    yPercent: 50
  });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    setPosition({ x, y, xPercent, yPercent });
  }, []);

  const handleMouseLeave = useCallback(() => {
    // Reset to center on mouse leave
    setPosition({ x: 0, y: 0, xPercent: 50, yPercent: 50 });
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return [ref, position];
}
