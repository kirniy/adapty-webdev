'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  ArrowRightIcon,
  CheckIcon,
  DollarSignIcon,
  GlobeIcon,
  LanguagesIcon
} from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { Spotlight } from '~/components/fragments/spotlight';

// Language localization magic animation
function LocalizationMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [activeLanguage, setActiveLanguage] = React.useState(0);
  const languages = [
    { code: 'EN', flag: 'US', price: '$9.99', text: 'Subscribe Now' },
    { code: 'DE', flag: 'DE', price: '9,99 EUR', text: 'Jetzt abonnieren' },
    { code: 'JP', flag: 'JP', price: '1,480 JPY', text: 'Ima sugu tooroku' },
    { code: 'BR', flag: 'BR', price: 'R$ 49,90', text: 'Assine agora' }
  ];

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveLanguage((prev) => (prev + 1) % languages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, languages.length]);

  const currentLang = languages[activeLanguage];

  if (shouldReduceMotion) {
    return (
      <div className="flex items-center justify-center gap-4">
        <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
          <GlobeIcon className="size-6 text-primary" />
        </div>
        <div className="text-left">
          <div className="text-sm font-medium">EN</div>
          <div className="text-xs text-muted-foreground">$9.99</div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Globe with rotating indicator */}
      <div className="flex items-center justify-center">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="relative"
        >
          <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
            <GlobeIcon className="size-8 text-primary" />
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute -top-1 -right-1 flex size-6 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white"
          >
            {currentLang?.code}
          </motion.div>
        </motion.div>
      </div>

      {/* Localized paywall preview */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeLanguage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="rounded-lg border bg-background/50 p-3 text-center"
        >
          <div className="text-lg font-semibold">{currentLang?.price}</div>
          <div className="text-xs text-muted-foreground mt-1">
            {currentLang?.text}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Language dots */}
      <div className="flex justify-center gap-2">
        {languages.map((lang, i) => (
          <motion.div
            key={lang.code}
            animate={{
              scale: i === activeLanguage ? 1.2 : 1,
              opacity: i === activeLanguage ? 1 : 0.4
            }}
            className="size-2 rounded-full bg-primary"
          />
        ))}
      </div>
    </div>
  );
}

// Coverage counter
function CoverageMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = React.useState(0);
  const target = 40;

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setCount(target);
      return;
    }
    const duration = 1500;
    const steps = 30;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
    >
      <LanguagesIcon className="size-4 text-primary" />
      <span className="text-sm font-medium">
        <span className="text-primary font-bold">{count}+</span> languages
        supported
      </span>
    </motion.div>
  );
}

export function PaywallLocalizationHero(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredButton, setHoveredButton] = React.useState<
    'start' | 'demo' | null
  >(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={700} />
      <div className="container py-16 md:py-24 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <BlurFade delay={0.05}>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider">
              <GlobeIcon className="size-4" />
              Paywall management
            </span>
          </BlurFade>

          <BlurFade delay={0.1}>
            <div className="mt-4">
              <SiteHeading
                title="Instantly localize paywalls for any language"
                description="Adapt the paywall to your local customer language. Translate texts, localize prices, and all other meta-data - all in the Adapty admin panel."
              />
            </div>
          </BlurFade>

          {/* Localization visualization */}
          <BlurFade delay={0.15}>
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="mt-10 p-6 rounded-2xl border bg-background/50 backdrop-blur-sm max-w-xs mx-auto relative overflow-hidden"
            >
              <Spotlight
                className="from-primary/15 via-primary/5 to-transparent"
                size={280}
              />
              <div className="relative">
                <div className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                  Auto-localization
                </div>
                <LocalizationMagic />
              </div>
            </motion.div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <div className="mt-6">
              <CoverageMagic />
            </div>
          </BlurFade>

          <BlurFade delay={0.25}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <motion.div
                onMouseEnter={() => setHoveredButton('start')}
                onMouseLeave={() => setHoveredButton(null)}
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: hoveredButton === 'start' ? -2 : 0
                      }
                }
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                className="relative"
              >
                <Link
                  href="https://app.adapty.io/registration"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'rounded-xl px-8'
                  )}
                >
                  Start for free
                  <motion.span
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : { x: hoveredButton === 'start' ? 3 : 0 }
                    }
                    transition={{ duration: 0.15 }}
                  >
                    <ArrowRightIcon className="ml-2 size-4" />
                  </motion.span>
                </Link>
                <BorderBeam
                  size={120}
                  duration={8}
                  borderWidth={1.5}
                  colorFrom="hsl(var(--primary))"
                  colorTo="hsl(var(--primary)/0)"
                  className="opacity-60"
                />
              </motion.div>

              <motion.div
                onMouseEnter={() => setHoveredButton('demo')}
                onMouseLeave={() => setHoveredButton(null)}
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: hoveredButton === 'demo' ? -2 : 0
                      }
                }
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              >
                <Link
                  href="/schedule-demo"
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'rounded-xl px-8'
                  )}
                >
                  Book a demo
                </Link>
              </motion.div>
            </div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
