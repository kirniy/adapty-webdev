'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const pageCategories = {
  'Home Pages (3)': [
    { name: 'Home 01', path: '/home-01', desc: 'Left-aligned hero with demo, features, stats, testimonials, FAQ, pricing, CTA' },
    { name: 'Home 02', path: '/home-02', desc: 'Centered hero with photo background, three-column features, testimonial grid' },
    { name: 'Home 03', path: '/home-03', desc: 'Two-column hero with photo, alternating features, large quote testimonial' },
  ],
  'About Pages (3)': [
    { name: 'About 01', path: '/about-01', desc: 'Company story with team grid, stats, and testimonials' },
    { name: 'About 02', path: '/about-02', desc: 'Stats-focused with four-column team grid' },
    { name: 'About 03', path: '/about-03', desc: 'Photo-heavy with two-column testimonial' },
  ],
  'Pricing Pages (3)': [
    { name: 'Pricing 01', path: '/pricing-01', desc: 'Multi-tier pricing with comparison table' },
    { name: 'Pricing 02', path: '/pricing-02', desc: 'Single tier two-column layout with FAQ' },
    { name: 'Pricing 03', path: '/pricing-03', desc: 'Hero pricing section with testimonial' },
  ],
  'Legal Pages (2)': [
    { name: 'Privacy 01', path: '/privacy-01', desc: 'Left-aligned legal document layout' },
    { name: 'Privacy 02', path: '/privacy-02', desc: 'Centered legal document layout' },
  ],
  'Error Pages (2)': [
    { name: '404 - 01', path: '/404-01', desc: 'Simple centered 404 page' },
    { name: '404 - 02', path: '/404-02', desc: 'Illustrated 404 page' },
  ],
}

export default function PagesShowcase() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div className="min-h-screen bg-olive-100 dark:bg-olive-950">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Header */}
        <div className="mb-12 flex items-center justify-between">
          <div>
            <Link href="/showcase" className="text-sm text-olive-500 hover:text-olive-700 dark:text-olive-400 dark:hover:text-olive-200">
              ← Back to Showcase
            </Link>
            <h1 className="mt-2 font-display text-4xl text-olive-950 dark:text-white">
              Page Templates (13)
            </h1>
            <p className="mt-2 text-olive-600 dark:text-olive-400">
              Complete page layouts ready to use
            </p>
          </div>
          <button
            onClick={() => setIsDark(!isDark)}
            className="rounded-lg bg-olive-200 px-4 py-2 text-sm font-medium text-olive-800 transition hover:bg-olive-300 dark:bg-olive-800 dark:text-olive-200 dark:hover:bg-olive-700"
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        {/* Pages by Category */}
        <div className="space-y-12">
          {Object.entries(pageCategories).map(([category, pages]) => (
            <div key={category}>
              <h2 className="mb-4 font-display text-2xl text-olive-950 dark:text-white">
                {category}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {pages.map((page) => (
                  <Link
                    key={page.path}
                    href={page.path}
                    className="group rounded-xl border border-olive-200 bg-white p-6 transition hover:border-olive-400 hover:shadow-md dark:border-olive-800 dark:bg-olive-900 dark:hover:border-olive-600"
                  >
                    <h3 className="font-display text-xl text-olive-900 group-hover:text-olive-700 dark:text-white dark:group-hover:text-olive-200">
                      {page.name}
                    </h3>
                    <p className="mt-2 text-sm text-olive-500 dark:text-olive-400">
                      {page.desc}
                    </p>
                    <div className="mt-4 text-sm font-medium text-olive-400 group-hover:text-olive-600 dark:text-olive-500 dark:group-hover:text-olive-300">
                      View full page →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 rounded-xl border border-olive-200 bg-olive-50 p-6 dark:border-olive-800 dark:bg-olive-900/50">
          <h3 className="font-medium text-olive-900 dark:text-white">How to use page templates</h3>
          <p className="mt-2 text-sm text-olive-600 dark:text-olive-400">
            Each page template is a complete example showing how sections work together. Copy the page file from <code className="rounded bg-olive-200 px-1 dark:bg-olive-800">/pages/</code> to your project and customize it. You can mix sections from different templates to create your own unique pages.
          </p>
        </div>
      </div>
    </div>
  )
}
