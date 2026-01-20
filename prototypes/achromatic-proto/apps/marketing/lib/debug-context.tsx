'use client'

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react'

// Grid animation variants
export type GridVariant = 'default' | 'flickering' | 'off'

// Corner radius variants
export type CornerRadiusVariant = 'default' | 'round' | 'sharp'

// Grid thickness variants
export type GridThicknessVariant = 'default' | 'thin' | 'thick'

export type GridColorVariant = 'default' | 'muted' | 'accent' | 'blue' | 'purple'
export type GridOpacityVariant = 'faint' | 'subtle' | 'visible' | 'strong'
export type GridZIndexVariant = 'deep' | 'back' | 'normal' | 'front'

// Header/navbar variants
export type HeaderVariant = 'default' | 'simple'

// Color accent variants
export type ColorAccentVariant = 'full' | 'subtle' | 'minimal'

// Section variants mapped to Achromatic Template Components
// All sections support 'off' to hide them
export type HeroVariant = 'marketing' | 'split' | 'pricing' | 'story' | 'contact' | 'off'
export type LogosVariant = 'default' | 'linear' | 'off'
export type FeaturesVariant = 'solution' | 'roles' | 'tabbed' | 'bento-tabs' | 'off'
export type StatsVariant = 'default' | 'timeline' | 'off'
export type TestimonialsVariant = 'default' | 'editorial' | 'team' | 'clean' | 'off'
export type FaqVariant = 'default' | 'pricing' | 'off'
export type CtaVariant = 'default' | 'careers' | 'off'
export type BlogVariant = 'default' | 'featured' | 'off'
export type SdkVariant = 'default' | 'off'
export type FooterVariant = 'default' | 'flickering' | 'off'
export type HeroLinesVariant = 'above' | 'below'
export type ImageSetVariant = 'set1' | 'set2' | 'set3'
export type MonochromeMode = boolean

// Variant option type for UI
export interface VariantOption<T> {
  value: T
  label: string
  description: string
}

// All available grid variants with labels
export const GRID_VARIANTS: VariantOption<GridVariant>[] = [
  { value: 'default', label: 'Diagonal Lines', description: 'Classic diagonal static pattern' },
  { value: 'flickering', label: 'Flickering Grid', description: 'Animated pixel grid' },
  { value: 'off', label: 'Off', description: 'No background grid' },
]

export const CORNER_RADIUS_VARIANTS: VariantOption<CornerRadiusVariant>[] = [
  { value: 'default', label: 'Default', description: 'Standard corner radius' },
  { value: 'round', label: 'Round', description: 'More rounded corners' },
  { value: 'sharp', label: 'Sharp', description: 'Square corners' },
]

export const GRID_THICKNESS_VARIANTS: VariantOption<GridThicknessVariant>[] = [
  { value: 'default', label: 'Default', description: 'Standard thickness' },
  { value: 'thin', label: 'Thin', description: 'Thinner lines' },
  { value: 'thick', label: 'Thick', description: 'Thicker lines' },
]

export const GRID_COLOR_VARIANTS: VariantOption<GridColorVariant>[] = [
  { value: 'default', label: 'Default', description: 'Standard color' },
  { value: 'muted', label: 'Muted', description: 'Subtle gray' },
  { value: 'accent', label: 'Accent', description: 'Brand accent color' },
  { value: 'blue', label: 'Blue', description: 'Blue tint' },
  { value: 'purple', label: 'Purple', description: 'Purple tint' },
]

export const GRID_OPACITY_VARIANTS: VariantOption<GridOpacityVariant>[] = [
  { value: 'faint', label: 'Faint', description: 'Barely visible (10%)' },
  { value: 'subtle', label: 'Subtle', description: 'Light (20%)' },
  { value: 'visible', label: 'Visible', description: 'Medium (40%)' },
  { value: 'strong', label: 'Strong', description: 'High contrast (60%)' },
]

export const GRID_Z_INDEX_VARIANTS: VariantOption<GridZIndexVariant>[] = [
  { value: 'deep', label: 'Deep', description: 'Behind everything (-10)' },
  { value: 'back', label: 'Back', description: 'Just behind content (-1)' },
  { value: 'normal', label: 'Normal', description: 'Document flow (0)' },
  { value: 'front', label: 'Front', description: 'On top of content (10)' },
]

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
  { value: 'marketing', label: 'Marketing', description: 'Centered hero with pills and tabs' },
  { value: 'split', label: 'Split Layout', description: 'Content left, visual right - denser info' },
  { value: 'pricing', label: 'Pricing', description: 'Simple centered hero for pricing' },
  { value: 'story', label: 'Story', description: 'Text-heavy hero for about pages' },
  { value: 'contact', label: 'Contact', description: 'Hero with contact form' },
  { value: 'off', label: 'Off', description: 'Hide this section' },
]

