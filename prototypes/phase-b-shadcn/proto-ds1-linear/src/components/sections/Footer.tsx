"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { GithubLogo, LinkedinLogo, XLogo, YoutubeLogo } from "@phosphor-icons/react";
import { linearEasing, transition, staggerContainer } from "@/lib/animations";

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
  { icon: XLogo, href: "https://twitter.com/adaptyio", label: "Twitter" },
  { icon: YoutubeLogo, href: "https://youtube.com/@adapty", label: "YouTube" },
];

export function Footer() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]">
      <div className="mx-auto max-w-[var(--container-max-width)] px-6 md:px-12 lg:px-16 py-16">
        {/* Main Footer Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Brand Column */}
          <motion.div
            className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: linearEasing.dramatic },
              },
            }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={transition.snappy}
            >
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
            </motion.div>
            <p className="text-sm text-[var(--text-muted)] mb-6">
              Revenue management for in-app purchases
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
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
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={transition.snappy}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links], colIndex) => (
            <motion.div
              key={category}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.4,
                    delay: (colIndex + 1) * 0.1,
                    ease: linearEasing.snappy,
                  },
                },
              }}
            >
              <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4 tracking-wide uppercase">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{
                      delay: 0.3 + colIndex * 0.1 + linkIndex * 0.03,
                      duration: 0.3,
                    }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm text-[var(--text-muted)]",
                        "hover:text-[var(--text-primary)]",
                        "hover:translate-x-1",
                        "transition-all duration-[var(--duration-fast)]",
                        "inline-block"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: linearEasing.dramatic }}
        >
          <Separator className="my-8 bg-[var(--border-subtle)]" />
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          <p className="text-sm text-[var(--text-muted)]">
            2026 Adapty. All rights reserved.
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
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
