'use client';

import * as React from 'react';
import Link from 'next/link';
import { ExternalLinkIcon, CalendarDaysIcon, DollarSignIcon, ClockIcon } from 'lucide-react';

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

// EXACT content from adapty.io/apple-fiscal-calendar (scraped 2026-01-21)

// Payment dates table from adapty.io
const PAYMENT_DATES = [
  { paymentDate: 'December 4, 2025', fiscalMonth: 'October 2025', period: 'September 29 - November 1, 2025' },
  { paymentDate: 'January 2, 2026', fiscalMonth: 'November 2025', period: 'November 2 - November 29, 2025' },
  { paymentDate: 'January 29, 2026', fiscalMonth: 'December 2025', period: 'November 30 - December 27, 2025' },
  { paymentDate: 'March 5, 2026', fiscalMonth: 'January 2026', period: 'December 28, 2025 - January 31, 2026' },
  { paymentDate: 'April 2, 2026', fiscalMonth: 'February 2026', period: 'February 1 - February 28, 2026' },
  { paymentDate: 'April 30, 2026', fiscalMonth: 'March 2026', period: 'March 1 - March 28, 2026' },
  { paymentDate: 'June 4, 2026', fiscalMonth: 'April 2026', period: 'March 29 - May 2, 2026' },
  { paymentDate: 'July 2, 2026', fiscalMonth: 'May 2026', period: 'May 3 - May 30, 2026' },
  { paymentDate: 'July 30, 2026', fiscalMonth: 'June 2026', period: 'May 31 - June 27, 2026' },
  { paymentDate: 'September 3, 2026', fiscalMonth: 'July 2026', period: 'June 28 - August 1, 2026' },
  { paymentDate: 'October 1, 2026', fiscalMonth: 'August 2026', period: 'August 2 - August 29, 2026' },
  { paymentDate: 'October 29, 2026', fiscalMonth: 'September 2026', period: 'August 30 - September 26, 2026' }
];

// FAQs from adapty.io/apple-fiscal-calendar
const FAQS = [
  {
    question: "What is Apple's fiscal calendar?",
    answer: "Apple's fiscal calendar is their own unique way of organizing the year, and it's quite different from the regular Gregorian calendar we all know. Apple divides their fiscal year into specific periods that don't align with typical months. For example, the first month of each quarter has 35 days, while two other months have 28 days. For app developers, this matters because Apple uses their fiscal calendar to determine when they pay out your App Store earnings. Understanding Apple's fiscal periods helps you predict when your money will actually hit your bank account. Knowing this, you can manage your app's cash flow and business planning better."
  },
  {
    question: "Why does Apple's fiscal year have 364 days?",
    answer: "Apple uses a 4-4-5 week calendar system, which means each quarter has 13 weeks (4 weeks + 4 weeks + 5 weeks). In Apple's case, the longer month is set as the first, so it's 5-4-4. Four quarters of 13 weeks each equals exactly 364 days. This system makes it easier for Apple to compare financial performance across quarters since each one has the same number of weeks. Every 5-6 years Apple's fiscal year gets an extra week to handle the missing day compared to a regular 365-day year."
  },
  {
    question: 'How does Apple fiscal calendar work?',
    answer: "Apple usually pays out your App Store earnings 33 days after each fiscal month ends. So if a fiscal month ends on December 27th, you'll get paid on January 29th. Payments typically happen on the same day of the week throughout the year. In recent years, Apple has consistently paid on Thursdays. This predictable weekly pattern makes it easier to plan your cash flow once you know Apple's fiscal month end dates. The key thing to remember is that you're always waiting over a month to get paid for what you earned."
  },
  {
    question: "Are Apple's fiscal calendar and payment dates the same for every region?",
    answer: "Yes, at least on paper. In practice, though, payment dates can vary slightly by region due to local banking systems, holidays, and processing times. It means developers in different countries might see their payments arrive a day or two earlier or later."
  },
  {
    question: 'Is there an official fiscal calendar from Apple?',
    answer: "Yes, it's available on App Store Connect. You just need to sign in using your developer account."
  },
  {
    question: 'Does Google pay developers in the same way?',
    answer: "No, Google's payout schedule is much simpler. Google pays developers around the 15th of each month for the previous month's earnings. So if you earned money in January, you'll get paid around February 15th. It's one less headache to worry about if you're publishing on both platforms."
  }
];

export function AppleFiscalCalendarFeatures(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={2500} />
      <div className="container py-20 relative z-10">
        {/* How it works */}
        <BlurFade delay={0.05}>
          <SiteHeading
            title="How Apple's fiscal calendar works"
            description="Apple's fiscal year consists of 364 days divided into four quarters that include 12 fiscal months. Apple typically pays 33 days after the end of the fiscal month, and the payment usually comes on the same day of the week throughout the whole year."
          />
        </BlurFade>

        <BlurFade delay={0.1}>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-background/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-4">
                  <CalendarDaysIcon className="size-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">364 Days</h3>
                <p className="text-sm text-muted-foreground">
                  Apple's fiscal year uses a 4-4-5 week system with 13 weeks per quarter
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-4">
                  <ClockIcon className="size-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">33 Day Delay</h3>
                <p className="text-sm text-muted-foreground">
                  Apple pays 33 days after each fiscal month ends
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-4">
                  <DollarSignIcon className="size-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Thursday Payments</h3>
                <p className="text-sm text-muted-foreground">
                  Payments typically arrive on Thursdays throughout the year
                </p>
              </CardContent>
            </Card>
          </div>
        </BlurFade>

        {/* Payment dates table */}
        <BlurFade delay={0.15}>
          <div className="mt-20">
            <SiteHeading
              title="App Store pay dates 2026"
              description="In case you prefer to have the Apple fiscal calendar in spreadsheet format, we've got you covered."
            />

            <div className="mt-8 overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left py-4 px-4 font-semibold">Payment Date</th>
                    <th className="text-left py-4 px-4 font-semibold">Fiscal Month</th>
                    <th className="text-left py-4 px-4 font-semibold">Period</th>
                  </tr>
                </thead>
                <tbody>
                  {PAYMENT_DATES.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-border/30 hover:bg-muted/30 transition-colors duration-150 ease-out motion-reduce:transition-none"
                    >
                      <td className="py-4 px-4 font-medium">{row.paymentDate}</td>
                      <td className="py-4 px-4 text-muted-foreground">{row.fiscalMonth}</td>
                      <td className="py-4 px-4 text-muted-foreground">{row.period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </BlurFade>

        {/* Adapty Finance CTA */}
        <BlurFade delay={0.2}>
          <div className="mt-20 text-center">
            <div className="inline-block p-8 rounded-2xl bg-muted/50 border border-border/50 max-w-2xl">
              <h3 className="text-xl font-semibold mb-2">Get up to 85% of your Apple & Google revenue tomorrow</h3>
              <p className="text-muted-foreground mb-4">
                Start scaling without limits with Adapty Finance.
              </p>
              <Link
                href="https://adapty.io/finance/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline inline-flex items-center gap-1"
              >
                Learn more about Adapty Finance
                <ExternalLinkIcon className="size-4" />
              </Link>
            </div>
          </div>
        </BlurFade>

        {/* FAQ section */}
        <BlurFade delay={0.25}>
          <div className="mt-20 max-w-3xl mx-auto">
            <SiteHeading title="FAQ about Apple's fiscal calendar" />
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
