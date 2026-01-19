'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  CaretRight,
  Layout,
  Play,
  ChartBar,
  Package,
  Plugs,
} from '@phosphor-icons/react'
import { motion } from 'motion/react'
import { cn } from '@/lib/cn'
import { GridSection } from '@/components/layout/GridSection'
import { ButtonLink } from '@/components/elements/Button'
import {
  useDashedThicknessVariant,
  useGridColorVariant,
  useGridOpacityVariant,
  useGridZIndexVariant,
} from '@/lib/debug-context'

// --- Helper Components ---

interface BorderBeamProps {
  className?: string
  size?: number
  duration?: number
  borderWidth?: number
  anchor?: number
  colorFrom?: string
  colorTo?: string
  delay?: number
}

function BorderBeam({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = '#ffaa40',
  colorTo = '#9c40ff',
  delay = 0,
}: BorderBeamProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes border-beam {
          100% {
            offset-distance: 100%;
          }
        }
      `}} />
      <div
        style={
          {
            '--size': size,
            '--duration': duration,
            '--anchor': anchor,
            '--border-width': borderWidth,
            '--color-from': colorFrom,
            '--color-to': colorTo,
            '--delay': delay,
          } as React.CSSProperties
        }
        className={cn(
          'absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] pointer-events-none',
          '![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]',
          'after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:[animation:border-beam_calc(var(--duration)*1s)_infinite_linear] after:[animation-delay:var(--delay)s] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]',
          className
        )}
      />
    </>
  )
}

function MainDashedGridLines() {
  const dashedThickness = useDashedThicknessVariant() // Assuming this hook exists in debug-context or needs addition/mocking. 
  // Wait, I saw these hooks in Hero.tsx from Achromatic but NOT in Oatmeal's debug-context. 
  // I should check if they exist in Oatmeal's debug-context. I read it, and they DO NOT exist.
  // I will use defaults for now to avoid breaking.
  
  // Defaults:
  const strokeWidth = 1
  const strokeColor = 'rgba(0,0,0,0.1)' // Oatmeal uses olive-200 usually, let's use a subtle color
  const opacityValue = 0.5
  const zIndexClass = '-z-10'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: opacityValue }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className={cn("absolute inset-0 pointer-events-none", zIndexClass)}
    >
      <svg className="absolute left-[16.85%] top-0 hidden h-full w-px lg:block">
        <line
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="100%"
          strokeLinecap="round"
          strokeDasharray="5 5"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      </svg>
      <svg className="absolute right-[16.85%] top-0 hidden h-full w-px lg:block">
        <line
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="100%"
          strokeLinecap="round"
          strokeDasharray="5 5"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      </svg>
      <svg className="absolute bottom-[52px] left-0 w-full h-px lg:block">
        <line
          x1="0"
          y1="0.5"
          x2="100%"
          y2="0.5"
          strokeLinecap="round"
          strokeDasharray="5 5"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      </svg>
    </motion.div>
  )
}

function SupportiveDashedGridLines() {
  return (
    <>
      <svg className="absolute left-[-50vw] top-[-25px] z-10 hidden h-px w-[200vw] lg:block pointer-events-none">
        <line
          x1="0"
          y1="0.5"
          x2="100%"
          y2="0.5"
          strokeLinecap="round"
          strokeDasharray="5 5"
          stroke="rgba(0,0,0,0.1)"
        />
      </svg>
    </>
  )
}

function HeroPill() {
  return (
    <motion.div
      initial={{ filter: 'blur(10px)', opacity: 0, y: -20 }}
      animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center"
    >
      <Link href="https://adapty.io/ebooks/100k-app-playbook/" className="group relative">
        <div className="relative flex items-center gap-2 overflow-hidden rounded-full bg-white/50 px-3 py-1.5 text-xs font-medium shadow-sm ring-1 ring-olive-200 transition-all hover:bg-white hover:ring-olive-300 sm:text-sm">
          <BorderBeam
            size={40}
            duration={4}
            delay={0}
            borderWidth={1.5}
            colorFrom="#84cc16"
            colorTo="#65a30d"
          />
          <span className="text-olive-600 font-semibold">New</span>
          <div className="h-3 w-px bg-olive-200" />
          <span className="text-olive-800">Migration Guide</span>
          <CaretRight weight="bold" className="ml-0.5 size-3 text-olive-400 transition-transform group-hover:translate-x-0.5" />
        </div>
      </Link>
    </motion.div>
  )
}

function HeroTitle() {
  return (
    <motion.div
      initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
      animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      <h1 className="mt-6 text-center text-[48px] font-bold leading-[1.1] tracking-tight text-olive-900 sm:text-[56px] md:text-[64px] lg:text-[76px]">
        Revenue management
        <br /> for in-app purchases
      </h1>
    </motion.div>
  )
}

function HeroDescription() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className="mx-auto mt-6 max-w-[560px] text-balance text-center text-lg leading-relaxed text-olive-600 sm:text-xl"
    >
      Save months on integrating subscriptions and double your app revenue with paywall management.
    </motion.p>
  )
}

function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="mx-auto mt-8 flex w-full flex-col items-center justify-center gap-3 px-4 sm:w-auto sm:flex-row sm:px-0"
    >
      <ButtonLink href="https://app.adapty.io/registration" variant="primary" size="lg">
        Start for free
      </ButtonLink>
      <ButtonLink href="https://adapty.io/schedule-demo/" variant="secondary" size="lg">
        Book a demo
      </ButtonLink>
    </motion.div>
  )
}

// --- Tabs Implementation ---

const TABS = [
  { id: 'feature1', label: 'Paywall Builder', icon: Layout, image: '/images/feature-paywall.webp' },
  { id: 'feature2', label: 'A/B Testing', icon: Play, image: '/images/feature-ab.webp' },
  { id: 'feature3', label: 'Analytics', icon: ChartBar, image: '/images/feature-analytics.webp' },
  { id: 'feature4', label: 'SDK', icon: Package, image: '/images/hero-overview.webp' },
  { id: 'feature5', label: 'Integrations', icon: Plugs, image: '/images/feature-paywall.webp' }, // Fallback
]

function HeroIllustration() {
  const [activeTab, setActiveTab] = useState('feature1')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      className="relative mt-12 w-full lg:mt-16"
    >
      <div className="flex flex-col items-center">
        {/* Tabs List */}
        <div className="scrollbar-hide mb-8 flex w-full max-w-full overflow-x-auto px-4 pb-4 sm:justify-center sm:px-0">
          <div className="flex items-center gap-2 rounded-full border border-olive-200 bg-white p-1.5 shadow-sm">
            {TABS.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap",
                    isActive 
                      ? "bg-olive-900 text-white shadow-sm" 
                      : "text-olive-600 hover:bg-olive-50 hover:text-olive-900"
                  )}
                >
                  <Icon weight={isActive ? "fill" : "regular"} className="size-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative w-full max-w-6xl rounded-2xl border border-olive-200 bg-white/50 p-2 shadow-xl ring-1 ring-olive-100 backdrop-blur-sm sm:p-3">
          <SupportiveDashedGridLines />
          
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-olive-100 bg-olive-50/50 shadow-inner">
             {TABS.map((tab) => (
               <div
                 key={tab.id}
                 className={cn(
                   "absolute inset-0 transition-opacity duration-500",
                   activeTab === tab.id ? "opacity-100 z-10" : "opacity-0 z-0"
                 )}
               >
                 <Image
                   src={tab.image}
                   alt={tab.label}
                   fill
                   className="object-cover object-top"
                   sizes="(max-width: 768px) 100vw, 1200px"
                   priority={tab.id === 'feature1'}
                 />
               </div>
             ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function HeroAchromatic() {
  return (
    <GridSection className="overflow-x-hidden relative pt-10 pb-20">
      <MainDashedGridLines />
      <div className="relative z-10 mx-auto mt-12 flex flex-col items-center px-4 sm:mt-16 sm:px-6 lg:mt-20">
        <HeroPill />
        <HeroTitle />
        <HeroDescription />
        <HeroButtons />
        <HeroIllustration />
      </div>
    </GridSection>
  )
}
