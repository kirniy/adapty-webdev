'use client'

import { Container } from '@/components/elements/Container'
import { Eyebrow } from '@/components/elements/Eyebrow'
import { Heading } from '@/components/elements/Heading'
import { Section } from '@/components/elements/Section'
import { FadeIn } from '@/components/effects/FadeIn'
import { content } from '@/lib/content'
import { motion } from 'motion/react'

// Hoisted static SVG - avoids re-creating on every render
// Per react-best-practices: "Extract static JSX outside components to avoid re-creation"
const checkIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    className="size-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
)

function EnterpriseFeature({
  icon,
  label,
  index,
}: {
  icon: string
  label: string
  index: number
}) {
  return (
    <FadeIn delay={index * 0.1}>
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-4 p-4 rounded-xl bg-olive-50 border border-olive-100"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
          className="flex items-center justify-center size-10 rounded-full bg-adapty-500 text-white flex-shrink-0 shadow-sm"
        >
          {checkIcon}
        </motion.div>
        <span className="font-medium text-olive-950">{label}</span>
      </motion.div>
    </FadeIn>
  )
}

export function Enterprise() {
  const { enterprise } = content

  return (
    <Section>
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <FadeIn>
            <Eyebrow>Enterprise</Eyebrow>
            <Heading as="h2" className="mt-2">
              {enterprise.headline}{' '}
              <span className="italic text-olive-600">{enterprise.headlineAccent}</span>
            </Heading>
            <p className="mt-4 text-olive-600 max-w-lg">
              {enterprise.description}
            </p>
          </FadeIn>

          {/* Right: Features grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {enterprise.features.map((feature, index) => (
              <EnterpriseFeature
                key={feature.label}
                {...feature}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
