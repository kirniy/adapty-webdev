import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable} scroll-smooth`}
    >
      <body className="min-h-dvh overflow-x-hidden bg-stone-50 font-sans text-stone-900 antialiased selection:bg-brand-lime selection:text-black">
        {/* Main Content - Clean background, no competing grids */}
        <div className="relative flex flex-col min-h-dvh">
          {children}
        </div>
      </body>
    </html>
  );
}
