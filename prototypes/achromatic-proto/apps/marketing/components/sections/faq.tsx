'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@workspace/ui/components/accordion';
import { Badge } from '@workspace/ui/components/badge';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';

const DATA = [
  {
    question: 'What is Adapty?',
    answer: 'Adapty is a revenue management platform for in-app purchases. It provides subscription infrastructure, paywall A/B testing, no-code paywall builder, analytics, and integrations to help mobile apps grow their subscription revenue.'
  },
  {
    question: 'How long does it take to integrate Adapty SDK?',
    answer: 'Most developers integrate Adapty SDK in just a few hours. The SDK handles all the complexity of subscription management, from free trials to refunds, with just a few lines of code. We support iOS, Android, React Native, Flutter, Unity, and more.'
  },
  {
    question: 'Can I migrate from RevenueCat or other platforms?',
    answer: 'Yes, Adapty provides seamless migration from RevenueCat, Purchasely, Qonversion, and Superwall. Our team offers dedicated support during migration to ensure zero data loss and minimal disruption to your app.'
  },
  {
    question: 'What analytics does Adapty provide?',
    answer: 'Adapty offers comprehensive subscription analytics including MRR, ARR, churn rate, ARPU, LTV, cohort analysis, and more. Our AI-powered predictive analytics can forecast revenue and LTV to help you make data-driven decisions.'
  },
  {
    question: 'How does the no-code Paywall Builder work?',
    answer: 'The Paywall Builder lets you create beautiful native paywalls without any coding. You can design, localize, and A/B test paywalls directly from the Adapty dashboard. Changes are applied instantly without app store updates.'
  },
  {
    question: 'What integrations are available?',
    answer: 'Adapty integrates with 20+ popular tools including Amplitude, Mixpanel, AppsFlyer, Adjust, Branch, Braze, Firebase, Stripe, and more. You can forward subscription events to analytics and attribution services without coding.'
  },
  {
    question: 'Is Adapty secure and reliable?',
    answer: 'Adapty is SOC2 verified with 99.99% SLA uptime. We process over $500M/year of in-app purchases with end-to-end encryption and 24/7 global fraud monitoring. Enterprise-grade security is standard for all plans.'
  },
  {
    question: 'What support options are available?',
    answer: 'We offer multiple support channels: dedicated customer success manager, direct Slack communication, live chat on the website, and comprehensive documentation. Enterprise customers get priority support with guaranteed response times.'
  }
];

// Animated link with arrow micro-interaction
function AnimatedLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <Link
      href={href}
      target="_blank"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-150 ease-out hover:text-foreground motion-reduce:transition-none"
    >
      {children}
      <motion.span
        animate={shouldReduceMotion ? undefined : { x: isHovered ? 3 : 0 }}
        transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
      >
        <ArrowRightIcon className="size-4" />
      </motion.span>
    </Link>
  );
}


interface FAQProps {
  items?: typeof DATA;
}

export function FAQ({ items = DATA }: FAQProps): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left column - Header */}
          <BlurFade delay={shouldReduceMotion ? 0 : 0.05} className="text-center lg:text-left lg:sticky lg:top-24 lg:self-start">
            <Badge variant="outline" className="mb-4 rounded-full">
              FAQ
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Frequently Asked
              <br />
              <span className="text-muted-foreground">Questions</span>
            </h2>
            <p className="mt-4 text-muted-foreground lg:max-w-[85%]">
              Everything you need to know about Adapty. Can&apos;t find the answer you&apos;re looking for?
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <AnimatedLink href="https://adapty.io/docs/">
                Read documentation
              </AnimatedLink>
              <AnimatedLink href="/schedule-demo">
                Schedule a demo
              </AnimatedLink>
            </div>
          </BlurFade>

          {/* Right column - Accordion with enhanced animations */}
          <BlurFade delay={shouldReduceMotion ? 0 : 0.1}>
            <div className="rounded-xl border bg-card p-1">
              <Accordion type="single" collapsible className="w-full">
                {items.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={shouldReduceMotion ? undefined : {
                      delay: index * 0.03,
                      duration: 0.25,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                  >
                    <AccordionItem
                      value={index.toString()}
                      className="border-b-0 px-4 [&[data-state=open]]:bg-muted/30 rounded-lg transition-colors duration-150 ease-out hover:bg-muted/20 motion-reduce:transition-none"
                    >
                      <AccordionTrigger className="text-left text-base py-4 hover:no-underline group">
                        <motion.span
                          className="flex-1"
                          whileHover={shouldReduceMotion ? undefined : { x: 3 }}
                          transition={{ duration: 0.1, ease: [0.32, 0.72, 0, 1] }}
                        >
                          {faq.question}
                        </motion.span>
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
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
