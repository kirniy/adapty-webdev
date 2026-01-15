'use client'

import { ButtonLink } from '@/components/elements/Button'
import { Container } from '@/components/elements/Container'
import { Eyebrow } from '@/components/elements/Eyebrow'
import { FadeIn } from '@/components/effects/FadeIn'
import { MagneticButton } from '@/components/effects/MagneticButton'
import { TextReveal } from '@/components/effects/TextReveal'
import { cn } from '@/lib/cn'
import { content } from '@/lib/content'
import { motion } from 'motion/react'
import Image from 'next/image'

/**
 * Hero Two-Column Split
 *
 * Design decisions:
 * - Equal 50/50 split creates balanced visual weight
 * - Text on left (natural reading direction for LTR languages)
 * - Demo with browser chrome for realism
 * - Full viewport height for immersive first impression
 * - Inline trust metrics for immediate credibility
 * - Decorative shapes add depth without distraction
 */
export function HeroSplitLeft() {
  const { hero } = content

  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-80px)]">
      <Container className="relative z-10 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center lg:min-h-[calc(100vh-80px)]">
          {/* Left Column: Text Content */}
          <div className="flex flex-col max-w-xl">
            <FadeIn delay={0}>
              <Eyebrow className="mb-6">{hero.eyebrow}</Eyebrow>
            </FadeIn>

            <h1 className="text-4xl/[1.1] sm:text-5xl/[1.1] lg:text-6xl/[1.1] font-medium tracking-tight text-olive-950">
              <TextReveal delay={0.1}>{hero.headline}</TextReveal>
              <br />
              <span className="text-adapty-600">
                <TextReveal delay={0.25}>{hero.headlineAccent}</TextReveal>
              </span>
            </h1>

            <FadeIn delay={0.35}>
              <p className="mt-6 text-lg/7 text-olive-600 max-w-lg">
                {hero.description}
              </p>
            </FadeIn>

            <FadeIn delay={0.45}>
              <div className="mt-8 flex flex-wrap gap-4">
                <MagneticButton>
                  <ButtonLink href="#" size="lg" variant="primary" shimmer>
                    {hero.cta.primary}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </ButtonLink>
                </MagneticButton>
                <ButtonLink href="#" size="lg" variant="secondary">
                  {hero.cta.secondary}
                </ButtonLink>
              </div>
            </FadeIn>

            {/* Inline Trust Metrics */}
            <FadeIn delay={0.55}>
              <div className="mt-12 pt-8 border-t border-olive-200/60">
                <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-olive-950">8,000+</span>
                    <span className="text-olive-500">apps worldwide</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-olive-950">$2B+</span>
                    <span className="text-olive-500">revenue tracked</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-olive-950">4.9</span>
                    <span className="text-olive-500">App Store rating</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Demo with Browser Chrome */}
          <FadeIn delay={0.3} direction="left">
            <div className="relative lg:ml-auto">
              {/* Decorative background element */}
              <motion.div
                className={cn(
                  'absolute -inset-4 rounded-3xl',
                  'bg-gradient-to-br from-adapty-100 via-adapty-50 to-olive-100',
                  'opacity-60'
                )}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.6 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Floating accent shapes */}
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-adapty-500/10"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6, type: 'spring' }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-olive-500/10"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6, type: 'spring' }}
              />

              {/* Main Demo Container */}
              <motion.div
                className={cn(
                  'relative rounded-2xl overflow-hidden',
                  'ring-1 ring-olive-200/50',
                  'shadow-2xl shadow-olive-900/10'
                )}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Browser Chrome */}
                <div className="bg-olive-100/80 backdrop-blur-sm px-4 py-3 border-b border-olive-200/50">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-olive-300" />
                      <div className="w-3 h-3 rounded-full bg-olive-300" />
                      <div className="w-3 h-3 rounded-full bg-olive-300" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-white/60 rounded-md px-3 py-1.5 text-xs text-olive-500 text-center">
                        app.adapty.io/dashboard
                      </div>
                    </div>
                  </div>
                </div>

                {/* Screenshot */}
                <Image
                  src="/images/hero-overview.webp"
                  alt="Adapty dashboard overview"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-adapty-100/40 rounded-full blur-3xl translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-olive-100/50 rounded-full blur-3xl -translate-x-1/2" />
      </div>
    </section>
  )
}
