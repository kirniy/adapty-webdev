'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RocketIcon, CreditCardIcon, ClockIcon, HeartIcon, SparklesIcon, CheckIcon, ZapIcon, ArrowRightIcon } from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { buttonVariants } from '@workspace/ui/components/button';
import { Card, CardContent } from '@workspace/ui/components/card';
import { cn } from '@workspace/ui/lib/utils';

import { SectionBackground } from '~/components/fragments/section-background';
import { GridSection } from '~/components/fragments/grid-section';
import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { Spotlight } from '~/components/fragments/spotlight';

// =============================================================================
// MAGIC ANIMATIONS
// =============================================================================

// Magic animation: MRR growth counter
function MRRGrowthMagic() {
 const shouldReduceMotion = useReducedMotion();
 const [mrr, setMrr] = React.useState(0);
 const targetMrr = 10;

 React.useEffect(() => {
 if (shouldReduceMotion) {
 setMrr(targetMrr);
 return;
 }
 const duration = 2000;
 const steps = 20;
 const stepValue = targetMrr / steps;
 let current = 0;
 const interval = setInterval(() => {
 current += stepValue;
 if (current >= targetMrr) {
 setMrr(targetMrr);
 clearInterval(interval);
 } else {
 setMrr(Math.floor(current));
 }
 }, duration / steps);
 return () => clearInterval(interval);
 }, [shouldReduceMotion]);

 return (
 <div className="absolute top-4 right-4 flex items-center gap-2 rounded-lg border bg-background/95 px-3 py-2 backdrop-blur-sm">
 <RocketIcon className="size-4 text-primary" />
 <div className="flex flex-col">
 <motion.span
 className="text-lg font-bold tabular-nums"
 key={mrr}
 initial={shouldReduceMotion ? undefined : { scale: 1.1 }}
 animate={{ scale: 1 }}
 transition={{ type: 'spring', stiffness: 300, damping: 20 }}
 >
 ${mrr}K
 </motion.span>
 <span className="text-[10px] text-muted-foreground">MRR milestone</span>
 </div>
 </div>
 );
}

// Magic animation: Setup time counter
function SetupTimeMagic() {
 const shouldReduceMotion = useReducedMotion();
 const [minutes, setMinutes] = React.useState(0);
 const targetMinutes = 10;

 React.useEffect(() => {
 if (shouldReduceMotion) {
 setMinutes(targetMinutes);
 return;
 }
 const duration = 1500;
 const steps = 20;
 const stepValue = targetMinutes / steps;
 let current = 0;
 const interval = setInterval(() => {
 current += stepValue;
 if (current >= targetMinutes) {
 setMinutes(targetMinutes);
 clearInterval(interval);
 } else {
 setMinutes(Math.floor(current));
 }
 }, duration / steps);
 return () => clearInterval(interval);
 }, [shouldReduceMotion]);

 return (
 <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg border bg-background/95 px-3 py-2 backdrop-blur-sm">
 <ClockIcon className="size-4 text-primary" />
 <div className="flex flex-col">
 <motion.span
 className="text-lg font-bold tabular-nums text-primary"
 key={minutes}
 initial={shouldReduceMotion ? undefined : { scale: 1.1 }}
 animate={{ scale: 1 }}
 transition={{ type: 'spring', stiffness: 300, damping: 20 }}
 >
 {minutes} min
 </motion.span>
 <span className="text-[10px] text-muted-foreground">to integrate</span>
 </div>
 </div>
 );
}

// EXACT content from adapty.io/for-indie (scraped 2026-01-21)
// Badge: "For Indie"
// Title: "Scale your indie or pet project to a profitable app business"
// Description: "Whether starting with a single app, working alone, or with a small bootstrapped team - we've got you covered and will help you focus on your product, not the infrastructure."

// Key benefits for indie developers
const BENEFITS = [
 { icon: CreditCardIcon, text: 'Free tier for starters' },
 { icon: ClockIcon, text: 'Setup in under 10 minutes' },
 { icon: RocketIcon, text: 'Scale as you grow' },
 { icon: HeartIcon, text: 'Built by indie devs' },
];

