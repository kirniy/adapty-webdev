'use client'

import { Container } from '@/components/elements/Container'
import { Eyebrow } from '@/components/elements/Eyebrow'
import { Heading } from '@/components/elements/Heading'
import { Section } from '@/components/elements/Section'
import { FadeIn } from '@/components/effects/FadeIn'
import { cn } from '@/lib/cn'
import { content } from '@/lib/content'
import { motion } from 'motion/react'

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      className={cn('size-5', className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  )
}

function EnterpriseFeature({
  title,
  description,
  index,
}: {
  title: string
  description: string
  index: number
}) {
  return (
    <FadeIn delay={index * 0.1}>
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        className="flex items-start gap-4"
      >
        <div className="flex-shrink-0 mt-1">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
            className="flex items-center justify-center size-8 rounded-full bg-olive-950 text-white"
          >
            <CheckIcon className="size-4" />
          </motion.div>
        </div>
        <div>
          <h4 className="font-semibold text-olive-950">{title}</h4>
          <p className="text-sm text-olive-600 mt-0.5">{description}</p>
        </div>
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
              {enterprise.title}
            </Heading>
            <p className="mt-4 text-olive-600 max-w-lg">
              Built for scale with security, compliance, and support that enterprise teams require.
            </p>
          </FadeIn>

          {/* Right: Features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {enterprise.features.map((feature, index) => (
              <EnterpriseFeature
                key={feature.title}
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
