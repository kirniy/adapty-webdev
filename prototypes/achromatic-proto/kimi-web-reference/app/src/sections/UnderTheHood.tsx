import { ArrowRight, Zap, Shield, Users } from 'lucide-react'

const UnderTheHood = () => {
  const features = [
    {
      icon: Zap,
      title: 'Linear Sync Engine',
      description: 'Built with a high-performance architecture and an obsessive focus on speed.',
      link: null,
    },
    {
      icon: Shield,
      title: 'Enterprise-ready security',
      description: 'Best-in-class security practices keep your work safe and secure at every layer.',
      link: '/security',
    },
    {
      icon: Users,
      title: 'Engineered for scale',
      description: 'Built for teams of all sizes. From early-stage startups to global enterprises.',
      link: null,
    },
  ]

  const certifications = [
    { name: 'SOC 2', icon: 'AICPA SOC2' },
    { name: 'GDPR', icon: 'GDPR' },
    { name: 'HIPAA', icon: 'HIPAA' },
  ]

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Content */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-gray-400" />
              <span className="text-sm text-gray-400 font-medium">Under the hood</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-semibold text-white leading-tight mb-6">
              Built on strong foundations
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Linear is so simple to use, it's easy to overlook the wealth of complex technologies packed under the hood that keep Linear robust, safe, and blazing fast.
            </p>
          </div>

          {/* Right side - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
              >
                <div className="absolute -inset-px bg-gradient-to-br from-gray-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-xl" />
                
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-white font-medium">{feature.title}</h3>
                        {feature.link && (
                          <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                        )}
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <div className="flex flex-wrap justify-center gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-20 h-20 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[8px] text-gray-500 leading-tight">{cert.icon}</div>
                  </div>
                </div>
                <span className="text-sm text-gray-400">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture diagram */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-500/5 to-transparent blur-3xl" />
          
          <div className="relative rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 overflow-hidden">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Sync Engine */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-xl border border-white/10 bg-white/[0.05] flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">LINEAR</div>
                    <div className="text-xs text-gray-400">SYNC ENGINE</div>
                  </div>
                </div>
                <p className="text-sm text-gray-500">High-performance sync</p>
              </div>

              {/* Real-time */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-xl border border-white/10 bg-white/[0.05] flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-2xl text-gray-400">5,000</div>
                    <div className="text-xs text-gray-500">ops/sec</div>
                  </div>
                </div>
                <p className="text-sm text-gray-500">Real-time updates</p>
              </div>

              {/* API */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-xl border border-white/10 bg-white/[0.05] flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-xs text-gray-400 mb-1">API</div>
                    <div className="flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500">GraphQL API</p>
              </div>
            </div>

            {/* Connection lines */}
            <div className="hidden md:flex items-center justify-center gap-4 mt-8">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-500">
                WebSocket
              </div>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UnderTheHood
