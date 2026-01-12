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

  // Fixed dark theme colors for the switcher (works on any background)
  const switcherStyles = {
    bg: "rgba(24, 24, 27, 0.95)",
    bgHover: "rgba(39, 39, 42, 0.95)",
    border: "rgba(63, 63, 70, 0.8)",
    text: "#fafafa",
    textMuted: "#a1a1aa",
    accent: "#8b5cf6",
    accentBg: "rgba(139, 92, 246, 0.15)",
  };

  if (!mounted) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <div
          className="h-10 w-32 animate-pulse rounded-lg"
          style={{ backgroundColor: switcherStyles.bg }}
        />
      </div>
    );
  }

  const currentTheme = dsThemes.find((t) => t.id === theme) ?? dsThemes[4];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button - Fixed dark style */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium shadow-lg backdrop-blur-sm transition-all duration-150 hover:scale-[1.02]"
        style={{
          backgroundColor: switcherStyles.bg,
          border: `1px solid ${switcherStyles.border}`,
          color: switcherStyles.text,
        }}
      >
        <span
          className="flex h-3 w-3 rounded-full"
          style={{ backgroundColor: switcherStyles.accent }}
        />
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

      {/* Dropdown - Fixed dark style */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <div
            className="absolute right-0 bottom-full z-50 mb-2 w-64 origin-bottom-right animate-scale-in overflow-hidden rounded-xl shadow-2xl backdrop-blur-sm"
            style={{
              backgroundColor: switcherStyles.bg,
              border: `1px solid ${switcherStyles.border}`,
            }}
          >
            <div className="p-1">
              {dsThemes.map((ds) => (
                <button
                  key={ds.id}
                  onClick={() => handleThemeChange(ds.id)}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors duration-150"
                  style={{
                    backgroundColor: theme === ds.id ? switcherStyles.accentBg : "transparent",
                    color: theme === ds.id ? switcherStyles.accent : switcherStyles.text,
                  }}
                  onMouseEnter={(e) => {
                    if (theme !== ds.id) {
                      e.currentTarget.style.backgroundColor = switcherStyles.bgHover;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (theme !== ds.id) {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  <span
                    className="flex h-2.5 w-2.5 rounded-full"
                    style={{
                      backgroundColor: theme === ds.id ? switcherStyles.accent : switcherStyles.textMuted,
                    }}
                  />
                  <div className="flex-1">
                    <div className="font-medium">{ds.name}</div>
                    <div
                      className="text-xs"
                      style={{ color: switcherStyles.textMuted }}
                    >
                      {ds.description}
                    </div>
                  </div>
                  {theme === ds.id && (
                    <svg
                      className="h-4 w-4"
                      style={{ color: switcherStyles.accent }}
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
            <div
              className="px-3 py-2"
              style={{
                borderTop: `1px solid ${switcherStyles.border}`,
                backgroundColor: "rgba(0, 0, 0, 0.2)",
              }}
            >
              <div
                className="text-xs"
                style={{ color: switcherStyles.textMuted }}
              >
                Direct link: <code
                  className="rounded px-1.5 py-0.5 font-mono"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >?ds={theme}</code>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
