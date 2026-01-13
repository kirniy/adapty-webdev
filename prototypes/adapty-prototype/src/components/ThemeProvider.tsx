"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ReactNode } from "react";

export const dsThemes = [
  { id: "ds1", name: "Linear", description: "Dark, premium micro-interactions" },
  { id: "ds2", name: "Attio", description: "Light, editorial typography" },
  { id: "ds3", name: "Polar", description: "Dark, minimal, fast" },
  { id: "ds4", name: "Vercel", description: "True black, bold gradients" },
  { id: "ds5", name: "Clerk", description: "Warm light, pill buttons, purple accent" },
] as const;

export type DSTheme = (typeof dsThemes)[number]["id"];

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: DSTheme;
}

export function ThemeProvider({
  children,
  defaultTheme = "ds2",
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme={defaultTheme}
      themes={dsThemes.map((t) => t.id)}
      enableSystem={false}
      disableTransitionOnChange={true} // Prevent visual glitches during theme switch
      storageKey="adapty-ds-theme"
    >
      {children}
    </NextThemesProvider>
  );
}
