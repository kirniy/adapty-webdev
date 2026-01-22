'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, SparklesIcon, WandIcon, CodeIcon, LayoutIcon } from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { SiteHeading } from '~/components/fragments/site-heading';
import { SectionBackground } from '~/components/fragments/section-background';
import { Spotlight } from '~/components/fragments/spotlight';
import { BorderBeam } from '~/components/fragments/border-beam';

// AI generation magic animation
function AIGenerationMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [step, setStep] = React.useState(0);
  const steps = [
    { icon: CodeIcon, label: 'App URL', sublabel: 'yourapp.com' },
    { icon: SparklesIcon, label: 'AI analyzing...', sublabel: '' },
    { icon: LayoutIcon, label: 'Paywall ready', sublabel: '' },
  ];

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, steps.length]);

  if (shouldReduceMotion) {
    return (
      <div className="flex items-center justify-center gap-4">
        <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
          <SparklesIcon className="size-6 text-primary" />
        </div>
        <div className="text-left">
          <div className="text-sm font-medium">AI Paywall</div>
          <div className="text-xs text-muted-foreground">Ready instantly</div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Step indicators */}
      <div className="flex justify-center gap-3">
        {steps.map((s, i) => {
          const Icon = s.icon;
          const isActive = i === step;
          const isPast = i < step;

          return (
            <React.Fragment key={i}>
              <motion.div
                animate={{
                  scale: isActive ? 1.15 : 1,
                  opacity: isActive ? 1 : isPast ? 0.6 : 0.3,
                }}
                transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
                className={cn(
                  'flex size-10 items-center justify-center rounded-full transition-colors',
                  isActive ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                )}
              >
                <Icon className="size-5" />
              </motion.div>
              {i < steps.length - 1 && (
                <div className="flex items-center">
                  <motion.div
                    animate={{
                      scaleX: isPast || isActive ? 1 : 0,
                      opacity: isPast ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-0.5 bg-primary origin-left"
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Current step info */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <div className="text-sm font-medium">{steps[step]?.label}</div>
          {steps[step]?.sublabel && (
            <div className="text-xs text-muted-foreground mt-0.5">{steps[step]?.sublabel}</div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Progress bar */}
      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
        <motion.div
          animate={{
            width: step === 0 ? '33%' : step === 1 ? '66%' : '100%',
          }}
          transition={{ duration: 0.5 }}
          className="h-full bg-primary rounded-full"
        />
      </div>
    </div>
  );
}

// Speed badge
function SpeedBadge() {
  const shouldReduceMotion = useReducedMotion();
  const [seconds, setSeconds] = React.useState(0);
  const target = 30;

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setSeconds(target);
      return;
    }
    const duration = 1200;
    const steps = 20;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setSeconds(target);
        clearInterval(timer);
      } else {
        setSeconds(Math.floor(current));
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
      <WandIcon className="size-4 text-primary" />
      <span className="text-sm font-medium">
        Ready in <span className="text-primary font-bold">{seconds}s</span> - No signup required
      </span>
    </motion.div>
  );
}

export function AIPaywallGeneratorHero(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredButton, setHoveredButton] = React.useState<'try' | 'demo' | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={700} />
      <div className="container py-16 md:py-24 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <BlurFade delay={0.05}>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider">
              <SparklesIcon className="size-4" />
              AI Paywall Generator
            </span>
          </BlurFade>

          <BlurFade delay={0.1}>
            <div className="mt-4">
              <SiteHeading
                title="Your personalized AI paywall is seconds away"
                description="Drop your link, no sign-up, no card required. Get a real paywall generated from your app."
              />
            </div>
          </BlurFade>

          {/* AI Generation visualization */}
          <BlurFade delay={0.15}>
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="mt-10 p-6 rounded-2xl border bg-background/50 backdrop-blur-sm max-w-sm mx-auto relative overflow-hidden"
            >
              <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={280} />
              <div className="relative">
                <div className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                  AI-powered generation
                </div>
                <AIGenerationMagic />
              </div>
            </motion.div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <div className="mt-6">
              <SpeedBadge />
            </div>
          </BlurFade>

          <BlurFade delay={0.25}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <motion.div
                onMouseEnter={() => setHoveredButton('try')}
                onMouseLeave={() => setHoveredButton(null)}
                animate={shouldReduceMotion ? undefined : {
                  y: hoveredButton === 'try' ? -2 : 0,
                }}
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
                  Try AI Paywall Generator
                  <motion.span
                    animate={shouldReduceMotion ? undefined : { x: hoveredButton === 'try' ? 3 : 0 }}
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
                animate={shouldReduceMotion ? undefined : {
                  y: hoveredButton === 'demo' ? -2 : 0,
                }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              >
                <Link
                  href="/schedule-demo"
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'rounded-xl px-8'
                  )}
                >
                  Schedule a demo
                </Link>
              </motion.div>
            </div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
