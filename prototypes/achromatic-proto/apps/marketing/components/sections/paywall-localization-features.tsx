'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  ArrowRightIcon,
  BrainCircuitIcon,
  CodeIcon,
  GlobeIcon,
  LanguagesIcon,
  SparklesIcon
} from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { Spotlight } from '~/components/fragments/spotlight';

// =============================================================================
// MAGIC ANIMATIONS
// =============================================================================

// Language Switcher Magic - Animated language switching
function LanguageSwitcherMagic() {
  const LANGUAGES = [
    { code: 'EN', text: 'Get Premium' },
    { code: 'ES', text: 'Obtener Premium' },
    { code: 'DE', text: 'Premium holen' },
    { code: 'FR', text: 'Obtenir Premium' },
    { code: 'JP', text: 'Premium' }
  ];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % LANGUAGES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-6 h-[80px] rounded-lg bg-muted/30 border border-border/50 p-4 flex flex-col justify-center">
      <div className="flex items-center gap-3 mb-2">
        {LANGUAGES.slice(0, 4).map((lang, i) => (
          <motion.div
            key={lang.code}
            animate={{
              scale: i === index % 4 ? 1.15 : 1,
              opacity: i === index % 4 ? 1 : 0.4
            }}
            transition={{ type: 'spring', duration: 0.25, bounce: 0.2 }}
            className={cn(
              'size-6 rounded-full border flex items-center justify-center text-[8px] font-bold cursor-pointer',
              i === index % 4
                ? 'bg-primary/10 border-primary/50 text-primary'
                : 'bg-muted/30 border-border text-muted-foreground'
            )}
          >
            {lang.code}
          </motion.div>
        ))}
      </div>
      <div className="h-8 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="flex items-center gap-2"
          >
            <div className="h-6 px-3 rounded bg-primary text-primary-foreground text-xs font-medium flex items-center">
              {LANGUAGES[index].text}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// AI Translation Magic - Animated AI processing
function AITranslationMagic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mt-6 h-[80px] rounded-lg bg-muted/30 border border-border/50 p-4 flex items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <div className="text-[10px] text-muted-foreground">Input</div>
        <div className="h-5 px-2 rounded bg-muted text-xs flex items-center">
          Hello
        </div>
      </div>

      <div className="flex items-center gap-1">
        <motion.div
          animate={shouldReduceMotion ? {} : { opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="size-1.5 rounded-full bg-primary"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          className="size-1.5 rounded-full bg-primary"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          className="size-1.5 rounded-full bg-primary"
        />
      </div>

      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }
        }
        transition={{ duration: 2, repeat: Infinity }}
        className="size-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center"
      >
        <BrainCircuitIcon className="size-4 text-primary" />
      </motion.div>

      <div className="flex items-center gap-1">
        <motion.div
          animate={shouldReduceMotion ? {} : { opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
          className="size-1.5 rounded-full bg-primary"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
          className="size-1.5 rounded-full bg-primary"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
          className="size-1.5 rounded-full bg-primary"
        />
      </div>

      <div className="flex flex-col items-center gap-1">
        <div className="text-[10px] text-muted-foreground">Output</div>
        <motion.div
          animate={shouldReduceMotion ? {} : { opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-5 px-2 rounded bg-primary/10 border border-primary/30 text-xs text-primary font-medium flex items-center"
        >
          Hola
        </motion.div>
      </div>
    </div>
  );
}

// JSON Config Magic - Code editor visualization
function JSONConfigMagic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mt-6 h-[80px] rounded-lg bg-muted/30 border border-border/50 p-3 font-mono text-[10px] overflow-hidden">
      <div className="flex items-center gap-1.5 mb-2">
        <div className="size-2 rounded-full bg-red-400" />
        <div className="size-2 rounded-full bg-yellow-400" />
        <div className="size-2 rounded-full bg-primary" />
      </div>
      <div className="space-y-0.5 text-muted-foreground">
        <div>{'{'}</div>
        <motion.div
          animate={shouldReduceMotion ? {} : { opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="pl-3"
        >
          <span className="text-primary">"en"</span>: {'{'}{' '}
          <span className="text-primary">"cta"</span>:{' '}
          <span className="text-amber-500">"Subscribe"</span> {'}'}
        </motion.div>
        <motion.div
          animate={shouldReduceMotion ? {} : { opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          className="pl-3"
        >
          <span className="text-primary">"es"</span>: {'{'}{' '}
          <span className="text-green-500">"cta"</span>:{' '}
          <span className="text-amber-500">"Suscribir"</span> {'}'}
        </motion.div>
        <div>{'}'}</div>
      </div>
    </div>
  );
}

// =============================================================================
// DATA
// =============================================================================

const FEATURES = [
  {
    id: 'paywall-builder',
    icon: GlobeIcon,
    title: 'Localize with the Paywall Builder',
    description:
      'Add translations and preview the result within one dashboard for the paywalls made in the Paywall Builder.',
    link: '/paywall-builder',
    linkText: 'Learn more about Paywall Builder',
    magic: LanguageSwitcherMagic
  },
  {
    id: 'remote-config',
    icon: CodeIcon,
    title: 'Localize with Remote Config',
    description:
      'Easily add new locales as separate JSONs and conveniently edit all the translations.',
    link: '/remote-config',
    linkText: 'Learn more about Remote Config',
    magic: JSONConfigMagic
  },
  {
    id: 'ai-translation',
    icon: SparklesIcon,
    title: 'AI-powered translation',
    description:
      'Use AI to automatically translate your paywall content to any language with high accuracy.',
    link: '/paywall-builder',
    linkText: 'Try AI translation',
    magic: AITranslationMagic
  }
];

const STATS = [
  { value: '500M', label: 'subscription events / month' },
  { value: '1.4B', label: 'users' },
  { value: '2.8M', label: 'subscribers / month' },
  { value: '9B', label: 'API calls / month' }
];

const RELATED_PAGES = [
  { title: 'Remote Config', href: '/remote-config' },
  { title: 'Targeting', href: '/paywall-targeting' },
  { title: 'Paywall Builder', href: '/paywall-builder' },
  { title: 'A/B testing', href: '/paywall-ab-testing' }
];

// =============================================================================
// COMPONENTS
// =============================================================================

function FeatureCard({
  feature,
  index
}: {
  feature: (typeof FEATURES)[0];
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);
  const MagicComponent = feature.magic;

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={
        shouldReduceMotion
          ? undefined
          : {
              y: isHovered ? -6 : 0,
              scale: isHovered ? 1.01 : 1
            }
      }
      transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
    >
      <div
        className={cn(
          'relative h-full overflow-hidden rounded-xl border bg-card transition-all duration-200 cursor-pointer group',
          isHovered && 'border-primary/30 '
        )}
      >
        <Spotlight
          className="from-primary/20 via-primary/10 to-transparent"
          size={300}
        />
        {isHovered && (
          <BorderBeam
            size={120}
            duration={8}
            borderWidth={1.5}
            colorFrom="hsl(var(--primary))"
            colorTo="hsl(var(--primary)/0)"
          />
        )}
        <div className="p-8 relative z-10">
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    scale: isHovered ? 1.15 : 1,
                    rotate: isHovered ? 5 : 0
                  }
            }
            transition={{ type: 'spring', duration: 0.3, bounce: 0.2 }}
            className={cn(
              'flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors',
              isHovered && 'bg-primary/20'
            )}
          >
            <feature.icon className="size-7" />
          </motion.div>
          <h3 className="mt-6 text-xl font-semibold group-hover:text-primary transition-colors">
            {feature.title}
          </h3>
          <p className="mt-3 text-muted-foreground">{feature.description}</p>

          {/* Magic Area */}
          {MagicComponent && <MagicComponent />}

          <Link
            href={feature.link}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            {feature.linkText}
            <motion.span
              animate={
                shouldReduceMotion ? undefined : { x: isHovered ? 3 : 0 }
              }
              transition={{ duration: 0.15 }}
            >
              <ArrowRightIcon className="size-4" />
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function StatCard({ stat, index }: { stat: (typeof STATS)[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={
        shouldReduceMotion
          ? undefined
          : {
              scale: isHovered ? 1.05 : 1
            }
      }
      transition={{ type: 'spring', duration: 0.2, bounce: 0.1 }}
      className="text-center cursor-default"
    >
      <motion.p
        animate={
          shouldReduceMotion
            ? undefined
            : {
                color: isHovered
                  ? 'hsl(var(--primary))'
                  : 'hsl(var(--primary))',
                scale: isHovered ? 1.1 : 1
              }
        }
        transition={{ duration: 0.15 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary"
      >
        {stat.value}
      </motion.p>
      <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
    </motion.div>
  );
}

function RelatedPageButton({
  page,
  index
}: {
  page: (typeof RELATED_PAGES)[0];
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.03 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
      transition={{ type: 'spring', duration: 0.2, bounce: 0.1 }}
    >
      <Link
        href={page.href}
        className={cn(
          'inline-flex items-center gap-2 px-4 py-2 rounded-lg border bg-background text-sm font-medium transition-all duration-150',
          isHovered && 'border-primary/30 text-primary '
        )}
      >
        {page.title}
        <motion.span
          animate={shouldReduceMotion ? undefined : { x: isHovered ? 3 : 0 }}
          transition={{ duration: 0.15 }}
        >
          <ArrowRightIcon className="size-4" />
        </motion.span>
      </Link>
    </motion.div>
  );
}

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export function PaywallLocalizationFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1800} />
      <div className="container py-16 md:py-24 relative z-10">
        {/* Features */}
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Localize your paywalls for any market"
            description="Reach users worldwide with translations that convert. Use manual translation when you need precision, and AI when you need speed."
          />
        </BlurFade>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <BlurFade
              key={feature.id}
              delay={0.1 + index * 0.05}
            >
              <FeatureCard
                feature={feature}
                index={index}
              />
            </BlurFade>
          ))}
        </div>

        {/* Testimonial */}
        <BlurFade delay={0.3}>
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.01 }}
            transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
            className="mt-20"
          >
            <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-12">
              <Spotlight
                className="from-primary/20 via-primary/10 to-transparent"
                size={400}
              />
              <BorderBeam
                size={180}
                duration={12}
                borderWidth={1.5}
                colorFrom="hsl(var(--primary))"
                colorTo="hsl(var(--primary)/0)"
                className="opacity-50"
              />
              <div className="relative z-10">
                <LanguagesIcon className="size-8 text-primary/50 mb-4" />
                <blockquote className="text-lg italic text-muted-foreground">
                  "Adapty's Paywall Builder and A/B testing tools paired
                  together are a game changer for anyone trying to do
                  high-velocity testing and find quick wins."
                </blockquote>
                <div className="mt-6">
                  <p className="font-semibold">Mike McSweeney</p>
                  <p className="text-sm text-muted-foreground">
                    Chief Product Officer at Moodworks Inc.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </BlurFade>

        {/* Stats */}
        <BlurFade delay={0.4}>
          <div className="mt-20">
            <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
              Enterprise-grade battle-tested solution
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((stat, index) => (
                <StatCard
                  key={index}
                  stat={stat}
                  index={index}
                />
              ))}
            </div>
          </div>
        </BlurFade>

        {/* Related pages */}
        <BlurFade delay={0.5}>
          <div className="mt-20">
            <h2 className="text-center text-xl font-semibold">
              Learn more about Paywall management
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {RELATED_PAGES.map((page, index) => (
                <RelatedPageButton
                  key={index}
                  page={page}
                  index={index}
                />
              ))}
            </div>
          </div>
        </BlurFade>

        {/* CTA */}
        <BlurFade delay={0.6}>
          <div className="mt-20 text-center">
            <motion.div
              whileHover={
                shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }
              }
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              className="inline-block"
            >
              <Link
                href="https://app.adapty.io/registration"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-colors hover:"
              >
                Start localizing paywalls
                <ArrowRightIcon className="size-5" />
              </Link>
            </motion.div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
