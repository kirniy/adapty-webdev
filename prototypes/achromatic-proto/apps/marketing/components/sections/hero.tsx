'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRightIcon,
  BarChart3Icon,
  BoxIcon,
  CheckIcon,
  ChevronRightIcon,
  CircuitBoardIcon,
  LayoutIcon,
  PlayIcon
} from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { SectionBackground } from '~/components/fragments/section-background';
import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { BlurFade } from '~/components/fragments/blur-fade';
import {
  useDashedThicknessVariant,
  useGridColorVariant,
  useGridOpacityVariant,
  useGridZIndexVariant,
  useHeroLinesVariant,
  useHeroVariant,
  useImageSetVariant,
  useMonochromeMode,
  type ImageSetVariant
} from '~/lib/debug-context';

// Helper to get image path based on selected image set
function getImagePath(basePath: string, imageSet: ImageSetVariant): string {
  // basePath is like '/assets/hero/light-feature1.webp'
  // We need to transform it to '/assets/hero/set1/light-feature1.webp'
  return basePath.replace('/assets/hero/', `/assets/hero/${imageSet}/`);
}

// Feature tab content data
const HERO_FEATURES = [
  {
    id: 'paywall-builder',
    icon: LayoutIcon,
    label: 'Paywall Builder',
    headline: 'Build paywalls without code',
    description: 'Create stunning paywalls with our visual builder. No engineering required - designers and product managers can iterate independently.',
    highlights: [
      'Drag-and-drop visual editor',
      'Native iOS & Android rendering',
      'Real-time preview on device',
      'Template library included'
    ],
    lightImage: '/assets/hero/light-feature1.webp',
    darkImage: '/assets/hero/dark-feature1.webp',
  },
  {
    id: 'ab-testing',
    icon: PlayIcon,
    label: 'A/B Testing',
    headline: 'Optimize with experiments',
    description: 'Run A/B tests on paywalls, pricing, and offers. Make data-driven decisions with statistical significance.',
    highlights: [
      'Multi-variant experiments',
      'Statistical significance tracking',
      'Revenue impact analysis',
      'Automatic winner selection'
    ],
    lightImage: '/assets/hero/light-feature2.webp',
    darkImage: '/assets/hero/dark-feature2.webp',
  },
  {
    id: 'analytics',
    icon: BarChart3Icon,
    label: 'Analytics',
    headline: 'Understand your revenue',
    description: 'Real-time subscription analytics with cohort analysis, funnel tracking, and predictive metrics.',
    highlights: [
      'Real-time revenue dashboard',
      'Cohort retention analysis',
      'Funnel conversion tracking',
      'LTV predictions'
    ],
    lightImage: '/assets/hero/light-feature3.webp',
    darkImage: '/assets/hero/dark-feature3.webp',
  },
  {
    id: 'sdk',
    icon: BoxIcon,
    label: 'SDK',
    headline: 'Integrate in minutes',
    description: 'Production-ready SDKs for all major platforms. Handle subscriptions, purchases, and receipt validation automatically.',
    highlights: [
      'iOS, Android, React Native, Flutter',
      'Server-side receipt validation',
      'Webhook notifications',
      'Sandbox testing support'
    ],
    lightImage: '/assets/hero/light-feature4.webp',
    darkImage: '/assets/hero/dark-feature4.webp',
  },
  {
    id: 'integrations',
    icon: CircuitBoardIcon,
    label: 'Integrations',
    headline: 'Connect your stack',
    description: 'Send subscription events to your analytics, marketing, and CRM tools. 30+ integrations available.',
    highlights: [
      'Amplitude, Mixpanel, Segment',
      'AppsFlyer, Adjust, Branch',
      'Slack, Webhooks, API',
      'Custom integrations available'
    ],
    lightImage: '/assets/hero/light-feature5.webp',
    darkImage: '/assets/hero/dark-feature5.webp',
  },
];

function HeroPill(): React.JSX.Element {
  const [isHovered, setIsHovered] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <BlurFade delay={0.1}>
      <motion.div
        className="flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
        transition={{ type: 'spring', duration: 0.2, bounce: 0.2 }}
      >
        <Link href="https://adapty.io/ebooks/100k-app-playbook/">
          <Badge
            variant="outline"
            className="group relative h-8 overflow-hidden rounded-full px-3 text-xs font-medium shadow-xs transition-all duration-200 hover:bg-accent/50 hover:shadow-md sm:text-sm cursor-pointer"
          >
            <BorderBeam
              size={40}
              duration={4}
              delay={0}
              borderWidth={1.5}
              colorFrom="#3b82f6"
              colorTo="#8b5cf6"
            />
            <motion.div
              className="w-fit py-0.5 text-center text-xs text-blue-500 sm:text-sm"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ type: 'spring', duration: 0.2, bounce: 0.3 }}
            >
              Free Ebook
            </motion.div>
            <span className="mx-2 h-3 w-px bg-border" />
            <span className="text-muted-foreground">$100K playbook</span>
            <motion.span
              animate={{ x: isHovered ? 3 : 0 }}
              transition={{ type: 'spring', duration: 0.15, bounce: 0.3 }}
            >
              <ChevronRightIcon className="ml-1 size-3 shrink-0 text-muted-foreground" />
            </motion.span>
          </Badge>
        </Link>
      </motion.div>
    </BlurFade>
  );
}

