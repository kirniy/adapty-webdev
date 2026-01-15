'use client'

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react'

// Grid animation variants
export type GridVariant = 'cursor-tracking' | 'slow-drift' | 'static' | 'off'

// Header/navbar variants
export type HeaderVariant = 'oatmeal-simple' | 'aura-megamenu'

// Section variant types - each section can have multiple design variants
export type HeroVariant = 'centered-demo' | 'split-left' | 'wallpaper-bg' | 'minimal-text'
export type TrustedByVariant = 'marquee' | 'static-grid' | 'static-minimal'
export type CoreFeaturesVariant = 'zigzag' | 'bento' | 'large-demo' | 'sticky-scroll' | 'cards'
export type StatsVariant = 'cards' | 'inline' | 'graph' | 'floating'
export type TestimonialsVariant = 'editorial' | 'wall' | 'carousel'
export type RoleCardsVariant = 'cards' | 'tabs' | 'horizontal'
export type IntegrationsVariant = 'marquee' | 'static-grid' | 'categorized'

// Variant option type for UI
export interface VariantOption<T> {
  value: T
  label: string
  description: string
}

// All available grid variants with labels
export const GRID_VARIANTS: VariantOption<GridVariant>[] = [
  { value: 'cursor-tracking', label: 'Cursor Tracking', description: 'Grid reveals around cursor position' },
  { value: 'slow-drift', label: 'Slow Drift', description: 'Continuous animation, no cursor tracking' },
  { value: 'static', label: 'Static', description: 'No animation, just pattern' },
  { value: 'off', label: 'Off', description: 'No grid displayed' },
]

// All available header variants with labels
export const HEADER_VARIANTS: VariantOption<HeaderVariant>[] = [
  { value: 'oatmeal-simple', label: 'Floating Pill', description: 'Pill-shaped navbar with glass blur' },
  { value: 'aura-megamenu', label: 'Full-Width Bar', description: 'Traditional full-width header' },
]

// Section variant options
export const HERO_VARIANTS: VariantOption<HeroVariant>[] = [
  { value: 'centered-demo', label: 'Centered + Demo', description: 'Centered text with screenshot below' },
  { value: 'split-left', label: 'Split Layout', description: 'Two-column: text left, demo right' },
  { value: 'wallpaper-bg', label: 'Full Wallpaper', description: 'Text on wallpaper background' },
  { value: 'minimal-text', label: 'Minimal Text', description: 'Typography-focused, no screenshot' },
]

export const TRUSTED_BY_VARIANTS: VariantOption<TrustedByVariant>[] = [
  { value: 'marquee', label: 'Scrolling Marquee', description: 'Infinite horizontal scroll' },
  { value: 'static-grid', label: 'Static Grid', description: 'Stripe-style weighted display' },
  { value: 'static-minimal', label: 'Minimal Row', description: 'Single row, no animation' },
]

export const CORE_FEATURES_VARIANTS: VariantOption<CoreFeaturesVariant>[] = [
  { value: 'zigzag', label: 'Zigzag Alternating', description: 'Classic 50/50 alternating layout' },
  { value: 'bento', label: 'Bento Grid', description: 'Modern bento-style with varied sizes' },
  { value: 'large-demo', label: 'Large Demo', description: 'Hero demo + feature grid below' },
  { value: 'sticky-scroll', label: 'Sticky Scroll', description: 'Apple-style scroll-triggered' },
  { value: 'cards', label: 'Feature Cards', description: 'Equal 3-column card grid' },
]

export const STATS_VARIANTS: VariantOption<StatsVariant>[] = [
  { value: 'cards', label: 'Dark Cards', description: 'Dark background, centered numbers' },
  { value: 'inline', label: 'Inline Row', description: 'Compact horizontal bar' },
  { value: 'graph', label: 'Growth Graph', description: 'Stats with decorative chart' },
  { value: 'floating', label: 'Floating Cards', description: 'Hoverable card grid' },
]

export const TESTIMONIALS_VARIANTS: VariantOption<TestimonialsVariant>[] = [
  { value: 'editorial', label: 'Editorial', description: 'Magazine-style dark hero' },
  { value: 'wall', label: 'Social Wall', description: 'Scrolling testimonial marquee' },
  { value: 'carousel', label: 'Carousel', description: 'Arrow navigation, one at a time' },
]

export const ROLE_CARDS_VARIANTS: VariantOption<RoleCardsVariant>[] = [
  { value: 'cards', label: 'Cards Grid', description: 'Visual cards with images' },
  { value: 'tabs', label: 'Tab Panel', description: 'Interactive role switcher' },
  { value: 'horizontal', label: 'Horizontal', description: 'Scrolling card carousel' },
]

export const INTEGRATIONS_VARIANTS: VariantOption<IntegrationsVariant>[] = [
  { value: 'marquee', label: 'Scrolling Marquee', description: 'Continuous logo scroll' },
  { value: 'static-grid', label: 'Static Grid', description: 'Fixed grid of logos' },
  { value: 'categorized', label: 'Categorized', description: 'Grouped by integration type' },
]

