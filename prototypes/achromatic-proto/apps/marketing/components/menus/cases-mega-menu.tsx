'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from 'lucide-react';

import { CASES_MENU } from '~/lib/menu-data';

// ============================================================================
// CASES MEGA MENU (3-column grid with 11 case studies)
// ============================================================================

export function CasesMegaMenu(): React.JSX.Element {
  return (
    <div className="w-[1000px] p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Customer Success Stories
        </h4>
        <Link
          href="https://adapty.io/clients/"
          target="_blank"
          className="flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          View all case studies
          <ArrowRightIcon className="size-3.5" />
        </Link>
      </div>

      {/* 3-column grid of case studies */}
      <div className="grid grid-cols-3 gap-4">
        {CASES_MENU.map((caseStudy) => (
          <Link
            key={caseStudy.name}
            href={caseStudy.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md"
          >
            {/* App icon */}
            <div className="relative size-12 shrink-0 overflow-hidden rounded-xl border bg-muted shadow-sm">
              <Image
                src={caseStudy.icon}
                alt={caseStudy.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm text-muted-foreground">{caseStudy.name}</p>
              <p className="text-2xl font-bold tracking-tight text-primary">{caseStudy.metric}</p>
              <p className="truncate text-xs text-muted-foreground">{caseStudy.description}</p>
            </div>

            {/* Arrow on hover */}
            <ArrowRightIcon className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        ))}
      </div>
    </div>
  );
}
