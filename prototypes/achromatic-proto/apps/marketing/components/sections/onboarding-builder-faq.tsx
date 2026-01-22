'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'motion/react';

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
import { Spotlight } from '~/components/fragments/spotlight';

// Magic animation: FAQ response badge
function OnboardingFAQMagic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.15 }}
    >
      <motion.div
        className="size-2 rounded-full bg-green-500"
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <span>8 expert answers</span>
    </motion.div>
  );
}

// EXACT FAQs from adapty.io/onboarding-builder (scraped 2026-01-21)
const FAQS = [
  {
    question: 'How do I improve my app\'s onboarding conversion rate?',
    answer: 'Start by simplifying steps, removing friction, and personalizing the experience based on user intent. With Adapty, you can visually experiment with multiple onboarding versions and see which one drives more activations and purchases.'
  },
  {
    question: 'How many steps should an onboarding flow have?',
    answer: "There's no universal number - it depends on the app. The key is keeping only what's necessary to help users understand your product. Adapty lets you test shorter vs. longer flows to find the version that performs best for your audience."
  },
  {
    question: 'Should I include tutorials in onboarding?',
    answer: "It depends on the complexity of your app. Simple products usually don't need a tutorial; users learn through doing. Complex products can benefit from short, focused guidance that helps people reach their first meaningful action. If you're unsure, test both. Adapty lets you create onboarding variants with and without tutorials and compare activation and conversion."
  },
  {
    question: 'How do I reduce friction in onboarding?',
    answer: "Keep only what's essential, avoid long forms, delay permissions, and show value before asking for anything. Personalizing paths based on user intent also removes unnecessary steps."
  },
  {
    question: 'How do I A/B test onboarding flows?',
    answer: 'Create two or more onboarding variants, split your audience, and compare activation, trial, and purchase conversion. Adapty makes this no-code: publish variants in minutes and track results automatically.'
  },
  {
    question: 'What is a good onboarding activation rate?',
    answer: 'Benchmarks vary by category, but most subscription apps aim for a 60-80% onboarding completion rate and a clear path to first activation. What matters most is improving your own baseline.'
  },
  {
    question: 'Can I change my onboarding without releasing a new app version?',
    answer: "Yes. With Adapty's Onboarding Builder, you can update flows, change content, and publish new variants without an app update. Changes go live instantly."
  },
  {
    question: 'When should I show the paywall during onboarding?',
    answer: "There's no universal rule - it depends on the app's category and value proposition. Many top apps show paywalls early, often inside onboarding. Adapty lets you test multiple placements and measure which drives the best revenue outcomes."
  }
];

export function OnboardingBuilderFAQ(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container py-20 relative z-10">
        <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={350} />
        <BlurFade delay={0.05}>
          <SiteHeading
            title="FAQ"
            description="Common questions about building and optimizing onboarding flows."
          />
          <div className="mt-4 flex justify-center">
            <OnboardingFAQMagic />
          </div>
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