// Startup plan features for startup variant
const STARTUP_PLAN_FEATURES = [
 '1 year free or 50% discount',
 'Full access to all features',
 'Priority support',
 'No credit card required',
 'Perfect for < $5K MRR',
];

// Rotating testimonials for centered variant
const INDIE_TESTIMONIALS = [
 { quote: "Adapty helped me go from side project to $10K MRR", author: "Solo iOS dev" },
 { quote: "Setup took 10 minutes, not days", author: "Indie Android dev" },
 { quote: "Finally, analytics I can actually understand", author: "Bootstrapped founder" },
];

// =============================================================================
// VARIANT: SPLIT - Text left, image right (default)
// =============================================================================
function SplitHero() {
 const shouldReduceMotion = useReducedMotion();
 const [isHovered, setIsHovered] = React.useState<'start' | 'demo' | null>(null);
 const [hoveredBenefit, setHoveredBenefit] = React.useState<number | null>(null);

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
 <SparklesIcon className="mr-1.5 size-3" />
 For indie developers
 </Badge>
 </BlurFade>

 <BlurFade delay={0.1}>
 <h1 className="text-left text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.1]">
 Scale your indie project to a{' '}
 <span className="text-primary">profitable app business</span>
 </h1>
 </BlurFade>

 <BlurFade delay={0.15}>
 <p className="max-w-xl text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
 Whether starting with a single app, working alone, or with a small bootstrapped team - we have got you covered. Focus on your product, not the infrastructure.
 </p>
 </BlurFade>

 {/* Benefits grid with hover effects */}
 <BlurFade delay={0.2}>
 <div className="grid grid-cols-2 gap-4">
 {BENEFITS.map((benefit, index) => (
 <motion.div
 key={index}
 onMouseEnter={() => setHoveredBenefit(index)}
 onMouseLeave={() => setHoveredBenefit(null)}
 animate={shouldReduceMotion ? undefined : {
 scale: hoveredBenefit === index ? 1.02 : 1,
 y: hoveredBenefit === index ? -2 : 0,
 }}
 transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
 className="flex items-center gap-3 text-sm text-muted-foreground cursor-default"
 >
 <motion.div
 animate={shouldReduceMotion ? undefined : {
 scale: hoveredBenefit === index ? 1.1 : 1,
 rotate: hoveredBenefit === index ? 5 : 0,
 }}
 transition={{ type: 'spring', duration: 0.2, bounce: 0.2 }}
 className={cn(
 "flex size-8 items-center justify-center rounded-lg transition-colors duration-150",
 hoveredBenefit === index ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
 )}
 >
 <benefit.icon className="size-4" />
 </motion.div>
 <span className={cn(
 "transition-colors duration-150",
 hoveredBenefit === index && "text-foreground"
 )}>
 {benefit.text}
 </span>
 </motion.div>
 ))}
 </div>
 </BlurFade>

 <BlurFade delay={0.25}>
 <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
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
 buttonVariants({ size: 'lg' }),
 'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
 )}
 >
 Start for free
 <motion.span
 animate={shouldReduceMotion ? undefined : { x: isHovered === 'start' ? 3 : 0 }}
 transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
 >
 <ArrowRightIcon className="ml-2 size-4" />
 </motion.span>
 </Link>
 </motion.div>

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
 buttonVariants({ variant: 'outline', size: 'lg' }),
 'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
 )}
 >
 Book a demo
 </Link>
 </motion.div>
 </div>
 </BlurFade>

 {/* Social proof */}
 <BlurFade delay={0.3}>
 <p className="text-sm text-muted-foreground">
 Join <span className="font-semibold text-foreground">15,000+</span> developers who use Adapty
 </p>
 </BlurFade>
 </div>

 {/* Right: SDK/Dashboard illustration */}
 <BlurFade delay={0.2}>
 <motion.div
 initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
 animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
 transition={{ delay: shouldReduceMotion ? 0 : 0.1, duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
 className="group relative w-full overflow-hidden rounded-xl border bg-background "
 >
 <Spotlight className="from-primary/20 via-purple-500/10 to-transparent" size={350} />
 <Image
 priority
 quality={100}
 src="/assets/hero/set1/light-feature4.webp"
 width="1328"
 height="727"
 alt="Adapty SDK integration - simple setup for indie developers"
 className="block w-full dark:hidden"
 />
 <Image
 priority
 quality={100}
 src="/assets/hero/set1/dark-feature4.webp"
 width="1328"
 height="727"
 alt="Adapty SDK integration - simple setup for indie developers"
 className="hidden w-full dark:block"
 />
 {/* Magic animations */}
 <MRRGrowthMagic />
 <SetupTimeMagic />
 </motion.div>
 </BlurFade>
 </div>
 </div>
 </GridSection>
 );
}

