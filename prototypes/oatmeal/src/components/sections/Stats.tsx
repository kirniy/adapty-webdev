'use client'

import { Container } from '@/components/elements/Container'
import { Section } from '@/components/elements/Section'
import { FadeIn } from '@/components/effects/FadeIn'
import { NumberTicker } from '@/components/effects/NumberTicker'
import { content } from '@/lib/content'
import { useStatsVariant } from '@/lib/debug-context'

// Variant A: Cards (current - dark background with grid)
function StatsCards() {
  const { stats } = content

  return (
    <Section className="bg-olive-950 text-white">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-display tracking-tight text-white">
                  <NumberTicker
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <p className="mt-2 text-sm sm:text-base text-olive-300">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}

// Variant B: Inline (horizontal bar with dividers - Stripe-style)
function StatsInline() {
  const { stats } = content

  return (
    <Section className="py-12 bg-white border-y border-olive-200">
      <Container>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 lg:gap-x-16">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.05}>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-olive-900">
                  <NumberTicker
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </span>
                <span className="text-sm text-olive-500">
                  {stat.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}

// Variant C: Minimal (large clean numbers, light background, maximum clarity)
function StatsMinimal() {
  const { stats } = content

  return (
    <Section className="py-20 bg-olive-50/50">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-olive-950">
                  <NumberTicker
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-olive-600 uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}

// Main component that switches based on debug context
export function Stats() {
  const variant = useStatsVariant()

  switch (variant) {
    case 'inline':
      return <StatsInline />
    case 'minimal':
      return <StatsMinimal />
    case 'cards':
    default:
      return <StatsCards />
  }
}
