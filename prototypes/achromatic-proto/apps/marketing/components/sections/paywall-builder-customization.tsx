'use client';

import * as React from 'react';
import {
  LayoutIcon,
  TypeIcon,
  MousePointerClickIcon,
  PaletteIcon,
  SlidersIcon,
  TagIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon
} from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Card, CardContent } from '@workspace/ui/components/card';
import { cn } from '@workspace/ui/lib/utils';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';

// EXACT content from adapty.io/paywall-builder
const CUSTOMIZATION_FEATURES = [
  {
    icon: LayoutIcon,
    title: 'Hard/Soft paywall',
    description: 'See if your users are willing to pay right away.',
    details: 'Test whether users convert better with a hard paywall (must subscribe to continue) or a soft paywall (can dismiss and access limited content). Our data shows the optimal approach varies by app category.'
  },
  {
    icon: TypeIcon,
    title: 'Headline and benefits',
    description: "Test your creative hypotheses by changing the title catchphrase along with your app's benefits.",
    details: 'Experiment with different value propositions, emotional triggers, and benefit lists. We have seen headline changes alone increase conversion by up to 30%.'
  },
  {
    icon: MousePointerClickIcon,
    title: 'CTA-button text',
    description: '"Subscribe", "Continue", or any other variant - see which one brings higher conversion.',
    details: 'The right call-to-action can significantly impact your conversion. Test urgency-driven ("Start Now"), benefit-driven ("Unlock All Features"), or simple ("Continue") approaches.'
  },
  {
    icon: PaletteIcon,
    title: 'Background and color scheme',
    description: 'Upload any background image or video, choose matching color schemes, and select between dark or light mode.',
    details: 'Visual design affects trust and conversion. Support for gradients, images, videos, and animated backgrounds. Automatic color extraction for consistent theming.'
  },
  {
    icon: SlidersIcon,
    title: 'Extra elements',
    description: 'Experiment with money-making widgets like free trial toggle, carousel, and timer.',
    details: 'Add conversion-boosting elements: countdown timers create urgency, carousels showcase features, toggles let users choose their plan. Mix and match for maximum impact.'
  },
  {
    icon: TagIcon,
    title: 'Product combinations',
    description: 'Test Weekly, 6 months, Annual, Monthly and other types of subscription along with prices to get the best result.',
    details: 'Find the optimal price points and duration combinations. Test introductory offers, family plans, and bundled products. Our ML suggests winning combinations based on your user data.'
  }
];

