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
import { motion } from 'motion/react';

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
import { useImageSetVariant, useMonochromeMode, type ImageSetVariant } from '~/lib/debug-context';

// Helper to get image path based on selected image set
function getImagePath(basePath: string, imageSet: ImageSetVariant): string {
  return basePath.replace('/assets/hero/', `/assets/hero/${imageSet}/`);
}

function HeroPill(): React.JSX.Element {
  return (
    <motion.div
      initial={{ filter: 'blur(10px)', opacity: 0, x: -20 }}
      animate={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-start"
    >
      <Link href="https://adapty.io/ebooks/100k-app-playbook/">
        <Badge
          variant="outline"
          className="group relative h-8 overflow-hidden rounded-full px-3 text-xs font-medium shadow-xs duration-200 hover:bg-accent/50 sm:text-sm"
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
    </motion.div>
  );
}

function HeroTitle(): React.JSX.Element {
  return (
    <motion.div
      initial={{ filter: 'blur(10px)', opacity: 0, x: -20 }}
      animate={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
      transition={{ delay: 0.15, duration: 0.4 }}
    >
      <h1 className="text-left text-[40px] font-bold leading-[46px] tracking-[-1px] [font-kerning:none] sm:text-[48px] sm:leading-[54px] md:text-[56px] md:leading-[60px] lg:text-[64px] lg:leading-[68px] lg:tracking-[-1.5px]">
        Revenue management
        <br /> for in-app purchases
      </h1>
    </motion.div>
  );
}

function HeroDescription(): React.JSX.Element {
  return (
    <motion.p
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="max-w-[480px] text-pretty text-left text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl"
    >
      Save months on integrating subscriptions and double your app revenue with paywall management.
    </motion.p>
  );
}

function HeroButtons(): React.JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.45, duration: 0.4 }}
      className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
    >
      <Link
        href="https://app.adapty.io/registration"
        className={cn(
          buttonVariants({
            variant: 'default',
            size: 'lg'
          }),
          'h-11 rounded-xl px-6'
        )}
      >
        Start for free
      </Link>
      <Link
        href="https://adapty.io/schedule-demo/"
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
    </motion.div>
  );
}

function HeroStats(): React.JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 pt-4 text-sm text-muted-foreground"
    >
      <div className="flex items-center gap-2">
        <span className="font-semibold text-foreground">$2B+</span>
        <span>tracked revenue</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-semibold text-foreground">99.99%</span>
        <span>uptime</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-semibold text-foreground">2.5B+</span>
        <span>users served</span>
      </div>
    </motion.div>
  );
}

function HeroIllustration(): React.JSX.Element {
  const imageSet = useImageSetVariant();
  const monochromeMode = useMonochromeMode();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="relative w-full"
    >
      <UnderlinedTabs defaultValue="feature1">
        <ScrollArea className="max-w-full">
          <UnderlinedTabsList className="relative z-20 mb-4 flex h-fit flex-row flex-wrap justify-start gap-1 lg:justify-start">
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
          "relative w-full overflow-hidden rounded-xl border bg-background shadow-lg",
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
