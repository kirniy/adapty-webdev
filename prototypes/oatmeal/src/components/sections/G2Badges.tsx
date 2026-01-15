'use client'

import { Container } from '@/components/elements/Container'
import { Eyebrow } from '@/components/elements/Eyebrow'
import { Section } from '@/components/elements/Section'
import { FadeIn } from '@/components/effects/FadeIn'
import { content } from '@/lib/content'
import Image from 'next/image'

export function G2Badges() {
  const { g2Badges } = content

  return (
    <Section className="py-12 lg:py-16">
      <Container>
        <FadeIn className="text-center mb-8">
          <Eyebrow>Recognized Excellence</Eyebrow>
        </FadeIn>

        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
          {g2Badges.map((badge, index) => (
            <FadeIn key={badge.name} delay={index * 0.1}>
              <div className="relative w-20 h-24 lg:w-24 lg:h-28">
                <Image
                  src={badge.src}
                  alt={badge.name}
                  fill
                  className="object-contain"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}
