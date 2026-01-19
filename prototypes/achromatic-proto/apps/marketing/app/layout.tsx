import '@workspace/ui/globals.css';

import * as React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import { APP_DESCRIPTION, APP_NAME } from '@workspace/common/app';
import { baseUrl } from '@workspace/routes';
import { Toaster } from '@workspace/ui/components/sonner';

import { ColorAccentApplier } from '~/components/color-accent-applier';
import { FooterSection } from '~/components/footer-section';
import { CookieBanner } from '~/components/fragments/cookie-banner';
import { Navbar } from '~/components/navbar';
import { DebugMenu } from '~/components/debug/DebugMenu';
import { Providers } from './providers';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl.Marketing),
  title: {
    default: `${APP_NAME} - In-App Subscription Infrastructure`,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: `${baseUrl.Marketing}/manifest`,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: APP_NAME,
    title: APP_NAME,
    description: APP_DESCRIPTION,
    url: baseUrl.Marketing,
    images: {
      url: `${baseUrl.Marketing}/og-image`,
      width: 1200,
      height: 630,
      alt: APP_NAME
    }
  },
  robots: {
    index: true,
    follow: true
  }
};

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({
  children
}: React.PropsWithChildren): Promise<React.JSX.Element> {
  return (
    <html
      lang="en"
      className="size-full min-h-screen"
      suppressHydrationWarning
    >
      <body className={`${inter.className} size-full`}>
        <Providers>
          <ColorAccentApplier />
          <div>
            <Navbar />
            {children}
            <FooterSection />
            <CookieBanner />
            <DebugMenu />
          </div>
          <React.Suspense>
            <Toaster />
          </React.Suspense>
        </Providers>
      </body>
    </html>
  );
}
