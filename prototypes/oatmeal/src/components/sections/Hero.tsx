'use client'

import { Button, ButtonLink } from '@/components/elements/Button'
import { Container } from '@/components/elements/Container'
import { FadeIn } from '@/components/effects/FadeIn'
import { MagneticButton } from '@/components/effects/MagneticButton'
import { ScrambleText } from '@/components/effects/ScrambleText'
import { TextReveal } from '@/components/effects/TextReveal'
import { content } from '@/lib/content'
import Image from 'next/image'

export function Hero() {
  const { hero } = content

  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="max-w-xl">
            {/* Eyebrow Badge */}
            <FadeIn delay={0}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-olive-950/5 text-sm font-medium text-olive-700 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-olive-500" />
                <ScrambleText text={hero.eyebrow} autoScramble delay={500} />
              </span>
            </FadeIn>

            {/* Headline */}
            <h1 className="text-5xl/12 sm:text-[4rem]/[1.1] font-display tracking-tight text-olive-950 mb-6">
              <TextReveal delay={0.1}>{hero.headline}</TextReveal>
              <br />
              <span className="italic text-olive-600">
                <TextReveal delay={0.3}>{hero.headlineAccent}</TextReveal>
              </span>
            </h1>

            {/* Description */}
            <FadeIn delay={0.4}>
              <p className="text-lg/8 text-olive-700 mb-8 max-w-md">
                {hero.description}
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.5}>
              <div className="flex flex-wrap gap-4">
                <MagneticButton>
                  <ButtonLink
                    href="#"
                    size="lg"
                    variant="primary"
                    shimmer
                  >
                    {hero.cta.primary}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </ButtonLink>
                </MagneticButton>
                <ButtonLink
                  href="#"
                  size="lg"
                  variant="secondary"
                >
                  {hero.cta.secondary}
                </ButtonLink>
              </div>
            </FadeIn>
          </div>

          {/* Demo Image */}
          <FadeIn delay={0.3} direction="left">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-olive-200 to-olive-300 p-4 sm:p-8 shadow-2xl">
                <div className="noise-overlay opacity-20" />
                <Image
                  src={hero.image}
                  alt="Adapty paywall demo"
                  width={600}
                  height={400}
                  className="relative rounded-xl shadow-lg ring-1 ring-black/5"
                  priority
                />
              </div>
              {/* Decorative blob */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-olive-300/30 rounded-full blur-3xl" />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
