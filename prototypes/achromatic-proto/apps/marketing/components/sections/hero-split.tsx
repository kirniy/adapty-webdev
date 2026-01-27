'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
 BoxIcon,
 ChevronRightIcon,
 CircuitBoardIcon,
 FileBarChartIcon,
 LayoutIcon,
 PlayIcon
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { buttonVariants } from '@workspace/ui/components/button';
import { ScrollArea, ScrollBar } from '@workspace/ui/components/scroll-area';
import { Separator } from '@workspace/ui/components/separator';
import {
 UnderlinedTabs,
 UnderlinedTabsContent,
 UnderlinedTabsList,
 UnderlinedTabsTrigger
} from '@workspace/ui/components/tabs';
import { cn } from '@workspace/ui/lib/utils';

import { SectionBackground } from '~/components/fragments/section-background';
import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SlideIn } from '~/components/fragments/slide-in';
import { Spotlight } from '~/components/fragments/spotlight';
import { useImageSetVariant, useMonochromeMode, type ImageSetVariant } from '~/lib/debug-context';

// Helper to get image path based on selected image set
function getImagePath(basePath: string, imageSet: ImageSetVariant): string {
 return basePath.replace('/assets/hero/', `/assets/hero/${imageSet}/`);
}

function HeroPill(): React.JSX.Element {
 const shouldReduceMotion = useReducedMotion();

 return (
 <SlideIn
 direction="left"
 delay={shouldReduceMotion ? 0 : 0}
 duration={0.5}
 className="flex items-center justify-start"
 >
 <Link href="https://adapty.io/ebooks/100k-app-playbook/">
 <Badge
 variant="outline"
 className="group relative h-8 overflow-hidden rounded-full px-3 text-xs font-medium duration-200 hover:bg-accent/50 sm:text-sm"
 >
 <BorderBeam
 size={40}
 duration={4}
 delay={0}
 borderWidth={1.5}
 colorFrom="#3b82f6"
 colorTo="#8b5cf6"
 />
 <div className="w-fit py-0.5 text-center text-xs text-blue-500 sm:text-sm">
 Ebook
 </div>
 <Separator
 orientation="vertical"
 className="mx-2"
 />
 $100K playbook | download
 <ChevronRightIcon className="ml-1.5 size-3 shrink-0 text-foreground transition-transform group-hover:translate-x-0.5" />
 </Badge>
 </Link>
 </SlideIn>
 );
}

function HeroTitle(): React.JSX.Element {
 const shouldReduceMotion = useReducedMotion();

 return (
 <SlideIn
 direction="left"
 delay={shouldReduceMotion ? 0 : 0.1}
 duration={0.5}
 >
 <h1 className="text-left text-[40px] font-bold leading-[46px] tracking-[-1px] [font-kerning:none] sm:text-[48px] sm:leading-[54px] md:text-[56px] md:leading-[60px] lg:text-[64px] lg:leading-[68px] lg:tracking-[-1.5px]">
 Revenue management
 <br /> for in-app purchases
 </h1>
 </SlideIn>
 );
}

function HeroDescription(): React.JSX.Element {
 const shouldReduceMotion = useReducedMotion();

 return (
 <SlideIn
 direction="left"
 delay={shouldReduceMotion ? 0 : 0.2}
 duration={0.5}
 className="max-w-[480px]"
 >
 <p className="text-pretty text-left text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
 Save months on integrating subscriptions and double your app revenue with paywall management.
 </p>
 </SlideIn>
 );
}

function HeroButtons(): React.JSX.Element {
 const shouldReduceMotion = useReducedMotion();

 return (
 <SlideIn
 direction="left"
 delay={shouldReduceMotion ? 0 : 0.3}
 duration={0.5}
 className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
 >
 <div className="relative">
 {/* Pulsing ring effect */}
 <motion.div
 className="absolute inset-0 rounded-xl border-2 border-primary/50"
 animate={{
 scale: [1, 1.04, 1],
 opacity: [0.6, 0, 0.6],
 }}
 transition={{
 duration: 2.5,
 repeat: Infinity,
 ease: 'easeInOut',
 }}
 />
 <Link
 href="https://app.adapty.io/registration"
 className={cn(
 buttonVariants({
 variant: 'default',
 size: 'lg'
 }),
 'h-11 rounded-xl px-6 relative'
 )}
 >
 Start for free
 </Link>
 </div>
 <Link
 href="/schedule-demo"
 className={cn(
 buttonVariants({
 variant: 'outline',
 size: 'lg'
 }),
 'h-11 rounded-xl px-6'
 )}
 >
 Book a demo
 </Link>
 </SlideIn>
 );
}

