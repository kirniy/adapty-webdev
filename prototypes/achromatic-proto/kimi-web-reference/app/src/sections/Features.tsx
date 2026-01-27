import { ArrowRight, Code2, BarChart3, Target } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Features = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  const features = [
    {
      icon: Code2,
      title: 'For developers',
      color: 'text-gray-900',
      items: ['Subscriptions SDK', 'Refund Saver', 'Remote config', 'Fallback paywalls'],
      image: 'code',
    },
    {
      icon: BarChart3,
      title: 'For app owners',
      color: 'text-purple-600',
      items: ['Revenue analytics', 'LTV analytics', 'AI LTV and revenue predictions'],
      image: 'chart',
    },
    {
      icon: Target,
      title: 'For marketers',
      color: 'text-gray-900',
      items: ['A/B testing', 'No-code Builder', 'Localizations', 'Targeting'],
      image: 'paywall',
    },
  ]

  return (
    <section ref={ref} className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Help your team run the mobile subscription business.
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-gray-400">
            Faster and cheaper.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-xl hover:border-purple-100 transition-all duration-700 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Card image/mockup */}
              <div className="h-48 mb-6 rounded-xl bg-gray-50 overflow-hidden">
                {feature.image === 'code' && (
                  <div className="p-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">1</span>
                      Configuring platforms
                    </div>
                    <div className="ml-3 pl-4 border-l-2 border-purple-200 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">2</span>
                        Installing Adapty SDK
                      </div>
                      <div className="bg-gray-100 rounded p-2 text-xs font-mono text-purple-600">
                        Adapty.activate("PUBLIC_SDK_KEY", customerUserId: "YOUR_USER_ID")
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">3</span>
                      Processing purchasing events
                    </div>
                  </div>
                )}
                {feature.image === 'chart' && (
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-500">Revenue</span>
                      <span className="text-xs text-green-600">+16%</span>
                    </div>
                    <div className="text-lg font-bold text-gray-900 mb-4">$56,823</div>
                    <div className="h-20 flex items-end gap-1">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t"
                          style={{
                            height: `${40 + Math.random() * 50}%`,
                            background: `linear-gradient(to top, #7c3aed, #a78bfa)`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {feature.image === 'paywall' && (
                  <div className="p-4 flex justify-center">
                    <div className="w-32 h-40 bg-gradient-to-b from-pink-100 to-pink-50 rounded-xl p-3 shadow-lg">
                      <div className="text-[8px] text-gray-500 mb-1">Unlock all Features</div>
                      <div className="text-[8px] text-gray-400 mb-2">Get daily updates, crafted for you.</div>
                      <div className="space-y-1">
                        <div className="bg-white rounded p-1 text-[8px] text-center">1 Month</div>
                        <div className="bg-purple-600 rounded p-1 text-[8px] text-center text-white">1 Year</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Card content */}
              <div className="flex items-center gap-2 mb-4">
                <feature.icon className={`w-5 h-5 ${feature.color}`} />
                <h3 className={`text-lg font-semibold ${feature.color} group-hover:text-purple-600 transition-colors`}>
                  {feature.title}
                </h3>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
              </div>

              <div className="flex flex-wrap gap-2">
                {feature.items.map((item, i) => (
                  <span key={i} className="text-sm text-gray-500">
                    {item}{i < feature.items.length - 1 && <span className="ml-2 text-gray-300">|</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
