'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useDebug, GRID_VARIANTS, HEADER_VARIANTS, type GridVariant, type HeaderVariant } from '@/lib/debug-context'

// Icons as inline SVGs (no external dependencies)
const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
)

const GridIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
)

const NavIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

// Generic variant button component
function VariantButton<T extends { label: string; description: string }>({
  variant,
  isActive,
  onClick,
}: {
  variant: T
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full px-3 py-2 rounded-lg text-left text-sm transition-all duration-200
        ${isActive
          ? 'bg-adapty-500 text-white shadow-sm'
          : 'bg-white/50 text-olive-700 hover:bg-white/80 hover:text-olive-900'
        }
      `}
    >
      <div className="font-medium">{variant.label}</div>
      <div className={`text-xs mt-0.5 ${isActive ? 'text-white/80' : 'text-olive-500'}`}>
        {variant.description}
      </div>
    </button>
  )
}

export function DebugMenu() {
  const {
    isDebugMenuOpen,
    toggleDebugMenu,
    gridVariant,
    setGridVariant,
    cycleGridVariant,
    headerVariant,
    setHeaderVariant,
    cycleHeaderVariant,
  } = useDebug()

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence mode="wait">
        {isDebugMenuOpen ? (
          <motion.div
            key="panel"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-olive-50/95 backdrop-blur-xl rounded-2xl shadow-xl border border-olive-200/50 p-4 w-72"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-olive-900 flex items-center gap-2">
                <SettingsIcon />
                Debug Panel
              </h3>
              <button
                onClick={toggleDebugMenu}
                className="p-1.5 rounded-lg hover:bg-olive-200/50 text-olive-600 hover:text-olive-900 transition-colors"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Grid Variant Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-olive-600 uppercase tracking-wider flex items-center gap-1.5">
                  <GridIcon />
                  Background Grid
                </label>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => cycleGridVariant('prev')}
                    className="p-1 rounded hover:bg-olive-200/50 text-olive-500 hover:text-olive-700 transition-colors"
                    title="Previous variant"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    onClick={() => cycleGridVariant('next')}
                    className="p-1 rounded hover:bg-olive-200/50 text-olive-500 hover:text-olive-700 transition-colors"
                    title="Next variant"
                  >
                    <ChevronRight />
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                {GRID_VARIANTS.map((variant) => (
                  <VariantButton
                    key={variant.value}
                    variant={variant}
                    isActive={gridVariant === variant.value}
                    onClick={() => setGridVariant(variant.value)}
                  />
                ))}
              </div>
            </div>

            {/* Header/Navbar Variant Section */}
            <div className="mt-4 pt-3 border-t border-olive-200/50 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-medium text-olive-600 uppercase tracking-wider flex items-center gap-1.5">
                  <NavIcon />
                  Navigation
                </label>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => cycleHeaderVariant('prev')}
                    className="p-1 rounded hover:bg-olive-200/50 text-olive-500 hover:text-olive-700 transition-colors"
                    title="Previous variant"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    onClick={() => cycleHeaderVariant('next')}
                    className="p-1 rounded hover:bg-olive-200/50 text-olive-500 hover:text-olive-700 transition-colors"
                    title="Next variant"
                  >
                    <ChevronRight />
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                {HEADER_VARIANTS.map((variant) => (
                  <VariantButton
                    key={variant.value}
                    variant={variant}
                    isActive={headerVariant === variant.value}
                    onClick={() => setHeaderVariant(variant.value)}
                  />
                ))}
              </div>
            </div>

            {/* Future sections placeholder */}
            <div className="mt-4 pt-3 border-t border-olive-200/50">
              <p className="text-xs text-olive-400 text-center">
                More block variants coming soon
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="button"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={toggleDebugMenu}
            className="p-3 bg-olive-900 text-white rounded-full shadow-lg hover:bg-olive-800 hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
            title="Open Debug Panel"
          >
            <SettingsIcon />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