// Debug state interface
interface DebugState {
  gridVariant: GridVariant
  headerVariant: HeaderVariant
  // Section variants
  heroVariant: HeroVariant
  trustedByVariant: TrustedByVariant
  coreFeaturesVariant: CoreFeaturesVariant
  statsVariant: StatsVariant
  testimonialsVariant: TestimonialsVariant
  roleCardsVariant: RoleCardsVariant
  integrationsVariant: IntegrationsVariant
  isDebugMenuOpen: boolean
}

// Context value interface
interface DebugContextValue extends DebugState {
  setGridVariant: (variant: GridVariant) => void
  setHeaderVariant: (variant: HeaderVariant) => void
  // Section variant setters
  setHeroVariant: (variant: HeroVariant) => void
  setTrustedByVariant: (variant: TrustedByVariant) => void
  setCoreFeaturesVariant: (variant: CoreFeaturesVariant) => void
  setStatsVariant: (variant: StatsVariant) => void
  setTestimonialsVariant: (variant: TestimonialsVariant) => void
  setRoleCardsVariant: (variant: RoleCardsVariant) => void
  setIntegrationsVariant: (variant: IntegrationsVariant) => void
  toggleDebugMenu: () => void
  cycleGridVariant: (direction: 'next' | 'prev') => void
  cycleHeaderVariant: (direction: 'next' | 'prev') => void
  // Generic section cycler
  cycleSectionVariant: (
    section: keyof typeof SECTION_VARIANT_CONFIG,
    direction: 'next' | 'prev'
  ) => void
}

// Section variant configuration for generic cycling
export const SECTION_VARIANT_CONFIG = {
  hero: { variants: HERO_VARIANTS, key: 'heroVariant' as const },
  trustedBy: { variants: TRUSTED_BY_VARIANTS, key: 'trustedByVariant' as const },
  coreFeatures: { variants: CORE_FEATURES_VARIANTS, key: 'coreFeaturesVariant' as const },
  stats: { variants: STATS_VARIANTS, key: 'statsVariant' as const },
  testimonials: { variants: TESTIMONIALS_VARIANTS, key: 'testimonialsVariant' as const },
  roleCards: { variants: ROLE_CARDS_VARIANTS, key: 'roleCardsVariant' as const },
  integrations: { variants: INTEGRATIONS_VARIANTS, key: 'integrationsVariant' as const },
} as const

// Default state
const defaultState: DebugState = {
  gridVariant: 'slow-drift', // Default to slow-drift (not cheesy cursor-tracking)
  headerVariant: 'oatmeal-simple', // Start with current simple navbar
  // Section defaults - start with current implementations
  heroVariant: 'centered-demo',
  trustedByVariant: 'marquee',
  coreFeaturesVariant: 'zigzag',
  statsVariant: 'cards',
  testimonialsVariant: 'editorial',
  roleCardsVariant: 'cards',
  integrationsVariant: 'marquee',
  isDebugMenuOpen: false,
}

