import { useScrollAnimation } from '../hooks/useScrollAnimation'

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="relative py-24 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6">
        <div 
          className={`flex flex-col lg:flex-row items-center justify-between gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white text-center lg:text-left">
            Grow your app revenue. Start today.
          </h2>

          <div className="flex gap-3">
            <a
              href="/contact"
              className="px-5 py-2.5 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors"
            >
              Contact sales
            </a>
            <a
              href="/signup"
              className="px-5 py-2.5 bg-white text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-100 transition-all duration-200 hover:-translate-y-0.5"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
