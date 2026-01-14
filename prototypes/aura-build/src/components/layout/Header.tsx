"use client";

import Link from "next/link";
import Image from "next/image";
import { CaretDown, List } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { useState } from "react";
import {
  SchematicLine,
  ConnectionNode,
  BeamNoodle,
} from "@/components/ui/SchematicLine";

const navigation = {
  product: {
    label: "Product",
    items: [
      { name: "Subscriptions SDK", href: "#" },
      { name: "Paywall Builder", href: "#" },
      { name: "A/B Testing", href: "#" },
      { name: "Analytics", href: "#" },
      { name: "Integrations", href: "#" },
    ],
  },
  solutions: {
    label: "Solutions",
    items: [
      { name: "For Developers", href: "#" },
      { name: "For Marketers", href: "#" },
      { name: "For Enterprise", href: "#" },
    ],
  },
  resources: {
    label: "Resources",
    items: [
      { name: "Blog", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Case Studies", href: "#" },
    ],
  },
};

function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: { name: string; href: string }[];
}) {
  return (
    <div className="relative group h-20 flex items-center">
      <button className="flex items-center gap-1 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
        {label}
        <CaretDown size={14} weight="bold" />
      </button>
      <div
        className={cn(
          "absolute top-full left-0 w-56 bg-white border border-stone-200 rounded-xl shadow-xl p-2",
          "opacity-0 invisible group-hover:opacity-100 group-hover:visible",
          "transition-all duration-200 transform translate-y-2 group-hover:translate-y-0"
        )}
      >
        {/* Corner nodes on dropdown */}
        <div className="absolute top-1.5 left-1.5">
          <ConnectionNode size="xs" />
        </div>
        <div className="absolute top-1.5 right-1.5">
          <ConnectionNode size="xs" />
        </div>
        <div className="absolute bottom-1.5 left-1.5">
          <ConnectionNode size="xs" />
        </div>
        <div className="absolute bottom-1.5 right-1.5">
          <ConnectionNode size="xs" accent />
        </div>

        {items.map((item, index) => (
          <Link
            key={item.name}
            href={item.href}
            className="block px-3 py-2 text-sm text-stone-600 hover:bg-stone-50 hover:text-stone-900 rounded-lg transition-colors relative group/item"
          >
            {item.name}
            {/* Node on hover */}
            <div className="absolute -left-0.5 top-1/2 -translate-y-1/2 opacity-0 group-hover/item:opacity-100 transition-opacity">
              <ConnectionNode size="xs" accent={index === 0} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel">
      {/* ══════════════════════════════════════════════════════════════
         HEADER SCHEMATIC DECORATIONS
         ══════════════════════════════════════════════════════════════ */}

      {/* Bottom edge beam */}
      <div className="absolute bottom-0 left-24 right-24 hidden lg:block">
        <BeamNoodle direction="horizontal" length="100%" from="left" delay={0.5} />
      </div>

      {/* Left edge node */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 hidden lg:block">
        <ConnectionNode size="sm" />
      </div>

      {/* Right edge node */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 hidden lg:block">
        <ConnectionNode size="sm" accent />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 h-16 lg:h-20 flex items-center justify-between relative">
        {/* Logo - Full wordmark (197x52 native) */}
        <Link href="/" className="flex items-center group relative">
          <Image
            src="/logos/adapty-logo.svg"
            alt="Adapty"
            width={120}
            height={32}
            className="h-8 w-auto"
            priority
          />
          {/* Corner node on logo hover */}
          <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <ConnectionNode size="xs" accent />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-x-8 items-center relative">
          {/* Connection beam through nav */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
            <SchematicLine direction="horizontal" length="100%" noAnimation />
          </div>

          <NavDropdown {...navigation.product} />
          <NavDropdown {...navigation.solutions} />
          <NavDropdown {...navigation.resources} />
          <Link
            href="#"
            className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors relative group"
          >
            Pricing
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <ConnectionNode size="xs" />
            </div>
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors relative group"
          >
            Docs
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <ConnectionNode size="xs" accent />
            </div>
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4 relative">
          {/* Connection node before buttons */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden lg:block">
            <ConnectionNode size="sm" filled />
          </div>

          <Link
            href="#"
            className="hidden lg:block text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
          >
            Log in
          </Link>
          <Button variant="primary" size="md" beam>
            Sign up
          </Button>
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-stone-600 hover:text-stone-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <List size={24} weight="bold" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white/95 backdrop-blur-lg">
          <nav className="max-w-[1440px] mx-auto px-6 py-4 space-y-4">
            {Object.values(navigation).map((group) => (
              <div key={group.label}>
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
                  {group.label}
                </div>
                {group.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-stone-600 hover:text-stone-900"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-4 border-t border-stone-200 flex gap-4">
              <Link href="#" className="text-stone-600 hover:text-stone-900">
                Pricing
              </Link>
              <Link href="#" className="text-stone-600 hover:text-stone-900">
                Docs
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
