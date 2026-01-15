import * as React from 'react';
import Link from 'next/link';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@workspace/ui/components/accordion';

import { GridSection } from '~/components/fragments/grid-section';

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
    <GridSection>
      <div className="container py-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="text-center lg:text-left">
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 hidden text-muted-foreground md:block lg:max-w-[75%]">
              Have more questions? Check out our{' '}
              <Link
                href="https://adapty.io/docs/"
                target="_blank"
                className="font-normal text-inherit underline hover:text-foreground"
              >
                documentation
              </Link>{' '}
              or{' '}
              <Link
                href="https://adapty.io/schedule-demo/"
                target="_blank"
                className="font-normal text-inherit underline hover:text-foreground"
              >
                schedule a demo
              </Link>{' '}
              with our team.
            </p>
          </div>
          <div className="mx-auto flex w-full max-w-xl flex-col">
            <Accordion
              type="single"
              collapsible
            >
              {DATA.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={index.toString()}
                >
                  <AccordionTrigger className="text-left text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </GridSection>
  );
}
