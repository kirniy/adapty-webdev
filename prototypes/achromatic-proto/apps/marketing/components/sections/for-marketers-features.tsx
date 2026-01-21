'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  FlaskConicalIcon,
  LayoutIcon,
  TargetIcon,
  BrainCircuitIcon,
  BarChart3Icon,
  SendIcon,
  SearchIcon,
  GlobeIcon,
  ArrowRightIcon,
  ChevronDownIcon,
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

// EXACT content from adapty.io/for-marketers (scraped 2026-01-21)
const FEATURES = [
  {
    icon: FlaskConicalIcon,
    title: 'Easy paywall testing without the dev team',
    description: 'Find the optimal paywall with Adapty paywall A/B testing that requires no additional coding. Compare subscriptions, offers, free trials, copy, images, and more.',
    link: '/paywall-ab-testing',
    linkText: 'Paywall A/B testing',
    category: 'testing'
  },
  {
    icon: LayoutIcon,
    title: 'Build and deploy high-quality paywalls with no coding',
    description: 'Use our collection of highly customizable industry-proven paywall templates to change paywall UI and pricing quickly.',
    link: '/paywall-builder',
    linkText: 'Try our Paywall Builder',
    category: 'builder'
  },
  {
    icon: TargetIcon,
    title: 'Target paywalls to user segments',
    description: 'Fine-tune your offers for different groups of users, like selling more expensive products to your power users while promoting a free trial for others.',
    link: '/paywall-targeting',
    linkText: 'More about targeting',
    category: 'targeting'
  },
  {
    icon: BrainCircuitIcon,
    title: 'Stop the guesswork, get accurate LTV prediction',
    description: "With machine learning, Adapty's LTV and revenue prediction will help you understand your profitability for a given cohort.",
    link: null,
    linkText: null,
    category: 'analytics'
  },
  {
    icon: BarChart3Icon,
    title: 'Revenue analytics you can trust',
    description: 'Get real-time vital subscription and revenue analytics. Segment and filter audience, compare time periods, and track your sales funnel with cohort analysis.',
    link: null,
    linkText: null,
    category: 'analytics'
  },
  {
    icon: SendIcon,
    title: 'Send revenue events to MMP and analytics',
    description: "We know it's important to use other services to help you optimize your ad campaigns and user acquisition. Adapty makes it easy to push data to 3rd party services.",
    link: null,
    linkText: null,
    category: 'integrations'
  },
  {
    icon: SearchIcon,
    title: 'Built-in Apple Search Ads analytics',
    description: 'Analyze your ASA performance right in the Adapty dashboard. Get revenue, LTV, and other core metrics on the keyword level.',
    link: null,
    linkText: null,
    category: 'analytics'
  },
  {
    icon: GlobeIcon,
    title: 'Convenient paywall localization',
    description: 'Trying a new traffic source or a country? Localize paywalls for the local audience right in the Adapty dashboard.',
    link: '/paywall-localization',
    linkText: 'Localize paywalls in a few clicks',
    category: 'localization'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Features' },
  { id: 'builder', label: 'Builder' },
  { id: 'testing', label: 'Testing' },
  { id: 'targeting', label: 'Targeting' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'integrations', label: 'Integrations' },
  { id: 'localization', label: 'Localization' },
] as const;

// Related roles from adapty.io/for-marketers
const RELATED_ROLES = [
  {
    title: 'For developers',
    description: 'Integrate in-app purchases in minutes.',
    link: '/for-developers'
  },
  {
    title: 'For app owners',
    description: 'Instantly available cross-platform subscription analytics.',
    link: '/for-app-owners'
  }
];

export type ForMarketersFeaturesVariant = 'grid' | 'bento' | 'tabs';

export const FOR_MARKETERS_FEATURES_VARIANTS = ['grid', 'bento', 'tabs'] as const;

type Props = {
  variant?: ForMarketersFeaturesVariant;
};

// Variant 1: Grid - Classic 2-column grid layout
function GridFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1200} />
      <div className="container py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map((feature, index) => (
            <BlurFade key={index} delay={0.05 + index * 0.02}>
              <motion.div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                <Card className={cn(
                  "h-full bg-background/50 backdrop-blur-sm border-border/50 transition-all duration-200",
                  hoveredIndex === index && "border-primary/30 shadow-lg"
                )}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <motion.div
                        animate={shouldReduceMotion ? undefined : {
                          scale: hoveredIndex === index ? 1.1 : 1,
                          rotate: hoveredIndex === index ? 5 : 0,
                        }}
                        transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
                        className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                      >
                        <feature.icon className="size-6" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{feature.description}</p>
                        {feature.link && feature.linkText && (
                          <Link
                            href={feature.link}
                            className="text-sm text-primary hover:underline inline-flex items-center gap-1 group"
                          >
                            {feature.linkText}
                            <motion.span
                              animate={shouldReduceMotion ? undefined : { x: hoveredIndex === index ? 3 : 0 }}
                            >
                              <ArrowRightIcon className="size-3" />
                            </motion.span>
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

        {/* Related roles section */}
        <BlurFade delay={0.25}>
          <div className="mt-16">
            <SiteHeading title="We're here for your team" />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {RELATED_ROLES.map((role, index) => (
                <Link key={index} href={role.link} className="group">
                  <motion.div
                    whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  >
                    <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-150">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors inline-flex items-center gap-2">
                          {role.title}
                          <ArrowRightIcon className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-sm text-muted-foreground">{role.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// Variant 2: Bento - Asymmetric bento grid with expandable cards
function BentoFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  // Define grid positions for bento layout
  const getGridClass = (index: number) => {
    switch (index) {
      case 0: return 'md:col-span-2'; // Wide card
      case 1: return 'md:row-span-2'; // Tall card
      default: return '';
    }
  };

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1400} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Everything a marketer needs"
            description="Build, test, and optimize paywalls without writing code."
          />
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {FEATURES.map((feature, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.02} className={getGridClass(index)}>
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
                className="h-full"
              >
                <Card
                  className={cn(
                    "h-full bg-background/50 backdrop-blur-sm border-border/50 cursor-pointer transition-all duration-200",
                    expandedIndex === index && "border-primary/30 shadow-lg ring-2 ring-primary/20",
                    index === 0 && "bg-gradient-to-br from-primary/5 via-background/80 to-background/50 border-primary/20"
                  )}
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  <CardContent className={cn("p-6 h-full flex flex-col", index === 0 && "p-8")}>
                    <div className="flex items-start justify-between mb-4">
                      <div className={cn(
                        "flex items-center justify-center rounded-xl bg-primary/10 text-primary",
                        index === 0 ? "size-14" : "size-10"
                      )}>
                        <feature.icon className={index === 0 ? "size-7" : "size-5"} />
                      </div>
                      <motion.div
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        className="text-muted-foreground"
                      >
                        <ChevronDownIcon className="size-4" />
                      </motion.div>
                    </div>
                    <h3 className={cn("font-semibold mb-2", index === 0 ? "text-xl" : "text-lg")}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {feature.description}
                    </p>

                    <AnimatePresence>
                      {expandedIndex === index && feature.link && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t">
                            <Link
                              href={feature.link}
                              onClick={(e) => e.stopPropagation()}
                              className="text-sm text-primary hover:underline inline-flex items-center gap-2"
                            >
                              {feature.linkText}
                              <ChevronRightIcon className="size-4" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                  <BorderBeam
                    size={200}
                    duration={12}
                    delay={0}
                    borderWidth={1.5}
                    colorFrom="hsl(var(--primary))"
                    colorTo="hsl(var(--primary)/0)"
                    className="opacity-60"
                  />
                </Card>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* Related roles section */}
        <BlurFade delay={0.3}>
          <div className="mt-16">
            <SiteHeading title="We're here for your team" />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {RELATED_ROLES.map((role, index) => (
                <Link key={index} href={role.link} className="group">
                  <motion.div
                    whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  >
                    <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-150">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors inline-flex items-center gap-2">
                          {role.title}
                          <ArrowRightIcon className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-sm text-muted-foreground">{role.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// Variant 3: Tabs - Category tabs with filtered features
function TabsFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = React.useState<typeof CATEGORIES[number]['id']>('all');
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const filteredFeatures = activeCategory === 'all'
    ? FEATURES
    : FEATURES.filter(f => f.category === activeCategory);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1200} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Everything a marketer needs"
            description="Build, test, and optimize paywalls without writing code."
          />
        </BlurFade>

        {/* Category tabs */}
        <BlurFade delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200",
                  activeCategory === category.id
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeMarketersTab"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: 'spring', duration: 0.4, bounce: 0.2 }}
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </motion.button>
            ))}
          </div>
        </BlurFade>

        {/* Feature cards with AnimatePresence */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                >
                  <Card className={cn(
                    "h-full bg-background/50 backdrop-blur-sm border-border/50 transition-all duration-200",
                    hoveredIndex === index && "border-primary/30 shadow-lg"
                  )}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          animate={shouldReduceMotion ? undefined : {
                            scale: hoveredIndex === index ? 1.1 : 1,
                          }}
                          className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"
                        >
                          <feature.icon className="size-6" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-lg">{feature.title}</h3>
                          <span className="text-xs text-primary/70 font-medium uppercase tracking-wider">
                            {feature.category}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{feature.description}</p>

                      {feature.link && feature.linkText && (
                        <Link
                          href={feature.link}
                          className="text-sm text-primary hover:underline inline-flex items-center gap-1 group"
                        >
                          {feature.linkText}
                          <motion.span
                            animate={shouldReduceMotion ? undefined : { x: hoveredIndex === index ? 3 : 0 }}
                          >
                            <ArrowRightIcon className="size-3" />
                          </motion.span>
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Related roles section */}
        <BlurFade delay={0.25}>
          <div className="mt-16">
            <SiteHeading title="We're here for your team" />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {RELATED_ROLES.map((role, index) => (
                <Link key={index} href={role.link} className="group">
                  <motion.div
                    whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  >
                    <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-150">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors inline-flex items-center gap-2">
                          {role.title}
                          <ArrowRightIcon className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-sm text-muted-foreground">{role.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

export function ForMarketersFeatures({ variant = 'grid' }: Props): React.JSX.Element {
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
