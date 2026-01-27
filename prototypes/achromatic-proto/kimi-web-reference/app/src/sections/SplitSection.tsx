import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const SplitSection = () => {
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
          <span className="w-2 h-2 rounded-full bg-violet-500" />
          <a href="/ab-testing" className="group flex items-center gap-1.5 text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
            A/B Testing
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Title and description */}
        <div 
          className={`grid lg:grid-cols-2 gap-8 mb-16 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-900 leading-tight">
            Optimize your paywalls with data
          </h2>
          <div className="flex flex-col justify-end">
            <p className="text-neutral-500 leading-relaxed">
              <span className="text-neutral-900 font-medium">Adapty for Growth.</span> Run A/B tests on your paywalls, pricing, and targeting to find what converts best and maximize your revenue.
            </p>
          </div>
        </div>

        {/* Learn more button */}
        <div 
          className={`mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a 
            href="/ab-testing" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors"
          >
            Learn more
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Split content */}
        <div 
          className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left column */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">
              Test everything, know what works
            </h3>
            <p className="text-neutral-500 leading-relaxed mb-8">
              Create multiple variations of your paywalls and test them against each other. Adapty automatically allocates traffic and tracks conversions, so you can make data-driven decisions.
            </p>
            <div className="rounded-2xl overflow-hidden border border-neutral-100 shadow-lg">
              <img 
                src="/images/feature-abtesting.png" 
                alt="A/B Testing"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right column */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-3">
              Target the right users
            </h3>
            <p className="text-neutral-500 leading-relaxed mb-8">
              Show different paywalls to different user segments based on their behavior, location, or custom attributes. Personalize the experience for maximum conversion.
            </p>
            <div className="rounded-2xl overflow-hidden border border-neutral-100 shadow-lg">
              <img 
                src="/images/feature-ltv.png" 
                alt="User Targeting"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SplitSection