// =============================================================================
// VARIANT: CENTERED - Classic centered layout with rotating testimonials
// =============================================================================
function CenteredHero() {
 const shouldReduceMotion = useReducedMotion();
 const [isHovered, setIsHovered] = React.useState<'start' | 'demo' | null>(null);
 const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

 // Auto-rotate testimonials
 React.useEffect(() => {
 const interval = setInterval(() => {
 setCurrentTestimonial(prev => (prev + 1) % INDIE_TESTIMONIALS.length);
 }, 4000);
 return () => clearInterval(interval);
 }, []);

 return (
 <GridSection className="relative overflow-hidden">
 <SectionBackground height={900} />
 <div className="container py-20 sm:py-24 md:py-32 relative z-10">
 <div className="mx-auto max-w-4xl text-center">
 <BlurFade delay={0.05}>
 <Badge variant="outline" className="mx-auto rounded-full px-4 py-1.5">
 <HeartIcon className="mr-1.5 size-3 text-red-500" />
 Built by indie devs, for indie devs
 </Badge>
 </BlurFade>

 <BlurFade delay={0.1}>
 <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
 Your indie project deserves{' '}
 <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
 enterprise-grade monetization
 </span>
 </h1>
 </BlurFade>

 <BlurFade delay={0.15}>
 <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
 Whether starting with a single app, working alone, or with a small bootstrapped team - we have got you covered. Focus on your product, not the infrastructure.
 </p>
 </BlurFade>

 {/* Benefits as inline badges */}
 <BlurFade delay={0.2}>
 <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
 {BENEFITS.map((benefit, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, scale: 0.9 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ delay: 0.2 + index * 0.05 }}
 whileHover={shouldReduceMotion ? undefined : { scale: 1.05, y: -2 }}
 className="flex items-center gap-2 rounded-full bg-muted/50 px-4 py-2 text-sm"
 >
 <benefit.icon className="size-4 text-primary" />
 {benefit.text}
 </motion.div>
 ))}
 </div>
 </BlurFade>

 {/* CTAs */}
 <BlurFade delay={0.25}>
 <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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
 buttonVariants({ size: 'lg' }),
 'rounded-xl px-10 py-6 text-base transition-all duration-150 ease-out'
 )}
 >
 Start building for free
 <motion.span
 animate={shouldReduceMotion ? undefined : { x: isHovered === 'start' ? 3 : 0 }}
 transition={{ duration: 0.1 }}
 >
 <ArrowRightIcon className="ml-2 size-4" />
 </motion.span>
 </Link>
 </motion.div>

 <motion.div
 onMouseEnter={() => setIsHovered('demo')}
 onMouseLeave={() => setIsHovered(null)}
 animate={{
 y: shouldReduceMotion ? 0 : isHovered === 'demo' ? -2 : 0,
 }}
 transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
 >
 <Link
 href="https://startups.adapty.io/en/startup-plan-application"
 target="_blank"
 className={cn(
 buttonVariants({ variant: 'outline', size: 'lg' }),
 'rounded-xl px-10 py-6 text-base transition-all duration-150 ease-out'
 )}
 >
 Apply for Startup Plan
 </Link>
 </motion.div>
 </div>
 </BlurFade>

 {/* Rotating testimonials */}
 <BlurFade delay={0.3}>
 <div className="mt-12 h-16">
 <AnimatePresence mode="wait">
 <motion.div
 key={currentTestimonial}
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -10 }}
 transition={{ duration: 0.3 }}
 className="text-center"
 >
 <p className="text-muted-foreground italic">
 "{INDIE_TESTIMONIALS[currentTestimonial].quote}"
 </p>
 <p className="mt-2 text-sm text-muted-foreground/70">
 - {INDIE_TESTIMONIALS[currentTestimonial].author}
 </p>
 </motion.div>
 </AnimatePresence>
 </div>

 {/* Testimonial dots */}
 <div className="mt-4 flex justify-center gap-2">
 {INDIE_TESTIMONIALS.map((_, index) => (
 <button
 key={index}
 onClick={() => setCurrentTestimonial(index)}
 className={cn(
 "size-2 rounded-full transition-all duration-200",
 currentTestimonial === index
 ? "bg-primary scale-125"
 : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
 )}
 />
 ))}
 </div>
 </BlurFade>
 </div>

 {/* Hero image below */}
 <BlurFade delay={0.35}>
 <div className="mt-16 mx-auto max-w-5xl">
 <motion.div
 initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
 animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
 transition={{ delay: 0.3, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
 className="relative overflow-hidden rounded-xl border bg-background "
 >
 <Image
 priority
 quality={100}
 src="/assets/hero/set1/light-feature4.webp"
 width="1328"
 height="727"
 alt="Adapty dashboard for indie developers"
 className="block w-full dark:hidden"
 />
 <Image
 priority
 quality={100}
 src="/assets/hero/set1/dark-feature4.webp"
 width="1328"
 height="727"
 alt="Adapty dashboard for indie developers"
 className="hidden w-full dark:block"
 />
 </motion.div>
 </div>
 </BlurFade>
 </div>
 </GridSection>
 );
}

