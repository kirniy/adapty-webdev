import "~/styles/globals.css";

import { type Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk, Playfair_Display, Geist, Geist_Mono } from "next/font/google";
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

// DS2 (Attio): Serif font for emphasis headlines
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// DS3 (Polar) & DS4 (Vercel): Geist fonts
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Adapty - Revenue Management for In-App Purchases",
    template: "%s | Adapty",
  },
  description:
    "Save months on integrating subscriptions. Build, analyze, and grow in-app purchases with Adapty's complete mobile subscription infrastructure.",
  keywords: [
    "in-app purchases",
    "mobile subscriptions",
    "subscription analytics",
    "paywall builder",
    "A/B testing",
    "revenue management",
    "iOS subscriptions",
    "Android subscriptions",
    "StoreKit",
    "Google Play Billing",
  ],
  authors: [{ name: "Adapty", url: "https://adapty.io" }],
  creator: "Adapty",
  publisher: "Adapty",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Adapty - Revenue Management for In-App Purchases",
    description:
      "Save months on integrating subscriptions. Build, analyze, and grow in-app purchases with Adapty's complete mobile subscription infrastructure.",
    url: "https://adapty.io",
    siteName: "Adapty",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adapty - Mobile Subscription Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adapty - Revenue Management for In-App Purchases",
    description:
      "Save months on integrating subscriptions. Build, analyze, and grow in-app purchases.",
    creator: "@adapaborvk",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://adapty.io"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} ${playfairDisplay.variable} ${geistSans.variable} ${geistMono.variable}`}
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
      <body className="min-h-screen bg-[var(--bg-primary)] font-sans antialiased" suppressHydrationWarning>
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
