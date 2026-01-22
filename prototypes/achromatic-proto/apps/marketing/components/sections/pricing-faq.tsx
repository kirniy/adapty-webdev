'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { HelpCircleIcon } from 'lucide-react';

import { APP_NAME } from '@workspace/common/app';
import { routes } from '@workspace/routes';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@workspace/ui/components/accordion';

import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { BlurFade } from '~/components/fragments/blur-fade';
import { Spotlight } from '~/components/fragments/spotlight';

// EXACT FAQs from adapty.io/pricing (only 4 questions)
const DATA = [
  {
    question: 'What is MTR?',
    answer: (
      <p>
        MTR is a monthly tracked revenue. It's the amount of revenue tracked by {APP_NAME} (in USD, and before the platform cut) during the billing period of one month. This includes paid subscriptions, renewals, and one-time purchases.
      </p>
    )
  },
  {
    question: 'What if my MTR goes over $10K on a Free plan?',
    answer: (
      <p>
        Don't worry, {APP_NAME} continues to handle your purchases and receipt validation. However, you won't have access to the rest of the features, including Dashboard and Reports. To unlock the access you'll need to upgrade your plan.
      </p>
    )
  },
  {
    question: 'Do you replace Apple or Google payment?',
    answer: (
      <p>
        No, we don't! We simplify and secure payment infrastructure for you but all payments are still processed by Apple or Google.
      </p>
    )
  },
  {
    question: 'Ooops, I have a billing issue with my card, will you cancel our SDK?',
    answer: (
      <p>
        No, we won't. {APP_NAME} continues to handle your purchases and receipt validation. You will be prompted with a paywall and after paying you can continue to use all the {APP_NAME} features.
      </p>
    )
  }
];

// Magic animation: FAQ count badge
function FAQCountMagic() {
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
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        <HelpCircleIcon className="size-3.5" />
      </motion.div>
      <span>Quick answers</span>
    </motion.div>
  );
}

export function PricingFAQ(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container py-20 relative z-10">
        <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={350} />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <BlurFade delay={0.05}>
            <div className="text-center lg:text-left">
              <div className="mb-4">
                <FAQCountMagic />
              </div>
              <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-6 hidden text-muted-foreground md:block lg:max-w-[75%]">
                Have questions about our pricing or plans?{' '}
                <Link
                  href={routes.marketing.Contact}
                  className="font-normal text-inherit underline transition-colors duration-150 ease-out hover:text-foreground motion-reduce:transition-none"
                >
                  Contact us
                </Link>{' '}
                - we're here to help you find the perfect fit for your needs.
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={0.1}>
            <div className="mx-auto flex w-full max-w-xl flex-col relative rounded-xl border bg-card p-1 overflow-hidden">
              <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={300} />
              <BorderBeam
                size={180}
                duration={12}
                borderWidth={1.5}
                colorFrom="hsl(var(--primary))"
                colorTo="hsl(var(--primary)/0)"
                className="opacity-40"
              />
              <Accordion
                type="single"
                collapsible
                className="relative z-10"
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
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
