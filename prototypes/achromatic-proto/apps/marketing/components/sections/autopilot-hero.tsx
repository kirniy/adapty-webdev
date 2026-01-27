'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BrainCircuitIcon, TrendingUpIcon, ZapIcon, SparklesIcon, CheckIcon, BarChart3Icon, RocketIcon, ArrowUpIcon, ArrowRightIcon } from 'lucide-react';
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

// Magic animation: AI optimization progress
function AIOptimizationMagic() {
 const shouldReduceMotion = useReducedMotion();
 const [step, setStep] = React.useState(0);

 const steps = [
 { label: 'Analyzing paywalls...', progress: 30 },
 { label: 'Running experiments...', progress: 60 },
 { label: 'Optimizing...', progress: 90 },
 { label: 'Revenue +80%', progress: 100 },
 ];

 React.useEffect(() => {
 if (shouldReduceMotion) return;
 const interval = setInterval(() => {
 setStep((prev) => (prev + 1) % steps.length);
 }, 1800);
 return () => clearInterval(interval);
 }, [shouldReduceMotion, steps.length]);

 return (
 <div className="absolute top-4 right-4 z-10">
 <motion.div
 initial={{ opacity: 0, scale: 0.9 }}
 animate={{ opacity: 1, scale: 1 }}
 className="rounded-lg bg-background/95 backdrop-blur-sm border px-3 py-2 w-40"
 >
 <div className="flex items-center gap-2 mb-1.5">
 <motion.div
 animate={shouldReduceMotion ? undefined : { rotate: 360 }}
 transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
 >
 <BrainCircuitIcon className="size-3 text-primary" />
 </motion.div>
 <span className="text-[10px] font-medium text-muted-foreground">AI Autopilot</span>
 </div>
 <AnimatePresence mode="wait">
 <motion.div
 key={step}
 initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 5 }}
 animate={{ opacity: 1, y: 0 }}
 exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -5 }}
 transition={{ duration: 0.2 }}
 >
 <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden mb-1">
 <motion.div
 initial={{ width: 0 }}
 animate={{ width: `${steps[step].progress}%` }}
 transition={{ duration: 0.5, ease: 'easeOut' }}
 className={cn(
 "h-full rounded-full",
 step === 3 ? "bg-primary" : "bg-muted"
 )}
 />
 </div>
 <p className={cn(
 "text-[10px] font-medium",
 step === 3 ? "text-primary" : "text-muted-foreground"
 )}>
 {steps[step].label}
 </p>
 </motion.div>
 </AnimatePresence>
 </motion.div>
 </div>
 );
}

