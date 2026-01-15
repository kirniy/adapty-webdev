'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowRightIcon, ExternalLinkIcon, SearchIcon } from 'lucide-react';

import { baseUrl, getPathname, routes } from '@workspace/routes';
import { Badge } from '@workspace/ui/components/badge';
import { Button, buttonVariants } from '@workspace/ui/components/button';
import { Card, CardContent, CardDescription, CardTitle } from '@workspace/ui/components/card';
import { Logo } from '@workspace/ui/components/logo';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@workspace/ui/components/navigation-menu';
import { Separator } from '@workspace/ui/components/separator';
import {
  UnderlinedTabs,
  UnderlinedTabsContent,
  UnderlinedTabsList,
  UnderlinedTabsTrigger
} from '@workspace/ui/components/tabs';
import { ThemeToggle } from '@workspace/ui/components/theme-toggle';
import { cn } from '@workspace/ui/lib/utils';

import { MobileMenu } from '~/components/mobile-menu';
import { useHeaderVariant } from '~/lib/debug-context';

// ============================================================================
// MENU DATA - Structured for mega-menu layout
// ============================================================================

const PRODUCT_TABS = {
  tech: {
    label: 'Tech',
    items: [
      { title: 'Subscriptions SDK', description: 'Integrate in-app purchases easily', href: 'https://adapty.io/sdk/', icon: '/images/menu-icons/icon-20x20-sdk.svg' },
      { title: 'Subscribers sync', description: 'Sync data across all platforms', href: 'https://adapty.io/subscription-sync/', icon: '/images/menu-icons/icon-24x24-2n.svg' },
      { title: 'Fallback paywalls', description: 'Never lose a conversion', href: 'https://adapty.io/fallback-paywalls/', icon: '/images/menu-icons/icon-24x24-3n.svg' },
      { title: 'Refund saver', description: 'Reduce refunds automatically', href: 'https://adapty.io/refund-saver/', icon: '/images/menu-icons/icon-20x20-currency-exchange.svg' },
    ]
  },
  paywalls: {
    label: 'Paywalls',
    items: [
      { title: 'Paywall builder', description: 'No-code visual paywall editor', href: 'https://adapty.io/paywall-builder/', icon: '/images/menu-icons/icon-24x24-1n.svg' },
      { title: 'Onboarding builder', description: 'Create converting onboardings', href: 'https://adapty.io/onboarding-builder/', icon: '/images/menu-icons/icon-mobile-menu-dp24w4g0.svg' },
      { title: 'AI generator', description: 'Generate paywalls with AI', href: 'https://adapty.io/ai-paywall-generator/', icon: '/images/menu-icons/icon-20x20-neurology.svg', badge: 'new' },
      { title: 'A/B testing', description: 'Test and optimize paywalls', href: 'https://adapty.io/paywall-ab-testing/', icon: '/images/menu-icons/icon-20x20-bug-report.svg' },
      { title: 'Autopilot', description: 'AI-powered optimization', href: 'https://adapty.io/autopilot/', icon: '/images/menu-icons/icon-assistant-dp24w4g0.svg', badge: 'new' },
      { title: 'Targeting', description: 'Show right paywall to right user', href: 'https://adapty.io/paywall-targeting/', icon: '/images/menu-icons/icon-24x24-9n.svg' },
      { title: 'Localizations', description: 'Localize paywalls for any market', href: 'https://adapty.io/paywall-localization/', icon: '/images/menu-icons/icon-24x24-10n.svg' },
      { title: 'Remote config', description: 'Update app behavior remotely', href: 'https://adapty.io/remote-config/', icon: '/images/menu-icons/icon-24x24-11n.svg' },
    ]
  },
  analytics: {
    label: 'Analytics',
    items: [
      { title: 'Revenue analytics', description: 'Track MRR, ARR, and revenue', href: 'https://adapty.io/revenue-analytics/', icon: '/images/menu-icons/icon-24x24-4n.svg' },
      { title: 'LTV analytics', description: 'Understand user lifetime value', href: 'https://adapty.io/ltv-analytics/', icon: '/images/menu-icons/icon-24x24-5n.svg' },
      { title: 'AI LTV predictions', description: 'Predict future revenue', href: 'https://adapty.io/predictive-analytics/', icon: '/images/menu-icons/icon-24x24-12n.svg' },
      { title: 'Apple ads manager', description: 'Connect ads to subscriptions', href: 'https://adapty.io/apple-ads-manager/', icon: '/images/menu-icons/icon-finance-blue-20dp-300w.svg' },
    ]
  }
};

