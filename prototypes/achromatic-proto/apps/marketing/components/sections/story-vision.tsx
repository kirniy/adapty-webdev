'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'motion/react';

import { BorderBeam } from '~/components/fragments/border-beam';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { BlurFade } from '~/components/fragments/blur-fade';
import { Card, CardContent } from '@workspace/ui/components/card';
import { Spotlight } from '~/components/fragments/spotlight';
import { cn } from '@workspace/ui/lib/utils';

// Magic animation: Apps empowered counter
function AppsEmpoweredMagic() {
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setCount(15000);
      return;
    }
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 15000) return 15000;
        return prev + 500;
      });
    }, 50);
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
        key={count}
        initial={shouldReduceMotion ? {} : { y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        {count.toLocaleString()}+ apps empowered
      </motion.span>
    </motion.div>
  );
}

export function StoryVision(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [isQuoteHovered, setIsQuoteHovered] = React.useState(false);
  const [hoveredParagraph, setHoveredParagraph] = React.useState<number | null>(null);

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={600} />
      <div className="container max-w-6xl py-20 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <BlurFade delay={0.05}>
              <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Our vision
              </h2>
              <div className="mb-6">
                <AppsEmpoweredMagic />
              </div>
            </BlurFade>
            <BlurFade delay={0.1}>
              <motion.div
                onMouseEnter={() => setIsQuoteHovered(true)}
                onMouseLeave={() => setIsQuoteHovered(false)}
                animate={shouldReduceMotion ? undefined : {
                  scale: isQuoteHovered ? 1.01 : 1,
                }}
                transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
              >
                <Card className={cn(
                  "relative overflow-hidden transition-all duration-200",
                  isQuoteHovered && "border-primary/50 shadow-lg"
                )}>
                  {isQuoteHovered && (
                    <BorderBeam
                      size={150}
                      duration={8}
                      borderWidth={1.5}
                      colorFrom="hsl(var(--primary))"
                      colorTo="hsl(var(--primary)/0)"
                    />
                  )}
                  <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={300} />
                  <CardContent className="p-8 relative z-10">
                    <motion.p
                      className={cn(
                        "text-2xl font-medium leading-relaxed md:text-3xl transition-colors duration-150",
                        isQuoteHovered && "text-primary"
                      )}
                    >
                      "Subscription monetization shouldn't be a barrier - it should be an accelerator for every app developer."
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            </BlurFade>
          </div>
          <div className="space-y-6 text-base text-muted-foreground md:text-lg">
            {[
              "Most app developers struggle with subscriptions - the technical complexity, the analytics overhead, the constant need for A/B testing. We believe every developer deserves access to the same tools that power the top 1% of apps.",
              "By combining powerful SDKs with no-code tools, real-time analytics, and AI-powered optimization, we've created a platform that lets you focus on building great apps while we handle the monetization complexity."
            ].map((paragraph, index) => (
              <BlurFade key={index} delay={0.15 + index * 0.05}>
                <motion.p
                  className={cn(
                    "cursor-default transition-colors duration-150",
                    hoveredParagraph === index && "text-foreground"
                  )}
                  onMouseEnter={() => setHoveredParagraph(index)}
                  onMouseLeave={() => setHoveredParagraph(null)}
                  animate={shouldReduceMotion ? undefined : {
                    x: hoveredParagraph === index ? 4 : 0,
                  }}
                  transition={{ type: 'spring', duration: 0.2, bounce: 0 }}
                >
                  {paragraph}
                </motion.p>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </GridSection>
  );
}
