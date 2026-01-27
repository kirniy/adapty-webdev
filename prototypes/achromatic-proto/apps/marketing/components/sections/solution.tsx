'use client';

import * as React from 'react';
import { ChevronRightIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { APP_NAME } from '@workspace/common/app';

import { AiAdvisorCard } from '~/components/cards/ai-advisor-card';
import { BentoAnalyticsCard } from '~/components/cards/bento-analytics-card';
import { BentoCampaignsCard } from '~/components/cards/bento-campaigns-card';
import { BentoCustomersCard } from '~/components/cards/bento-customers-card';
import { BentoMagicInboxCard } from '~/components/cards/bento-magic-inbox-card';
import { BentoPipelinesCard } from '~/components/cards/bento-pipelines-card';
import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { BlurFade } from '~/components/fragments/blur-fade';
import { Spotlight } from '~/components/fragments/spotlight';

// Magic animation: Zero code changes badge
function NoCodeMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setCount(0);
      return;
    }
    const timer = setTimeout(() => setCount(0), 500);
    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <motion.div
        className="size-2 rounded-full bg-primary"
        animate={shouldReduceMotion ? {} : {
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <span>{count} code changes required</span>
    </motion.div>
  );
}

export function Solution(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredFeature, setHoveredFeature] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1200} />
      <div>
        <div className="flex flex-col gap-24 bg-background/50 py-20 lg:mx-12 lg:border-x relative z-10 backdrop-blur-sm">
          <div className="container relative space-y-10">
            <BlurFade delay={0.05}>
              <div>
                <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
                  Increase subscription revenue without app releases
                </h2>
                <p className="mt-1 max-w-2xl text-muted-foreground md:mt-6">
                  Manage, target, localize and personalize paywalls without leaving your browser.
                  {APP_NAME} gives you the tools to optimize every step of the subscription journey.
                </p>
                <div className="mt-4">
                  <NoCodeMagic />
                </div>
              </div>
            </BlurFade>

            <div className="mx-auto xl:container xl:rounded-xl xl:bg-neutral-50 xl:p-6 dark:xl:bg-neutral-900 relative overflow-hidden">
              <BorderBeam
                size={200}
                duration={20}
                borderWidth={1}
                colorFrom="hsl(var(--primary))"
                colorTo="hsl(var(--primary)/0)"
                className="opacity-30"
              />
              <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={450} />
              <div className="grid auto-rows-[minmax(200px,auto)] grid-cols-12 gap-6">
                <BentoCustomersCard
                  className="col-span-12 md:col-span-6 xl:col-span-4"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                />
                <BentoPipelinesCard
                  className="col-span-12 md:col-span-6 xl:col-span-8"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.2 }}
                />
                <BentoAnalyticsCard
                  className="col-span-12 md:col-span-6 xl:col-span-4"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.2 }}
                />
                <BentoCampaignsCard
                  className="col-span-12 md:col-span-6 xl:col-span-4"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.6 }}
                />
                <BentoMagicInboxCard
                  className="col-span-12 md:col-span-6 xl:col-span-4"
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.8 }}
                />
              </div>
            </div>

            <div className="-ml-8 w-[calc(100%+64px)] border-t border-dashed sm:-ml-20 sm:w-[calc(100%+160px)]" />

            <div className="grid gap-10 sm:container lg:grid-cols-2">
              <div>
                <BlurFade delay={0.1}>
                  <h2 className="mb-2.5 mt-8 text-3xl font-semibold md:text-5xl">
                    Know your subscription numbers at any moment
                  </h2>
                  <p className="mt-1 text-muted-foreground md:mt-6">
                    Measure your in-app economy from trials to refunds with a ready-to-go,
                    real-time subscription BI powered by AI predictions.
                  </p>
                </BlurFade>

                <ul className="mt-6 list-none flex-wrap items-center gap-6 space-y-3 md:flex md:space-y-0">
                  {[
                    'Real-time analytics',
                    'AI LTV predictions',
                    'Cohort analysis',
                    'Revenue forecasting',
                    'Churn monitoring',
                    'Attribution tracking'
                  ].map((feature, index) => (
                    <BlurFade key={feature} delay={0.15 + index * 0.03}>
                      <motion.li
                        onMouseEnter={() => setHoveredFeature(index)}
                        onMouseLeave={() => setHoveredFeature(null)}
                        animate={shouldReduceMotion ? undefined : {
                          x: hoveredFeature === index ? 4 : 0,
                        }}
                        transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                        className="flex flex-row items-center gap-2"
                      >
                        <motion.div
                          animate={shouldReduceMotion ? undefined : {
                            scale: hoveredFeature === index ? 1.2 : 1,
                          }}
                          transition={{ type: 'spring', duration: 0.2 }}
                        >
                          <ChevronRightIcon className="size-3 shrink-0 text-muted-foreground" />
                        </motion.div>
                        <span className="font-medium">{feature}</span>
                      </motion.li>
                    </BlurFade>
                  ))}
                </ul>
              </div>
              <BlurFade delay={0.2}>
                <AiAdvisorCard className="w-full max-w-md" />
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </GridSection>
  );
}