// =============================================================================
// VARIANT: STARTUP - Startup plan focus with pricing highlight card
// =============================================================================
function StartupHero() {
 const shouldReduceMotion = useReducedMotion();
 const [isHovered, setIsHovered] = React.useState<'apply' | 'learn' | null>(null);
 const [isCardHovered, setIsCardHovered] = React.useState(false);

 return (
 <GridSection className="relative overflow-hidden">
 <SectionBackground height={850} />
 <div className="container py-16 sm:py-20 md:py-24 relative z-10">
 <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
 {/* Left: Content */}
 <div className="flex flex-col gap-6">
 <BlurFade delay={0.05}>
 <Badge variant="outline" className="w-fit rounded-full px-4 py-1.5 border-primary/50 bg-primary/5">
 <ZapIcon className="mr-1.5 size-3 text-primary" />
 Startup Program
 </Badge>
 </BlurFade>

 <BlurFade delay={0.1}>
 <h1 className="text-left text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.1]">
 Get Adapty{' '}
 <span className="text-primary">free for 1 year</span>{' '}
 as a startup
 </h1>
 </BlurFade>

 <BlurFade delay={0.15}>
 <p className="max-w-xl text-left text-base leading-relaxed text-muted-foreground sm:text-lg">
 Just like you, we are a startup too. We know the pain of building with limited resources. That is why we have created a special program for early-stage companies.
 </p>
 </BlurFade>

 {/* Startup plan requirements */}
 <BlurFade delay={0.2}>
 <div className="rounded-xl border bg-muted/30 p-6">
 <h3 className="font-semibold mb-3">Eligibility requirements:</h3>
 <ul className="space-y-2">
 <li className="flex items-center gap-3 text-sm text-muted-foreground">
 <CheckIcon className="size-4 text-primary shrink-0" />
 Less than $5K in monthly recurring revenue
 </li>
 <li className="flex items-center gap-3 text-sm text-muted-foreground">
 <CheckIcon className="size-4 text-green-500 shrink-0" />
 New to Adapty (no existing account)
 </li>
 <li className="flex items-center gap-3 text-sm text-muted-foreground">
 <CheckIcon className="size-4 text-green-500 shrink-0" />
 Building a subscription-based app
 </li>
 </ul>
 </div>
 </BlurFade>

 <BlurFade delay={0.25}>
 <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
 <motion.div
 onMouseEnter={() => setIsHovered('apply')}
 onMouseLeave={() => setIsHovered(null)}
 animate={{
 y: shouldReduceMotion ? 0 : isHovered === 'apply' ? -2 : 0,
 }}
 transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
 >
 <Link
 href="https://startups.adapty.io/en/startup-plan-application"
 target="_blank"
 rel="noopener noreferrer"
 className={cn(
 buttonVariants({ size: 'lg' }),
 'rounded-xl px-8 transition-all duration-150 ease-out'
 )}
 >
 Apply now
 <motion.span
 animate={shouldReduceMotion ? undefined : { x: isHovered === 'apply' ? 3 : 0 }}
 transition={{ duration: 0.1 }}
 >
 <ArrowRightIcon className="ml-2 size-4" />
 </motion.span>
 </Link>
 </motion.div>

 <motion.div
 onMouseEnter={() => setIsHovered('learn')}
 onMouseLeave={() => setIsHovered(null)}
 animate={{
 y: shouldReduceMotion ? 0 : isHovered === 'learn' ? -2 : 0,
 }}
 transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
 >
 <Link
 href="https://app.adapty.io/registration"
 target="_blank"
 className={cn(
 buttonVariants({ variant: 'outline', size: 'lg' }),
 'rounded-xl px-8 transition-all duration-150 ease-out'
 )}
 >
 Or start free trial
 </Link>
 </motion.div>
 </div>
 </BlurFade>
 </div>

 {/* Right: Startup plan card */}
 <BlurFade delay={0.2}>
 <motion.div
 onMouseEnter={() => setIsCardHovered(true)}
 onMouseLeave={() => setIsCardHovered(false)}
 animate={shouldReduceMotion ? undefined : {
 y: isCardHovered ? -8 : 0,
 scale: isCardHovered ? 1.02 : 1,
 }}
 transition={{ type: 'spring', duration: 0.3, bounce: 0.1 }}
 >
 <Card className={cn(
 "relative overflow-hidden border-2 transition-all duration-300",
 isCardHovered ? "border-primary " : "border-primary/30"
 )}>
 {/* Gradient background */}
 <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10" />

 {/* Popular badge */}
 <div className="absolute top-4 right-4">
 <Badge className="bg-primary text-primary-foreground">
 Most popular
 </Badge>
 </div>

 <CardContent className="relative p-8">
 <div className="mb-6">
 <h3 className="text-2xl font-bold">Startup Plan</h3>
 <p className="text-muted-foreground mt-1">For early-stage companies</p>
 </div>

 <div className="mb-6">
 <div className="flex items-baseline gap-2">
 <span className="text-5xl font-bold text-primary">$0</span>
 <span className="text-muted-foreground">/month</span>
 </div>
 <p className="text-sm text-muted-foreground mt-1">
 for 12 months (then 50% off)
 </p>
 </div>

 <ul className="space-y-3 mb-8">
 {STARTUP_PLAN_FEATURES.map((feature, index) => (
 <motion.li
 key={index}
 initial={{ opacity: 0, x: -10 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ delay: 0.3 + index * 0.05 }}
 className="flex items-center gap-3 text-sm"
 >
 <div className="flex size-5 items-center justify-center rounded-full bg-primary/10">
 <CheckIcon className="size-3 text-primary" />
 </div>
 {feature}
 </motion.li>
 ))}
 </ul>

 <Link
 href="https://startups.adapty.io/en/startup-plan-application"
 target="_blank"
 rel="noopener noreferrer"
 className={cn(
 buttonVariants({ size: 'lg' }),
 'w-full rounded-xl'
 )}
 >
 Apply for startup plan
 <ArrowRightIcon className="ml-2 size-4" />
 </Link>

 <p className="text-xs text-muted-foreground text-center mt-4">
 5-minute application - No credit card required
 </p>
 </CardContent>
 </Card>
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
export const FOR_INDIE_HERO_VARIANTS = ['split', 'centered', 'startup'] as const;
export type ForIndieHeroVariant = typeof FOR_INDIE_HERO_VARIANTS[number];

type Props = {
 variant?: ForIndieHeroVariant;
};

export function ForIndieHero({ variant = 'split' }: Props): React.JSX.Element {
 switch (variant) {
 case 'centered':
 return <CenteredHero />;
 case 'startup':
 return <StartupHero />;
 case 'split':
 default:
 return <SplitHero />;
 }
}
