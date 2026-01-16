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

import { routes } from '@workspace/routes';
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

function HeroPill(): React.JSX.Element {
  return (
    <motion.div
      initial={{ filter: 'blur(10px)', opacity: 0, y: -20 }}
      animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center"
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
      initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
      animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      <h1 className="mt-6 text-center text-[48px] font-bold leading-[54px] tracking-[-1.2px] [font-kerning:none] sm:text-[56px] md:text-[64px] lg:text-[76px] lg:leading-[74px] lg:tracking-[-2px]">
        Revenue management
        <br /> for in-app purchases
      </h1>
    </motion.div>
  );
}

function HeroDescription(): React.JSX.Element {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className="mx-auto mt-3 max-w-[560px] text-balance text-center text-lg leading-[26px] text-muted-foreground sm:text-xl lg:mt-6"
    >
      Save months on integrating subscriptions and double your app revenue with paywall management.
    </motion.p>
  );
}

function HeroButtons(): React.JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="mx-auto flex w-full flex-col gap-2 px-7 sm:w-auto sm:flex-row sm:px-0"
    >
      <Link
        href="https://app.adapty.io/registration"
        className={cn(
          buttonVariants({
            variant: 'default'
          }),
          'h-10 rounded-xl sm:h-9'
        )}
      >
        Start for free
      </Link>
      <Link
        href="https://adapty.io/schedule-demo/"
        className={cn(
          buttonVariants({
            variant: 'outline'
          }),
          'h-10 rounded-xl sm:h-9'
        )}
      >
        Book a demo
      </Link>
    </motion.div>
  );
}

import { 
  useDashedThicknessVariant, 
  useGridColorVariant, 
  useGridOpacityVariant, 
  useGridZIndexVariant 
} from '~/lib/debug-context';

function MainDashedGridLines(): React.JSX.Element {
  const dashedThickness = useDashedThicknessVariant();
  const gridColor = useGridColorVariant();
  const gridOpacity = useGridOpacityVariant();
  const gridZIndex = useGridZIndexVariant();

  const strokeWidth = dashedThickness === 'thin' ? 0.5 : dashedThickness === 'thick' ? 2 : 1;
  
  // Use stroke color based on variant or css variable
  const strokeColor = 
    gridColor === 'default' ? 'var(--border)' : 
    gridColor === 'muted' ? 'var(--muted-foreground)' : 
    gridColor === 'accent' ? 'var(--primary)' : 
    gridColor === 'blue' ? '#3B82F6' : 
    gridColor === 'purple' ? '#8B5CF6' : 
    'var(--border)';

  const opacityValue = 
    gridOpacity === 'faint' ? 0.2 : 
    gridOpacity === 'subtle' ? 0.5 : 
    gridOpacity === 'visible' ? 0.8 : 
    1.0;

  const zIndexClass = 
    gridZIndex === 'deep' ? '-z-10' : 
    gridZIndex === 'back' ? '-z-1' : 
    gridZIndex === 'normal' ? 'z-0' : 
    'z-10';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: opacityValue }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className={zIndexClass}
    >
      <svg className="absolute left-[16.85%] top-0 hidden h-full w-px mask-[linear-gradient(to_bottom,#0000,#000_128px,#000_calc(100%-24px),#0000)] lg:block">
        <line
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="100%"
          strokeLinecap="round"
          strokeDasharray="5 5"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      </svg>
      <svg className="absolute right-[16.85%] top-0 hidden h-full w-px mask-[linear-gradient(to_bottom,#0000,#000_128px,#000_calc(100%-24px),#0000)] lg:block">
        <line
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="100%"
          strokeLinecap="round"
          strokeDasharray="5 5"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      </svg>
      <svg className="absolute bottom-[52px] left-[calc(50%-50vw)] hidden h-px w-screen mask-[linear-gradient(to_right,#0000,#000_100px,#000_calc(100%-100px),#0000)] lg:block">
        <line
          x1="0"
          y1="0.5"
          x2="100%"
          y2="0.5"
          strokeLinecap="round"
          strokeDasharray="5 5"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      </svg>
    </motion.div>
  );
}

function SupportiveDashedGridLines(): React.JSX.Element {
  return (
    <>
      <svg className="absolute left-[calc(50%-50vw)] top-[-25px] z-10 hidden h-px w-screen mask-[linear-gradient(to_right,#0000,#000_100px,#000_calc(100%-100px),#0000)] lg:block">
        <line
          x1="0"
          y1="0.5"
          x2="100%"
          y2="0.5"
          strokeLinecap="round"
          strokeDasharray="5 5"
          stroke="var(--border)"
        />
      </svg>
      <svg className="absolute left-[calc(50%-50vw)] top-0 z-10 hidden h-px w-screen mask-[linear-gradient(to_right,#0000,#000_100px,#000_calc(100%-100px),#0000)] lg:block">
        <line
          x1="0"
          y1="0.5"
          x2="100%"
          y2="0.5"
          strokeLinecap="round"
          strokeDasharray="5 5"
          stroke="var(--border)"
        />
      </svg>
      <svg className="absolute left-[calc(50%-50vw)] top-[52px] z-10 hidden h-px w-screen mask-[linear-gradient(to_right,#0000,#000_100px,#000_calc(100%-100px),#0000)] lg:block">
        <line
          x1="0"
          y1="0.5"
          x2="100%"
          y2="0.5"
          strokeLinecap="round"
          strokeDasharray="5 5"
          stroke="var(--border)"
        />
      </svg>
    </>
  );
}

