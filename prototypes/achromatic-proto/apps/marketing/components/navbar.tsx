'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';

import { routes } from '@workspace/routes';
import { Badge } from '@workspace/ui/components/badge';
import { buttonVariants } from '@workspace/ui/components/button';
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
import { ThemeToggle } from '@workspace/ui/components/theme-toggle';
import { cn } from '@workspace/ui/lib/utils';

import { MobileMenu } from '~/components/mobile-menu';
import { LanguageSwitcher } from '~/components/language-switcher';
import {
  ProductMegaMenu,
  CasesMegaMenu,
  ResourcesMegaMenu,
  DocsMegaMenu
} from '~/components/menus';
import {
  PRODUCT_TABS,
  PRODUCT_FOOTER,
  SOLUTION_ITEMS,
  SDK_ITEMS,
  INTEGRATIONS_ITEMS,
  CASES_MENU,
  RESOURCES_SECTIONS,
  DOCS_SIDEBAR,
  DOCS_MOBILE_SDKS,
  DOCS_WEB_PAYMENTS,
  DOCS_WEB_API,
  type MenuItem
} from '~/lib/menu-data';
import { useHeaderVariant } from '~/lib/debug-context';

// ============================================================================
// COMPACT MENU COMPONENTS (for simple/pill navbar)
// ============================================================================

