'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { AnnouncementBadge } from '@/components/elements/announcement-badge'
import { Button, ButtonLink, PlainButton, PlainButtonLink, SoftButton, SoftButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
import { EmailSignupForm } from '@/components/elements/email-signup-form'
import { Eyebrow } from '@/components/elements/eyebrow'
import { Heading } from '@/components/elements/heading'
import { InstallCommand } from '@/components/elements/install-command'
import { Link as ElementLink } from '@/components/elements/link'
import { Logo, LogoGrid } from '@/components/elements/logo-grid'
import { Screenshot } from '@/components/elements/screenshot'
import { Section } from '@/components/elements/section'
import { Subheading } from '@/components/elements/subheading'
import { Text } from '@/components/elements/text'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'

export default function ElementsShowcase() {
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
              Elements (16)
            </h1>
            <p className="mt-2 text-olive-600 dark:text-olive-400">
              Foundational UI building blocks
            </p>
          </div>
          <button
            onClick={() => setIsDark(!isDark)}
            className="rounded-lg bg-olive-200 px-4 py-2 text-sm font-medium text-olive-800 transition hover:bg-olive-300 dark:bg-olive-800 dark:text-olive-200 dark:hover:bg-olive-700"
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        <div className="space-y-16">
          {/* Buttons */}
          <section className="rounded-2xl border border-olive-200 bg-white p-8 dark:border-olive-800 dark:bg-olive-900">
            <h2 className="mb-2 font-display text-2xl text-olive-950 dark:text-white">Button</h2>
            <p className="mb-6 text-sm text-olive-600 dark:text-olive-400">
              Primary actions with multiple variants and sizes
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-sm font-medium text-olive-700 dark:text-olive-300">Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Button>Primary Button</Button>
                  <SoftButton>Soft Button</SoftButton>
                  <PlainButton>Plain Button</PlainButton>
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-medium text-olive-700 dark:text-olive-300">Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="md">Medium (Default)</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-medium text-olive-700 dark:text-olive-300">As Links</h3>
                <div className="flex flex-wrap gap-4">
                  <ButtonLink href="#">Button Link</ButtonLink>
                  <SoftButtonLink href="#">Soft Link</SoftButtonLink>
                  <PlainButtonLink href="#">Plain Link</PlainButtonLink>
                </div>
              </div>
            </div>
          </section>

          {/* Typography */}
          <section className="rounded-2xl border border-olive-200 bg-white p-8 dark:border-olive-800 dark:bg-olive-900">
            <h2 className="mb-2 font-display text-2xl text-olive-950 dark:text-white">Typography</h2>
            <p className="mb-6 text-sm text-olive-600 dark:text-olive-400">
              Heading, Subheading, Eyebrow, and Text components
            </p>
            <div className="space-y-6">
              <div>
                <Eyebrow>Eyebrow Text</Eyebrow>
              </div>
              <div>
                <Heading>This is a Heading Component</Heading>
              </div>
              <div>
                <Subheading>This is a Subheading with supporting context</Subheading>
              </div>
              <div>
                <Text>
                  This is the Text component used for body copy and paragraphs. It provides consistent styling across your content.
                </Text>
              </div>
            </div>
          </section>

          {/* Link */}
          <section className="rounded-2xl border border-olive-200 bg-white p-8 dark:border-olive-800 dark:bg-olive-900">
            <h2 className="mb-2 font-display text-2xl text-olive-950 dark:text-white">Link</h2>
            <p className="mb-6 text-sm text-olive-600 dark:text-olive-400">
              Styled link with icon support
            </p>
            <div className="flex flex-wrap gap-6">
              <ElementLink href="#">Simple Link</ElementLink>
              <ElementLink href="#">
                Link with Icon <ArrowNarrowRightIcon />
              </ElementLink>
            </div>
          </section>

          {/* Announcement Badge */}
          <section className="rounded-2xl border border-olive-200 bg-white p-8 dark:border-olive-800 dark:bg-olive-900">
            <h2 className="mb-2 font-display text-2xl text-olive-950 dark:text-white">Announcement Badge</h2>
            <p className="mb-6 text-sm text-olive-600 dark:text-olive-400">
              Highlight announcements and updates
            </p>
            <div className="flex flex-wrap gap-4">
              <AnnouncementBadge href="#" text="New feature released" cta="Learn more" />
              <AnnouncementBadge href="#" text="v2.0 is here" cta="See what's new" />
            </div>
          </section>

          {/* Email Signup Form */}
          <section className="rounded-2xl border border-olive-200 bg-white p-8 dark:border-olive-800 dark:bg-olive-900">
            <h2 className="mb-2 font-display text-2xl text-olive-950 dark:text-white">Email Signup Form</h2>
            <p className="mb-6 text-sm text-olive-600 dark:text-olive-400">
              Newsletter subscription form
            </p>
            <div className="max-w-md">
              <EmailSignupForm cta="Subscribe" />
            </div>
          </section>

          {/* Install Command */}
          <section className="rounded-2xl border border-olive-200 bg-white p-8 dark:border-olive-800 dark:bg-olive-900">
            <h2 className="mb-2 font-display text-2xl text-olive-950 dark:text-white">Install Command</h2>
            <p className="mb-6 text-sm text-olive-600 dark:text-olive-400">
              Copyable installation command
            </p>
            <div className="max-w-md">
              <InstallCommand snippet="npm install @tailwindplus/elements" />
            </div>
          </section>

          {/* Screenshot */}
          <section className="rounded-2xl border border-olive-200 bg-white p-8 dark:border-olive-800 dark:bg-olive-900">
            <h2 className="mb-2 font-display text-2xl text-olive-950 dark:text-white">Screenshot</h2>
            <p className="mb-6 text-sm text-olive-600 dark:text-olive-400">
              Display screenshots with decorative wallpapers
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <Screenshot wallpaper="green" placement="bottom-right" className="rounded-lg">
                <img
                  src="https://assets.tailwindplus.com/screenshots/1.webp?left=800&top=600"
                  alt="Demo"
                  className="bg-white/75"
                  width={800}
                  height={600}
                />
              </Screenshot>
              <Screenshot wallpaper="purple" placement="bottom-left" className="rounded-lg">
                <img
                  src="https://assets.tailwindplus.com/screenshots/1.webp?right=800&top=600"
                  alt="Demo"
                  className="bg-white/75"
                  width={800}
                  height={600}
                />
              </Screenshot>
            </div>
          </section>

          {/* Logo Grid */}
          <section className="rounded-2xl border border-olive-200 bg-white p-8 dark:border-olive-800 dark:bg-olive-900">
            <h2 className="mb-2 font-display text-2xl text-olive-950 dark:text-white">Logo Grid</h2>
            <p className="mb-6 text-sm text-olive-600 dark:text-olive-400">
              Display partner/customer logos
            </p>
            <LogoGrid>
              <Logo>
                <img src="https://assets.tailwindplus.com/logos/9.svg?color=black&height=32" alt="" width={51} height={32} />
              </Logo>
              <Logo>
                <img src="https://assets.tailwindplus.com/logos/10.svg?color=black&height=32" alt="" width={70} height={32} />
              </Logo>
              <Logo>
                <img src="https://assets.tailwindplus.com/logos/11.svg?color=black&height=32" alt="" width={100} height={32} />
              </Logo>
              <Logo>
                <img src="https://assets.tailwindplus.com/logos/12.svg?color=black&height=32" alt="" width={85} height={32} />
              </Logo>
            </LogoGrid>
          </section>

          {/* Container */}
          <section className="rounded-2xl border border-olive-200 bg-white p-8 dark:border-olive-800 dark:bg-olive-900">
            <h2 className="mb-2 font-display text-2xl text-olive-950 dark:text-white">Container</h2>
            <p className="mb-6 text-sm text-olive-600 dark:text-olive-400">
              Responsive max-width container
            </p>
            <div className="rounded-lg bg-olive-100 p-4 dark:bg-olive-800">
              <Container>
                <div className="rounded bg-olive-200 p-4 text-center text-sm text-olive-700 dark:bg-olive-700 dark:text-olive-200">
                  Content inside Container component
                </div>
              </Container>
            </div>
          </section>

          {/* Section */}
          <section className="rounded-2xl border border-olive-200 bg-white p-8 dark:border-olive-800 dark:bg-olive-900">
            <h2 className="mb-2 font-display text-2xl text-olive-950 dark:text-white">Section</h2>
            <p className="mb-6 text-sm text-olive-600 dark:text-olive-400">
              Page section wrapper with consistent spacing
            </p>
            <div className="rounded-lg bg-olive-100 dark:bg-olive-800">
              <Section>
                <div className="rounded bg-olive-200 p-4 text-center text-sm text-olive-700 dark:bg-olive-700 dark:text-olive-200">
                  Content inside Section component
                </div>
              </Section>
            </div>
          </section>

          {/* Additional Elements */}
          <section className="rounded-2xl border border-olive-200 bg-white p-8 dark:border-olive-800 dark:bg-olive-900">
            <h2 className="mb-2 font-display text-2xl text-olive-950 dark:text-white">Other Elements</h2>
            <p className="mb-6 text-sm text-olive-600 dark:text-olive-400">
              Additional utility components
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-olive-50 p-4 dark:bg-olive-800">
                <h3 className="font-medium text-olive-900 dark:text-white">Main</h3>
                <p className="mt-1 text-sm text-olive-600 dark:text-olive-400">
                  Main content wrapper component
                </p>
              </div>
              <div className="rounded-lg bg-olive-50 p-4 dark:bg-olive-800">
                <h3 className="font-medium text-olive-900 dark:text-white">Wallpaper</h3>
                <p className="mt-1 text-sm text-olive-600 dark:text-olive-400">
                  Decorative background patterns
                </p>
              </div>
              <div className="rounded-lg bg-olive-50 p-4 dark:bg-olive-800">
                <h3 className="font-medium text-olive-900 dark:text-white">Document</h3>
                <p className="mt-1 text-sm text-olive-600 dark:text-olive-400">
                  Document content formatting
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