function HeroTitle(): React.JSX.Element {
  return (
    <BlurFade delay={0.2}>
      <h1 className="mt-6 text-center text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
        Revenue management
        <br />
        <span className="text-muted-foreground">for in-app purchases</span>
      </h1>
    </BlurFade>
  );
}

function HeroDescription(): React.JSX.Element {
  return (
    <BlurFade delay={0.3}>
      <p className="mx-auto mt-4 max-w-2xl text-balance text-center text-lg text-muted-foreground lg:text-xl">
        Save months on integrating subscriptions and double your app revenue with paywall management, A/B testing, and real-time analytics.
      </p>
    </BlurFade>
  );
}

// Animated hero button with glow and press effects
function HeroButton({
  href,
  variant = 'default',
  children,
}: {
  href: string;
  variant?: 'default' | 'outline';
  children: React.ReactNode;
}) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      animate={{
        y: shouldReduceMotion ? 0 : isPressed ? 1 : isHovered ? -2 : 0,
        scale: shouldReduceMotion ? 1 : isPressed ? 0.97 : 1,
      }}
      transition={{ type: 'spring', duration: 0.15, bounce: 0 }}
      className="relative"
    >
      {/* Glow effect for primary button */}
      {variant === 'default' && (
        <motion.div
          className="absolute inset-0 -z-10 rounded-xl bg-primary/25 blur-lg"
          animate={{
            opacity: isHovered ? 0.8 : 0,
            scale: isHovered ? 1.15 : 1,
          }}
          transition={{ duration: 0.25 }}
        />
      )}
      <Link
        href={href}
        className={cn(
          buttonVariants({ variant }),
          'h-10 rounded-xl px-5 transition-shadow',
          variant === 'default' && 'shadow-md hover:shadow-lg'
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}

function HeroButtons(): React.JSX.Element {
  return (
    <BlurFade delay={0.4}>
      <div className="mx-auto mt-8 flex justify-center gap-3">
        <HeroButton href="https://app.adapty.io/registration" variant="default">
          Start for free
        </HeroButton>
        <HeroButton href="https://adapty.io/schedule-demo/" variant="outline">
          Book a demo
        </HeroButton>
      </div>
    </BlurFade>
  );
}

function MainDashedGridLines(): React.JSX.Element {
  const heroVariant = useHeroVariant();
  const dashedThickness = useDashedThicknessVariant();
  const gridColor = useGridColorVariant();
  const gridOpacity = useGridOpacityVariant();
  const gridZIndex = useGridZIndexVariant();

  const strokeWidth = dashedThickness === 'thin' ? 0.5 : dashedThickness === 'thick' ? 2 : 1;
  const showHorizontalLine = heroVariant !== 'marketing';

  const strokeColor =
    gridColor === 'default' ? 'var(--border)' :
      gridColor === 'muted' ? 'var(--muted-foreground)' :
        gridColor === 'accent' ? 'var(--primary)' :
          gridColor === 'blue' ? '#3B82F6' :
            gridColor === 'purple' ? '#8B5CF6' :
              'var(--border)';

  const opacityValue =
    gridOpacity === 'faint' ? 0.2 :
      gridOpacity === 'subtle' ? 0.5 :
        gridOpacity === 'visible' ? 0.8 :
          1.0;

  const zIndexClass =
    gridZIndex === 'deep' ? '-z-10' :
      gridZIndex === 'back' ? '-z-1' :
        gridZIndex === 'normal' ? 'z-0' :
          'z-10';

  // Lines end right after the tab selector bar (~700px from top)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: opacityValue }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className={zIndexClass}
    >
      <svg className="absolute left-[16.85%] top-0 hidden h-[700px] w-px mask-[linear-gradient(to_bottom,#0000,#000_128px,#000_calc(100%-24px),#0000)] lg:block">
        <line
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="100%"
          strokeLinecap="round"
          strokeDasharray="5 5"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      </svg>
      <svg className="absolute right-[16.85%] top-0 hidden h-[700px] w-px mask-[linear-gradient(to_bottom,#0000,#000_128px,#000_calc(100%-24px),#0000)] lg:block">
        <line
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="100%"
          strokeLinecap="round"
          strokeDasharray="5 5"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      </svg>
      {/* Horizontal line at bottom of hero header area - hidden for marketing variant */}
      {showHorizontalLine && (
        <svg className="absolute bottom-[52px] left-[calc(50%-50vw)] hidden h-px w-screen mask-[linear-gradient(to_right,#0000,#000_100px,#000_calc(100%-100px),#0000)] lg:block">
          <line
            x1="0"
            y1="0.5"
            x2="100%"
            y2="0.5"
            strokeLinecap="round"
            strokeDasharray="5 5"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
        </svg>
      )}
    </motion.div>
  );
}

