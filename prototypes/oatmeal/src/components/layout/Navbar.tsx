'use client'

import { Button } from '@/components/elements/Button'
import { Container } from '@/components/elements/Container'
import { cn } from '@/lib/cn'
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from 'motion/react'
import { CaretDown } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, type ReactNode } from 'react'
import { ProductMenu } from './menus/ProductMenu'
import { CasesMenu } from './menus/CasesMenu'
import { ResourcesMenu } from './menus/ResourcesMenu'
import { DocsMenu } from './menus/DocsMenu'

type NavKey = 'product' | 'cases' | 'resources' | 'docs'

interface DropdownItem {
  key: NavKey
  label: string
  menu: ReactNode
}

const DROPDOWN_ITEMS: DropdownItem[] = [
  { key: 'product', label: 'Product', menu: <ProductMenu /> },
  { key: 'cases', label: 'Case Studies', menu: <CasesMenu /> },
  { key: 'resources', label: 'Resources', menu: <ResourcesMenu /> },
  { key: 'docs', label: 'Docs', menu: <DocsMenu /> },
]

/**
 * Oatmeal Navbar - "The Floating Pill"
 *
 * Features:
 * - Pill-shaped floating container with glass blur
 * - Mega-menu dropdowns with full content parity
 * - Subtle visibility even before scroll
 * - Warm olive color palette
 * - Spring physics animations
 */
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<NavKey | null>(null)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  const handleMenuHover = (key: NavKey) => {
    setOpenMenu(key)
  }

  const handleMenuLeave = () => {
    setOpenMenu(null)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 inset-x-0 z-50',
        'transition-all duration-300'
      )}
      onMouseLeave={handleMenuLeave}
    >
      {/* Pill container - transparent until scrolled */}
      <div
        className={cn(
          'mx-4 mt-4 rounded-full transition-all duration-300',
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg border border-olive-200/50'
            : 'bg-transparent'
        )}
      >
        <Container className="py-3">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logos/adapty-logo-black.svg"
                alt="Adapty"
                width={100}
                height={28}
                className="h-7 w-auto"
              />
            </Link>

            {/* Desktop navigation with dropdowns */}
            <div className="hidden lg:flex items-center gap-1">
              {DROPDOWN_ITEMS.map((item) => (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => handleMenuHover(item.key)}
                >
                  <button
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-full',
                      openMenu === item.key
                        ? 'text-olive-900 bg-olive-100/50'
                        : 'text-olive-700 hover:text-olive-900 hover:bg-olive-100/30'
                    )}
                  >
                    {item.label}
                    <CaretDown
                      size={12}
                      weight="bold"
                      className={cn(
                        'transition-transform duration-200',
                        openMenu === item.key && 'rotate-180'
                      )}
                    />
                  </button>

                  {/* Dropdown menu */}
                  <AnimatePresence>
                    {openMenu === item.key && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                      >
                        <div className="bg-gradient-to-b from-white to-olive-50 border border-olive-200/60 rounded-3xl shadow-xl shadow-olive-900/10 overflow-hidden">
                          {item.menu}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Simple links */}
              <Link
                href="https://adapty.io/blog/"
                className="px-3 py-2 text-sm font-medium text-olive-700 hover:text-olive-900 transition-colors rounded-full hover:bg-olive-100/30"
              >
                Blog
              </Link>
              <Link
                href="https://adapty.io/pricing/"
                className="px-3 py-2 text-sm font-medium text-olive-700 hover:text-olive-900 transition-colors rounded-full hover:bg-olive-100/30"
              >
                Pricing
              </Link>
              <Link
                href="https://adapty.io/web2app/"
                className="px-3 py-2 text-sm font-medium text-adapty-600 hover:text-adapty-700 transition-colors rounded-full hover:bg-adapty-50/50"
              >
                web2app
              </Link>
            </div>

            {/* CTA buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="https://app.adapty.io/login"
                className="hidden sm:block px-3 py-2 text-sm font-medium text-olive-700 hover:text-olive-900 transition-colors"
              >
                Log in
              </Link>
              <Button variant="dark" size="sm">
                Start free trial
              </Button>
            </div>
          </nav>
        </Container>
      </div>
    </motion.header>
  )
}
