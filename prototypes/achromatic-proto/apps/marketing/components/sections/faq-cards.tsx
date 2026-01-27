'use client';

import * as React from 'react';
import Link from 'next/link';
import { ChevronRightIcon, PlusIcon } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';

// Linear-style tag
function FeatureTag({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs text-zinc-400 font-medium">
      <span className="size-2 rounded-full bg-primary" />
      <span>{label}</span>
    </div>
  );
}

// Linear-style squircle button
function SquircleButton({
  children,
  href
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 text-sm font-medium',
        'rounded-xl border border-border/50 bg-muted/30',
        'hover:bg-muted hover:border-border transition-colors'
      )}
    >
      {children}
      <ChevronRightIcon className="size-4" />
    </Link>
  );
}

const FAQ_ITEMS = [
  {
    question: 'How long does it take to integrate Adapty?',
    answer:
      'Most teams integrate Adapty in under a day. Our SDK is designed for quick setup with comprehensive documentation. The Paywall Builder requires no code changes for design updates.',
    category: 'Integration'
  },
  {
    question: 'Do I need to submit a new app version to update paywalls?',
    answer:
      "No! That's the magic of Adapty. Once you integrate our SDK, you can create, edit, and A/B test paywalls remotely without any app store submissions.",
    category: 'Paywalls'
  },
  {
    question: 'How does pricing work?',
    answer:
      'Adapty offers a free tier for apps under 10K MTR (Monthly Tracked Revenue). Paid plans scale based on your revenue. We only grow when you grow.',
    category: 'Pricing'
  },
  {
    question: 'Can I migrate from RevenueCat or another provider?',
    answer:
      'Yes! We have a dedicated migration team and tools to help you switch smoothly. Most migrations complete within 1-2 weeks with zero downtime.',
    category: 'Migration'
  },
  {
    question: 'What platforms do you support?',
    answer:
      'Adapty supports iOS, Android, React Native, Flutter, and Unity. Our SDKs handle all the complexity of subscription management across platforms.',
    category: 'Platforms'
  },
  {
    question: 'Is my data secure with Adapty?',
    answer:
      "Absolutely. We're SOC 2 Type II certified, GDPR compliant, and use enterprise-grade encryption. Your data security is our top priority.",
    category: 'Security'
  }
];

// Single FAQ item with card design - Linear style
function FAQCard({
  item,
  index,
  isOpen,
  onToggle
}: {
  item: (typeof FAQ_ITEMS)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <BlurFade delay={shouldReduceMotion ? 0 : 0.05 + index * 0.05}>
      <motion.div
        className={cn(
          'group relative overflow-hidden rounded-[20px] border border-border/50 bg-muted/30 transition-all duration-300',
          isOpen
            ? 'border-border bg-background/50'
            : 'hover:border-border hover:bg-muted/50'
        )}
        layout={!shouldReduceMotion}
        transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
      >
        {/* Subtle gradient background on open */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />

        {/* Question header */}
        <button
          onClick={onToggle}
          className="relative z-10 flex w-full items-center gap-3 sm:gap-4 p-4 sm:p-5 text-left cursor-pointer min-h-[48px]"
        >
          {/* Question text */}
          <div className="flex-1 min-w-0">
            <span className="text-xs text-muted-foreground mb-1 block">
              {item.category}
            </span>
            <h3
              className={cn(
                'text-base font-medium leading-snug transition-colors duration-200',
                isOpen
                  ? 'text-foreground'
                  : 'text-foreground/80 group-hover:text-foreground'
              )}
            >
              {item.question}
            </h3>
          </div>

          {/* Icon button */}
          <motion.div
            className={cn(
              'flex shrink-0 items-center justify-center size-9 sm:size-8 rounded-full border transition-colors duration-200',
              isOpen
                ? 'bg-primary border-primary text-primary-foreground'
                : 'bg-background border-border/50 text-muted-foreground group-hover:border-border'
            )}
          >
            <motion.div
              animate={
                shouldReduceMotion ? undefined : { rotate: isOpen ? 45 : 0 }
              }
              transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
            >
              <PlusIcon className="size-4" />
            </motion.div>
          </motion.div>
        </button>

        {/* Answer content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { height: 'auto', opacity: 1 }
              }
              exit={
                shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }
              }
              transition={{
                duration: shouldReduceMotion ? 0.15 : 0.25,
                ease: [0.32, 0.72, 0, 1]
              }}
              className="overflow-hidden"
            >
              <div className="relative z-10 px-5 pb-5 pt-0">
                <motion.div
                  className="h-px bg-gradient-to-r from-border to-transparent mb-4"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  style={{ originX: 0 }}
                />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </BlurFade>
  );
}

export function FAQCards(): React.JSX.Element {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <GridSection
      className="relative"
      hideVerticalGridLines
      hideBottomGridLine
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl">
          {/* Section header - Linear style */}
          <BlurFade className="text-center mb-12">
            <div className="mb-6 flex justify-center">
              <FeatureTag label="FAQ" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight mb-4">
              Frequently asked
              <br />
              <span className="text-muted-foreground">questions</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-base px-4 sm:px-0">
              Everything you need to know about Adapty.
            </p>
          </BlurFade>

          {/* FAQ cards */}
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <FAQCard
                key={item.question}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>

          {/* Bottom CTA - Linear style */}
          <BlurFade
            delay={0.4}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <SquircleButton href="https://adapty.io/docs/">
              Read documentation
            </SquircleButton>
            <SquircleButton href="/schedule-demo">
              Schedule a demo
            </SquircleButton>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
