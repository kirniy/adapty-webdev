'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, ExternalLinkIcon, DollarSignIcon, SparklesIcon, TrendingUpIcon } from 'lucide-react';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';

import { Card, CardContent } from '@workspace/ui/components/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@workspace/ui/components/accordion';
import { cn } from '@workspace/ui/lib/utils';

import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';
import { Spotlight } from '~/components/fragments/spotlight';

// EXACT content from adapty.io/paywall-library (scraped 2026-01-21)

// Categories from the library (showing counts from original site)
const CATEGORIES = [
  { name: 'All', count: 7401 },
  { name: 'AI', count: 536 },
  { name: 'Business', count: 317 },
  { name: 'Dating', count: 115 },
  { name: 'Education', count: 557 },
  { name: 'Entertainment', count: 614 },
  { name: 'Finance', count: 298 },
  { name: 'Food & Drink', count: 179 },
  { name: 'Games', count: 180 },
  { name: 'Graphics & Design', count: 210 },
  { name: 'Health & Fitness', count: 917 },
  { name: 'Lifestyle', count: 488 },
  { name: 'Medical', count: 30 },
  { name: 'Music', count: 191 },
  { name: 'Navigation', count: 65 },
  { name: 'News', count: 76 },
  { name: 'Photo & Video', count: 1027 },
  { name: 'Productivity', count: 721 },
  { name: 'Reference', count: 66 },
  { name: 'Shopping', count: 45 },
  { name: 'Social Networking', count: 169 },
  { name: 'Sports', count: 66 },
  { name: 'Travel', count: 93 },
  { name: 'Utilities', count: 350 },
  { name: 'Weather', count: 91 }
];

// Top apps from the library (sample from scraped data)
const TOP_APPS = [
  { name: 'YouTube', revenue: '$136m', category: 'Photo & Video' },
  { name: 'TikTok', revenue: '$113m', category: 'Entertainment' },
  { name: 'Tinder', revenue: '$79m', category: 'Dating' },
  { name: 'Disney+', revenue: '$71m', category: 'Entertainment' },
  { name: 'Max', revenue: '$50m', category: 'Entertainment' },
  { name: 'LinkedIn', revenue: '$47m', category: 'Business' },
  { name: 'Duolingo', revenue: '$39m', category: 'Education' },
  { name: 'Bumble', revenue: '$38m', category: 'Dating' }
];

// =============================================================================
// MAGIC ANIMATIONS
// =============================================================================

// Template Carousel Magic - Animated template previews sliding through
function TemplateCarouselMagic() {
  const templates = ['Minimal', 'Premium', 'Feature', 'Social'];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % templates.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80px] w-full overflow-hidden rounded-lg bg-muted/30 border border-border/50">
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
            className="flex items-center gap-3"
          >
            {/* Mini phone mockup */}
            <div className="w-10 h-16 rounded-lg border-2 border-border bg-background flex flex-col items-center justify-center gap-1 p-1">
              <div className="w-full h-1.5 bg-primary/30 rounded" />
              <div className="w-3/4 h-1 bg-muted rounded" />
              <div className="w-1/2 h-1 bg-muted rounded" />
              <div className="w-4/5 h-2 bg-primary rounded mt-auto" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Template</span>
              <span className="text-sm font-medium">{templates[currentIndex]}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Progress dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {templates.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: i === currentIndex ? 1.2 : 1,
              backgroundColor: i === currentIndex ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground)/0.3)'
            }}
            className="size-1.5 rounded-full"
          />
        ))}
      </div>
    </div>
  );
}

