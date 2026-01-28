'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon, PlusIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';

import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
// import { SiteHeading } from '~/components/fragments/site-heading';

// Integration data with brand colors
const INTEGRATIONS = [
  {
    name: 'AppsFlyer',
    description: 'Mobile attribution and marketing analytics',
    color: 'bg-violet-100',
    logoColor: 'text-violet-600',
    letter: 'A',
    link: '/integrations/appsflyer/'
  },
  {
    name: 'Braze',
    description: 'Customer engagement platform',
    color: 'bg-blue-100',
    logoColor: 'text-blue-600',
    letter: 'B',
    link: '/integrations/braze/'
  },
  {
    name: 'Segment',
    description: 'Customer data platform',
    color: 'bg-emerald-100',
    logoColor: 'text-emerald-600',
    letter: 'S',
    link: '/integrations/segment/'
  },
  {
    name: 'Slack',
    description: 'Team notifications',
    color: 'bg-emerald-100',
    logoColor: 'text-emerald-600',
    letter: 'S',
    link: '/integrations/slack/'
  },
  {
    name: 'Webhooks',
    description: 'Real-time event notifications',
    color: 'bg-amber-100',
    logoColor: 'text-amber-600',
    letter: 'W',
    link: '/integrations/webhook/'
  },
  {
    name: 'Meta Ads',
    description: 'Ad attribution and optimization',
    color: 'bg-amber-100',
    logoColor: 'text-amber-600',
    letter: 'M',
    link: '/integrations/facebook-ads/'
  },
  {
    name: 'Amplitude',
    description: 'Product analytics integration',
    color: 'bg-violet-100',
    logoColor: 'text-violet-600',
    letter: 'A',
    link: '/integrations/amplitude/'
  },
  {
    name: 'Mixpanel',
    description: 'Product analytics',
    color: 'bg-violet-100',
    logoColor: 'text-violet-600',
    letter: 'M',
    link: '/integrations/mixpanel/'
  },
  {
    name: 'Adjust',
    description: 'Mobile attribution',
    color: 'bg-rose-100',
    logoColor: 'text-rose-600',
    letter: 'A',
    link: '/integrations/adjust/'
  },
  {
    name: 'OneSignal',
    description: 'Push notifications',
    color: 'bg-red-100',
    logoColor: 'text-red-600',
    letter: 'O',
    link: '/integrations/onesignal/'
  }
];

// Individual integration card
function IntegrationCard({
  integration,
  index
}: {
  integration: (typeof INTEGRATIONS)[0];
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className="group flex-shrink-0 w-[280px] sm:w-[300px]"
    >
      <Link
        href={integration.link}
        className="block h-full rounded-2xl bg-card border border-border/50 overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-border active:scale-[0.98]"
      >
        {/* Top colored section with logo */}
        <div
          className={cn(
            'h-[140px] flex items-center justify-center transition-transform duration-200 group-hover:scale-105',
            integration.color
          )}
        >
          <div className="w-14 h-14 rounded-xl bg-card shadow-sm flex items-center justify-center">
            <span
              className={cn(
                'text-xl font-bold',
                integration.logoColor
              )}
            >
              {integration.letter}
            </span>
          </div>
        </div>

        {/* Bottom content section */}
        <div className="p-5">
          <h3 className="font-semibold text-foreground mb-1">
            {integration.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {integration.description}
          </p>

          {/* Plus button */}
          <div className="mt-4 flex justify-end">
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
              className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200"
            >
              <PlusIcon className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// Navigation button component
function NavButton({
  direction,
  onClick,
  disabled
}: {
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'w-10 h-10 rounded-full border border-border/50 bg-card flex items-center justify-center transition-all duration-200',
        disabled
          ? 'opacity-40 cursor-not-allowed'
          : 'hover:border-border hover:shadow-sm cursor-pointer'
      )}
    >
      {direction === 'prev' ? (
        <ArrowLeftIcon className="w-4 h-4 text-foreground" />
      ) : (
        <ArrowRightIcon className="w-4 h-4 text-foreground" />
      )}
    </motion.button>
  );
}

export function IntegrationsCarousel(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  // Embla carousel setup with specific options for Linear-style behavior
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start', // Align to start, not center
    loop: false,
    skipSnaps: false,
    dragFree: true, // Smooth drag
    containScroll: false, // Don't contain - allows overflow
    slidesToScroll: 1
  });

  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(true);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="container relative z-10">
        {/* Header */}
        <BlurFade delay={0.05}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-amber-600 mb-4">
                <span className="w-4 h-1 rounded-full bg-amber-500" />
                Integrations
              </span>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Connect <span className="text-muted-foreground">your stack</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                Analytics, attribution, marketing automation, and custom webhooks. One-click setup for the tools you already use.
              </p>
            </div>

            {/* Navigation arrows */}
            <div className="flex items-center gap-2">
              <NavButton
                direction="prev"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
              />
              <NavButton
                direction="next"
                onClick={scrollNext}
                disabled={!canScrollNext}
              />
            </div>
          </div>
        </BlurFade>
      </div>

      {/* 
        Carousel container - KEY: No overflow-hidden!
        This allows cards to extend beyond the viewport without being clipped.
        The trick is using a full-width container that breaks out of the 
        constrained container width.
      */}
      <div className="relative">
        {/* Left fade gradient */}
        <div
          className={cn(
            'absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none transition-opacity duration-300',
            canScrollPrev ? 'opacity-100' : 'opacity-0'
          )}
        />

        {/* Right fade gradient */}
        <div
          className={cn(
            'absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none transition-opacity duration-300',
            canScrollNext ? 'opacity-100' : 'opacity-0'
          )}
        />

        {/* 
          Carousel viewport - NO overflow-hidden here!
          This is the key difference from the old implementation.
          Cards will overflow naturally without being clipped.
        */}
        <div
          ref={emblaRef}
          className="cursor-grab active:cursor-grabbing"
        >
          <div className="flex gap-4 pl-[max(1rem,calc((100vw-1280px)/2+1rem))] pr-8">
            {INTEGRATIONS.map((integration, index) => (
              <IntegrationCard
                key={integration.name}
                integration={integration}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
