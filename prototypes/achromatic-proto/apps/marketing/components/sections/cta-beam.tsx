'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, SparklesIcon, ZapIcon, RocketIcon } from 'lucide-react';
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'motion/react';

import { Badge } from '@workspace/ui/components/badge';
import { buttonVariants } from '@workspace/ui/components/button';
import { cn } from '@workspace/ui/lib/utils';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { SectionBackground } from '~/components/fragments/section-background';
import { BorderBeam } from '~/components/fragments/border-beam';

// Magnetic button that follows cursor
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
    // Magnetic pull - stronger when closer
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
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
      {/* Glow effect */}
      {variant === 'default' && (
        <motion.div
          className="absolute inset-0 -z-10 rounded-xl bg-primary/30 blur-xl"
          animate={{
            opacity: isHovered ? 0.8 : 0,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
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
        {/* Border beam for primary button */}
        {variant === 'default' && (
          <BorderBeam
            size={60}
            duration={6}
            borderWidth={2}
            colorFrom="#8b5cf6"
            colorTo="#3b82f6"
          />
        )}
        <span className="relative z-10 flex items-center gap-2">
          {children}
          <motion.span
            animate={shouldReduceMotion ? undefined : { x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] }}
          >
            <ArrowRightIcon className="size-4" />
          </motion.span>
        </span>
      </Link>
    </motion.div>
  );
}

// Animated beam line
function BeamLine({ delay, className }: { delay: number; className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      className={cn('absolute h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent', className)}
      initial={{ x: '-100%', opacity: 0 }}
      animate={{
        x: ['0%', '200%'],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: 'linear',
      }}
    />
  );
}

// Floating icon with pulse
function FloatingIcon({
  icon: Icon,
  className,
  delay,
}: {
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
  delay: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        'absolute flex items-center justify-center size-10 rounded-xl bg-card border shadow-lg',
        className
      )}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={shouldReduceMotion ? { opacity: 0.6 } : {
        opacity: [0.4, 0.8, 0.4],
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={shouldReduceMotion ? { duration: 0.3 } : {
        duration: 4,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    >
      <Icon className="size-5 text-primary" />
    </motion.div>
  );
}

// Trust indicator with animation
function TrustIndicator({ children, delay }: { children: React.ReactNode; delay: number }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="flex items-center gap-2 text-sm text-muted-foreground cursor-default"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={shouldReduceMotion ? undefined : { delay, duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex items-center justify-center size-5 rounded-full bg-primary/10"
        animate={shouldReduceMotion ? undefined : { scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.15 }}
      >
        <motion.div
          className="size-2 rounded-full bg-primary"
          animate={shouldReduceMotion ? undefined : { scale: isHovered ? 1.2 : 1 }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>
      <span className={cn('transition-colors duration-150', isHovered && 'text-foreground')}>
        {children}
      </span>
    </motion.div>
  );
}

export function CTABeam(): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <GridSection className="relative overflow-hidden">
      <SectionBackground height={600} />

      {/* Beam lines in background */}
      <div className="absolute inset-0 overflow-hidden">
        <BeamLine delay={0} className="top-1/4 w-full" />
        <BeamLine delay={1} className="top-1/2 w-full" />
        <BeamLine delay={2} className="top-3/4 w-full" />
      </div>

      {/* Floating icons */}
      <FloatingIcon icon={SparklesIcon} className="top-20 left-[10%]" delay={0} />
      <FloatingIcon icon={ZapIcon} className="top-32 right-[15%]" delay={0.5} />
      <FloatingIcon icon={RocketIcon} className="bottom-20 left-[20%]" delay={1} />

      <div className="container py-20 lg:py-32 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge with beam */}
          <BlurFade className="flex justify-center mb-8">
            <Badge
              variant="outline"
              className="relative overflow-hidden rounded-full px-5 py-2 text-sm font-medium"
            >
              <BorderBeam
                size={40}
                duration={4}
                borderWidth={1.5}
                colorFrom="#3b82f6"
                colorTo="#8b5cf6"
              />
              <span className="relative z-10 flex items-center gap-2">
                <motion.div
                  animate={shouldReduceMotion ? {} : {
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <SparklesIcon className="size-4 text-primary" />
                </motion.div>
                Start your growth journey
              </span>
            </Badge>
          </BlurFade>

          {/* Headline with gradient */}
          <BlurFade delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Ready to{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                  transform
                </span>
              </span>
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

          {/* CTA Buttons */}
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

          {/* Trust indicators */}
          <BlurFade delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <TrustIndicator delay={0.5}>No credit card required</TrustIndicator>
              <TrustIndicator delay={0.6}>Free tier available</TrustIndicator>
              <TrustIndicator delay={0.7}>Setup in minutes</TrustIndicator>
            </div>
          </BlurFade>
        </div>
      </div>

      {/* CSS for gradient animation */}
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </GridSection>
  );
}
