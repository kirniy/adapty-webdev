'use client';

import * as React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ChevronDownIcon, MessageCircleQuestionIcon, PlusIcon, MinusIcon } from 'lucide-react';

import { Badge } from '@workspace/ui/components/badge';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { Spotlight } from '~/components/fragments/spotlight';

// Magic animation: FAQ response time badge
function FAQResponseMagic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.15 }}
    >
      <motion.div
        animate={shouldReduceMotion ? {} : {
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        <MessageCircleQuestionIcon className="size-3.5" />
      </motion.div>
      <span>Quick answers</span>
    </motion.div>
  );
}

const FAQ_ITEMS = [
  {
    question: 'How long does it take to integrate Adapty?',
    answer: 'Most teams integrate Adapty in under a day. Our SDK is designed for quick setup with comprehensive documentation. The Paywall Builder requires no code changes for design updates.',
    category: 'Integration',
  },
  {
    question: 'Do I need to submit a new app version to update paywalls?',
    answer: 'No! That\'s the magic of Adapty. Once you integrate our SDK, you can create, edit, and A/B test paywalls remotely without any app store submissions.',
    category: 'Paywalls',
  },
  {
    question: 'How does pricing work?',
    answer: 'Adapty offers a free tier for apps under 10K MTR (Monthly Tracked Revenue). Paid plans scale based on your revenue. We only grow when you grow.',
    category: 'Pricing',
  },
  {
    question: 'Can I migrate from RevenueCat or another provider?',
    answer: 'Yes! We have a dedicated migration team and tools to help you switch smoothly. Most migrations complete within 1-2 weeks with zero downtime.',
    category: 'Migration',
  },
  {
    question: 'What platforms do you support?',
    answer: 'Adapty supports iOS, Android, React Native, Flutter, and Unity. Our SDKs handle all the complexity of subscription management across platforms.',
    category: 'Platforms',
  },
  {
    question: 'Is my data secure with Adapty?',
    answer: 'Absolutely. We\'re SOC 2 Type II certified, GDPR compliant, and use enterprise-grade encryption. Your data security is our top priority.',
    category: 'Security',
  },
];

// Single FAQ item with card design
function FAQCard({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: typeof FAQ_ITEMS[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <BlurFade delay={shouldReduceMotion ? 0 : 0.05 + index * 0.05}>
      <motion.div
        className={cn(
          'group relative overflow-hidden rounded-xl border bg-card/50 backdrop-blur-sm transition-all duration-300',
          isOpen ? 'border-primary/30 shadow-lg shadow-primary/5' : 'hover:border-border/80 hover:shadow-md'
        )}
        layout={!shouldReduceMotion}
        transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
      >
        {/* Gradient background on open */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />

        {/* Question header */}
        <button
          onClick={onToggle}
          className="relative z-10 flex w-full items-start gap-4 p-5 text-left cursor-pointer"
        >
          {/* Icon */}
          <motion.div
            className={cn(
              'flex shrink-0 items-center justify-center size-10 rounded-lg transition-colors duration-200',
              isOpen ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
            )}
            animate={shouldReduceMotion ? undefined : { rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
          >
            {isOpen ? (
              <MinusIcon className="size-5" />
            ) : (
              <PlusIcon className="size-5" />
            )}
          </motion.div>

          {/* Question text */}
          <div className="flex-1 min-w-0">
            <Badge variant="secondary" className="mb-2 text-xs font-medium">
              {item.category}
            </Badge>
            <h3 className={cn(
              'text-base font-semibold leading-snug transition-colors duration-200',
              isOpen ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'
            )}>
              {item.question}
            </h3>
          </div>

          {/* Chevron indicator */}
          <motion.div
            className="shrink-0 text-muted-foreground"
            animate={shouldReduceMotion ? undefined : { rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
          >
            <ChevronDownIcon className="size-5" />
          </motion.div>
        </button>

        {/* Answer content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.15 : 0.25, ease: [0.32, 0.72, 0, 1] }}
              className="overflow-hidden"
            >
              <div className="relative z-10 px-5 pb-5 pt-0">
                <div className="pl-14">
                  <motion.div
                    className="h-px bg-gradient-to-r from-primary/30 to-transparent mb-4"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    style={{ originX: 0 }}
                  />
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
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
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container py-16 lg:py-24 relative z-10">
        <div className="mx-auto max-w-3xl">
          {/* Section header */}
          <BlurFade className="text-center mb-12">
            <Badge variant="outline" className="mb-4 rounded-full">
              <MessageCircleQuestionIcon className="mr-2 size-3.5" />
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Frequently asked questions
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything you need to know about Adapty. Can&apos;t find what you&apos;re looking for?{' '}
              <a href="/contact" className="text-primary hover:underline">
                Contact our team
              </a>
            </p>
            <div className="mt-4">
              <FAQResponseMagic />
            </div>
          </BlurFade>

          {/* FAQ cards */}
          <div className="space-y-4">
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

          {/* Bottom CTA */}
          <BlurFade delay={0.4} className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 rounded-full border bg-card/50 backdrop-blur-sm px-5 py-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="size-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 border-2 border-background"
                  />
                ))}
              </div>
              <p className="text-sm">
                <span className="text-muted-foreground">Still have questions? </span>
                <a href="/schedule-demo" className="font-medium text-primary hover:underline">
                  Talk to our team
                </a>
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
