'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  ArrowRightIcon,
  CheckIcon,
  CloudIcon,
  RefreshCwIcon,
  SettingsIcon
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

// Remote config sync animation
function ConfigSyncMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [syncing, setSyncing] = React.useState(false);
  const [configValue, setConfigValue] = React.useState('blue');
  const values = ['blue', 'purple', 'green'];

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setSyncing(true);
      setTimeout(() => {
        setConfigValue((prev) => {
          const currentIndex = values.indexOf(prev);
          return values[(currentIndex + 1) % values.length];
        });
        setSyncing(false);
      }, 800);
    }, 3000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, values]);

  if (shouldReduceMotion) {
    return (
      <div className="flex items-center justify-center gap-6">
        <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10">
          <CloudIcon className="size-7 text-primary" />
        </div>
        <div className="w-12 h-0.5 bg-muted" />
        <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10">
          <SettingsIcon className="size-7 text-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-6">
      {/* Cloud server */}
      <motion.div
        animate={{ scale: syncing ? 1.1 : 1 }}
        transition={{ type: 'spring', duration: 0.3 }}
        className="flex size-14 items-center justify-center rounded-xl bg-primary/10 relative"
      >
        <CloudIcon className="size-7 text-primary" />
        {syncing && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 size-4 rounded-full bg-emerald-500 flex items-center justify-center"
          >
            <RefreshCwIcon className="size-2.5 text-white animate-spin" />
          </motion.div>
        )}
      </motion.div>

      {/* Sync beam */}
      <div className="relative w-12 h-0.5 bg-muted overflow-hidden rounded">
        {syncing && (
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 0.8, ease: 'linear' }}
            className="absolute inset-y-0 w-6 bg-primary rounded"
          />
        )}
      </div>

      {/* App config */}
      <motion.div
        animate={{ scale: !syncing ? 1.05 : 1 }}
        transition={{ type: 'spring', duration: 0.3 }}
        className="flex flex-col items-center justify-center rounded-xl bg-background border border-border p-3 min-w-[80px]"
      >
        <SettingsIcon className="size-5 text-muted-foreground mb-1" />
        <AnimatePresence mode="wait">
          <motion.div
            key={configValue}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className={cn(
              'w-full h-2 rounded-full',
              configValue === 'blue' && 'bg-blue-500',
              configValue === 'purple' && 'bg-purple-500',
              configValue === 'green' && 'bg-emerald-500'
            )}
          />
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

// No app update badge
function NoUpdateBadge() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20"
    >
      <div className="flex size-5 items-center justify-center rounded-full bg-emerald-500">
        <CheckIcon className="size-3 text-white" />
      </div>
      <span className="text-sm text-emerald-600 font-medium">
        No app update required
      </span>
    </motion.div>
  );
}

export function RemoteConfigHero(): React.JSX.Element {
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
              <SettingsIcon className="size-4" />
              Paywall management
            </span>
          </BlurFade>

          <BlurFade delay={0.1}>
            <div className="mt-4">
              <SiteHeading
                title="Send any meta-data with your paywall to your app"
                description="Change the behavior and appearance of your paywall without publishing an app update."
              />
            </div>
          </BlurFade>

          {/* Config sync visualization */}
          <BlurFade delay={0.15}>
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="mt-10 p-6 rounded-2xl border bg-background/50 backdrop-blur-sm max-w-sm mx-auto relative overflow-hidden"
            >
              <Spotlight
                className="from-primary/15 via-primary/5 to-transparent"
                size={280}
              />
              <div className="relative">
                <div className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                  Real-time config sync
                </div>
                <ConfigSyncMagic />
                <NoUpdateBadge />
              </div>
            </motion.div>
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
