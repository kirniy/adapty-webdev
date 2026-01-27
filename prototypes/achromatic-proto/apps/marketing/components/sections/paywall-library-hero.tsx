'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  ArrowRightIcon,
  LayoutGridIcon,
  SearchIcon,
  SparklesIcon
} from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { Spotlight } from '~/components/fragments/spotlight';

// Paywall gallery magic animation
function PaywallGalleryMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const paywalls = [
    {
      style: 'bg-gradient-to-br from-purple-500 to-pink-500',
      label: 'Premium'
    },
    { style: 'bg-gradient-to-br from-blue-500 to-cyan-500', label: 'Pro' },
    { style: 'bg-gradient-to-br from-amber-500 to-orange-500', label: 'Trial' },
    { style: 'bg-gradient-to-br from-emerald-500 to-teal-500', label: 'Annual' }
  ];

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % paywalls.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, paywalls.length]);

  if (shouldReduceMotion) {
    return (
      <div className="grid grid-cols-2 gap-2">
        {paywalls.map((p, i) => (
          <div
            key={i}
            className={cn('h-16 rounded-lg', p.style)}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Mini paywall grid */}
      <div className="grid grid-cols-2 gap-2">
        {paywalls.map((paywall, i) => (
          <motion.div
            key={i}
            animate={{
              scale: i === activeIndex ? 1.05 : 0.95,
              opacity: i === activeIndex ? 1 : 0.6
            }}
            transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
            className={cn(
              'h-16 rounded-lg relative overflow-hidden',
              paywall.style
            )}
          >
            {/* Mini paywall elements */}
            <div className="absolute inset-0 p-2 flex flex-col justify-between">
              <div className="h-1.5 w-8 bg-white/40 rounded" />
              <div className="space-y-1">
                <div className="h-1 w-10 bg-white/30 rounded" />
                <div className="h-1 w-6 bg-white/20 rounded" />
              </div>
              <div className="h-2.5 w-full bg-white/50 rounded" />
            </div>
            {i === activeIndex && (
              <motion.div
                layoutId="paywall-highlight"
                className="absolute inset-0 border-2 border-white rounded-lg"
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Current selection */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="text-center"
        >
          <span className="text-xs text-muted-foreground">
            {paywalls[activeIndex]?.label} Style
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Library counter
function LibraryCounterMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = React.useState(0);
  const target = 10000;

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setCount(target);
      return;
    }
    const duration = 2000;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
    >
      <LayoutGridIcon className="size-4 text-primary" />
      <span className="text-sm font-medium">
        <span className="text-primary font-bold">
          {count.toLocaleString()}+
        </span>{' '}
        paywalls to explore
      </span>
    </motion.div>
  );
}

export function PaywallLibraryHero(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState<'try' | 'browse' | null>(
    null
  );

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <BlurFade delay={0.05}>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider">
              <SearchIcon className="size-4" />
              Paywall Library
            </span>
          </BlurFade>

          <BlurFade delay={0.1}>
            <SiteHeading
              title="Mobile Paywall Library"
              description="Get inspired by 10,000+ app paywalls. Learn how to design the best paywall for your app."
            />
          </BlurFade>

          {/* Paywall gallery visualization */}
          <BlurFade delay={0.15}>
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="p-6 rounded-2xl border bg-background/50 backdrop-blur-sm max-w-xs mx-auto relative overflow-hidden"
            >
              <Spotlight
                className="from-primary/15 via-primary/5 to-transparent"
                size={280}
              />
              <div className="relative">
                <div className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                  Paywall examples
                </div>
                <PaywallGalleryMagic />
              </div>
            </motion.div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <LibraryCounterMagic />
          </BlurFade>

          <BlurFade delay={0.25}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                onMouseEnter={() => setIsHovered('try')}
                onMouseLeave={() => setIsHovered(null)}
                animate={{
                  y: shouldReduceMotion ? 0 : isHovered === 'try' ? -2 : 0
                }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                className="relative"
              >
                <Link
                  href="https://app.adapty.io/registration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
                  )}
                >
                  Try Adapty for free
                  <motion.span
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : { x: isHovered === 'try' ? 3 : 0 }
                    }
                    transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
                  >
                    <ArrowRightIcon className="ml-2 size-4" />
                  </motion.span>
                </Link>
                <BorderBeam
                  size={120}
                  duration={8}
                  borderWidth={1.5}
                  colorFrom="hsl(var(--primary))"
                  colorTo="hsl(var(--primary)/0)"
                  className="opacity-60"
                />
              </motion.div>

              <motion.div
                onMouseEnter={() => setIsHovered('browse')}
                onMouseLeave={() => setIsHovered(null)}
                animate={{
                  y: shouldReduceMotion ? 0 : isHovered === 'browse' ? -2 : 0
                }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              >
                <Link
                  href="https://adapty.io/paywall-library/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
                  )}
                >
                  Browse full library
                </Link>
              </motion.div>
            </div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
