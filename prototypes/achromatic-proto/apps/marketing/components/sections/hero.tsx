'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { SectionBackground } from '~/components/fragments/section-background';
import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { BlurFade } from '~/components/fragments/blur-fade';
import { SlideIn } from '~/components/fragments/slide-in';
import {
  useDashedThicknessVariant,
  useGridColorVariant,
  useGridOpacityVariant,
  useGridZIndexVariant,
  useHeroVariant,
} from '~/lib/debug-context';


function HeroPill(): React.JSX.Element {
  const [isHovered, setIsHovered] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <BlurFade delay={0.1}>
      <motion.div
        className="flex items-center justify-start min-[400px]:justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
        transition={{ type: 'spring', duration: 0.2, bounce: 0.2 }}
      >
        <Link href="https://adapty.io/ebooks/100k-app-playbook/">
          <Badge
            variant="outline"
            className="group relative h-8 overflow-hidden rounded-full px-3 text-xs font-medium transition-all duration-200 hover:bg-accent/50 sm:text-sm cursor-pointer"
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
              transition={{ type: 'spring', duration: 0.2, bounce: 0.15 }}
            >
              Free Ebook
            </motion.div>
            <span className="mx-2 h-3 w-px bg-border" />
            <span className="text-muted-foreground">$100K playbook</span>
            <motion.span
              animate={{ x: isHovered ? 3 : 0 }}
              transition={{ type: 'spring', duration: 0.15, bounce: 0.15 }}
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
    <SlideIn delay={0.2} duration={0.6} direction="up">
      <h1 className="mt-6 text-left min-[400px]:text-center text-[19px] font-bold leading-tight tracking-tight min-[390px]:text-[21px] min-[420px]:text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        Revenue management
        <br />
        <span className="text-muted-foreground">for in-app purchases</span>
      </h1>
    </SlideIn>
  );
}

function HeroDescription(): React.JSX.Element {
  return (
    <SlideIn delay={0.3} duration={0.6} direction="up">
      <p className="mt-4 w-full sm:max-w-2xl mx-auto text-left min-[400px]:text-center text-[12px] text-muted-foreground min-[390px]:text-[13px] min-[400px]:text-sm sm:text-lg lg:text-xl [overflow-wrap:anywhere]">
        Integrate faster. Grow revenue with paywalls and A/B tests.
      </p>
    </SlideIn>
  );
}

// Simple hero button - no glow, pulse, or beam effects (per user feedback)
function HeroButton({
  href,
  variant = 'default',
  children,
}: {
  href: string;
  variant?: 'default' | 'outline';
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant }),
        'h-11 min-h-[44px] rounded-xl px-5 flex items-center justify-center'
      )}
    >
      {children}
    </Link>
  );
}

function HeroButtons(): React.JSX.Element {
  return (
    <SlideIn delay={0.4} duration={0.6} direction="up">
      <div className="mx-auto mt-8 flex flex-col sm:flex-row items-start min-[400px]:items-center justify-start min-[400px]:justify-center gap-3 w-full sm:w-auto">
        <HeroButton href="https://app.adapty.io/registration" variant="default">
          Start for free
        </HeroButton>
        <HeroButton href="/schedule-demo" variant="outline">
          Book a demo
        </HeroButton>
      </div>
    </SlideIn>
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




// All 7 logos per Sergey's rule
const TRUST_LOGOS = [
  { name: 'Feeld', file: '/logos/trusted-by/feeld.svg', invert: false },
  { name: 'Bumble', file: '/logos/trusted-by/bumble.svg', invert: false },
  { name: 'HubX', file: '/logos/trusted-by/hubx.svg', invert: false },
  { name: 'AppNation', file: '/logos/trusted-by/appnation.webp', invert: false },
  { name: 'Impala Studios', file: '/logos/trusted-by/impala-studios.svg', invert: false },
  { name: 'SocialKit', file: '/logos/trusted-by/socialkit.svg', invert: true }, // white logo needs invert
  { name: 'Almus', file: '/logos/trusted-by/almus.svg', invert: false },
];

// Trust bar with logos - integrated into hero with hover blur effect
function HeroTrustSignal(): React.JSX.Element {
  const [isHovered, setIsHovered] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <SlideIn delay={0.5} duration={0.6} direction="up">
      <div className="mt-12 flex flex-col items-start min-[400px]:items-center gap-6">
        <p className="text-left min-[400px]:text-center text-sm text-muted-foreground">
          Trusted by 15,000+ apps worldwide
        </p>

        {/* Logo grid with hover blur effect */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Logos - blur on hover, always single line */}
          <motion.div
            animate={shouldReduceMotion ? undefined : {
              filter: isHovered ? 'blur(8px)' : 'blur(0px)',
              opacity: isHovered ? 0.4 : 1,
            }}
            transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="flex items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4"
          >
            {TRUST_LOGOS.map((logo, index) => (
              <BlurFade
                key={logo.name}
                delay={0.55 + index * 0.05}
                className="flex items-center justify-center shrink-0"
              >
                <Image
                  src={logo.file}
                  alt={logo.name}
                  width={100}
                  height={32}
                  className={cn(
                    "h-5 w-auto object-contain grayscale sm:h-6",
                    logo.invert ? "invert dark:invert-0" : "dark:invert"
                  )}
                />
              </BlurFade>
            ))}
          </motion.div>

          {/* Button appears on hover over blurred logos */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Link
                  href="/case-studies"
                  className={cn(
                    'inline-flex items-center gap-2 rounded-xl',
                    'bg-background/95 backdrop-blur-sm',
                    'border border-border/50',
                    'px-6 py-3 text-sm font-medium',
                    'transition-all duration-150 ease-out',
                    'hover:bg-accent',
                    'motion-reduce:transition-none'
                  )}
                >
                  View case studies
                  <ChevronRightIcon className="size-4" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SlideIn>
  );
}


export function Hero(): React.JSX.Element {
  return (
    <GridSection className="overflow-x-hidden relative">
      <SectionBackground height={700} />
      <MainDashedGridLines />
      <div className="relative z-10 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24">
        <div className="w-full max-w-full px-4 sm:container sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl w-full">
            <HeroPill />
            <HeroTitle />
            <HeroDescription />
            <HeroButtons />
          </div>
          <HeroTrustSignal />
        </div>
      </div>
    </GridSection>
  );
}
