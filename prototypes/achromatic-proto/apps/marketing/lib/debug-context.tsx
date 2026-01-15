'use client'

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react'

// Grid animation variants
// export type GridVariant = 'cursor-tracking' | 'slow-drift' | 'static' | 'off'

// Header/navbar variants
export type HeaderVariant = 'default' | 'simple'

// Color accent variants
export type ColorAccentVariant = 'full' | 'subtle' | 'minimal'

// Section variants mapped to Achromatic Template Components
// All sections support 'off' to hide them
export type HeroVariant = 'marketing' | 'pricing' | 'story' | 'contact' | 'off'
export type LogosVariant = 'default' | 'off'
export type FeaturesVariant = 'problem' | 'solution' | 'values' | 'vision' | 'benefits' | 'sticky-scroll' | 'off'
export type StatsVariant = 'default' | 'timeline' | 'off'
export type TestimonialsVariant = 'default' | 'team' | 'off'
export type FaqVariant = 'default' | 'pricing' | 'off'
export type CtaVariant = 'default' | 'careers' | 'off'
export type BlogVariant = 'default' | 'off'

// Variant option type for UI
export interface VariantOption<T> {
  value: T
  label: string
  description: string
}

// All available grid variants with labels
// export const GRID_VARIANTS: VariantOption<GridVariant>[] = [
//   { value: 'cursor-tracking', label: 'Cursor Tracking', description: 'Grid reveals around cursor position' },
//   { value: 'slow-drift', label: 'Slow Drift', description: 'Continuous animation, no cursor tracking' },
//   { value: 'static', label: 'Static', description: 'No animation, just pattern' },
//   { value: 'off', label: 'Off', description: 'No grid displayed' },
// ]

// Header variants
export const HEADER_VARIANTS: VariantOption<HeaderVariant>[] = [
  { value: 'default', label: 'Default Bar', description: 'Standard full-width navigation' },
  { value: 'simple', label: 'Simple Pill', description: 'Floating pill navigation' },
]

// Color accent variants
export const COLOR_ACCENT_VARIANTS: VariantOption<ColorAccentVariant>[] = [
  { value: 'full', label: 'Full Color', description: 'Purple accent on all interactive elements' },
  { value: 'subtle', label: 'Subtle', description: 'Purple accent only on primary buttons' },
  { value: 'minimal', label: 'Minimal', description: 'Mostly monochrome, minimal purple' },
]

// Section variants - each includes 'off' option to hide the section
export const HERO_VARIANTS: VariantOption<HeroVariant>[] = [
  { value: 'marketing', label: 'Marketing', description: 'Main landing page hero with pills and tabs' },
  { value: 'pricing', label: 'Pricing', description: 'Simple centered hero for pricing' },
  { value: 'story', label: 'Story', description: 'Text-heavy hero for about pages' },
  { value: 'contact', label: 'Contact', description: 'Hero with contact form' },
  { value: 'off', label: 'Off', description: 'Hide this section' },
]

export const LOGOS_VARIANTS: VariantOption<LogosVariant>[] = [
  { value: 'default', label: 'Default', description: 'Standard logo strip' },
  { value: 'off', label: 'Off', description: 'Hide this section' },
]

export const FEATURES_VARIANTS: VariantOption<FeaturesVariant>[] = [
  { value: 'solution', label: 'Solution Bento', description: 'Complex bento grid layout' },
  { value: 'problem', label: 'Problem Grid', description: '3-column icon grid' },
  { value: 'sticky-scroll', label: 'Sticky Scroll', description: 'Apple-style scrolling showcase' },
  { value: 'values', label: 'Values', description: 'Values list with descriptions' },
  { value: 'vision', label: 'Vision', description: 'Large typography vision statement' },
  { value: 'benefits', label: 'Benefits', description: 'Grid of benefit cards' },
  { value: 'off', label: 'Off', description: 'Hide this section' },
]

export const STATS_VARIANTS: VariantOption<StatsVariant>[] = [
  { value: 'default', label: 'Default', description: '4-column number ticker' },
  { value: 'timeline', label: 'Timeline', description: 'Vertical timeline view' },
  { value: 'off', label: 'Off', description: 'Hide this section' },
]

export const TESTIMONIALS_VARIANTS: VariantOption<TestimonialsVariant>[] = [
  { value: 'default', label: 'Marquee', description: 'Infinite scrolling reviews' },
  { value: 'team', label: 'Team', description: 'Team member photos' },
  { value: 'off', label: 'Off', description: 'Hide this section' },
]

export const FAQ_VARIANTS: VariantOption<FaqVariant>[] = [
  { value: 'default', label: 'General', description: 'Standard accordion' },
  { value: 'pricing', label: 'Pricing', description: 'Pricing specific questions' },
  { value: 'off', label: 'Off', description: 'Hide this section' },
]

export const CTA_VARIANTS: VariantOption<CtaVariant>[] = [
  { value: 'default', label: 'Standard', description: 'Simple text and button' },
  { value: 'careers', label: 'Careers', description: 'List of open positions' },
  { value: 'off', label: 'Off', description: 'Hide this section' },
]

export const BLOG_VARIANTS: VariantOption<BlogVariant>[] = [
  { value: 'default', label: 'Latest Posts', description: 'Grid of blog posts' },
  { value: 'off', label: 'Off', description: 'Hide this section' },
]

// Debug state interface
interface DebugState {
  colorAccentVariant: ColorAccentVariant
  headerVariant: HeaderVariant
  heroVariant: HeroVariant
  logosVariant: LogosVariant
  featuresVariant: FeaturesVariant
  statsVariant: StatsVariant
  testimonialsVariant: TestimonialsVariant
  faqVariant: FaqVariant
  ctaVariant: CtaVariant
  blogVariant: BlogVariant
  isDebugMenuOpen: boolean
}

