'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, SparklesIcon } from 'lucide-react';
import { motion, useReducedMotion, useMotionValue, useSpring } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';

// Magnetic button that follows cursor (interaction-driven, not continuous)
function MagneticButton({
  href,
  variant = 'default',
  children,
  className,
}: {
  href: string;
  variant?: 'default' | 'outline';
  children: React.ReactNode;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || shouldReduceMotion) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    // Magnetic pull - subtle effect
    x.set(distanceX * 0.2);
    y.set(distanceY * 0.2);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={shouldReduceMotion ? undefined : { x: springX, y: springY }}
    >
      {/* Glow effect on hover */}
      {variant === 'default' && (
        <motion.div
          className="absolute inset-0 -z-10 rounded-xl bg-primary/20 blur-xl"
          animate={{
            opacity: isHovered ? 0.6 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
        />
      )}

      <Link
        href={href}
        className={cn(
          buttonVariants({ variant, size: 'lg' }),
          'relative overflow-hidden rounded-xl px-8 py-6 text-base font-medium transition-all duration-200',
          variant === 'default' && 'shadow-lg hover:shadow-xl',
          className
        )}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
          <motion.span
            animate={shouldReduceMotion ? undefined : { x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.15, ease: [0.165, 0.84, 0.44, 1] }}
          >
            <ArrowRightIcon className="size-4" />
          </motion.span>
        </span>
      </Link>
    </motion.div>
  );
}

// Trust indicator - simple hover effect
function TrustIndicator({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <div className="flex items-center justify-center size-5 rounded-full bg-primary/10">
        <div className="size-2 rounded-full bg-primary" />
      </div>
      <span>{children}</span>
    </div>
  );
}

export function CTABeam(): React.JSX.Element {
  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={600} />

      <div className="container py-20 lg:py-32 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <BlurFade className="flex justify-center mb-8">
            <Badge
              variant="outline"
              className="rounded-full px-5 py-2 text-sm font-medium"
            >
              <SparklesIcon className="mr-2 size-4 text-primary" />
              Start your growth journey
            </Badge>
          </BlurFade>

          {/* Headline */}
          <BlurFade delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Ready to{' '}
              <span className="text-primary">transform</span>
              <br />
              your subscription business?
            </h2>
          </BlurFade>

          {/* Description */}
          <BlurFade delay={0.2}>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
              Join thousands of apps that have doubled their revenue with Adapty&apos;s
              powerful paywall optimization and analytics platform.
            </p>
          </BlurFade>

          {/* CTA Buttons - magnetic effect is interaction-driven */}
          <BlurFade delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <MagneticButton href="https://app.adapty.io/registration" variant="default">
                Start free trial
              </MagneticButton>
              <MagneticButton href="/schedule-demo" variant="outline">
                Book a demo
              </MagneticButton>
            </div>
          </BlurFade>

          {/* Trust indicators - static, no animation */}
          <BlurFade delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <TrustIndicator>No credit card required</TrustIndicator>
              <TrustIndicator>Free tier available</TrustIndicator>
              <TrustIndicator>Setup in minutes</TrustIndicator>
            </div>
          </BlurFade>
        </div>
      </div>
    </GridSection>
  );
}
