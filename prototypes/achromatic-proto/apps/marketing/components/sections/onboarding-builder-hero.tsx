'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, MousePointerClickIcon, FlaskConicalIcon, RefreshCwIcon, ZapIcon, CheckIcon, PlayIcon } from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { SectionBackground } from '~/components/fragments/section-background';
import { GridSection } from '~/components/fragments/grid-section';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { useImageSetVariant, useMonochromeMode, type ImageSetVariant } from '~/lib/debug-context';

// EXACT content from adapty.io/onboarding-builder (scraped 2026-01-21)
const HERO_CONTENT = {
  badge: 'Onboarding Builder',
  title: 'Build and publish onboardings that are proven to convert',
  description: "Update flows, run A/B tests, and optimize conversion - all without an app update, a design ticket, or a single line of code. Ship changes in minutes, not weeks.",
};

// Key benefits for onboarding builder
const BENEFITS = [
  { icon: MousePointerClickIcon, text: 'No-code visual editor' },
  { icon: FlaskConicalIcon, text: 'A/B test onboarding flows' },
  { icon: RefreshCwIcon, text: 'Update without app release' },
  { icon: ZapIcon, text: 'Deploy in minutes' },
];

// Stats for showcase variant
const STATS = [
  { value: '50%', label: 'Revenue growth', color: 'text-green-500' },
  { value: '102%', label: 'ARPU increase', color: 'text-blue-500' },
  { value: '30%', label: 'Conversion boost', color: 'text-purple-500' },
];

// Checklist for centered variant
const CHECKLIST = [
  'Visual drag-and-drop editor',
  'Personalized user journeys',
  'Real-time A/B testing',
  'No engineering required',
];

// Helper to get image path based on selected image set
function getImagePath(basePath: string, imageSet: ImageSetVariant): string {
  return basePath.replace('/assets/hero/', `/assets/hero/${imageSet}/`);
}

export type OnboardingBuilderHeroVariant = 'split' | 'centered' | 'showcase';

export const ONBOARDING_BUILDER_HERO_VARIANTS = ['split', 'centered', 'showcase'] as const;

type Props = {
  variant?: OnboardingBuilderHeroVariant;
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

          {/* Right: Onboarding Builder screenshot */}
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
                alt="Adapty Onboarding Builder - visual no-code editor"
                className="block w-full dark:hidden"
              />
              <Image
                priority
                quality={100}
                src={getImagePath('/assets/hero/dark-feature1.webp', imageSet)}
                width="1328"
                height="727"
                alt="Adapty Onboarding Builder - visual no-code editor"
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
                  className={cn(buttonVariants({ size: 'lg' }), 'rounded-xl px-8')}
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
                  className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'rounded-xl px-8')}
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
                alt="Adapty Onboarding Builder"
                className="block w-full dark:hidden"
              />
              <Image
                priority
                quality={100}
                src={getImagePath('/assets/hero/dark-feature1.webp', imageSet)}
                width="1328"
                height="727"
                alt="Adapty Onboarding Builder"
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
                  hoveredStat === index ? "border-primary/50 shadow-lg" : "border-border/50"
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
              "relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl border-2 bg-background shadow-2xl",
              monochromeMode && "grayscale hover:grayscale-0 transition-[filter] duration-500"
            )}
          >
            <Image
              priority
              quality={100}
              src={getImagePath('/assets/hero/light-feature1.webp', imageSet)}
              width="1328"
              height="727"
              alt="Adapty Onboarding Builder"
              className="block w-full dark:hidden"
            />
            <Image
              priority
              quality={100}
              src={getImagePath('/assets/hero/dark-feature1.webp', imageSet)}
              width="1328"
              height="727"
              alt="Adapty Onboarding Builder"
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
export function OnboardingBuilderHero({ variant = 'split' }: Props): React.JSX.Element {
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