// Context value interface
interface DebugContextValue extends DebugState {
  setColorAccentVariant: (variant: ColorAccentVariant) => void
  setHeaderVariant: (variant: HeaderVariant) => void
  setHeroVariant: (variant: HeroVariant) => void
  setLogosVariant: (variant: LogosVariant) => void
  setFeaturesVariant: (variant: FeaturesVariant) => void
  setStatsVariant: (variant: StatsVariant) => void
  setTestimonialsVariant: (variant: TestimonialsVariant) => void
  setFaqVariant: (variant: FaqVariant) => void
  setCtaVariant: (variant: CtaVariant) => void
  setBlogVariant: (variant: BlogVariant) => void
  toggleDebugMenu: () => void
  resetToDefaults: () => void
}

// Default state
const defaultState: DebugState = {
  colorAccentVariant: 'subtle',
  headerVariant: 'default',
  heroVariant: 'marketing',
  logosVariant: 'default',
  featuresVariant: 'solution',
  statsVariant: 'default',
  testimonialsVariant: 'default',
  faqVariant: 'default',
  ctaVariant: 'default',
  blogVariant: 'default',
  isDebugMenuOpen: false,
}

// Storage key
const STORAGE_KEY = 'achromatic-debug-state'

// Create context
const DebugContext = createContext<DebugContextValue | null>(null)

// Provider component
export function DebugProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DebugState>(defaultState)
  const [isHydrated, setIsHydrated] = useState(false)

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored) as Partial<DebugState>
        setState(prev => ({
          ...prev,
          ...parsed,
          isDebugMenuOpen: false // Always start closed
        }))
      }
    } catch {
      // Ignore parse errors
    }
    setIsHydrated(true)
  }, [])

  // Save state to localStorage when it changes
  useEffect(() => {
    if (!isHydrated) return
    try {
      const { isDebugMenuOpen, ...persistedState } = state
      localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedState))
    } catch {
      // Ignore storage errors
    }
  }, [state, isHydrated])

  const setColorAccentVariant = useCallback((variant: ColorAccentVariant) => setState(prev => ({ ...prev, colorAccentVariant: variant })), [])
  const setHeaderVariant = useCallback((variant: HeaderVariant) => setState(prev => ({ ...prev, headerVariant: variant })), [])
  const setHeroVariant = useCallback((variant: HeroVariant) => setState(prev => ({ ...prev, heroVariant: variant })), [])
  const setLogosVariant = useCallback((variant: LogosVariant) => setState(prev => ({ ...prev, logosVariant: variant })), [])
  const setFeaturesVariant = useCallback((variant: FeaturesVariant) => setState(prev => ({ ...prev, featuresVariant: variant })), [])
  const setStatsVariant = useCallback((variant: StatsVariant) => setState(prev => ({ ...prev, statsVariant: variant })), [])
  const setTestimonialsVariant = useCallback((variant: TestimonialsVariant) => setState(prev => ({ ...prev, testimonialsVariant: variant })), [])
  const setFaqVariant = useCallback((variant: FaqVariant) => setState(prev => ({ ...prev, faqVariant: variant })), [])
  const setCtaVariant = useCallback((variant: CtaVariant) => setState(prev => ({ ...prev, ctaVariant: variant })), [])
  const setBlogVariant = useCallback((variant: BlogVariant) => setState(prev => ({ ...prev, blogVariant: variant })), [])
  const toggleDebugMenu = useCallback(() => setState(prev => ({ ...prev, isDebugMenuOpen: !prev.isDebugMenuOpen })), [])
  const resetToDefaults = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setState({ ...defaultState, isDebugMenuOpen: true })
  }, [])

  const value: DebugContextValue = {
    ...state,
    setColorAccentVariant,
    setHeaderVariant,
    setHeroVariant,
    setLogosVariant,
    setFeaturesVariant,
    setStatsVariant,
    setTestimonialsVariant,
    setFaqVariant,
    setCtaVariant,
    setBlogVariant,
    toggleDebugMenu,
    resetToDefaults,
  }

  return (
    <DebugContext.Provider value={value}>
      {children}
    </DebugContext.Provider>
  )
}

// Hooks
export function useDebug() {
  const context = useContext(DebugContext)
  if (!context) throw new Error('useDebug must be used within a DebugProvider')
  return context
}

export function useColorAccentVariant() { return useContext(DebugContext)?.colorAccentVariant ?? defaultState.colorAccentVariant }
export function useHeaderVariant() { return useContext(DebugContext)?.headerVariant ?? defaultState.headerVariant }
export function useHeroVariant() { return useContext(DebugContext)?.heroVariant ?? defaultState.heroVariant }
export function useLogosVariant() { return useContext(DebugContext)?.logosVariant ?? defaultState.logosVariant }
export function useFeaturesVariant() { return useContext(DebugContext)?.featuresVariant ?? defaultState.featuresVariant }
export function useStatsVariant() { return useContext(DebugContext)?.statsVariant ?? defaultState.statsVariant }
export function useTestimonialsVariant() { return useContext(DebugContext)?.testimonialsVariant ?? defaultState.testimonialsVariant }
export function useFaqVariant() { return useContext(DebugContext)?.faqVariant ?? defaultState.faqVariant }
export function useCtaVariant() { return useContext(DebugContext)?.ctaVariant ?? defaultState.ctaVariant }
export function useBlogVariant() { return useContext(DebugContext)?.blogVariant ?? defaultState.blogVariant }
