"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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
import {
  transition,
  hoverScale,
  tapScale,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

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
  const { scrollY } = useScroll();

  // Smooth animated values for scroll-based transitions
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(8, 9, 10, 0)", "rgba(8, 9, 10, 0.85)"]
  );

  const headerBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(20px)"]
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 50],
    [0, 0.06]
  );

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: headerBg,
        backdropFilter: headerBlur,
        WebkitBackdropFilter: headerBlur,
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.19, 1, 0.22, 1],
      }}
    >
      {/* Animated border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-white"
        style={{ opacity: borderOpacity }}
      />

      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo with hover animation */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={transition.spring}
          >
            <Link
              href="/"
              className="flex items-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/adapty-logo-white.svg"
                alt="Adapty"
                className="h-7 w-auto"
              />
            </Link>
          </motion.div>

          {/* Main Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              {/* Product Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] data-[state=open]:bg-[var(--bg-tertiary)]">
                  Product
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <motion.ul
                    className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {productItems.map((item, index) => (
                      <motion.div key={item.title} variants={staggerItem}>
                        <ListItem
                          title={item.title}
                          href={item.href}
                        >
                          {item.description}
                        </ListItem>
                      </motion.div>
                    ))}
                  </motion.ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Solutions Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] data-[state=open]:bg-[var(--bg-tertiary)]">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <motion.ul
                    className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {solutionsItems.map((item) => (
                      <motion.div key={item.title} variants={staggerItem}>
                        <ListItem
                          title={item.title}
                          href={item.href}
                        >
                          {item.description}
                        </ListItem>
                      </motion.div>
                    ))}
                  </motion.ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resources Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] data-[state=open]:bg-[var(--bg-tertiary)]">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <motion.ul
                    className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {resourcesItems.map((item) => (
                      <motion.div key={item.title} variants={staggerItem}>
                        <ListItem
                          title={item.title}
                          href={item.href}
                        >
                          {item.description}
                        </ListItem>
                      </motion.div>
                    ))}
                  </motion.ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Pricing */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/pricing"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]"
                    )}
                  >
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Docs */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/docs"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]"
                    )}
                  >
                    Docs
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={transition.spring}
            >
              <Button
                variant="ghost"
                className="hidden sm:inline-flex text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]"
              >
                Log in
              </Button>
            </motion.div>
            <motion.div
              whileHover={hoverScale}
              whileTap={tapScale}
            >
              <Button
                className={cn(
                  "bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)]",
                  "text-white font-medium",
                  "rounded-[var(--button-radius)]",
                  "transition-colors duration-[var(--duration-normal)]",
                  "shadow-[0_0_15px_rgba(94,106,210,0.3)]",
                  "hover:shadow-[0_0_25px_rgba(94,106,210,0.5)]"
                )}
              >
                Sign up
              </Button>
            </motion.div>
          </div>
        </nav>
      </div>
    </motion.header>
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
            "transition-all duration-[var(--duration-fast)]",
            "hover:bg-[var(--bg-elevated)] hover:translate-x-1",
            "focus:bg-[var(--bg-elevated)] focus:outline-none",
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