// Magic animation: Revenue boost badge
function RevenueBoostMagic() {
 const shouldReduceMotion = useReducedMotion();
 const [boost, setBoost] = React.useState(0);
 const targetBoost = 80;

 React.useEffect(() => {
 if (shouldReduceMotion) {
 setBoost(targetBoost);
 return;
 }
 const timeout = setTimeout(() => {
 const duration = 1500;
 const steps = 50;
 const increment = targetBoost / steps;
 let current = 0;
 const interval = setInterval(() => {
 current += increment;
 if (current >= targetBoost) {
 setBoost(targetBoost);
 clearInterval(interval);
 } else {
 setBoost(Math.floor(current));
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
 <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center">
 <ArrowUpIcon className="size-3 text-primary" />
 </div>
 <div className="text-left">
 <p className="text-sm font-bold text-primary">+{boost}%</p>
 <p className="text-[10px] text-muted-foreground">Revenue boost</p>
 </div>
 </motion.div>
 </div>
 );
}

// =============================================================================
// SHARED CONTENT
// =============================================================================

const HERO_CONTENT = {
 badge: 'Revenue on Autopilot',
 title: 'Boost your app revenue by up to 80% with Adapty Autopilot',
 description: 'Run winning paywall experiments powered by insights from thousands of A/B tests. Our AI learns from the best-performing paywalls to optimize yours automatically.',
 primaryCta: 'Get a free audit',
 primaryCtaLink: '/schedule-demo',
 secondaryCta: 'Try Autopilot for free',
 secondaryCtaLink: 'https://app.adapty.io/registration',
};

const BENEFITS = [
 { icon: BrainCircuitIcon, text: 'AI-powered optimization' },
 { icon: TrendingUpIcon, text: 'Up to 80% revenue boost' },
 { icon: ZapIcon, text: 'Automated experiments' },
 { icon: SparklesIcon, text: 'Learn from 1000s of tests' },
];

const STATS = [
 { value: '+80%', label: 'Revenue boost', color: 'text-emerald-500' },
 { value: '15K+', label: 'Apps using Adapty', color: 'text-blue-500' },
 { value: '3x', label: 'More winning tests', color: 'text-purple-500' },
];

const CHECKLIST = [
 'AI analyzes your performance metrics',
 'Get benchmarks against competitors',
 'Receive personalized growth plan',
 'Launch optimized experiments instantly',
];

// Helper to get image path based on selected image set
function getImagePath(basePath: string, imageSet: ImageSetVariant): string {
 return basePath.replace('/assets/hero/', `/assets/hero/${imageSet}/`);
}

// =============================================================================
// VARIANT: SPLIT - Split layout with content left, image right (default)
// =============================================================================
function SplitHero() {
 const shouldReduceMotion = useReducedMotion();
 const imageSet = useImageSetVariant();
 const monochromeMode = useMonochromeMode();
 const [isHovered, setIsHovered] = React.useState<'audit' | 'try' | null>(null);
 const [hoveredBenefit, setHoveredBenefit] = React.useState<number | null>(null);

 return (
 <GridSection className="relative overflow-hidden">
 <SectionBackground height={800} />
 <div className="container py-16 sm:py-20 md:py-24 relative z-10">
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
 <SparklesIcon className="mr-1.5 size-3" />
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

 {/* Benefits grid with hover animations */}
 <BlurFade delay={0.2}>
 <div className="grid grid-cols-2 gap-4">
 {BENEFITS.map((benefit, index) => (
 <motion.div
 key={index}
 onMouseEnter={() => setHoveredBenefit(index)}
 onMouseLeave={() => setHoveredBenefit(null)}
 animate={shouldReduceMotion ? undefined : {
 scale: hoveredBenefit === index ? 1.02 : 1,
 }}
 transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
 className="flex items-center gap-3 text-sm text-muted-foreground rounded-lg p-2 -m-2 transition-colors hover:bg-muted/50"
 >
 <motion.div
 animate={shouldReduceMotion ? undefined : {
 scale: hoveredBenefit === index ? 1.1 : 1,
 rotate: hoveredBenefit === index ? 5 : 0,
 }}
 transition={{ type: 'spring', duration: 0.2, bounce: 0.3 }}
 className="flex size-8 items-center justify-center rounded-lg bg-primary/10"
 >
 <benefit.icon className="size-4 text-primary" />
 </motion.div>
 {benefit.text}
 </motion.div>
 ))}
 </div>
 </BlurFade>

 <BlurFade delay={0.25}>
 <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
 <motion.div
 onMouseEnter={() => setIsHovered('audit')}
 onMouseLeave={() => setIsHovered(null)}
 animate={{
 y: shouldReduceMotion ? 0 : isHovered === 'audit' ? -2 : 0,
 }}
 transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
 >
 <Link
 href={HERO_CONTENT.primaryCtaLink}
 className={cn(
 buttonVariants({ size: 'lg' }),
 'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
 )}
 >
 {HERO_CONTENT.primaryCta}
 <motion.span
 animate={shouldReduceMotion ? undefined : { x: isHovered === 'audit' ? 3 : 0 }}
 transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
 >
 <ArrowRightIcon className="ml-2 size-4" />
 </motion.span>
 </Link>
 </motion.div>

 <motion.div
 onMouseEnter={() => setIsHovered('try')}
 onMouseLeave={() => setIsHovered(null)}
 animate={{
 y: shouldReduceMotion ? 0 : isHovered === 'try' ? -2 : 0,
 }}
 transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
 >
 <Link
 href={HERO_CONTENT.secondaryCtaLink}
 target="_blank"
 rel="noopener noreferrer"
 className={cn(
 buttonVariants({ variant: 'outline', size: 'lg' }),
 'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
 )}
 >
 {HERO_CONTENT.secondaryCta}
 </Link>
 </motion.div>
 </div>
 </BlurFade>
 </div>

 {/* Right: Dashboard image */}
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
 <AIOptimizationMagic />
 <RevenueBoostMagic />
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
 src={getImagePath('/assets/hero/light-feature2.webp', imageSet)}
 width="1328"
 height="727"
 alt="Adapty Autopilot - AI-powered paywall optimization"
 className="block w-full dark:hidden"
 />
 <Image
 priority
 quality={100}
 src={getImagePath('/assets/hero/dark-feature2.webp', imageSet)}
 width="1328"
 height="727"
 alt="Adapty Autopilot - AI-powered paywall optimization"
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
// VARIANT: CENTERED - Centered layout with checklist and stats
// =============================================================================
function CenteredHero() {
 const shouldReduceMotion = useReducedMotion();
 const imageSet = useImageSetVariant();
 const monochromeMode = useMonochromeMode();
 const [isHovered, setIsHovered] = React.useState<'audit' | 'try' | null>(null);
 const [hoveredCheck, setHoveredCheck] = React.useState<number | null>(null);

 return (
 <GridSection className="relative overflow-hidden">
 <SectionBackground height={900} />
 <div className="container py-16 sm:py-20 md:py-24 relative z-10">
 <div className="mx-auto max-w-4xl text-center">
 <BlurFade delay={0.05}>
 <Badge variant="outline" className="relative overflow-hidden rounded-full px-4 py-1.5 mb-6">
 <BorderBeam
 size={40}
 duration={4}
 borderWidth={1.5}
 colorFrom="#3b82f6"
 colorTo="#8b5cf6"
 />
 <SparklesIcon className="mr-1.5 size-3" />
 {HERO_CONTENT.badge}
 </Badge>
 </BlurFade>

 <BlurFade delay={0.1}>
 <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
 {HERO_CONTENT.title}
 </h1>
 </BlurFade>

 <BlurFade delay={0.15}>
 <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
 {HERO_CONTENT.description}
 </p>
 </BlurFade>

 {/* Checklist */}
 <BlurFade delay={0.2}>
 <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
 {CHECKLIST.map((item, index) => (
 <motion.div
 key={index}
 onMouseEnter={() => setHoveredCheck(index)}
 onMouseLeave={() => setHoveredCheck(null)}
 animate={shouldReduceMotion ? undefined : {
 scale: hoveredCheck === index ? 1.02 : 1,
 }}
 transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
 className="flex items-center gap-2 text-sm text-muted-foreground"
 >
 <motion.div
 animate={shouldReduceMotion ? undefined : {
 scale: hoveredCheck === index ? 1.2 : 1,
 }}
 transition={{ type: 'spring', duration: 0.2, bounce: 0.3 }}
 className="flex size-5 items-center justify-center rounded-full bg-primary/10"
 >
 <CheckIcon className="size-3 text-primary" />
 </motion.div>
 {item}
 </motion.div>
 ))}
 </div>
 </BlurFade>

 {/* CTAs */}
 <BlurFade delay={0.25}>
 <div className="mt-10 flex flex-wrap justify-center gap-4">
 <motion.div
 onMouseEnter={() => setIsHovered('audit')}
 onMouseLeave={() => setIsHovered(null)}
 animate={{
 y: shouldReduceMotion ? 0 : isHovered === 'audit' ? -2 : 0,
 }}
 transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
 >
 <Link
 href={HERO_CONTENT.primaryCtaLink}
 className={cn(
 buttonVariants({ size: 'lg' }),
 'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
 )}
 >
 {HERO_CONTENT.primaryCta}
 <motion.span
 animate={shouldReduceMotion ? undefined : { x: isHovered === 'audit' ? 3 : 0 }}
 transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
 >
 <ArrowRightIcon className="ml-2 size-4" />
 </motion.span>
 </Link>
 </motion.div>

 <motion.div
 onMouseEnter={() => setIsHovered('try')}
 onMouseLeave={() => setIsHovered(null)}
 animate={{
 y: shouldReduceMotion ? 0 : isHovered === 'try' ? -2 : 0,
 }}
 transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
 >
 <Link
 href={HERO_CONTENT.secondaryCtaLink}
 target="_blank"
 rel="noopener noreferrer"
 className={cn(
 buttonVariants({ variant: 'outline', size: 'lg' }),
 'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
 )}
 >
 {HERO_CONTENT.secondaryCta}
 </Link>
 </motion.div>
 </div>
 </BlurFade>

 {/* Dashboard image */}
 <BlurFade delay={0.3}>
 <motion.div
 initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
 animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
 transition={{ delay: 0.2, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
 className={cn(
 "mt-12 mx-auto max-w-5xl overflow-hidden rounded-xl border bg-background ",
 monochromeMode && "grayscale hover:grayscale-0 transition-[filter] duration-500"
 )}
 >
 <Image
 priority
 quality={100}
 src={getImagePath('/assets/hero/light-feature2.webp', imageSet)}
 width="1328"
 height="727"
 alt="Adapty Autopilot - AI-powered paywall optimization"
 className="block w-full dark:hidden"
 />
 <Image
 priority
 quality={100}
 src={getImagePath('/assets/hero/dark-feature2.webp', imageSet)}
 width="1328"
 height="727"
 alt="Adapty Autopilot - AI-powered paywall optimization"
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
// VARIANT: SHOWCASE - Stats-focused with animated counters and testimonial
// =============================================================================
function ShowcaseHero() {
 const shouldReduceMotion = useReducedMotion();
 const imageSet = useImageSetVariant();
 const monochromeMode = useMonochromeMode();
 const [isHovered, setIsHovered] = React.useState<'audit' | 'try' | null>(null);
 const [hoveredStat, setHoveredStat] = React.useState<number | null>(null);

 return (
 <GridSection className="relative overflow-hidden">
 <SectionBackground height={850} />
 <div className="container py-16 sm:py-20 md:py-24 relative z-10">
 <div className="mx-auto max-w-4xl text-center">
 <BlurFade delay={0.05}>
 <Badge variant="outline" className="relative overflow-hidden rounded-full px-4 py-1.5 mb-6">
 <BorderBeam
 size={40}
 duration={4}
 borderWidth={1.5}
 colorFrom="#3b82f6"
 colorTo="#8b5cf6"
 />
 <SparklesIcon className="mr-1.5 size-3" />
 {HERO_CONTENT.badge}
 </Badge>
 </BlurFade>

 <BlurFade delay={0.1}>
 <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
 {HERO_CONTENT.title}
 </h1>
 </BlurFade>

 <BlurFade delay={0.15}>
 <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
 {HERO_CONTENT.description}
 </p>
 </BlurFade>

 {/* Stats row */}
 <BlurFade delay={0.2}>
 <div className="mt-10 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
 {STATS.map((stat, index) => (
 <motion.div
 key={index}
 onMouseEnter={() => setHoveredStat(index)}
 onMouseLeave={() => setHoveredStat(null)}
 animate={shouldReduceMotion ? undefined : {
 scale: hoveredStat === index ? 1.05 : 1,
 y: hoveredStat === index ? -4 : 0,
 }}
 transition={{ type: 'spring', duration: 0.25, bounce: 0.2 }}
 className="rounded-xl border bg-card/50 p-4 cursor-default"
 >
 <motion.div
 animate={shouldReduceMotion ? undefined : {
 scale: hoveredStat === index ? 1.1 : 1,
 }}
 transition={{ type: 'spring', duration: 0.2 }}
 className={cn("text-3xl font-bold", stat.color)}
 >
 {stat.value}
 </motion.div>
 <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
 </motion.div>
 ))}
 </div>
 </BlurFade>

 {/* CTAs */}
 <BlurFade delay={0.25}>
 <div className="mt-10 flex flex-wrap justify-center gap-4">
 <motion.div
 onMouseEnter={() => setIsHovered('audit')}
 onMouseLeave={() => setIsHovered(null)}
 animate={{
 y: shouldReduceMotion ? 0 : isHovered === 'audit' ? -2 : 0,
 }}
 transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
 >
 <Link
 href={HERO_CONTENT.primaryCtaLink}
 className={cn(
 buttonVariants({ size: 'lg' }),
 'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
 )}
 >
 {HERO_CONTENT.primaryCta}
 <motion.span
 animate={shouldReduceMotion ? undefined : { x: isHovered === 'audit' ? 3 : 0 }}
 transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
 >
 <ArrowRightIcon className="ml-2 size-4" />
 </motion.span>
 </Link>
 </motion.div>

 <motion.div
 onMouseEnter={() => setIsHovered('try')}
 onMouseLeave={() => setIsHovered(null)}
 animate={{
 y: shouldReduceMotion ? 0 : isHovered === 'try' ? -2 : 0,
 }}
 transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
 >
 <Link
 href={HERO_CONTENT.secondaryCtaLink}
 target="_blank"
 rel="noopener noreferrer"
 className={cn(
 buttonVariants({ variant: 'outline', size: 'lg' }),
 'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
 )}
 >
 {HERO_CONTENT.secondaryCta}
 </Link>
 </motion.div>
 </div>
 </BlurFade>

 {/* Testimonial quote */}
 <BlurFade delay={0.3}>
 <div className="mt-10 mx-auto max-w-xl">
 <blockquote className="text-muted-foreground italic">
 "Autopilot suggested experiments we never would have thought of. Our MRR grew 30% in the first month."
 </blockquote>
 <div className="mt-3 text-sm font-medium">
 - Product Manager, Health & Fitness App
 </div>
 </div>
 </BlurFade>

 {/* Dashboard image */}
 <BlurFade delay={0.35}>
 <motion.div
 initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
 animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
 transition={{ delay: 0.2, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
 className={cn(
 "mt-10 mx-auto max-w-5xl overflow-hidden rounded-xl border bg-background ",
 monochromeMode && "grayscale hover:grayscale-0 transition-[filter] duration-500"
 )}
 >
 <Image
 priority
 quality={100}
 src={getImagePath('/assets/hero/light-feature2.webp', imageSet)}
 width="1328"
 height="727"
 alt="Adapty Autopilot - AI-powered paywall optimization"
 className="block w-full dark:hidden"
 />
 <Image
 priority
 quality={100}
 src={getImagePath('/assets/hero/dark-feature2.webp', imageSet)}
 width="1328"
 height="727"
 alt="Adapty Autopilot - AI-powered paywall optimization"
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
// MAIN EXPORT
// =============================================================================
export type AutopilotHeroVariant = 'split' | 'centered' | 'showcase';
export const AUTOPILOT_HERO_VARIANTS = ['split', 'centered', 'showcase'] as const;

type Props = {
 variant?: AutopilotHeroVariant;
};

export function AutopilotHero({ variant = 'split' }: Props): React.JSX.Element {
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
