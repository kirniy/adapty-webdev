"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  TwitterLogo,
  LinkedinLogo,
  GithubLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

const footerLinks = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Integrations", href: "/integrations" },
    { label: "Changelog", href: "/changelog" },
    { label: "Roadmap", href: "/roadmap" },
  ],
  developers: [
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/api" },
    { label: "SDKs", href: "/sdks" },
    { label: "Status", href: "/status" },
    { label: "GitHub", href: "https://github.com/adaptyteam" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Guides", href: "/guides" },
    { label: "Webinars", href: "/webinars" },
    { label: "Community", href: "/community" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Press", href: "/press" },
    { label: "Partners", href: "/partners" },
  ],
};

const socialLinks = [
  { icon: TwitterLogo, href: "https://twitter.com/adapaboreal", label: "Twitter" },
  { icon: LinkedinLogo, href: "https://linkedin.com/company/adapty", label: "LinkedIn" },
  { icon: GithubLogo, href: "https://github.com/adaptyteam", label: "GitHub" },
  { icon: YoutubeLogo, href: "https://youtube.com/@adapty", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="relative py-16 md:py-20 bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column - DS2 editorial style */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link href="/" className="inline-block mb-6">
              <span className="text-xl font-semibold text-[var(--text-primary)] tracking-[var(--letter-spacing-tight)]">
                Adapty
              </span>
            </Link>
            <p className="body-attio text-sm text-[var(--text-secondary)] mb-6 max-w-xs">
              The subscription infrastructure for mobile apps. Ship faster, grow revenue.
            </p>

            {/* Social links - DS2 subtle icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-2 rounded-md",
                    "text-[var(--text-muted)]",
                    "hover:text-[var(--text-primary)]",
                    "hover:bg-[var(--bg-tertiary)]",
                    "transition-all duration-[var(--duration-fast)]"
                  )}
                  aria-label={social.label}
                >
                  <social.icon size={20} weight="regular" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-medium text-[var(--text-primary)] uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm text-[var(--text-secondary)]",
                        "hover:text-[var(--color-accent)]",
                        "transition-colors duration-[var(--duration-fast)]"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar - DS2 subtle separator */}
        <div className="mt-16 pt-8 border-t border-[var(--border-subtle)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--text-muted)] body-attio">
              &copy; {new Date().getFullYear()} Adapty. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-[var(--text-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-[var(--text-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/security"
                className="text-sm text-[var(--text-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
