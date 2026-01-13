import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adapty | Revenue management for in-app purchases",
  description:
    "Save months on integrating subscriptions and double your app revenue with paywall management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {/* Noise texture overlay for Linear-style depth */}
        <div className="noise-texture" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
