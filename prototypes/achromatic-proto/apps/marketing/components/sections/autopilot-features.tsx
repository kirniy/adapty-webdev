'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  CheckIcon,
  XIcon,
  BarChart3Icon,
  BanknoteIcon,
  LayoutDashboardIcon,
  BrainCircuitIcon,
  ScaleIcon,
  RocketIcon,
  ArrowRightIcon,
  ZapIcon,
  TrendingUpIcon,
  TargetIcon,
  FlaskConicalIcon,
  LineChartIcon,
} from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Button, buttonVariants } from '@workspace/ui/components/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@workspace/ui/components/accordion';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { SiteHeading } from '~/components/fragments/site-heading';

// =============================================================================
// SHARED DATA
// =============================================================================

const COMPARISON_DATA = {
  withAutopilot: {
    title: 'Testing with market intelligence',
    confidence: 'High - backed by market data',
    successRate: '3x more wins',
    timeToUplift: 'Weeks',
  },
  goingSolo: {
    title: 'Testing by guessing',
    confidence: 'Low - "Hope this works"',
    successRate: '1 out of 5 experiments',
    timeToUplift: 'Months',
  },
};

const MARKET_ADVANTAGES = [
  {
    icon: LayoutDashboardIcon,
    title: 'Expertise based on data from 15K+ apps',
    description: 'Learn from the collective wisdom of thousands of successful subscription apps.',
  },
  {
    icon: BanknoteIcon,
    title: '$2.1B revenue processed',
    description: 'Our recommendations are backed by real revenue data, not just theory.',
  },
  {
    icon: BarChart3Icon,
    title: 'Up-to-date benchmarks',
    description: 'Compare your performance against current industry standards.',
  },
];

const PROCESS_STEPS = [
  {
    step: 'Step 1',
    title: 'AI Analyzes Your Performance',
    description: 'Autopilot reviews your app and sums up your key metrics in one place.',
    icon: BrainCircuitIcon,
  },
  {
    step: 'Step 2',
    title: 'Competitor Benchmarks',
    description: 'Get a report that compares your paywall pricing strategy with your peers.',
    icon: TargetIcon,
  },
  {
    step: 'Step 3',
    title: 'Personalized Growth Plan',
    description: 'Receive a set of A/B test ideas with the highest growth potential, tailored to your app.',
    icon: RocketIcon,
  },
];

const CASE_STUDIES = [
  {
    name: 'Text on Pic',
    category: 'Health & Fitness',
    results: ['Over 30% MRR growth', 'Around 50% growth in ARPU'],
    href: '/case-studies/photo-editing-app-and-autopilot',
  },
  {
    name: 'iOS productivity app',
    category: 'Productivity',
    results: ['+50% revenue with Adapty Autopilot', 'MRR up by 18%'],
    href: '/case-studies/productivity-app-and-autopilot',
  },
];

