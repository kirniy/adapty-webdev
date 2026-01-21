'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from 'lucide-react';

import { Badge } from '@workspace/ui/components/badge';
import { cn } from '@workspace/ui/lib/utils';

import {
  SOLUTION_ITEMS,
  COMPARE_ITEMS,
  type MenuItem
} from '~/lib/menu-data';

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
      className="shrink-0 object-contain dark:invert"
      style={{ width: size, height: size }}
    />
  );
}

function MenuItemCard({ item }: { item: MenuItem }) {
  const isExternal = item.external || item.href.startsWith('http');

  return (
    <Link
      href={item.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-accent"
    >
      {item.icon && (
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border bg-background shadow-sm transition-colors group-hover:border-primary/20">
          <MenuIcon src={item.icon} />
        </div>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{item.title}</span>
          {item.badge && (
            <Badge variant="secondary" className="h-5 rounded-full px-2 text-[10px] font-semibold uppercase">
              {item.badge}
            </Badge>
          )}
        </div>
        {item.description && (
          <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">{item.description}</p>
        )}
      </div>
    </Link>
  );
}

// ============================================================================
// SOLUTIONS MEGA MENU
// ============================================================================

export function SolutionsMegaMenu(): React.JSX.Element {
  return (
    <div className="flex w-[700px]">
      {/* By Role Section */}
      <div className="flex-1 border-r p-4">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          By Role
        </h3>
        <div className="flex flex-col gap-1">
          {SOLUTION_ITEMS.map((item) => (
            <MenuItemCard key={item.title} item={item} />
          ))}
        </div>
      </div>

      {/* Compare Section */}
      <div className="flex-1 p-4">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Compare Adapty
        </h3>
        <div className="flex flex-col gap-1">
          {COMPARE_ITEMS.map((item) => (
            <MenuItemCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