// Magic animation: Growing revenue counter
function RevenueTrackedMagic() {
 const shouldReduceMotion = useReducedMotion();
 const [revenue, setRevenue] = React.useState(1.9);

 React.useEffect(() => {
 if (shouldReduceMotion) {
 setRevenue(2.0);
 return;
 }
 const interval = setInterval(() => {
 setRevenue(prev => {
 if (prev >= 2.0) return 2.0;
 return Math.min(2.0, prev + 0.01);
 });
 }, 50);
 return () => clearInterval(interval);
 }, [shouldReduceMotion]);

 return (
 <motion.span
 key={revenue.toFixed(1)}
 className="font-semibold text-foreground"
 initial={shouldReduceMotion ? {} : { scale: 1.1 }}
 animate={{ scale: 1 }}
 transition={{ duration: 0.15 }}
 >
 ${revenue.toFixed(1)}B+
 </motion.span>
 );
}

// Magic animation: Live uptime indicator
function UptimeMagic() {
 const shouldReduceMotion = useReducedMotion();

 return (
 <span className="flex items-center gap-1.5 font-semibold text-foreground">
 <motion.span
 className="size-1.5 rounded-full bg-primary"
 animate={shouldReduceMotion ? {} : {
 scale: [1, 1.3, 1],
 opacity: [1, 0.7, 1],
 }}
 transition={{
 duration: 2,
 repeat: Infinity,
 ease: 'easeInOut',
 }}
 />
 99.99%
 </span>
 );
}

function HeroStats(): React.JSX.Element {
 const shouldReduceMotion = useReducedMotion();

 return (
 <SlideIn
 direction="up"
 delay={shouldReduceMotion ? 0 : 0.4}
 duration={0.5}
 className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 pt-4 text-sm text-muted-foreground"
 >
 <div className="flex items-center gap-2">
 <RevenueTrackedMagic />
 <span>tracked revenue</span>
 </div>
 <div className="flex items-center gap-2">
 <UptimeMagic />
 <span>uptime</span>
 </div>
 <div className="flex items-center gap-2">
 <span className="font-semibold text-foreground">2.5B+</span>
 <span>users served</span>
 </div>
 </SlideIn>
 );
}

