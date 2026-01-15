'use client'

import Image from 'next/image'
import Link from 'next/link'

const MOBILE_SDKS = [
  { name: 'iOS', icon: '/images/menu-icons/icon-ios-64x64-1.svg', href: '/docs/ios' },
  { name: 'Android', icon: '/images/menu-icons/icon-android-64x64-1.svg', href: '/docs/android' },
  { name: 'React Native', icon: '/images/menu-icons/icon-react-native-64x64-1.svg', href: '/docs/react-native' },
  { name: 'Flutter', icon: '/images/menu-icons/icon-flutter-64x64-1.svg', href: '/docs/flutter' },
  { name: 'Unity', icon: '/images/menu-icons/icon-unity-64x64-1.svg', href: '/docs/unity' },
  { name: 'FlutterFlow', icon: '/images/menu-icons/icon-flutterflow-64x64-1.svg', href: '/docs/flutterflow' },
  { name: 'Capacitor', icon: '/images/menu-icons/capacitor-logo.svg', href: '/docs/capacitor' },
  { name: 'KMP', icon: '/images/menu-icons/kmp-logo.svg', href: '/docs/kmp' },
]

export function DocsMenu() {
  return (
    <div className="w-[720px] p-6 flex gap-8">
      {/* Sidebar */}
      <div className="w-48 shrink-0 space-y-1 border-r border-olive-200 pr-6">
        <Link
          href="/docs/quickstart"
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-olive-100 transition-colors group"
        >
          <Image
            src="/images/menu-icons/sdk.svg"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <span className="text-sm font-medium text-olive-900 group-hover:text-olive-700">
            Quick Start
          </span>
        </Link>
        <Link
          href="/docs/migrate"
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-olive-100 transition-colors group"
        >
          <Image
            src="/images/menu-icons/icon-24x24-difference.svg"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <span className="text-sm text-olive-700 group-hover:text-olive-900">
            Migrate to Adapty
          </span>
        </Link>
        <Link
          href="https://status.adapty.io"
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-olive-100 transition-colors group"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 ml-1 mr-1" />
          <span className="text-sm text-olive-700 group-hover:text-olive-900">
            System Status
          </span>
        </Link>
        <Link
          href="/support"
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-olive-100 transition-colors group"
        >
          <Image
            src="/images/menu-icons/icon-20x20-bug-report.svg"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <span className="text-sm text-olive-700 group-hover:text-olive-900">
            Support
          </span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Mobile SDK */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-olive-400 uppercase tracking-wider mb-3">
            Mobile SDK
          </h4>
          <div className="grid grid-cols-4 gap-2">
            {MOBILE_SDKS.map((sdk) => (
              <Link
                key={sdk.name}
                href={sdk.href}
                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-olive-100 transition-colors group"
              >
                <Image
                  src={sdk.icon}
                  alt={sdk.name}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-xs text-olive-600 group-hover:text-olive-900">
                  {sdk.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Web Payments */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-olive-400 uppercase tracking-wider mb-3">
            Web Payments
          </h4>
          <Link
            href="/docs/stripe"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-olive-100 transition-colors group"
          >
            <Image
              src="/images/menu-icons/icon-stripe-64x64-1.svg"
              alt="Stripe"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <div>
              <span className="text-sm font-medium text-olive-900 group-hover:text-olive-700 block">
                Stripe Integration
              </span>
              <span className="text-xs text-olive-500">
                Web-to-app subscriptions
              </span>
            </div>
          </Link>
        </div>

        {/* Web API */}
        <div>
          <h4 className="text-xs font-semibold text-olive-400 uppercase tracking-wider mb-3">
            Server API
          </h4>
          <Link
            href="/docs/api"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-olive-100 transition-colors group"
          >
            <Image
              src="/images/menu-icons/web-api.svg"
              alt="API"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <div>
              <span className="text-sm font-medium text-olive-900 group-hover:text-olive-700 block">
                REST API Reference
              </span>
              <span className="text-xs text-olive-500">
                Server-to-server integration
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
