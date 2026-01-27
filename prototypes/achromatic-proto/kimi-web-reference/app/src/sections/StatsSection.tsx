import { useScrollAnimation } from '../hooks/useScrollAnimation'

const stats = [
  { value: '$2B', label: 'tracked revenue' },
  { value: '99.99%', label: 'historical uptime' },
  { value: '2.5B', label: 'users served' },
  { value: '60B', label: 'API calls / month' },
]

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="relative py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 max-w-2xl mx-auto">
            Adapty processes subscription revenue with the industry's highest SLA Rate
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
