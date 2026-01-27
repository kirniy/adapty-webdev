'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, ExternalLinkIcon, SearchIcon } from 'lucide-react';

import { Button } from '@workspace/ui/components/button';
import { Separator } from '@workspace/ui/components/separator';

import {
  DOCS_MOBILE_SDKS,
  DOCS_SIDEBAR,
  DOCS_WEB_API,
  DOCS_WEB_PAYMENTS,
  type MenuItem
} from '~/lib/menu-data';

// ============================================================================
// HELPER COMPONENTS
// ============================================================================

function SdkCard({ item }: { item: MenuItem }) {
  const isExternal = item.external || item.href.startsWith('http');

  return (
    <Link
      href={item.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group flex items-center gap-3 rounded-xl border bg-card p-3 transition-all hover:border-primary/30 hover:shadow-sm"
    >
      {item.icon && (
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
          <Image
            src={item.icon}
            alt={item.title}
            width={28}
            height={28}
            className="object-contain"
          />
        </div>
      )}
      <div>
        <span className="text-sm font-medium">{item.title}</span>
        <p className="text-xs text-muted-foreground">SDK Guide</p>
      </div>
    </Link>
  );
}

function ApiLink({ item }: { item: MenuItem }) {
  const isExternal = item.external || item.href.startsWith('http');

  return (
    <Link
      href={item.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group flex items-center gap-2.5 rounded-lg p-1 transition-colors hover:bg-accent"
    >
      {item.icon && (
        <div className="flex size-5 shrink-0 items-center justify-center">
          <Image
            src={item.icon}
            alt={item.title}
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
      )}
      <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
        {item.title}
      </span>
    </Link>
  );
}

// ============================================================================
// DOCS MEGA MENU (sidebar + SDK grid)
// ============================================================================

export function DocsMegaMenu(): React.JSX.Element {
  return (
    <div className="flex w-[1000px]">
      {/* Sidebar */}
      <div className="w-52 border-r bg-muted/30 p-4">
        {/* Search button (styled like DocsSearch) */}
        <Button
          variant="outline"
          className="mb-4 h-9 w-full justify-start gap-2 px-3 text-sm font-normal text-muted-foreground shadow-none"
        >
          <SearchIcon className="size-3.5" />
          <span className="flex-1 text-left">Search docs</span>
          <kbd className="pointer-events-none flex h-5 select-none items-center gap-0.5 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
            <span>Cmd</span>K
          </kbd>
        </Button>

        {/* Sidebar links */}
        <nav className="flex flex-col gap-1">
          {DOCS_SIDEBAR.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              {link.title}
              {link.external ? (
                <ExternalLinkIcon className="size-3 text-muted-foreground" />
              ) : (
                <ArrowRightIcon className="size-3.5 text-muted-foreground" />
              )}
            </Link>
          ))}
        </nav>

        <Separator className="my-4" />

        {/* All docs link */}
        <Link
          href="https://adapty.io/docs/"
          target="_blank"
          className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
        >
          All docs
          <ArrowRightIcon className="size-3.5" />
        </Link>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        {/* Mobile SDKs - 4 column grid */}
        <div className="mb-6">
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Mobile SDK
          </h4>
          <div className="grid grid-cols-4 gap-3">
            {DOCS_MOBILE_SDKS.map((sdk) => (
              <SdkCard
                key={sdk.title}
                item={sdk}
              />
            ))}
          </div>
        </div>

        <Separator className="my-6" />

        {/* Web Payments & Web API - side by side */}
        <div className="grid grid-cols-2 gap-8">
          {/* Web Payments */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Web Payments
            </h4>
            <div className="flex flex-col gap-2">
              {DOCS_WEB_PAYMENTS.map((item) => (
                <SdkCard
                  key={item.title}
                  item={item}
                />
              ))}
            </div>
          </div>

          {/* Web API */}
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Web API
            </h4>
            <div className="flex flex-col gap-2">
              {DOCS_WEB_API.map((item) => (
                <SdkCard
                  key={item.title}
                  item={item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
