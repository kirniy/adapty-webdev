'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  ArrowRightIcon,
  LineChartIcon,
  UsersIcon,
  CalendarIcon,
  ReceiptIcon,
  SparklesIcon,
  ChevronRightIcon
} from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Card, CardContent } from '@workspace/ui/components/card';
import { cn } from '@workspace/ui/lib/utils';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';

import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';

// EXACT content from adapty.io/ltv-analytics (scraped 2026-01-21)
const FEATURES = [
  {
    icon: LineChartIcon,
    title: 'Real-time LTV chart',
    description: "Keep track of your subscriber's lifetime value either by subscription periods or by days. Use it to adjust your CPA and paid campaigns.",
    category: 'analytics'
  },
  {
    icon: UsersIcon,
    title: 'Know the LTV of any group of users',
    description: 'Break down LTV by any group of users, any paywall, or A/B test. Find the most performed segments and grow them.',
    category: 'segmentation'
  },
  {
    icon: CalendarIcon,
    title: 'Get cumulative lifetime value by days or renewals',
    description: 'Switch LTV calculations by charging periods or by days.',
    category: 'analytics'
  },
  {
    icon: ReceiptIcon,
    title: 'Deduct taxes and commissions',
    description: 'View revenue data considering taxes and store commissions to know your true earnings.',
    category: 'revenue'
  },
  {
    icon: SparklesIcon,
    title: 'Predict LTV growth',
    description: 'Predict your LTV and revenue data for up to 12 months to see when your traffic starts to pay off.',
    category: 'prediction',
    link: '/predictive-analytics',
    linkText: 'More about AI prediction'
  }
];

const CATEGORIES = ['all', 'analytics', 'segmentation', 'revenue', 'prediction'] as const;
type Category = typeof CATEGORIES[number];

// Testimonial from adapty.io/ltv-analytics
const FEATURED_TESTIMONIAL = {
  quote: "Adapty's analytics platform has become an invaluable asset for optimizing our app's monetization strategy. The detailed subscription metrics and LTV prediction tools provide us with real insights to drive our revenue growth.",
  name: 'Burak Berber',
  title: 'Marketing Team Lead at Appnation'
};

// Related pages from adapty.io/ltv-analytics
const RELATED_PAGES = [
  { title: 'AI LTV and revenue predictions', link: '/predictive-analytics' },
  { title: 'Revenue analytics', link: '/revenue-analytics' }
];