// Category Badge with hover animation
function CategoryBadge({ category, index }: { category: typeof CATEGORIES[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.03 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
      transition={{ type: 'spring', duration: 0.2, bounce: 0.1 }}
    >
      <Link
        href="https://adapty.io/paywall-library/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-lg bg-muted/50 border border-border/50 text-sm font-medium hover:border-primary/30 hover:text-primary hover:shadow-md transition-all duration-150 ease-out motion-reduce:transition-none inline-flex items-center gap-1.5"
      >
        {category.name}
        <span className="text-xs text-muted-foreground">({category.count.toLocaleString()})</span>
      </Link>
    </motion.div>
  );
}

// App Card with enhanced hover animation
function AppCard({ app, index }: { app: typeof TOP_APPS[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.02 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', duration: 0.25, bounce: 0.1 }}
    >
      <div className={cn(
        "relative h-full overflow-hidden rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 transition-all duration-200 cursor-pointer group",
        isHovered && "border-primary/30 shadow-lg"
      )}>
        <Spotlight
          className="from-primary/20 via-primary/10 to-transparent"
          size={150}
        />
        <div className="p-4 text-center relative z-10">
          <motion.div
            animate={shouldReduceMotion ? undefined : {
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ type: 'spring', duration: 0.25, bounce: 0.2 }}
            className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-3"
          >
            <DollarSignIcon className="size-6" />
          </motion.div>
          <h4 className="font-semibold group-hover:text-primary transition-colors">{app.name}</h4>
          <motion.p
            animate={shouldReduceMotion ? undefined : {
              scale: isHovered ? 1.1 : 1,
            }}
            className="text-lg font-bold text-primary mt-1"
          >
            {app.revenue}
          </motion.p>
          <p className="text-xs text-muted-foreground">{app.category}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Paywall Builder CTA with animation
function PaywallBuilderCTA() {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="mt-20 text-center">
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={shouldReduceMotion ? undefined : {
          y: isHovered ? -4 : 0,
        }}
        transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
        className="inline-block max-w-2xl"
      >
        <div className={cn(
          "relative overflow-hidden p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-background to-background border border-primary/20 transition-all duration-200",
          isHovered && "border-primary/40 shadow-xl"
        )}>
          <Spotlight
            className="from-primary/20 via-primary/10 to-transparent"
            size={300}
          />
          <div className="relative z-10">
            <motion.div
              animate={shouldReduceMotion ? undefined : {
                rotate: isHovered ? [0, 10, -10, 0] : 0,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-4"
            >
              <SparklesIcon className="size-7" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">Ready to build your own paywall?</h3>
            <p className="text-muted-foreground mb-6">
              Use Adapty's Paywall Builder to create beautiful, high-converting paywalls without coding. A/B test different designs and optimize for maximum revenue.
            </p>
            <Link
              href="/paywall-builder"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Try Paywall Builder
              <motion.span
                animate={shouldReduceMotion ? undefined : { x: isHovered ? 3 : 0 }}
                transition={{ duration: 0.15 }}
              >
                <ArrowRightIcon className="size-4" />
              </motion.span>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// FAQs from adapty.io/paywall-library
const FAQS = [
  {
    question: 'What is the Adapty Paywall Library?',
    answer: "The Adapty Paywall Library is a comprehensive collection of over 10,000 mobile app paywalls. It's designed to help app developers and designers find inspiration and learn best practices for creating effective paywalls."
  },
  {
    question: 'How can I use the Paywall Library?',
    answer: "You can browse paywalls by category, search for specific apps, or explore top-grossing apps. Each paywall includes details about the app's revenue and subscription model to help you understand what works."
  },
  {
    question: 'Is the Paywall Library free to use?',
    answer: "Yes, the Paywall Library is completely free to browse. You can explore thousands of paywalls without any cost. To build and test your own paywalls, you can sign up for Adapty's free tier."
  },
  {
    question: 'How often is the library updated?',
    answer: "The library is updated regularly with new paywalls from the App Store and Google Play. We track changes to existing paywalls and add new apps as they implement in-app purchases."
  },
  {
    question: 'Can I build similar paywalls with Adapty?',
    answer: "Yes! Adapty's Paywall Builder lets you create beautiful, high-converting paywalls without coding. You can use the library for inspiration and then build your own customized version."
  },
  {
    question: 'What makes a successful paywall?',
    answer: "Successful paywalls typically have clear value propositions, compelling visuals, well-structured pricing, and strong calls to action. The library helps you study what top apps are doing to maximize conversions."
  }
];

// FAQ Item with animation
function FAQItem({ faq, index }: { faq: typeof FAQS[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={shouldReduceMotion ? undefined : {
        delay: index * 0.03,
        duration: 0.25,
        ease: [0.32, 0.72, 0, 1],
      }}
      className="relative"
    >
      <AccordionItem
        value={`item-${index}`}
        className="border-b-0 px-4 rounded-lg transition-all duration-200 group relative z-10"
      >
        <AccordionTrigger className="text-left text-base py-4 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
          {faq.question}
        </AccordionTrigger>
        <AccordionContent className="text-sm text-muted-foreground pb-4">
          {faq.answer}
        </AccordionContent>
        {/* Active state backglow */}
        <div className="absolute inset-0 rounded-lg bg-muted/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100 -z-10" />
        <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 transition-opacity duration-200 group-[[data-state=open]]:opacity-100 -z-10" />
      </AccordionItem>
    </motion.div>
  );
}

export function PaywallLibraryFeatures(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={2000} />
      <div className="container py-20 relative z-10">
        {/* Hero Magic - Template carousel preview */}
        <BlurFade delay={0.05}>
          <div className="max-w-md mx-auto mb-12">
            <TemplateCarouselMagic />
          </div>
        </BlurFade>

        {/* Categories grid */}
        <BlurFade delay={0.1}>
          <SiteHeading title="Browse by category" />
        </BlurFade>

        <BlurFade delay={0.15}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((category, index) => (
              <CategoryBadge key={index} category={category} index={index} />
            ))}
          </div>
        </BlurFade>

        {/* Top apps section */}
        <BlurFade delay={0.2}>
          <div className="mt-20">
            <SiteHeading
              title="Learn from top-grossing apps"
              description="See how the most successful apps design their paywalls and pricing strategies."
            />

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {TOP_APPS.map((app, index) => (
                <AppCard key={index} app={app} index={index} />
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="https://adapty.io/paywall-library/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline inline-flex items-center gap-1"
              >
                Explore all 10,000+ paywalls
                <ExternalLinkIcon className="size-4" />
              </Link>
            </div>
          </div>
        </BlurFade>

        {/* Paywall Builder CTA */}
        <BlurFade delay={0.25}>
          <PaywallBuilderCTA />
        </BlurFade>

        {/* FAQ section */}
        <BlurFade delay={0.3}>
          <div className="mt-20 max-w-3xl mx-auto">
            <SiteHeading title="Frequently asked questions" />
            <div className="mt-8 rounded-xl border bg-card p-1 relative overflow-hidden">
              <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={300} />
              <BorderBeam
                size={180}
                duration={12}
                borderWidth={1.5}
                colorFrom="hsl(var(--primary))"
                colorTo="hsl(var(--primary)/0)"
                className="opacity-40"
              />
              <Accordion type="single" collapsible className="w-full relative z-10">
                {FAQS.map((faq, index) => (
                  <FAQItem key={index} faq={faq} index={index} />
                ))}
              </Accordion>
            </div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
