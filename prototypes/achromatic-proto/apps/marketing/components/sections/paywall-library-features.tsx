'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, ExternalLinkIcon, DollarSignIcon } from 'lucide-react';

import { Card, CardContent } from '@workspace/ui/components/card';
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

// EXACT content from adapty.io/paywall-library (scraped 2026-01-21)

// Categories from the library (showing counts from original site)
const CATEGORIES = [
  { name: 'All', count: 7401 },
  { name: 'AI', count: 536 },
  { name: 'Business', count: 317 },
  { name: 'Dating', count: 115 },
  { name: 'Education', count: 557 },
  { name: 'Entertainment', count: 614 },
  { name: 'Finance', count: 298 },
  { name: 'Food & Drink', count: 179 },
  { name: 'Games', count: 180 },
  { name: 'Graphics & Design', count: 210 },
  { name: 'Health & Fitness', count: 917 },
  { name: 'Lifestyle', count: 488 },
  { name: 'Medical', count: 30 },
  { name: 'Music', count: 191 },
  { name: 'Navigation', count: 65 },
  { name: 'News', count: 76 },
  { name: 'Photo & Video', count: 1027 },
  { name: 'Productivity', count: 721 },
  { name: 'Reference', count: 66 },
  { name: 'Shopping', count: 45 },
  { name: 'Social Networking', count: 169 },
  { name: 'Sports', count: 66 },
  { name: 'Travel', count: 93 },
  { name: 'Utilities', count: 350 },
  { name: 'Weather', count: 91 }
];

// Top apps from the library (sample from scraped data)
const TOP_APPS = [
  { name: 'YouTube', revenue: '$136m', category: 'Photo & Video' },
  { name: 'TikTok', revenue: '$113m', category: 'Entertainment' },
  { name: 'Tinder', revenue: '$79m', category: 'Dating' },
  { name: 'Disney+', revenue: '$71m', category: 'Entertainment' },
  { name: 'Max', revenue: '$50m', category: 'Entertainment' },
  { name: 'LinkedIn', revenue: '$47m', category: 'Business' },
  { name: 'Duolingo', revenue: '$39m', category: 'Education' },
  { name: 'Bumble', revenue: '$38m', category: 'Dating' }
];

// FAQs from adapty.io/paywall-library
const FAQS = [
  {
    question: 'What is the Adapty Paywall Library?',
    answer: "The Adapty Paywall Library is a comprehensive collection of over 10,000 mobile app paywalls. It's designed to help app developers and designers find inspiration and learn best practices for creating effective paywalls."
  },
  {
    question: 'How can I use the Paywall Library?',
    answer: "You can browse paywalls by category, search for specific apps, or explore top-grossing apps. Each paywall includes details about the app's revenue and subscription model to help you understand what works."
  },
  {
    question: 'Is the Paywall Library free to use?',
    answer: "Yes, the Paywall Library is completely free to browse. You can explore thousands of paywalls without any cost. To build and test your own paywalls, you can sign up for Adapty's free tier."
  },
  {
    question: 'How often is the library updated?',
    answer: "The library is updated regularly with new paywalls from the App Store and Google Play. We track changes to existing paywalls and add new apps as they implement in-app purchases."
  },
  {
    question: 'Can I build similar paywalls with Adapty?',
    answer: "Yes! Adapty's Paywall Builder lets you create beautiful, high-converting paywalls without coding. You can use the library for inspiration and then build your own customized version."
  },
  {
    question: 'What makes a successful paywall?',
    answer: "Successful paywalls typically have clear value propositions, compelling visuals, well-structured pricing, and strong calls to action. The library helps you study what top apps are doing to maximize conversions."
  }
];

export function PaywallLibraryFeatures(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={2000} />
      <div className="container py-20 relative z-10">
        {/* Categories grid */}
        <BlurFade delay={0.05}>
          <SiteHeading title="Browse by category" />
        </BlurFade>

        <BlurFade delay={0.1}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((category, index) => (
              <Link
                key={index}
                href="https://adapty.io/paywall-library/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-muted/50 border border-border/50 text-sm font-medium hover:border-primary/30 hover:text-primary transition-colors duration-150 ease-out motion-reduce:transition-none inline-flex items-center gap-1.5"
              >
                {category.name}
                <span className="text-xs text-muted-foreground">({category.count.toLocaleString()})</span>
              </Link>
            ))}
          </div>
        </BlurFade>

        {/* Top apps section */}
        <BlurFade delay={0.15}>
          <div className="mt-20">
            <SiteHeading
              title="Learn from top-grossing apps"
              description="See how the most successful apps design their paywalls and pricing strategies."
            />

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {TOP_APPS.map((app, index) => (
                <Card
                  key={index}
                  className="bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-150 ease-out motion-reduce:transition-none"
                >
                  <CardContent className="p-4 text-center">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-3">
                      <DollarSignIcon className="size-6" />
                    </div>
                    <h4 className="font-semibold">{app.name}</h4>
                    <p className="text-lg font-bold text-primary mt-1">{app.revenue}</p>
                    <p className="text-xs text-muted-foreground">{app.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="https://adapty.io/paywall-library/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline inline-flex items-center gap-1"
              >
                Explore all 10,000+ paywalls
                <ExternalLinkIcon className="size-4" />
              </Link>
            </div>
          </div>
        </BlurFade>

        {/* Paywall Builder CTA */}
        <BlurFade delay={0.2}>
          <div className="mt-20 text-center">
            <div className="inline-block p-8 rounded-2xl bg-muted/50 border border-border/50 max-w-2xl">
              <h3 className="text-xl font-semibold mb-2">Ready to build your own paywall?</h3>
              <p className="text-muted-foreground mb-4">
                Use Adapty's Paywall Builder to create beautiful, high-converting paywalls without coding. A/B test different designs and optimize for maximum revenue.
              </p>
              <Link
                href="/paywall-builder"
                className="text-primary font-medium hover:underline inline-flex items-center gap-1"
              >
                Try Paywall Builder
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          </div>
        </BlurFade>

        {/* FAQ section */}
        <BlurFade delay={0.25}>
          <div className="mt-20 max-w-3xl mx-auto">
            <SiteHeading title="Frequently asked questions" />
            <Accordion type="single" collapsible className="mt-8">
              {FAQS.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
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
