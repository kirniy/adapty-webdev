import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // CRITICAL: Optimize barrel file imports for faster dev/build/cold starts
  // See: https://vercel.com/blog/how-we-optimized-package-imports-in-next-js
  experimental: {
    optimizePackageImports: [
      "motion/react",
      "@phosphor-icons/react",
      "@phosphor-icons/react/dist/ssr",
    ],
  },
};

export default nextConfig;
