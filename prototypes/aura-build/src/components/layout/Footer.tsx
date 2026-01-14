"use client";

import Link from "next/link";
import Image from "next/image";
import {
  GithubLogo,
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
  DiscordLogo,
} from "@phosphor-icons/react/dist/ssr";

const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { name: "Paywall Builder", href: "/paywall-builder" },
      { name: "A/B Testing", href: "/ab-testing" },
      { name: "Analytics", href: "/analytics" },
      { name: "Integrations", href: "/integrations" },
      { name: "SDKs", href: "/docs/sdks" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Community", href: "/community" },
      { name: "Help Center", href: "/help" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
];

const SOCIAL_LINKS = [
  { name: "Twitter", href: "#", icon: XLogo },
  { name: "GitHub", href: "https://github.com/adaptyteam", icon: GithubLogo },
  { name: "LinkedIn", href: "#", icon: LinkedinLogo },
  { name: "Discord", href: "#", icon: DiscordLogo },
  { name: "YouTube", href: "#", icon: YoutubeLogo },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200 pt-20 pb-12">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="mb-6 block">
              <Image
                src="/logos/adapty-logo.svg"
                alt="Adapty"
                width={120}
                height={28}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-stone-500 leading-relaxed mb-8 max-w-sm text-sm">
              Grow your mobile app subscription revenue with data-driven insights, A/B testing, and paywall management.
            </p>

            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 hover:bg-stone-900 hover:text-white transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon size={16} weight="fill" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-2 md:col-span-8 lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {FOOTER_LINKS.map((group) => (
              <div key={group.title}>
                <h4 className="font-semibold text-stone-900 mb-5 text-sm">{group.title}</h4>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-stone-500 hover:text-stone-900 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-400">
          <span>© {new Date().getFullYear()} Adapty Tech Inc. All rights reserved.</span>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy" className="hover:text-stone-900 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-stone-900 transition-colors">
              Terms
            </Link>
            <Link href="/sitemap" className="hover:text-stone-900 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
