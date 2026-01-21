'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, LineChartIcon, UsersIcon, DollarSignIcon, FilterIcon, PlayIcon, CheckIcon } from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { SectionBackground } from '~/components/fragments/section-background';
import { GridSection } from '~/components/fragments/grid-section';
import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { useImageSetVariant, useMonochromeMode, type ImageSetVariant } from '~/lib/debug-context';

// EXACT content from adapty.io/ltv-analytics (scraped 2026-01-21)
// Badge: "LTV analytics"
// Title: "Improve your UA strategy with subscription LTV analytics"
// Description: "Understand your LTV in detail and adjust your user acquisition strategy."

const BENEFITS = [
  { icon: LineChartIcon, text: 'Cohort LTV analysis' },
  { icon: UsersIcon, text: 'Segment by acquisition' },
  { icon: DollarSignIcon, text: 'Revenue attribution' },
  { icon: FilterIcon, text: 'Filter by any dimension' },
];

const STATS = [
  { value: '12mo', label: 'LTV prediction' },
  { value: '30+', label: 'metrics' },
  { value: 'Real-time', label: 'updates' },
  { value: '15K+', label: 'apps' },
];

const CHECKLIST = [
  'Track cohort performance over time',
  'Segment users by acquisition source',
  'Predict LTV for up to 12 months',
  'Deduct taxes and commissions automatically',
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
  const [isHovered, setIsHovered] = React.useState<'demo' | 'start' | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container py-16 sm:py-20 md:py-24 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div className="flex flex-col gap-6">
            <BlurFade delay={0.05}>
              <Badge variant="outline" className="w-fit rounded-full px-4 py-1.5">
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
                Understand your LTV in detail and adjust your user acquisition strategy. Track cohort performance, segment users by source, and optimize your marketing spend.
              </p>
            </BlurFade>

            {/* Benefits grid */}
            <BlurFade delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {BENEFITS.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
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
                  animate={{ y: shouldReduceMotion ? 0 : isHovered === 'demo' ? -2 : 0 }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  <Link
                    href="/schedule-demo"
                    className={cn(buttonVariants({ size: 'lg' }), 'rounded-xl px-8 transition-all duration-150 ease-out')}
                  >
                    Book a demo
                    <motion.span
                      animate={shouldReduceMotion ? undefined : { x: isHovered === 'demo' ? 3 : 0 }}
                      transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
                    >
                      <ArrowRightIcon className="ml-2 size-4" />
                    </motion.span>
                  </Link>
                </motion.div>

                <motion.div
                  onMouseEnter={() => setIsHovered('start')}
                  onMouseLeave={() => setIsHovered(null)}
                  animate={{ y: shouldReduceMotion ? 0 : isHovered === 'start' ? -2 : 0 }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  <Link
                    href="https://app.adapty.io/registration"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'rounded-xl px-8 transition-all duration-150 ease-out')}
                  >
                    Start for free
                  </Link>
                </motion.div>
              </div>
            </BlurFade>

            <BlurFade delay={0.3}>
              <div className="flex flex-wrap gap-6 pt-4 border-t">
                {STATS.map((stat, index) => (
                  <div key={index} className="text-left">
                    <p className="text-xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </BlurFade>
          </div>

          {/* Right: LTV Analytics dashboard screenshot */}
          <BlurFade delay={0.2}>
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className={cn(
                "relative w-full overflow-hidden rounded-xl border bg-background shadow-lg",
                monochromeMode && "grayscale hover:grayscale-0 transition-[filter] duration-500"
              )}
            >
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
              <BorderBeam
                size={200}
                duration={12}
                delay={9}
                borderWidth={1.5}
                colorFrom="hsl(var(--primary))"
                colorTo="hsl(var(--primary)/0)"
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
  const [isHovered, setIsHovered] = React.useState<'demo' | 'start' | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={900} />
      <div className="container py-16 sm:py-20 md:py-24 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <BlurFade delay={0.05}>
            <Badge variant="outline" className="mx-auto rounded-full px-4 py-1.5">
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
              Understand your LTV in detail and adjust your user acquisition strategy. Track cohort performance, segment users by source, and optimize your marketing spend.
            </p>
          </BlurFade>

          <BlurFade delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <motion.div
                onMouseEnter={() => setIsHovered('demo')}
                onMouseLeave={() => setIsHovered(null)}
                animate={{ y: shouldReduceMotion ? 0 : isHovered === 'demo' ? -2 : 0 }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              >
                <Link
                  href="/schedule-demo"
                  className={cn(buttonVariants({ size: 'lg' }), 'rounded-xl px-8')}
                >
                  Book a demo
                  <motion.span
                    animate={shouldReduceMotion ? undefined : { x: isHovered === 'demo' ? 3 : 0 }}
                    transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
                  >
                    <ArrowRightIcon className="ml-2 size-4" />
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div
                onMouseEnter={() => setIsHovered('start')}
                onMouseLeave={() => setIsHovered(null)}
                animate={{ y: shouldReduceMotion ? 0 : isHovered === 'start' ? -2 : 0 }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              >
                <Link
                  href="https://app.adapty.io/registration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'rounded-xl px-8')}
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
                <div key={index} className="text-center">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>

        {/* Large screenshot below */}
        <BlurFade delay={0.3}>
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.95 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className={cn(
              "mt-16 mx-auto max-w-6xl overflow-hidden rounded-xl border bg-background shadow-2xl",
              monochromeMode && "grayscale hover:grayscale-0 transition-[filter] duration-500"
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
  const [isHovered, setIsHovered] = React.useState<'demo' | 'start' | 'play' | null>(null);
  const [showVideo, setShowVideo] = React.useState(false);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={900} />
      <div className="container py-16 sm:py-20 md:py-24 relative z-10">
        {/* Top: Compact header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <BlurFade delay={0.05}>
            <Badge variant="outline" className="mx-auto rounded-full px-4 py-1.5">
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
              Understand your LTV in detail and adjust your user acquisition strategy.
            </p>
          </BlurFade>
        </div>

        {/* Main: Large interactive preview */}
        <BlurFade delay={0.2}>
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.96 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="relative mx-auto max-w-5xl"
          >
            <div
              className={cn(
                "relative overflow-hidden rounded-2xl border bg-background shadow-2xl",
                monochromeMode && "grayscale hover:grayscale-0 transition-[filter] duration-500"
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
                      animate={shouldReduceMotion ? undefined : { scale: isHovered === 'play' ? 1.1 : 1 }}
                      transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
                      className="flex size-20 items-center justify-center rounded-full bg-white shadow-lg"
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
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -10 }}
                    animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
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
                  animate={{ y: shouldReduceMotion ? 0 : isHovered === 'demo' ? -2 : 0 }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  <Link
                    href="/schedule-demo"
                    className={cn(buttonVariants({ size: 'lg' }), 'rounded-xl px-8')}
                  >
                    Book a demo
                    <motion.span
                      animate={shouldReduceMotion ? undefined : { x: isHovered === 'demo' ? 3 : 0 }}
                      transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
                    >
                      <ArrowRightIcon className="ml-2 size-4" />
                    </motion.span>
                  </Link>
                </motion.div>

                <motion.div
                  onMouseEnter={() => setIsHovered('start')}
                  onMouseLeave={() => setIsHovered(null)}
                  animate={{ y: shouldReduceMotion ? 0 : isHovered === 'start' ? -2 : 0 }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  <Link
                    href="https://app.adapty.io/registration"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'rounded-xl px-8')}
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

export function LTVAnalyticsHero({ variant = 'split' }: Props): React.JSX.Element {
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