const PRODUCT_SIDEBAR = [
  { title: 'Product overview', href: 'https://adapty.io/product/' },
  { title: 'Solutions', href: 'https://adapty.io/solutions/' },
  { title: 'Integrations', href: 'https://adapty.io/integrations/' },
];

const PRODUCT_FOOTER = [
  { title: 'Why Adapty?', href: 'https://adapty.io/why-adapty/' },
  { title: 'Product changelog', href: 'https://adapty.io/changelog/' },
  { title: 'System status', href: 'https://status.adapty.io/', hasStatus: true },
];

const CASES_MENU = [
  { company: 'Productivity app', metric: '+50%', description: 'revenue with Autopilot', href: 'https://adapty.io/clients/productivity-app/', logo: '/images/case-studies/productivity-app.webp' },
  { company: 'Going Merry', metric: '5x', description: 'subscription growth', href: 'https://adapty.io/clients/going-merry/', logo: '/images/case-studies/going-merry.webp' },
  { company: 'Shmoody', metric: '$2M', description: 'ARR milestone', href: 'https://adapty.io/clients/shmoody/', logo: '/images/case-studies/shmoody.webp' },
  { company: 'Glam AI', metric: '3x', description: 'conversion rate', href: 'https://adapty.io/clients/glam-ai/', logo: '/images/case-studies/glam-ai.webp' },
  { company: 'Lively', metric: '82%', description: 'trial to paid rate', href: 'https://adapty.io/clients/lively/', logo: '/images/case-studies/lively.png' },
  { company: 'Fotorama', metric: '-40%', description: 'churn reduction', href: 'https://adapty.io/clients/fotorama/', logo: '/images/case-studies/fotorama.webp' },
];

const RESOURCES_SECTIONS = [
  {
    title: 'Learn',
    items: [
      { title: 'Blog', href: 'https://adapty.io/blog/', icon: '/images/menu-icons/icon-24x24-newsletter.svg' },
      { title: 'Podcasts', href: 'https://adapty.io/podcasts/', icon: '/images/menu-icons/icon-24x24-23n.svg' },
      { title: 'Glossary', href: 'https://adapty.io/glossary/', icon: '/images/menu-icons/icon-24x24-difference.svg' },
    ]
  },
  {
    title: 'Connect',
    items: [
      { title: 'Community', href: 'https://adapty.io/community/', icon: '/images/menu-icons/icon-20x20-bug-report.svg' },
      { title: 'Webinars', href: 'https://adapty.io/webinars/', icon: '/images/menu-icons/icon-20x20-neurology.svg' },
      { title: 'Events', href: 'https://adapty.io/events/', icon: '/images/menu-icons/icon-24x24-23n.svg' },
      { title: 'Careers', href: 'https://adapty.io/careers/', icon: '/images/menu-icons/icon-assistant-dp24w4g0.svg' },
    ]
  },
  {
    title: 'Discover',
    items: [
      { title: 'Paywall newsletter', href: 'https://adapty.io/paywall-newsletter/', icon: '/images/menu-icons/icon-24x24-newsletter.svg', badge: 'weekly' },
      { title: 'Apple fiscal calendar', href: 'https://adapty.io/apple-fiscal-calendar/', icon: '/images/menu-icons/icon-24x24-newsletter.svg' },
      { title: 'Subscription calculator', href: 'https://adapty.io/subscription-calculator/', icon: '/images/menu-icons/icon-24x24-4n.svg' },
      { title: 'Paywall library', href: 'https://adapty.io/paywall-library/', icon: '/images/menu-icons/icon-24x24-1n.svg' },
    ]
  }
];

const DOCS_SIDEBAR = [
  { title: 'Quick start', href: 'https://adapty.io/docs/quickstart/' },
  { title: 'Migrate to Adapty', href: 'https://adapty.io/docs/migration/' },
  { title: 'Support Center', href: 'https://adapty.io/support/' },
];

const DOCS_SDKS = [
  { title: 'iOS', href: 'https://adapty.io/docs/ios-installation/', icon: '/images/menu-icons/icon-ios-64x64-1.svg' },
  { title: 'Android', href: 'https://adapty.io/docs/android-installation/', icon: '/images/menu-icons/icon-android-64x64-1.svg' },
  { title: 'React Native', href: 'https://adapty.io/docs/react-native-installation/', icon: '/images/menu-icons/icon-react-native-64x64-1.svg' },
  { title: 'Flutter', href: 'https://adapty.io/docs/flutter-installation/', icon: '/images/menu-icons/icon-flutter-64x64-1.svg' },
  { title: 'Unity', href: 'https://adapty.io/docs/unity-installation/', icon: '/images/menu-icons/icon-unity-64x64-1.svg' },
  { title: 'Stripe', href: 'https://adapty.io/docs/stripe/', icon: '/images/menu-icons/icon-stripe-64x64-1.svg' },
];

// ============================================================================
// MENU COMPONENTS
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
  href, 
  icon, 
  title, 
  description,
  badge,
}: { 
  href: string; 
  icon: string; 
  title: string; 
  description?: string;
  badge?: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-accent"
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border bg-background shadow-sm transition-colors group-hover:border-primary/20">
        <MenuIcon src={icon} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{title}</span>
          {badge && (
            <Badge variant="secondary" className="h-5 rounded-full px-2 text-[10px] font-semibold uppercase">
              {badge}
            </Badge>
          )}
        </div>
        {description && (
          <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">{description}</p>
        )}
      </div>
    </Link>
  );
}

// ============================================================================
// MEGA MENU PANELS
// ============================================================================

function ProductMegaMenu() {
  return (
    <div className="flex w-[850px]">
      {/* Sidebar */}
      <div className="w-48 border-r bg-muted/30 p-4">
        <nav className="flex flex-col gap-1">
          {PRODUCT_SIDEBAR.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              target="_blank"
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
              target="_blank"
              className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.hasStatus && <span className="size-2 rounded-full bg-green-500" />}
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
                    8
                  </Badge>
                )}
              </UnderlinedTabsTrigger>
            ))}
          </UnderlinedTabsList>
          
          {Object.entries(PRODUCT_TABS).map(([key, tab]) => (
            <UnderlinedTabsContent key={key} value={key}>
              <div className="grid grid-cols-2 gap-1">
                {tab.items.map((item) => (
                  <MenuItemCard
                    key={item.title}
                    href={item.href}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    badge={'badge' in item ? item.badge : undefined}
                  />
                ))}
              </div>
            </UnderlinedTabsContent>
          ))}
        </UnderlinedTabs>
      </div>
    </div>
  );
}