// =============================================================================
// VARIANT: GRID - 3-column grid of cards
// =============================================================================
function GridCustomization() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Endless customization possibilities"
            description="Each paywall is composed of separate widget elements that can be placed to your liking."
          />
        </BlurFade>

        <BlurFade delay={0.1}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CUSTOMIZATION_FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={shouldReduceMotion ? undefined : {
                  y: hoveredIndex === index ? -4 : 0,
                  scale: hoveredIndex === index ? 1.02 : 1,
                }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              >
                <Card className={cn(
                  "h-full bg-background/50 backdrop-blur-sm border-border/50 transition-all duration-150 cursor-pointer",
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
                        className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
                      >
                        <feature.icon className="size-5" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: CAROUSEL - Horizontally scrolling cards with navigation
// =============================================================================
function CarouselCustomization() {
  const shouldReduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  const itemsPerView = 3;
  const maxIndex = Math.max(0, CUSTOMIZATION_FEATURES.length - itemsPerView);

  const goNext = () => setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  const goPrev = () => setCurrentIndex(prev => Math.max(prev - 1, 0));

  // Auto-advance
  React.useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, maxIndex]);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={700} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Endless customization possibilities"
            description="Each paywall is composed of separate widget elements that can be placed to your liking."
          />
        </BlurFade>

        <BlurFade delay={0.1}>
          <div
            className="mt-12 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Navigation buttons */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
              <motion.button
                whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
                onClick={goPrev}
                disabled={currentIndex === 0}
                className={cn(
                  "flex size-10 items-center justify-center rounded-full bg-background border shadow-md transition-opacity",
                  currentIndex === 0 && "opacity-50 cursor-not-allowed"
                )}
              >
                <ChevronLeftIcon className="size-5" />
              </motion.button>
            </div>

            <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
              <motion.button
                whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
                onClick={goNext}
                disabled={currentIndex >= maxIndex}
                className={cn(
                  "flex size-10 items-center justify-center rounded-full bg-background border shadow-md transition-opacity",
                  currentIndex >= maxIndex && "opacity-50 cursor-not-allowed"
                )}
              >
                <ChevronRightIcon className="size-5" />
              </motion.button>
            </div>

            {/* Cards container */}
            <div className="overflow-hidden px-2">
              <motion.div
                animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
                transition={{ type: 'spring', duration: 0.4, bounce: 0.1 }}
                className="flex gap-6"
              >
                {CUSTOMIZATION_FEATURES.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex-shrink-0 w-[calc(33.333%-16px)]"
                    whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.02 }}
                    transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                  >
                    <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-200 cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                          <feature.icon className="size-6" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Progress dots */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  animate={{
                    scale: currentIndex === index ? 1.2 : 1,
                    opacity: currentIndex === index ? 1 : 0.5,
                  }}
                  className={cn(
                    "size-2 rounded-full transition-colors",
                    currentIndex === index ? "bg-primary" : "bg-muted-foreground/30"
                  )}
                />
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: EXPANDABLE - Accordion-style expandable cards
// =============================================================================
function ExpandableCustomization() {
  const shouldReduceMotion = useReducedMotion();
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(0);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(prev => prev === index ? null : index);
  };

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={900} />
      <div className="container py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Heading */}
          <div className="lg:sticky lg:top-24">
            <BlurFade delay={0.05}>
              <div className="flex flex-col gap-4">
                <h2 className="text-pretty text-3xl font-bold sm:text-4xl lg:text-5xl">
                  Endless customization possibilities
                </h2>
                <p className="text-lg text-muted-foreground">
                  Each paywall is composed of separate widget elements that can be placed to your liking. Click each option to learn more.
                </p>
              </div>
            </BlurFade>
          </div>

          {/* Right: Expandable items */}
          <div className="space-y-4">
            {CUSTOMIZATION_FEATURES.map((feature, index) => (
              <BlurFade key={index} delay={0.1 + index * 0.03}>
                <motion.div
                  layout
                  className={cn(
                    "rounded-xl border bg-background/50 backdrop-blur-sm overflow-hidden transition-colors duration-200",
                    expandedIndex === index ? "border-primary/50 shadow-lg" : "border-border/50"
                  )}
                >
                  <motion.button
                    onClick={() => toggleExpanded(index)}
                    className="flex w-full items-center gap-4 p-5 text-left"
                  >
                    <motion.div
                      animate={shouldReduceMotion ? undefined : {
                        scale: expandedIndex === index ? 1.1 : 1,
                        rotate: expandedIndex === index ? 5 : 0,
                      }}
                      transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
                      className={cn(
                        "flex size-10 shrink-0 items-center justify-center rounded-lg transition-colors",
                        expandedIndex === index ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                      )}
                    >
                      <feature.icon className="size-5" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDownIcon className="size-5 text-muted-foreground" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        animate={shouldReduceMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                        exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
                      >
                        <div className="px-5 pb-5 pt-0">
                          <div className="pl-14 border-l-2 border-primary/20">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {feature.details}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </GridSection>
  );
}

// =============================================================================
// MAIN EXPORT
// =============================================================================
export type PaywallBuilderCustomizationVariant = 'grid' | 'carousel' | 'expandable';

type Props = {
  variant?: PaywallBuilderCustomizationVariant;
};

export function PaywallBuilderCustomization({ variant = 'grid' }: Props): React.JSX.Element {
  switch (variant) {
    case 'carousel':
      return <CarouselCustomization />;
    case 'expandable':
      return <ExpandableCustomization />;
    case 'grid':
    default:
      return <GridCustomization />;
  }
}
