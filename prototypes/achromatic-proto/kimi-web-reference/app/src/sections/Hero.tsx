import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 })

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden bg-white"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            {/* Ebook badge with beam animation */}
            <div 
              className={`inline-flex items-center gap-3 mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-violet-400/30 blur-xl rounded-full beam-glow" />
                <span className="relative px-3 py-1.5 bg-violet-100 text-violet-700 text-xs font-medium rounded-full">
                  Ebook
                </span>
              </div>
              <a href="/ebook" className="group flex items-center gap-1.5 text-neutral-600 hover:text-neutral-900 text-sm transition-colors">
                $100K playbook | download
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Main headline - first line black, second line gray */}
            <h1 
              className={`text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="text-neutral-900">Revenue management</span>
              <br />
              <span className="text-neutral-500">for in-app purchases</span>
            </h1>

            {/* Tagline */}
            <p 
              className={`text-lg text-neutral-500 max-w-md mb-8 leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Save months on integrating subscriptions and double your app revenue with paywall management, A/B testing, and real-time analytics.
            </p>

            {/* Email form and buttons */}
            <div 
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 sm:w-56 px-4 py-2.5 text-sm border border-neutral-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all"
                />
                <button className="px-5 py-2.5 bg-violet-600 text-white text-sm font-medium rounded-r-lg hover:bg-violet-700 transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2">
                  Start for free
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <a 
              href="/demo" 
              className={`inline-flex items-center gap-1.5 text-violet-600 hover:text-violet-700 text-sm font-medium transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Book a demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right side - Dashboard image */}
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-neutral-200/50 border border-neutral-100 img-hover-zoom">
              <img 
                src="/images/hero-dashboard.png" 
                alt="Adapty Dashboard" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
