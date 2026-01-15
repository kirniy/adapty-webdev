'use client'

import Image from 'next/image'
import Link from 'next/link'

interface ResourceLinkProps {
  title: string
  href: string
  icon: string
  badge?: string
}

function ResourceLink({ title, href, icon, badge }: ResourceLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 p-2 rounded-lg hover:bg-olive-100 transition-colors group"
    >
      <Image src={icon} alt="" width={20} height={20} className="w-5 h-5" />
      <span className="text-sm text-olive-700 group-hover:text-olive-900">{title}</span>
      {badge && (
        <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase bg-adapty-100 text-adapty-700 rounded">
          {badge}
        </span>
      )}
    </Link>
  )
}

export function ResourcesMenu() {
  return (
    <div className="w-[720px] p-6 grid grid-cols-3 gap-8">
      {/* LEARN Column */}
      <div>
        <h4 className="text-xs font-semibold text-olive-400 uppercase tracking-wider mb-3 px-2">
          Learn
        </h4>
        <div className="space-y-1">
          <ResourceLink
            title="Blog"
            href="/blog"
            icon="/images/menu-icons/icon-24x24-newsletter.svg"
          />
          <ResourceLink
            title="Glossary"
            href="/glossary"
            icon="/images/menu-icons/icon-24x24-doc.svg"
          />
          <ResourceLink
            title="Paywall Newsletter"
            href="/newsletter"
            icon="/images/menu-icons/icon-20x20-receipt.svg"
            badge="weekly"
          />
        </div>
      </div>

      {/* CONNECT Column */}
      <div>
        <h4 className="text-xs font-semibold text-olive-400 uppercase tracking-wider mb-3 px-2">
          Connect
        </h4>
        <div className="space-y-1">
          <ResourceLink
            title="Slack Community"
            href="/slack"
            icon="/images/menu-icons/icon-24x24-difference.svg"
          />
          <ResourceLink
            title="Discord"
            href="/discord"
            icon="/images/menu-icons/icon-20x20-neurology.svg"
          />
          <ResourceLink
            title="Events & Webinars"
            href="/events"
            icon="/images/menu-icons/icon-24x24-21n.svg"
          />
        </div>
      </div>

      {/* DISCOVER Column */}
      <div>
        <h4 className="text-xs font-semibold text-olive-400 uppercase tracking-wider mb-3 px-2">
          Discover
        </h4>
        <div className="space-y-1">
          <ResourceLink
            title="Industry Reports"
            href="/reports"
            icon="/images/menu-icons/icon-finance-blue-20dp-300w.svg"
          />
          <ResourceLink
            title="eBooks & Guides"
            href="/ebooks"
            icon="/images/menu-icons/icon-24x24-23n.svg"
          />
          <ResourceLink
            title="Tool Comparisons"
            href="/compare"
            icon="/images/menu-icons/icon-20x20-currency-exchange.svg"
          />
        </div>
      </div>
    </div>
  )
}
