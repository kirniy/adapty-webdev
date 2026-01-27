import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const FunnelFox = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="relative py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-900 mb-6">
              Boost app revenue fast with web funnels
            </h2>
            <p className="text-lg text-neutral-500 mb-8 leading-relaxed">
              Build and launch web-to-app funnels, integrate payments, optimize with A/B testing and scale globally — all in one platform, no coding needed.
            </p>

            <a
              href="https://funnelfox.com"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium transition-colors"
            >
              Explore FunnelFox
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right side - Mockup */}
          <div 
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-neutral-100 bg-white p-6">
              {/* FunnelFox logo */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">F</span>
                </div>
                <span className="text-xl font-bold text-neutral-900">FunnelFox</span>
              </div>

              {/* Phone mockups */}
              <div className="flex justify-center gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-24 bg-white rounded-xl shadow-lg border border-neutral-100 overflow-hidden">
                    <div className="h-32 bg-gradient-to-b from-orange-50 to-white p-2">
                      <div className="w-full h-2 bg-neutral-100 rounded mb-2" />
                      <div className="w-3/4 h-2 bg-neutral-100 rounded mb-4" />
                      <div className="space-y-1">
                        <div className="w-full h-6 bg-orange-100 rounded" />
                        <div className="w-full h-6 bg-neutral-100 rounded" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FunnelFox
