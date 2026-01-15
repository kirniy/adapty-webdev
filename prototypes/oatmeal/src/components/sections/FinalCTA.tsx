'use client'

import { Container } from '@/components/elements/Container'
import { EmailForm } from '@/components/elements/EmailForm'
import { Eyebrow } from '@/components/elements/Eyebrow'
import { Section } from '@/components/elements/Section'
import { FadeIn } from '@/components/effects/FadeIn'
import { TextReveal } from '@/components/effects/TextReveal'
import { content } from '@/lib/content'

export function FinalCTA() {
  const { finalCta } = content

  return (
    <Section className="bg-olive-950 text-white">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <Eyebrow className="text-olive-400">{finalCta.eyebrow}</Eyebrow>
          </FadeIn>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display tracking-tight text-white">
            <TextReveal>
              {finalCta.headline}
            </TextReveal>
          </h2>

          <FadeIn delay={0.3}>
            <p className="mt-6 text-olive-300 text-lg/7 max-w-lg mx-auto">
              {finalCta.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-10 max-w-md mx-auto">
              <EmailForm
                placeholder="Enter your work email"
                buttonText={finalCta.cta}
                className="border-olive-700 focus-within:border-olive-500"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="mt-4 text-sm text-olive-500">
              Free 14-day trial. No credit card required.
            </p>
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
