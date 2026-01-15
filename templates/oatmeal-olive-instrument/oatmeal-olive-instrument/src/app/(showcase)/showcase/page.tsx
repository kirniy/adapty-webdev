'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ShowcaseIndex() {
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
            <h1 className="font-display text-5xl text-olive-950 dark:text-white">
              Oatmeal Kit Showcase
            </h1>
            <p className="mt-2 text-lg text-olive-600 dark:text-olive-400">
              100% complete component browser
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className="rounded-lg bg-olive-200 px-4 py-2 text-sm font-medium text-olive-800 transition hover:bg-olive-300 dark:bg-olive-800 dark:text-olive-200 dark:hover:bg-olive-700"
            >
              {isDark ? '☀️ Light' : '🌙 Dark'}
            </button>
            <Link
              href="/"
              className="rounded-lg bg-olive-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-olive-800"
            >
              ← Back to Demo
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mb-12 grid gap-4 sm:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-olive-900">
            <div className="text-4xl font-bold text-olive-950 dark:text-white">108</div>
            <div className="mt-1 text-olive-600 dark:text-olive-400">Icons</div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-olive-900">
            <div className="text-4xl font-bold text-olive-950 dark:text-white">37</div>
            <div className="mt-1 text-olive-600 dark:text-olive-400">Sections</div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-olive-900">
            <div className="text-4xl font-bold text-olive-950 dark:text-white">16</div>
            <div className="mt-1 text-olive-600 dark:text-olive-400">Elements</div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-olive-900">
            <div className="text-4xl font-bold text-olive-950 dark:text-white">13</div>
            <div className="mt-1 text-olive-600 dark:text-olive-400">Page Templates</div>
          </div>
        </div>

        {/* Categories */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Icons */}
          <Link
            href="/showcase/icons"
            className="group rounded-2xl border border-olive-200 bg-white p-8 shadow-sm transition hover:border-olive-400 hover:shadow-md dark:border-olive-800 dark:bg-olive-900 dark:hover:border-olive-600"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-olive-100 p-3 dark:bg-olive-800">
                <svg className="h-8 w-8 text-olive-600 dark:text-olive-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="font-display text-2xl text-olive-950 dark:text-white">Icons</h2>
            </div>
            <p className="text-olive-600 dark:text-olive-400">
              108 custom duotone icons designed specifically for this kit. Includes general UI, social, and specialty icons.
            </p>
            <div className="mt-4 text-sm font-medium text-olive-500 group-hover:text-olive-700 dark:text-olive-400 dark:group-hover:text-olive-200">
              View all icons →
            </div>
          </Link>

          {/* Sections */}
          <Link
            href="/showcase/sections"
            className="group rounded-2xl border border-olive-200 bg-white p-8 shadow-sm transition hover:border-olive-400 hover:shadow-md dark:border-olive-800 dark:bg-olive-900 dark:hover:border-olive-600"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-olive-100 p-3 dark:bg-olive-800">
                <svg className="h-8 w-8 text-olive-600 dark:text-olive-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h2 className="font-display text-2xl text-olive-950 dark:text-white">Sections</h2>
            </div>
            <p className="text-olive-600 dark:text-olive-400">
              37 pre-built sections: 8 heroes, 5 features, 4 pricing, 3 footers, 3 navbars, 3 testimonials, and more.
            </p>
            <div className="mt-4 text-sm font-medium text-olive-500 group-hover:text-olive-700 dark:text-olive-400 dark:group-hover:text-olive-200">
              View all sections →
            </div>
          </Link>

          {/* Elements */}
          <Link
            href="/showcase/elements"
            className="group rounded-2xl border border-olive-200 bg-white p-8 shadow-sm transition hover:border-olive-400 hover:shadow-md dark:border-olive-800 dark:bg-olive-900 dark:hover:border-olive-600"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-olive-100 p-3 dark:bg-olive-800">
                <svg className="h-8 w-8 text-olive-600 dark:text-olive-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h2 className="font-display text-2xl text-olive-950 dark:text-white">Elements</h2>
            </div>
            <p className="text-olive-600 dark:text-olive-400">
              16 foundational UI elements: buttons, links, headings, containers, screenshots, and typography components.
            </p>
            <div className="mt-4 text-sm font-medium text-olive-500 group-hover:text-olive-700 dark:text-olive-400 dark:group-hover:text-olive-200">
              View all elements →
            </div>
          </Link>

          {/* Page Templates */}
          <Link
            href="/showcase/pages"
            className="group rounded-2xl border border-olive-200 bg-white p-8 shadow-sm transition hover:border-olive-400 hover:shadow-md dark:border-olive-800 dark:bg-olive-900 dark:hover:border-olive-600"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-xl bg-olive-100 p-3 dark:bg-olive-800">
                <svg className="h-8 w-8 text-olive-600 dark:text-olive-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 className="font-display text-2xl text-olive-950 dark:text-white">Page Templates</h2>
            </div>
            <p className="text-olive-600 dark:text-olive-400">
              13 complete page templates: 3 home pages, 3 about pages, 3 pricing pages, 2 legal pages, and 2 error pages.
            </p>
            <div className="mt-4 text-sm font-medium text-olive-500 group-hover:text-olive-700 dark:text-olive-400 dark:group-hover:text-olive-200">
              View all pages →
            </div>
          </Link>
        </div>

        {/* Quick Access */}
        <div className="mt-12">
          <h2 className="mb-6 font-display text-2xl text-olive-950 dark:text-white">Quick Access - All Pages</h2>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { name: 'Home 01', path: '/home-01' },
              { name: 'Home 02', path: '/home-02' },
              { name: 'Home 03', path: '/home-03' },
              { name: 'About 01', path: '/about-01' },
              { name: 'About 02', path: '/about-02' },
              { name: 'About 03', path: '/about-03' },
              { name: 'Pricing 01', path: '/pricing-01' },
              { name: 'Pricing 02', path: '/pricing-02' },
              { name: 'Pricing 03', path: '/pricing-03' },
              { name: 'Privacy 01', path: '/privacy-01' },
              { name: 'Privacy 02', path: '/privacy-02' },
              { name: '404 - 01', path: '/404-01' },
              { name: '404 - 02', path: '/404-02' },
            ].map((page) => (
              <Link
                key={page.path}
                href={page.path}
                className="rounded-xl border border-olive-200 bg-white px-4 py-3 text-center text-sm font-medium text-olive-700 transition hover:border-olive-400 hover:bg-olive-50 dark:border-olive-800 dark:bg-olive-900 dark:text-olive-300 dark:hover:border-olive-600 dark:hover:bg-olive-800"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
