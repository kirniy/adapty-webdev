'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CaretDown, List, X } from '@phosphor-icons/react'
import { Button } from '@/components/elements/Button'
import { cn } from '@/lib/cn'
import { useState, useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'motion/react'
import { ProductMenu } from './menus/ProductMenu'
import { CasesMenu } from './menus/CasesMenu'
import { ResourcesMenu } from './menus/ResourcesMenu'
import { DocsMenu } from './menus/DocsMenu'
import { LanguageSwitcher } from './LanguageSwitcher'

type NavKey = 'product' | 'cases' | 'resources' | 'docs'

interface NavItem {
  key: NavKey
  label: string
  menu: ReactNode
}

const NAV_ITEMS: NavItem[] = [
  { key: 'product', label: 'Product', menu: <ProductMenu /> },
  { key: 'cases', label: 'Case Studies', menu: <CasesMenu /> },
  { key: 'resources', label: 'Resources', menu: <ResourcesMenu /> },
  { key: 'docs', label: 'Docs', menu: <DocsMenu /> },
]

function MegaMenuDropdown({
  item,
  isOpen,
  onHover,
  onLeave,
}: {
  item: NavItem
  isOpen: boolean
  onHover: () => void
  onLeave: () => void
}) {
  return (
    <div className="relative h-20 flex items-center" onMouseEnter={onHover}>
      <button
        className={cn(
          'flex items-center gap-1.5 text-sm font-medium transition-colors',
          isOpen
            ? 'text-olive-900'
            : 'text-olive-600 hover:text-olive-900'
        )}
      >
        {item.label}
        <CaretDown
          size={14}
          weight="bold"
          className={cn(
            'transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
            onMouseLeave={onLeave}
          >
            <div className="bg-white border border-olive-200 rounded-2xl shadow-2xl overflow-hidden">
              {item.menu}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      // iOS scroll lock
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'

      return () => {
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''
        window.scrollTo(0, scrollY)
      }
    }
  }, [isOpen])

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-[85%] max-w-[400px] bg-white z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-olive-200">
              <Image
                src="/logos/adapty-logo-black.svg"
                alt="Adapty"
                width={100}
                height={26}
                className="h-7 w-auto"
              />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 rounded-lg hover:bg-olive-100 transition-colors"
              >
                <X size={24} weight="bold" className="text-olive-600" />
              </button>
            </div>

            {/* Navigation */}
            <div className="p-4 space-y-6">
              {/* Product */}
              <div>
                <h3 className="text-xs font-semibold text-olive-400 uppercase tracking-wider mb-3">
                  Product
                </h3>
                <div className="space-y-2">
                  <Link href="/sdk" className="block py-2 text-olive-700 hover:text-olive-900">
                    SDK Integration
                  </Link>
                  <Link href="/paywall-builder" className="block py-2 text-olive-700 hover:text-olive-900">
                    Paywall Builder
                  </Link>
                  <Link href="/ab-testing" className="block py-2 text-olive-700 hover:text-olive-900">
                    A/B Testing
                  </Link>
                  <Link href="/analytics" className="block py-2 text-olive-700 hover:text-olive-900">
                    Analytics
                  </Link>
                </div>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-xs font-semibold text-olive-400 uppercase tracking-wider mb-3">
                  Resources
                </h3>
                <div className="space-y-2">
                  <Link href="/case-studies" className="block py-2 text-olive-700 hover:text-olive-900">
                    Case Studies
                  </Link>
                  <Link href="/blog" className="block py-2 text-olive-700 hover:text-olive-900">
                    Blog
                  </Link>
                  <Link href="/docs" className="block py-2 text-olive-700 hover:text-olive-900">
                    Documentation
                  </Link>
                  <Link href="/pricing" className="block py-2 text-olive-700 hover:text-olive-900">
                    Pricing
                  </Link>
                </div>
              </div>

              {/* Auth */}
              <div className="pt-4 border-t border-olive-200 space-y-3">
                <Button variant="primary" size="lg" className="w-full justify-center">
                  Sign up free
                </Button>
                <Button variant="ghost" size="lg" className="w-full justify-center">
                  Log in
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}

export function AuraHeader() {
  const [hoveredNav, setHoveredNav] = useState<NavKey | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-olive-200/50">
      <div className="max-w-[1440px] mx-auto px-6 h-16 lg:h-20 flex items-center justify-between">
        {/* Left Side: Logo + Language Switcher */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/adapty-logo-black.svg"
              alt="Adapty"
              width={120}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Language Switcher - Next to logo */}
          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Center: Desktop Navigation */}
        <nav
          className="hidden lg:flex gap-x-6 items-center"
          onMouseLeave={() => setHoveredNav(null)}
        >
          {NAV_ITEMS.map((item) => (
            <MegaMenuDropdown
              key={item.key}
              item={item}
              isOpen={hoveredNav === item.key}
              onHover={() => setHoveredNav(item.key)}
              onLeave={() => setHoveredNav(null)}
            />
          ))}

          <Link
            href="/pricing"
            className="text-sm font-medium text-olive-600 hover:text-olive-900 transition-colors h-20 flex items-center"
          >
            Pricing
          </Link>
        </nav>

        {/* Right Side: Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden lg:block text-sm font-medium text-olive-600 hover:text-olive-900 transition-colors"
          >
            Log in
          </Link>

          <Button variant="primary" size="md">
            Sign up
          </Button>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-olive-600 hover:text-olive-900"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <List size={24} weight="bold" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  )
}
