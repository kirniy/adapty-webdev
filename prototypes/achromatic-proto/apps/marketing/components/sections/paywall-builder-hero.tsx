'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRightIcon,
  MousePointerClickIcon,
  PaletteIcon,
  RocketIcon,
  SparklesIcon,
  PlayIcon,
  CheckIcon
} from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence, useInView, useMotionValue, useSpring, useTransform } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { SectionBackground } from '~/components/fragments/section-background';
import { GridSection } from '~/components/fragments/grid-section';
import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { useImageSetVariant, useMonochromeMode, type ImageSetVariant } from '~/lib/debug-context';
import { paywallBuilderContent } from '~/lib/content';

// Animation constants following Emil Kowalski principles
const EASE_OUT_QUART = [0.165, 0.84, 0.44, 1] as const;
const EASE_OUT_EXPO = [0.19, 1, 0.22, 1] as const;

// Content from centralized content file
// Icon mapping
// Map string icons to Lucide components
const ICON_MAP: Record<string, React.ElementType> = {
  MousePointerClick: MousePointerClickIcon,
  Palette: PaletteIcon,
  Rocket: RocketIcon,
  Sparkles: SparklesIcon,
  Check: CheckIcon,
};

const BENEFITS = paywallBuilderContent.hero.benefits.map(b => ({
  ...b,
  icon: ICON_MAP[b.icon] || SparklesIcon
}));

const STATS = paywallBuilderContent.stats;

const CHECKLIST = paywallBuilderContent.hero.checklist;

function getImagePath(basePath: string, imageSet: ImageSetVariant): string {
  return basePath.replace('/assets/hero/', `/assets/hero/${imageSet}/`);
}

// Animated number counter component
function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      setCount(value);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Ease out quart for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration, shouldReduceMotion]);

  // Format number with proper display
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(0)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toString();
  };

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
}

// Stat card with hover effect
function StatCard({ stat, index }: { stat: typeof STATS[0]; index: number }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.05, duration: 0.2, ease: EASE_OUT_QUART }}
      className="text-left cursor-default"
    >
      <motion.p
        animate={shouldReduceMotion ? undefined : { scale: isHovered ? 1.05 : 1 }}
        transition={{ type: 'spring', duration: 0.2, bounce: 0.2 }}
        className="text-xl font-bold text-foreground"
      >
        {stat.value}
      </motion.p>
      <p className="text-xs text-muted-foreground">{stat.label}</p>
    </motion.div>
  );
}

// Benefit item with icon animation
function BenefitItem({ benefit, index }: { benefit: typeof BENEFITS[0]; index: number }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();
  const Icon = benefit.icon;

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -10 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
      transition={{ delay: 0.15 + index * 0.05, duration: 0.2, ease: EASE_OUT_QUART }}
      className="flex items-center gap-3 text-sm text-muted-foreground cursor-default group"
    >
      <motion.div
        animate={shouldReduceMotion ? undefined : {
          scale: isHovered ? 1.1 : 1,
          rotate: isHovered ? 5 : 0,
        }}
        transition={{ type: 'spring', duration: 0.25, bounce: 0.3 }}
        className="flex size-8 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors"
      >
        <Icon className="size-4 text-primary" />
      </motion.div>
      <span className="group-hover:text-foreground transition-colors">{benefit.text}</span>
    </motion.div>
  );
}

