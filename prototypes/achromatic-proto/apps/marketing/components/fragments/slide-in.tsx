'use client';

import * as React from 'react';
import { motion, useInView, type HTMLMotionProps } from 'motion/react';

import { cn } from '@workspace/ui/lib/utils';

interface SlideInProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  viewportAmount?: number;
  className?: string;
  classNameChild?: string; // Optional class for the immediate child if needed
}

export function SlideIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  viewportAmount = 0.2,
  className,
  ...props
}: SlideInProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: viewportAmount });

  const getDirectionVariants = () => {
    switch (direction) {
      case 'up':
        return { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };
      case 'down':
        return {
          hidden: { y: -20, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case 'left':
        return { hidden: { x: 20, opacity: 0 }, visible: { x: 0, opacity: 1 } };
      case 'right':
        return {
          hidden: { x: -20, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      default:
        return { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };
    }
  };

  const variants = getDirectionVariants();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
