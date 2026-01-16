'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import {
  useDebug,
  GRID_VARIANTS,
  HEADER_VARIANTS,
  GRID_LINES_VARIANTS,
  DASHED_GRID_VARIANTS,
  HERO_VARIANTS,
  TRUSTED_BY_VARIANTS,
  CORE_FEATURES_VARIANTS,
  STATS_VARIANTS,
  TESTIMONIALS_VARIANTS,
  ROLE_CARDS_VARIANTS,
  INTEGRATIONS_VARIANTS,
  OPACITY_LEVELS,
  THICKNESS_LEVELS,
  type VariantOption,
} from '@/lib/debug-context'

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

const ChevronDown = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const GridIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
)

const NavIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const BlocksIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="3" y1="15" x2="21" y2="15" />
  </svg>
)

const BordersIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="12" y1="3" x2="12" y2="21" />
  </svg>
)

const DashedIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3">
    <line x1="6" y1="3" x2="6" y2="21" />
    <line x1="12" y1="3" x2="12" y2="21" />
    <line x1="18" y1="3" x2="18" y2="21" />
  </svg>
)

// Generic variant selector component with pill buttons
function VariantSelector<T extends string>({
  variants,
  currentValue,
  onChange,
}: {
  variants: VariantOption<T>[]
  currentValue: T
  onChange: (value: T) => void
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {variants.map((variant) => (
        <button
          key={variant.value}
          onClick={() => onChange(variant.value)}
          className={`
            px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200
            ${currentValue === variant.value
              ? 'bg-adapty-500 text-white shadow-sm'
              : 'bg-white/60 text-olive-600 hover:bg-white hover:text-olive-900 border border-olive-200/50'
            }
          `}
          title={variant.description}
        >
          {variant.label}
        </button>
      ))}
    </div>
  )
}