function CasesMegaMenu() {
  return (
    <div className="w-[680px] p-4">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-sm font-semibold">Customer Success Stories</h4>
        <Link
          href="https://adapty.io/case-studies/"
          target="_blank"
          className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
        >
          View all case studies
          <ArrowRightIcon className="size-3" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {CASES_MENU.map((caseStudy) => (
          <Link
            key={caseStudy.company}
            href={caseStudy.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 overflow-hidden rounded-xl border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md"
          >
            <div className="relative size-12 shrink-0 overflow-hidden rounded-lg bg-muted">
              <Image
                src={caseStudy.logo}
                alt={caseStudy.company}
                fill
                className="object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-muted-foreground">{caseStudy.company}</p>
              <p className="text-2xl font-bold tracking-tight text-primary">{caseStudy.metric}</p>
              <p className="truncate text-xs text-muted-foreground">{caseStudy.description}</p>
            </div>
            <ArrowRightIcon className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        ))}
      </div>
    </div>
  );
}

function ResourcesMegaMenu() {
  return (
    <div className="flex w-[640px] gap-0 p-4">
      {RESOURCES_SECTIONS.map((section, idx) => (
        <React.Fragment key={section.title}>
          {idx > 0 && <Separator orientation="vertical" className="mx-4 h-auto" />}
          <div className="flex-1">
            <h4 className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {section.title}
            </h4>
            <nav className="flex flex-col gap-0.5">
              {section.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-accent"
                >
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border bg-background">
                    <MenuIcon src={item.icon} size={16} />
                  </div>
                  <span className="text-sm font-medium">{item.title}</span>
                  {item.badge && (
                    <Badge variant="outline" className="ml-auto h-5 rounded-full px-2 text-[10px]">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

function DocsMegaMenu() {
  return (
    <div className="flex w-[600px]">
      {/* Sidebar */}
      <div className="w-48 border-r bg-muted/30 p-4">
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
        
        <nav className="flex flex-col gap-1">
          {DOCS_SIDEBAR.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              target="_blank"
              className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              {link.title}
              <ExternalLinkIcon className="size-3 text-muted-foreground" />
            </Link>
          ))}
        </nav>
      </div>
      
      {/* SDK Grid */}
      <div className="flex-1 p-4">
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          SDK Installation Guides
        </h4>
        <div className="grid grid-cols-2 gap-2">
          {DOCS_SDKS.map((sdk) => (
            <Link
              key={sdk.title}
              href={sdk.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border bg-card p-3 transition-all hover:border-primary/30 hover:shadow-sm"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                <Image
                  src={sdk.icon}
                  alt={sdk.title}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-sm font-medium">{sdk.title}</span>
                <p className="text-xs text-muted-foreground">SDK Guide</p>
              </div>
            </Link>
          ))}
        </div>
        
        <Separator className="my-4" />
        
        <Link
          href="https://adapty.io/docs/"
          target="_blank"
          className="flex items-center justify-between rounded-lg bg-accent/50 p-3 text-sm font-medium transition-colors hover:bg-accent"
        >
          <span>Browse full documentation</span>
          <ArrowRightIcon className="size-4" />
        </Link>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN NAVBAR COMPONENT
// ============================================================================

export function Navbar(): React.JSX.Element {
  const pathname = usePathname();
  const headerVariant = useHeaderVariant();

  // Floating Pill Variant
  if (headerVariant === 'simple') {
    return (
      <section className="fixed inset-x-0 top-4 z-40 px-4">
        <div className="mx-auto max-w-5xl rounded-full border bg-background/80 px-6 py-3 shadow-sm backdrop-blur-md">
          <nav className="flex items-center justify-between">
            <Link href={routes.marketing.Index} className="flex items-center gap-2">
              <Logo className="h-6 w-auto" />
            </Link>

            <div className="hidden items-center gap-6 lg:flex">
              <Link href="https://adapty.io/product/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Product
              </Link>
              <Link href="https://adapty.io/case-studies/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Cases
              </Link>
              <Link href="https://adapty.io/blog/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Blog
              </Link>
              <Link href="https://adapty.io/pricing/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Pricing
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle className="size-8 rounded-full border-none shadow-none" />
              <Link
                href={routes.dashboard.auth.SignIn}
                className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }), 'h-8 rounded-full px-4')}
              >
                Log in
              </Link>
              <Link
                href={routes.dashboard.auth.SignUp}
                className={cn(buttonVariants({ variant: 'default', size: 'sm' }), 'h-8 rounded-full px-4')}
              >
                Sign up
              </Link>
            </div>
          </nav>
        </div>
      </section>
    );
  }

  // Default Mega Menu Variant
  return (
    <section className="sticky inset-x-0 top-0 z-40 border-b bg-background py-4">
      <div className="container">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-x-9">
            <Link href={routes.marketing.Index} className="flex items-center gap-2">
              <Logo />
            </Link>
            <div className="flex items-center">
              <NavigationMenu style={{ ['--radius' as string]: '1rem' }}>
                <NavigationMenuList>
                  {/* Product Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="rounded-xl text-[15px] font-normal">
                      Product
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ProductMegaMenu />
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Cases Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="rounded-xl text-[15px] font-normal">
                      Case Studies
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <CasesMegaMenu />
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Resources Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="rounded-xl text-[15px] font-normal">
                      Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ResourcesMegaMenu />
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Docs Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="rounded-xl text-[15px] font-normal">
                      Docs
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <DocsMegaMenu />
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Pricing - Direct Link */}
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={cn(navigationMenuTriggerStyle(), 'rounded-xl text-[15px] font-normal')}
                    >
                      <Link href="https://adapty.io/pricing/" target="_blank">
                        Pricing
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle className="rounded-xl border-none shadow-none" />
            <Link
              href={routes.dashboard.auth.SignIn}
              className={cn(buttonVariants({ variant: 'outline' }), 'rounded-xl')}
            >
              Sign in
            </Link>
            <Link
              href={routes.dashboard.auth.SignUp}
              className={cn(buttonVariants({ variant: 'default' }), 'rounded-xl')}
            >
              Start for free
            </Link>
          </div>
        </nav>
        <MobileMenu className="lg:hidden" />
      </div>
    </section>
  );
}
