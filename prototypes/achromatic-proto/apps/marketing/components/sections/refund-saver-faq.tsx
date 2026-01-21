'use client';

import * as React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@workspace/ui/components/accordion';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { BlurFade } from '~/components/fragments/blur-fade';

// EXACT FAQs from adapty.io/refund-saver (scraped 2026-01-21)
const FAQS = [
  {
    question: 'How does Refund Saver help reduce refunds?',
    answer: "It automatically shares app usage info with Apple when a refund is requested. This way, Apple gets the full picture and fewer refunds get approved when they're not really justified."
  },
  {
    question: 'Can Refund Saver actually make Adapty free?',
    answer: "Yes! Many developers recover enough revenue to cover Adapty's cost. The refunds you save often add up to more than what you pay for Adapty."
  },
  {
    question: 'What do I need to get started?',
    answer: "Just install the Adapty SDK and turn on Refund Saver - it's that simple. No extra work or coding required. Once it's on, it runs automatically."
  }
];

export function RefundSaverFAQ(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={600} />
      <div className="container py-20 relative z-10">
        <BlurFade delay={0.05}>
          <SiteHeading
            title="Got questions?"
          />
        </BlurFade>

        <BlurFade delay={0.1}>
          <div className="mt-12 max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
