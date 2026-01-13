"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { GithubLogo, LinkedinLogo, XLogo, YoutubeLogo } from "@phosphor-icons/react";

const footerLinks = {
  product: [
    { label: "Subscriptions SDK", href: "/product/sdk" },
    { label: "Paywall Builder", href: "/product/paywall-builder" },
    { label: "A/B Testing", href: "/product/ab-testing" },
    { label: "Analytics", href: "/product/analytics" },
    { label: "Integrations", href: "/product/integrations" },
    { label: "Pricing", href: "/pricing" },
  ],
  solutions: [
    { label: "For Developers", href: "/solutions/developers" },
    { label: "For Marketers", href: "/solutions/marketers" },
    { label: "For App Owners", href: "/solutions/app-owners" },
    { label: "For Indie", href: "/solutions/indie" },
    { label: "For Startups", href: "/solutions/startups" },
    { label: "For Enterprise", href: "/solutions/enterprise" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Documentation", href: "/docs" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Ebooks", href: "/ebooks" },
    { label: "Webinars", href: "/webinars" },
    { label: "Community", href: "/community" },
    { label: "Changelog", href: "/changelog" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Partners", href: "/partners" },
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
  ],
};

const socialLinks = [
  { icon: GithubLogo, href: "https://github.com/adaptyteam", label: "GitHub" },
  { icon: LinkedinLogo, href: "https://linkedin.com/company/adapty", label: "LinkedIn" },
  { icon: XLogo, href: "https://twitter.com/adapaborad", label: "Twitter" },
  { icon: YoutubeLogo, href: "https://youtube.com/@adapty", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]">
      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link
              href="/"
              className="inline-block hover:opacity-80 transition-opacity mb-4"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/adapty-logo-white.svg"
                alt="Adapty"
                className="h-6 w-auto"
              />
            </Link>
            <p className="text-sm text-[var(--text-muted)] mb-6">
              Revenue management for in-app purchases
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-[var(--text-muted)]",
                    "hover:text-[var(--text-primary)]",
                    "transition-colors duration-[var(--duration-fast)]"
                  )}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4 tracking-wide uppercase">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm text-[var(--text-muted)]",
                      "hover:text-[var(--text-primary)]",
                      "transition-colors duration-[var(--duration-fast)]"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4 tracking-wide uppercase">
              Solutions
            </h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm text-[var(--text-muted)]",
                      "hover:text-[var(--text-primary)]",
                      "transition-colors duration-[var(--duration-fast)]"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4 tracking-wide uppercase">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm text-[var(--text-muted)]",
                      "hover:text-[var(--text-primary)]",
                      "transition-colors duration-[var(--duration-fast)]"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4 tracking-wide uppercase">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm text-[var(--text-muted)]",
                      "hover:text-[var(--text-primary)]",
                      "transition-colors duration-[var(--duration-fast)]"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-[var(--border-subtle)]" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--text-muted)]">
            © 2026 Adapty. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/terms"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
