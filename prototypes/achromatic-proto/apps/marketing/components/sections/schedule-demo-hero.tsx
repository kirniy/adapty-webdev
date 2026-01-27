'use client';

import * as React from 'react';
import Link from 'next/link';
import { CheckIcon, CalendarIcon, TrendingUpIcon, UsersIcon, ShieldCheckIcon } from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Button } from '@workspace/ui/components/button';
import { Card, CardContent } from '@workspace/ui/components/card';
import { Input } from '@workspace/ui/components/input';
import { Label } from '@workspace/ui/components/label';
import { toast } from '@workspace/ui/components/sonner';
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue
} from '@workspace/ui/components/select';

import { SectionBackground } from '~/components/fragments/section-background';
import { GridSection } from '~/components/fragments/grid-section';
import { BlurFade } from '~/components/fragments/blur-fade';
import { Spotlight } from '~/components/fragments/spotlight';
import { BorderBeam } from '~/components/fragments/border-beam';

// EXACT content from adapty.io/schedule-demo (scraped 2026-01-21)
// Benefits list: "Get to know our product and how it will help you grow"
const DEMO_BENEFITS = [
 'Learn how to increase app revenue',
 'Plan a migration',
 'Get a custom plan'
];

// Form field options from adapty.io/schedule-demo
const REFERRAL_SOURCES = [
 { value: 'google', label: 'Google Search' },
 { value: 'social', label: 'Social Media' },
 { value: 'recommendation', label: 'Recommendation' },
 { value: 'blog', label: 'Blog or Article' },
 { value: 'podcast', label: 'Podcast' },
 { value: 'event', label: 'Conference/Event' },
 { value: 'other', label: 'Other' }
];

const DEMO_LANGUAGES = [
 { value: 'en', label: 'English' },
 { value: 'ru', label: 'Russian' },
 { value: 'es', label: 'Spanish' },
 { value: 'de', label: 'German' },
 { value: 'fr', label: 'French' }
];

const TIMEZONES = [
 { value: 'UTC-8', label: 'Pacific Time (UTC-8)' },
 { value: 'UTC-5', label: 'Eastern Time (UTC-5)' },
 { value: 'UTC+0', label: 'GMT (UTC+0)' },
 { value: 'UTC+1', label: 'Central European (UTC+1)' },
 { value: 'UTC+3', label: 'Moscow (UTC+3)' },
 { value: 'UTC+8', label: 'Singapore (UTC+8)' },
 { value: 'UTC+9', label: 'Tokyo (UTC+9)' }
];

// EXACT from adapty.io - "Last 30 days app revenue"
const REVENUE_RANGES = [
 { value: '0-10k', label: 'Under $10K' },
 { value: '10k-50k', label: '$10K - $50K' },
 { value: '50k-100k', label: '$50K - $100K' },
 { value: '100k-500k', label: '$100K - $500K' },
 { value: '500k+', label: '$500K+' }
];

// Trust indicators
const TRUST_INDICATORS = [
 { icon: ShieldCheckIcon, label: 'SOC 2 Certified' },
 { icon: UsersIcon, label: '10,000+ Apps' },
 { icon: TrendingUpIcon, label: '30% Revenue Lift' },
];

// =============================================================================
// MAGIC ANIMATIONS
// =============================================================================

// Calendar booking animation
function CalendarMagic() {
 const shouldReduceMotion = useReducedMotion();
 const [selectedDay, setSelectedDay] = React.useState(3);

 React.useEffect(() => {
 if (shouldReduceMotion) return;

 const interval = setInterval(() => {
 setSelectedDay((prev) => (prev % 5) + 1);
 }, 2000);

 return () => clearInterval(interval);
 }, [shouldReduceMotion]);

 if (shouldReduceMotion) {
 return (
 <div className="flex gap-1 justify-center py-2">
 {[1, 2, 3, 4, 5].map((day) => (
 <div
 key={day}
 className={`w-6 h-6 rounded text-xs flex items-center justify-center ${
 day === 3 ? 'bg-primary text-primary-foreground' : 'bg-muted'
 }`}
 >
 {day + 14}
 </div>
 ))}
 </div>
 );
 }

 return (
 <div className="flex gap-1 justify-center py-2">
 {[1, 2, 3, 4, 5].map((day) => (
 <motion.div
 key={day}
 className={`w-6 h-6 rounded text-xs flex items-center justify-center ${
 day === selectedDay ? 'bg-primary text-primary-foreground' : 'bg-muted'
 }`}
 animate={{
 scale: day === selectedDay ? 1.15 : 1,
 }}
 transition={{ type: 'spring', duration: 0.3, bounce: 0.4 }}
 >
 {day + 14}
 </motion.div>
 ))}
 </div>
 );
}

