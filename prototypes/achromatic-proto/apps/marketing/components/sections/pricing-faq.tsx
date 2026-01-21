import * as React from 'react';
import Link from 'next/link';

import { APP_NAME } from '@workspace/common/app';
import { routes } from '@workspace/routes';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@workspace/ui/components/accordion';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { BlurFade } from '~/components/fragments/blur-fade';

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

export function PricingFAQ(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container py-20 relative z-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <BlurFade delay={0.05}>
            <div className="text-center lg:text-left">
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
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
