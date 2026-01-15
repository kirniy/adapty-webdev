'use client'

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react'

// Grid animation variants
export type GridVariant = 'cursor-tracking' | 'slow-drift' | 'static' | 'off'

// Header/navbar variants
export type HeaderVariant = 'oatmeal-simple' | 'aura-megamenu'

// All available grid variants with labels
export const GRID_VARIANTS: { value: GridVariant; label: string; description: string }[] = [
  { value: 'cursor-tracking', label: 'Cursor Tracking', description: 'Grid reveals around cursor position' },
  { value: 'slow-drift', label: 'Slow Drift', description: 'Continuous animation, no cursor tracking' },
  { value: 'static', label: 'Static', description: 'No animation, just pattern' },
  { value: 'off', label: 'Off', description: 'No grid displayed' },
]

// All available header variants with labels
export const HEADER_VARIANTS: { value: HeaderVariant; label: string; description: string }[] = [
  { value: 'oatmeal-simple', label: 'Oatmeal Simple', description: 'Current 4-link minimal navbar' },
  { value: 'aura-megamenu', label: 'Aura Mega Menu', description: 'Multi-level dropdown navigation' },
]

// Debug state interface
interface DebugState {
  gridVariant: GridVariant
  headerVariant: HeaderVariant
  isDebugMenuOpen: boolean
}

// Context value interface
interface DebugContextValue extends DebugState {
  setGridVariant: (variant: GridVariant) => void
  setHeaderVariant: (variant: HeaderVariant) => void
  toggleDebugMenu: () => void
  cycleGridVariant: (direction: 'next' | 'prev') => void
  cycleHeaderVariant: (direction: 'next' | 'prev') => void
}

// Default state
const defaultState: DebugState = {
  gridVariant: 'slow-drift', // Default to slow-drift (not cheesy cursor-tracking)
  headerVariant: 'oatmeal-simple', // Start with current simple navbar
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
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        gridVariant: state.gridVariant,
        headerVariant: state.headerVariant,
      }))
    } catch {
      // Ignore storage errors
    }
  }, [state.gridVariant, state.headerVariant, isHydrated])

  // Set grid variant
  const setGridVariant = useCallback((variant: GridVariant) => {
    setState(prev => ({ ...prev, gridVariant: variant }))
  }, [])

  // Set header variant
  const setHeaderVariant = useCallback((variant: HeaderVariant) => {
    setState(prev => ({ ...prev, headerVariant: variant }))
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

  const value: DebugContextValue = {
    ...state,
    setGridVariant,
    setHeaderVariant,
    toggleDebugMenu,
    cycleGridVariant,
    cycleHeaderVariant,
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
