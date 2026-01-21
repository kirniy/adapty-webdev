'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, CheckIcon, PlayIcon, PaletteIcon, TestTube2Icon, TargetIcon, BarChart3Icon } from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { SectionBackground } from '~/components/fragments/section-background';
import { GridSection } from '~/components/fragments/grid-section';
import { BlurFade } from '~/components/fragments/blur-fade';
import { SlideIn } from '~/components/fragments/slide-in';
import { ScaleOnHover } from '~/components/fragments/scale-on-hover';

import { BorderBeam } from '~/components/fragments/border-beam';
import { useImageSetVariant, useMonochromeMode, type ImageSetVariant } from '~/lib/debug-context';

// EXACT content from adapty.io/for-marketers (scraped 2026-01-21)
const HERO_CONTENT = {
  badge: 'For marketers',
  title: 'Build, manage, and target paywalls without leaving the dashboard',
  description: 'Create and deploy beautiful native paywalls with Adapty Paywall Builder. A/B test paywalls and target them using one dashboard. Track metrics with 99% accuracy with stores.'
};

// Key benefits for marketers
const BENEFITS = [
  'No-code paywall builder',
  'A/B testing without engineers',
  '99% accurate analytics',
  'Real-time targeting',
];

// Features for centered variant
const FEATURE_PILLS = [
  { icon: PaletteIcon, label: 'Visual Builder' },
  { icon: TestTube2Icon, label: 'A/B Testing' },
  { icon: TargetIcon, label: 'Targeting' },
  { icon: BarChart3Icon, label: 'Analytics' },
];

// Helper to get image path based on selected image set
function getImagePath(basePath: string, imageSet: ImageSetVariant): string {
  return basePath.replace('/assets/hero/', `/assets/hero/${imageSet}/`);
}

export type ForMarketersHeroVariant = 'split' | 'centered' | 'video';

export const FOR_MARKETERS_HERO_VARIANTS = ['split', 'centered', 'video'] as const;

type Props = {
  variant?: ForMarketersHeroVariant;
};

