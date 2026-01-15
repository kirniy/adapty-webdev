import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'adapty.io',
      },
    ],
  },
  // Optimize barrel imports - transforms to direct imports at build time
  // Reduces bundle size and improves cold start performance
  experimental: {
    optimizePackageImports: [
      'motion/react',
      'clsx',
      'tailwind-merge',
    ],
  },
}

export default nextConfig
