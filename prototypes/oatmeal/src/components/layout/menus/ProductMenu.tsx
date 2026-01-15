'use client'

import Image from 'next/image'
import Link from 'next/link'

interface MenuItemProps {
  title: string
  description: string
  icon: string
  href: string
  badge?: string
}

function MenuItem({ title, description, icon, href, badge }: MenuItemProps) {
  return (
    <Link
      href={href}
      className="flex items-start gap-3 p-3 rounded-xl hover:bg-olive-100 transition-colors group"
    >
      <div className="w-6 h-6 shrink-0 mt-0.5">
        <Image src={icon} alt="" width={24} height={24} className="w-6 h-6" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-olive-900 group-hover:text-olive-700">
            {title}
          </span>
          {badge && (
            <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase bg-adapty-100 text-adapty-700 rounded">
              {badge}
            </span>
          )}
        </div>
        <p className="text-xs text-olive-500 mt-0.5 line-clamp-2">{description}</p>
      </div>
    </Link>
  )
}

export function ProductMenu() {
  return (
    <div className="w-[720px] p-6 grid grid-cols-3 gap-6">
      {/* TECH Column */}
      <div>
        <h4 className="text-xs font-semibold text-olive-400 uppercase tracking-wider mb-3 px-3">
          Tech
        </h4>
        <div className="space-y-1">
          <MenuItem
            title="SDK Integration"
            description="Drop-in SDKs for iOS, Android, React Native, Flutter, Unity"
            icon="/images/menu-icons/icon-24x24-1n.svg"
            href="/sdk"
          />
          <MenuItem
            title="Server-to-Server API"
            description="RESTful API for server-side integrations"
            icon="/images/menu-icons/icon-24x24-2n.svg"
            href="/api"
          />
          <MenuItem
            title="No-Code Migration"
            description="Switch from RevenueCat or custom solution"
            icon="/images/menu-icons/icon-24x24-3n.svg"
            href="/migration"
            badge="new"
          />
        </div>
      </div>

      {/* PAYWALLS Column */}
      <div>
        <h4 className="text-xs font-semibold text-olive-400 uppercase tracking-wider mb-3 px-3">
          Paywalls
        </h4>
        <div className="space-y-1">
          <MenuItem
            title="Paywall Builder"
            description="Visual editor for stunning paywalls"
            icon="/images/menu-icons/icon-24x24-4n.svg"
            href="/paywall-builder"
          />
          <MenuItem
            title="A/B Testing"
            description="Run experiments to maximize conversions"
            icon="/images/menu-icons/icon-24x24-5n.svg"
            href="/ab-testing"
          />
          <MenuItem
            title="Onboarding Builder"
            description="Design high-converting onboarding flows"
            icon="/images/menu-icons/icon-24x24-12n.svg"
            href="/onboarding-builder"
            badge="beta"
          />
        </div>
      </div>

      {/* ANALYTICS Column */}
      <div>
        <h4 className="text-xs font-semibold text-olive-400 uppercase tracking-wider mb-3 px-3">
          Analytics
        </h4>
        <div className="space-y-1">
          <MenuItem
            title="Subscription Analytics"
            description="MRR, LTV, churn, and cohort analysis"
            icon="/images/menu-icons/icon-24x24-9n.svg"
            href="/analytics"
          />
          <MenuItem
            title="A/B Test Results"
            description="Statistical confidence for experiments"
            icon="/images/menu-icons/icon-24x24-10n.svg"
            href="/ab-results"
          />
          <MenuItem
            title="Revenue Optimization"
            description="Pricing experiments and revenue insights"
            icon="/images/menu-icons/icon-24x24-11n.svg"
            href="/revenue"
          />
        </div>
      </div>
    </div>
  )
}