// Storage key
const STORAGE_KEY = 'adapty-debug-state'

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
          gridVariant: parsed.gridVariant ?? prev.gridVariant,
          headerVariant: parsed.headerVariant ?? prev.headerVariant,
          // Section variants
          heroVariant: parsed.heroVariant ?? prev.heroVariant,
          trustedByVariant: parsed.trustedByVariant ?? prev.trustedByVariant,
          coreFeaturesVariant: parsed.coreFeaturesVariant ?? prev.coreFeaturesVariant,
          statsVariant: parsed.statsVariant ?? prev.statsVariant,
          testimonialsVariant: parsed.testimonialsVariant ?? prev.testimonialsVariant,
          roleCardsVariant: parsed.roleCardsVariant ?? prev.roleCardsVariant,
          integrationsVariant: parsed.integrationsVariant ?? prev.integrationsVariant,
          // Don't restore isDebugMenuOpen - always start closed
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

  // Set grid variant
  const setGridVariant = useCallback((variant: GridVariant) => {
    setState(prev => ({ ...prev, gridVariant: variant }))
  }, [])

  // Set header variant
  const setHeaderVariant = useCallback((variant: HeaderVariant) => {
    setState(prev => ({ ...prev, headerVariant: variant }))
  }, [])

  // Section variant setters
  const setHeroVariant = useCallback((variant: HeroVariant) => {
    setState(prev => ({ ...prev, heroVariant: variant }))
  }, [])

  const setTrustedByVariant = useCallback((variant: TrustedByVariant) => {
    setState(prev => ({ ...prev, trustedByVariant: variant }))
  }, [])

  const setCoreFeaturesVariant = useCallback((variant: CoreFeaturesVariant) => {
    setState(prev => ({ ...prev, coreFeaturesVariant: variant }))
  }, [])

  const setStatsVariant = useCallback((variant: StatsVariant) => {
    setState(prev => ({ ...prev, statsVariant: variant }))
  }, [])

  const setTestimonialsVariant = useCallback((variant: TestimonialsVariant) => {
    setState(prev => ({ ...prev, testimonialsVariant: variant }))
  }, [])

  const setRoleCardsVariant = useCallback((variant: RoleCardsVariant) => {
    setState(prev => ({ ...prev, roleCardsVariant: variant }))
  }, [])

  const setIntegrationsVariant = useCallback((variant: IntegrationsVariant) => {
    setState(prev => ({ ...prev, integrationsVariant: variant }))
  }, [])

  // Toggle debug menu
  const toggleDebugMenu = useCallback(() => {
    setState(prev => ({ ...prev, isDebugMenuOpen: !prev.isDebugMenuOpen }))
  }, [])

  // Cycle through grid variants
  const cycleGridVariant = useCallback((direction: 'next' | 'prev') => {
    setState(prev => {
      const currentIndex = GRID_VARIANTS.findIndex(v => v.value === prev.gridVariant)
      const newIndex = direction === 'next'
        ? (currentIndex + 1) % GRID_VARIANTS.length
        : (currentIndex - 1 + GRID_VARIANTS.length) % GRID_VARIANTS.length
      return { ...prev, gridVariant: GRID_VARIANTS[newIndex].value }
    })
  }, [])

  // Cycle through header variants
  const cycleHeaderVariant = useCallback((direction: 'next' | 'prev') => {
    setState(prev => {
      const currentIndex = HEADER_VARIANTS.findIndex(v => v.value === prev.headerVariant)
      const newIndex = direction === 'next'
        ? (currentIndex + 1) % HEADER_VARIANTS.length
        : (currentIndex - 1 + HEADER_VARIANTS.length) % HEADER_VARIANTS.length
      return { ...prev, headerVariant: HEADER_VARIANTS[newIndex].value }
    })
  }, [])

  // Generic section variant cycler
  const cycleSectionVariant = useCallback((
    section: keyof typeof SECTION_VARIANT_CONFIG,
    direction: 'next' | 'prev'
  ) => {
    const config = SECTION_VARIANT_CONFIG[section]
    setState(prev => {
      const currentValue = prev[config.key]
      const currentIndex = config.variants.findIndex(v => v.value === currentValue)
      const newIndex = direction === 'next'
        ? (currentIndex + 1) % config.variants.length
        : (currentIndex - 1 + config.variants.length) % config.variants.length
      return { ...prev, [config.key]: config.variants[newIndex].value }
    })
  }, [])

  const value: DebugContextValue = {
    ...state,
    setGridVariant,
    setHeaderVariant,
    setHeroVariant,
    setTrustedByVariant,
    setCoreFeaturesVariant,
    setStatsVariant,
    setTestimonialsVariant,
    setRoleCardsVariant,
    setIntegrationsVariant,
    toggleDebugMenu,
    cycleGridVariant,
    cycleHeaderVariant,
    cycleSectionVariant,
  }

  return (
    <DebugContext.Provider value={value}>
      {children}
    </DebugContext.Provider>
  )
}

// Hook to use debug context
export function useDebug() {
  const context = useContext(DebugContext)
  if (!context) {
    throw new Error('useDebug must be used within a DebugProvider')
  }
  return context
}

// Hook to get just the grid variant (for AnimatedGrid component)
export function useGridVariant(): GridVariant {
  const context = useContext(DebugContext)
  // Return default if not in provider (for SSR or isolated components)
  return context?.gridVariant ?? defaultState.gridVariant
}

// Hook to get just the header variant (for Navbar component)
export function useHeaderVariant(): HeaderVariant {
  const context = useContext(DebugContext)
  // Return default if not in provider (for SSR or isolated components)
  return context?.headerVariant ?? defaultState.headerVariant
}

// Section variant hooks - use these in individual section components
export function useHeroVariant(): HeroVariant {
  const context = useContext(DebugContext)
  return context?.heroVariant ?? defaultState.heroVariant
}

export function useTrustedByVariant(): TrustedByVariant {
  const context = useContext(DebugContext)
  return context?.trustedByVariant ?? defaultState.trustedByVariant
}

export function useCoreFeaturesVariant(): CoreFeaturesVariant {
  const context = useContext(DebugContext)
  return context?.coreFeaturesVariant ?? defaultState.coreFeaturesVariant
}

export function useStatsVariant(): StatsVariant {
  const context = useContext(DebugContext)
  return context?.statsVariant ?? defaultState.statsVariant
}

export function useTestimonialsVariant(): TestimonialsVariant {
  const context = useContext(DebugContext)
  return context?.testimonialsVariant ?? defaultState.testimonialsVariant
}

export function useRoleCardsVariant(): RoleCardsVariant {
  const context = useContext(DebugContext)
  return context?.roleCardsVariant ?? defaultState.roleCardsVariant
}

export function useIntegrationsVariant(): IntegrationsVariant {
  const context = useContext(DebugContext)
  return context?.integrationsVariant ?? defaultState.integrationsVariant
}
