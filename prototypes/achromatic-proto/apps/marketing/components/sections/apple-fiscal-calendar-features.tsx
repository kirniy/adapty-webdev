'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  ArrowRightIcon,
  CalendarDaysIcon,
  ChevronRightIcon,
  ClockIcon,
  DollarSignIcon,
  ExternalLinkIcon
} from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@workspace/ui/components/accordion';
import { Card, CardContent } from '@workspace/ui/components/card';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { Spotlight } from '~/components/fragments/spotlight';

// EXACT content from adapty.io/apple-fiscal-calendar (scraped 2026-01-21)

// Payment dates table from adapty.io
const PAYMENT_DATES = [
  {
    paymentDate: 'December 4, 2025',
    fiscalMonth: 'October 2025',
    period: 'September 29 - November 1, 2025'
  },
  {
    paymentDate: 'January 2, 2026',
    fiscalMonth: 'November 2025',
    period: 'November 2 - November 29, 2025'
  },
  {
    paymentDate: 'January 29, 2026',
    fiscalMonth: 'December 2025',
    period: 'November 30 - December 27, 2025'
  },
  {
    paymentDate: 'March 5, 2026',
    fiscalMonth: 'January 2026',
    period: 'December 28, 2025 - January 31, 2026'
  },
  {
    paymentDate: 'April 2, 2026',
    fiscalMonth: 'February 2026',
    period: 'February 1 - February 28, 2026'
  },
  {
    paymentDate: 'April 30, 2026',
    fiscalMonth: 'March 2026',
    period: 'March 1 - March 28, 2026'
  },
  {
    paymentDate: 'June 4, 2026',
    fiscalMonth: 'April 2026',
    period: 'March 29 - May 2, 2026'
  },
  {
    paymentDate: 'July 2, 2026',
    fiscalMonth: 'May 2026',
    period: 'May 3 - May 30, 2026'
  },
  {
    paymentDate: 'July 30, 2026',
    fiscalMonth: 'June 2026',
    period: 'May 31 - June 27, 2026'
  },
  {
    paymentDate: 'September 3, 2026',
    fiscalMonth: 'July 2026',
    period: 'June 28 - August 1, 2026'
  },
  {
    paymentDate: 'October 1, 2026',
    fiscalMonth: 'August 2026',
    period: 'August 2 - August 29, 2026'
  },
  {
    paymentDate: 'October 29, 2026',
    fiscalMonth: 'September 2026',
    period: 'August 30 - September 26, 2026'
  }
];

// FAQs from adapty.io/apple-fiscal-calendar
const FAQS = [
  {
    question: "What is Apple's fiscal calendar?",
    answer:
      "Apple's fiscal calendar is their own unique way of organizing the year, and it's quite different from the regular Gregorian calendar we all know. Apple divides their fiscal year into specific periods that don't align with typical months. For example, the first month of each quarter has 35 days, while two other months have 28 days. For app developers, this matters because Apple uses their fiscal calendar to determine when they pay out your App Store earnings. Understanding Apple's fiscal periods helps you predict when your money will actually hit your bank account. Knowing this, you can manage your app's cash flow and business planning better."
  },
  {
    question: "Why does Apple's fiscal year have 364 days?",
    answer:
      "Apple uses a 4-4-5 week calendar system, which means each quarter has 13 weeks (4 weeks + 4 weeks + 5 weeks). In Apple's case, the longer month is set as the first, so it's 5-4-4. Four quarters of 13 weeks each equals exactly 364 days. This system makes it easier for Apple to compare financial performance across quarters since each one has the same number of weeks. Every 5-6 years Apple's fiscal year gets an extra week to handle the missing day compared to a regular 365-day year."
  },
  {
    question: 'How does Apple fiscal calendar work?',
    answer:
      "Apple usually pays out your App Store earnings 33 days after each fiscal month ends. So if a fiscal month ends on December 27th, you'll get paid on January 29th. Payments typically happen on the same day of the week throughout the year. In recent years, Apple has consistently paid on Thursdays. This predictable weekly pattern makes it easier to plan your cash flow once you know Apple's fiscal month end dates. The key thing to remember is that you're always waiting over a month to get paid for what you earned."
  },
  {
    question:
      "Are Apple's fiscal calendar and payment dates the same for every region?",
    answer:
      'Yes, at least on paper. In practice, though, payment dates can vary slightly by region due to local banking systems, holidays, and processing times. It means developers in different countries might see their payments arrive a day or two earlier or later.'
  },
  {
    question: 'Is there an official fiscal calendar from Apple?',
    answer:
      "Yes, it's available on App Store Connect. You just need to sign in using your developer account."
  },
  {
    question: 'Does Google pay developers in the same way?',
    answer:
      "No, Google's payout schedule is much simpler. Google pays developers around the 15th of each month for the previous month's earnings. So if you earned money in January, you'll get paid around February 15th. It's one less headache to worry about if you're publishing on both platforms."
  }
];

