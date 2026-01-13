"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "~/components/ui/Button";
import { Container } from "~/components/ui/Container";
import { useTheme } from "next-themes";
import { cn } from "~/lib/utils";
import { Calendar } from "lucide-react";

export function Header() {
  const { theme } = useTheme();
  const ds = (theme && theme.startsWith("ds") ? theme : "ds5") as "ds1" | "ds2" | "ds3" | "ds4" | "ds5";
  const isDS2 = ds === "ds2";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]/80 backdrop-blur-xl transition-all duration-300">
      <Container>
        <div className={cn("flex items-center justify-between transition-all duration-300", isDS2 ? "h-[var(--header-height)]" : "h-16")}>
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
          <nav className="hidden items-center gap-1 md:flex">
            {["Product", "Pricing", "Resources", "Docs"].map((item) => (
              <Link
                key={item}
                href="#"
                className={cn(
                  "text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]",
                  // DS2: Pill hover effect
                  isDS2 ? "px-3 py-2 rounded-md hover:bg-[rgba(0,0,0,0.04)]" : "px-2"
                )}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            {isDS2 ? (
              // DS2 (Attio-Specific): Text Link + Secondary Pill + Primary with Icon
              <>
                <Link href="#" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-2">
                  Log in
                </Link>
                <div className="flex items-center gap-2">
                  <Button variant="secondary" size="sm" href="#" className="!rounded-[12px] !border-[var(--border-strong)] !bg-white !text-black shadow-sm hover:!bg-gray-50">
                    Sign up
                    <span className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-gray-100 text-[10px] text-gray-500">+</span>
                  </Button>
                  <Button size="sm" href="#" className="!rounded-[12px] !pl-4 !pr-2 !bg-[#0e1016] !text-white hover:!bg-black shadow-md flex items-center gap-2">
                    Contact sales
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black">
                      <Calendar size={14} />
                    </div>
                  </Button>
                </div>
              </>
            ) : (
              // Default (Other DS)
              <>
                <Button variant="ghost" size="sm" href="#">
                  Sign in
                </Button>
                <Button size="sm" href="#">
                  Start for free
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}
