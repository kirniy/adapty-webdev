'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
  DollarSignIcon,
  DownloadIcon
} from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { SiteHeading } from '~/components/fragments/site-heading';
import { Spotlight } from '~/components/fragments/spotlight';

// Calendar magic animation showing fiscal weeks
function CalendarPreviewMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [activeWeek, setActiveWeek] = React.useState(0);
  const weeks = [
    { label: 'Week 1', days: [1, 2, 3, 4, 5, 6, 7] },
    { label: 'Week 2', days: [8, 9, 10, 11, 12, 13, 14] },
    { label: 'Week 3', days: [15, 16, 17, 18, 19, 20, 21] },
    { label: 'Week 4', days: [22, 23, 24, 25, 26, 27, 28] }
  ];
  const payDays = [12, 26]; // Example paydays

  React.useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setActiveWeek((prev) => (prev + 1) % weeks.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, weeks.length]);

  if (shouldReduceMotion) {
    return (
      <div className="grid grid-cols-7 gap-1">
        {[...Array(28)].map((_, i) => (
          <div
            key={i}
            className={cn(
              'size-6 rounded text-[10px] flex items-center justify-center',
              payDays.includes(i + 1) ? 'bg-emerald-500 text-white' : 'bg-muted'
            )}
          >
            {i + 1}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Mini calendar */}
      <div className="grid grid-cols-7 gap-1">
        {weeks.flatMap((week, weekIdx) =>
          week.days.map((day) => {
            const isPayday = payDays.includes(day);
            const isCurrentWeek = weekIdx === activeWeek;

            return (
              <motion.div
                key={day}
                animate={{
                  scale: isCurrentWeek ? 1.05 : 0.95,
                  opacity: isCurrentWeek ? 1 : 0.5
                }}
                transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
                className={cn(
                  'size-6 rounded text-[10px] flex items-center justify-center font-medium',
                  isPayday && 'bg-emerald-500 text-white',
                  !isPayday && isCurrentWeek && 'bg-primary/20 text-primary',
                  !isPayday &&
                    !isCurrentWeek &&
                    'bg-muted text-muted-foreground'
                )}
              >
                {day}
              </motion.div>
            );
          })
        )}
      </div>

      {/* Current week indicator */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeWeek}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="text-center"
        >
          <span className="text-xs text-muted-foreground">
            Fiscal {weeks[activeWeek]?.label}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Next payday countdown
function PaydayCountdownMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [days, setDays] = React.useState(0);
  const target = 12;

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setDays(target);
      return;
    }
    const duration = 1500;
    const steps = 20;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setDays(target);
        clearInterval(timer);
      } else {
        setDays(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <motion.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20"
    >
      <DollarSignIcon className="size-4 text-emerald-500" />
      <span className="text-sm font-medium">
        Next payday in{' '}
        <span className="text-emerald-600 font-bold">{days} days</span>
      </span>
    </motion.div>
  );
}

export function AppleFiscalCalendarHero(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState<'pdf' | 'gcal' | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="container py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <BlurFade delay={0.05}>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider">
              <CalendarIcon className="size-4" />
              Developer Tools
            </span>
          </BlurFade>

          <BlurFade delay={0.1}>
            <SiteHeading
              title="Apple fiscal calendar and payment dates 2026"
              description="Apple's fiscal calendar determines when you get paid for your App Store earnings. See all the payment dates for 2026."
            />
          </BlurFade>

          {/* Calendar visualization */}
          <BlurFade delay={0.15}>
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="p-6 rounded-2xl border bg-background/50 backdrop-blur-sm max-w-xs mx-auto relative overflow-hidden"
            >
              <Spotlight
                className="from-primary/15 via-primary/5 to-transparent"
                size={280}
              />
              <div className="relative">
                <div className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                  Fiscal month preview
                </div>
                <CalendarPreviewMagic />
              </div>
            </motion.div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <PaydayCountdownMagic />
          </BlurFade>

          <BlurFade delay={0.25}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                onMouseEnter={() => setIsHovered('pdf')}
                onMouseLeave={() => setIsHovered(null)}
                animate={{
                  y: shouldReduceMotion ? 0 : isHovered === 'pdf' ? -2 : 0
                }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                className="relative"
              >
                <Link
                  href="https://uploads.adapty.io/apple-fiscal-calendar-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
                  )}
                >
                  <DownloadIcon className="mr-2 size-4" />
                  Download as PDF
                </Link>
                <BorderBeam
                  size={120}
                  duration={8}
                  borderWidth={1.5}
                  colorFrom="hsl(var(--primary))"
                  colorTo="hsl(var(--primary)/0)"
                  className="opacity-60"
                />
              </motion.div>

              <motion.div
                onMouseEnter={() => setIsHovered('gcal')}
                onMouseLeave={() => setIsHovered(null)}
                animate={{
                  y: shouldReduceMotion ? 0 : isHovered === 'gcal' ? -2 : 0
                }}
                transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
              >
                <Link
                  href="https://adapty.io/apple-fiscal-calendar/in-google-calendar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'rounded-xl px-8 transition-all duration-150 ease-out motion-reduce:transition-none'
                  )}
                >
                  <CalendarIcon className="mr-2 size-4" />
                  Add to Google Calendar
                </Link>
              </motion.div>
            </div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