const FEATURES = [
  {
    icon: BrainCircuitIcon,
    title: 'AI-Powered Insights',
    description: 'Get personalized recommendations based on your app data and market intelligence.',
    category: 'intelligence',
  },
  {
    icon: FlaskConicalIcon,
    title: 'Smart Experiments',
    description: 'Launch data-driven A/B tests that are 3x more likely to succeed.',
    category: 'testing',
  },
  {
    icon: LineChartIcon,
    title: 'Revenue Analytics',
    description: 'Track MRR, ARPU, and other key metrics with real-time dashboards.',
    category: 'analytics',
  },
  {
    icon: TargetIcon,
    title: 'Competitor Benchmarks',
    description: 'See how your paywall performs against similar apps in your category.',
    category: 'intelligence',
  },
  {
    icon: ZapIcon,
    title: 'Quick Launch',
    description: 'Go from insight to experiment in just a few clicks.',
    category: 'testing',
  },
  {
    icon: TrendingUpIcon,
    title: 'Growth Tracking',
    description: 'Monitor the impact of every experiment on your bottom line.',
    category: 'analytics',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Features' },
  { id: 'intelligence', label: 'Intelligence' },
  { id: 'testing', label: 'Testing' },
  { id: 'analytics', label: 'Analytics' },
];

// =============================================================================
// VARIANT: GRID - Original layout with comparison cards
// =============================================================================
function GridFeatures() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredAdvantage, setHoveredAdvantage] = React.useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = React.useState<number | null>(null);
  const [hoveredCaseStudy, setHoveredCaseStudy] = React.useState<number | null>(null);

  return (
    <GridSection>
      <div className="container py-16 md:py-24">
        {/* You guess. Autopilot knows. */}
        <BlurFade delay={0.1}>
          <SiteHeading
            title="You guess. Autopilot knows."
            description="Stop relying on intuition. Make data-driven decisions backed by market intelligence."
          />
        </BlurFade>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* With Autopilot */}
          <BlurFade delay={0.2}>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 h-full">
              <div className="text-sm font-medium text-primary">With Autopilot</div>
              <h3 className="mt-2 text-xl font-semibold">{COMPARISON_DATA.withAutopilot.title}</h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                    <CheckIcon className="size-4 text-emerald-500" />
                  </div>
                  <span className="text-muted-foreground">
                    Confidence: {COMPARISON_DATA.withAutopilot.confidence}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                    <CheckIcon className="size-4 text-emerald-500" />
                  </div>
                  <span className="text-muted-foreground">
                    Success rate: {COMPARISON_DATA.withAutopilot.successRate}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                    <CheckIcon className="size-4 text-emerald-500" />
                  </div>
                  <span className="text-muted-foreground">
                    Time to uplift: {COMPARISON_DATA.withAutopilot.timeToUplift}
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <Button asChild size="sm">
                  <Link href="/schedule-demo">Get a free audit</Link>
                </Button>
              </div>
            </div>
          </BlurFade>

          {/* Going Solo */}
          <BlurFade delay={0.3}>
            <div className="rounded-2xl border bg-card p-8 h-full">
              <div className="text-sm font-medium text-muted-foreground">Going Solo</div>
              <h3 className="mt-2 text-xl font-semibold">{COMPARISON_DATA.goingSolo.title}</h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-red-500/20">
                    <XIcon className="size-4 text-red-500" />
                  </div>
                  <span className="text-muted-foreground">
                    Confidence: {COMPARISON_DATA.goingSolo.confidence}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-red-500/20">
                    <XIcon className="size-4 text-red-500" />
                  </div>
                  <span className="text-muted-foreground">
                    Success rate: {COMPARISON_DATA.goingSolo.successRate}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-red-500/20">
                    <XIcon className="size-4 text-red-500" />
                  </div>
                  <span className="text-muted-foreground">
                    Time to uplift: {COMPARISON_DATA.goingSolo.timeToUplift}
                  </span>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>

        {/* +74% Revenue stat */}
        <BlurFade delay={0.4}>
          <div className="mt-16 rounded-2xl border bg-card p-8 md:p-12 text-center">
            <div className="text-5xl font-bold text-primary md:text-6xl">+74%</div>
            <div className="mt-2 text-xl font-semibold">Higher MRR</div>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              on average for apps that run paywall tests, based on Adapty's data.
            </p>
          </div>
        </BlurFade>

        {/* Unfair advantage */}
        <BlurFade delay={0.5}>
          <div className="mt-20">
            <SiteHeading
              title="Unfair advantage of market-wide data"
              description="Leverage insights from the entire Adapty ecosystem."
            />
          </div>
        </BlurFade>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {MARKET_ADVANTAGES.map((advantage, index) => (
            <BlurFade key={index} delay={0.6 + index * 0.1}>
              <motion.div
                onMouseEnter={() => setHoveredAdvantage(index)}
                onMouseLeave={() => setHoveredAdvantage(null)}
                animate={shouldReduceMotion ? undefined : {
                  y: hoveredAdvantage === index ? -4 : 0,
                  scale: hoveredAdvantage === index ? 1.02 : 1,
                }}
                transition={{ type: 'spring', duration: 0.25, bounce: 0.2 }}
                className="flex flex-col items-center rounded-xl border bg-card p-8 text-center h-full cursor-default"
              >
                <motion.div
                  animate={shouldReduceMotion ? undefined : {
                    scale: hoveredAdvantage === index ? 1.1 : 1,
                    rotate: hoveredAdvantage === index ? 5 : 0,
                  }}
                  transition={{ type: 'spring', duration: 0.2 }}
                  className="flex size-12 items-center justify-center rounded-full bg-primary/10"
                >
                  <advantage.icon className="size-6 text-primary" />
                </motion.div>
                <p className="mt-4 font-medium">{advantage.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{advantage.description}</p>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* 3-step process */}
        <BlurFade delay={0.7}>
          <div className="mt-20">
            <SiteHeading
              title="3-step data-driven process"
              description="Autopilot takes a holistic approach to generate personalized test recommendations."
            />
          </div>
        </BlurFade>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PROCESS_STEPS.map((step, index) => (
            <BlurFade key={index} delay={0.8 + index * 0.1}>
              <motion.div
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                animate={shouldReduceMotion ? undefined : {
                  y: hoveredStep === index ? -4 : 0,
                }}
                transition={{ type: 'spring', duration: 0.25, bounce: 0.2 }}
                className="rounded-2xl border bg-card p-8 h-full"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={shouldReduceMotion ? undefined : {
                      scale: hoveredStep === index ? 1.1 : 1,
                    }}
                    transition={{ type: 'spring', duration: 0.2 }}
                    className="flex size-10 items-center justify-center rounded-lg bg-primary/10"
                  >
                    <step.icon className="size-5 text-primary" />
                  </motion.div>
                  <div className="text-sm font-medium text-primary">{step.step}</div>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.9}>
          <div className="mt-8 text-center">
            <Link
              href="https://app.adapty.io/registration"
              className={cn(buttonVariants({ size: 'lg' }), 'rounded-xl')}
            >
              Try Autopilot for free
            </Link>
          </div>
        </BlurFade>

        {/* Case Studies */}
        <BlurFade delay={1.0}>
          <div className="mt-20">
            <SiteHeading
              title="Real growth powered by Autopilot"
              description="See how other apps have transformed their revenue with data-driven experiments."
            />
          </div>
        </BlurFade>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {CASE_STUDIES.map((caseStudy, index) => (
            <BlurFade key={index} delay={1.1 + index * 0.1}>
              <motion.div
                onMouseEnter={() => setHoveredCaseStudy(index)}
                onMouseLeave={() => setHoveredCaseStudy(null)}
              >
                <Link
                  href={caseStudy.href}
                  className="group block rounded-2xl border bg-card p-8 transition-colors hover:border-primary/50"
                >
                  <div className="text-sm text-muted-foreground">{caseStudy.category}</div>
                  <h3 className="mt-2 text-xl font-semibold group-hover:text-primary transition-colors">
                    {caseStudy.name}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {caseStudy.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center gap-2 text-muted-foreground">
                        <CheckIcon className="size-4 text-emerald-500" />
                        {result}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                    Read more
                    <motion.span
                      animate={shouldReduceMotion ? undefined : {
                        x: hoveredCaseStudy === index ? 4 : 0,
                      }}
                      transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
                    >
                      <ArrowRightIcon className="size-4" />
                    </motion.span>
                  </div>
                </Link>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* CTA */}
        <BlurFade delay={1.2}>
          <div className="mt-20 rounded-2xl border bg-gradient-to-br from-primary/10 to-primary/5 p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Get clear steps mapped out for you
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Stop guessing. Start growing with data-driven paywall experiments.
            </p>
            <div className="mt-8">
              <Link
                href="/schedule-demo"
                className={cn(buttonVariants({ size: 'lg' }), 'rounded-xl')}
              >
                Boost your growth with Autopilot
              </Link>
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: BENTO - Bento grid layout with expandable cards
// =============================================================================
function BentoFeatures() {
  const shouldReduceMotion = useReducedMotion();
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <GridSection>
      <div className="container py-16 md:py-24">
        <BlurFade delay={0.1}>
          <SiteHeading
            badge="Autopilot Features"
            title="Everything you need to optimize paywalls"
            description="AI-powered tools that turn guesswork into data-driven growth."
          />
        </BlurFade>

        {/* Bento grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((feature, index) => (
            <BlurFade key={index} delay={0.15 + index * 0.05}>
              <motion.div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                animate={shouldReduceMotion ? undefined : {
                  y: hoveredIndex === index ? -4 : 0,
                }}
                transition={{ type: 'spring', duration: 0.25, bounce: 0.2 }}
                className={cn(
                  "rounded-xl border bg-card p-6 cursor-pointer transition-colors",
                  hoveredIndex === index && "border-primary/50",
                  index === 0 && "lg:col-span-2 lg:row-span-1",
                  index === 3 && "lg:col-span-2 lg:row-span-1"
                )}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    animate={shouldReduceMotion ? undefined : {
                      scale: hoveredIndex === index ? 1.1 : 1,
                      rotate: hoveredIndex === index ? 5 : 0,
                    }}
                    transition={{ type: 'spring', duration: 0.2 }}
                    className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10"
                  >
                    <feature.icon className="size-5 text-primary" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-4 pt-4 border-t"
                    >
                      <p className="text-sm text-muted-foreground">
                        Powered by data from 15K+ apps and $2.1B in processed revenue.
                        Click to learn how this feature can boost your paywall performance.
                      </p>
                      <Link
                        href="/schedule-demo"
                        className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-primary hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Learn more
                        <ArrowRightIcon className="size-3" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* Stats highlight */}
        <BlurFade delay={0.5}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border bg-primary/5 p-6 text-center">
              <div className="text-4xl font-bold text-primary">+74%</div>
              <div className="mt-1 text-sm text-muted-foreground">Higher MRR on average</div>
            </div>
            <div className="rounded-xl border bg-card p-6 text-center">
              <div className="text-4xl font-bold">3x</div>
              <div className="mt-1 text-sm text-muted-foreground">More winning experiments</div>
            </div>
            <div className="rounded-xl border bg-card p-6 text-center">
              <div className="text-4xl font-bold">15K+</div>
              <div className="mt-1 text-sm text-muted-foreground">Apps powering insights</div>
            </div>
          </div>
        </BlurFade>

        {/* CTA */}
        <BlurFade delay={0.6}>
          <div className="mt-12 text-center">
            <Link
              href="/schedule-demo"
              className={cn(buttonVariants({ size: 'lg' }), 'rounded-xl')}
            >
              Get a free audit
              <ArrowRightIcon className="ml-2 size-4" />
            </Link>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: TABS - Tabbed interface with category filtering
// =============================================================================
function TabsFeatures() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [hoveredFeature, setHoveredFeature] = React.useState<number | null>(null);

  const filteredFeatures = activeCategory === 'all'
    ? FEATURES
    : FEATURES.filter(f => f.category === activeCategory);

  return (
    <GridSection>
      <div className="container py-16 md:py-24">
        <BlurFade delay={0.1}>
          <SiteHeading
            badge="Autopilot Features"
            title="Powerful tools for paywall optimization"
            description="Explore features by category to find exactly what you need."
          />
        </BlurFade>

        {/* Category tabs */}
        <BlurFade delay={0.15}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  activeCategory === category.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="autopilot-active-tab"
                    className="absolute inset-0 bg-primary rounded-lg"
                    transition={{ type: 'spring', duration: 0.3, bounce: 0.15 }}
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </motion.button>
            ))}
          </div>
        </BlurFade>

        {/* Features grid with animation */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  animate={shouldReduceMotion ? undefined : {
                    y: hoveredFeature === index ? -4 : 0,
                  }}
                  transition={{ type: 'spring', duration: 0.25, bounce: 0.2 }}
                  className={cn(
                    "rounded-xl border bg-card p-6 h-full transition-colors",
                    hoveredFeature === index && "border-primary/50"
                  )}
                >
                  <motion.div
                    animate={shouldReduceMotion ? undefined : {
                      scale: hoveredFeature === index ? 1.1 : 1,
                      rotate: hoveredFeature === index ? 5 : 0,
                    }}
                    transition={{ type: 'spring', duration: 0.2 }}
                    className="flex size-12 items-center justify-center rounded-lg bg-primary/10"
                  >
                    <feature.icon className="size-6 text-primary" />
                  </motion.div>
                  <h3 className="mt-4 font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Process steps */}
        <BlurFade delay={0.4}>
          <div className="mt-20">
            <SiteHeading
              title="How Autopilot works"
              description="Three simple steps to data-driven growth."
            />
          </div>
        </BlurFade>

        <div className="mt-10 relative">
          {/* Connection line */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[calc(100%-4rem)] h-0.5 bg-border hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <BlurFade key={index} delay={0.5 + index * 0.1}>
                <div className="relative text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold relative z-10">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* CTA */}
        <BlurFade delay={0.7}>
          <div className="mt-16 text-center">
            <Link
              href="/schedule-demo"
              className={cn(buttonVariants({ size: 'lg' }), 'rounded-xl')}
            >
              Start your free audit
              <ArrowRightIcon className="ml-2 size-4" />
            </Link>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// =============================================================================
// MAIN EXPORT
// =============================================================================
export type AutopilotFeaturesVariant = 'grid' | 'bento' | 'tabs';
export const AUTOPILOT_FEATURES_VARIANTS = ['grid', 'bento', 'tabs'] as const;

type Props = {
  variant?: AutopilotFeaturesVariant;
};

export function AutopilotFeatures({ variant = 'grid' }: Props): React.JSX.Element {
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
