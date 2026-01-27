import { useScrollAnimation } from '../hooks/useScrollAnimation'

const LogoStrip = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  const logos = [
    { name: 'FEELD', style: 'font-bold tracking-widest text-xs' },
    { name: 'bumble', style: 'font-semibold text-sm' },
    { name: 'weewoo', style: 'font-medium text-xs' },
    { name: 'AppNation', style: 'font-semibold text-xs' },
    { name: 'almus', style: 'font-medium text-xs' },
    { name: 'impala', style: 'font-light text-xs' },
    { name: 'HUBX', style: 'font-bold text-xs' },
    { name: 'Moonly', style: 'font-medium text-xs' },
  ]

  return (
    <section ref={ref} className="relative py-12 bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6">
        <p 
          className={`text-center text-neutral-400 text-xs mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Trusted by 15,000+ apps and the world's largest app publishers
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className={`text-neutral-400 hover:text-neutral-600 transition-all duration-500 cursor-default ${logo.style} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 50 + 200}ms` }}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoStrip
