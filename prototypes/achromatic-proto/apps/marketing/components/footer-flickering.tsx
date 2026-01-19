'use client';

import * as React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

import { Logo } from '@workspace/ui/components/logo';
import { FlickeringGrid, useMediaQuery } from '@workspace/ui/components/flickering-footer';

import { FOOTER_LINKS, SOCIAL_LINKS } from '~/components/marketing-links';

export function FlickeringFooter(): React.JSX.Element {
  const tablet = useMediaQuery('(max-width: 1024px)');

  return (
    <footer id="footer" className="w-full pb-0">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between p-10">
        {/* Left side - Logo, description, compliance badges */}
        <div className="flex flex-col items-start justify-start gap-y-5 max-w-xs mx-0">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>
          <p className="tracking-tight text-muted-foreground font-medium">
            Revenue management for in-app purchases. Save months on integrating subscriptions.
          </p>
          {/* Social links */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.name}
                title={link.name}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{link.name}</span>
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Right side - Link columns */}
        <div className="pt-5 md:pt-0 md:w-2/3">
          <div className="flex flex-col items-start justify-start md:flex-row md:items-start md:justify-between gap-y-5 lg:pl-10">
            {FOOTER_LINKS.map((column) => (
              <ul key={column.title} className="flex flex-col gap-y-2">
                <li className="mb-2 text-sm font-semibold text-foreground">
                  {column.title}
                </li>
                {column.links.map((link) => (
                  <li
                    key={link.name}
                    className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug text-muted-foreground"
                  >
                    <Link
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                    >
                      {link.name}
                    </Link>
                    <div className="flex size-4 items-center justify-center border border-border rounded translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* Flickering grid visual with brand text */}
      <div className="w-full h-48 md:h-64 relative mt-24 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-background z-10 from-40%" />
        <div className="absolute inset-0 mx-6">
          <FlickeringGrid
            text={tablet ? 'Adapty' : 'Adapty'}
            fontSize={tablet ? 70 : 90}
            className="h-full w-full"
            squareSize={2}
            gridGap={tablet ? 2 : 3}
            color="#6B7280"
            maxOpacity={0.3}
            flickerChance={0.1}
          />
        </div>
      </div>
    </footer>
  );
}
