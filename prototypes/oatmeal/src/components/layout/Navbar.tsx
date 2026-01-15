'use client'

import { Button } from '@/components/elements/Button'
import { Container } from '@/components/elements/Container'
import { cn } from '@/lib/cn'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { startTransition, useState } from 'react'

const navLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#docs' },
  { label: 'Blog', href: '#blog' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  // Use startTransition for non-urgent scroll updates
  // Prevents blocking UI on frequent scroll events
  useMotionValueEvent(scrollY, 'change', (latest) => {
    startTransition(() => {
      setIsScrolled(latest > 50)
    })
  })

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 inset-x-0 z-50',
        'transition-all duration-300'
      )}
    >
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
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/adapty-logo-black.svg"
                alt="Adapty"
                width={100}
                height={28}
                className="h-7 w-auto"
              />
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors',
                    isScrolled
                      ? 'text-olive-700 hover:text-olive-950'
                      : 'text-olive-800 hover:text-olive-950'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex items-center gap-3">
              <Link
                href="#login"
                className={cn(
                  'hidden sm:block text-sm font-medium transition-colors',
                  isScrolled
                    ? 'text-olive-700 hover:text-olive-950'
                    : 'text-olive-800 hover:text-olive-950'
                )}
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
