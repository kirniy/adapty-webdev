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
  title,
  metric,
  category,
  logo,
  bgColor,
  index,
}: {
  title: string
  metric: string
  category: string
  logo: string
  bgColor: string
  index: number
}) {
  return (
    <FadeIn delay={index * 0.08}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'group relative flex flex-col h-full',
          'rounded-2xl overflow-hidden',
          'bg-gradient-to-br',
          bgColor,
          'border border-olive-200/50',
          'hover:shadow-xl hover:shadow-olive-900/10',
          'transition-all duration-300 cursor-pointer'
        )}
      >
        {/* Header with logo and category */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between mb-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="relative size-12 rounded-xl overflow-hidden shadow-md bg-white"
            >
              <Image
                src={logo}
                alt={title}
                fill
                className="object-contain p-1"
              />
            </motion.div>
            <span className="text-xs font-medium text-olive-600 bg-white/60 px-2.5 py-1 rounded-full">
              {category}
            </span>
          </div>

          {/* Title */}
          <p className="font-medium text-olive-900 leading-snug line-clamp-2">
            {title}
          </p>
        </div>

        {/* Metric badge */}
        <div className="mt-auto p-6 pt-0">
          <span className="inline-flex px-4 py-2 rounded-full bg-olive-950 text-white text-lg font-bold">
            {metric}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.title} {...study} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
