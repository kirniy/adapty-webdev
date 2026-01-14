import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import { Instrument_Serif } from "next/font/google";
import { SchematicGrid } from "@/components/ui/SchematicGrid";
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
      <body className="min-h-screen overflow-x-hidden bg-stone-50 font-sans text-stone-900 antialiased selection:bg-[#c1ff72] selection:text-black">
        {/* Base Grid Texture */}
        <div className="pointer-events-none fixed inset-0 z-0 grid-lines opacity-40" />

        {/* Global Schematic System - High-Z to overlay sections nicely or Low-Z? 
            Let's keep it fixed in background but with random beams.
            Using a high column count for "intricate" look.
        */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <SchematicGrid cols={12} rows={8} opacity={0.04} />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
