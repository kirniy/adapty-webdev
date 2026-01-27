'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { HeartIcon, RocketIcon, UsersIcon, SparklesIcon } from 'lucide-react';

import { BorderBeam } from '~/components/fragments/border-beam';
import { FlickeringGrid } from '~/components/fragments/flickering-grid';
import { GridSection } from '~/components/fragments/grid-section';
import { BlurFade } from '~/components/fragments/blur-fade';
import { Card, CardContent } from '@workspace/ui/components/card';
import { Spotlight } from '~/components/fragments/spotlight';
import { cn } from '@workspace/ui/lib/utils';

const VALUES = [
  { icon: HeartIcon, title: 'Developer-first', description: 'Everything we build starts with developer experience in mind.' },
  { icon: RocketIcon, title: 'Ship fast', description: 'We release updates every two weeks to stay ahead of the market.' },
  { icon: UsersIcon, title: 'Customer success', description: 'Your growth is our growth - we succeed when you succeed.' },
  { icon: SparklesIcon, title: 'Innovation', description: 'We invest heavily in R&D to bring you the latest in AI and analytics.' },
];

// Magic animation: Core values badge
function CoreValuesMagic() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.15 }}
    >
      <motion.div
        animate={shouldReduceMotion ? {} : {
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <SparklesIcon className="size-3.5" />
      </motion.div>
      <span>Our core values</span>
    </motion.div>
  );
}

export function StoryValues(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredValue, setHoveredValue] = React.useState<number | null>(null);

  return (
    <GridSection>
      <div className="container relative max-w-5xl overflow-hidden py-24 md:py-32">
        <BlurFade delay={0.05}>
          <div className="flex justify-center mb-4">
            <CoreValuesMagic />
          </div>
          <p className="mx-auto text-center text-2xl font-semibold sm:text-3xl md:text-4xl relative z-10">
            "We believe every developer deserves access to world-class subscription tools."
          </p>
        </BlurFade>

        {/* Values grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {VALUES.map((value, index) => {
            const Icon = value.icon;
            const isHovered = hoveredValue === index;
            return (
              <BlurFade key={value.title} delay={0.1 + index * 0.05}>
                <motion.div
                  onMouseEnter={() => setHoveredValue(index)}
                  onMouseLeave={() => setHoveredValue(null)}
                  animate={shouldReduceMotion ? undefined : {
                    y: isHovered ? -4 : 0,
                    scale: isHovered ? 1.02 : 1,
                  }}
                  transition={{ type: 'spring', duration: 0.25, bounce: 0 }}
                >
                  <Card className={cn(
                    "h-full text-center relative overflow-hidden transition-all duration-200",
                    isHovered && "border-primary/50 "
                  )}>
                    {isHovered && (
                      <BorderBeam
                        size={100}
                        duration={6}
                        borderWidth={1.5}
                        colorFrom="hsl(var(--primary))"
                        colorTo="hsl(var(--primary)/0)"
                      />
                    )}
                    <Spotlight className="from-primary/15 via-primary/5 to-transparent" size={150} />
                    <CardContent className="p-6 relative z-10">
                      <motion.div
                        className="flex size-10 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-3"
                        animate={shouldReduceMotion ? undefined : {
                          scale: isHovered ? 1.15 : 1,
                          rotate: isHovered ? 8 : 0,
                        }}
                        transition={{ type: 'spring', duration: 0.2, bounce: 0.3 }}
                      >
                        <Icon className="size-5 text-primary" />
                      </motion.div>
                      <h3 className={cn(
                        "font-semibold mb-2 transition-colors duration-150",
                        isHovered && "text-primary"
                      )}>
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>

        <FlickeringGrid
          className="pointer-events-none absolute inset-0 z-0 mask-[radial-gradient(450px_circle_at_center,var(--background),transparent)]"
          squareSize={4}
          gridGap={6}
          color="gray"
          maxOpacity={0.12}
          height={600}
          width={1200}
        />
      </div>
    </GridSection>
  );
}
