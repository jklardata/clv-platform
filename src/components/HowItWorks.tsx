import { ArrowPathIcon, CloudArrowUpIcon, CogIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const steps = [
  {
    name: 'Data Integration',
    description: 'Seamlessly connect your customer data from CRM systems, e-commerce platforms, and financial databases.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'AI Analysis',
    description: 'Our advanced AI models analyze transaction history, interaction logs, and demographic data to predict CLV.',
    icon: CogIcon,
  },
  {
    name: 'Strategy Generation',
    description: 'Receive personalized recommendations for marketing, sales, and engagement strategies.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Performance Tracking',
    description: 'Monitor the impact of implemented strategies with real-time analytics and reporting.',
    icon: ChartBarIcon,
  },
]

export default function HowItWorks() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Process</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform uses a data-driven approach to help you understand and optimize customer lifetime value.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            {steps.map((step) => (
              <div key={step.name} className="relative">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <step.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{step.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 