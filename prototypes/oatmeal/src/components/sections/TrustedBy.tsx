'use client'

import { Container } from '@/components/elements/Container'
import { Marquee } from '@/components/effects/Marquee'
import { content } from '@/lib/content'
import Image from 'next/image'

export function TrustedBy() {
  const { trustedBy } = content

  return (
    <section className="py-12 border-y border-olive-200 bg-white/50">
      <Container>
        <p className="text-sm font-medium text-olive-500 text-center mb-8">
          {trustedBy.title}
        </p>
      </Container>

      <Marquee speed="normal" pauseOnHover>
        {trustedBy.logos.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center justify-center px-8 group"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={120}
              height={40}
              className="h-8 w-auto opacity-40 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
            />
          </div>
        ))}
      </Marquee>
    </section>
  )
}
