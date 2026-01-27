import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Enterprise = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  const features = [
    {
      title: 'Secure',
      items: ['SOC2 verified', 'Encrypted', '24/7 global fraud monitoring'],
    },
    {
      title: 'Reliable',
      items: ['99.99% SLA', 'Over $500M/year of in-app purchases processed'],
    },
    {
      title: 'Responsive',
      items: [
        'Dedicated customer success manager',
        'Direct communication via Slack',
        'Live chat on the website',
        'Four ways to reach us',
      ],
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Enterprise-grade platform
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <ul className="space-y-2">
                {feature.items.map((item, i) => (
                  <li key={i} className="text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* G2 badges */}
        <div 
          className={`text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-500 mb-6">Trusted for usability and customer service</p>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-sm text-gray-500 ml-2">Based on 500+ reviews</span>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {['Best Results', 'High Performer', 'Best Usability', 'Best Relationship', 'Most Implementable'].map((badge, i) => (
              <div
                key={i}
                className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Enterprise
