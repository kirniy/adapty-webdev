'use client'

import { ButtonLink } from '@/components/elements/Button'
import { Container } from '@/components/elements/Container'
import { FadeIn } from '@/components/effects/FadeIn'
import { MagneticButton } from '@/components/effects/MagneticButton'
import { ScrambleText } from '@/components/effects/ScrambleText'
import { TextReveal } from '@/components/effects/TextReveal'
import { FlickeringGrid } from '@/components/effects/FlickeringGrid'
import { cn } from '@/lib/cn'
import { content } from '@/lib/content'
import Image from 'next/image'

export function HeroCenteredDemo() {
  const { hero } = content

  return (
    <section className="relative overflow-hidden">
      {/* Background Flickering Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-30">
        <FlickeringGrid
          squareSize={4}
          gridGap={8}
          color="rgb(88, 101, 74)"
          maxOpacity={0.15}
          flickerChance={0.1}
          height={800}
          width={1600}
          className="w-full h-full mask-image-gradient-b"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      {/* Hero Content - Centered */}
      <Container className="relative z-10 pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow Badge */}
          <FadeIn delay={0}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-olive-950/5 text-sm font-medium text-olive-700 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-adapty-500 animate-pulse" />
              <ScrambleText text={hero.eyebrow} autoScramble delay={500} />
            </span>
          </FadeIn>

          {/* Headline */}
          <h1 className="text-5xl/[1.1] sm:text-6xl/[1.1] lg:text-7xl/[1.1] font-medium tracking-tight text-olive-950 mb-6">
            <TextReveal delay={0.1}>{hero.headline}</TextReveal>
            <br />
            <span className="text-adapty-600">
              <TextReveal delay={0.3}>{hero.headlineAccent}</TextReveal>
            </span>
          </h1>

          {/* Description */}
          <FadeIn delay={0.4}>
            <p className="text-lg sm:text-xl text-olive-600 mb-8 max-w-2xl">
              {hero.description}
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.5}>
            <div className="flex flex-wrap justify-center gap-4">
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
        </div>
      </Container>

      {/* Full-Width Demo Screenshot with Wallpaper */}
      <FadeIn delay={0.6} className="relative">
        <div className="px-4 sm:px-6 lg:px-8 pb-8">
          <div
            className={cn(
              'relative mx-auto max-w-7xl rounded-2xl overflow-hidden',
              'bg-gradient-to-br from-adapty-600 via-adapty-700 to-adapty-900',
              'p-2 sm:p-3'
            )}
          >
            {/* Noise texture overlay */}
            <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')]" />

            {/* Gradient orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-adapty-400/20 rounded-full blur-3xl" />

            {/* Screenshot */}
            <div className="relative rounded-xl overflow-hidden ring-1 ring-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20 mix-blend-overlay" />
              <Image
                src="/images/hero-overview.webp"
                alt="Adapty dashboard overview"
                width={1400}
                height={900}
                className="w-full h-auto transition-transform duration-1000 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