// Growth percentage counter
function GrowthMagic() {
 const shouldReduceMotion = useReducedMotion();
 const [percentage, setPercentage] = React.useState(0);

 React.useEffect(() => {
 if (shouldReduceMotion) {
 setPercentage(30);
 return;
 }

 let frame: number;
 const duration = 1500;
 const targetValue = 30;
 const startTime = Date.now();

 const animate = () => {
 const elapsed = Date.now() - startTime;
 const progress = Math.min(elapsed / duration, 1);
 const eased = 1 - Math.pow(1 - progress, 3);
 setPercentage(Math.floor(targetValue * eased));

 if (progress < 1) {
 frame = requestAnimationFrame(animate);
 }
 };

 frame = requestAnimationFrame(animate);
 return () => cancelAnimationFrame(frame);
 }, [shouldReduceMotion]);

 if (shouldReduceMotion) {
 return (
 <div className="text-center py-2">
 <div className="text-2xl font-bold text-primary">+30%</div>
 <div className="text-xs text-muted-foreground">Average Revenue Lift</div>
 </div>
 );
 }

 return (
 <div className="text-center py-2">
 <motion.div
 className="text-2xl font-bold text-primary"
 animate={{ scale: [1, 1.05, 1] }}
 transition={{ duration: 2, repeat: Infinity }}
 >
 +{percentage}%
 </motion.div>
 <div className="text-xs text-muted-foreground">Average Revenue Lift</div>
 </div>
 );
}

