'use client'

import { useHeroVariant, type HeroVariant } from '@/lib/debug-context'
import { HeroCenteredDemo } from './hero-variants/HeroCenteredDemo'
import { HeroSplitLeft } from './hero-variants/HeroSplitLeft'
import { HeroAchromatic } from './hero-variants/HeroAchromatic'

const HERO_COMPONENTS: Record<HeroVariant, React.ComponentType> = {
  'centered-demo': HeroCenteredDemo,
  'split-left': HeroSplitLeft,
  'achromatic': HeroAchromatic,
}

export function Hero() {
  const variant = useHeroVariant()
  const Component = HERO_COMPONENTS[variant]

  return <Component />
}