// Hero button with glow effect (BLACK for primary, following monochrome philosophy)
function HeroButton({
  href,
  variant = 'default',
  children,
  external = false,
}: {
  href: string;
  variant?: 'default' | 'outline';
  children: React.ReactNode;
  external?: boolean;
}) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      animate={{
        y: shouldReduceMotion ? 0 : isPressed ? 1 : isHovered ? -2 : 0,
        scale: shouldReduceMotion ? 1 : isPressed ? 0.97 : 1,
      }}
      transition={{ type: 'spring', duration: 0.15, bounce: 0 }}
      className="relative"
    >
      {/* Glow effect for primary button */}
      {variant === 'default' && (
        <motion.div
          className="absolute inset-0 -z-10 rounded-xl bg-foreground/20 blur-lg"
          animate={{
            opacity: isHovered ? 0.6 : 0,
            scale: isHovered ? 1.15 : 1,
          }}
          transition={{ duration: 0.25 }}
        />
      )}
      <Link
        href={href}
        {...linkProps}
        className={cn(
          buttonVariants({ variant, size: 'lg' }),
          'rounded-xl px-6 transition-all duration-150',
          // PRIMARY BUTTON: Black background (monochrome philosophy)
          variant === 'default' && 'bg-foreground text-background hover:bg-foreground/90 shadow-md hover:shadow-lg',
          // SECONDARY BUTTON: Outline style
          variant === 'outline' && 'hover:bg-muted/50'
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}

// =============================================================================
// VARIANT: SPLIT - Text left, image right (default)
// =============================================================================
// =============================================================================
// VARIANT: SPLIT - Text left, image right (default)
// =============================================================================
function SplitHero() {
  const shouldReduceMotion = useReducedMotion();
  const imageSet = useImageSetVariant();
  const monochromeMode = useMonochromeMode();

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

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
                className="group relative w-fit overflow-hidden rounded-full px-4 py-1.5 cursor-default"
              >
                <BorderBeam
                  size={40}
                  duration={4}
                  borderWidth={1.5}
                  colorFrom="#3b82f6"
                  colorTo="#8b5cf6"
                />
                <span className="relative z-10">{paywallBuilderContent.hero.badge}</span>
              </Badge>
            </BlurFade>

            <BlurFade delay={0.1}>
              <h1 className="text-left text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.1]">
                {paywallBuilderContent.hero.headline}
              </h1>
            </BlurFade>

            <BlurFade delay={0.15}>
              <p className="max-w-xl text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
                {paywallBuilderContent.hero.description}
              </p>
            </BlurFade>

            <BlurFade delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {BENEFITS.map((benefit, index) => (
                  <BenefitItem key={index} benefit={benefit} index={index} />
                ))}
              </div>
            </BlurFade>

            <BlurFade delay={0.25}>
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                <HeroButton href={paywallBuilderContent.hero.primaryCtaHref} variant="default">
                  {paywallBuilderContent.hero.primaryCta}
                  <ArrowRightIcon className="ml-2 size-4" />
                </HeroButton>
                <HeroButton href={paywallBuilderContent.hero.secondaryCtaHref} variant="outline" external>
                  {paywallBuilderContent.hero.secondaryCta}
                </HeroButton>
              </div>
            </BlurFade>

            <BlurFade delay={0.3}>
              <div className="flex flex-wrap gap-6 pt-4 border-t">
                {STATS.map((stat, index) => (
                  <StatCard key={index} stat={stat} index={index} />
                ))}
              </div>
            </BlurFade>
          </div>

          {/* Right: Screenshot with 3D Tilt */}
          <BlurFade delay={0.2}>
            <motion.div
              style={shouldReduceMotion ? undefined : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 20 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4, ease: EASE_OUT_EXPO }}
              className="relative perspective-1000"
            >
              {/* Shadow layer */}
              <motion.div
                style={{
                  transform: "translateZ(-20px)",
                }}
                className="absolute inset-0 top-8 rounded-xl bg-foreground/10 blur-2xl -z-10 transform-gpu"
              />

              <div
                className={cn(
                  "relative w-full overflow-hidden rounded-xl border bg-background shadow-lg transition-all duration-300",
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

                {/* Glossy reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
              </div>
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
  const [imageHovered, setImageHovered] = React.useState(false);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={900} />
      <div className="container py-16 sm:py-20 md:py-24 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <BlurFade delay={0.05}>
            <Badge
              variant="outline"
              className="group relative mx-auto overflow-hidden rounded-full px-4 py-1.5 cursor-default"
            >
              <BorderBeam
                size={40}
                duration={4}
                borderWidth={1.5}
                colorFrom="#3b82f6"
                colorTo="#8b5cf6"
              />
              <span className="relative z-10">{paywallBuilderContent.hero.badge}</span>
            </Badge>
          </BlurFade>

          <BlurFade delay={0.1}>
            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {paywallBuilderContent.hero.headline}
            </h1>
          </BlurFade>

          <BlurFade delay={0.15}>
            <p className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {paywallBuilderContent.hero.description}
            </p>
          </BlurFade>

          <BlurFade delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <HeroButton href={paywallBuilderContent.hero.primaryCtaHref} variant="default">
                {paywallBuilderContent.hero.primaryCta}
                <ArrowRightIcon className="ml-2 size-4" />
              </HeroButton>
              <HeroButton href={paywallBuilderContent.hero.secondaryCtaHref} variant="outline" external>
                {paywallBuilderContent.hero.secondaryCta}
              </HeroButton>
            </div>
          </BlurFade>

          {/* Stats row */}
          <BlurFade delay={0.25}>
            <div className="mt-12 flex flex-wrap justify-center gap-8 border-t pt-8">
              {STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.2, ease: EASE_OUT_QUART }}
                  className="text-center"
                >
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </BlurFade>
        </div>

        {/* Large screenshot below */}
        <BlurFade delay={0.3}>
          <motion.div
            onMouseEnter={() => setImageHovered(true)}
            onMouseLeave={() => setImageHovered(false)}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.95 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: EASE_OUT_EXPO }}
            className="relative mt-16 mx-auto max-w-6xl"
          >
            {/* Shadow layer */}
            <motion.div
              animate={{
                y: imageHovered ? 12 : 6,
                opacity: imageHovered ? 0.2 : 0.1,
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 rounded-xl bg-foreground blur-2xl -z-10"
            />

            <motion.div
              animate={shouldReduceMotion ? undefined : {
                y: imageHovered ? -6 : 0,
              }}
              transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
              className={cn(
                "overflow-hidden rounded-xl border bg-background shadow-2xl transition-shadow",
                imageHovered && "shadow-[0_32px_64px_-16px_rgba(0,0,0,0.25)]",
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
            </motion.div>
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
            <Badge
              variant="outline"
              className="group relative mx-auto overflow-hidden rounded-full px-4 py-1.5 cursor-default"
            >
              <BorderBeam
                size={40}
                duration={4}
                borderWidth={1.5}
                colorFrom="#3b82f6"
                colorTo="#8b5cf6"
              />
              <span className="relative z-10">{paywallBuilderContent.hero.badge}</span>
            </Badge>
          </BlurFade>

          <BlurFade delay={0.1}>
            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {paywallBuilderContent.hero.headline}
            </h1>
          </BlurFade>

          <BlurFade delay={0.15}>
            <p className="mt-4 mx-auto max-w-xl text-base leading-relaxed text-muted-foreground">
              {paywallBuilderContent.hero.description}
            </p>
          </BlurFade>
        </div>

        {/* Main: Large interactive preview */}
        <BlurFade delay={0.2}>
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.96 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4, ease: EASE_OUT_EXPO }}
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
                    className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] transition-colors hover:bg-black/30 cursor-pointer"
                  >
                    <motion.div
                      animate={shouldReduceMotion ? undefined : {
                        scale: isHovered === 'play' ? 1.1 : 1,
                        boxShadow: isHovered === 'play'
                          ? '0 20px 40px -10px rgba(0,0,0,0.3)'
                          : '0 10px 20px -5px rgba(0,0,0,0.2)',
                      }}
                      transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
                      className="flex size-20 items-center justify-center rounded-full bg-white shadow-lg"
                    >
                      <PlayIcon className="size-8 text-foreground ml-1" />
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
                    transition={{ delay: 0.35 + index * 0.05, duration: 0.2, ease: EASE_OUT_QUART }}
                    className="flex items-center gap-3 text-sm text-muted-foreground group cursor-default"
                  >
                    <motion.div
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
                      className="flex size-5 items-center justify-center rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors"
                    >
                      <CheckIcon className="size-3 text-green-600 dark:text-green-400" />
                    </motion.div>
                    <span className="group-hover:text-foreground transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                <HeroButton href={paywallBuilderContent.hero.primaryCtaHref} variant="default">
                  {paywallBuilderContent.hero.primaryCta}
                  <ArrowRightIcon className="ml-2 size-4" />
                </HeroButton>
                <HeroButton href={paywallBuilderContent.hero.secondaryCtaHref} variant="outline" external>
                  {paywallBuilderContent.hero.secondaryCta}
                </HeroButton>
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
export type PaywallBuilderHeroVariant = 'split' | 'centered' | 'showcase';

type Props = {
  variant?: PaywallBuilderHeroVariant;
};

export function PaywallBuilderHero({ variant = 'split' }: Props): React.JSX.Element {
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
