'use client'

import { useHeaderVariant } from '@/lib/debug-context'
import { Navbar } from './Navbar'
import { AuraHeader } from './AuraHeader'

/**
 * HeaderSwitch - Conditionally renders header based on debug menu selection
 *
 * Variants:
 * - oatmeal-simple: Original 4-link minimal navbar
 * - aura-megamenu: Full mega-menu with dropdowns
 */
export function HeaderSwitch() {
  const variant = useHeaderVariant()

  if (variant === 'aura-megamenu') {
    return <AuraHeader />
  }

  return <Navbar />
}