export const LOGOS_VARIANTS: VariantOption<LogosVariant>[] = [
  { value: 'default', label: 'Default', description: 'Standard logo strip' },
  { value: 'linear', label: 'Linear Style', description: 'Blur-on-hover with customer story links' },
  { value: 'off', label: 'Off', description: 'Hide this section' },
]

export const FEATURES_VARIANTS: VariantOption<FeaturesVariant>[] = [
  { value: 'bento-tabs', label: 'Bento Tabs', description: 'Tabbed bento grids with smart hover (recommended)' },
  { value: 'solution', label: 'Solution Bento', description: 'Complex bento grid layout' },
  { value: 'tabbed', label: 'Tabbed Features', description: 'Attio-style tab-switching feature showcase' },
  { value: 'roles', label: 'Role Cards', description: 'For Developers/Owners/Marketers cards' },
  { value: 'off', label: 'Off', description: 'Hide this section' },
]

export const STATS_VARIANTS: VariantOption<StatsVariant>[] = [
  { value: 'default', label: 'Default', description: '4-column number ticker' },
  { value: 'timeline', label: 'Timeline', description: 'Vertical timeline view' },
  { value: 'off', label: 'Off', description: 'Hide this section' },
]

export const TESTIMONIALS_VARIANTS: VariantOption<TestimonialsVariant>[] = [
  { value: 'default', label: 'Marquee', description: 'Infinite scrolling reviews' },
  { value: 'editorial', label: 'Editorial', description: 'Featured quote with case study cards' },
  { value: 'team', label: 'Team', description: 'Team member photos' },
  { value: 'clean', label: 'Clean', description: 'Minimal click-through testimonials with magnetic cursor' },
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
  { value: 'featured', label: 'Featured', description: 'Featured post with smaller grid' },
  { value: 'off', label: 'Off', description: 'Hide this section' },
]

export const SDK_VARIANTS: VariantOption<SdkVariant>[] = [
  { value: 'default', label: 'SDK Code', description: 'Language-tabbed code snippets' },
  { value: 'off', label: 'Off', description: 'Hide this section' },
]

export const FOOTER_VARIANTS: VariantOption<FooterVariant>[] = [
  { value: 'default', label: 'Default', description: 'Standard footer with links' },
  { value: 'flickering', label: 'Flickering', description: 'Footer with animated flickering grid' },
  { value: 'off', label: 'Off', description: 'Hide footer' },
]

export const HERO_LINES_VARIANTS: VariantOption<HeroLinesVariant>[] = [
  { value: 'above', label: 'Above Content', description: 'Dashed lines appear above hero content' },
  { value: 'below', label: 'Below Content', description: 'Dashed lines hidden behind hero content' },
]

export const IMAGE_SET_VARIANTS: VariantOption<ImageSetVariant>[] = [
  { value: 'set1', label: 'White Grid', description: 'White background with diagonal grid lines' },
  { value: 'set2', label: 'Monochrome', description: 'Strict monochrome with thin purple accents' },
  { value: 'set3', label: 'Warm Gray', description: 'Warm gray gradient with purple highlights' },
]

// Debug state interface
interface DebugState {
  colorAccentVariant: ColorAccentVariant
  gridVariant: GridVariant
  cornerRadiusVariant: CornerRadiusVariant
  gridThicknessVariant: GridThicknessVariant
  dashedThicknessVariant: GridThicknessVariant
  gridColorVariant: GridColorVariant
  gridOpacityVariant: GridOpacityVariant
  gridZIndexVariant: GridZIndexVariant
  headerVariant: HeaderVariant
  heroVariant: HeroVariant
  logosVariant: LogosVariant
  featuresVariant: FeaturesVariant
  statsVariant: StatsVariant
  testimonialsVariant: TestimonialsVariant
  faqVariant: FaqVariant
  ctaVariant: CtaVariant
  blogVariant: BlogVariant
  sdkVariant: SdkVariant
  footerVariant: FooterVariant
  heroLinesVariant: HeroLinesVariant
  imageSetVariant: ImageSetVariant
  monochromeMode: boolean
  isDebugMenuOpen: boolean
}

