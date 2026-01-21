'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, TrendingUpIcon, UsersIcon, DollarSignIcon, BarChart3Icon, CheckIcon, ZapIcon } from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { SectionBackground } from '~/components/fragments/section-background';
import { GridSection } from '~/components/fragments/grid-section';
import { BlurFade } from '~/components/fragments/blur-fade';
import { useImageSetVariant, useMonochromeMode, type ImageSetVariant } from '~/lib/debug-context';

// EXACT content from adapty.io/for-app-owners (scraped 2026-01-21)
const HERO_CONTENT = {
  badge: 'For app owners',
  title: 'A springboard for running a successful subscription app business',
  description: 'Running a subscription business is hard, we know it. Adapty makes it easy for you and your team to get things done quickly and cheaply while allowing you to focus on what you do best - building new products and acquiring customers.'
};

// Key benefits for app owners
const BENEFITS = [
  { icon: TrendingUpIcon, text: 'Double conversion rates' },
  { icon: DollarSignIcon, text: 'Reduce churn by 30%' },
  { icon: UsersIcon, text: '15,000+ apps trust us' },
  { icon: BarChart3Icon, text: 'Real-time revenue analytics' },
];

// Animated stats for metrics variant
const ANIMATED_STATS = [
  { value: 2, suffix: 'x', label: 'Conversion rate increase', color: 'text-green-500' },
  { value: 30, suffix: '%', label: 'Churn reduction', color: 'text-blue-500' },
  { value: 15000, suffix: '+', label: 'Apps powered', color: 'text-purple-500' },
  { value: 4, suffix: 'Q', label: 'Revenue forecast', color: 'text-orange-500' },
];

// Checklist items for centered variant
const CHECKLIST_ITEMS = [
  'No-code paywall builder',
  'Real-time analytics dashboard',
  'A/B testing built-in',
  'Team access controls',
];

export type ForAppOwnersHeroVariant = 'split' | 'centered' | 'metrics';

export const FOR_APP_OWNERS_HERO_VARIANTS = ['split', 'centered', 'metrics'] as const;

type Props = {
  variant?: ForAppOwnersHeroVariant;
};

// Helper to get image path based on selected image set
function getImagePath(basePath: string, imageSet: ImageSetVariant): string {
  return basePath.replace('/assets/hero/', `/assets/hero/${imageSet}/`);
}

// Variant 1: Split layout - text left, dashboard right
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
            <BlurFade delay={0.05}>
              <Badge variant="outline" className="w-fit rounded-full px-4 py-1.5">
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
                  <motion.div
                    key={index}
                    whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground cursor-default"
                  >
                    <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
                      <benefit.icon className="size-4 text-primary" />
                    </div>
                    {benefit.text}
                  </motion.div>
                ))}
              </div>
            </BlurFade>

            <BlurFade delay={0.25}>
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                <motion.div
                  onMouseEnter={() => setIsHovered('demo')}
                  onMouseLeave={() => setIsHovered(null)}
                  animate={shouldReduceMotion ? undefined : {
                    y: isHovered === 'demo' ? -2 : 0,
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
                  animate={shouldReduceMotion ? undefined : {
                    y: isHovered === 'start' ? -2 : 0,
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

          {/* Right: Analytics dashboard illustration */}
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
                src={getImagePath('/assets/hero/light-feature3.webp', imageSet)}
                width="1328"
                height="727"
                alt="Adapty Analytics Dashboard - real-time revenue tracking for app owners"
                className="block w-full dark:hidden"
              />
              <Image
                priority
                quality={100}
                src={getImagePath('/assets/hero/dark-feature3.webp', imageSet)}
                width="1328"
                height="727"
                alt="Adapty Analytics Dashboard - real-time revenue tracking for app owners"
                className="hidden w-full dark:block"
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

          {/* Checklist items */}
          <BlurFade delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {CHECKLIST_ITEMS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2 text-sm"
                >
                  <CheckIcon className="size-4 text-primary" />
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
                src={getImagePath('/assets/hero/light-feature3.webp', imageSet)}
                width="1328"
                height="727"
                alt="Adapty Analytics Dashboard"
                className="block w-full dark:hidden"
              />
              <Image
                priority
                quality={100}
                src={getImagePath('/assets/hero/dark-feature3.webp', imageSet)}
                width="1328"
                height="727"
                alt="Adapty Analytics Dashboard"
                className="hidden w-full dark:block"
              />
            </motion.div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}

// Animated counter component
function AnimatedCounter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }): React.JSX.Element {
  const [count, setCount] = React.useState(0);
  const shouldReduceMotion = useReducedMotion();
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    if (shouldReduceMotion || hasAnimated) {
      setCount(value);
      return;
    }

    const startTime = Date.now();
    const endValue = value;
    const animDuration = duration * 1000;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / animDuration, 1);

      // Ease out quad
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      const currentValue = Math.floor(easeProgress * endValue);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setHasAnimated(true);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration, shouldReduceMotion, hasAnimated]);

  return (
    <span className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

// Variant 3: Metrics focus - animated stats and growth metrics
function MetricsHero(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState<'demo' | 'start' | null>(null);
  const [hoveredStat, setHoveredStat] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={900} />
      <div className="container py-20 sm:py-24 md:py-32 relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Content */}
          <div className="flex flex-col gap-6">
            <BlurFade delay={0.05}>
              <Badge variant="outline" className="w-fit rounded-full px-4 py-1.5 gap-2">
                <ZapIcon className="size-3" />
                {HERO_CONTENT.badge}
              </Badge>
            </BlurFade>

            <BlurFade delay={0.1}>
              <h1 className="text-left text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.08]">
                {HERO_CONTENT.title}
              </h1>
            </BlurFade>

            <BlurFade delay={0.15}>
              <p className="max-w-xl text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
                {HERO_CONTENT.description}
              </p>
            </BlurFade>

            {/* CTAs */}
            <BlurFade delay={0.2}>
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

          {/* Right: Animated stats grid */}
          <BlurFade delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {ANIMATED_STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.08, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.03, y: -4 }}
                  className={cn(
                    "relative overflow-hidden rounded-2xl border bg-background/80 backdrop-blur-sm p-6 cursor-default transition-colors duration-200",
                    hoveredStat === index ? "border-primary/50 shadow-lg" : "border-border/50"
                  )}
                >
                  {/* Gradient background on hover */}
                  <AnimatePresence>
                    {hoveredStat === index && !shouldReduceMotion && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
                      />
                    )}
                  </AnimatePresence>

                  <div className="relative z-10">
                    <div className={cn("text-4xl sm:text-5xl font-bold mb-2", stat.color)}>
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={1.5 + index * 0.3} />
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className={cn(
                    "absolute -right-4 -top-4 size-16 rounded-full opacity-10",
                    stat.color.replace('text-', 'bg-')
                  )} />
                </motion.div>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}

export function ForAppOwnersHero({ variant = 'split' }: Props): React.JSX.Element {
  switch (variant) {
    case 'centered':
      return <CenteredHero />;
    case 'metrics':
      return <MetricsHero />;
    case 'split':
    default:
      return <SplitHero />;
  }
}
