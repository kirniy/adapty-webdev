'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import {
  useDebug,
  COLOR_ACCENT_VARIANTS,
  GRID_VARIANTS,
  CORNER_RADIUS_VARIANTS,
  GRID_THICKNESS_VARIANTS,
  GRID_COLOR_VARIANTS,
  GRID_OPACITY_VARIANTS,
  GRID_Z_INDEX_VARIANTS,
  HEADER_VARIANTS,
  HERO_VARIANTS,
  LOGOS_VARIANTS,
  FEATURES_VARIANTS,
  STATS_VARIANTS,
  TESTIMONIALS_VARIANTS,
  FAQ_VARIANTS,
  CTA_VARIANTS,
  BLOG_VARIANTS,
  type VariantOption,
} from '~/lib/debug-context'

// Icons (unchanged)
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

// const GridIcon = () => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <rect x="3" y="3" width="7" height="7" />
//     <rect x="14" y="3" width="7" height="7" />
//     <rect x="14" y="14" width="7" height="7" />
//     <rect x="3" y="14" width="7" height="7" />
//   </svg>
// )

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

// Generic variant selector
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
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'bg-background/60 text-muted-foreground hover:bg-background hover:text-foreground border border-border/50'
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

// Collapsible section
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
    <div className="border-t border-border/50 pt-3 mt-3 first:border-t-0 first:pt-0 first:mt-0">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between text-xs font-medium text-muted-foreground uppercase tracking-wider hover:text-foreground transition-colors"
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

const PaletteIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
  </svg>
)

export function DebugMenu() {
  const {
    isDebugMenuOpen,
    toggleDebugMenu,
    resetToDefaults,
    colorAccentVariant, setColorAccentVariant,
    gridVariant, setGridVariant,
    cornerRadiusVariant, setCornerRadiusVariant,
    gridThicknessVariant, setGridThicknessVariant,
    dashedThicknessVariant, setDashedThicknessVariant,
    gridColorVariant, setGridColorVariant,
    gridOpacityVariant, setGridOpacityVariant,
    gridZIndexVariant, setGridZIndexVariant,
    headerVariant, setHeaderVariant,
    heroVariant, setHeroVariant,
    logosVariant, setLogosVariant,
    featuresVariant, setFeaturesVariant,
    statsVariant, setStatsVariant,
    testimonialsVariant, setTestimonialsVariant,
    faqVariant, setFaqVariant,
    ctaVariant, setCtaVariant,
    blogVariant, setBlogVariant,
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
            className="bg-background/95 backdrop-blur-xl rounded-2xl shadow-xl border border-border/50 p-4 w-80 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <SettingsIcon />
                Components
              </h3>
              <button onClick={toggleDebugMenu} className="p-1.5 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors">
                <CloseIcon />
              </button>
            </div>

            <CollapsibleSection title="Color Accent" icon={<PaletteIcon />} defaultOpen>
              <VariantSelector variants={COLOR_ACCENT_VARIANTS} currentValue={colorAccentVariant} onChange={setColorAccentVariant} />
            </CollapsibleSection>

            <CollapsibleSection title="Global Style" icon={<SettingsIcon />} defaultOpen>
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wider">Background</span>
                  <VariantSelector variants={GRID_VARIANTS} currentValue={gridVariant} onChange={setGridVariant} />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wider">Corner Radius</span>
                  <VariantSelector variants={CORNER_RADIUS_VARIANTS} currentValue={cornerRadiusVariant} onChange={setCornerRadiusVariant} />
                </div>
                <div className="space-y-1.5">
                   <span className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wider">Solid Grid Thickness</span>
                   <VariantSelector variants={GRID_THICKNESS_VARIANTS} currentValue={gridThicknessVariant} onChange={setGridThicknessVariant} />
                </div>
                <div className="space-y-1.5">
                   <span className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wider">Dashed Grid Thickness</span>
                   <VariantSelector variants={GRID_THICKNESS_VARIANTS} currentValue={dashedThicknessVariant} onChange={setDashedThicknessVariant} />
                </div>
                <div className="space-y-1.5">
                   <span className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wider">Grid Color</span>
                   <VariantSelector variants={GRID_COLOR_VARIANTS} currentValue={gridColorVariant} onChange={setGridColorVariant} />
                </div>
                <div className="space-y-1.5">
                   <span className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wider">Grid Opacity</span>
                   <VariantSelector variants={GRID_OPACITY_VARIANTS} currentValue={gridOpacityVariant} onChange={setGridOpacityVariant} />
                </div>
                <div className="space-y-1.5">
                   <span className="text-[10px] uppercase font-semibold text-muted-foreground tracking-wider">Grid Z-Index</span>
                   <VariantSelector variants={GRID_Z_INDEX_VARIANTS} currentValue={gridZIndexVariant} onChange={setGridZIndexVariant} />
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="Navbar" icon={<NavIcon />} defaultOpen>
              <VariantSelector variants={HEADER_VARIANTS} currentValue={headerVariant} onChange={setHeaderVariant} />
            </CollapsibleSection>

            <CollapsibleSection title="Hero" icon={<BlocksIcon />} defaultOpen>
              <VariantSelector variants={HERO_VARIANTS} currentValue={heroVariant} onChange={setHeroVariant} />
            </CollapsibleSection>

            <CollapsibleSection title="Features" icon={<BlocksIcon />} defaultOpen>
              <VariantSelector variants={FEATURES_VARIANTS} currentValue={featuresVariant} onChange={setFeaturesVariant} />
            </CollapsibleSection>

            <CollapsibleSection title="Logos" icon={<BlocksIcon />}>
              <VariantSelector variants={LOGOS_VARIANTS} currentValue={logosVariant} onChange={setLogosVariant} />
            </CollapsibleSection>

            <CollapsibleSection title="Stats" icon={<BlocksIcon />}>
              <VariantSelector variants={STATS_VARIANTS} currentValue={statsVariant} onChange={setStatsVariant} />
            </CollapsibleSection>

            <CollapsibleSection title="Testimonials" icon={<BlocksIcon />}>
              <VariantSelector variants={TESTIMONIALS_VARIANTS} currentValue={testimonialsVariant} onChange={setTestimonialsVariant} />
            </CollapsibleSection>

            <CollapsibleSection title="FAQ" icon={<BlocksIcon />}>
              <VariantSelector variants={FAQ_VARIANTS} currentValue={faqVariant} onChange={setFaqVariant} />
            </CollapsibleSection>

            <CollapsibleSection title="CTA" icon={<BlocksIcon />}>
              <VariantSelector variants={CTA_VARIANTS} currentValue={ctaVariant} onChange={setCtaVariant} />
            </CollapsibleSection>

            <CollapsibleSection title="Blog" icon={<BlocksIcon />}>
              <VariantSelector variants={BLOG_VARIANTS} currentValue={blogVariant} onChange={setBlogVariant} />
            </CollapsibleSection>

            <div className="mt-4 pt-3 border-t border-border/50 space-y-2">
              <button
                onClick={resetToDefaults}
                className="w-full px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted rounded-lg transition-colors"
              >
                Reset to Defaults
              </button>
              <p className="text-[10px] text-muted-foreground text-center">
                Achromatic template with Adapty content
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
            className="p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
            title="Open Component Debugger"
          >
            <SettingsIcon />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
