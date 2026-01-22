'use client';

import * as React from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { BlurFade } from '~/components/fragments/blur-fade';
import { Spotlight } from '~/components/fragments/spotlight';
import { BorderBeam } from '~/components/fragments/border-beam';
import { cn } from '@workspace/ui/lib/utils';

const DATA = [
  {
    date: '2019',
    title: 'The vision takes shape',
    description:
      'Founded with a clear mission: make subscription monetization accessible to every app developer, not just the big players.'
  },
  {
    date: '2020',
    title: 'First SDK launch',
    description:
      'Released our first SDK for iOS and Android, handling purchase validation and subscription management.'
  },
  {
    date: '2021',
    title: 'Paywall A/B testing',
    description:
      'Launched no-code paywall builder and A/B testing, empowering teams to iterate without developer bottlenecks.'
  },
  {
    date: '2022',
    title: 'Analytics and predictions',
    description:
      'Introduced real-time analytics dashboard with LTV prediction and cohort analysis powered by machine learning.'
  },
  {
    date: '2023',
    title: 'Scaling to 10,000+ apps',
    description:
      'Reached the milestone of powering over 10,000 apps worldwide, processing billions of events daily.'
  },
  {
    date: '2024-2025',
    title: 'AI-powered growth',
    description:
      'Launched AI paywall generator, autopilot optimization, and predictive winner detection for A/B tests.'
  }
];

// Magic animation: Years of experience counter
function YearsExperienceMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [years, setYears] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setYears(6);
      return;
    }
    const interval = setInterval(() => {
      setYears(prev => {
        if (prev >= 6) return 6;
        return prev + 1;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
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
      <motion.span
        key={years}
        initial={shouldReduceMotion ? {} : { y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        {years}+ years building for developers
      </motion.span>
    </motion.div>
  );
}

export function StoryTimeline(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredMilestone, setHoveredMilestone] = React.useState<number | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Scroll-based progress animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%'],
  });

  // Transform scroll progress to timeline height
  const timelineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={1200} />
      <div className="container max-w-6xl py-20 relative z-10">
        <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={350} />
        <BlurFade delay={0.05}>
          <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            The road so far
          </h2>
          <div className="mb-12">
            <YearsExperienceMagic />
          </div>
        </BlurFade>
        <div ref={containerRef} className="relative">
          {/* Background timeline track */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border/50" />

          {/* Animated timeline progress fill (scroll-driven) */}
          <motion.div
            className="absolute left-4 top-0 w-0.5 bg-gradient-to-b from-primary via-primary to-primary/50 origin-top"
            style={shouldReduceMotion ? undefined : { height: timelineHeight }}
          />

          {/* Glowing dot at progress tip */}
          {!shouldReduceMotion && (
            <motion.div
              className="absolute left-[11px] w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50"
              style={{
                top: timelineHeight,
                transform: 'translateY(-50%)',
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-primary"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          )}
          <div className="space-y-12">
            {DATA.map((milestone, index) => {
              const isHovered = hoveredMilestone === index;
              return (
                <BlurFade key={index} delay={0.1 + index * 0.05}>
                  <motion.div
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={shouldReduceMotion ? undefined : { duration: 0.3, delay: index * 0.05, ease: [0.32, 0.72, 0, 1] }}
                    className="relative pl-14 cursor-default"
                    onMouseEnter={() => setHoveredMilestone(index)}
                    onMouseLeave={() => setHoveredMilestone(null)}
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className={cn(
                        "absolute left-0 top-1 flex size-8 items-center justify-center rounded-full border bg-background shadow-sm transition-all duration-200",
                        isHovered && "border-primary shadow-lg shadow-primary/20"
                      )}
                      animate={shouldReduceMotion ? undefined : {
                        scale: isHovered ? 1.2 : 1,
                      }}
                      transition={{ type: 'spring', duration: 0.2, bounce: 0.3 }}
                    >
                      <motion.div
                        className={cn(
                          "size-2.5 rounded-full bg-primary transition-all duration-200",
                          isHovered && "size-3"
                        )}
                        animate={shouldReduceMotion ? undefined : {
                          scale: isHovered ? [1, 1.3, 1] : 1,
                        }}
                        transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
                      />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      className={cn(
                        "relative overflow-hidden rounded-lg p-4 -ml-4 transition-colors duration-200",
                        isHovered && "bg-card/50 backdrop-blur-sm"
                      )}
                      animate={shouldReduceMotion ? undefined : {
                        x: isHovered ? 8 : 0,
                      }}
                      transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                    >
                      {isHovered && (
                        <BorderBeam
                          size={140}
                          duration={8}
                          borderWidth={1.5}
                          colorFrom="hsl(var(--primary))"
                          colorTo="hsl(var(--primary)/0)"
                        />
                      )}
                      <div className={cn(
                        "relative z-10 text-sm font-bold transition-colors duration-150",
                        isHovered ? "text-primary" : "text-muted-foreground"
                      )}>
                        {milestone.date}
                      </div>
                      <h3 className={cn(
                        "relative z-10 mb-2 text-xl font-medium transition-colors duration-150",
                        isHovered && "text-primary"
                      )}>
                        {milestone.title}
                      </h3>
                      <p className={cn(
                        "relative z-10 leading-relaxed transition-colors duration-150",
                        isHovered ? "text-foreground" : "text-muted-foreground"
                      )}>
                        {milestone.description}
                      </p>
                    </motion.div>
                  </motion.div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </div>
    </GridSection>
  );
}