// Context value interface
interface DebugContextValue extends DebugState {
  setColorAccentVariant: (variant: ColorAccentVariant) => void
  setGridVariant: (variant: GridVariant) => void
  setCornerRadiusVariant: (variant: CornerRadiusVariant) => void
  setGridThicknessVariant: (variant: GridThicknessVariant) => void
  setDashedThicknessVariant: (variant: GridThicknessVariant) => void
  setGridColorVariant: (variant: GridColorVariant) => void
  setGridOpacityVariant: (variant: GridOpacityVariant) => void
  setGridZIndexVariant: (variant: GridZIndexVariant) => void
  setHeaderVariant: (variant: HeaderVariant) => void
  setHeroVariant: (variant: HeroVariant) => void
  setLogosVariant: (variant: LogosVariant) => void
  setFeaturesVariant: (variant: FeaturesVariant) => void
  setStatsVariant: (variant: StatsVariant) => void
  setTestimonialsVariant: (variant: TestimonialsVariant) => void
  setFaqVariant: (variant: FaqVariant) => void
  setCtaVariant: (variant: CtaVariant) => void
  setBlogVariant: (variant: BlogVariant) => void
  setSdkVariant: (variant: SdkVariant) => void
  setFooterVariant: (variant: FooterVariant) => void
  setHeroLinesVariant: (variant: HeroLinesVariant) => void
  setImageSetVariant: (variant: ImageSetVariant) => void
  setMonochromeMode: (enabled: boolean) => void
  toggleDebugMenu: () => void
  resetToDefaults: () => void
}

