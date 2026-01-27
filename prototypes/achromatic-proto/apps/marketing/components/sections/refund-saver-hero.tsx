'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheckIcon, DollarSignIcon, TrendingDownIcon, ZapIcon, CheckIcon, ArrowDownIcon, ChevronRightIcon } from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { SectionBackground } from '~/components/fragments/section-background';
import { GridSection } from '~/components/fragments/grid-section';
import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { Spotlight } from '~/components/fragments/spotlight';
import { useImageSetVariant, useMonochromeMode, type ImageSetVariant } from '~/lib/debug-context';

// Magic animation: Refund reduction counter
function RefundReductionMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [percentage, setPercentage] = React.useState(0);
  const targetPercentage = 50;

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setPercentage(targetPercentage);
      return;
    }
    const duration = 1500;
    const steps = 50;
    const increment = targetPercentage / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= targetPercentage) {
        setPercentage(targetPercentage);
        clearInterval(interval);
      } else {
        setPercentage(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className="absolute top-4 right-4 z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-2 rounded-lg bg-background/95 backdrop-blur-sm border px-3 py-2 "
      >
        <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center">
          <ArrowDownIcon className="size-3 text-primary" />
        </div>
        <div className="text-left">
          <p className="text-sm font-bold text-primary">-{percentage}%</p>
          <p className="text-[10px] text-muted-foreground">Refunds reduced</p>
        </div>
      </motion.div>
    </div>
  );
}

// Magic animation: Revenue saved counter
function RevenueSavedMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [saved, setSaved] = React.useState(0);
  const targetSaved = 576;

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setSaved(targetSaved);
      return;
    }
    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = targetSaved / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= targetSaved) {
          setSaved(targetSaved);
          clearInterval(interval);
        } else {
          setSaved(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }, 500);
    return () => clearTimeout(timeout);
  }, [shouldReduceMotion]);

  return (
    <div className="absolute bottom-4 left-4 z-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-2 rounded-lg bg-background/95 backdrop-blur-sm border px-3 py-2 "
      >
        <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center">
          <DollarSignIcon className="size-3 text-primary" />
        </div>
        <div>
          <p className="text-xs font-bold text-foreground">${saved}K</p>
          <p className="text-[10px] text-muted-foreground">Saved weekly</p>
        </div>
      </motion.div>
    </div>
  );
}

// EXACT content from adapty.io/refund-saver (scraped 2026-01-21)
const HERO_CONTENT = {
  badge: 'Refund Saver',
  title: 'Reduce refund rate by up to 50% without coding',
  description: "Cut unnecessary refunds, save more revenue, and let Adapty pay for itself. Refund Saver delivers an instant 3x ROI, covering Adapty's cost and more.",
};

// Key benefits for refund saver
const BENEFITS = [
  { icon: TrendingDownIcon, text: 'Reduce refunds by 50%' },
  { icon: ShieldCheckIcon, text: 'Automated protection' },
  { icon: DollarSignIcon, text: '3x ROI guaranteed' },
  { icon: ZapIcon, text: 'Zero coding required' },
];

// Key stats
const STATS = [
  { value: '$576K', label: 'saved weekly', color: 'text-primary' },
  { value: '50%', label: 'fewer refunds', color: 'text-blue-500' },
  { value: '3x', label: 'ROI average', color: 'text-purple-500' },
];

// Checklist for centered variant
const CHECKLIST = [
  'Cut refunds by 40%',
  'Zero extra effort',
  'Adapty pays for itself',
  'No legal consequences',
];

// Helper to get image path based on selected image set
function getImagePath(basePath: string, imageSet: ImageSetVariant): string {
  return basePath.replace('/assets/hero/', `/assets/hero/${imageSet}/`);
}

export type RefundSaverHeroVariant = 'split' | 'centered' | 'showcase';

export const REFUND_SAVER_HERO_VARIANTS = ['split', 'centered', 'showcase'] as const;

type Props = {
  variant?: RefundSaverHeroVariant;
};

