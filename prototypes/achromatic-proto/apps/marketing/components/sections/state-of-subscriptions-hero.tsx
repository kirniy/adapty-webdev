'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, DownloadIcon, FileTextIcon, TrendingUpIcon, BarChart3Icon } from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { SectionBackground } from '~/components/fragments/section-background';
import { GridSection } from '~/components/fragments/grid-section';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';
import { Spotlight } from '~/components/fragments/spotlight';
import { BorderBeam } from '~/components/fragments/border-beam';

// Report data highlights magic animation
function ReportHighlightsMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [activeHighlight, setActiveHighlight] = React.useState(0);
  const highlights = [
    { label: 'Revenue tracked', value: '$1.9B', trend: '+24%' },
    { label: 'Apps analyzed', value: '15,000+', trend: '+18%' },
    { label: 'Avg. conversion', value: '4.2%', trend: '+12%' },
    { label: 'Trial-to-paid', value: '68%', trend: '+8%' },
  ];

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveHighlight((prev) => (prev + 1) % highlights.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, highlights.length]);

  if (shouldReduceMotion) {
    return (
      <div className="space-y-3">
        {highlights.slice(0, 2).map((h, i) => (
          <div key={i} className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">{h.label}</span>
            <span className="text-sm font-semibold">{h.value}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Mini chart visualization */}
      <div className="flex justify-center gap-1 h-16 items-end">
        {[40, 55, 45, 70, 60, 85, 75].map((height, i) => (
          <motion.div
            key={i}
            animate={{
              height: `${height}%`,
              opacity: i === 6 ? 1 : 0.4 + (i * 0.08),
            }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={cn(
              'w-4 rounded-t',
              i === 6 ? 'bg-primary' : 'bg-primary/30'
            )}
          />
        ))}
      </div>

      {/* Current highlight */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeHighlight}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="rounded-lg border bg-background/50 p-3"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-muted-foreground">{highlights[activeHighlight]?.label}</div>
              <div className="text-lg font-bold">{highlights[activeHighlight]?.value}</div>
            </div>
            <div className="flex items-center gap-1 text-emerald-500 text-sm font-medium">
              <TrendingUpIcon className="size-4" />
              {highlights[activeHighlight]?.trend}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Highlight dots */}
      <div className="flex justify-center gap-2">
        {highlights.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: i === activeHighlight ? 1.2 : 1,
              opacity: i === activeHighlight ? 1 : 0.4,
            }}
            className="size-1.5 rounded-full bg-primary"
          />
        ))}
      </div>
    </div>
  );
}

// Download counter badge
function DownloadBadge() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
    >
      <FileTextIcon className="size-4 text-primary" />
      <span className="text-sm font-medium">
        Includes exclusive <span className="text-primary font-bold">Adapty Pricing Index</span>
      </span>
    </motion.div>
  );
}

export function StateOfSubscriptionsHero(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <BlurFade delay={0.05}>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider">
              <BarChart3Icon className="size-4" />
              2025 report
            </span>
          </BlurFade>

          <BlurFade delay={0.1}>
            <SiteHeading
              title="State of in-app subscriptions 2025"
              description="The most comprehensive report on mobile subscription growth, based on $1.9B in revenue from 15,000+ apps. Learn how to price, monetize, and scale faster in 2025."
            />
          </BlurFade>

          {/* Report visualization */}
          <BlurFade delay={0.15}>
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="p-6 rounded-2xl border bg-background/50 backdrop-blur-sm max-w-xs mx-auto relative overflow-hidden"
            >
              <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={280} />
              <div className="relative">
                <div className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                  Key insights
                </div>
                <ReportHighlightsMagic />
              </div>
            </motion.div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <DownloadBadge />
          </BlurFade>

          <BlurFade delay={0.25}>
            <motion.div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{
                y: shouldReduceMotion ? 0 : isHovered ? -2 : 0,
              }}
              transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              className="inline-block relative"
            >
              <Link
                href="https://uploads.adapty.io/state_of_in_app_subscriptions_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
                )}
              >
                <DownloadIcon className="mr-2 size-4" />
                Download the report
                <motion.span
                  animate={shouldReduceMotion ? undefined : { x: isHovered ? 3 : 0 }}
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
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
