import { useScrollAnimation } from '../hooks/useScrollAnimation'

const PlatformSDKs = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  const platforms = [
    { name: 'Swift SDK', icon: 'swift', color: 'from-orange-500 to-red-500' },
    { name: 'Kotlin SDK', icon: 'kotlin', color: 'from-purple-500 to-pink-500' },
    { name: 'React Native SDK', icon: 'react', color: 'from-blue-400 to-cyan-400' },
    { name: 'Unity SDK', icon: 'unity', color: 'from-gray-700 to-gray-900' },
    { name: 'Flutter SDK', icon: 'flutter', color: 'from-blue-400 to-cyan-300' },
    { name: 'Capacitor SDK', icon: 'capacitor', color: 'from-blue-500 to-indigo-500' },
    { name: 'Kotlin Multiplatform', icon: 'kmp', color: 'from-purple-600 to-blue-600' },
    { name: 'FlutterFlow', icon: 'flutterflow', color: 'from-blue-500 to-purple-500' },
    { name: 'Web API', icon: 'web', color: 'from-green-500 to-teal-500' },
    { name: 'Stripe', icon: 'stripe', color: 'from-indigo-500 to-purple-600' },
  ]

  return (
    <section ref={ref} className="relative py-24 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Get the SDK for your platform
          </h2>
        </div>

        {/* Platform grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={`/sdk/${platform.icon}`}
              className={`group relative rounded-xl border border-neutral-800 bg-neutral-800/50 p-6 hover:border-neutral-700 hover:bg-neutral-800 transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 50 + 200}ms` }}
            >
              {/* Icon placeholder */}
              <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br ${platform.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                <span className="text-white font-bold text-lg">
                  {platform.name[0]}
                </span>
              </div>
              <div className="text-center text-sm text-neutral-400 group-hover:text-white transition-colors">
                {platform.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlatformSDKs
