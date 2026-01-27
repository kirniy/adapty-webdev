'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  TargetIcon,
  TrendingUpIcon,
  UsersIcon
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

// User segment targeting magic animation
function TargetingMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSegment, setActiveSegment] = React.useState(0);
  const segments = [
    { name: 'Power Users', color: 'bg-purple-500', paywall: 'Premium Annual' },
    { name: 'New Users', color: 'bg-blue-500', paywall: 'Free Trial' },
    { name: 'Lapsed Users', color: 'bg-amber-500', paywall: 'Win-back Offer' }
  ];

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveSegment((prev) => (prev + 1) % segments.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, segments.length]);

  const current = segments[activeSegment];

  if (shouldReduceMotion) {
    return (
      <div className="flex items-center justify-center gap-4">
        <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
          <TargetIcon className="size-6 text-primary" />
        </div>
        <div className="text-left">
          <div className="text-sm font-medium">Power Users</div>
          <div className="text-xs text-muted-foreground">Premium Annual</div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* User segments */}
      <div className="flex justify-center gap-2">
        {segments.map((segment, i) => (
          <motion.div
            key={segment.name}
            animate={{
              scale: i === activeSegment ? 1.1 : 0.9,
              opacity: i === activeSegment ? 1 : 0.4
            }}
            transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
            className={cn(
              'flex size-10 items-center justify-center rounded-full',
              segment.color
            )}
          >
            <UsersIcon className="size-5 text-white" />
          </motion.div>
        ))}
      </div>

      {/* Targeting arrow */}
      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="flex justify-center"
      >
        <TargetIcon className="size-5 text-primary" />
      </motion.div>

      {/* Matched paywall */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSegment}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="rounded-lg border bg-background/50 p-3 text-center"
        >
          <div className="text-xs text-muted-foreground">{current?.name}</div>
          <div className="flex items-center justify-center gap-2 mt-1">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              <CheckCircleIcon className="size-4 text-emerald-500" />
            </motion.div>
            <span className="text-sm font-medium">{current?.paywall}</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Conversion improvement counter
function ConversionMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [percentage, setPercentage] = React.useState(0);
  const target = 35;

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setPercentage(target);
      return;
    }
    const duration = 1500;
    const steps = 30;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setPercentage(target);
        clearInterval(timer);
      } else {
        setPercentage(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20"
    >
      <TrendingUpIcon className="size-4 text-emerald-500" />
      <span className="text-sm font-medium">
        Up to <span className="text-emerald-600 font-bold">+{percentage}%</span>{' '}
        conversion
      </span>
    </motion.div>
  );
}

export function PaywallTargetingHero(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredButton, setHoveredButton] = React.useState<
    'start' | 'demo' | null
  >(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={700} />
      <div className="container py-16 md:py-24 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <BlurFade delay={0.05}>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider">
              <TargetIcon className="size-4" />
              Paywall management
            </span>
          </BlurFade>

          <BlurFade delay={0.1}>
            <div className="mt-4">
              <SiteHeading
                title="Personalize your paywalls for any user"
                description="Show the right paywall to the right user at the right time. Target by behavior, geography, device, and more without code changes."
              />
            </div>
          </BlurFade>

          {/* Targeting visualization */}
          <BlurFade delay={0.15}>
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="mt-10 p-6 rounded-2xl border bg-background/50 backdrop-blur-sm max-w-xs mx-auto relative overflow-hidden"
            >
              <Spotlight
                className="from-primary/15 via-primary/5 to-transparent"
                size={280}
              />
              <div className="relative">
                <div className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                  Smart targeting
                </div>
                <TargetingMagic />
              </div>
            </motion.div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <div className="mt-6">
              <ConversionMagic />
            </div>
          </BlurFade>

          <BlurFade delay={0.25}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <motion.div
                onMouseEnter={() => setHoveredButton('start')}
                onMouseLeave={() => setHoveredButton(null)}
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: hoveredButton === 'start' ? -2 : 0
                      }
                }
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                className="relative"
              >
                <Link
                  href="https://app.adapty.io/registration"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'rounded-xl px-8'
                  )}
                >
                  Start for free
                  <motion.span
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : { x: hoveredButton === 'start' ? 3 : 0 }
                    }
                    transition={{ duration: 0.15 }}
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
                onMouseEnter={() => setHoveredButton('demo')}
                onMouseLeave={() => setHoveredButton(null)}
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: hoveredButton === 'demo' ? -2 : 0
                      }
                }
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              >
                <Link
                  href="/schedule-demo"
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'rounded-xl px-8'
                  )}
                >
                  Book a demo
                </Link>
              </motion.div>
            </div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