// =============================================================================
// MAGIC ANIMATIONS
// =============================================================================

// Calendar cycling through fiscal months
function CalendarMagic() {
  const shouldReduceMotion = useReducedMotion();
  const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
  const [currentMonth, setCurrentMonth] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setCurrentMonth((prev) => (prev + 1) % months.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, months.length]);

  if (shouldReduceMotion) {
    return (
      <div className="flex justify-center">
        <div className="w-16 h-16 rounded-lg bg-primary/10 flex flex-col items-center justify-center">
          <span className="text-[10px] text-muted-foreground">FY</span>
          <span className="text-lg font-bold text-primary">{months[0]}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="w-16 h-16 rounded-lg bg-primary/10 flex flex-col items-center justify-center overflow-hidden">
        <span className="text-[10px] text-muted-foreground">FY</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentMonth}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="text-lg font-bold text-primary"
          >
            {months[currentMonth]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

// 33-day countdown timer animation
function CountdownMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [days, setDays] = React.useState(33);

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setDays((prev) => (prev <= 1 ? 33 : prev - 1));
    }, 200);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className="flex justify-center items-center gap-2">
        <div className="text-2xl font-bold text-primary">33</div>
        <div className="text-xs text-muted-foreground">days</div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center gap-2">
      <motion.div
        key={days}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-2xl font-bold text-primary"
      >
        {days}
      </motion.div>
      <div className="text-xs text-muted-foreground">days</div>
    </div>
  );
}

