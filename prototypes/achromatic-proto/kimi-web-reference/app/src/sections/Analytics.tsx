import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Analytics = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Know your subscription numbers at any moment
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Measure your in-app economy from trials to refunds with a ready-to-go, real-time subscription BI.
            </p>

            <a
              href="/ltv-analytics"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium mb-10"
            >
              See subscription BI
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Testimonial */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                  M
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Moonly</div>
                  <div className="text-sm text-gray-500">Moon calendar app</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Adapty's analytics provides invaluable insights into our app's performance. With detailed real-time metrics like revenue, ARPU, and churn rate, we make informed decisions to optimize our monetization strategy."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200" />
                <div>
                  <div className="text-sm font-medium text-gray-900">Nikolay Chebotarev</div>
                  <div className="text-xs text-gray-500">Head of UA at Moonly.app</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Dashboard mockup */}
          <div 
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-purple-100 p-4">
              <div className="grid grid-cols-2 gap-3">
                {/* Cohorts card */}
                <div className="bg-white rounded-xl p-4">
                  <div className="text-xs text-gray-400 mb-2">Cohorts</div>
                  <div className="space-y-2">
                    {['$48', '$18', '$4'].map((val, i) => (
                      <div key={i} className="flex gap-2">
                        <div className="w-8 h-6 bg-purple-100 rounded flex items-center justify-center text-xs text-purple-600">{val}</div>
                        <div className="w-8 h-6 bg-blue-100 rounded flex items-center justify-center text-xs text-blue-600">${[8, 7, 2][i]}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Revenue card */}
                <div className="bg-white rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">Revenue</span>
                    <span className="text-xs text-green-600">+2%</span>
                  </div>
                  <div className="text-lg font-bold text-gray-900 mb-2">$56,823</div>
                  <div className="h-16 flex items-end gap-1">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t"
                        style={{
                          height: `${30 + Math.random() * 50}%`,
                          background: `linear-gradient(to top, #7c3aed, #a78bfa)`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Funnels card */}
                <div className="bg-white rounded-xl p-4 col-span-2">
                  <div className="text-xs text-gray-400 mb-2">Funnels</div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="h-2 bg-purple-100 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-purple-500 rounded-full" />
                      </div>
                    </div>
                    <span className="text-sm text-gray-600">$56.8K</span>
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

export default Analytics
