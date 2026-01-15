'use client'

import { MenuContainer } from './MenuContainer'
import { MenuItem } from './MenuItem'
import { MenuSection } from './MenuSection'
import { MenuSidebar } from './MenuSidebar'
import { PRODUCT_SIDEBAR_LINKS, PRODUCT_COLUMNS } from './data/menuContent'

/**
 * ProductMenu - "The Command Center"
 *
 * Layout: 960px wide
 * - Left sidebar (200px): Navigation links + status
 * - Right content (720px): 3-column grid with TECH, PAYWALLS, ANALYTICS
 *
 * Features:
 * - Gradient sidebar with pulsing status indicator
 * - 17 product items across 3 columns
 * - NEW badges for new features
 * - Spring hover animations
 */
export function ProductMenu() {
  return (
    <MenuContainer width={960} className="flex">
      {/* Sidebar */}
      <MenuSidebar links={PRODUCT_SIDEBAR_LINKS} showStatusPulse />

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-3 gap-6 p-6 bg-white">
        {PRODUCT_COLUMNS.map((column) => (
          <MenuSection key={column.title} title={column.title}>
            {column.items.map((item) => (
              <MenuItem
                key={item.title}
                title={item.title}
                icon={item.icon}
                href={item.href}
                badge={item.badge}
                compact
              />
            ))}
          </MenuSection>
        ))}
      </div>
    </MenuContainer>
  )
}
