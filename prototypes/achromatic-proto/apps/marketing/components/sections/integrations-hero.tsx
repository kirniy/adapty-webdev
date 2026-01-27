'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, PlugIcon, RefreshCwIcon, CheckCircleIcon } from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { SectionBackground } from '~/components/fragments/section-background';
import { GridSection } from '~/components/fragments/grid-section';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';
import { Spotlight } from '~/components/fragments/spotlight';
import { BorderBeam } from '~/components/fragments/border-beam';

// Integration sync magic animation
function IntegrationSyncMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIntegration, setActiveIntegration] = React.useState(0);
  const integrations = [
    { name: 'Amplitude', color: 'bg-blue-500' },
    { name: 'AppsFlyer', color: 'bg-primary' },
    { name: 'Mixpanel', color: 'bg-purple-500' },
    { name: 'Segment', color: 'bg-primary' },
  ];

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveIntegration((prev) => (prev + 1) % integrations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, integrations.length]);

  if (shouldReduceMotion) {
    return (
      <div className="flex items-center justify-center gap-4">
        <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
          <PlugIcon className="size-6 text-primary" />
        </div>
        <div className="text-left">
          <div className="text-sm font-medium">Amplitude</div>
          <div className="text-xs text-muted-foreground">Connected</div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Integration icons row */}
      <div className="flex justify-center gap-3">
        {integrations.map((integration, i) => {
          const isActive = i === activeIntegration;
          return (
            <motion.div
              key={integration.name}
              animate={{
                scale: isActive ? 1.15 : 0.9,
                opacity: isActive ? 1 : 0.4,
              }}
              transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
              className={cn(
                'flex size-10 items-center justify-center rounded-lg text-white text-[10px] font-bold',
                integration.color
              )}
            >
              {integration.name.charAt(0)}
            </motion.div>
          );
        })}
      </div>

      {/* Sync indicator */}
      <div className="flex items-center justify-center gap-3">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="text-primary"
        >
          <RefreshCwIcon className="size-4" />
        </motion.div>
        <span className="text-xs text-muted-foreground">Syncing events</span>
      </div>

      {/* Current integration status */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIntegration}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="rounded-lg border bg-background/50 p-3 text-center"
        >
          <div className="flex items-center justify-center gap-2">
            <CheckCircleIcon className="size-4 text-emerald-500" />
            <span className="text-sm font-medium">{integrations[activeIntegration]?.name}</span>
          </div>
          <div className="text-xs text-muted-foreground mt-1">Events synced in real-time</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Integration counter badge
function IntegrationCounterMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = React.useState(0);
  const target = 30;

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setCount(target);
      return;
    }
    const duration = 1500;
    const steps = 25;
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
      <PlugIcon className="size-4 text-primary" />
      <span className="text-sm font-medium">
        <span className="text-primary font-bold">{count}+</span> integrations available
      </span>
    </motion.div>
  );
}

export function IntegrationsHero(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState<'demo' | 'start' | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={700} />
      <div className="container py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <BlurFade delay={0.05}>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider">
              <PlugIcon className="size-4" />
              Integrations
            </span>
          </BlurFade>

          <BlurFade delay={0.1}>
            <SiteHeading
              badge=""
              title="Sync in-app subscription with external services"
              description="Connect Adapty with your favorite analytics, attribution, and marketing tools. Send subscription events automatically."
            />
          </BlurFade>

          {/* Integration sync visualization */}
          <BlurFade delay={0.15}>
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="p-6 rounded-2xl border bg-background/50 backdrop-blur-sm max-w-xs mx-auto relative overflow-hidden"
            >
              <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={280} />
              <div className="relative">
                <div className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                  Live sync
                </div>
                <IntegrationSyncMagic />
              </div>
            </motion.div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <IntegrationCounterMagic />
          </BlurFade>

          <BlurFade delay={0.25}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                onMouseEnter={() => setIsHovered('demo')}
                onMouseLeave={() => setIsHovered(null)}
                animate={{
                  y: shouldReduceMotion ? 0 : isHovered === 'demo' ? -2 : 0,
                }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                className="relative"
              >
                <Link
                  href="/schedule-demo"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
                  )}
                >
                  Book a demo
                  <motion.span
                    animate={shouldReduceMotion ? undefined : { x: isHovered === 'demo' ? 3 : 0 }}
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
                onMouseEnter={() => setIsHovered('start')}
                onMouseLeave={() => setIsHovered(null)}
                animate={{
                  y: shouldReduceMotion ? 0 : isHovered === 'start' ? -2 : 0,
                }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              >
                <Link
                  href="https://app.adapty.io/registration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
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
