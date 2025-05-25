import { ChartBarIcon, CogIcon, UserGroupIcon, ChartPieIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Predictive CLV Analytics',
    description: 'Leverage advanced AI models to predict customer lifetime value with confidence intervals, enabling data-driven decision making.',
    icon: ChartBarIcon,
  },
  {
    name: 'Personalized Strategies',
    description: 'Get AI-powered recommendations for marketing, sales, and engagement strategies tailored to each customer segment.',
    icon: CogIcon,
  },
  {
    name: 'Customer Segmentation',
    description: 'Automatically segment customers into high, medium, and low-value tiers for targeted campaigns and personalized experiences.',
    icon: UserGroupIcon,
  },
  {
    name: 'Cross-Industry Analytics',
    description: 'Industry-specific insights and recommendations for healthcare, e-commerce, finance, and advertising sectors.',
    icon: ChartPieIcon,
  },
]

export default function Features() {
  return (
    <div className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Maximize Customer Value with AI
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform combines advanced AI analytics with industry expertise to help you optimize customer lifetime value across your business.
          </p>
        </div>

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 