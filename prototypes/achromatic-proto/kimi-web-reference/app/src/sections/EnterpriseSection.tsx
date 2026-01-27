import { ArrowRight, Shield, Zap, Users } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const EnterpriseSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  const features = [
    {
      icon: Shield,
      title: 'Enterprise-ready security',
      description: 'Best-in-class security practices keep your data safe and secure at every layer.',
      hasLink: true
    },
    {
      icon: Zap,
      title: 'Linear Sync Engine',
      description: 'Built with a high-performance architecture and an obsessive focus on speed.',
      hasLink: false
    },
    {
      icon: Users,
      title: 'Engineered for scale',
      description: 'Built for teams of all sizes. From early-stage startups to global enterprises.',
      hasLink: false
    }
  ]

  const certifications = [
    { name: 'SOC 2', badge: 'AICPA SOC2' },
    { name: 'GDPR', badge: 'GDPR COMPLIANT' },
    { name: 'HIPAA', badge: 'HIPAA COMPLIANT' }
  ]

  return (
    <section ref={ref} className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Tag */}
        <div 
          className={`flex items-center gap-2 mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-neutral-400" />
          <span className="text-sm text-neutral-500">Under the hood</span>
        </div>

        {/* Title */}
        <div 
          className={`mb-16 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-900 leading-tight mb-4">
            Built on strong foundations
          </h2>
          <p className="text-neutral-500 max-w-xl leading-relaxed">
            Adapty is so simple to use, it's easy to overlook the wealth of complex technologies packed under the hood that keep it robust, safe, and blazing fast.
          </p>
        </div>

        {/* Features list */}
        <div 
          className={`grid lg:grid-cols-2 gap-12 mb-16 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left side - List */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-violet-100">
                    <feature.icon className="w-5 h-5 text-neutral-600 group-hover:text-violet-600 transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900 mb-1 flex items-center gap-2">
                      {feature.title}
                      {feature.hasLink && (
                        <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-violet-600 group-hover:translate-x-0.5 transition-all" />
                      )}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Image */}
          <div className="relative rounded-2xl overflow-hidden border border-neutral-100 shadow-lg img-hover-zoom">
            <img 
              src="/images/feature-integrations.png" 
              alt="Platform Architecture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-neutral-100 mb-12" />

        {/* Certifications */}
        <div 
          className={`flex flex-wrap justify-center gap-8 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full border border-neutral-200 flex items-center justify-center transition-colors hover:border-violet-200">
                <span className="text-[8px] text-neutral-400 text-center leading-tight">
                  {cert.badge}
                </span>
              </div>
              <span className="text-sm text-neutral-500">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EnterpriseSection
