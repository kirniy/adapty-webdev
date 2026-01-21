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
  ChevronDownIcon,
  type LucideIcon,
} from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { cn } from '@workspace/ui/lib/utils';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';
import { paywallBuilderContent } from '~/lib/content';

// =============================================================================
// ANIMATION CONSTANTS - Emil Kowalski Principles
// =============================================================================
const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

const ANIMATION = {
  card: {
    duration: 0.35,
    ease: EASE_OUT_QUART,
  },
  icon: {
    duration: 0.4,
    ease: EASE_OUT_EXPO,
  },
  expand: {
    duration: 0.3,
    ease: EASE_OUT_QUART,
  },
  stagger: {
    base: 0.05,
    multiplier: 0.03,
  },
};

// =============================================================================
// ICON MAPPING
// =============================================================================
const ICON_MAP: Record<string, LucideIcon> = {
  Layout: LayoutIcon,
  Type: TypeIcon,
  MousePointerClick: MousePointerClickIcon,
  Palette: PaletteIcon,
  Sliders: SlidersIcon,
  Tag: TagIcon,
};

const CUSTOMIZATION_FEATURES = paywallBuilderContent.customization.items.map(item => ({
  ...item,
  icon: ICON_MAP[item.icon] || LayoutIcon
}));

// =============================================================================
// CONTENT
// =============================================================================
const { customization } = paywallBuilderContent;

// =============================================================================
// SHARED COMPONENTS
// =============================================================================

type CustomizationCardProps = {
  icon: string;
  title: string;
  description: string;
  index: number;
  isHovered: boolean;
  onHover: (index: number | null) => void;
  shouldReduceMotion: boolean | null;
};

function CustomizationCard({
  icon,
  title,
  description,
  index,
  isHovered,
  onHover,
  shouldReduceMotion,
}: CustomizationCardProps) {
  const IconComponent = ICON_MAP[icon] || LayoutIcon;

  return (
    <motion.div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      animate={
        shouldReduceMotion
          ? undefined
          : {
            y: isHovered ? -6 : 0,
          }
      }
      transition={{
        duration: ANIMATION.card.duration,
        ease: ANIMATION.card.ease,
      }}
      className="group relative h-full"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-foreground/5 to-transparent opacity-0 transition-opacity"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />

      <div
        className={cn(
          'relative h-full rounded-2xl border bg-background/60 backdrop-blur-sm p-6 transition-all duration-200',
          isHovered
            ? 'border-foreground/20 shadow-xl shadow-foreground/5'
            : 'border-border/50'
        )}
      >
        {/* Icon with micro-interaction */}
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 6 : 0,
              }
          }
          transition={{
            duration: ANIMATION.icon.duration,
            ease: ANIMATION.icon.ease,
          }}
          className={cn(
            'mb-4 flex size-12 items-center justify-center rounded-xl transition-colors duration-200',
            isHovered
              ? 'bg-foreground text-background'
              : 'bg-muted/50 text-foreground'
          )}
        >
          <IconComponent className="size-6" strokeWidth={1.5} />
        </motion.div>

        {/* Content */}
        <h3 className="mb-2 text-lg font-semibold tracking-tight">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {/* Subtle indicator line */}
        <motion.div
          className="mt-4 h-px bg-gradient-to-r from-foreground/20 to-transparent"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: EASE_OUT_QUART }}
        />
      </div>
    </motion.div>
  );
}

// =============================================================================
// VARIANT: GRID - 3-column grid with staggered animations
// =============================================================================
function GridCustomization() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container relative z-10 py-20">
        <BlurFade delay={ANIMATION.stagger.base}>
          <SiteHeading
            title={customization.headline}
            description={customization.description}
          />
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CUSTOMIZATION_FEATURES.map((item, index) => (
            <BlurFade
              key={item.id}
              delay={ANIMATION.stagger.base * 2 + index * ANIMATION.stagger.multiplier}
            >
              <CustomizationCard
                icon={item.icon.displayName || 'LayoutIcon'} // Pass icon name or default
                title={item.title}
                description={item.description}
                index={index}
                isHovered={hoveredIndex === index}
                onHover={setHoveredIndex}
                shouldReduceMotion={shouldReduceMotion}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </GridSection>
  );
}