// Learn more link with arrow animation
function LearnMoreLink({ href, label }: { href: string; label: string }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
    >
      Learn more about {label}
      <motion.span
        animate={{ x: isHovered ? 4 : 0 }}
        transition={{ type: 'spring', duration: 0.15, bounce: 0.3 }}
      >
        <ArrowRightIcon className="size-4" />
      </motion.span>
    </Link>
  );
}

// Auto-rotation interval in milliseconds
const AUTO_ROTATE_INTERVAL = 6000;

// Feature tab component with hover state, micro-interactions, and progress indicator
function FeatureTab({
  feature,
  isActive,
  onClick,
  progress,
  isAutoRotating,
}: {
  feature: typeof HERO_FEATURES[0];
  isActive: boolean;
  onClick: () => void;
  progress: number; // 0-100 for progress bar
  isAutoRotating: boolean;
}) {
  const Icon = feature.icon;
  const [isHovered, setIsHovered] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      className={cn(
        'group relative flex shrink-0 sm:shrink sm:flex-1 flex-col items-center gap-2 px-3 sm:px-4 py-3 cursor-pointer',
        'border-b-2 transition-colors duration-150',
        isActive
          ? 'border-b-transparent text-foreground'
          : 'border-b-transparent text-muted-foreground hover:text-foreground hover:border-b-border'
      )}
    >
      <div className={cn(
        'flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium whitespace-nowrap',
        isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'
      )}>
        <motion.div
          animate={{
            scale: isActive ? 1.1 : isHovered ? 1.05 : 1,
            rotate: isActive ? 5 : 0,
          }}
          transition={{
            type: 'spring',
            duration: 0.3,
            bounce: isActive ? 0.4 : 0,
          }}
        >
          <Icon className="size-4 shrink-0" />
        </motion.div>
        <span>{feature.label}</span>
      </div>
      {/* Active indicator - solid when user selected, animated progress when auto-rotating */}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden">
          {/* Background track */}
          <motion.div
            layoutId="activeTabTrack"
            className="absolute inset-0 bg-primary/20"
            transition={{ type: 'spring', duration: 0.3, bounce: 0.15 }}
          />
          {/* Progress fill */}
          <motion.div
            layoutId="activeTabIndicator"
            className="absolute inset-y-0 left-0 bg-primary"
            initial={false}
            animate={{
              width: isAutoRotating ? `${progress}%` : '100%',
            }}
            transition={
              isAutoRotating
                ? { duration: 0.1, ease: 'linear' }
                : { type: 'spring', duration: 0.3, bounce: 0.15 }
            }
          />
        </div>
      )}
    </motion.button>
  );
}

