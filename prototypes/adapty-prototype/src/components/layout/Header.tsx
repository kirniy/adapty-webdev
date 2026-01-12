"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "~/components/ui/Button";
import { Container } from "~/components/ui/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.svg"
              alt="Adapty"
              width={100}
              height={28}
              className="h-7 w-auto"
            />
          </Link>

          {/* Nav Links */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#"
              className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              Product
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              Resources
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              Docs
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" href="#">
              Sign in
            </Button>
            <Button size="sm" href="#">
              Start for free
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
