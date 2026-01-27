import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface FeatureCard {
  id: string
  title: string
  description: string
  items: string[]
  image: string
  quote: string
  author: string
  role: string
  stats: { value: string; label: string }[]
}

const features: FeatureCard[] = [
  {
    id: 'developers',
    title: 'For developers',
    description: 'Integrate in-app purchases with a few lines of code. Handle trials, renewals, and refunds automatically.',
    items: ['Subscriptions SDK', 'Refund Saver', 'Remote config', 'Fallback paywalls'],
    image: '/images/feature-sdk.png',
    quote: "Adapty SDK made integrating in-app purchases a walk in the park. With just a few lines of code, I was able to implement subscriptions seamlessly for both iOS and Android.",
    author: 'Magnús Ólafsson',
    role: 'Chief Technology Officer at Smitten',
    stats: [
      { value: '10+', label: 'platform SDKs' },
      { value: '2hrs', label: 'integration time' },
      { value: '100%', label: 'open source' },
    ]
  },
  {
    id: 'owners',
    title: 'For app owners',
    description: 'Measure your in-app economy from trials to refunds with ready-to-go, real-time subscription analytics.',
    items: ['Revenue analytics', 'LTV analytics', 'AI LTV and revenue predictions'],
    image: '/images/feature-analytics.png',
    quote: "Adapty's analytics provides invaluable insights into our app's performance. With detailed real-time metrics like revenue, ARPU, and churn rate, we make informed decisions to optimize our monetization strategy.",
    author: 'Nikolay Chebotarev',
    role: 'Head of UA at Moonly.app',
    stats: [
      { value: '50+', label: 'metrics tracked' },
      { value: 'real-time', label: 'data updates' },
      { value: 'LTV', label: 'predictions' },
    ]
  },
  {
    id: 'marketers',
    title: 'For marketers',
    description: 'Manage, target, localize and personalize paywalls without leaving your browser. A/B test different variations.',
    items: ['A/B testing', 'No-code Builder', 'Localizations', 'Targeting'],
    image: '/images/feature-paywall.png',
    quote: "Whether it's A/B testing paywalls, predicting LTV, or analyzing subscription metrics, Adapty is the ultimate toolkit for app success.",
    author: 'Ilgar Tali',
    role: 'Founder & Chief Vision Officer',
    stats: [
      { value: '40%', label: 'revenue increase' },
      { value: '0', label: 'app releases needed' },
      { value: '30+', label: 'localizations' },
    ]
  }
]

const FeatureCards = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  const activeFeature = features.find(f => f.id === activeModal)

  return (
    <section ref={ref} className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-900 mb-4">
            Help your team run the mobile subscription business.
          </h2>
          <p className="text-3xl sm:text-4xl font-semibold text-neutral-400">
            Faster and cheaper.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group relative rounded-2xl border border-neutral-200 bg-neutral-50/50 overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl hover:border-neutral-300 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
              onClick={() => setActiveModal(feature.id)}
            >
              {/* Card image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card content */}
              <div className="p-5">
                <h3 className="text-lg font-medium text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {feature.items.map((item, i) => (
                    <span key={i} className="text-sm text-neutral-500">
                      {item}
                      {i < feature.items.length - 1 && <span className="ml-3 text-neutral-300">|</span>}
                    </span>
                  ))}
                </div>
              </div>

              {/* Plus button */}
              <button className="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-300 hover:shadow-md transition-all duration-200">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModal && activeFeature && (
        <Modal 
          feature={activeFeature} 
          onClose={() => setActiveModal(null)} 
        />
      )}
    </section>
  )
}

const Modal = ({ feature, onClose }: { feature: FeatureCard; onClose: () => void }) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm animate-fade-in" />
      
      {/* Modal content */}
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 transition-all z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal image */}
        <div className="aspect-video overflow-hidden">
          <img 
            src={feature.image} 
            alt={feature.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Modal content */}
        <div className="p-8">
          <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
            {feature.title}
          </h3>
          <p className="text-neutral-500 leading-relaxed mb-8">
            {feature.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {feature.stats.map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-semibold text-neutral-900">{stat.value}</div>
                <div className="text-xs text-neutral-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Separator */}
          <div className="h-px bg-neutral-100 mb-8" />

          {/* Quote */}
          <blockquote className="text-neutral-600 italic mb-6 leading-relaxed">
            "{feature.quote}"
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 text-sm font-semibold">
              {feature.author[0]}
            </div>
            <div>
              <div className="text-sm font-medium text-neutral-900">{feature.author}</div>
              <div className="text-xs text-neutral-400">{feature.role}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureCards
