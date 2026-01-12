import "~/styles/globals.css";

import { type Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "~/components/ThemeProvider";
import { ThemeSwitcher } from "~/components/ThemeSwitcher";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adapty - Revenue Management for In-App Purchases",
  description:
    "Save months on integrating subscriptions. Build, analyze, and grow in-app purchases with Adapty's complete mobile subscription infrastructure.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Adapty - Revenue Management for In-App Purchases",
    description:
      "Save months on integrating subscriptions. Build, analyze, and grow in-app purchases.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent FOUC by setting theme before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const urlParams = new URLSearchParams(window.location.search);
                  const dsParam = urlParams.get('ds');
                  const stored = localStorage.getItem('theme');
                  const theme = dsParam || stored || 'ds5';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--bg-primary)] font-sans antialiased">
        <ThemeProvider>
          <Suspense fallback={null}>
            <ThemeSwitcher />
          </Suspense>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
