'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { routes } from '@workspace/routes';
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
// COMPACT DROPDOWN MENUS (for pill navbar)
// ============================================================================

function CompactDropdown({ links }: { links: MenuItem[] }) {
  return (
    <div className="w-48 p-2">
      <nav className="flex flex-col gap-0.5">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            target="_blank"
            className="rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent"
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}

// ============================================================================
// MAIN NAVBAR COMPONENT
// ============================================================================

export function Navbar(): React.JSX.Element {
  const pathname = usePathname();
  const headerVariant = useHeaderVariant();

  // Floating Pill Variant - with compact dropdowns
  if (headerVariant === 'simple') {
    return (
      <section className="fixed inset-x-0 top-4 z-40 px-4">
        <div className="mx-auto max-w-4xl rounded-full border bg-background/90 px-4 py-2 shadow-sm backdrop-blur-md">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2 pl-2">
              <Link href={routes.marketing.Index} className="flex items-center gap-2">
                <Logo className="h-5 w-auto" />
              </Link>
              <LanguageSwitcher className="h-7 px-1.5" />
            </div>

            <div className="hidden items-center lg:flex">
              <NavigationMenu>
                <NavigationMenuList className="gap-0">
                  {/* Product Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-8 rounded-full bg-transparent px-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground data-[state=open]:bg-accent">
                      Product
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <CompactDropdown links={COMPACT_PRODUCT_LINKS} />
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Cases Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-8 rounded-full bg-transparent px-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground data-[state=open]:bg-accent">
                      Cases
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <CompactDropdown links={COMPACT_CASES_LINKS} />
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Resources Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-8 rounded-full bg-transparent px-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground data-[state=open]:bg-accent">
                      Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <CompactDropdown links={COMPACT_RESOURCES_LINKS} />
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Docs Menu */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-8 rounded-full bg-transparent px-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground data-[state=open]:bg-accent">
                      Docs
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <CompactDropdown links={COMPACT_DOCS_LINKS} />
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
                        'h-8 rounded-full bg-transparent px-3 text-sm font-medium text-[#FF8A00] hover:bg-accent hover:text-[#FF8A00]/80'
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

            <div className="flex items-center gap-1.5 pr-1">
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
                        'rounded-xl text-[15px] font-medium text-[#FF8A00] hover:text-[#FF8A00]/80'
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
    </section>
  );
}
