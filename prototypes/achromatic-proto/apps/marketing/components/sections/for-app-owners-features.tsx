'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  RocketIcon,
  CodeIcon,
  BarChart3Icon,
  TrendingUpIcon,
  ShieldCheckIcon,
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

// EXACT content from adapty.io/for-app-owners (scraped 2026-01-21)
const FEATURES = [
  {
    icon: RocketIcon,
    title: 'Increase marketing speed',
    description: 'Use Adapty to launch app updates faster, reduce costs, and minimize reliance on development team.',
    category: 'marketing',
    details: [
      'Easily edit pricing and products with a user-friendly dashboard',
      'Update paywalls in real time without releasing a new app version',
      'Run A/B tests to optimize conversion and make data-driven decisions'
    ]
  },
  {
    icon: CodeIcon,
    title: 'Save dev team efforts',
    description: 'Reduce development time and costs with simple integration and no-code tools.',
    category: 'development',
    details: [
      'Integrate in hours, not weeks, with just a few SDK methods',
      'Cross-platform subscriber sync across iOS, Android, and Web',
      'Well-maintained SDKs for every major platform'
    ]
  },
  {
    icon: BarChart3Icon,
    title: 'Clear subscription reporting',
    description: 'Get a complete picture of your subscription business with real-time analytics.',
    category: 'analytics',
    details: [
      'Track MRR, LTV, churn, and 20+ other key metrics',
      'Cohort analysis and funnel reports for deep insights',
      'Export data to your BI tools or data warehouse'
    ]
  },
  {
    icon: TrendingUpIcon,
    title: 'Predict revenue for 4 quarters',
    description: 'Use Adapty Forecast to predict subscription revenue and plan your business growth.',
    category: 'analytics',
    details: [
      'AI-powered revenue predictions based on your data',
      'Scenario modeling for different growth strategies',
      'Track actual vs predicted to improve accuracy'
    ]
  },
  {
    icon: ShieldCheckIcon,
    title: 'Access rights',
    description: 'Control who can access what with granular permissions and role-based access.',
    category: 'management',
    details: [
      'Role-based access control for team members',
      'Separate environments for development and production',
      'Audit logs for compliance and security'
    ]
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Features' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'development', label: 'Development' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'management', label: 'Management' },
] as const;

// Related roles from adapty.io/for-app-owners
const RELATED_ROLES = [
  {
    title: 'For developers',
    description: 'Integrate and deploy in-app purchases in minutes with a single line of code.',
    link: '/for-developers'
  },
  {
    title: 'For marketers',
    description: 'Build, manage, and target paywalls without leaving the dashboard.',
    link: '/for-marketers'
  }
];

export type ForAppOwnersFeaturesVariant = 'grid' | 'bento' | 'tabs';

export const FOR_APP_OWNERS_FEATURES_VARIANTS = ['grid', 'bento', 'tabs'] as const;

type Props = {
  variant?: ForAppOwnersFeaturesVariant;
};

// Variant 1: Grid - Classic 3-column grid layout
function GridFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1400} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Everything you need to run a subscription business"
            description="From analytics to access control, Adapty provides the tools you need to grow."
          />
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.02}>
              <motion.div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
              >
                <Card className={cn(
                  "h-full bg-background/50 backdrop-blur-sm border-border/50 transition-all duration-200",
                  hoveredIndex === index && "border-primary/30 shadow-lg"
                )}>
                  <CardContent className="p-6">
                    <motion.div
                      animate={shouldReduceMotion ? undefined : {
                        scale: hoveredIndex === index ? 1.1 : 1,
                        rotate: hoveredIndex === index ? 5 : 0,
                      }}
                      transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
                      className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4"
                    >
                      <feature.icon className="size-6" />
                    </motion.div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">-</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
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
                    <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-150 ease-out motion-reduce:transition-none">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors inline-flex items-center gap-2">
                          {role.title}
                          <motion.span
                            animate={shouldReduceMotion ? undefined : { x: 0 }}
                            whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                          >
                            <ArrowRightIcon className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.span>
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

// Variant 2: Bento - Asymmetric bento grid with featured cards
function BentoFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1200} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Everything you need to run a subscription business"
            description="From analytics to access control, Adapty provides the tools you need to grow."
          />
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Featured large card - first feature */}
          <BlurFade delay={0.1} className="md:col-span-2 lg:row-span-2">
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
              className="h-full"
            >
              <Card
                className={cn(
                  "h-full bg-gradient-to-br from-primary/5 via-background/80 to-background/50 backdrop-blur-sm border-primary/20 cursor-pointer transition-all duration-200",
                  expandedIndex === 0 && "ring-2 ring-primary/30"
                )}
                onClick={() => setExpandedIndex(expandedIndex === 0 ? null : 0)}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <RocketIcon className="size-7" />
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === 0 ? 180 : 0 }}
                      className="text-muted-foreground"
                    >
                      <ChevronDownIcon className="size-5" />
                    </motion.div>
                  </div>
                  <h3 className="font-bold text-2xl mb-3">{FEATURES[0].title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{FEATURES[0].description}</p>

                  <AnimatePresence>
                    {expandedIndex === 0 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t space-y-3">
                          {FEATURES[0].details.map((detail, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className="flex items-start gap-3 text-sm"
                            >
                              <ChevronRightIcon className="size-4 text-primary shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{detail}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          </BlurFade>

          {/* Remaining features in smaller cards */}
          {FEATURES.slice(1).map((feature, i) => {
            const index = i + 1;
            return (
              <BlurFade key={index} delay={0.12 + i * 0.02}>
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -2 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                >
                  <Card
                    className={cn(
                      "h-full bg-background/50 backdrop-blur-sm border-border/50 cursor-pointer transition-all duration-200",
                      expandedIndex === index && "border-primary/30 shadow-lg"
                    )}
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <feature.icon className="size-5" />
                        </div>
                        <motion.div
                          animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                          className="text-muted-foreground"
                        >
                          <ChevronDownIcon className="size-4" />
                        </motion.div>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>

                      <AnimatePresence>
                        {expandedIndex === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 mt-4 border-t space-y-2">
                              {feature.details.map((detail, j) => (
                                <motion.div
                                  key={j}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: j * 0.05 }}
                                  className="flex items-start gap-2 text-xs"
                                >
                                  <ChevronRightIcon className="size-3 text-primary shrink-0 mt-0.5" />
                                  <span className="text-muted-foreground">{detail}</span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              </BlurFade>
            );
          })}
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
            title="Everything you need to run a subscription business"
            description="From analytics to access control, Adapty provides the tools you need to grow."
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
                    layoutId="activeTab"
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
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
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

                      {/* Details always visible in tabs variant */}
                      <div className="space-y-2 pt-4 border-t border-border/50">
                        {feature.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <ChevronRightIcon className="size-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
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

export function ForAppOwnersFeatures({ variant = 'grid' }: Props): React.JSX.Element {
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
