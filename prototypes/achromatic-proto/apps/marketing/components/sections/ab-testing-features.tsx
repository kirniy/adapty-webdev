'use client';

import * as React from 'react';
import {
  FlaskConicalIcon,
  BarChart3Icon,
  BrainCircuitIcon,
  PlayIcon,
  TargetIcon,
  SlidersHorizontalIcon,
  GlobeIcon,
  LinkIcon,
  ChevronRightIcon
} from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Card, CardContent } from '@workspace/ui/components/card';
import { cn } from '@workspace/ui/lib/utils';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';

// EXACT content from adapty.io/paywall-ab-testing (scraped 2026-01-21)
const FEATURES = [
  {
    icon: FlaskConicalIcon,
    title: 'A/B/C testing',
    description: 'Compare several paywalls simultaneously. Test multiple variants at once to find the winning combination faster.',
    category: 'testing'
  },
  {
    icon: BarChart3Icon,
    title: '20+ metrics calculated automatically',
    description: 'Track conversion rates, ARPU, LTV, trial starts, and more. All metrics are calculated in real-time without manual work.',
    category: 'analytics'
  },
  {
    icon: BrainCircuitIcon,
    title: 'Bayesian statistics',
    description: 'Our machine learning algorithms use Bayesian statistics to determine winners with high confidence and statistical significance.',
    category: 'analytics'
  },
  {
    icon: PlayIcon,
    title: 'Start and stop tests anytime',
    description: 'Full control over your experiments. Pause, resume, or stop tests whenever you need without losing data.',
    category: 'testing'
  },
  {
    icon: TargetIcon,
    title: 'Audience targeting',
    description: 'Run tests for specific user segments based on country, subscription status, custom attributes, and more.',
    category: 'targeting'
  },
  {
    icon: SlidersHorizontalIcon,
    title: 'Traffic allocation',
    description: 'Control how much traffic each variant receives. Start with small percentages and scale up winning variants.',
    category: 'testing'
  },
  {
    icon: GlobeIcon,
    title: 'Localization testing',
    description: 'Test different paywall designs and copy for different locales. Find what works best in each market.',
    category: 'localization'
  },
  {
    icon: LinkIcon,
    title: 'Seamless integration',
    description: 'Works with Paywall Builder and Remote Config. No additional setup required to start testing.',
    category: 'integration'
  }
];

const CATEGORIES = ['all', 'testing', 'analytics', 'targeting', 'localization', 'integration'] as const;
type Category = typeof CATEGORIES[number];

// Related features from adapty.io/paywall-ab-testing
const RELATED_FEATURES = [
  { name: 'Remote Config', description: 'Update app behavior without releases' },
  { name: 'Localize', description: 'Translate paywalls for any locale' },
  { name: 'Targeting', description: 'Show different paywalls to different users' },
  { name: 'Paywall Builder', description: 'Create paywalls without coding' }
];

// =============================================================================
// VARIANT: GRID - Classic 2-column grid of cards
// =============================================================================
function GridFeatures() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1000} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Everything you need for paywall experiments"
            description="Powerful A/B testing tools designed specifically for subscription apps."
          />
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map((feature, index) => (
            <BlurFade key={index} delay={0.1 + index * 0.02}>
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
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </BlurFade>
          ))}
        </div>

        {/* Related features section */}
        <BlurFade delay={0.3}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Works seamlessly with</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              A/B testing integrates with all Adapty features for a complete monetization solution.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {RELATED_FEATURES.map((feature, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border/50 hover:border-primary/30 transition-colors duration-150">
                  <p className="font-medium text-foreground">{feature.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                </div>
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

  // Featured items get larger cards
  const featured = FEATURES.slice(0, 2);
  const regular = FEATURES.slice(2);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1200} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Everything you need for paywall experiments"
            description="Powerful A/B testing tools designed specifically for subscription apps."
          />
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured cards - span 2 cols on lg */}
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
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </BlurFade>
          ))}
        </div>
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
    testing: 'Testing',
    analytics: 'Analytics',
    targeting: 'Targeting',
    localization: 'Localization',
    integration: 'Integration',
  };

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1000} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Everything you need for paywall experiments"
            description="Powerful A/B testing tools designed specifically for subscription apps."
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
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Related features section */}
        <BlurFade delay={0.3}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Works seamlessly with</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              A/B testing integrates with all Adapty features for a complete monetization solution.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {RELATED_FEATURES.map((feature, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border/50 hover:border-primary/30 transition-colors duration-150">
                  <p className="font-medium text-foreground">{feature.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                </div>
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
export type ABTestingFeaturesVariant = 'grid' | 'bento' | 'tabs';

type Props = {
  variant?: ABTestingFeaturesVariant;
};

export function ABTestingFeatures({ variant = 'grid' }: Props): React.JSX.Element {
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