// =============================================================================
// VARIANT: SPLIT - Text left, image right (default)
// =============================================================================
function SplitHero(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const imageSet = useImageSetVariant();
  const monochromeMode = useMonochromeMode();
  const [isHovered, setIsHovered] = React.useState<'demo' | 'start' | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container py-16 sm:py-20 md:py-24 relative z-10">
        {/* Split layout: text left, image right */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div className="flex flex-col gap-6">
            <BlurFade delay={0.05}>
              <Badge variant="outline" className="relative w-fit overflow-hidden rounded-full px-4 py-1.5">
                <BorderBeam
                  size={40}
                  duration={4}
                  borderWidth={1.5}
                  colorFrom="#3b82f6"
                  colorTo="#8b5cf6"
                />
                {HERO_CONTENT.badge}
              </Badge>
            </BlurFade>

            <BlurFade delay={0.1}>
              <h1 className="text-left text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.1]">
                {HERO_CONTENT.title}
              </h1>
            </BlurFade>

            <BlurFade delay={0.15}>
              <p className="max-w-xl text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
                {HERO_CONTENT.description}
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
                  animate={{
                    y: shouldReduceMotion ? 0 : isHovered === 'demo' ? -2 : 0,
                  }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  <Link
                    href="/schedule-demo"
                    className={cn(
                      buttonVariants({ size: 'lg' }),
                      'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
                    )}
                  >
                    Schedule A Demo
                  </Link>
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
                    Get started
                  </Link>
                </motion.div>
              </div>
            </BlurFade>

            {/* Stats */}
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

          {/* Right: Dashboard screenshot */}
          <BlurFade delay={0.2}>
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.1, duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className={cn(
                "relative w-full overflow-hidden rounded-xl border bg-background ",
                monochromeMode && "grayscale hover:grayscale-0 transition-[filter] duration-500"
              )}
            >
              <Spotlight className="from-primary/10 via-primary/5 to-transparent" size={350} />
              <RefundReductionMagic />
              <RevenueSavedMagic />
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
                alt="Adapty Refund Saver - reduce refunds and save revenue"
                className="block w-full dark:hidden"
              />
              <Image
                priority
                quality={100}
                src={getImagePath('/assets/hero/dark-feature3.webp', imageSet)}
                width="1328"
                height="727"
                alt="Adapty Refund Saver - reduce refunds and save revenue"
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
// VARIANT: CENTERED - Classic centered layout with image below
// =============================================================================
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
            <Badge variant="outline" className="relative overflow-hidden rounded-full px-4 py-1.5 mb-6">
              <BorderBeam
                size={40}
                duration={4}
                borderWidth={1.5}
                colorFrom="#3b82f6"
                colorTo="#8b5cf6"
              />
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

          {/* Checklist items */}
          <BlurFade delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {CHECKLIST.map((item, index) => (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                  className="flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2 text-sm cursor-default"
                >
                  <ChevronRightIcon className="size-3 text-muted-foreground" />
                  {item}
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
                  className={cn(buttonVariants({ size: 'lg' }), 'rounded-xl px-8')}
                >
                  Schedule a demo
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
                  className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'rounded-xl px-8')}
                >
                  Get started
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
                "mt-16 relative w-full overflow-hidden rounded-xl border bg-background ",
                monochromeMode && "grayscale hover:grayscale-0 transition-[filter] duration-500"
              )}
            >
              <Image
                priority
                quality={100}
                src={getImagePath('/assets/hero/light-feature3.webp', imageSet)}
                width="1328"
                height="727"
                alt="Adapty Refund Saver"
                className="block w-full dark:hidden"
              />
              <Image
                priority
                quality={100}
                src={getImagePath('/assets/hero/dark-feature3.webp', imageSet)}
                width="1328"
                height="727"
                alt="Adapty Refund Saver"
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
// VARIANT: SHOWCASE - Stats-focused with large product image
// =============================================================================
function ShowcaseHero(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const imageSet = useImageSetVariant();
  const monochromeMode = useMonochromeMode();
  const [isHovered, setIsHovered] = React.useState<'demo' | 'start' | null>(null);
  const [hoveredStat, setHoveredStat] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={950} />
      <div className="container py-20 sm:py-24 md:py-28 relative z-10">
        {/* Centered heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <BlurFade delay={0.05}>
            <Badge variant="outline" className="relative overflow-hidden rounded-full px-4 py-1.5 mb-6">
              <BorderBeam
                size={40}
                duration={4}
                borderWidth={1.5}
                colorFrom="#3b82f6"
                colorTo="#8b5cf6"
              />
              {HERO_CONTENT.badge}
            </Badge>
          </BlurFade>

          <BlurFade delay={0.1}>
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {HERO_CONTENT.title}
            </h1>
          </BlurFade>

          <BlurFade delay={0.15}>
            <p className="mt-6 text-lg text-muted-foreground">
              {HERO_CONTENT.description}
            </p>
          </BlurFade>

          {/* CTAs */}
          <BlurFade delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                onMouseEnter={() => setIsHovered('demo')}
                onMouseLeave={() => setIsHovered(null)}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              >
                <Link
                  href="/schedule-demo"
                  className={cn(buttonVariants({ size: 'lg' }), 'rounded-xl px-8')}
                >
                  Schedule a demo
                </Link>
              </motion.div>

              <motion.div
                onMouseEnter={() => setIsHovered('start')}
                onMouseLeave={() => setIsHovered(null)}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              >
                <Link
                  href="https://app.adapty.io/registration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'rounded-xl px-8')}
                >
                  Get started
                </Link>
              </motion.div>
            </div>
          </BlurFade>
        </div>

        {/* Stats row */}
        <BlurFade delay={0.25}>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.08 }}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                className={cn(
                  "px-8 py-4 rounded-2xl border bg-background/80 backdrop-blur-sm cursor-default transition-colors duration-200",
                  hoveredStat === index ? "border-primary/50 " : "border-border/50"
                )}
              >
                <div className={cn("text-3xl sm:text-4xl font-bold", stat.color)}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </BlurFade>

        {/* Large product screenshot */}
        <BlurFade delay={0.3}>
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.98 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className={cn(
              "relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl border-2 bg-background ",
              monochromeMode && "grayscale hover:grayscale-0 transition-[filter] duration-500"
            )}
          >
            <Image
              priority
              quality={100}
              src={getImagePath('/assets/hero/light-feature3.webp', imageSet)}
              width="1328"
              height="727"
              alt="Adapty Refund Saver"
              className="block w-full dark:hidden"
            />
            <Image
              priority
              quality={100}
              src={getImagePath('/assets/hero/dark-feature3.webp', imageSet)}
              width="1328"
              height="727"
              alt="Adapty Refund Saver"
              className="hidden w-full dark:block"
            />
          </motion.div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// =============================================================================
// MAIN EXPORT
// =============================================================================
export function RefundSaverHero({ variant = 'split' }: Props): React.JSX.Element {
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
