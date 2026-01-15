import type { Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import { PageFrame } from '@/components/layout/PageFrame'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Adapty - In-App Subscription Infrastructure',
  description:
    'The complete toolkit for mobile app monetization. Build paywalls, run A/B tests, and track subscription analytics without code.',
  keywords: [
    'mobile app monetization',
    'in-app subscriptions',
    'paywall builder',
    'subscription analytics',
    'A/B testing',
    'iOS subscriptions',
    'Android subscriptions',
  ],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Adapty - In-App Subscription Infrastructure',
    description:
      'The complete toolkit for mobile app monetization. Build paywalls, run A/B tests, and track subscription analytics without code.',
    url: 'https://adapty.io',
    siteName: 'Adapty',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adapty - In-App Subscription Infrastructure',
    description:
      'The complete toolkit for mobile app monetization.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="min-h-screen bg-olive-100 font-sans antialiased">
        <PageFrame>{children}</PageFrame>
      </body>
    </html>
  )
}
