import { HeartIcon, ShoppingBagIcon, BanknotesIcon, MegaphoneIcon } from '@heroicons/react/24/outline'

const industries = [
  {
    name: 'Healthcare',
    description: 'Predict patient lifetime value and optimize preventive care programs for better health outcomes.',
    icon: HeartIcon,
    color: 'bg-red-500',
  },
  {
    name: 'E-commerce',
    description: 'Maximize customer value through personalized product recommendations and dynamic pricing strategies.',
    icon: ShoppingBagIcon,
    color: 'bg-green-500',
  },
  {
    name: 'Finance',
    description: 'Identify high-value clients and provide tailored investment products for wealth management.',
    icon: BanknotesIcon,
    color: 'bg-blue-500',
  },
  {
    name: 'Advertising',
    description: 'Optimize campaign strategies and maximize ROI for advertisers across channels.',
    icon: MegaphoneIcon,
    color: 'bg-purple-500',
  },
]

export default function Industries() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Industries</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Cross-Industry Applications
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our AI-powered CLV platform adapts to your industry&apos;s unique needs and challenges.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
            {industries.map((industry) => (
              <div key={industry.name} className="relative">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className={`flex items-center justify-center h-16 w-16 rounded-lg ${industry.color} text-white`}>
                      <industry.icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{industry.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{industry.description}</p>
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