// Variant 1: Split layout - text left, image right
function SplitHero(): React.JSX.Element {
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
            <SlideIn delay={0.05} direction="up">
              <Badge variant="outline" className="w-fit rounded-full px-4 py-1.5">
                {HERO_CONTENT.badge}
              </Badge>
            </SlideIn>

            <SlideIn delay={0.1} direction="up">
              <h1 className="text-left text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.1]">
                {HERO_CONTENT.title}
              </h1>
            </SlideIn>

            <SlideIn delay={0.15} direction="up">
              <p className="max-w-xl text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
                {HERO_CONTENT.description}
              </p>
            </SlideIn>

            {/* Benefits list */}
            <BlurFade delay={0.2}>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {BENEFITS.map((benefit, index) => (
                  <motion.li
                    key={index}
                    whileHover={shouldReduceMotion ? undefined : { x: 3 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground cursor-default"
                  >
                    <div className="flex size-5 items-center justify-center rounded-full border border-primary/30">
                      <CheckIcon className="size-3 text-primary" />
                    </div>
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </BlurFade>

            <SlideIn delay={0.25} direction="up">
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                <ScaleOnHover
                  onMouseEnter={() => setIsHovered('demo')}
                  onMouseLeave={() => setIsHovered(null)}
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
                </ScaleOnHover>

                <ScaleOnHover
                  onMouseEnter={() => setIsHovered('start')}
                  onMouseLeave={() => setIsHovered(null)}
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
                </ScaleOnHover>
              </div>
            </SlideIn>
          </div>

          {/* Right: Dashboard illustration */}
          <BlurFade delay={0.2}>
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.1, duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className={cn(
                "relative w-full overflow-hidden rounded-xl border bg-background shadow-lg",
                monochromeMode && "grayscale hover:grayscale-0 transition-[filter] duration-500"
              )}
            >
              <Image
                priority
                quality={100}
                src={getImagePath('/assets/hero/light-feature1.webp', imageSet)}
                width="1328"
                height="727"
                alt="Adapty Paywall Builder - no-code visual editor for marketers"
                className="block w-full dark:hidden"
              />
              <Image
                priority
                quality={100}
                src={getImagePath('/assets/hero/dark-feature1.webp', imageSet)}
                width="1328"
                height="727"
                alt="Adapty Paywall Builder - no-code visual editor for marketers"
                className="hidden w-full dark:block"
              />
              <BorderBeam
                size={200}
                duration={12}
                delay={0}
                borderWidth={3}
                colorFrom="hsl(var(--primary))"
                colorTo="hsl(var(--primary)/0)"
                className="z-10"
              />
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}

// Variant 2: Centered layout - classic hero with image below
function CenteredHero(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const imageSet = useImageSetVariant();
  const monochromeMode = useMonochromeMode();
  const [isHovered, setIsHovered] = React.useState<'demo' | 'start' | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1000} />
      <div className="container py-20 sm:py-24 md:py-32 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <BlurFade delay={0.05}>
            <Badge variant="outline" className="rounded-full px-4 py-1.5 mb-6">
              {HERO_CONTENT.badge}
            </Badge>
          </BlurFade>

          <BlurFade delay={0.1}>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {HERO_CONTENT.title}
            </h1>
          </BlurFade>

          <BlurFade delay={0.15}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {HERO_CONTENT.description}
            </p>
          </BlurFade>

          {/* Feature pills */}
          <BlurFade delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {FEATURE_PILLS.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                  className="flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2 text-sm cursor-default"
                >
                  <feature.icon className="size-4 text-primary" />
                  {feature.label}
                </motion.div>
              ))}
            </div>
          </BlurFade>

          {/* CTAs */}
          <BlurFade delay={0.25}>
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <motion.div
                onMouseEnter={() => setIsHovered('demo')}
                onMouseLeave={() => setIsHovered(null)}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
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
                    animate={shouldReduceMotion ? undefined : { x: isHovered === 'demo' ? 3 : 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    <ArrowRightIcon className="ml-2 size-4" />
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div
                onMouseEnter={() => setIsHovered('start')}
                onMouseLeave={() => setIsHovered(null)}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
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

          {/* Dashboard image */}
          <BlurFade delay={0.3}>
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className={cn(
                "mt-16 relative w-full overflow-hidden rounded-xl border bg-background shadow-2xl",
                monochromeMode && "grayscale hover:grayscale-0 transition-[filter] duration-500"
              )}
            >
              <Image
                priority
                quality={100}
                src={getImagePath('/assets/hero/light-feature1.webp', imageSet)}
                width="1328"
                height="727"
                alt="Adapty Paywall Builder"
                className="block w-full dark:hidden"
              />
              <Image
                priority
                quality={100}
                src={getImagePath('/assets/hero/dark-feature1.webp', imageSet)}
                width="1328"
                height="727"
                alt="Adapty Paywall Builder"
                className="hidden w-full dark:block"
              />

              <BorderBeam
                size={250}
                duration={12}
                delay={0}
                borderWidth={3}
                colorFrom="hsl(var(--primary))"
                colorTo="hsl(var(--primary)/0)"
                className="z-10"
              />
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}

// Variant 3: Video/Demo focus - with video player mockup
function VideoHero(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const imageSet = useImageSetVariant();
  const monochromeMode = useMonochromeMode();
  const [isHovered, setIsHovered] = React.useState<'demo' | 'start' | 'play' | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={900} />
      <div className="container py-20 sm:py-24 md:py-28 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Video/Image with play button */}
          <BlurFade delay={0.1} className="order-2 lg:order-1">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className={cn(
                "relative w-full overflow-hidden rounded-2xl border-2 bg-background shadow-2xl",
                isPlaying ? "border-primary/50" : "border-border/50",
                monochromeMode && "grayscale hover:grayscale-0 transition-[filter] duration-500"
              )}
            >
              <Image
                priority
                quality={100}
                src={getImagePath('/assets/hero/light-feature1.webp', imageSet)}
                width="1328"
                height="727"
                alt="Adapty Paywall Builder demo"
                className="block w-full dark:hidden"
              />
              <Image
                priority
                quality={100}
                src={getImagePath('/assets/hero/dark-feature1.webp', imageSet)}
                width="1328"
                height="727"
                alt="Adapty Paywall Builder demo"
                className="hidden w-full dark:block"
              />
              <BorderBeam
                size={250}
                duration={12}
                delay={0}
                borderWidth={3}
                colorFrom="hsl(var(--primary))"
                colorTo="hsl(var(--primary)/0)"
                className="z-10"
              />

              {/* Play button overlay */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onMouseEnter={() => setIsHovered('play')}
                    onMouseLeave={() => setIsHovered(null)}
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] transition-colors hover:bg-black/30"
                  >
                    <motion.div
                      animate={shouldReduceMotion ? undefined : {
                        scale: isHovered === 'play' ? 1.1 : 1,
                      }}
                      className="flex size-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
                    >
                      <PlayIcon className="size-8 ml-1" fill="currentColor" />
                    </motion.div>
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Click to close when "playing" */}
              {isPlaying && (
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 rounded-full bg-background/80 backdrop-blur-sm px-3 py-1 text-xs font-medium hover:bg-background transition-colors"
                >
                  Close demo
                </button>
              )}
            </motion.div>
          </BlurFade>

          {/* Right: Content */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <BlurFade delay={0.05}>
              <Badge variant="outline" className="w-fit rounded-full px-4 py-1.5 gap-2">
                <PlayIcon className="size-3" />
                {HERO_CONTENT.badge}
              </Badge>
            </BlurFade>

            <BlurFade delay={0.1}>
              <h1 className="text-left text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[48px] lg:leading-[1.15]">
                {HERO_CONTENT.title}
              </h1>
            </BlurFade>

            <BlurFade delay={0.15}>
              <p className="max-w-xl text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
                {HERO_CONTENT.description}
              </p>
            </BlurFade>

            {/* Benefits as cards */}
            <BlurFade delay={0.2}>
              <div className="grid grid-cols-2 gap-3">
                {BENEFITS.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                    animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + index * 0.05 }}
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                    className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm p-3 text-sm cursor-default"
                  >
                    <CheckIcon className="size-4 text-primary shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </BlurFade>

            {/* CTAs */}
            <BlurFade delay={0.3}>
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
                <motion.div
                  onMouseEnter={() => setIsHovered('demo')}
                  onMouseLeave={() => setIsHovered(null)}
                  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
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
                      animate={shouldReduceMotion ? undefined : { x: isHovered === 'demo' ? 3 : 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <ArrowRightIcon className="ml-2 size-4" />
                    </motion.span>
                  </Link>
                </motion.div>

                <motion.div
                  onMouseEnter={() => setIsHovered('start')}
                  onMouseLeave={() => setIsHovered(null)}
                  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
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
          </div>
        </div>
      </div>
    </GridSection>
  );
}

export function ForMarketersHero({ variant = 'split' }: Props): React.JSX.Element {
  switch (variant) {
    case 'centered':
      return <CenteredHero />;
    case 'video':
      return <VideoHero />;
    case 'split':
    default:
      return <SplitHero />;
  }
}
