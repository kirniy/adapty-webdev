import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const IntegrationsSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  const integrations = [
    'Apple Search Ads', 'AppsFlyer', 'AppMetrica', 'Asapty', 'Branch',
    'Braze', 'Facebook Ads', 'Firebase', 'Google Cloud', 'Mixpanel',
    'OneSignal', 'PostHog', 'Pushwoosh', 'SplitMetrics', 'Singular',
    'Stripe', 'Tenjin', 'Webhooks'
  ]

  return (
    <section ref={ref} className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Integration grid */}
          <div 
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border border-neutral-100 bg-gradient-to-br from-teal-500 to-emerald-500 p-6">
              <div className="grid grid-cols-3 gap-3">
                {integrations.slice(0, 12).map((integration, i) => (
                  <div
                    key={i}
                    className="bg-white/90 backdrop-blur rounded-lg p-3 flex items-center justify-center h-14"
                  >
                    <span className="text-xs text-neutral-700 font-medium text-center">
                      {integration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-sm text-neutral-400 mb-4">In-app-purchase events</div>
            <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-900 mb-6">
              Sync purchase data with other services
            </h2>
            <p className="text-lg text-neutral-500 mb-8 leading-relaxed">
              Forward subscription events to analytics and attribution services without coding.
            </p>

            <a
              href="/integrations"
              className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-medium mb-10 transition-colors"
            >
              Explore integrations
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Testimonial */}
            <div className="bg-neutral-50 rounded-xl p-6">
              <p className="text-neutral-600 italic mb-4">
                "They have a great external API that makes it easy to pass related events to other analytics tools such as Amplitude and Mixpanel."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                  B
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">Chris Bick</div>
                  <div className="text-sm text-neutral-500">Founder and CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntegrationsSection
