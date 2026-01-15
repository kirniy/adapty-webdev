'use client'

import { ButtonLink } from '@/components/elements/Button'
import { Container } from '@/components/elements/Container'
import { FadeIn } from '@/components/effects/FadeIn'
import { MagneticButton } from '@/components/effects/MagneticButton'
import { TextReveal } from '@/components/effects/TextReveal'
import { cn } from '@/lib/cn'
import { content } from '@/lib/content'
import { motion } from 'motion/react'
import Image from 'next/image'

/**
 * Hero Immersive Background
 *
 * Design decisions:
 * - Full-bleed demo screenshot as background creates immersive feel
 * - Dark gradient overlay ensures text readability
 * - Centered content floats over the visual
 * - Larger padding creates breathing room
 * - Glass-effect cards for CTAs add depth
 * - Different from split layouts - this is a full-screen showcase
 */
export function HeroWallpaperBg() {
  const { hero } = content

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Full-bleed Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-overview.webp"
          alt="Adapty dashboard background"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-olive-950/90 via-olive-950/80 to-olive-950/95" />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-20 mix-blend-soft-light bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')]" />
      </div>

      {/* Content */}
      <Container className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow Badge - Glass effect */}
          <FadeIn delay={0}>
            <span
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8',
                'bg-white/10 backdrop-blur-md border border-white/20',
                'text-sm font-medium text-white/90'
              )}
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-adapty-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {hero.eyebrow}
            </span>
          </FadeIn>

          {/* Headline - Large and impactful */}
          <h1 className="text-5xl/[1.1] sm:text-6xl/[1.1] lg:text-7xl/[1.1] font-medium tracking-tight text-white">
            <TextReveal delay={0.1}>{hero.headline}</TextReveal>
            <br />
            <span className="text-adapty-400">
              <TextReveal delay={0.3}>{hero.headlineAccent}</TextReveal>
            </span>
          </h1>

          {/* Description */}
          <FadeIn delay={0.45}>
            <p className="mt-8 text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              {hero.description}
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.55}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <MagneticButton>
                <ButtonLink
                  href="#"
                  size="lg"
                  className={cn(
                    'bg-white text-olive-950 hover:bg-white/90',
                    'shadow-lg shadow-black/20',
                    'px-8'
                  )}
                >
                  {hero.cta.primary}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </ButtonLink>
              </MagneticButton>
              <ButtonLink
                href="#"
                size="lg"
                className={cn(
                  'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20',
                  'border border-white/20',
                  'px-8'
                )}
              >
                {hero.cta.secondary}
              </ButtonLink>
            </div>
          </FadeIn>

          {/* Trust metrics */}
          <FadeIn delay={0.7}>
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">8,000+</span>
                  <span className="text-white/50">apps worldwide</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">$2B+</span>
                  <span className="text-white/50">revenue tracked</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">4.9</span>
                  <span className="text-white/50">App Store rating</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-white/60 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