export function ScheduleDemoHero(): React.JSX.Element {
 const shouldReduceMotion = useReducedMotion();
 const [hoveredBenefit, setHoveredBenefit] = React.useState<number | null>(null);
 const [hoveredTrust, setHoveredTrust] = React.useState<number | null>(null);
 const [isFormHovered, setIsFormHovered] = React.useState(false);

 const handleScheduleDemo = (): void => {
 toast.error("Demo scheduling is not implemented yet.");
 };

 return (
 <GridSection className="relative overflow-hidden">
 <SectionBackground height={1000} />
 <div className="container py-20 relative z-10">
 <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">
 {/* Right side - Form (on mobile this appears first) */}
 <BlurFade delay={0.05}>
 <motion.div
 onMouseEnter={() => setIsFormHovered(true)}
 onMouseLeave={() => setIsFormHovered(false)}
 animate={shouldReduceMotion ? undefined : {
 y: isFormHovered ? -4 : 0,
 }}
 transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
 >
 <Card className="py-8 relative overflow-hidden">
 <Spotlight className="from-primary/20 via-primary/5 to-transparent" size={400} />
 <BorderBeam size={300} duration={15} />
 <CardContent className="flex flex-col gap-5 px-6 lg:px-8">
 {/* EXACT title from adapty.io/schedule-demo */}
 <div className="text-center mb-2">
 <h1 className="text-2xl font-bold tracking-tight">Request your personal demo</h1>
 </div>

 {/* Form fields EXACT from adapty.io/schedule-demo */}
 <div className="grid grid-cols-2 gap-4">
 <div className="col-span-2 sm:col-span-1 grid w-full items-center gap-1.5">
 <Label htmlFor="firstname">
 First name<span className="text-destructive">*</span>
 </Label>
 <Input
 id="firstname"
 type="text"
 required
 />
 </div>
 <div className="col-span-2 sm:col-span-1 grid w-full items-center gap-1.5">
 <Label htmlFor="lastname">Last name</Label>
 <Input
 id="lastname"
 type="text"
 />
 </div>
 </div>

 <div className="grid w-full items-center gap-1.5">
 <Label htmlFor="email">
 Work email<span className="text-destructive">*</span>
 </Label>
 <Input
 id="email"
 type="email"
 required
 />
 </div>

 <div className="grid w-full items-center gap-1.5">
 <Label htmlFor="referral">How did you hear about us?</Label>
 <Select>
 <SelectTrigger>
 <SelectValue placeholder="Select..." />
 </SelectTrigger>
 <SelectContent>
 {REFERRAL_SOURCES.map((source) => (
 <SelectItem key={source.value} value={source.value}>
 {source.label}
 </SelectItem>
 ))}
 </SelectContent>
 </Select>
 </div>

 <div className="grid grid-cols-2 gap-4">
 <div className="col-span-2 sm:col-span-1 grid w-full items-center gap-1.5">
 <Label htmlFor="language">
 Preferred demo language<span className="text-destructive">*</span>
 </Label>
 <Select>
 <SelectTrigger>
 <SelectValue placeholder="Select..." />
 </SelectTrigger>
 <SelectContent>
 {DEMO_LANGUAGES.map((lang) => (
 <SelectItem key={lang.value} value={lang.value}>
 {lang.label}
 </SelectItem>
 ))}
 </SelectContent>
 </Select>
 </div>
 <div className="col-span-2 sm:col-span-1 grid w-full items-center gap-1.5">
 <Label htmlFor="timezone">
 Preferred time zone<span className="text-destructive">*</span>
 </Label>
 <Select>
 <SelectTrigger>
 <SelectValue placeholder="Select..." />
 </SelectTrigger>
 <SelectContent>
 {TIMEZONES.map((tz) => (
 <SelectItem key={tz.value} value={tz.value}>
 {tz.label}
 </SelectItem>
 ))}
 </SelectContent>
 </Select>
 </div>
 </div>

 <div className="grid w-full items-center gap-1.5">
 <Label htmlFor="revenue">
 Last 30 days app revenue<span className="text-destructive">*</span>
 </Label>
 <Select>
 <SelectTrigger>
 <SelectValue placeholder="Select..." />
 </SelectTrigger>
 <SelectContent>
 {REVENUE_RANGES.map((range) => (
 <SelectItem key={range.value} value={range.value}>
 {range.label}
 </SelectItem>
 ))}
 </SelectContent>
 </Select>
 </div>

 <motion.div
 className="relative"
 whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
 whileTap={{ scale: 0.98 }}
 >
 {/* Pulsing glow effect */}
 {!shouldReduceMotion && (
 <motion.div
 className="absolute inset-0 rounded-md bg-primary/30 blur-xl -z-10"
 animate={{
 opacity: [0.3, 0.6, 0.3],
 scale: [1, 1.05, 1],
 }}
 transition={{
 duration: 2,
 repeat: Infinity,
 ease: 'easeInOut',
 }}
 />
 )}
 {/* Pulsing ring */}
 {!shouldReduceMotion && (
 <motion.div
 className="absolute inset-0 rounded-md border-2 border-primary/50"
 animate={{
 scale: [1, 1.03, 1],
 opacity: [0.5, 0, 0.5],
 }}
 transition={{
 duration: 2,
 repeat: Infinity,
 ease: 'easeInOut',
 }}
 />
 )}
 <Button
 type="button"
 size="lg"
 className="w-full mt-2 relative"
 onClick={handleScheduleDemo}
 >
 <CalendarIcon className="size-4 mr-2" />
 Schedule your demo
 </Button>
 </motion.div>

 {/* EXACT legal text from adapty.io/schedule-demo */}
 <p className="text-xs text-center text-muted-foreground">
 By submitting the form, you are agreeing to the{' '}
 <Link href="/terms-of-use" className="underline hover:text-foreground transition-colors duration-150 ease-out motion-reduce:transition-none">
 Terms of Use
 </Link>{' '}
 and{' '}
 <Link href="/privacy-policy" className="underline hover:text-foreground transition-colors duration-150 ease-out motion-reduce:transition-none">
 Privacy Policy
 </Link>
 </p>
 </CardContent>
 </Card>
 </motion.div>
 </BlurFade>

 {/* Left side - Content */}
 <div className="space-y-8">
 <BlurFade delay={0.1}>
 {/* EXACT headline from adapty.io/schedule-demo */}
 <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
 Get to know our product and how it will help you grow
 </h2>
 </BlurFade>

 <BlurFade delay={0.15}>
 {/* EXACT benefits from adapty.io/schedule-demo */}
 <ul className="space-y-3">
 {DEMO_BENEFITS.map((benefit, index) => (
 <motion.li
 key={index}
 className="flex items-start gap-3 cursor-default"
 onMouseEnter={() => setHoveredBenefit(index)}
 onMouseLeave={() => setHoveredBenefit(null)}
 animate={shouldReduceMotion ? undefined : {
 x: hoveredBenefit === index ? 4 : 0,
 }}
 transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
 >
 <motion.div
 animate={shouldReduceMotion ? undefined : {
 scale: hoveredBenefit === index ? 1.2 : 1,
 rotate: hoveredBenefit === index ? 10 : 0,
 }}
 transition={{ type: 'spring', duration: 0.2, bounce: 0.3 }}
 >
 <CheckIcon className="size-5 shrink-0 text-primary mt-0.5" />
 </motion.div>
 <span className={`transition-colors duration-150 ${hoveredBenefit === index ? 'text-foreground' : 'text-muted-foreground'}`}>
 {benefit}
 </span>
 </motion.li>
 ))}
 </ul>
 </BlurFade>

 {/* Magic animations */}
 <BlurFade delay={0.2}>
 <div className="grid grid-cols-2 gap-4">
 <Card className="bg-card/50 relative overflow-hidden">
 <Spotlight className="from-primary/10 via-primary/5 to-transparent" size={150} />
 <CardContent className="p-4">
 <CalendarMagic />
 <p className="text-xs text-center text-muted-foreground mt-1">Pick a time that works</p>
 </CardContent>
 </Card>
 <Card className="bg-card/50 relative overflow-hidden">
 <Spotlight className="from-primary/10 via-primary/5 to-transparent" size={150} />
 <CardContent className="p-4">
 <GrowthMagic />
 </CardContent>
 </Card>
 </div>
 </BlurFade>

 {/* Trust indicators */}
 <BlurFade delay={0.25}>
 <div className="pt-6 border-t">
 <div className="flex flex-wrap items-center gap-6">
 {TRUST_INDICATORS.map((item, index) => {
 const Icon = item.icon;
 return (
 <motion.div
 key={index}
 className="flex items-center gap-2 cursor-default"
 onMouseEnter={() => setHoveredTrust(index)}
 onMouseLeave={() => setHoveredTrust(null)}
 animate={shouldReduceMotion ? undefined : {
 scale: hoveredTrust === index ? 1.05 : 1,
 }}
 transition={{ type: 'spring', duration: 0.2, bounce: 0.3 }}
 >
 <motion.div
 animate={shouldReduceMotion ? undefined : {
 rotate: hoveredTrust === index ? 10 : 0,
 }}
 transition={{ type: 'spring', duration: 0.2, bounce: 0.3 }}
 >
 <Icon className="size-4 text-primary" />
 </motion.div>
 <span className="text-sm text-muted-foreground">{item.label}</span>
 </motion.div>
 );
 })}
 </div>
 </div>
 </BlurFade>

 {/* G2 Awards section - from adapty.io/schedule-demo */}
 <BlurFade delay={0.3}>
 <div className="pt-4">
 <div className="flex flex-wrap items-center gap-4">
 <div className="flex items-center gap-2">
 <div className="flex">
 {[...Array(5)].map((_, i) => (
 <motion.svg
 key={i}
 className="size-4 text-yellow-400 fill-current"
 viewBox="0 0 20 20"
 initial={{ opacity: 0, scale: 0 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ delay: 0.3 + i * 0.05, type: 'spring', bounce: 0.5 }}
 >
 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
 </motion.svg>
 ))}
 </div>
 <span className="text-sm text-muted-foreground">4.9 out of 5 stars on G2</span>
 </div>
 </div>
 </div>
 </BlurFade>
 </div>
 </div>
 </div>
 </GridSection>
 );
}
