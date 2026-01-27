import { ArrowRight, BarChart2, LineChart, PieChart, Activity } from 'lucide-react'

const LinearInsights = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-radial from-purple-500/5 via-transparent to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Linear Insights
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Take the guesswork out of product planning with realtime analytics and reporting dashboards.
          </p>
          <a
            href="/insights"
            className="group inline-flex items-center gap-2 mt-6 text-white hover:gap-3 transition-all"
          >
            Learn more
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Analytics visualization */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent blur-3xl" />
          
          <div className="relative rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 overflow-hidden">
            {/* Chart header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-400">Issues</span>
                <span className="text-sm text-gray-600">|</span>
                <span className="text-sm text-gray-500">Created date</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>Jul 2021</span>
                <span>Oct 2021</span>
                <span>Jan 2022</span>
                <span>Apr 2022</span>
                <span>Jul 2022</span>
                <span>Oct 2022</span>
                <span>Jan 2023</span>
                <span>Apr 2023</span>
                <span>Jul 2023</span>
                <span>Oct 2023</span>
                <span>Jan 2024</span>
                <span>Apr 2024</span>
              </div>
            </div>

            {/* Scatter plot visualization */}
            <div className="relative h-64">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-px bg-white/5" />
                ))}
              </div>

              {/* Data points */}
              <div className="absolute inset-0">
                {[...Array(150)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{
                      left: `${5 + Math.random() * 90}%`,
                      top: `${5 + Math.random() * 85}%`,
                      backgroundColor: ['#6366f1', '#8b5cf6', '#a855f7', '#ec4899'][Math.floor(Math.random() * 4)],
                      opacity: 0.6 + Math.random() * 0.4,
                    }}
                  />
                ))}
              </div>

              {/* Labels */}
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-600 py-2">
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span>0</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-2xl font-semibold text-white">&lt;25%</div>
                  <div className="text-xs text-gray-500">41 minutes</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">&lt;50%</div>
                  <div className="text-xs text-gray-500">3 hours</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">&lt;75%</div>
                  <div className="text-xs text-gray-500">22 hours</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">&lt;95%</div>
                  <div className="text-xs text-gray-500">7 days</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={BarChart2}
            title="Tailored workflows"
            description="Track progress across custom issue flows for your team."
          />
          <FeatureCard
            icon={LineChart}
            title="Custom views"
            description="Switch between list and board. Group issues with swimlanes."
          />
          <FeatureCard
            icon={PieChart}
            title="Filters"
            description="Refine issue lists down to what's most relevant to you."
          />
          <FeatureCard
            icon={Activity}
            title="SLAs"
            description="Automatically apply deadlines to time-sensitive tasks."
          />
        </div>
      </div>
    </section>
  )
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) => (
  <div className="group relative rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
    <div className="absolute -inset-px bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-xl" />
    
    <div className="relative">
      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h4 className="text-white font-medium mb-2">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
)

export default LinearInsights
