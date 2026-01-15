import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adapty - Revenue Management for In-App Purchases",
  description:
    "Save months on integrating subscriptions and double your app revenue with paywall management. Trusted by 15,000+ apps worldwide.",
  keywords: [
    "in-app purchases",
    "subscription management",
    "paywall",
    "A/B testing",
    "mobile app monetization",
  ],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-dvh overflow-x-hidden bg-stone-50 font-sans text-stone-900 antialiased selection:bg-brand-lime selection:text-black">
        {/* Global animated grid background */}
        <div className="fixed inset-0 pointer-events-none">
          <AnimatedBackground className="w-full h-full" />
        </div>

        {/* Main content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