// Collapsible section component
function CollapsibleSection({
  title,
  icon,
  children,
  defaultOpen = false,
}: {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-olive-200/50 pt-3 mt-3 first:border-t-0 first:pt-0 first:mt-0">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between text-xs font-medium text-olive-600 uppercase tracking-wider hover:text-olive-900 transition-colors"
      >
        <span className="flex items-center gap-1.5">
          {icon}
          {title}
        </span>
        <ChevronDown isOpen={isOpen} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pt-2.5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function DebugMenu() {
  const {
    isDebugMenuOpen,
    toggleDebugMenu,
    gridVariant,
    setGridVariant,
    headerVariant,
    setHeaderVariant,
    gridLinesStyle,
    setGridLinesStyle,
    gridLinesOpacity,
    setGridLinesOpacity,
    gridLinesWidth,
    setGridLinesWidth,
    dashedGridStyle,
    setDashedGridStyle,
    dashedGridOpacity,
    setDashedGridOpacity,
    heroVariant,
    setHeroVariant,
    trustedByVariant,
    setTrustedByVariant,
    coreFeaturesVariant,
    setCoreFeaturesVariant,
    statsVariant,
    setStatsVariant,
    testimonialsVariant,
    setTestimonialsVariant,
    roleCardsVariant,
    setRoleCardsVariant,
    integrationsVariant,
    setIntegrationsVariant,
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
            className="bg-olive-50/95 backdrop-blur-xl rounded-2xl shadow-xl border border-olive-200/50 p-4 w-80 max-h-[80vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-olive-900 flex items-center gap-2">
                <SettingsIcon />
                Design Variants
              </h3>
              <button
                onClick={toggleDebugMenu}
                className="p-1.5 rounded-lg hover:bg-olive-200/50 text-olive-600 hover:text-olive-900 transition-colors"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Global Controls */}
            <CollapsibleSection title="Background Grid" icon={<GridIcon />} defaultOpen>
              <VariantSelector
                variants={GRID_VARIANTS}
                currentValue={gridVariant}
                onChange={setGridVariant}
              />
            </CollapsibleSection>

            <CollapsibleSection title="Navigation" icon={<NavIcon />} defaultOpen>
              <VariantSelector
                variants={HEADER_VARIANTS}
                currentValue={headerVariant}
                onChange={setHeaderVariant}
              />
            </CollapsibleSection>

            <CollapsibleSection title="Section Borders" icon={<BordersIcon />} defaultOpen>
              <div className="space-y-3">
                <VariantSelector
                  variants={GRID_LINES_VARIANTS}
                  currentValue={gridLinesStyle}
                  onChange={setGridLinesStyle}
                />
                {gridLinesStyle !== 'off' && (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold text-olive-400">Opacity</span>
                      <VariantSelector
                        variants={OPACITY_LEVELS}
                        currentValue={gridLinesOpacity}
                        onChange={setGridLinesOpacity}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold text-olive-400">Width</span>
                      <VariantSelector
                        variants={THICKNESS_LEVELS}
                        currentValue={gridLinesWidth}
                        onChange={setGridLinesWidth}
                      />
                    </div>
                  </>
                )}
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="Dashed Overlay" icon={<DashedIcon />} defaultOpen>
              <div className="space-y-3">
                <VariantSelector
                  variants={DASHED_GRID_VARIANTS}
                  currentValue={dashedGridStyle}
                  onChange={setDashedGridStyle}
                />
                {dashedGridStyle !== 'off' && (
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-olive-400">Opacity</span>
                    <VariantSelector
                      variants={OPACITY_LEVELS}
                      currentValue={dashedGridOpacity}
                      onChange={setDashedGridOpacity}
                    />
                  </div>
                )}
              </div>
            </CollapsibleSection>

            {/* Section Variants */}
            <div className="mt-4 pt-3 border-t-2 border-olive-300/50">
              <p className="text-[10px] font-bold text-olive-400 uppercase tracking-widest mb-3">
                Section Variants
              </p>
            </div>

            <CollapsibleSection title="Hero" icon={<BlocksIcon />} defaultOpen>
              <VariantSelector
                variants={HERO_VARIANTS}
                currentValue={heroVariant}
                onChange={setHeroVariant}
              />
            </CollapsibleSection>

            <CollapsibleSection title="Trusted By" icon={<BlocksIcon />}>
              <VariantSelector
                variants={TRUSTED_BY_VARIANTS}
                currentValue={trustedByVariant}
                onChange={setTrustedByVariant}
              />
            </CollapsibleSection>

            <CollapsibleSection title="Features" icon={<BlocksIcon />}>
              <VariantSelector
                variants={CORE_FEATURES_VARIANTS}
                currentValue={coreFeaturesVariant}
                onChange={setCoreFeaturesVariant}
              />
            </CollapsibleSection>

            <CollapsibleSection title="Stats" icon={<BlocksIcon />}>
              <VariantSelector
                variants={STATS_VARIANTS}
                currentValue={statsVariant}
                onChange={setStatsVariant}
              />
            </CollapsibleSection>

            <CollapsibleSection title="Testimonials" icon={<BlocksIcon />}>
              <VariantSelector
                variants={TESTIMONIALS_VARIANTS}
                currentValue={testimonialsVariant}
                onChange={setTestimonialsVariant}
              />
            </CollapsibleSection>

            <CollapsibleSection title="Role Cards" icon={<BlocksIcon />}>
              <VariantSelector
                variants={ROLE_CARDS_VARIANTS}
                currentValue={roleCardsVariant}
                onChange={setRoleCardsVariant}
              />
            </CollapsibleSection>

            <CollapsibleSection title="Integrations" icon={<BlocksIcon />}>
              <VariantSelector
                variants={INTEGRATIONS_VARIANTS}
                currentValue={integrationsVariant}
                onChange={setIntegrationsVariant}
              />
            </CollapsibleSection>

            {/* Footer hint */}
            <div className="mt-4 pt-3 border-t border-olive-200/50">
              <p className="text-[10px] text-olive-400 text-center">
                Settings persist across page refreshes
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
            title="Open Design Variants Panel"
          >
            <SettingsIcon />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