function HeroIllustration(): React.JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="relative mt-3 lg:mt-6"
    >
      <UnderlinedTabs defaultValue="feature1">
        <ScrollArea className="max-w-screen lg:max-w-none">
          <UnderlinedTabsList className="relative z-20 mb-6 flex h-fit flex-row flex-wrap justify-center md:flex-nowrap">
            <UnderlinedTabsTrigger
              value="feature1"
              className="mx-1 px-2.5 sm:mx-2 sm:px-3"
            >
              <LayoutIcon className="mr-2 size-4 shrink-0" />
              Paywall Builder
            </UnderlinedTabsTrigger>
            <UnderlinedTabsTrigger
              value="feature2"
              className="mx-1 px-2.5 sm:mx-2 sm:px-3"
            >
              <PlayIcon className="mr-2 size-4 shrink-0" />
              A/B Testing
            </UnderlinedTabsTrigger>
            <UnderlinedTabsTrigger
              value="feature3"
              className="mx-1 px-2.5 sm:mx-2 sm:px-3"
            >
              <FileBarChartIcon className="mr-2 size-4 shrink-0" />
              Analytics
            </UnderlinedTabsTrigger>
            <UnderlinedTabsTrigger
              value="feature4"
              className="mx-1 px-2.5 sm:mx-2 sm:px-3"
            >
              <BoxIcon className="mr-2 size-4 shrink-0" />
              SDK
            </UnderlinedTabsTrigger>
            <UnderlinedTabsTrigger
              value="feature5"
              className="mx-1 px-2.5 sm:mx-2 sm:px-3"
            >
              <CircuitBoardIcon className="mr-2 size-4 shrink-0" />
              Integrations
            </UnderlinedTabsTrigger>
          </UnderlinedTabsList>
          <ScrollBar
            orientation="horizontal"
            className="invisible"
          />
        </ScrollArea>
        <div className="relative mb-1 w-full rounded-xl dark:border-none dark:bg-background">
          <SupportiveDashedGridLines />
          <div className="relative z-20 bg-background">
            <UnderlinedTabsContent value="feature1">
              <Image
                priority
                quality={100}
                src="/assets/hero/light-feature1.webp"
                width="1328"
                height="727"
                alt="Adapty Paywall Builder screenshot"
                className="block rounded-xl border shadow dark:hidden"
              />
              <Image
                priority
                quality={100}
                src="/assets/hero/dark-feature1.webp"
                width="1328"
                height="727"
                alt="Adapty Paywall Builder screenshot"
                className="hidden rounded-xl border shadow dark:block"
              />
            </UnderlinedTabsContent>
            <UnderlinedTabsContent value="feature2">
              <Image
                quality={100}
                src="/assets/hero/light-feature2.webp"
                width="1328"
                height="727"
                alt="Adapty A/B Testing screenshot"
                className="block rounded-xl border shadow dark:hidden"
              />
              <Image
                quality={100}
                src="/assets/hero/dark-feature2.webp"
                width="1328"
                height="727"
                alt="Adapty A/B Testing screenshot"
                className="hidden rounded-xl border shadow dark:block"
              />
            </UnderlinedTabsContent>
            <UnderlinedTabsContent value="feature3">
              <Image
                quality={100}
                src="/assets/hero/light-feature3.webp"
                width="1328"
                height="727"
                alt="Adapty Analytics screenshot"
                className="block rounded-xl border shadow dark:hidden"
              />
              <Image
                quality={100}
                src="/assets/hero/dark-feature3.webp"
                width="1328"
                height="727"
                alt="Adapty Analytics screenshot"
                className="hidden rounded-xl border shadow dark:block"
              />
            </UnderlinedTabsContent>
            <UnderlinedTabsContent value="feature4">
              <Image
                quality={100}
                src="/assets/hero/light-feature4.webp"
                width="1328"
                height="727"
                alt="Adapty SDK screenshot"
                className="block rounded-xl border shadow dark:hidden"
              />
              <Image
                quality={100}
                src="/assets/hero/dark-feature4.webp"
                width="1328"
                height="727"
                alt="Adapty SDK screenshot"
                className="hidden rounded-xl border shadow dark:block"
              />
            </UnderlinedTabsContent>
            <UnderlinedTabsContent value="feature5">
              <Image
                quality={100}
                src="/assets/hero/light-feature5.webp"
                width="1328"
                height="727"
                alt="Adapty Integrations screenshot"
                className="block rounded-xl border shadow dark:hidden"
              />
              <Image
                quality={100}
                src="/assets/hero/dark-feature5.webp"
                width="1328"
                height="727"
                alt="Adapty Integrations screenshot"
                className="hidden rounded-xl border shadow dark:block"
              />
            </UnderlinedTabsContent>
          </div>
        </div>
      </UnderlinedTabs>
    </motion.div>
  );
}

export function Hero(): React.JSX.Element {
  return (
    <GridSection className="overflow-x-hidden relative">
      <SectionBackground height={800} />
      <MainDashedGridLines />
      <div className="mx-auto mt-16 flex flex-col gap-6 px-2 sm:mt-20 sm:px-1 md:mt-24 lg:mt-32 relative z-10">
        <div className="gap-2">
          <HeroPill />
          <HeroTitle />
        </div>
        <HeroDescription />
        <HeroButtons />
        <HeroIllustration />
      </div>
    </GridSection>
  );
}
