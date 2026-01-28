'use client';

import * as React from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@workspace/ui/components/accordion';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';

const DATA = [
  {
    question: 'What is Adapty?',
    answer:
      'Adapty is a revenue management platform for in-app purchases. It provides subscription infrastructure, paywall A/B testing, no-code paywall builder, analytics, and integrations to help mobile apps grow their subscription revenue.'
  },
  {
    question: 'How long does it take to integrate Adapty SDK?',
    answer:
      'Most developers integrate Adapty SDK in just a few hours. The SDK handles all the complexity of subscription management, from free trials to refunds, with just a few lines of code. We support iOS, Android, React Native, Flutter, Unity, and more.'
  },
  {
    question: 'Can I migrate from RevenueCat or other platforms?',
    answer:
      'Yes, Adapty provides seamless migration from RevenueCat, Purchasely, Qonversion, and Superwall. Our team offers dedicated support during migration to ensure zero data loss and minimal disruption to your app.'
  },
  {
    question: 'What analytics does Adapty provide?',
    answer:
      'Adapty offers comprehensive subscription analytics including MRR, ARR, churn rate, ARPU, LTV, cohort analysis, and more. Our AI-powered predictive analytics can forecast revenue and LTV to help you make data-driven decisions.'
  },
  {
    question: 'How does the no-code Paywall Builder work?',
    answer:
      'The Paywall Builder lets you create beautiful native paywalls without any coding. You can design, localize, and A/B test paywalls directly from the Adapty dashboard. Changes are applied instantly without app store updates.'
  },
  {
    question: 'What integrations are available?',
    answer:
      'Adapty integrates with 20+ popular tools including Amplitude, Mixpanel, AppsFlyer, Adjust, Branch, Braze, Firebase, Stripe, and more. You can forward subscription events to analytics and attribution services without coding.'
  },
  {
    question: 'Is Adapty secure and reliable?',
    answer:
      'Adapty is SOC2 verified with 99.99% SLA uptime. We process over $500M/year of in-app purchases with end-to-end encryption and 24/7 global fraud monitoring. Enterprise-grade security is standard for all plans.'
  },
  {
    question: 'What support options are available?',
    answer:
      'We offer multiple support channels: dedicated customer success manager, direct Slack communication, live chat on the website, and comprehensive documentation. Enterprise customers get priority support with guaranteed response times.'
  }
];

// Linear-style tag
function FeatureTag({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
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
        'group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium',
        'rounded-xl border border-border/50 bg-muted/30',
        'hover:bg-muted hover:border-border transition-all duration-150 ease-out',
        'active:scale-[0.98]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
      )}
    >
      {children}
      <ChevronRightIcon className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" />
    </Link>
  );
}

interface FAQProps {
  items?: typeof DATA;
}

export function FAQ({ items = DATA }: FAQProps): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <GridSection
      className="relative"
      hideVerticalGridLines
      hideBottomGridLine
    >
      <div className="container py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Header */}
          <BlurFade
            delay={shouldReduceMotion ? 0 : 0.05}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <div className="mb-4">
              <FeatureTag label="FAQ" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
              Frequently Asked
              <br />
              <span className="text-muted-foreground">Questions</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed lg:max-w-[85%]">
              Everything you need to know about Adapty. Can&apos;t find the
              answer you&apos;re looking for?
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <SquircleButton href="https://adapty.io/docs/">
                Read documentation
              </SquircleButton>
              <SquircleButton href="/schedule-demo">
                Schedule a demo
              </SquircleButton>
            </div>
          </BlurFade>

          {/* Right column - Accordion */}
          <BlurFade delay={shouldReduceMotion ? 0 : 0.1}>
            <div className="rounded-[20px] border border-border/50 bg-card/50 p-2">
              <Accordion
                type="single"
                collapsible
                className="w-full"
              >
                {items.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={
                      shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={
                      shouldReduceMotion
                        ? undefined
                        : {
                            delay: index * 0.03,
                            duration: 0.25,
                            ease: [0.16, 1, 0.3, 1] // ease-out-expo
                          }
                    }
                    className="relative"
                  >
                    <AccordionItem
                      value={index.toString()}
                      className="border-b-0 px-4 rounded-xl transition-colors duration-200 group relative z-10"
                    >
                      <AccordionTrigger className="text-left text-base py-4 hover:no-underline [&[data-state=open]]:text-primary transition-colors duration-150">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>

                      {/* Active state backglow - subtle hover effect */}
                      <div className="absolute inset-0 rounded-xl bg-background/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100 -z-10" />
                      <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 transition-opacity duration-200 group-[[data-state=open]]:opacity-100 -z-10" />
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
