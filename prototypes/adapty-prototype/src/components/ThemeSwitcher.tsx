"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { dsThemes, type DSTheme } from "./ThemeProvider";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  // Handle URL query param on mount
  useEffect(() => {
    setMounted(true);
    const dsParam = searchParams.get("ds");
    if (dsParam && dsThemes.some((t) => t.id === dsParam)) {
      setTheme(dsParam);
    }
  }, [searchParams, setTheme]);

  // Update URL when theme changes
  const handleThemeChange = (newTheme: DSTheme) => {
    setTheme(newTheme);
    const url = new URL(window.location.href);
    url.searchParams.set("ds", newTheme);
    router.replace(url.pathname + url.search, { scroll: false });
    setIsOpen(false);
  };

  if (!mounted) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <div className="h-10 w-32 animate-pulse rounded-lg bg-[var(--bg-secondary)]" />
      </div>
    );
  }

  const currentTheme = dsThemes.find((t) => t.id === theme) ?? dsThemes[4];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg border border-[var(--border-default)] bg-[var(--bg-secondary)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] shadow-[var(--shadow-md)] transition-all duration-[var(--duration-fast)] hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-lg)]"
        style={{
          transition: `all var(--duration-fast) var(--ease-bounce)`,
        }}
      >
        <span className="flex h-3 w-3 rounded-full bg-[var(--color-primary)]" />
        <span>{currentTheme.name}</span>
        <svg
          className={`h-4 w-4 transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <div
            className="absolute right-0 bottom-full z-50 mb-2 w-64 origin-bottom-right animate-scale-in overflow-hidden rounded-xl border border-[var(--border-default)] bg-[var(--bg-secondary)] shadow-[var(--shadow-xl)]"
          >
            <div className="p-1">
              {dsThemes.map((ds) => (
                <button
                  key={ds.id}
                  onClick={() => handleThemeChange(ds.id)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors duration-[var(--duration-fast)] ${
                    theme === ds.id
                      ? "bg-[var(--color-primary-light)] text-[var(--color-primary)]"
                      : "text-[var(--text-primary)] hover:bg-[var(--bg-muted)]"
                  }`}
                >
                  <span
                    className={`flex h-2.5 w-2.5 rounded-full ${
                      theme === ds.id
                        ? "bg-[var(--color-primary)]"
                        : "bg-[var(--text-muted)]"
                    }`}
                  />
                  <div className="flex-1">
                    <div className="font-medium">{ds.name}</div>
                    <div className="text-xs text-[var(--text-muted)]">
                      {ds.description}
                    </div>
                  </div>
                  {theme === ds.id && (
                    <svg
                      className="h-4 w-4 text-[var(--color-primary)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>

            {/* Footer with keyboard hint */}
            <div className="border-t border-[var(--border-subtle)] bg-[var(--bg-muted)] px-3 py-2">
              <div className="text-xs text-[var(--text-muted)]">
                Direct link: <code className="rounded bg-[var(--bg-tertiary)] px-1.5 py-0.5 font-mono">?ds={theme}</code>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