// Thursday payment indicator
function PaydayMagic() {
  const shouldReduceMotion = useReducedMotion();
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const [activeDay, setActiveDay] = React.useState(3); // Thursday

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveDay((prev) => {
        // Bounce between days then settle on Thursday
        if (prev < 3) return prev + 1;
        if (prev === 3) return 0;
        return 3;
      });
    }, 600);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className="flex justify-center gap-1">
        {days.map((day, i) => (
          <div
            key={day}
            className={cn(
              'w-8 h-6 rounded text-[10px] flex items-center justify-center font-medium',
              i === 3
                ? 'bg-emerald-500/20 text-emerald-600'
                : 'bg-muted/50 text-muted-foreground'
            )}
          >
            {day}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-1">
      {days.map((day, i) => (
        <motion.div
          key={day}
          animate={{
            scale: activeDay === i ? 1.1 : 1,
            opacity: activeDay === i ? 1 : 0.5
          }}
          transition={{ type: 'spring', duration: 0.2, bounce: 0.3 }}
          className={cn(
            'w-8 h-6 rounded text-[10px] flex items-center justify-center font-medium',
            activeDay === i && i === 3
              ? 'bg-emerald-500/20 text-emerald-600'
              : 'bg-muted/50 text-muted-foreground'
          )}
        >
          {day}
        </motion.div>
      ))}
    </div>
  );
}

const STAT_CARDS = [
  {
    icon: CalendarDaysIcon,
    title: '364 Days',
    description:
      "Apple's fiscal year uses a 5-4-4 week system with 13 weeks per quarter",
    magic: CalendarMagic
  },
  {
    icon: ClockIcon,
    title: '33 Day Delay',
    description: 'Apple pays 33 days after each fiscal month ends',
    magic: CountdownMagic
  },
  {
    icon: DollarSignIcon,
    title: 'Thursday Payments',
    description: 'Payments typically arrive on Thursdays throughout the year',
    magic: PaydayMagic
  }
];

export function AppleFiscalCalendarFeatures(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);
  const [hoveredRow, setHoveredRow] = React.useState<number | null>(null);
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

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {STAT_CARDS.map((card, index) => {
            const isHovered = hoveredCard === index;
            const MagicComponent = card.magic;

            return (
              <BlurFade
                key={index}
                delay={0.1 + index * 0.03}
              >
                <motion.div
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: isHovered ? -6 : 0,
                          scale: isHovered ? 1.02 : 1
                        }
                  }
                  transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                  className={cn(
                    'group relative h-full overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm transition-all duration-200',
                    isHovered && 'border-primary/30  '
                  )}
                >
                  <Spotlight
                    className="from-primary/15 via-primary/5 to-transparent"
                    size={250}
                  />

                  <div className="relative p-6 text-center">
                    <motion.div
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : {
                              scale: isHovered ? 1.15 : 1,
                              rotate: isHovered ? 8 : 0
                            }
                      }
                      transition={{
                        type: 'spring',
                        duration: 0.3,
                        bounce: 0.2
                      }}
                      className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-4"
                    >
                      <card.icon className="size-6" />
                    </motion.div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {card.description}
                    </p>

                    {/* Magic animation */}
                    <div className="pt-4 border-t border-border/30">
                      <MagicComponent />
                    </div>
                  </div>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>

        {/* Payment dates table */}
        <BlurFade delay={0.15}>
          <div className="mt-20">
            <SiteHeading
              title="App Store pay dates 2026"
              description="In case you prefer to have the Apple fiscal calendar in spreadsheet format, we've got you covered."
            />

            <div className="mt-8 overflow-x-auto rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border/50 bg-muted/30">
                    <th className="text-left py-4 px-4 font-semibold">
                      Payment Date
                    </th>
                    <th className="text-left py-4 px-4 font-semibold">
                      Fiscal Month
                    </th>
                    <th className="text-left py-4 px-4 font-semibold">
                      Period
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PAYMENT_DATES.map((row, index) => (
                    <motion.tr
                      key={index}
                      onMouseEnter={() => setHoveredRow(index)}
                      onMouseLeave={() => setHoveredRow(null)}
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : {
                              backgroundColor:
                                hoveredRow === index
                                  ? 'hsl(var(--primary) / 0.05)'
                                  : 'transparent'
                            }
                      }
                      transition={{ duration: 0.15 }}
                      className="border-b border-border/30"
                    >
                      <td className="py-4 px-4">
                        <motion.span
                          animate={
                            shouldReduceMotion
                              ? undefined
                              : {
                                  color:
                                    hoveredRow === index
                                      ? 'hsl(var(--primary))'
                                      : 'hsl(var(--foreground))'
                                }
                          }
                          className="font-medium"
                        >
                          {row.paymentDate}
                        </motion.span>
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">
                        {row.fiscalMonth}
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">
                        {row.period}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </BlurFade>

        {/* Adapty Finance CTA */}
        <BlurFade delay={0.2}>
          <div className="mt-20 text-center">
            <motion.div
              whileHover={
                shouldReduceMotion ? undefined : { y: -4, scale: 1.01 }
              }
              transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
              className="relative inline-block p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-background/80 to-background/50 border border-primary/20 max-w-2xl overflow-hidden"
            >
              <Spotlight
                className="from-primary/20 via-primary/5 to-transparent"
                size={300}
              />
              <BorderBeam
                size={200}
                duration={12}
                borderWidth={1.5}
                colorFrom="hsl(var(--primary))"
                colorTo="hsl(var(--primary)/0)"
                className="opacity-60"
              />

              <div className="relative">
                <h3 className="text-xl font-semibold mb-2">
                  Get up to 85% of your Apple and Google revenue tomorrow
                </h3>
                <p className="text-muted-foreground mb-4">
                  Start scaling without limits with Adapty Finance.
                </p>
                <Link
                  href="https://adapty.io/finance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-primary font-medium hover:underline inline-flex items-center gap-2"
                >
                  Learn more about Adapty Finance
                  <motion.span
                    animate={shouldReduceMotion ? undefined : { x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRightIcon className="size-4" />
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </div>
        </BlurFade>

        {/* FAQ section */}
        <BlurFade delay={0.25}>
          <div className="mt-20 max-w-3xl mx-auto">
            <SiteHeading title="FAQ about Apple's fiscal calendar" />
            <Accordion
              type="single"
              collapsible
              className="mt-8"
            >
              {FAQS.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                >
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
