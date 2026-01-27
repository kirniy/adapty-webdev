import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Integrations = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  const integrations = [
    'Apple Search Ads', 'AppsFlyer', 'AppMetrica', 'Asapty', 'Branch',
    'Braze', 'Facebook Ads', 'Firebase', 'Google Cloud', 'Mixpanel',
    'OneSignal', 'PostHog', 'Pushwoosh', 'SplitMetrics', 'Singular',
    'Stripe', 'Tenjin', 'Webhooks'
  ]

  return (
    <section ref={ref} className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Integration grid */}
          <div 
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-teal-500 p-6">
              <div className="grid grid-cols-4 gap-3">
                {integrations.slice(0, 16).map((integration, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg p-3 flex items-center justify-center h-16"
                  >
                    <span className="text-xs text-gray-600 font-medium text-center">
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
            <div className="text-sm text-gray-400 mb-4">In-app-purchase events</div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Sync purchase data with other services
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Forward subscription events to analytics and attribution services without coding.
            </p>

            <a
              href="/integrations"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium mb-10"
            >
              Explore integrations
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Testimonial */}
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 italic mb-4">
                "They have a great external API that makes it easy to pass related events to other analytics tools such as Amplitude and Mixpanel."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  B
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Chris Bick</div>
                  <div className="text-sm text-gray-500">Founder and CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Integrations
