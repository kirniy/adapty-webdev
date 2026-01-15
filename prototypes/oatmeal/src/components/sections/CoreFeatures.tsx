'use client'

import { Container } from '@/components/elements/Container'
import { Eyebrow } from '@/components/elements/Eyebrow'
import { Screenshot } from '@/components/elements/Screenshot'
import { Section, SectionHeader } from '@/components/elements/Section'
import { Subheading } from '@/components/elements/Subheading'
import { Text } from '@/components/elements/Text'
import { FadeIn } from '@/components/effects/FadeIn'
import { content } from '@/lib/content'
import { useCoreFeaturesVariant } from '@/lib/debug-context'
import { cn } from '@/lib/cn'
import Image from 'next/image'

// Variant A: Colorful (current implementation with saturated wallpapers)
function CoreFeaturesColorful() {
  const { features } = content

  return (
    <Section>
      <Container>
        <SectionHeader className="mb-16">
          <FadeIn>
            <Eyebrow>Features</Eyebrow>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Subheading className="mt-2">
              Everything you need to grow subscription revenue
            </Subheading>
          </FadeIn>
        </SectionHeader>

        <div className="space-y-24 sm:space-y-32">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* Text */}
              <FadeIn delay={0.1} direction={index % 2 === 0 ? 'right' : 'left'}>
                <div className="max-w-lg">
                  <Eyebrow>{feature.eyebrow}</Eyebrow>
                  <h3 className="mt-2 text-3xl/10 sm:text-4xl/12 font-display tracking-tight text-olive-950">
                    {feature.title}
                  </h3>
                  <Text size="lg" className="mt-4">
                    {feature.description}
                  </Text>
                </div>
              </FadeIn>

              {/* Screenshot */}
              <FadeIn delay={0.2} direction={index % 2 === 0 ? 'left' : 'right'}>
                <Screenshot
                  wallpaper={feature.wallpaper}
                  placement={index % 2 === 0 ? 'bottom-right' : 'bottom-left'}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="w-full"
                  />
                </Screenshot>
              </FadeIn>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

// Variant B: Muted (subdued colors, editorial feel - all use olive tones)
function CoreFeaturesMuted() {
  const { features } = content

  return (
    <Section>
      <Container>
        <SectionHeader className="mb-16">
          <FadeIn>
            <Eyebrow>Features</Eyebrow>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Subheading className="mt-2">
              Everything you need to grow subscription revenue
            </Subheading>
          </FadeIn>
        </SectionHeader>

        <div className="space-y-24 sm:space-y-32">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* Text */}
              <FadeIn delay={0.1} direction={index % 2 === 0 ? 'right' : 'left'}>
                <div className="max-w-lg">
                  <Eyebrow>{feature.eyebrow}</Eyebrow>
                  <h3 className="mt-2 text-3xl/10 sm:text-4xl/12 font-display tracking-tight text-olive-950">
                    {feature.title}
                  </h3>
                  <Text size="lg" className="mt-4">
                    {feature.description}
                  </Text>
                </div>
              </FadeIn>

              {/* Screenshot - always olive for muted, calmer feel */}
              <FadeIn delay={0.2} direction={index % 2 === 0 ? 'left' : 'right'}>
                <Screenshot
                  wallpaper="olive"
                  placement={index % 2 === 0 ? 'bottom-right' : 'bottom-left'}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="w-full"
                  />
                </Screenshot>
              </FadeIn>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

// Variant C: Monochrome (grayscale backgrounds, clean and minimal)
function CoreFeaturesMonochrome() {
  const { features } = content

  return (
    <Section>
      <Container>
        <SectionHeader className="mb-16">
          <FadeIn>
            <Eyebrow>Features</Eyebrow>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Subheading className="mt-2">
              Everything you need to grow subscription revenue
            </Subheading>
          </FadeIn>
        </SectionHeader>

        <div className="space-y-24 sm:space-y-32">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* Text */}
              <FadeIn delay={0.1} direction={index % 2 === 0 ? 'right' : 'left'}>
                <div className="max-w-lg">
                  <Eyebrow>{feature.eyebrow}</Eyebrow>
                  <h3 className="mt-2 text-3xl/10 sm:text-4xl/12 font-display tracking-tight text-olive-950">
                    {feature.title}
                  </h3>
                  <Text size="lg" className="mt-4">
                    {feature.description}
                  </Text>
                </div>
              </FadeIn>

              {/* Screenshot - monochrome grayscale container */}
              <FadeIn delay={0.2} direction={index % 2 === 0 ? 'left' : 'right'}>
                <div
                  className={cn(
                    'relative overflow-hidden rounded-xl',
                    'bg-gradient-to-b from-gray-100 to-gray-200',
                    'ring-1 ring-gray-200/50'
                  )}
                >
                  {/* Subtle noise texture */}
                  <div className="noise-overlay opacity-30" />
                  <div
                    className={cn(
                      'relative [--padding:min(10%,4rem)]',
                      index % 2 === 0
                        ? 'pt-[var(--padding)] pl-[var(--padding)]'
                        : 'pt-[var(--padding)] pr-[var(--padding)]'
                    )}
                  >
                    <div
                      className={cn(
                        '*:relative *:ring-1 *:ring-black/5 *:shadow-xl',
                        index % 2 === 0 ? '*:rounded-tl-lg' : '*:rounded-tr-lg'
                      )}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={600}
                        height={400}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

// Main component that switches based on debug context
export function CoreFeatures() {
  const variant = useCoreFeaturesVariant()

  switch (variant) {
    case 'muted':
      return <CoreFeaturesMuted />
    case 'monochrome':
      return <CoreFeaturesMonochrome />
    case 'colorful':
    default:
      return <CoreFeaturesColorful />
  }
}