// =============================================================================
// VARIANT: GRID - Classic grid with testimonial and features
// =============================================================================
function GridFeatures() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1400} />
      <div className="container py-20 relative z-10">
        {/* Featured testimonial */}
        <BlurFade delay={0.05}>
          <div className="max-w-3xl mx-auto mb-16">
            <Card className="bg-background/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8 text-center">
                <p className="text-lg text-foreground italic mb-6">
                  "{FEATURED_TESTIMONIAL.quote}"
                </p>
                <p className="font-semibold">{FEATURED_TESTIMONIAL.name}</p>
                <p className="text-sm text-muted-foreground">{FEATURED_TESTIMONIAL.title}</p>
              </CardContent>
            </Card>
          </div>
        </BlurFade>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.05}>
              <motion.div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={shouldReduceMotion ? undefined : {
                  y: hoveredIndex === index ? -4 : 0,
                  scale: hoveredIndex === index ? 1.02 : 1,
                }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              >
                <Card className={cn(
                  "h-full bg-background/50 backdrop-blur-sm border-border/50 transition-all duration-150 ease-out cursor-pointer",
                  hoveredIndex === index && "border-primary/50 shadow-lg"
                )}>
                  <CardContent className="p-6">
                    <motion.div
                      animate={shouldReduceMotion ? undefined : {
                        scale: hoveredIndex === index ? 1.1 : 1,
                        rotate: hoveredIndex === index ? 5 : 0,
                      }}
                      transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
                      className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4"
                    >
                      <feature.icon className="size-6" />
                    </motion.div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{feature.description}</p>
                    {feature.link && feature.linkText && (
                      <Link
                        href={feature.link}
                        className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                      >
                        {feature.linkText}
                        <ArrowRightIcon className="size-3" />
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* Migration CTA */}
        <BlurFade delay={0.35}>
          <div className="mt-20 text-center">
            <div className="inline-block p-8 rounded-2xl bg-muted/50 border border-border/50 max-w-2xl hover:border-primary/30 transition-colors duration-150">
              <h3 className="text-xl font-semibold mb-2">Using another or in-house solution for subscriptions?</h3>
              <p className="text-muted-foreground mb-4">
                We've got you covered and will help you move your data securely and seamlessly without losing a single subscriber.
              </p>
              <Link
                href="/schedule-demo"
                className="text-primary font-medium hover:underline inline-flex items-center gap-1"
              >
                Schedule a call to know more
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          </div>
        </BlurFade>

        {/* Learn more section */}
        <BlurFade delay={0.4}>
          <div className="mt-16">
            <SiteHeading title="Learn more" />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {RELATED_PAGES.map((page, index) => (
                <Link
                  key={index}
                  href={page.link}
                  className="px-6 py-3 rounded-lg bg-muted/50 border border-border/50 font-medium hover:border-primary/30 hover:text-primary transition-colors duration-150 inline-flex items-center gap-2"
                >
                  {page.title}
                  <ArrowRightIcon className="size-4" />
                </Link>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: BENTO - Asymmetric bento grid with featured cards
// =============================================================================
function BentoFeatures() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  // First two are featured
  const featured = FEATURES.slice(0, 2);
  const regular = FEATURES.slice(2);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1200} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Powerful LTV analytics tools"
            description="Understand your subscriber lifetime value in detail and make data-driven decisions."
          />
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured cards */}
          {featured.map((feature, index) => (
            <BlurFade key={`featured-${index}`} delay={0.1 + index * 0.05}>
              <motion.div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={shouldReduceMotion ? undefined : {
                  y: hoveredIndex === index ? -6 : 0,
                  scale: hoveredIndex === index ? 1.01 : 1,
                }}
                transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                className={cn(
                  "lg:col-span-1",
                  index === 0 && "lg:row-span-2"
                )}
              >
                <Card className={cn(
                  "h-full bg-gradient-to-br from-primary/5 to-background border-primary/20 transition-all duration-200 cursor-pointer",
                  hoveredIndex === index && "border-primary/50 shadow-xl",
                  index === 0 && "min-h-[300px]"
                )}>
                  <CardContent className="p-8 h-full flex flex-col">
                    <motion.div
                      animate={shouldReduceMotion ? undefined : {
                        scale: hoveredIndex === index ? 1.15 : 1,
                      }}
                      transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
                      className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6"
                    >
                      <feature.icon className="size-7" />
                    </motion.div>
                    <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">{feature.description}</p>
                    <motion.div
                      animate={shouldReduceMotion ? undefined : {
                        x: hoveredIndex === index ? 4 : 0,
                        opacity: hoveredIndex === index ? 1 : 0.6,
                      }}
                      className="mt-4 flex items-center text-sm font-medium text-primary"
                    >
                      Learn more <ChevronRightIcon className="ml-1 size-4" />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </BlurFade>
          ))}

          {/* Regular cards */}
          {regular.map((feature, index) => (
            <BlurFade key={`regular-${index}`} delay={0.15 + index * 0.03}>
              <motion.div
                onMouseEnter={() => setHoveredIndex(index + featured.length)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={shouldReduceMotion ? undefined : {
                  y: hoveredIndex === index + featured.length ? -4 : 0,
                }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              >
                <Card className={cn(
                  "h-full bg-background/50 backdrop-blur-sm border-border/50 transition-all duration-150 cursor-pointer",
                  hoveredIndex === index + featured.length && "border-primary/30 shadow-lg"
                )}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <feature.icon className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                        {feature.link && feature.linkText && (
                          <Link
                            href={feature.link}
                            className="text-sm text-primary hover:underline inline-flex items-center gap-1 mt-2"
                          >
                            {feature.linkText}
                            <ArrowRightIcon className="size-3" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* Testimonial */}
        <BlurFade delay={0.3}>
          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="bg-background/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8 text-center">
                <p className="text-lg text-foreground italic mb-6">
                  "{FEATURED_TESTIMONIAL.quote}"
                </p>
                <p className="font-semibold">{FEATURED_TESTIMONIAL.name}</p>
                <p className="text-sm text-muted-foreground">{FEATURED_TESTIMONIAL.title}</p>
              </CardContent>
            </Card>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: TABS - Tabbed content with category filter
// =============================================================================
function TabsFeatures() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = React.useState<Category>('all');
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const filteredFeatures = activeCategory === 'all'
    ? FEATURES
    : FEATURES.filter(f => f.category === activeCategory);

  const categoryLabels: Record<Category, string> = {
    all: 'All Features',
    analytics: 'Analytics',
    segmentation: 'Segmentation',
    revenue: 'Revenue',
    prediction: 'Prediction',
  };

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1200} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Powerful LTV analytics tools"
            description="Understand your subscriber lifetime value in detail and make data-driven decisions."
          />
        </BlurFade>

        {/* Category tabs */}
        <BlurFade delay={0.1}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-muted-foreground"
                )}
              >
                {categoryLabels[category]}
              </motion.button>
            ))}
          </div>
        </BlurFade>

        {/* Features grid with animation */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                layout
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card className={cn(
                  "h-full bg-background/50 backdrop-blur-sm border-border/50 transition-all duration-150 cursor-pointer",
                  hoveredIndex === index && "border-primary/50 shadow-lg -translate-y-1"
                )}>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={shouldReduceMotion ? undefined : {
                            scale: hoveredIndex === index ? 1.1 : 1,
                          }}
                          transition={{ type: 'spring', duration: 0.2, bounce: 0.2 }}
                          className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                        >
                          <feature.icon className="size-5" />
                        </motion.div>
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          {categoryLabels[feature.category as Category]}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                        {feature.link && feature.linkText && (
                          <Link
                            href={feature.link}
                            className="text-sm text-primary hover:underline inline-flex items-center gap-1 mt-2"
                          >
                            {feature.linkText}
                            <ArrowRightIcon className="size-3" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Testimonial */}
        <BlurFade delay={0.3}>
          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="bg-background/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8 text-center">
                <p className="text-lg text-foreground italic mb-6">
                  "{FEATURED_TESTIMONIAL.quote}"
                </p>
                <p className="font-semibold">{FEATURED_TESTIMONIAL.name}</p>
                <p className="text-sm text-muted-foreground">{FEATURED_TESTIMONIAL.title}</p>
              </CardContent>
            </Card>
          </div>
        </BlurFade>

        {/* Learn more section */}
        <BlurFade delay={0.35}>
          <div className="mt-16">
            <SiteHeading title="Learn more" />
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {RELATED_PAGES.map((page, index) => (
                <Link
                  key={index}
                  href={page.link}
                  className="px-6 py-3 rounded-lg bg-muted/50 border border-border/50 font-medium hover:border-primary/30 hover:text-primary transition-colors duration-150 inline-flex items-center gap-2"
                >
                  {page.title}
                  <ArrowRightIcon className="size-4" />
                </Link>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// =============================================================================
// MAIN EXPORT
// =============================================================================
export type LTVAnalyticsFeaturesVariant = 'grid' | 'bento' | 'tabs';

type Props = {
  variant?: LTVAnalyticsFeaturesVariant;
};

export function LTVAnalyticsFeatures({ variant = 'grid' }: Props): React.JSX.Element {
  switch (variant) {
    case 'bento':
      return <BentoFeatures />;
    case 'tabs':
      return <TabsFeatures />;
    case 'grid':
    default:
      return <GridFeatures />;
  }
}
