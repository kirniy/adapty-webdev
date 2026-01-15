'use client'

import { useHeroVariant, type HeroVariant } from '@/lib/debug-context'
import { HeroCenteredDemo } from './hero-variants/HeroCenteredDemo'
import { HeroSplitLeft } from './hero-variants/HeroSplitLeft'
import { HeroWallpaperBg } from './hero-variants/HeroWallpaperBg'
import { HeroMinimalText } from './hero-variants/HeroMinimalText'

const HERO_COMPONENTS: Record<HeroVariant, React.ComponentType> = {
  'centered-demo': HeroCenteredDemo,
  'split-left': HeroSplitLeft,
  'wallpaper-bg': HeroWallpaperBg,
  'minimal-text': HeroMinimalText,
}

export function Hero() {
  const variant = useHeroVariant()
  const Component = HERO_COMPONENTS[variant]

  return <Component />
}
