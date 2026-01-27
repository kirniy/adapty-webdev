import { useState } from 'react'
import { Zap, BarChart3, Users, TrendingUp } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const tabs = [
  {
    id: 'sdk',
    label: 'Subscriptions SDK',
    description: 'Integrate in-app purchases in hours, not months. Handle trials, renewals, and refunds automatically.',
    image: '/images/feature-sdk.png'
  },
  {
    id: 'analytics',
    label: 'Revenue Analytics',
    description: 'Track MRR, ARR, LTV, churn, and 50+ metrics in real-time. Make decisions based on actual data.',
    image: '/images/feature-analytics.png'
  },
  {
    id: 'paywall',
    label: 'Paywall Builder',
    description: 'Create and manage paywalls without code. A/B test variations and personalize for different segments.',
    image: '/images/feature-paywall.png'
  }
]

const features = [
  {
    icon: Zap,
    title: 'Remote Config',
    description: 'Change paywalls and pricing instantly without app releases.'
  },
  {
    icon: BarChart3,
    title: 'Cohort Analysis',
    description: 'Track user behavior over time and optimize retention.'
  },
  {
    icon: Users,
    title: 'Segmentation',
    description: 'Target users based on behavior, location, and custom attributes.'
  },
  {
    icon: TrendingUp,
    title: 'LTV Predictions',
    description: 'AI-powered predictions to optimize your acquisition spend.'
  }
]

const TabbedSection = () => {
  const [activeTab, setActiveTab] = useState(0)
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Tag */}
        <div 
          className={`flex items-center gap-2 mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-sm text-neutral-600">Complete toolkit</span>
        </div>

        {/* Title and description */}
        <div 
          className={`grid lg:grid-cols-2 gap-8 mb-16 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-900 leading-tight">
            Everything you need to grow revenue
          </h2>
          <div className="flex flex-col justify-end">
            <p className="text-neutral-500 leading-relaxed">
              From SDK integration to analytics and paywall optimization, Adapty provides a complete solution for managing in-app subscriptions.
            </p>
          </div>
        </div>

        {/* Tabbed content */}
        <div 
          className={`grid lg:grid-cols-2 gap-12 mb-16 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left side - Tabs */}
          <div className="space-y-1">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                  activeTab === index 
                    ? 'bg-neutral-50' 
                    : 'hover:bg-neutral-50/50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-1 h-8 rounded-full transition-colors ${
                    activeTab === index ? 'bg-violet-500' : 'bg-neutral-200'
                  }`} />
                  <div>
                    <h3 className={`font-medium mb-1 transition-colors ${
                      activeTab === index ? 'text-neutral-900' : 'text-neutral-500'
                    }`}>
                      {tab.label}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-all duration-300 ${
                      activeTab === index 
                        ? 'text-neutral-500 max-h-20 opacity-100' 
                        : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                      {tab.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right side - Image */}
          <div className="relative rounded-2xl overflow-hidden border border-neutral-100 shadow-lg">
            <img 
              src={tabs[activeTab].image} 
              alt={tabs[activeTab].label}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-neutral-100 mb-16" />

        {/* Feature grid */}
        <div 
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {features.map((feature, index) => (
            <div key={index}>
              <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-neutral-600" />
              </div>
              <h4 className="font-medium text-neutral-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TabbedSection
