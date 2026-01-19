'use client'

import { Container } from '@/components/elements/Container'
import { Section } from '@/components/elements/Section'
import { FadeIn } from '@/components/effects/FadeIn'
import { NumberTicker } from '@/components/effects/NumberTicker'
import { cn } from '@/lib/cn'
import { content } from '@/lib/content'
import { useStatsVariant } from '@/lib/debug-context'
import { motion } from 'motion/react'
import { useId } from 'react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

/**
 * Variant A: Cards (Light Background Grid)
 *
 * Design philosophy:
 * - Light olive background keeps page cohesive
 * - 4-column grid with generous spacing
 * - NumberTicker animation adds life to numbers
 * - Adapty purple accent on numbers for brand presence
 *
 * Polished details:
 * - Staggered fade-in creates reading flow
 * - Responsive font sizes maintain impact at all breakpoints
 * - Olive-600 labels readable but not competing
 * - Best for: Credibility section within light page flow
 */
function StatsCards() {
  const { stats } = content

  return (
    <Section className="border-y border-olive-200 py-16 sm:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium tracking-wider uppercase text-adapty-600 mb-2">
            Trusted by Growth Teams
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <div className="text-center group">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-olive-950">
                  <NumberTicker
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <p className="mt-3 text-sm sm:text-base text-olive-600 group-hover:text-olive-900 transition-colors">
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

/**
 * Variant B: Inline Row
 *
 * Design philosophy:
 * - Stripe-inspired compact credibility bar
 * - Implicit dividers create visual separation
 * - Numbers and labels in baseline alignment
 * - Light background integrates seamlessly with page flow
 *
 * Polished details:
 * - Subtle top/bottom borders define section
 * - Flexible wrap ensures mobile graceful degradation
 * - Reduced padding for minimal footprint
 * - Best for: Subtle credibility between content sections
 */
function StatsInline() {
  const { stats } = content

  return (
    <Section className="py-10 lg:py-12 border-y border-olive-200">
      <Container>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 lg:gap-x-16">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.05}>
              <div className="flex items-baseline gap-2.5 group">
                <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-olive-900">
                  <NumberTicker
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </span>
                <span className="text-sm text-olive-500 group-hover:text-olive-700 transition-colors">
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

/**
 * Variant C: Growth Graph
 *
 * Design philosophy:
 * - Stats paired with decorative SVG growth visualization
 * - Left-aligned border accent creates hierarchy
 * - Visual storytelling implies upward trajectory
 * - Chart fills negative space meaningfully
 *
 * Polished details:
 * - Animated chart reveal adds delight
 * - Dashed vertical lines create rhythm
 * - Gradient fill with stroke for depth
 * - Best for: Product-led growth narrative
 */
function StatsWithGraph() {
  const { stats } = content

  const data = [
    { value: 30 }, { value: 35 }, { value: 45 }, { value: 40 },
    { value: 50 }, { value: 65 }, { value: 55 }, { value: 70 },
    { value: 85 }, { value: 80 }, { value: 95 }, { value: 110 },
    { value: 105 }, { value: 125 }, { value: 140 }, { value: 150 }
  ]

  return (
    <Section className="py-16 sm:py-24 overflow-hidden border-y border-olive-200">
      <Container>
        <div className="relative">
          {/* Stats Grid */}
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 lg:mb-0">
            {stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 0.1}>
                <div className="border-l-2 border-adapty-400 pl-6 backdrop-blur-sm bg-olive-100/50 rounded-r-lg py-2">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-olive-950 font-serif">
                    <NumberTicker
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  </div>
                  <p className="mt-2 text-sm text-olive-600 font-medium tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Background Growth Graph */}
          <motion.div
            className="absolute -bottom-24 lg:-bottom-32 left-0 right-0 h-48 lg:h-64 pointer-events-none opacity-50 lg:opacity-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 0.6, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="statsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-adapty-500)" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="var(--color-adapty-500)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="var(--color-adapty-500)"
                  strokeWidth={2}
                  fill="url(#statsGradient)"
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}

/**
 * Variant D: Floating Cards
 *
 * Design philosophy:
 * - Modern SaaS aesthetic with elevated cards
 * - Subtle shadows create depth hierarchy
 * - Hover lift animation adds interactivity
 * - Gradient background transitions section smoothly
 *
 * Polished details:
 * - Spring physics for natural hover feel
 * - Accent dot adds brand presence
 * - Ring border visible but not heavy
 * - Best for: Premium, interactive feel
 */
function StatsFloatingCards() {
  const { stats } = content

  return (
    <Section className="py-16 sm:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium tracking-wider uppercase text-olive-500 mb-2">
            By the Numbers
          </p>
          <h3 className="text-2xl font-semibold text-olive-900">
            Powering subscription success
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <motion.div
                className={cn(
                  'relative p-7 lg:p-8 rounded-2xl bg-white',
                  'shadow-lg shadow-olive-900/[0.04]',
                  'ring-1 ring-olive-100/80',
                  'hover:shadow-xl hover:shadow-olive-900/[0.08]',
                  'transition-shadow duration-300 cursor-default'
                )}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                {/* Accent dot */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-adapty-400" />

                <div className="text-4xl sm:text-5xl font-medium tracking-tight text-adapty-600">
                  <NumberTicker
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </div>
                <p className="mt-3 text-sm text-olive-600">
                  {stat.label}
                </p>
              </motion.div>
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
    case 'graph':
      return <StatsWithGraph />
    case 'floating':
      return <StatsFloatingCards />
    case 'cards':
    default:
      return <StatsCards />
  }
}
