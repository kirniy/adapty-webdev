'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  WifiOffIcon
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { Button, buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { Spotlight } from '~/components/fragments/spotlight';

// Fallback visualization showing offline -> cached paywall -> success
function FallbackMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 1500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className="flex items-center justify-center gap-4">
        <div className="flex size-12 items-center justify-center rounded-lg bg-amber-500/10">
          <WifiOffIcon className="size-6 text-amber-500" />
        </div>
        <div className="w-8 h-0.5 bg-muted" />
        <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
          <ShieldCheckIcon className="size-6 text-primary" />
        </div>
        <div className="w-8 h-0.5 bg-muted" />
        <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
          <CheckCircleIcon className="size-6 text-emerald-500" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-4">
      {/* Offline indicator */}
      <motion.div
        animate={{
          scale: step === 0 ? 1.1 : 1,
          opacity: step === 0 ? 1 : 0.5
        }}
        transition={{ type: 'spring', duration: 0.3 }}
        className="flex size-12 items-center justify-center rounded-lg bg-amber-500/10"
      >
        <WifiOffIcon className="size-6 text-amber-500" />
      </motion.div>

      {/* Arrow 1 */}
      <motion.div
        animate={{ x: step === 1 ? 4 : 0, opacity: step >= 1 ? 1 : 0.3 }}
        className="w-8 h-0.5 bg-gradient-to-r from-amber-500/50 to-primary/50 rounded relative overflow-hidden"
      >
        {step === 1 && (
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 0.8, ease: 'linear' }}
            className="absolute inset-y-0 w-4 bg-primary rounded"
          />
        )}
      </motion.div>

      {/* Cached paywall */}
      <motion.div
        animate={{
          scale: step === 1 || step === 2 ? 1.1 : 1,
          opacity: step >= 1 ? 1 : 0.5
        }}
        transition={{ type: 'spring', duration: 0.3 }}
        className="flex size-12 items-center justify-center rounded-lg bg-primary/10"
      >
        <ShieldCheckIcon className="size-6 text-primary" />
      </motion.div>

      {/* Arrow 2 */}
      <motion.div
        animate={{ x: step === 2 ? 4 : 0, opacity: step >= 2 ? 1 : 0.3 }}
        className="w-8 h-0.5 bg-gradient-to-r from-primary/50 to-emerald-500/50 rounded relative overflow-hidden"
      >
        {step === 2 && (
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 0.8, ease: 'linear' }}
            className="absolute inset-y-0 w-4 bg-primary rounded"
          />
        )}
      </motion.div>

      {/* Success */}
      <motion.div
        animate={{
          scale: step === 3 ? 1.15 : 1,
          opacity: step >= 2 ? 1 : 0.5
        }}
        transition={{ type: 'spring', duration: 0.3 }}
        className="flex size-12 items-center justify-center rounded-lg bg-emerald-500/10"
      >
        <CheckCircleIcon className="size-6 text-emerald-500" />
      </motion.div>
    </div>
  );
}

// Uptime counter
function UptimeMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [percentage, setPercentage] = React.useState(0);
  const targetPercentage = 99.99;

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setPercentage(targetPercentage);
      return;
    }

    const duration = 1500;
    const steps = 60;
    const increment = targetPercentage / steps;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetPercentage) {
        setPercentage(targetPercentage);
        clearInterval(timer);
      } else {
        setPercentage(parseFloat(current.toFixed(2)));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <div className="text-center">
      <motion.div
        initial={shouldReduceMotion ? undefined : { scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary"
      >
        {percentage.toFixed(2)}%
      </motion.div>
      <div className="text-sm text-muted-foreground mt-1">
        Uptime guaranteed
      </div>
    </div>
  );
}

export function FallbackPaywallsHero(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredButton, setHoveredButton] = React.useState<
    'demo' | 'start' | null
  >(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={700} />
      <div className="container py-16 md:py-24 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <BlurFade delay={0.05}>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider">
              <ShieldCheckIcon className="size-4" />
              Fallback paywalls
            </span>
          </BlurFade>

          <BlurFade delay={0.1}>
            <div className="mt-4">
              <SiteHeading
                title="Reach 100% uptime with fallback paywalls"
                description="Save your paywalls offline on-device and use them in case your user does not have internet or Adapty servers are down."
              />
            </div>
          </BlurFade>

          {/* Fallback visualization */}
          <BlurFade delay={0.15}>
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="mt-10 p-6 rounded-2xl border bg-background/50 backdrop-blur-sm max-w-md mx-auto relative overflow-hidden"
            >
              <Spotlight
                className="from-primary/15 via-primary/5 to-transparent"
                size={300}
              />
              <div className="relative">
                <div className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                  Offline recovery flow
                </div>
                <FallbackMagic />
                <div className="mt-4 flex justify-center gap-8 text-xs text-muted-foreground">
                  <span>No internet</span>
                  <span>Cached paywall</span>
                  <span>User converts</span>
                </div>
              </div>
            </motion.div>
          </BlurFade>

          {/* Stats row */}
          <BlurFade delay={0.2}>
            <div className="mt-10 flex justify-center gap-12">
              <UptimeMagic />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                  0
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Lost conversions
                </div>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.25}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
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
                className="relative"
              >
                <Link
                  href="/schedule-demo"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'rounded-xl px-8'
                  )}
                >
                  Book a demo
                  <motion.span
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : { x: hoveredButton === 'demo' ? 3 : 0 }
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
              >
                <Link
                  href="https://app.adapty.io/registration"
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'rounded-xl px-8'
                  )}
                >
                  Start for free
                </Link>
              </motion.div>
            </div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