// =============================================================================
// VARIANT: CAROUSEL - Horizontally scrolling with navigation
// =============================================================================
function CarouselCustomization() {
  const shouldReduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = React.useState<number | null>(null);

  const itemsPerView = 3;
  const maxIndex = Math.max(0, CUSTOMIZATION_FEATURES.length - itemsPerView);

  const goNext = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const goPrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  // Auto-advance when not hovered
  React.useEffect(() => {
    if (isHovered || shouldReduceMotion) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, maxIndex, shouldReduceMotion]);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={700} />
      <div className="container relative z-10 py-20">
        <BlurFade delay={ANIMATION.stagger.base}>
          <SiteHeading
            title={customization.headline}
            description={customization.description}
          />
        </BlurFade>

        <BlurFade delay={ANIMATION.stagger.base * 2}>
          <div
            className="relative mt-12"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Navigation buttons */}
            <div className="absolute -left-4 top-1/2 z-10 -translate-y-1/2">
              <motion.button
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                onClick={goPrev}
                disabled={currentIndex === 0}
                className={cn(
                  'flex size-11 items-center justify-center rounded-full border bg-background shadow-lg transition-all',
                  currentIndex === 0
                    ? 'cursor-not-allowed opacity-40'
                    : 'hover:border-foreground/20 hover:shadow-xl'
                )}
              >
                <ChevronLeftIcon className="size-5" />
              </motion.button>
            </div>

            <div className="absolute -right-4 top-1/2 z-10 -translate-y-1/2">
              <motion.button
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                onClick={goNext}
                disabled={currentIndex >= maxIndex}
                className={cn(
                  'flex size-11 items-center justify-center rounded-full border bg-background shadow-lg transition-all',
                  currentIndex >= maxIndex
                    ? 'cursor-not-allowed opacity-40'
                    : 'hover:border-foreground/20 hover:shadow-xl'
                )}
              >
                <ChevronRightIcon className="size-5" />
              </motion.button>
            </div>

            {/* Cards container */}
            <div className="overflow-hidden px-2">
              <motion.div
                animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
                transition={{
                  duration: 0.5,
                  ease: EASE_OUT_QUART,
                }}
                className="flex gap-6"
              >
                {CUSTOMIZATION_FEATURES.map((item, index) => {
                  const IconComponent = item.icon;
                  const isCardHovered = hoveredCardIndex === index;

                  return (
                    <motion.div
                      key={item.id}
                      className="w-[calc(33.333%-16px)] flex-shrink-0"
                      onMouseEnter={() => setHoveredCardIndex(index)}
                      onMouseLeave={() => setHoveredCardIndex(null)}
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : { y: isCardHovered ? -8 : 0 }
                      }
                      transition={{
                        duration: ANIMATION.card.duration,
                        ease: ANIMATION.card.ease,
                      }}
                    >
                      <div
                        className={cn(
                          'h-full rounded-2xl border bg-background/60 backdrop-blur-sm p-6 transition-all duration-200',
                          isCardHovered
                            ? 'border-foreground/20 shadow-xl'
                            : 'border-border/50'
                        )}
                      >
                        <motion.div
                          animate={
                            shouldReduceMotion
                              ? undefined
                              : {
                                scale: isCardHovered ? 1.1 : 1,
                                rotate: isCardHovered ? 6 : 0,
                              }
                          }
                          transition={{
                            duration: ANIMATION.icon.duration,
                            ease: ANIMATION.icon.ease,
                          }}
                          className={cn(
                            'mb-4 flex size-14 items-center justify-center rounded-xl transition-colors duration-200',
                            isCardHovered
                              ? 'bg-foreground text-background'
                              : 'bg-muted/50 text-foreground'
                          )}
                        >
                          <IconComponent className="size-7" strokeWidth={1.5} />
                        </motion.div>
                        <h3 className="mb-2 text-lg font-semibold">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Progress indicators */}
            <div className="mt-8 flex justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="relative h-1.5 overflow-hidden rounded-full"
                  animate={{
                    width: currentIndex === index ? 32 : 8,
                    backgroundColor:
                      currentIndex === index
                        ? 'hsl(var(--foreground))'
                        : 'hsl(var(--muted-foreground) / 0.3)',
                  }}
                  transition={{ duration: 0.3, ease: EASE_OUT_QUART }}
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
// VARIANT: EXPANDABLE - Accordion with split layout
// =============================================================================
function ExpandableCustomization() {
  const shouldReduceMotion = useReducedMotion();
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(0);

  const toggleExpanded = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={900} />
      <div className="container relative z-10 py-20">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left: Sticky heading */}
          <div className="lg:sticky lg:top-24">
            <BlurFade delay={ANIMATION.stagger.base}>
              <div className="flex flex-col gap-4">
                <h2 className="text-pretty text-3xl font-bold sm:text-4xl lg:text-5xl">
                  {paywallBuilderContent.customization.headline}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {paywallBuilderContent.customization.description} Click each option to learn more.
                </p>
              </div>
            </BlurFade>

            {/* Visual indicator showing which item is selected */}
            <BlurFade delay={ANIMATION.stagger.base * 2}>
              <div className="mt-8 hidden lg:block">
                <div className="flex gap-2">
                  {customization.items.map((_, index) => (
                    <motion.div
                      key={index}
                      className="h-1 rounded-full"
                      animate={{
                        width: expandedIndex === index ? 40 : 12,
                        backgroundColor:
                          expandedIndex === index
                            ? 'hsl(var(--foreground))'
                            : 'hsl(var(--muted-foreground) / 0.2)',
                      }}
                      transition={{ duration: 0.3, ease: EASE_OUT_QUART }}
                    />
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Right: Expandable items */}
          <div className="space-y-3">
            {CUSTOMIZATION_FEATURES.map((item, index) => {
              const IconComponent = item.icon;
              const isExpanded = expandedIndex === index;

              return (
                <BlurFade
                  key={item.id}
                  delay={
                    ANIMATION.stagger.base * 2 +
                    index * ANIMATION.stagger.multiplier
                  }
                >
                  <motion.div
                    layout={!shouldReduceMotion}
                    className={cn(
                      'overflow-hidden rounded-xl border bg-background/60 backdrop-blur-sm transition-colors duration-200',
                      isExpanded
                        ? 'border-foreground/20 shadow-lg'
                        : 'border-border/50'
                    )}
                  >
                    <motion.button
                      onClick={() => toggleExpanded(index)}
                      className="flex w-full items-center gap-4 p-5 text-left"
                    >
                      {/* Icon */}
                      <motion.div
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : {
                              scale: isExpanded ? 1.1 : 1,
                              rotate: isExpanded ? 6 : 0,
                            }
                        }
                        transition={{
                          duration: ANIMATION.icon.duration,
                          ease: ANIMATION.icon.ease,
                        }}
                        className={cn(
                          'flex size-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-200',
                          isExpanded
                            ? 'bg-foreground text-background'
                            : 'bg-muted/50 text-foreground'
                        )}
                      >
                        <IconComponent className="size-5" strokeWidth={1.5} />
                      </motion.div>

                      {/* Text */}
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold tracking-tight">
                          {item.title}
                        </h3>
                        <p className="line-clamp-1 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>

                      {/* Chevron */}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{
                          duration: ANIMATION.expand.duration,
                          ease: ANIMATION.expand.ease,
                        }}
                        className="shrink-0"
                      >
                        <ChevronDownIcon className="size-5 text-muted-foreground" />
                      </motion.div>
                    </motion.button>

                    {/* Expandable content */}
                    <AnimatePresence mode="wait">
                      {isExpanded && (
                        <motion.div
                          initial={
                            shouldReduceMotion
                              ? { opacity: 0 }
                              : { height: 0, opacity: 0 }
                          }
                          animate={
                            shouldReduceMotion
                              ? { opacity: 1 }
                              : { height: 'auto', opacity: 1 }
                          }
                          exit={
                            shouldReduceMotion
                              ? { opacity: 0 }
                              : { height: 0, opacity: 0 }
                          }
                          transition={{
                            duration: ANIMATION.expand.duration,
                            ease: ANIMATION.expand.ease,
                          }}
                        >
                          <div className="px-5 pb-5">
                            <div className="ml-15 border-l-2 border-foreground/10 pl-4">
                              <p className="text-sm leading-relaxed text-muted-foreground">
                                {item.details}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </div>
    </GridSection>
  );
}

// =============================================================================
// MAIN EXPORT
// =============================================================================
export type PaywallBuilderCustomizationVariant =
  | 'grid'
  | 'carousel'
  | 'expandable';

type Props = {
  variant?: PaywallBuilderCustomizationVariant;
};

export function PaywallBuilderCustomization({
  variant = 'grid',
}: Props): React.JSX.Element {
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
