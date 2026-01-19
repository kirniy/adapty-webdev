'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from 'lucide-react';

import { Badge } from '@workspace/ui/components/badge';
import { Separator } from '@workspace/ui/components/separator';
import {
  UnderlinedTabs,
  UnderlinedTabsContent,
  UnderlinedTabsList,
  UnderlinedTabsTrigger
} from '@workspace/ui/components/tabs';
import { cn } from '@workspace/ui/lib/utils';

import {
  PRODUCT_SIDEBAR,
  PRODUCT_FOOTER,
  PRODUCT_TABS,
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

function MenuItemCard({
  item
}: {
  item: MenuItem;
}) {
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
// PRODUCT MEGA MENU
// ============================================================================

export function ProductMegaMenu(): React.JSX.Element {
  return (
    <div className="flex w-[850px]">
      {/* Sidebar */}
      <div className="w-48 border-r bg-muted/30 p-4">
        <nav className="flex flex-col gap-1">
          {PRODUCT_SIDEBAR.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              {link.title}
              <ArrowRightIcon className="size-3.5 text-muted-foreground" />
            </Link>
          ))}
        </nav>
        <Separator className="my-4" />
        <nav className="flex flex-col gap-0.5">
          {PRODUCT_FOOTER.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.title === 'System status' && (
                <span className="size-2 rounded-full bg-green-500" />
              )}
              {link.title}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content with tabs */}
      <div className="flex-1 p-4">
        <UnderlinedTabs defaultValue="paywalls" className="w-full">
          <UnderlinedTabsList className="mb-4 w-full border-b">
            {Object.entries(PRODUCT_TABS).map(([key, tab]) => (
              <UnderlinedTabsTrigger key={key} value={key} className="first:ml-0">
                {tab.label}
                {key === 'paywalls' && (
                  <Badge variant="secondary" className="ml-2 h-4 rounded-full px-1.5 text-[9px]">
                    {tab.items.length}
                  </Badge>
                )}
              </UnderlinedTabsTrigger>
            ))}
          </UnderlinedTabsList>

          {Object.entries(PRODUCT_TABS).map(([key, tab]) => (
            <UnderlinedTabsContent key={key} value={key}>
              <div className="grid grid-cols-2 gap-1">
                {tab.items.map((item) => (
                  <MenuItemCard key={item.title} item={item} />
                ))}
              </div>
            </UnderlinedTabsContent>
          ))}
        </UnderlinedTabs>
      </div>
    </div>
  );
}
