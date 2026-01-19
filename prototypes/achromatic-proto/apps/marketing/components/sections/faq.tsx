'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { motion } from 'motion/react';

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

export function FAQ(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left column - Header */}
          <BlurFade className="text-center lg:text-left lg:sticky lg:top-24 lg:self-start">
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
              <Link
                href="https://adapty.io/docs/"
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Read documentation
                <ArrowRightIcon className="size-4" />
              </Link>
              <Link
                href="https://adapty.io/schedule-demo/"
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Schedule a demo
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          </BlurFade>

          {/* Right column - Accordion */}
          <BlurFade delay={0.1}>
            <div className="rounded-xl border bg-card p-1">
              <Accordion type="single" collapsible className="w-full">
                {DATA.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <AccordionItem
                      value={index.toString()}
                      className="border-b-0 px-4 [&[data-state=open]]:bg-muted/30 rounded-lg transition-colors"
                    >
                      <AccordionTrigger className="text-left text-base py-4 hover:no-underline">
                        {faq.question}
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
