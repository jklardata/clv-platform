import Link from 'next/link'

export default function CTA() {
  return (
    <div className="bg-blue-700" id="demo">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="relative bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="relative lg:col-span-1">
            <div className="h-56 bg-gradient-to-br from-blue-500 to-indigo-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
              <div className="w-full h-full opacity-20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500" />
                <div className="absolute inset-0 bg-grid-white/[0.2]" />
              </div>
            </div>
          </div>
          <div className="px-6 py-12 sm:px-12 lg:px-16">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                <span className="block">Ready to maximize your</span>
                <span className="block text-blue-600">customer lifetime value?</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-500">
                Get started with our AI-powered platform today and transform your customer relationships into lasting, profitable partnerships.
              </p>
              <div className="mt-8 flex space-x-4">
                <a
                  href="mailto:justin@klardata.com?subject=Demo Request: AI-Powered CLV Platform"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Request Demo
                </a>
                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 