'use client';

import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import {
  CreditCardIcon,
  LayoutTemplateIcon,
  BarChart3Icon,
  FlaskConicalIcon,
} from 'lucide-react';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { cn } from '@workspace/ui/lib/utils';

// Feature data matching Adapty's core features
const FEATURES = [
  {
    id: 'paywall-builder',
    icon: <LayoutTemplateIcon className="size-5 shrink-0" />,
    eyebrow: 'Paywall Builder',
    title: 'Design paywalls that convert',
    description:
      'Build beautiful, native paywalls without code. A/B test designs, copy, and pricing to find what works best for your audience.',
    image: '/screenshots/paywall-builder.png',
  },
  {
    id: 'ab-testing',
    icon: <FlaskConicalIcon className="size-5 shrink-0" />,
    eyebrow: 'A/B Testing',
    title: 'Test everything, guess nothing',
    description:
      'Run experiments on paywalls, pricing, and trial lengths. Get statistically significant results to make data-driven decisions.',
    image: '/screenshots/ab-testing.png',
  },
  {
    id: 'analytics',
    icon: <BarChart3Icon className="size-5 shrink-0" />,
    eyebrow: 'Analytics',
    title: 'Understand your revenue',
    description:
      'Track MRR, churn, LTV, and conversion rates in real-time. Segment by cohort, country, or custom attributes.',
    image: '/screenshots/analytics.png',
  },
  {
    id: 'subscription-management',
    icon: <CreditCardIcon className="size-5 shrink-0" />,
    eyebrow: 'Subscriptions',
    title: 'Manage subscriptions at scale',
    description:
      'Handle upgrades, downgrades, cancellations, and refunds. Sync subscription status across devices instantly.',
    image: '/screenshots/subscriptions.png',
  },
];

export function FeaturesStickyScroll(): React.JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    featureRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveIndex(index);
            }
          });
        },
        { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <GridSection>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-0">
        {/* Left: Sticky navigation */}
        <div className="lg:sticky lg:top-24 lg:h-fit px-4 py-16 lg:py-24 lg:px-8 lg:border-r border-dashed">
          <BlurFade inView delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
              Features
            </span>
            <h2 className="text-3xl font-semibold md:text-5xl mb-4">
              Everything you need to grow subscription revenue
            </h2>
            <p className="text-muted-foreground max-w-md">
              From paywall design to analytics, Adapty gives you the tools to maximize your app's revenue potential.
            </p>
          </BlurFade>

          {/* Feature navigation - desktop only */}
          <div className="hidden lg:flex flex-col gap-2 mt-10">
            {FEATURES.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => {
                  featureRefs.current[index]?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
                }}
                className={cn(
                  'text-left p-4 rounded-xl transition-all duration-300 border',
                  activeIndex === index
                    ? 'bg-background border-border shadow-sm'
                    : 'bg-transparent border-transparent hover:bg-muted/50'
                )}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      'flex size-10 items-center justify-center rounded-xl border shadow-sm transition-colors',
                      activeIndex === index
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-background'
                    )}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <span
                      className={cn(
                        'text-xs font-semibold uppercase tracking-widest block',
                        activeIndex === index ? 'text-primary' : 'text-muted-foreground'
                      )}
                    >
                      {feature.eyebrow}
                    </span>
                    <h3
                      className={cn(
                        'text-base font-medium transition-colors',
                        activeIndex === index ? 'text-foreground' : 'text-muted-foreground'
                      )}
                    >
                      {feature.title}
                    </h3>
                  </div>
                </div>
                {activeIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-sm text-muted-foreground mt-3 pl-13"
                  >
                    {feature.description}
                  </motion.p>
                )}
              </button>
            ))}
          </div>

          {/* Progress indicator */}
          <div className="hidden lg:flex items-center gap-2 mt-8 px-4">
            {FEATURES.map((_, index) => (
              <motion.div
                key={index}
                className="h-1 rounded-full"
                animate={{
                  width: activeIndex === index ? 32 : 8,
                  backgroundColor:
                    activeIndex === index
                      ? 'hsl(var(--primary))'
                      : 'hsl(var(--muted))',
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>

        {/* Right: Scrolling feature cards */}
        <div className="flex flex-col gap-24 py-16 lg:py-24 px-4 lg:px-8">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => {
                featureRefs.current[index] = el;
              }}
              className="scroll-mt-32"
            >
              {/* Mobile: Show text above screenshot */}
              <BlurFade inView delay={0.1} className="lg:hidden mb-6">
                <div className="mb-4 flex size-12 items-center justify-center rounded-2xl border bg-background shadow">
                  {feature.icon}
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">
                  {feature.eyebrow}
                </span>
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </BlurFade>

              {/* Screenshot with animation */}
              <motion.div
                className="relative overflow-hidden rounded-xl border bg-background shadow-lg"
                animate={{
                  scale: activeIndex === index ? 1 : 0.95,
                  opacity: activeIndex === index ? 1 : 0.6,
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/30">
                  <div className="flex gap-1.5">
                    <div className="size-3 rounded-full bg-muted-foreground/20" />
                    <div className="size-3 rounded-full bg-muted-foreground/20" />
                    <div className="size-3 rounded-full bg-muted-foreground/20" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-background rounded-md px-3 py-1.5 text-xs text-muted-foreground text-center max-w-xs mx-auto border">
                      app.adapty.io/{feature.id}
                    </div>
                  </div>
                </div>
                {/* Screenshot placeholder - replace with actual images */}
                <div className="aspect-[16/10] bg-gradient-to-br from-muted/50 to-muted flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4 mx-auto flex size-16 items-center justify-center rounded-2xl border bg-background shadow">
                      {feature.icon}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {feature.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </GridSection>
  );
}