function MenuIcon({ src, size = 18 }: { src: string; size?: number }) {
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

function CompactMenuItem({ item, compact = false }: { item: MenuItem; compact?: boolean }) {
  const isExternal = item.external || item.href.startsWith('http');

  if (compact) {
    return (
      <Link
        href={item.href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm transition-colors hover:bg-accent"
      >
        {item.icon && <MenuIcon src={item.icon} size={16} />}
        <span className="text-foreground">{item.title}</span>
        {item.badge && (
          <Badge variant="secondary" className="h-4 rounded-full px-1.5 text-[9px] font-semibold uppercase">
            {item.badge}
          </Badge>
        )}
      </Link>
    );
  }

  return (
    <Link
      href={item.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent"
    >
      {item.icon && (
        <div className="flex size-7 shrink-0 items-center justify-center rounded-lg border bg-background/80 shadow-sm">
          <MenuIcon src={item.icon} size={16} />
        </div>
      )}
      <div className="flex-1">
        <div className="flex items-center gap-1.5">
          <span className="font-medium text-foreground">{item.title}</span>
          {item.badge && (
            <Badge variant="secondary" className="h-4 rounded-full px-1.5 text-[9px] font-semibold uppercase">
              {item.badge}
            </Badge>
          )}
        </div>
        {item.description && (
          <p className="text-xs text-muted-foreground line-clamp-1">{item.description}</p>
        )}
      </div>
    </Link>
  );
}

function CompactSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="mb-1.5 px-2.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </div>
      {children}
    </div>
  );
}

// ============================================================================
// FULL-CONTENT COMPACT DROPDOWNS (content parity with mega menus)
// ============================================================================

function CompactProductDropdown() {
  return (
    <div className="max-h-[70vh] w-[520px] overflow-y-auto p-3">
      {/* Solution section */}
      <CompactSection title="Solutions">
        <div className="grid grid-cols-2 gap-0.5">
          {SOLUTION_ITEMS.map((item) => (
            <CompactMenuItem key={item.title} item={item} compact />
          ))}
        </div>
      </CompactSection>

      {/* Tech section */}
      <CompactSection title="Tech">
        <div className="grid grid-cols-2 gap-0.5">
          {PRODUCT_TABS.tech.items.map((item) => (
            <CompactMenuItem key={item.title} item={item} compact />
          ))}
        </div>
      </CompactSection>

      {/* Paywalls section */}
      <CompactSection title="Paywalls">
        <div className="grid grid-cols-2 gap-0.5">
          {PRODUCT_TABS.paywalls.items.map((item) => (
            <CompactMenuItem key={item.title} item={item} compact />
          ))}
        </div>
      </CompactSection>

      {/* Analytics section */}
      <CompactSection title="Analytics">
        <div className="grid grid-cols-2 gap-0.5">
          {PRODUCT_TABS.analytics.items.map((item) => (
            <CompactMenuItem key={item.title} item={item} compact />
          ))}
        </div>
      </CompactSection>

      {/* SDKs section */}
      <CompactSection title="SDKs">
        <div className="grid grid-cols-2 gap-0.5">
          {SDK_ITEMS.map((item) => (
            <CompactMenuItem key={item.title} item={item} compact />
          ))}
        </div>
      </CompactSection>

      {/* Integrations section */}
      <CompactSection title="Integrations">
        <div className="grid grid-cols-2 gap-0.5">
          {INTEGRATIONS_ITEMS.map((item) => (
            <CompactMenuItem key={item.title} item={item} compact />
          ))}
        </div>
      </CompactSection>

      {/* Footer links */}
      <div className="mt-3 flex items-center gap-3 border-t pt-3">
        {PRODUCT_FOOTER.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.title === 'System status' && (
              <span className="size-1.5 rounded-full bg-green-500" />
            )}
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

function CompactCasesDropdown() {
  return (
    <div className="max-h-[70vh] w-[400px] overflow-y-auto p-3">
      <CompactSection title="Customer Success Stories">
        <div className="grid grid-cols-2 gap-0.5">
          {CASES_MENU.map((study) => (
            <Link
              key={study.name}
              href={study.href}
              target="_blank"
              className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm transition-colors hover:bg-accent"
            >
              <span className="font-medium text-primary">{study.metric}</span>
              <span className="text-foreground">{study.name}</span>
            </Link>
          ))}
        </div>
      </CompactSection>
      <Link
        href="https://adapty.io/clients/"
        target="_blank"
        className="mt-2 flex items-center gap-1 px-2.5 text-xs font-medium text-primary transition-colors hover:text-primary/80"
      >
        View all case studies
        <ArrowRightIcon className="size-3" />
      </Link>
    </div>
  );
}

function CompactResourcesDropdown() {
  return (
    <div className="max-h-[70vh] w-[480px] overflow-y-auto p-3">
      <div className="grid grid-cols-2 gap-x-4">
        {RESOURCES_SECTIONS.map((section) => (
          <CompactSection key={section.title} title={section.title}>
            <div className="flex flex-col gap-0.5">
              {section.items.map((item) => (
                <CompactMenuItem key={item.title} item={item} compact />
              ))}
            </div>
          </CompactSection>
        ))}
      </div>
    </div>
  );
}

function CompactDocsDropdown() {
  return (
    <div className="max-h-[70vh] w-[400px] overflow-y-auto p-3">
      {/* Quick links */}
      <CompactSection title="Quick Links">
        <div className="flex flex-col gap-0.5">
          {DOCS_SIDEBAR.map((item) => (
            <CompactMenuItem key={item.title} item={item} compact />
          ))}
        </div>
      </CompactSection>

      {/* Mobile SDKs */}
      <CompactSection title="Mobile SDKs">
        <div className="grid grid-cols-2 gap-0.5">
          {DOCS_MOBILE_SDKS.map((item) => (
            <CompactMenuItem key={item.title} item={item} compact />
          ))}
        </div>
      </CompactSection>

      {/* Web */}
      <CompactSection title="Web">
        <div className="grid grid-cols-2 gap-0.5">
          {DOCS_WEB_PAYMENTS.map((item) => (
            <CompactMenuItem key={item.title} item={item} compact />
          ))}
          {DOCS_WEB_API.map((item) => (
            <CompactMenuItem key={item.title} item={item} compact />
          ))}
        </div>
      </CompactSection>

      <Link
        href="https://adapty.io/docs/"
        target="_blank"
        className="mt-2 flex items-center gap-1 px-2.5 text-xs font-medium text-primary transition-colors hover:text-primary/80"
      >
        View all documentation
        <ArrowRightIcon className="size-3" />
      </Link>
    </div>
  );
}

// ============================================================================
// FLOATING PILL NAVBAR (with scroll animation)
// ============================================================================

function FloatingPillNavbar(): React.JSX.Element {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-40 px-4 pt-4"
    >
      {/* Pill container - transparent until scrolled */}
      <div
        className={cn(
          'mx-auto max-w-5xl rounded-full px-4 py-2 transition-all duration-300',
          isScrolled
            ? 'border bg-background/95 shadow-lg backdrop-blur-xl'
            : 'bg-transparent'
        )}
      >
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3 pl-2">
            <Link href={routes.marketing.Index} className="flex items-center">
              <Logo className="h-6 w-auto" />
            </Link>
            <LanguageSwitcher className="h-6 px-1" />
          </div>

          <div className="hidden items-center lg:flex">
            <NavigationMenu>
              <NavigationMenuList className="gap-0">
                {/* Product Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-8 rounded-full bg-transparent px-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground data-[state=open]:bg-accent data-[state=open]:text-foreground">
                    Product
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <CompactProductDropdown />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Cases Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-8 rounded-full bg-transparent px-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground data-[state=open]:bg-accent data-[state=open]:text-foreground">
                    Cases
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <CompactCasesDropdown />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Resources Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-8 rounded-full bg-transparent px-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground data-[state=open]:bg-accent data-[state=open]:text-foreground">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <CompactResourcesDropdown />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Docs Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-8 rounded-full bg-transparent px-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground data-[state=open]:bg-accent data-[state=open]:text-foreground">
                    Docs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <CompactDocsDropdown />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                  {/* Pricing - Direct Link */}
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={cn(navigationMenuTriggerStyle(), 'h-8 rounded-full bg-transparent px-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground')}
                    >
                      <Link href="https://adapty.io/pricing/" target="_blank">
                        Pricing
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* web2app - Highlighted Link */}
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'h-8 rounded-full bg-transparent px-3 text-sm font-medium text-[#FF8A00] hover:bg-[#FF8A00]/10 hover:text-[#FF8A00]'
                      )}
                    >
                      <Link href="https://funnelfox.com/" target="_blank" rel="noopener noreferrer">
                        web2app
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Desktop CTA buttons - hidden on mobile */}
            <div className="hidden items-center gap-1.5 pr-1 lg:flex">
              <ThemeToggle className="size-7 rounded-full border-none shadow-none" />
              <Link
                href={routes.dashboard.auth.SignIn}
                className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }), 'h-7 rounded-full px-3 text-sm')}
              >
                Sign in
              </Link>
              <Link
                href={routes.dashboard.auth.SignUp}
                className={cn(buttonVariants({ variant: 'default', size: 'sm' }), 'h-7 rounded-full px-3 text-sm')}
              >
                Start for free
              </Link>
            </div>

            {/* Mobile menu button */}
            <MobileMenu className="lg:hidden" />
        </nav>
      </div>
    </motion.header>
  );
}

// ============================================================================
// DEFAULT MEGA MENU NAVBAR (sticky with border)
// ============================================================================

function DefaultMegaMenuNavbar(): React.JSX.Element {
  return (
    <header className="sticky inset-x-0 top-0 z-40 border-b bg-background py-4">
      <div className="container">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-x-9">
            <div className="flex items-center gap-4">
              <Link href={routes.marketing.Index} className="flex items-center gap-2">
                <Logo />
              </Link>
              <LanguageSwitcher />
            </div>
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

                  {/* web2app - Highlighted Link */}
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'rounded-xl text-[15px] font-medium text-[#FF8A00] hover:bg-[#FF8A00]/10 hover:text-[#FF8A00]'
                      )}
                    >
                      <Link href="https://funnelfox.com/" target="_blank" rel="noopener noreferrer">
                        web2app
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
    </header>
  );
}

// ============================================================================
// MAIN NAVBAR EXPORT (variant switcher)
// ============================================================================

export function Navbar(): React.JSX.Element {
  const headerVariant = useHeaderVariant();

  if (headerVariant === 'simple') {
    return <FloatingPillNavbar />;
  }

  return <DefaultMegaMenuNavbar />;
}
