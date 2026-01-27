'use client';

import * as React from 'react';
import {
  ArrowRightIcon,
  BriefcaseIcon,
  ClockIcon,
  MapPinIcon
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { Button } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { Spotlight } from '~/components/fragments/spotlight';

const DATA = [
  {
    title: 'Senior Software Engineer',
    department: 'Engineering',
    description:
      'You will be responsible for the development of new and existing software products.',
    type: 'Full-time',
    location: 'Remote'
  },
  {
    title: 'Product Manager',
    department: 'Engineering',
    description: 'Help us build the next generation of Adapty products.',
    type: 'Full-time',
    location: 'Remote'
  },
  {
    title: 'Content Writer',
    department: 'Marketing',
    description:
      'Create engaging content for our blog, website, and social media channels.',
    type: 'Full-time',
    location: 'Remote'
  },
  {
    title: 'Social Media Manager',
    department: 'Marketing',
    description:
      'Manage our social media presence and engage with our followers.',
    type: 'Full-time',
    location: 'Remote'
  }
];

// Magic animation: Open positions count
function OpenPositionsMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = React.useState(0);
  const targetCount = DATA.length;

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setCount(targetCount);
      return;
    }
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= targetCount) return targetCount;
        return prev + 1;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, targetCount]);

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <motion.div
        className="size-2 rounded-full bg-primary"
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.2, 1]
              }
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.span
        key={count}
        initial={shouldReduceMotion ? {} : { y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        {count} open positions
      </motion.span>
    </motion.div>
  );
}

export function CareersPositions(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={800} />
      <div className="space-y-12 py-20 relative z-10">
        <BlurFade delay={0.05}>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
              <BriefcaseIcon className="size-4" />
              Open Positions
            </div>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Join our growing team
            </h2>
            <div className="mt-4">
              <OpenPositionsMagic />
            </div>
          </div>
        </BlurFade>

        <div className="container mx-auto max-w-4xl space-y-4">
          {DATA.map((position, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <BlurFade
                key={index}
                delay={0.1 + index * 0.05}
              >
                <motion.div
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: isHovered ? -4 : 0,
                          scale: isHovered ? 1.01 : 1
                        }
                  }
                  transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                  className={cn(
                    'group relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-6 transition-all duration-200',
                    isHovered && 'border-primary/30  '
                  )}
                >
                  {isHovered && (
                    <BorderBeam
                      size={200}
                      duration={10}
                      borderWidth={1.5}
                      colorFrom="hsl(var(--primary))"
                      colorTo="hsl(var(--primary)/0)"
                    />
                  )}
                  <Spotlight
                    className="from-primary/15 via-primary/5 to-transparent"
                    size={300}
                  />

                  <div className="relative flex flex-col justify-between md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {position.title}
                        </h3>
                        <Badge
                          variant="outline"
                          className={cn(
                            'w-fit rounded-full transition-colors duration-200',
                            isHovered && 'border-primary/50 text-primary'
                          )}
                        >
                          {position.department}
                        </Badge>
                      </div>
                      <p className="mt-2 text-muted-foreground">
                        {position.description}
                      </p>
                      <div className="mt-4 flex gap-4 text-sm text-muted-foreground">
                        <motion.div
                          animate={
                            shouldReduceMotion
                              ? undefined
                              : {
                                  x: isHovered ? 2 : 0
                                }
                          }
                          transition={{ duration: 0.15 }}
                          className="flex items-center gap-2"
                        >
                          <ClockIcon className="size-4" />
                          {position.type}
                        </motion.div>
                        <motion.div
                          animate={
                            shouldReduceMotion
                              ? undefined
                              : {
                                  x: isHovered ? 2 : 0
                                }
                          }
                          transition={{ duration: 0.15, delay: 0.05 }}
                          className="flex items-center gap-2"
                        >
                          <MapPinIcon className="size-4" />
                          {position.location}
                        </motion.div>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <Button
                        type="button"
                        variant="default"
                        className="rounded-xl group/btn"
                      >
                        Apply
                        <motion.span
                          animate={
                            shouldReduceMotion
                              ? undefined
                              : {
                                  x: isHovered ? 3 : 0
                                }
                          }
                          transition={{ duration: 0.15 }}
                        >
                          <ArrowRightIcon className="ml-2 size-4" />
                        </motion.span>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>

        {/* No positions CTA */}
        <BlurFade delay={0.4}>
          <div className="container mx-auto max-w-4xl">
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              className="text-center p-8 rounded-xl border border-dashed border-border/50 bg-muted/20"
            >
              <p className="text-muted-foreground mb-4">
                Do not see a role that fits? We are always looking for talented
                people.
              </p>
              <Button
                variant="outline"
                className="rounded-xl"
              >
                Send us your resume
                <ArrowRightIcon className="ml-2 size-4" />
              </Button>
            </motion.div>
          </div>
        </BlurFade>
      </div>
    </GridSection>
  );
}
