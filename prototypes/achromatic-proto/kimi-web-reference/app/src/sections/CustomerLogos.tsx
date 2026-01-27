import { useScrollAnimation } from '../hooks/useScrollAnimation'

const CustomerLogos = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  const logos = [
    { name: 'FEELD', style: 'font-bold tracking-wider' },
    { name: 'bumble', style: 'font-semibold' },
    { name: 'weewoo', style: 'font-medium' },
    { name: 'AppNation', style: 'font-semibold' },
    { name: 'almus', style: 'font-medium' },
    { name: 'impala studios', style: 'font-light' },
    { name: 'HUBX', style: 'font-bold' },
  ]

  return (
    <section ref={ref} className="relative py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <p 
          className={`text-center text-gray-500 text-sm mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Trusted by 15,000+ apps and the world's largest app publishers
        </p>

        {/* Logo grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className={`text-gray-400 hover:text-gray-600 transition-all duration-500 ${logo.style} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 50 + 200}ms` }}
            >
              <span className="text-xl">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerLogos
