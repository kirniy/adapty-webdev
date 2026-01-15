'use client'

import { ButtonLink } from '@/components/elements/Button'
import { Container } from '@/components/elements/Container'
import { FadeIn } from '@/components/effects/FadeIn'
import { MagneticButton } from '@/components/effects/MagneticButton'
import { TextReveal } from '@/components/effects/TextReveal'
import { cn } from '@/lib/cn'
import { content } from '@/lib/content'
import { motion } from 'motion/react'

/**
 * Hero Minimal Editorial
 *
 * Design decisions:
 * - Typography-only: No demo/screenshot for maximum focus on message
 * - Oversized display typography for dramatic impact
 * - Split headline with gradient accent for visual interest
 * - Centered layout with generous whitespace
 * - Trust metrics as horizontal bar for credibility without distraction
 * - Subtle animated elements add life without overwhelming
 */
export function HeroMinimalText() {
  const { hero } = content

  const trustMetrics = [
    { value: '8,000+', label: 'apps worldwide' },
    { value: '$2B+', label: 'revenue tracked' },
    { value: '4.9', label: 'App Store rating' },
    { value: 'SOC 2', label: 'compliant' },
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Main Content */}
      <Container className="relative z-10 pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-36">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Animated accent line */}
          <motion.div
            className="w-px h-16 bg-gradient-to-b from-transparent via-adapty-500 to-transparent mb-8"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Eyebrow */}
          <FadeIn delay={0.1}>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-olive-600 mb-8 tracking-wide">
              <span className="w-8 h-px bg-olive-300" />
              {hero.eyebrow}
              <span className="w-8 h-px bg-olive-300" />
            </span>
          </FadeIn>

          {/* Large Display Headline */}
          <h1 className="text-5xl/[1.05] sm:text-7xl/[1.05] lg:text-8xl/[1.05] font-medium tracking-tight text-olive-950">
            <TextReveal delay={0.15}>{hero.headline}</TextReveal>
            <br />
            <span className="bg-gradient-to-r from-adapty-600 via-adapty-500 to-adapty-600 bg-clip-text text-transparent">
              <TextReveal delay={0.35}>{hero.headlineAccent}</TextReveal>
            </span>
          </h1>

          {/* Description - Larger and more prominent */}
          <FadeIn delay={0.5}>
            <p className="mt-8 text-xl sm:text-2xl text-olive-600 max-w-3xl leading-relaxed">
              {hero.description}
            </p>
          </FadeIn>

          {/* CTAs - Centered with more prominence */}
          <FadeIn delay={0.6}>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <MagneticButton>
                <ButtonLink href="#" size="lg" variant="primary" shimmer className="text-base px-8">
                  {hero.cta.primary}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </ButtonLink>
              </MagneticButton>
              <ButtonLink href="#" size="lg" variant="secondary" className="text-base px-8">
                {hero.cta.secondary}
              </ButtonLink>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* Trust Metrics Bar - Full width, at bottom */}
      <FadeIn delay={0.8}>
        <div className="border-t border-olive-200/50 bg-olive-50/50">
          <Container>
            <div className="py-8 flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-12">
              <p className="text-sm font-medium text-olive-500 whitespace-nowrap">
                Trusted by leading apps
              </p>
              <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                {trustMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    className="flex items-baseline gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  >
                    <span className="text-xl font-semibold text-olive-950">{metric.value}</span>
                    <span className="text-sm text-olive-500">{metric.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </FadeIn>

      {/* Subtle background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Large gradient orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-adapty-100/20 rounded-full blur-3xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />

        {/* Subtle grid pattern */}
        <div
          className={cn(
            'absolute inset-0 opacity-[0.015]',
            'bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]',
            'bg-[size:60px_60px]'
          )}
        />
      </div>
    </section>
  )
}
