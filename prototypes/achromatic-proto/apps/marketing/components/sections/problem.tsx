import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from 'lucide-react';

import { BlurFade } from '~/components/fragments/blur-fade';
import { GridSection } from '~/components/fragments/grid-section';
import { TextGenerateWithSelectBoxEffect } from '~/components/fragments/text-generate-with-select-box-effect';

const ROLES = [
  {
    title: 'For developers',
    image: '/images/role-developers-new.webp',
    link: 'https://adapty.io/for-developers/',
    tags: ['Subscriptions SDK', 'Refund Saver', 'Remote config', 'Fallback paywalls'],
  },
  {
    title: 'For app owners',
    image: '/images/role-owners-new.webp',
    link: 'https://adapty.io/for-app-owners/',
    tags: ['Revenue analytics', 'LTV analytics', 'AI LTV predictions'],
  },
  {
    title: 'For marketers',
    image: '/images/role-marketers-new.webp',
    link: 'https://adapty.io/for-marketers/',
    tags: ['A/B testing', 'No-code Builder', 'Localizations', 'Targeting'],
  },
];

export function Problem(): React.JSX.Element {
  return (
    <GridSection>
      <div className="px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold md:text-5xl">
          <TextGenerateWithSelectBoxEffect words="Help your team run the mobile subscription business" />
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">Faster and cheaper.</p>
      </div>
      <div className="grid divide-y border-t border-dashed md:grid-cols-3 md:divide-x md:divide-y-0">
        {ROLES.map((role, index) => (
          <BlurFade
            key={role.title}
            inView
            delay={0.2 + index * 0.2}
            className="group border-dashed"
          >
            <Link 
              href={role.link}
              target="_blank"
              className="block px-6 py-8 transition-colors hover:bg-accent/50"
            >
              {/* Image */}
              <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                <Image
                  src={role.image}
                  alt={role.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              
              {/* Title with arrow */}
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{role.title}</h3>
                <ArrowRightIcon className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {role.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </GridSection>
  );
}
