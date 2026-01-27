import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const PaywallBuilder = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-900 mb-6">
              Increase subscription revenue without app releases
            </h2>
            <p className="text-lg text-neutral-500 mb-8 leading-relaxed">
              Manage, target, localize and personalize paywalls without leaving your browser.
            </p>

            {/* Testimonial */}
            <div className="bg-neutral-50 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                  I
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">Ilgar Tali</div>
                  <div className="text-sm text-neutral-500">Founder & Chief Vision Officer</div>
                </div>
              </div>
              <p className="text-neutral-600 italic">
                "Whether it's A/B testing paywalls, predicting LTV, or analyzing subscription metrics, Adapty is the ultimate toolkit for app success."
              </p>
            </div>

            <a
              href="/paywall-builder"
              className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-medium transition-colors"
            >
              Create paywalls within minutes
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right side - Mockup */}
          <div 
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-100 bg-gradient-to-br from-pink-50 to-purple-50 p-8">
              {/* Builder interface mockup */}
              <div className="flex gap-4">
                {/* Sidebar */}
                <div className="w-48 bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-xs text-neutral-400 mb-3">Layout</div>
                  <div className="space-y-2">
                    <div className="text-sm text-neutral-700 font-medium bg-neutral-100 rounded px-2 py-1">Products</div>
                    <div className="text-sm text-neutral-500 px-2 py-1">Text</div>
                    <div className="text-sm text-neutral-500 px-2 py-1">Buttons</div>
                  </div>
                </div>

                {/* Phone mockup */}
                <div className="flex-1 flex justify-center">
                  <div className="w-40 bg-gradient-to-b from-pink-200 to-pink-100 rounded-2xl p-3 shadow-lg">
                    <div className="bg-white rounded-xl p-3 h-full">
                      <div className="text-[8px] text-neutral-400 mb-1">Unlock all Features</div>
                      <div className="text-[7px] text-neutral-500 mb-2">Get daily updates, crafted for you.</div>
                      <div className="space-y-1">
                        <div className="border border-neutral-200 rounded p-1 text-[8px] text-center">1 Month</div>
                        <div className="bg-pink-500 rounded p-1 text-[8px] text-center text-white">1 Year</div>
                      </div>
                      <div className="mt-2 text-[7px] text-neutral-400 text-center">$3.99/mo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaywallBuilder
