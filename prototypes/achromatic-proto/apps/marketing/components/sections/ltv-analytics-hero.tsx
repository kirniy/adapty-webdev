'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckIcon,
  DollarSignIcon,
  FilterIcon,
  LineChartIcon,
  PlayIcon,
  TrendingUpIcon,
  UsersIcon
} from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { Spotlight } from '~/components/fragments/spotlight';
import {
  useImageSetVariant,
  useMonochromeMode,
  type ImageSetVariant
} from '~/lib/debug-context';

// Magic animation: LTV prediction chart
function LTVChartMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [animationProgress, setAnimationProgress] = React.useState(0);

  const dataPoints = [25, 40, 55, 68, 78, 86, 92, 98];

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setAnimationProgress(1);
      return;
    }
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimationProgress((prev) => {
          if (prev >= 1) {
            clearInterval(interval);
            return 1;
          }
          return prev + 0.02;
        });
      }, 30);
      return () => clearInterval(interval);
    }, 400);
    return () => clearTimeout(timeout);
  }, [shouldReduceMotion]);

  const visiblePoints = Math.floor(dataPoints.length * animationProgress);

  return (
    <div className="absolute top-4 right-4 z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-lg bg-background/95 backdrop-blur-sm border px-3 py-2 "
      >
        <div className="flex items-center gap-2 mb-1.5">
          <TrendingUpIcon className="size-3 text-primary" />
          <span className="text-[10px] font-medium text-muted-foreground">
            12-month LTV
          </span>
        </div>
        <div className="flex items-end gap-0.5 h-6">
          {dataPoints.map((height, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              animate={{
                height: index < visiblePoints ? `${height}%` : 0
              }}
              transition={{ duration: 0.15, delay: index * 0.05 }}
              className={cn(
                'w-1.5 rounded-t-sm',
                index < visiblePoints - 1 ? 'bg-primary/40' : 'bg-primary'
              )}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// Magic animation: Cohort metric badge
function CohortMetricMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [ltv, setLtv] = React.useState(0);
  const targetLtv = 89;

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setLtv(targetLtv);
      return;
    }
    const timeout = setTimeout(() => {
      const duration = 1500;
      const steps = 50;
      const increment = targetLtv / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= targetLtv) {
          setLtv(targetLtv);
          clearInterval(interval);
        } else {
          setLtv(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }, 800);
    return () => clearTimeout(timeout);
  }, [shouldReduceMotion]);

  return (
    <div className="absolute bottom-4 left-4 z-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-2 rounded-lg bg-background/95 backdrop-blur-sm border px-3 py-2 "
      >
        <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center">
          <DollarSignIcon className="size-3 text-primary" />
        </div>
        <div>
          <p className="text-xs font-bold text-foreground">${ltv}</p>
          <p className="text-[10px] text-muted-foreground">Avg cohort LTV</p>
        </div>
      </motion.div>
    </div>
  );
}

// EXACT content from adapty.io/ltv-analytics (scraped 2026-01-21)
// Badge: "LTV analytics"
// Title: "Improve your UA strategy with subscription LTV analytics"
// Description: "Understand your LTV in detail and adjust your user acquisition strategy."

const BENEFITS = [
  { icon: LineChartIcon, text: 'Cohort LTV analysis' },
  { icon: UsersIcon, text: 'Segment by acquisition' },
  { icon: DollarSignIcon, text: 'Revenue attribution' },
  { icon: FilterIcon, text: 'Filter by any dimension' }
];

const STATS = [
  { value: '12mo', label: 'LTV prediction' },
  { value: '30+', label: 'metrics' },
  { value: 'Real-time', label: 'updates' },
  { value: '15K+', label: 'apps' }
];

const CHECKLIST = [
  'Track cohort performance over time',
  'Segment users by acquisition source',
  'Predict LTV for up to 12 months',
  'Deduct taxes and commissions automatically'
];

function getImagePath(basePath: string, imageSet: ImageSetVariant): string {
  return basePath.replace('/assets/hero/', `/assets/hero/${imageSet}/`);
}

// =============================================================================
// VARIANT: SPLIT - Text left, image right (default)
// =============================================================================
function SplitHero() {
  const shouldReduceMotion = useReducedMotion();
  const imageSet = useImageSetVariant();
  const monochromeMode = useMonochromeMode();
  const [isHovered, setIsHovered] = React.useState<'demo' | 'start' | null>(
    null
  );

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container py-16 sm:py-20 md:py-24 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div className="flex flex-col gap-6">
            <BlurFade delay={0.05}>
              <Badge
                variant="outline"
                className="w-fit rounded-full px-4 py-1.5"
              >
                LTV Analytics
              </Badge>
            </BlurFade>

            <BlurFade delay={0.1}>
              <h1 className="text-left text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.1]">
                Improve your UA strategy with subscription LTV analytics
              </h1>
            </BlurFade>

            <BlurFade delay={0.15}>
              <p className="max-w-xl text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
                Understand your LTV in detail and adjust your user acquisition
                strategy. Track cohort performance, segment users by source, and
                optimize your marketing spend.
              </p>
            </BlurFade>

            {/* Benefits grid */}
            <BlurFade delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {BENEFITS.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
                      <benefit.icon className="size-4 text-primary" />
                    </div>
                    {benefit.text}
                  </div>
                ))}
              </div>
            </BlurFade>

            <BlurFade delay={0.25}>
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                <motion.div
                  onMouseEnter={() => setIsHovered('demo')}
                  onMouseLeave={() => setIsHovered(null)}
                  animate={{
                    y: shouldReduceMotion ? 0 : isHovered === 'demo' ? -2 : 0
                  }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  <Link
                    href="/schedule-demo"
                    className={cn(
                      buttonVariants({ size: 'lg' }),
                      'rounded-xl px-8 transition-all duration-150 ease-out'
                    )}
                  >
                    Book a demo
                  </Link>
                </motion.div>

                <motion.div
                  onMouseEnter={() => setIsHovered('start')}
                  onMouseLeave={() => setIsHovered(null)}
                  animate={{
                    y: shouldReduceMotion ? 0 : isHovered === 'start' ? -2 : 0
                  }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  <Link
                    href="https://app.adapty.io/registration"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: 'outline', size: 'lg' }),
                      'rounded-xl px-8 transition-all duration-150 ease-out'
                    )}
                  >
                    Start for free
                  </Link>
                </motion.div>
              </div>
            </BlurFade>

            <BlurFade delay={0.3}>
              <div className="flex flex-wrap gap-6 pt-4 border-t">
                {STATS.map((stat, index) => (
                  <div
                    key={index}
                    className="text-left"
                  >
                    <p className="text-xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>

          {/* Right: LTV Analytics dashboard screenshot */}
          <BlurFade delay={0.2}>
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.96 }
              }
              animate={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }
              }
              transition={{
                delay: 0.1,
                duration: 0.35,
                ease: [0.32, 0.72, 0, 1]
              }}
              className={cn(
                'relative w-full overflow-hidden rounded-xl border bg-background ',
                monochromeMode &&
                  'grayscale hover:grayscale-0 transition-[filter] duration-500'
              )}
            >
              <Spotlight
                className="from-primary/10 via-primary/5 to-transparent"
                size={350}
              />
              <LTVChartMagic />
              <CohortMetricMagic />
              <BorderBeam
                size={200}
                duration={12}
                delay={9}
                borderWidth={1.5}
                colorFrom="hsl(var(--primary))"
                colorTo="hsl(var(--primary)/0)"
              />
              <Image
                priority
                quality={100}
                src={getImagePath('/assets/hero/light-feature3.webp', imageSet)}
                width="1328"
                height="727"
                alt="Adapty LTV Analytics - cohort analysis and revenue attribution"
                className="block w-full dark:hidden"
              />
              <Image
                priority
                quality={100}
                src={getImagePath('/assets/hero/dark-feature3.webp', imageSet)}
                width="1328"
                height="727"
                alt="Adapty LTV Analytics - cohort analysis and revenue attribution"
                className="hidden w-full dark:block"
              />
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: CENTERED - Classic centered layout with large image below
// =============================================================================
function CenteredHero() {
  const shouldReduceMotion = useReducedMotion();
  const imageSet = useImageSetVariant();
  const monochromeMode = useMonochromeMode();
  const [isHovered, setIsHovered] = React.useState<'demo' | 'start' | null>(
    null
  );

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={900} />
      <div className="container py-16 sm:py-20 md:py-24 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <BlurFade delay={0.05}>
            <Badge
              variant="outline"
              className="mx-auto rounded-full px-4 py-1.5"
            >
              LTV Analytics
            </Badge>
          </BlurFade>

          <BlurFade delay={0.1}>
            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Improve your UA strategy with subscription LTV analytics
            </h1>
          </BlurFade>

          <BlurFade delay={0.15}>
            <p className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Understand your LTV in detail and adjust your user acquisition
              strategy. Track cohort performance, segment users by source, and
              optimize your marketing spend.
            </p>
          </BlurFade>

          <BlurFade delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <motion.div
                onMouseEnter={() => setIsHovered('demo')}
                onMouseLeave={() => setIsHovered(null)}
                animate={{
                  y: shouldReduceMotion ? 0 : isHovered === 'demo' ? -2 : 0
                }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              >
                <Link
                  href="/schedule-demo"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'rounded-xl px-8'
                  )}
                >
                  Book a demo
                </Link>
              </motion.div>

              <motion.div
                onMouseEnter={() => setIsHovered('start')}
                onMouseLeave={() => setIsHovered(null)}
                animate={{
                  y: shouldReduceMotion ? 0 : isHovered === 'start' ? -2 : 0
                }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              >
                <Link
                  href="https://app.adapty.io/registration"
                  target="_blank"
                  rel="noopener noreferrer"
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

          {/* Stats row */}
          <BlurFade delay={0.25}>
            <div className="mt-12 flex flex-wrap justify-center gap-8 border-t pt-8">
              {STATS.map((stat, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <p className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>

        {/* Large screenshot below */}
        <BlurFade delay={0.3}>
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 40, scale: 0.95 }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 1, y: 0, scale: 1 }
            }
            transition={{ delay: 0.2, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className={cn(
              'mt-16 mx-auto max-w-5xl overflow-hidden rounded-xl border bg-background ',
              monochromeMode &&
                'grayscale hover:grayscale-0 transition-[filter] duration-500'
            )}
          >
            <Image
              priority
              quality={100}
              src={getImagePath('/assets/hero/light-feature3.webp', imageSet)}
              width="1328"
              height="727"
              alt="Adapty LTV Analytics Dashboard"
              className="block w-full dark:hidden"
            />
            <Image
              priority
              quality={100}
              src={getImagePath('/assets/hero/dark-feature3.webp', imageSet)}
              width="1328"
              height="727"
              alt="Adapty LTV Analytics Dashboard"
              className="hidden w-full dark:block"
            />
          </motion.div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: SHOWCASE - Product demo focus with video/interactive preview
// =============================================================================
function ShowcaseHero() {
  const shouldReduceMotion = useReducedMotion();
  const imageSet = useImageSetVariant();
  const monochromeMode = useMonochromeMode();
  const [isHovered, setIsHovered] = React.useState<
    'demo' | 'start' | 'play' | null
  >(null);
  const [showVideo, setShowVideo] = React.useState(false);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={900} />
      <div className="container py-16 sm:py-20 md:py-24 relative z-10">
        {/* Top: Compact header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <BlurFade delay={0.05}>
            <Badge
              variant="outline"
              className="mx-auto rounded-full px-4 py-1.5"
            >
              LTV Analytics
            </Badge>
          </BlurFade>

          <BlurFade delay={0.1}>
            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Improve your UA strategy with subscription LTV analytics
            </h1>
          </BlurFade>

          <BlurFade delay={0.15}>
            <p className="mt-4 mx-auto max-w-xl text-base leading-relaxed text-muted-foreground">
              Understand your LTV in detail and adjust your user acquisition
              strategy.
            </p>
          </BlurFade>
        </div>

        {/* Main: Large interactive preview */}
        <BlurFade delay={0.2}>
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 20, scale: 0.96 }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 1, y: 0, scale: 1 }
            }
            transition={{ delay: 0.1, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="relative mx-auto max-w-5xl"
          >
            <div
              className={cn(
                'relative overflow-hidden rounded-2xl border bg-background ',
                monochromeMode &&
                  'grayscale hover:grayscale-0 transition-[filter] duration-500'
              )}
            >
              <Image
                priority
                quality={100}
                src={getImagePath('/assets/hero/light-feature3.webp', imageSet)}
                width="1328"
                height="727"
                alt="Adapty LTV Analytics Dashboard"
                className="block w-full dark:hidden"
              />
              <Image
                priority
                quality={100}
                src={getImagePath('/assets/hero/dark-feature3.webp', imageSet)}
                width="1328"
                height="727"
                alt="Adapty LTV Analytics Dashboard"
                className="hidden w-full dark:block"
              />

              {/* Play button overlay */}
              <AnimatePresence>
                {!showVideo && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowVideo(true)}
                    onMouseEnter={() => setIsHovered('play')}
                    onMouseLeave={() => setIsHovered(null)}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] transition-colors hover:bg-black/30"
                  >
                    <motion.div
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : { scale: isHovered === 'play' ? 1.1 : 1 }
                      }
                      transition={{
                        type: 'spring',
                        duration: 0.3,
                        bounce: 0.2
                      }}
                      className="flex size-20 items-center justify-center rounded-full bg-white "
                    >
                      <PlayIcon className="size-8 text-primary ml-1" />
                    </motion.div>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </BlurFade>

        {/* Bottom: Checklist + CTAs */}
        <div className="mt-12 mx-auto max-w-4xl">
          <BlurFade delay={0.3}>
            <div className="grid gap-8 md:grid-cols-2 items-center">
              {/* Checklist */}
              <div className="space-y-3">
                {CHECKLIST.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, x: -10 }
                    }
                    animate={
                      shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }
                    }
                    transition={{ delay: 0.35 + index * 0.05, duration: 0.2 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <div className="flex size-5 items-center justify-center rounded-full bg-green-500/10">
                      <CheckIcon className="size-3 text-green-600 dark:text-green-400" />
                    </div>
                    {item}
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                <motion.div
                  onMouseEnter={() => setIsHovered('demo')}
                  onMouseLeave={() => setIsHovered(null)}
                  animate={{
                    y: shouldReduceMotion ? 0 : isHovered === 'demo' ? -2 : 0
                  }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  <Link
                    href="/schedule-demo"
                    className={cn(
                      buttonVariants({ size: 'lg' }),
                      'rounded-xl px-8'
                    )}
                  >
                    Book a demo
                  </Link>
                </motion.div>

                <motion.div
                  onMouseEnter={() => setIsHovered('start')}
                  onMouseLeave={() => setIsHovered(null)}
                  animate={{
                    y: shouldReduceMotion ? 0 : isHovered === 'start' ? -2 : 0
                  }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  <Link
                    href="https://app.adapty.io/registration"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: 'outline', size: 'lg' }),
                      'rounded-xl px-8'
                    )}
                  >
                    Start for free
                  </Link>
                </motion.div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}

// =============================================================================
// MAIN EXPORT
// =============================================================================
export type LTVAnalyticsHeroVariant = 'split' | 'centered' | 'showcase';

type Props = {
  variant?: LTVAnalyticsHeroVariant;
};

export function LTVAnalyticsHero({
  variant = 'split'
}: Props): React.JSX.Element {
  switch (variant) {
    case 'centered':
      return <CenteredHero />;
    case 'showcase':
      return <ShowcaseHero />;
    case 'split':
    default:
      return <SplitHero />;
  }
}
