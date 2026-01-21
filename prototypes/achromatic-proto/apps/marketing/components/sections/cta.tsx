'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, CheckIcon, SparklesIcon } from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';

const VALUE_PROPS = [
  'Free tier with 10K MTR',
  'No credit card required',
  'Setup in under 30 minutes',
  'Cancel anytime',
];

// Animated button component with glow and press effects
function AnimatedButton({
  href,
  variant = 'default',
  children,
  className,
}: {
  href: string;
  variant?: 'default' | 'outline';
  children: React.ReactNode;
  className?: string;
}) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      animate={{
        y: shouldReduceMotion ? 0 : isPressed ? 1 : isHovered ? -3 : 0,
        scale: shouldReduceMotion ? 1 : isPressed ? 0.98 : 1,
      }}
      transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
      className="relative"
    >
      {/* Glow effect for primary button */}
      {variant === 'default' && !shouldReduceMotion && (
        <motion.div
          className="absolute inset-0 -z-10 rounded-xl bg-primary/30 blur-xl"
          animate={{
            opacity: isHovered ? 0.6 : 0,
            scale: isHovered ? 1.08 : 1,
          }}
          transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
        />
      )}
      <Link
        href={href}
        target="_blank"
        className={cn(
          buttonVariants({ variant, size: 'lg' }),
          'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none',
          variant === 'default' && 'shadow-lg hover:shadow-xl',
          className
        )}
      >
        {children}
        <motion.span
          animate={shouldReduceMotion ? undefined : { x: isHovered ? 3 : 0 }}
          transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
        >
          <ArrowRightIcon className="ml-2 size-4" />
        </motion.span>
      </Link>
    </motion.div>
  );
}

// Animated value prop with stagger
function ValueProp({ prop, index }: { prop: string; index: number }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={shouldReduceMotion ? undefined : {
        duration: 0.25,
        delay: 0.2 + index * 0.05,
        ease: [0.32, 0.72, 0, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center gap-2 text-sm text-muted-foreground"
    >
      <motion.div
        animate={shouldReduceMotion ? undefined : {
          scale: isHovered ? 1.1 : 1,
          backgroundColor: isHovered ? 'rgb(var(--primary))' : 'transparent',
        }}
        transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
        className="flex size-5 items-center justify-center rounded-full border border-primary/30"
      >
        <CheckIcon className={cn(
          'size-3 transition-colors duration-150 motion-reduce:transition-none',
          isHovered ? 'text-primary-foreground' : 'text-primary'
        )} />
      </motion.div>
      <span>{prop}</span>
    </motion.div>
  );
}

// Animated stat counter
function AnimatedStat({ value, label }: { value: string; label: string }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="text-center cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
      transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
    >
      <motion.div
        className="text-2xl font-bold text-foreground"
        animate={shouldReduceMotion ? undefined : {
          color: isHovered ? 'hsl(var(--primary))' : 'hsl(var(--foreground))',
        }}
        transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
      >
        {value}
      </motion.div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </motion.div>
  );
}

export function CTA(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={500} />
      <div className="container py-16 lg:py-24 relative z-10">
        <div className="mx-auto max-w-3xl">
          {/* Badge with sparkle animation */}
          <BlurFade className="flex justify-center mb-6">
            <Badge variant="outline" className="rounded-full px-4 py-1.5 group cursor-default">
              <motion.div
                animate={shouldReduceMotion ? {} : {
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: 'easeInOut',
                }}
              >
                <SparklesIcon className="mr-2 size-3.5 text-primary" />
              </motion.div>
              Start growing today
            </Badge>
          </BlurFade>

          {/* Headline */}
          <BlurFade delay={0.1} className="text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
              Ready to double your
              <br />
              <motion.span
                className="text-primary inline-block"
                animate={shouldReduceMotion ? {} : {
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary)/0.7), hsl(var(--primary)))',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                }}
              >
                subscription revenue?
              </motion.span>
            </h2>
          </BlurFade>

          {/* Subtext */}
          <BlurFade delay={0.2} className="text-center">
            <p className="mb-8 text-muted-foreground text-lg max-w-xl mx-auto">
              Join 15,000+ apps using Adapty to optimize paywalls, run A/B tests, and understand their subscription metrics.
            </p>
          </BlurFade>

          {/* Value Props with stagger */}
          <BlurFade delay={0.25} className="mb-8">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {VALUE_PROPS.map((prop, index) => (
                <ValueProp key={prop} prop={prop} index={index} />
              ))}
            </div>
          </BlurFade>

          {/* CTA Buttons with glow and press effects */}
          <BlurFade delay={0.3}>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <AnimatedButton href="https://app.adapty.io/registration" variant="default">
                Start for free
              </AnimatedButton>
              <AnimatedButton href="https://adapty.io/schedule-demo/" variant="outline">
                Talk to sales
              </AnimatedButton>
            </div>
          </BlurFade>

          {/* Social Proof Stats with hover animations */}
          <BlurFade delay={0.4} className="mt-12">
            <div className="grid grid-cols-3 gap-8 border-t pt-8">
              <AnimatedStat value="$2B+" label="Revenue tracked" />
              <AnimatedStat value="15,000+" label="Apps powered" />
              <AnimatedStat value="99.99%" label="Uptime SLA" />
            </div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
