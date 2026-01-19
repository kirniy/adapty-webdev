'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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
  PRODUCT_SIDEBAR_ITEMS,
  PRODUCT_FOOTER,
  PRODUCT_TABS,
  SOLUTION_ITEMS,
  SDK_ITEMS,
  INTEGRATIONS_ITEMS,
  type ProductSidebarKey,
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
// PANEL COMPONENTS
// ============================================================================

function ProductPanel() {
  return (
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
  );
}

function SimpleItemGrid({ items, columns = 2 }: { items: MenuItem[]; columns?: 1 | 2 }) {
  return (
    <div className={cn('grid gap-1', columns === 2 ? 'grid-cols-2' : 'grid-cols-1')}>
      {items.map((item) => (
        <MenuItemCard key={item.title} item={item} />
      ))}
    </div>
  );
}

function SolutionPanel() {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Solutions by role
      </h3>
      <SimpleItemGrid items={SOLUTION_ITEMS} columns={2} />
    </div>
  );
}

function SDKPanel() {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Mobile SDKs
      </h3>
      <SimpleItemGrid items={SDK_ITEMS} columns={2} />
      <Link
        href="https://adapty.io/docs/"
        target="_blank"
        className="mt-4 flex items-center gap-1 text-sm font-medium text-primary hover:underline"
      >
        View all documentation
        <ArrowRightIcon className="size-3.5" />
      </Link>
    </div>
  );
}

function IntegrationsPanel() {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Popular integrations
      </h3>
      <SimpleItemGrid items={INTEGRATIONS_ITEMS} columns={2} />
      <Link
        href="https://adapty.io/integrations/"
        target="_blank"
        className="mt-4 flex items-center gap-1 text-sm font-medium text-primary hover:underline"
      >
        View all integrations
        <ArrowRightIcon className="size-3.5" />
      </Link>
    </div>
  );
}

// ============================================================================
// PRODUCT MEGA MENU
// ============================================================================

const PANEL_COMPONENTS: Record<ProductSidebarKey, React.ComponentType> = {
  product: ProductPanel,
  solution: SolutionPanel,
  sdk: SDKPanel,
  integrations: IntegrationsPanel,
};

export function ProductMegaMenu(): React.JSX.Element {
  const [activePanel, setActivePanel] = React.useState<ProductSidebarKey>('product');

  const PanelComponent = PANEL_COMPONENTS[activePanel];

  return (
    <div className="flex w-[850px]">
      {/* Sidebar */}
      <div className="w-48 border-r bg-muted/30 p-4">
        <nav className="flex flex-col gap-1">
          {PRODUCT_SIDEBAR_ITEMS.map((item) => (
            <button
              key={item.key}
              type="button"
              onMouseEnter={() => setActivePanel(item.key)}
              className={cn(
                'flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors',
                activePanel === item.key
                  ? 'bg-accent text-foreground'
                  : 'text-foreground/80 hover:bg-accent/50'
              )}
            >
              {item.title}
              <ArrowRightIcon
                className={cn(
                  'size-3.5 transition-opacity',
                  activePanel === item.key ? 'opacity-100' : 'opacity-0'
                )}
              />
            </button>
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

      {/* Main content - animated panel switching */}
      <div className="flex-1 p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePanel}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.15 }}
          >
            <PanelComponent />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