function HeroIllustration(): React.JSX.Element {
 const imageSet = useImageSetVariant();
 const monochromeMode = useMonochromeMode();
 const shouldReduceMotion = useReducedMotion();

 return (
 <motion.div
 initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
 animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
 transition={{ delay: shouldReduceMotion ? 0 : 0.2, duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
 className="relative w-full"
 >
 <UnderlinedTabs defaultValue="feature1">
 <ScrollArea className="max-w-full">
 <UnderlinedTabsList className="relative z-20 mb-4 flex h-fit flex-row flex-nowrap justify-start gap-1 min-w-max">
 <UnderlinedTabsTrigger
 value="feature1"
 className="px-2 text-xs sm:px-2.5 sm:text-sm"
 >
 <LayoutIcon className="mr-1.5 size-3.5 shrink-0" />
 Paywall Builder
 </UnderlinedTabsTrigger>
 <UnderlinedTabsTrigger
 value="feature2"
 className="px-2 text-xs sm:px-2.5 sm:text-sm"
 >
 <PlayIcon className="mr-1.5 size-3.5 shrink-0" />
 A/B Testing
 </UnderlinedTabsTrigger>
 <UnderlinedTabsTrigger
 value="feature3"
 className="px-2 text-xs sm:px-2.5 sm:text-sm"
 >
 <FileBarChartIcon className="mr-1.5 size-3.5 shrink-0" />
 Analytics
 </UnderlinedTabsTrigger>
 <UnderlinedTabsTrigger
 value="feature4"
 className="px-2 text-xs sm:px-2.5 sm:text-sm"
 >
 <BoxIcon className="mr-1.5 size-3.5 shrink-0" />
 SDK
 </UnderlinedTabsTrigger>
 <UnderlinedTabsTrigger
 value="feature5"
 className="px-2 text-xs sm:px-2.5 sm:text-sm"
 >
 <CircuitBoardIcon className="mr-1.5 size-3.5 shrink-0" />
 Integrations
 </UnderlinedTabsTrigger>
 </UnderlinedTabsList>
 <ScrollBar
 orientation="horizontal"
 className="invisible"
 />
 </ScrollArea>
 <div className={cn(
 "relative w-full overflow-hidden rounded-xl border bg-background ",
 monochromeMode && "grayscale hover:grayscale-0 transition-[filter] duration-500"
 )}>
 <UnderlinedTabsContent value="feature1" className="m-0">
 <Image
 priority
 quality={100}
 src={getImagePath('/assets/hero/light-feature1.webp', imageSet)}
 width="1328"
 height="727"
 alt="Adapty Paywall Builder screenshot"
 className="block w-full dark:hidden"
 />
 <Image
 priority
 quality={100}
 src={getImagePath('/assets/hero/dark-feature1.webp', imageSet)}
 width="1328"
 height="727"
 alt="Adapty Paywall Builder screenshot"
 className="hidden w-full dark:block"
 />
 </UnderlinedTabsContent>
 <UnderlinedTabsContent value="feature2" className="m-0">
 <Image
 quality={100}
 src={getImagePath('/assets/hero/light-feature2.webp', imageSet)}
 width="1328"
 height="727"
 alt="Adapty A/B Testing screenshot"
 className="block w-full dark:hidden"
 />
 <Image
 quality={100}
 src={getImagePath('/assets/hero/dark-feature2.webp', imageSet)}
 width="1328"
 height="727"
 alt="Adapty A/B Testing screenshot"
 className="hidden w-full dark:block"
 />
 </UnderlinedTabsContent>
 <UnderlinedTabsContent value="feature3" className="m-0">
 <Image
 quality={100}
 src={getImagePath('/assets/hero/light-feature3.webp', imageSet)}
 width="1328"
 height="727"
 alt="Adapty Analytics screenshot"
 className="block w-full dark:hidden"
 />
 <Image
 quality={100}
 src={getImagePath('/assets/hero/dark-feature3.webp', imageSet)}
 width="1328"
 height="727"
 alt="Adapty Analytics screenshot"
 className="hidden w-full dark:block"
 />
 </UnderlinedTabsContent>
 <UnderlinedTabsContent value="feature4" className="m-0">
 <Image
 quality={100}
 src={getImagePath('/assets/hero/light-feature4.webp', imageSet)}
 width="1328"
 height="727"
 alt="Adapty SDK screenshot"
 className="block w-full dark:hidden"
 />
 <Image
 quality={100}
 src={getImagePath('/assets/hero/dark-feature4.webp', imageSet)}
 width="1328"
 height="727"
 alt="Adapty SDK screenshot"
 className="hidden w-full dark:block"
 />
 </UnderlinedTabsContent>
 <UnderlinedTabsContent value="feature5" className="m-0">
 <Image
 quality={100}
 src={getImagePath('/assets/hero/light-feature5.webp', imageSet)}
 width="1328"
 height="727"
 alt="Adapty Integrations screenshot"
 className="block w-full dark:hidden"
 />
 <Image
 quality={100}
 src={getImagePath('/assets/hero/dark-feature5.webp', imageSet)}
 width="1328"
 height="727"
 alt="Adapty Integrations screenshot"
 className="hidden w-full dark:block"
 />
 </UnderlinedTabsContent>
 </div>
 </UnderlinedTabs>
 </motion.div>
 );
}

export function HeroSplit(): React.JSX.Element {
 return (
 <GridSection className="relative overflow-hidden">
 <SectionBackground height={800} />
 <div className="container relative z-10 py-16 sm:py-20 md:py-24 lg:py-28">
 <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={400} />
 <div className="grid items-center gap-12 lg:grid-cols-[1fr,1.2fr] lg:gap-16">
 {/* Left: Content */}
 <div className="flex flex-col gap-6">
 <HeroPill />
 <HeroTitle />
 <HeroDescription />
 <HeroButtons />
 <HeroStats />
 </div>

 {/* Right: Visual */}
 <div className="lg:pl-4">
 <HeroIllustration />
 </div>
 </div>
 </div>
 </GridSection>
 );
}
