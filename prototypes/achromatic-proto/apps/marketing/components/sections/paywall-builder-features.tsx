'use client';

import * as React from 'react';
import {
  RefreshCwIcon,
  ZapIcon,
  FlaskConicalIcon,
  LayoutGridIcon,
  SlidersHorizontalIcon,
  GlobeIcon,
  SmartphoneIcon,
  BoxIcon,
  ChevronRightIcon
} from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Card, CardContent } from '@workspace/ui/components/card';
import { cn } from '@workspace/ui/lib/utils';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';

// EXACT content from adapty.io/paywall-builder
const FEATURES = [
  {
    icon: RefreshCwIcon,
    title: 'Scale your current paywall',
    description: "Re-create your paywall with the builder to be able to iterate faster: quickly adjust any of its elements, clone it, or launch an A/B test within minutes.",
    category: 'builder'
  },
  {
    icon: ZapIcon,
    title: 'Apply changes in real-time',
    description: "Changes to any element of the paywall made with the builder can be applied right away - there's no need to wait for the next app release.",
    category: 'builder'
  },
  {
    icon: FlaskConicalIcon,
    title: 'Seamless A/B testing integration',
    description: "Create a paywall pair with the builder and launch A/B tests with advanced analytics right away to find the most profitable variant.",
    category: 'testing'
  },
  {
    icon: LayoutGridIcon,
    title: 'Deeply customizable structure',
    description: "Use the vertical layout structure and paywall preview to compose the very paywall you have in mind. Add multiple elements or keep it minimalistic.",
    category: 'builder'
  },
  {
    icon: SlidersHorizontalIcon,
    title: 'Flexible element adjustments',
    description: "Customize elements by adjusting color, size, alignment, opacity, and more. Choose among numerous popular fonts or upload custom ones.",
    category: 'customization'
  },
  {
    icon: GlobeIcon,
    title: 'Localization and personalization',
    description: "Boost your app's LTV by personalizing paywalls based on country or user properties. Localize multiple strings with a convenient table view.",
    category: 'localization'
  },
  {
    icon: SmartphoneIcon,
    title: 'Multi-screen support',
    description: "Paywalls autoscale to any phone screen size and can be previewed for numerous iOS and Android devices before publishing.",
    category: 'builder'
  },
  {
    icon: BoxIcon,
    title: 'Truly native experience',
    description: "Adapty paywalls are built using native components, not webviews. They are platform-native, just like the rest of your app screens.",
    category: 'performance'
  }
];

const CATEGORIES = ['all', 'builder', 'testing', 'customization', 'localization', 'performance'] as const;
type Category = typeof CATEGORIES[number];

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
            title="Powerful features for every need"
            description="Everything you need to create, test, and optimize your paywalls."
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

        <BlurFade delay={0.3}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Start with a template or from scratch</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pick one of our pre-made industry-tested templates or start from a blank page.
            </p>
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
            title="Powerful features for every need"
            description="Everything you need to create, test, and optimize your paywalls."
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
    builder: 'Builder',
    testing: 'A/B Testing',
    customization: 'Customization',
    localization: 'Localization',
    performance: 'Performance',
  };

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1000} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Powerful features for every need"
            description="Everything you need to create, test, and optimize your paywalls."
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

        <BlurFade delay={0.3}>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Start with a template or from scratch</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pick one of our pre-made industry-tested templates or start from a blank page.
            </p>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// =============================================================================
// MAIN EXPORT
// =============================================================================
export type PaywallBuilderFeaturesVariant = 'grid' | 'bento' | 'tabs';

type Props = {
  variant?: PaywallBuilderFeaturesVariant;
};

export function PaywallBuilderFeatures({ variant = 'grid' }: Props): React.JSX.Element {
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
