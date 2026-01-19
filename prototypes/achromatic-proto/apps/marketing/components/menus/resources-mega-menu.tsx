'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Badge } from '@workspace/ui/components/badge';
import { Separator } from '@workspace/ui/components/separator';

import { RESOURCES_SECTIONS, type MenuItem } from '~/lib/menu-data';

// ============================================================================
// HELPER COMPONENTS
// ============================================================================

function MenuIcon({ src, size = 20 }: { src: string; size?: number }) {
  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      className="shrink-0 object-contain opacity-70 transition-opacity group-hover:opacity-100 dark:invert"
      style={{ width: size, height: size }}
    />
  );
}

function ResourceLink({ item }: { item: MenuItem }) {
  const isExternal = item.external || item.href.startsWith('http');

  return (
    <Link
      href={item.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-accent"
    >
      {item.icon && (
        <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border bg-background">
          <MenuIcon src={item.icon} size={16} />
        </div>
      )}
      <span className="flex-1 text-sm font-medium">{item.title}</span>
      {item.badge && (
        <Badge variant="outline" className="h-5 rounded-full px-2 text-[10px]">
          {item.badge}
        </Badge>
      )}
    </Link>
  );
}

// ============================================================================
// RESOURCES MEGA MENU (5 sections in 3 columns)
// ============================================================================

export function ResourcesMegaMenu(): React.JSX.Element {
  // Split sections into 3 columns:
  // Col 1: Learn + Connect
  // Col 2: Discover
  // Col 3: Ebooks + Research
  const learnSection = RESOURCES_SECTIONS.find(s => s.title === 'Learn');
  const connectSection = RESOURCES_SECTIONS.find(s => s.title === 'Connect');
  const discoverSection = RESOURCES_SECTIONS.find(s => s.title === 'Discover');
  const ebooksSection = RESOURCES_SECTIONS.find(s => s.title === 'Ebooks');
  const researchSection = RESOURCES_SECTIONS.find(s => s.title === 'Research');

  return (
    <div className="flex w-[1100px] gap-0 p-6">
      {/* Column 1: Learn & Connect */}
      <div className="flex w-[220px] shrink-0 flex-col gap-8">
        {learnSection && (
          <div className="flex flex-col gap-2">
            <h4 className="mb-1 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {learnSection.title}
            </h4>
            <nav className="flex flex-col gap-0.5">
              {learnSection.items.map((item) => (
                <ResourceLink key={item.title} item={item} />
              ))}
            </nav>
          </div>
        )}
        {connectSection && (
          <div className="flex flex-col gap-2">
            <h4 className="mb-1 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {connectSection.title}
            </h4>
            <nav className="flex flex-col gap-0.5">
              {connectSection.items.map((item) => (
                <ResourceLink key={item.title} item={item} />
              ))}
            </nav>
          </div>
        )}
      </div>

      <Separator orientation="vertical" className="mx-6 h-auto" />

      {/* Column 2: Discover */}
      {discoverSection && (
        <div className="flex w-[280px] shrink-0 flex-col gap-2">
          <h4 className="mb-1 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {discoverSection.title}
          </h4>
          <nav className="flex flex-col gap-0.5">
            {discoverSection.items.map((item) => (
              <ResourceLink key={item.title} item={item} />
            ))}
          </nav>
        </div>
      )}

      <Separator orientation="vertical" className="mx-6 h-auto" />

      {/* Column 3: Ebooks & Research */}
      <div className="flex flex-1 flex-col gap-8">
        {ebooksSection && (
          <div className="flex flex-col gap-2">
            <h4 className="mb-1 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {ebooksSection.title}
            </h4>
            <nav className="flex flex-col gap-0.5">
              {ebooksSection.items.map((item) => (
                <ResourceLink key={item.title} item={item} />
              ))}
            </nav>
          </div>
        )}
        {researchSection && (
          <div className="flex flex-col gap-2">
            <h4 className="mb-1 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {researchSection.title}
            </h4>
            <nav className="flex flex-col gap-0.5">
              {researchSection.items.map((item) => (
                <ResourceLink key={item.title} item={item} />
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
