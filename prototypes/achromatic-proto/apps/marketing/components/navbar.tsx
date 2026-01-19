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
  COMPACT_PRODUCT_LINKS,
  COMPACT_CASES_LINKS,
  COMPACT_RESOURCES_LINKS,
  COMPACT_DOCS_LINKS,
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

function CompactMenuItem({ item }: { item: MenuItem }) {
  const isExternal = item.external || item.href.startsWith('http');

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

function CompactDropdown({
  links,
  title,
  viewAllHref,
  columns = 1
}: {
  links: MenuItem[];
  title?: string;
  viewAllHref?: string;
  columns?: 1 | 2;
}) {
  return (
    <div className={cn('p-2', columns === 2 ? 'w-[400px]' : 'w-56')}>
      {title && (
        <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </div>
      )}
      <nav className={cn(
        'flex flex-col gap-0.5',
        columns === 2 && 'grid grid-cols-2 gap-0.5'
      )}>
        {links.map((link) => (
          <CompactMenuItem key={link.title} item={link} />
        ))}
      </nav>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          target="_blank"
          className="mt-2 flex items-center gap-1 px-3 py-2 text-xs font-medium text-primary transition-colors hover:text-primary/80"
        >
          View all
          <ArrowRightIcon className="size-3" />
        </Link>
      )}
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
                    <CompactDropdown
                      links={COMPACT_PRODUCT_LINKS}
                      viewAllHref="https://adapty.io/product/"
                      columns={2}
                    />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Cases Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-8 rounded-full bg-transparent px-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground data-[state=open]:bg-accent data-[state=open]:text-foreground">
                    Cases
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <CompactDropdown
                      links={COMPACT_CASES_LINKS}
                      viewAllHref="https://adapty.io/clients/"
                    />
                  </NavigationMenuContent>
                </NavigationMenuItem>

                  {/* Resources Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-8 rounded-full bg-transparent px-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground data-[state=open]:bg-accent data-[state=open]:text-foreground">
                      Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <CompactDropdown
                        links={COMPACT_RESOURCES_LINKS}
                        columns={2}
                      />
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Docs Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-8 rounded-full bg-transparent px-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground data-[state=open]:bg-accent data-[state=open]:text-foreground">
                      Docs
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <CompactDropdown
                        links={COMPACT_DOCS_LINKS}
                        viewAllHref="https://adapty.io/docs/"
                      />
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
