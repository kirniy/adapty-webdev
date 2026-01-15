'use client'

import { Container } from '@/components/elements/Container'
import { Eyebrow } from '@/components/elements/Eyebrow'
import { Heading } from '@/components/elements/Heading'
import { Section } from '@/components/elements/Section'
import { FadeIn } from '@/components/effects/FadeIn'
import { Marquee } from '@/components/effects/Marquee'
import { cn } from '@/lib/cn'
import { content } from '@/lib/content'
import Image from 'next/image'

function IntegrationLogo({ name, src }: { name: string; src: string }) {
  return (
    <div
      className={cn(
        'flex items-center justify-center px-8 py-4',
        'grayscale opacity-50 hover:grayscale-0 hover:opacity-100',
        'transition-all duration-300'
      )}
    >
      <Image
        src={src}
        alt={name}
        width={120}
        height={40}
        className="object-contain h-8 w-auto"
      />
    </div>
  )
}

export function Integrations() {
  const { integrations } = content

  return (
    <Section>
      <Container>
        <FadeIn className="text-center mb-12 lg:mb-16">
          <Eyebrow>Integrations</Eyebrow>
          <Heading as="h2" className="mt-2">
            Works with your stack
          </Heading>
          <p className="mt-4 text-olive-600 max-w-2xl mx-auto">
            Connect Adapty to your favorite analytics, attribution, and marketing tools.
          </p>
        </FadeIn>
      </Container>

      <Marquee speed="slow" pauseOnHover>
        {integrations.map((integration) => (
          <IntegrationLogo key={integration.name} {...integration} />
        ))}
      </Marquee>
    </Section>
  )
}