// Feature content with animated transitions (faster, spring-based)
function FeatureContent({ feature }: { feature: typeof HERO_FEATURES[0] }) {
  const imageSet = useImageSetVariant();
  const monochromeMode = useMonochromeMode();

  return (
    <motion.div
      key={feature.id}
      initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -4, filter: 'blur(2px)' }}
      transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
      className="grid gap-8 lg:grid-cols-5"
    >
      {/* Text content */}
      <div className="flex flex-col justify-center lg:col-span-2">
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', delay: 0.05, duration: 0.25, bounce: 0 }}
        >
          <Badge variant="secondary" className="mb-4 w-fit rounded-full">
            <feature.icon className="mr-1.5 size-3" />
            {feature.label}
          </Badge>
          <h3 className="mb-3 text-2xl font-bold tracking-tight lg:text-3xl">
            {feature.headline}
          </h3>
          <p className="mb-6 text-muted-foreground leading-relaxed">
            {feature.description}
          </p>
        </motion.div>

        {/* Highlights with stagger animation */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', delay: 0.1, duration: 0.25, bounce: 0 }}
          className="space-y-3"
        >
          {feature.highlights.map((highlight, index) => (
            <motion.li
              key={highlight}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: 'spring',
                delay: 0.12 + index * 0.04,
                duration: 0.2,
                bounce: 0.1
              }}
              className="flex items-center gap-3 text-sm group/item cursor-default"
            >
              <motion.div
                className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                whileHover={{ scale: 1.15, backgroundColor: 'hsl(var(--primary))' }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0.3 }}
              >
                <CheckIcon className="size-3 group-hover/item:text-primary-foreground transition-colors" />
              </motion.div>
              <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">{highlight}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Learn more link with arrow animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', delay: 0.25, duration: 0.25, bounce: 0 }}
          className="mt-6"
        >
          <LearnMoreLink href={`/features/${feature.id}`} label={feature.label} />
        </motion.div>
      </div>

      {/* Image with enhanced hover effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ type: 'spring', delay: 0.08, duration: 0.35, bounce: 0 }}
        className="relative lg:col-span-3"
        whileHover={{ scale: 1.01 }}
      >
        <div className={cn(
          "relative overflow-hidden rounded-xl border bg-gradient-to-b from-muted/30 to-muted/10 shadow-lg transition-all hover:shadow-xl",
          monochromeMode && "grayscale hover:grayscale-0 transition-[filter] duration-500"
        )}>
          <Image
            priority={feature.id === 'paywall-builder'}
            quality={100}
            src={getImagePath(feature.lightImage, imageSet)}
            width={1328}
            height={727}
            alt={`${feature.label} screenshot`}
            className="block dark:hidden"
          />
          <Image
            priority={feature.id === 'paywall-builder'}
            quality={100}
            src={getImagePath(feature.darkImage, imageSet)}
            width={1328}
            height={727}
            alt={`${feature.label} screenshot`}
            className="hidden dark:block"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function HeroFeatureShowcase(): React.JSX.Element {
  const [activeFeature, setActiveFeature] = React.useState(HERO_FEATURES[0]);
  const [isAutoRotating, setIsAutoRotating] = React.useState(true);
  const [isPaused, setIsPaused] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const heroLinesVariant = useHeroLinesVariant();
  const linesBelow = heroLinesVariant === 'below';
  const shouldReduceMotion = useReducedMotion();

  // Handle user click - stop auto-rotation permanently
  const handleTabClick = React.useCallback((feature: typeof HERO_FEATURES[0]) => {
    setActiveFeature(feature);
    setIsAutoRotating(false);
    setProgress(100); // Fill the bar when user selects
  }, []);

  // Auto-rotation effect
  React.useEffect(() => {
    if (!isAutoRotating || isPaused || shouldReduceMotion) {
      return;
    }

    const progressInterval = 50; // Update progress every 50ms for smooth animation
    const progressIncrement = (progressInterval / AUTO_ROTATE_INTERVAL) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + progressIncrement;
        if (next >= 100) {
          // Move to next tab
          setActiveFeature((current) => {
            const currentIndex = HERO_FEATURES.findIndex((f) => f.id === current.id);
            const nextIndex = (currentIndex + 1) % HERO_FEATURES.length;
            return HERO_FEATURES[nextIndex];
          });
          return 0; // Reset progress
        }
        return next;
      });
    }, progressInterval);

    return () => clearInterval(timer);
  }, [isAutoRotating, isPaused, shouldReduceMotion]);

  // Reset progress when active feature changes (for auto-rotation)
  React.useEffect(() => {
    if (isAutoRotating) {
      setProgress(0);
    }
  }, [activeFeature.id, isAutoRotating]);

  return (
    <BlurFade delay={0.5}>
      <div className="mt-12 lg:mt-16">
        {/* Full-width tab bar - scrollable on mobile */}
        <div
          className={cn(
            'mb-8 border-b border-border overflow-x-auto scrollbar-hide',
            linesBelow && 'bg-background'
          )}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="mx-auto flex w-full max-w-4xl min-w-max sm:min-w-0">
            {HERO_FEATURES.map((feature) => (
              <FeatureTab
                key={feature.id}
                feature={feature}
                isActive={activeFeature.id === feature.id}
                onClick={() => handleTabClick(feature)}
                progress={activeFeature.id === feature.id ? progress : 0}
                isAutoRotating={isAutoRotating && !isPaused}
              />
            ))}
          </div>
        </div>

        {/* Content area */}
        <div className={cn(
          'container pb-16',
          linesBelow && 'relative z-20 bg-background'
        )}>
          <AnimatePresence mode="wait">
            <FeatureContent key={activeFeature.id} feature={activeFeature} />
          </AnimatePresence>
        </div>
      </div>
    </BlurFade>
  );
}

// Trust signal - simple text only
function HeroTrustSignal(): React.JSX.Element {
  return (
    <BlurFade delay={0.5}>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        Trusted by <span className="font-medium text-foreground">15,000+</span> apps worldwide
      </p>
    </BlurFade>
  );
}

export function Hero(): React.JSX.Element {
  return (
    <GridSection className="overflow-x-hidden relative">
      <SectionBackground height={900} />
      <MainDashedGridLines />
      <div className="relative z-10 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <HeroPill />
            <HeroTitle />
            <HeroDescription />
            <HeroButtons />
            <HeroTrustSignal />
          </div>
        </div>
        <HeroFeatureShowcase />
      </div>
    </GridSection>
  );
}
