"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { List, X } from "@phosphor-icons/react";

const productItems = [
  {
    title: "Subscriptions SDK",
    description: "Integrate subscriptions in minutes with native SDKs",
    href: "/product/sdk",
  },
  {
    title: "Paywall Builder",
    description: "Design and deploy paywalls without code",
    href: "/product/paywall-builder",
  },
  {
    title: "A/B Testing",
    description: "Run experiments with statistical confidence",
    href: "/product/ab-testing",
  },
  {
    title: "Analytics",
    description: "Real-time insights into revenue and behavior",
    href: "/product/analytics",
  },
  {
    title: "Integrations",
    description: "Connect with your favorite tools",
    href: "/product/integrations",
  },
];

const solutionsItems = [
  {
    title: "For Developers",
    description: "Native SDKs, server-side API, webhook events",
    href: "/solutions/developers",
  },
  {
    title: "For Marketers",
    description: "No-code builder, A/B testing, audience targeting",
    href: "/solutions/marketers",
  },
  {
    title: "For App Owners",
    description: "Revenue analytics, cohort analysis, dashboards",
    href: "/solutions/app-owners",
  },
  {
    title: "For Indie",
    description: "Start free, scale as you grow",
    href: "/solutions/indie",
  },
  {
    title: "For Startups",
    description: "Move fast with proven infrastructure",
    href: "/solutions/startups",
  },
  {
    title: "For Enterprise",
    description: "Custom contracts, dedicated support, SLAs",
    href: "/solutions/enterprise",
  },
];

const resourcesItems = [
  {
    title: "Blog",
    description: "Latest insights on mobile subscriptions",
    href: "/blog",
  },
  {
    title: "Documentation",
    description: "Guides, API reference, and tutorials",
    href: "/docs",
  },
  {
    title: "Case Studies",
    description: "Success stories from our customers",
    href: "/case-studies",
  },
  {
    title: "Ebooks",
    description: "In-depth guides on subscription growth",
    href: "/ebooks",
  },
  {
    title: "Webinars",
    description: "Live sessions and recordings",
    href: "/webinars",
  },
  {
    title: "Community",
    description: "Connect with other app developers",
    href: "/community",
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        "border-b border-[var(--border-subtle)]",
        "bg-[var(--bg-primary)]/95 backdrop-blur-xl"
      )}
    >
      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/adapty-logo-black.svg"
              alt="Adapty"
              className="h-7 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              {/* Product Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent",
                    "text-[var(--text-secondary)]",
                    "hover:text-[var(--text-primary)]",
                    "hover:bg-[var(--bg-tertiary)]",
                    "data-[state=open]:bg-[var(--bg-tertiary)]",
                    "transition-all duration-[var(--duration-fast)]"
                  )}
                >
                  Product
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-[var(--card-radius)]">
                    {productItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Solutions Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent",
                    "text-[var(--text-secondary)]",
                    "hover:text-[var(--text-primary)]",
                    "hover:bg-[var(--bg-tertiary)]",
                    "data-[state=open]:bg-[var(--bg-tertiary)]",
                    "transition-all duration-[var(--duration-fast)]"
                  )}
                >
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-[var(--card-radius)]">
                    {solutionsItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resources Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    "bg-transparent",
                    "text-[var(--text-secondary)]",
                    "hover:text-[var(--text-primary)]",
                    "hover:bg-[var(--bg-tertiary)]",
                    "data-[state=open]:bg-[var(--bg-tertiary)]",
                    "transition-all duration-[var(--duration-fast)]"
                  )}
                >
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-[var(--card-radius)]">
                    {resourcesItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Pricing - No dropdown */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/pricing"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent",
                      "text-[var(--text-secondary)]",
                      "hover:text-[var(--text-primary)]",
                      "hover:bg-[var(--bg-tertiary)]"
                    )}
                  >
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Docs - No dropdown */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/docs"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent",
                      "text-[var(--text-secondary)]",
                      "hover:text-[var(--text-primary)]",
                      "hover:bg-[var(--bg-tertiary)]"
                    )}
                  >
                    Docs
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              className={cn(
                "text-[var(--text-secondary)]",
                "hover:text-[var(--text-primary)]",
                "hover:bg-[var(--bg-tertiary)]"
              )}
            >
              Log in
            </Button>
            <Button
              className={cn(
                "bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-hover)]",
                "text-white font-medium",
                "rounded-[var(--button-radius)]",
                "transition-all duration-[var(--duration-fast)]"
              )}
            >
              Start for free
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} weight="bold" />
            ) : (
              <List size={24} weight="bold" />
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[var(--border-subtle)]">
            <nav className="flex flex-col gap-4">
              <div className="space-y-2">
                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">
                  Product
                </p>
                {productItems.slice(0, 4).map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">
                  Solutions
                </p>
                {solutionsItems.slice(0, 4).map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">
                  Resources
                </p>
                {resourcesItems.slice(0, 4).map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-2 pt-4 border-t border-[var(--border-subtle)]">
                <Button
                  variant="outline"
                  className="btn-ghost w-full"
                >
                  Log in
                </Button>
                <Button
                  className={cn(
                    "w-full",
                    "bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-hover)]",
                    "text-white"
                  )}
                >
                  Start for free
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-lg p-3",
            "transition-colors duration-[var(--duration-fast)]",
            "hover:bg-[var(--bg-tertiary)]",
            "focus:bg-[var(--bg-tertiary)] focus:outline-none",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium text-[var(--text-primary)] leading-none mb-1.5">
            {title}
          </div>
          <p className="text-sm text-[var(--text-muted)] leading-snug line-clamp-2">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
