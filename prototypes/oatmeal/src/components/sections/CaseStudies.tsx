'use client'

import { Container } from '@/components/elements/Container'
import { Eyebrow } from '@/components/elements/Eyebrow'
import { Heading } from '@/components/elements/Heading'
import { Section } from '@/components/elements/Section'
import { FadeIn } from '@/components/effects/FadeIn'
import { cn } from '@/lib/cn'
import { content } from '@/lib/content'
import { motion } from 'motion/react'
import Image from 'next/image'

function CaseStudyCard({
  name,
  icon,
  lift,
  index,
}: {
  name: string
  icon: string
  lift: string
  index: number
}) {
  return (
    <FadeIn delay={index * 0.08}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'group relative flex items-center gap-4 p-4',
          'rounded-xl bg-white border border-olive-200',
          'hover:border-olive-300 hover:shadow-md',
          'transition-all duration-200 cursor-pointer'
        )}
      >
        {/* App icon */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 3 }}
          transition={{ duration: 0.2 }}
          className="relative size-14 rounded-xl overflow-hidden shadow-sm flex-shrink-0"
        >
          <Image
            src={icon}
            alt={name}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p className="font-medium text-olive-950 truncate">{name}</p>
          <p className="text-sm text-olive-500">Revenue increase</p>
        </div>

        {/* Lift badge */}
        <div className="flex-shrink-0">
          <span className="inline-flex px-3 py-1.5 rounded-full bg-olive-950 text-white text-sm font-semibold">
            {lift}
          </span>
        </div>
      </motion.div>
    </FadeIn>
  )
}

export function CaseStudies() {
  const { caseStudies } = content

  return (
    <Section className="bg-olive-50">
      <Container>
        <FadeIn className="text-center mb-12 lg:mb-16">
          <Eyebrow>Success Stories</Eyebrow>
          <Heading as="h2" className="mt-2">
            Apps growing with Adapty
          </Heading>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.name} {...study} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