// Default state
const defaultState: DebugState = {
  colorAccentVariant: 'minimal',
  gridVariant: 'default',
  cornerRadiusVariant: 'default',
  gridThicknessVariant: 'default',
  dashedThicknessVariant: 'thin',
  gridColorVariant: 'muted',
  gridOpacityVariant: 'subtle',
  gridZIndexVariant: 'back',
  headerVariant: 'default',
  heroVariant: 'marketing',
  logosVariant: 'linear',
  featuresVariant: 'solution',
  statsVariant: 'default',
  testimonialsVariant: 'default',
  faqVariant: 'default',
  ctaVariant: 'default',
  blogVariant: 'default',
  sdkVariant: 'default',
  footerVariant: 'default',
  heroLinesVariant: 'above',
  imageSetVariant: 'set1',
  monochromeMode: false,
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

  // Apply corner radius to root
  useEffect(() => {
    if (!isHydrated) return
    const root = document.documentElement
    const radius = 
      state.cornerRadiusVariant === 'round' ? '1rem' : 
      state.cornerRadiusVariant === 'sharp' ? '0' : 
      '0.5rem'
    root.style.setProperty('--radius', radius)
  }, [state.cornerRadiusVariant, isHydrated])

  const setColorAccentVariant = useCallback((variant: ColorAccentVariant) => setState(prev => ({ ...prev, colorAccentVariant: variant })), [])
  const setGridVariant = useCallback((variant: GridVariant) => setState(prev => ({ ...prev, gridVariant: variant })), [])
  const setCornerRadiusVariant = useCallback((variant: CornerRadiusVariant) => setState(prev => ({ ...prev, cornerRadiusVariant: variant })), [])
  const setGridThicknessVariant = useCallback((variant: GridThicknessVariant) => setState(prev => ({ ...prev, gridThicknessVariant: variant })), [])
  const setDashedThicknessVariant = useCallback((variant: GridThicknessVariant) => setState(prev => ({ ...prev, dashedThicknessVariant: variant })), [])
  const setGridColorVariant = useCallback((variant: GridColorVariant) => setState(prev => ({ ...prev, gridColorVariant: variant })), [])
  const setGridOpacityVariant = useCallback((variant: GridOpacityVariant) => setState(prev => ({ ...prev, gridOpacityVariant: variant })), [])
  const setGridZIndexVariant = useCallback((variant: GridZIndexVariant) => setState(prev => ({ ...prev, gridZIndexVariant: variant })), [])
  const setHeaderVariant = useCallback((variant: HeaderVariant) => setState(prev => ({ ...prev, headerVariant: variant })), [])
  const setHeroVariant = useCallback((variant: HeroVariant) => setState(prev => ({ ...prev, heroVariant: variant })), [])
  const setLogosVariant = useCallback((variant: LogosVariant) => setState(prev => ({ ...prev, logosVariant: variant })), [])
  const setFeaturesVariant = useCallback((variant: FeaturesVariant) => setState(prev => ({ ...prev, featuresVariant: variant })), [])
  const setStatsVariant = useCallback((variant: StatsVariant) => setState(prev => ({ ...prev, statsVariant: variant })), [])
  const setTestimonialsVariant = useCallback((variant: TestimonialsVariant) => setState(prev => ({ ...prev, testimonialsVariant: variant })), [])
  const setFaqVariant = useCallback((variant: FaqVariant) => setState(prev => ({ ...prev, faqVariant: variant })), [])
  const setCtaVariant = useCallback((variant: CtaVariant) => setState(prev => ({ ...prev, ctaVariant: variant })), [])
  const setBlogVariant = useCallback((variant: BlogVariant) => setState(prev => ({ ...prev, blogVariant: variant })), [])
  const setSdkVariant = useCallback((variant: SdkVariant) => setState(prev => ({ ...prev, sdkVariant: variant })), [])
  const setFooterVariant = useCallback((variant: FooterVariant) => setState(prev => ({ ...prev, footerVariant: variant })), [])
  const setHeroLinesVariant = useCallback((variant: HeroLinesVariant) => setState(prev => ({ ...prev, heroLinesVariant: variant })), [])
  const setImageSetVariant = useCallback((variant: ImageSetVariant) => setState(prev => ({ ...prev, imageSetVariant: variant })), [])
  const setMonochromeMode = useCallback((enabled: boolean) => setState(prev => ({ ...prev, monochromeMode: enabled })), [])
  const toggleDebugMenu = useCallback(() => setState(prev => ({ ...prev, isDebugMenuOpen: !prev.isDebugMenuOpen })), [])
  const resetToDefaults = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setState({ ...defaultState, isDebugMenuOpen: true })
  }, [])

  const value: DebugContextValue = {
    ...state,
    setColorAccentVariant,
    setGridVariant,
    setCornerRadiusVariant,
    setGridThicknessVariant,
    setDashedThicknessVariant,
    setGridColorVariant,
    setGridOpacityVariant,
    setGridZIndexVariant,
    setHeaderVariant,
    setHeroVariant,
    setLogosVariant,
    setFeaturesVariant,
    setStatsVariant,
    setTestimonialsVariant,
    setFaqVariant,
    setCtaVariant,
    setBlogVariant,
    setSdkVariant,
    setFooterVariant,
    setHeroLinesVariant,
    setImageSetVariant,
    setMonochromeMode,
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
export function useGridVariant() { return useContext(DebugContext)?.gridVariant ?? defaultState.gridVariant }
export function useCornerRadiusVariant() { return useContext(DebugContext)?.cornerRadiusVariant ?? defaultState.cornerRadiusVariant }
export function useGridThicknessVariant() { return useContext(DebugContext)?.gridThicknessVariant ?? defaultState.gridThicknessVariant }
export function useDashedThicknessVariant() { return useContext(DebugContext)?.dashedThicknessVariant ?? defaultState.dashedThicknessVariant }
export function useGridColorVariant() { return useContext(DebugContext)?.gridColorVariant ?? defaultState.gridColorVariant }
export function useGridOpacityVariant() { return useContext(DebugContext)?.gridOpacityVariant ?? defaultState.gridOpacityVariant }
export function useGridZIndexVariant() { return useContext(DebugContext)?.gridZIndexVariant ?? defaultState.gridZIndexVariant }
export function useHeaderVariant() { return useContext(DebugContext)?.headerVariant ?? defaultState.headerVariant }
export function useHeroVariant() { return useContext(DebugContext)?.heroVariant ?? defaultState.heroVariant }
export function useLogosVariant() { return useContext(DebugContext)?.logosVariant ?? defaultState.logosVariant }
export function useFeaturesVariant() { return useContext(DebugContext)?.featuresVariant ?? defaultState.featuresVariant }
export function useStatsVariant() { return useContext(DebugContext)?.statsVariant ?? defaultState.statsVariant }
export function useTestimonialsVariant() { return useContext(DebugContext)?.testimonialsVariant ?? defaultState.testimonialsVariant }
export function useFaqVariant() { return useContext(DebugContext)?.faqVariant ?? defaultState.faqVariant }
export function useCtaVariant() { return useContext(DebugContext)?.ctaVariant ?? defaultState.ctaVariant }
export function useBlogVariant() { return useContext(DebugContext)?.blogVariant ?? defaultState.blogVariant }
export function useSdkVariant() { return useContext(DebugContext)?.sdkVariant ?? defaultState.sdkVariant }
export function useFooterVariant() { return useContext(DebugContext)?.footerVariant ?? defaultState.footerVariant }
export function useHeroLinesVariant() { return useContext(DebugContext)?.heroLinesVariant ?? defaultState.heroLinesVariant }
export function useImageSetVariant() { return useContext(DebugContext)?.imageSetVariant ?? defaultState.imageSetVariant }
export function useMonochromeMode() { return useContext(DebugContext)?.monochromeMode ?? defaultState.monochromeMode }
