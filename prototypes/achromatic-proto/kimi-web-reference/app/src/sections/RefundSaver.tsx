import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const RefundSaver = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 })

  return (
    <section ref={ref} className="relative py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Chart */}
          <div 
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl border border-neutral-100 bg-teal-50 p-8">
              <div className="bg-white rounded-xl p-6">
                <div className="text-sm text-neutral-500 mb-4">Refund Rate, %</div>
                
                {/* Chart */}
                <div className="relative h-48">
                  <svg className="w-full h-full" viewBox="0 0 300 150">
                    {/* Grid lines */}
                    {[0, 1, 2, 3, 4].map((i) => (
                      <line
                        key={i}
                        x1="0"
                        y1={30 * i}
                        x2="300"
                        y2={30 * i}
                        stroke="#e5e5e5"
                        strokeWidth="1"
                      />
                    ))}
                    
                    {/* Line path */}
                    <path
                      d="M 0 30 L 50 25 L 100 28 L 150 100 L 200 90 L 250 95 L 300 120"
                      fill="none"
                      stroke="#7c3aed"
                      strokeWidth="2"
                    />
                    
                    {/* Drop point */}
                    <line x1="150" y1="0" x2="150" y2="150" stroke="#7c3aed" strokeWidth="2" strokeDasharray="5,5" />
                    
                    {/* Label */}
                    <rect x="80" y="5" width="140" height="25" rx="4" fill="#7c3aed" />
                    <text x="150" y="22" textAnchor="middle" fill="white" fontSize="10">
                      Adapty Refund Saver enabled
                    </text>
                  </svg>
                </div>

                {/* X-axis labels */}
                <div className="flex justify-between text-xs text-neutral-400 mt-2">
                  <span>17 Nov</span>
                  <span>19 Nov</span>
                  <span>21 Nov</span>
                  <span>23 Nov</span>
                  <span>25 Nov</span>
                  <span>27 Nov</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-semibold text-neutral-900 mb-6">
              Cut refund rate by 40%
            </h2>
            <p className="text-lg text-neutral-500 mb-8 leading-relaxed">
              Stop losing revenue on refunds – Adapty automatically shares user activity data with Apple for refund requests and reduces it.
            </p>

            <a
              href="/refund-saver"
              className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-medium mb-10 transition-colors"
            >
              Set up Refund Saver
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Testimonial */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold">
                  F
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">Fotorama</div>
                  <div className="text-sm text-neutral-500">Photo and video</div>
                </div>
              </div>
              <p className="text-neutral-600 italic">
                "I never thought that doing something about refunds could make such a difference. We just flipped the switch, set it up, and suddenly, it felt like we stopped letting money slip away."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-neutral-200" />
                <div>
                  <div className="text-sm font-medium text-neutral-900">Berk Çağatay Albayrak</div>
                  <div className="text-xs text-neutral-500">Sr. Product Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RefundSaver
