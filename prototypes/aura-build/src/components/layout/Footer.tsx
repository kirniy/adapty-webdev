"use client";

import Link from "next/link";
import Image from "next/image";
import {
  GithubLogo,
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import {
  SchematicLine,
  ConnectionNode,
  BeamNoodle,
} from "@/components/ui/SchematicLine";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { name: "Subscriptions SDK", href: "#" },
      { name: "Paywall Builder", href: "#" },
      { name: "A/B Testing", href: "#" },
      { name: "Analytics", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Pricing", href: "#" },
    ],
  },
  solutions: {
    title: "Solutions",
    links: [
      { name: "For Developers", href: "#" },
      { name: "For Marketers", href: "#" },
      { name: "For App Owners", href: "#" },
      { name: "For Indie", href: "#" },
      { name: "For Startups", href: "#" },
      { name: "For Enterprise", href: "#" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Blog", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Ebooks", href: "#" },
      { name: "Webinars", href: "#" },
      { name: "Community", href: "#" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Partners", href: "#" },
    ],
  },
};

const socialLinks = [
  { name: "GitHub", href: "#", icon: GithubLogo },
  { name: "LinkedIn", href: "#", icon: LinkedinLogo },
  { name: "X", href: "#", icon: XLogo },
  { name: "YouTube", href: "#", icon: YoutubeLogo },
];

export function Footer() {
  return (
    <footer className="max-w-[1440px] mx-auto px-6 pb-12 pt-12 border-t border-stone-200 relative">
      {/* ══════════════════════════════════════════════════════════════
         FOOTER SCHEMATIC DECORATIONS
         ══════════════════════════════════════════════════════════════ */}

      {/* Left vertical rail */}
      <div className="absolute left-0 top-8 bottom-8 hidden lg:block">
        <SchematicLine direction="vertical" length="100%" withNode="both" delay={0.2} />
      </div>

      {/* Right vertical rail */}
      <div className="absolute right-0 top-8 bottom-8 hidden lg:block">
        <SchematicLine direction="vertical" length="100%" withNode="both" accent delay={0.3} />
      </div>

      {/* Top beam connector */}
      <div className="absolute top-4 left-12 right-12 hidden lg:block">
        <BeamNoodle direction="horizontal" length="100%" from="left" delay={0.5} />
      </div>

      {/* Logo and description */}
      <div className="mb-12 relative">
        <Link href="/" className="inline-block mb-4 relative group">
          <Image
            src="/logos/adapty-logo.svg"
            alt="Adapty"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
          {/* Corner node on logo hover */}
          <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <ConnectionNode size="xs" accent />
          </div>
        </Link>
        <p className="text-sm text-stone-500 max-w-sm">
          Revenue management platform for mobile apps with subscriptions.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16 relative">
        {/* Horizontal beam through columns */}
        <div className="absolute top-12 left-0 right-0 hidden lg:block">
          <SchematicLine direction="horizontal" length="100%" withNode="both" delay={0.6} />
        </div>

        {/* Link columns */}
        {Object.values(footerLinks).map((column, colIndex) => (
          <div key={column.title} className="space-y-4 relative group">
            {/* Column header node */}
            <div className="absolute -left-2 top-0.5 hidden lg:block">
              <ConnectionNode size="sm" accent={colIndex % 2 === 0} />
            </div>

            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
              {column.title}
            </h4>
            <ul className="space-y-3 text-sm text-stone-500">
              {column.links.map((link, linkIndex) => (
                <li key={link.name} className="relative group/link">
                  <Link
                    href={link.href}
                    className="hover:text-stone-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                  {/* Node on link hover */}
                  {linkIndex === 0 && (
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover/link:opacity-100 transition-opacity">
                      <ConnectionNode size="xs" accent />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social links */}
        <div className="col-span-2 lg:col-span-2 lg:text-right relative">
          {/* Connection node near social */}
          <div className="absolute -left-4 top-0 hidden lg:block">
            <ConnectionNode size="md" filled accent />
          </div>

          <div className="flex lg:justify-end gap-4 mb-4">
            {socialLinks.map((social, index) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-stone-400 hover:text-stone-900 transition-colors relative group"
                aria-label={social.name}
              >
                <social.icon size={20} weight="fill" />
                {/* Node on hover */}
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ConnectionNode size="xs" accent={index % 2 === 0} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-stone-400 pt-8 border-t border-stone-100 relative">
        {/* Beam through bottom bar */}
        <div className="absolute top-0 left-0 right-0 hidden lg:block">
          <BeamNoodle direction="horizontal" length="100%" from="right" delay={0.8} />
        </div>

        <p className="relative">
          © 2026 Adapty. All rights reserved.
          <span className="absolute -left-3 top-1/2 -translate-y-1/2 hidden lg:block">
            <ConnectionNode size="xs" />
          </span>
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-stone-900 transition-colors relative group">
            Privacy Policy
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <ConnectionNode size="xs" />
            </div>
          </Link>
          <Link href="#" className="hover:text-stone-900 transition-colors relative group">
            Terms of Service
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <ConnectionNode size="xs" accent />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
