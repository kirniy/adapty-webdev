'use client';

import * as React from 'react';
import {
  motion,
  useInView,
  useReducedMotion,
  Variants,
  type HTMLMotionProps
} from 'motion/react';

export type BlurFadeProps = HTMLMotionProps<'div'> & {
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: `${number}${'px' | '%'}`;
  blur?: string;
};

export function BlurFade({
  children,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = '-50px',
  blur = '4px',
  className,
  style,
  ...other
}: BlurFadeProps): React.JSX.Element {
  const ref = React.useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;
  const shouldReduceMotion = useReducedMotion();

  // Jakub's enter animation recipe: opacity + translateY + blur
  const defaultVariants: Variants = {
    hidden: {
      y: yOffset,
      opacity: 0,
      filter: `blur(${blur})`
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)'
    }
  };

  const combinedVariants = variant || defaultVariants;

  // Respect reduced motion preference - only pass safe props to native div
  if (shouldReduceMotion) {
    return (
      <div
        ref={ref}
        className={className}
        style={style as React.CSSProperties}
      >
        {children as React.ReactNode}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={combinedVariants}
      transition={{
        delay: 0.04 + delay,
        type: 'spring',
        duration,
        bounce: 0 // Professional feel, no overshoot
      }}
      className={className}
      style={style}
      {...other}
    >
      {children}
    </motion.div>
  );
}
