import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-indigo-800 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-800 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block">AI-Powered Customer Lifetime Value</span>
            <span className="block text-blue-200">Optimization Platform</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-blue-100 sm:max-w-3xl">
            Transform your customer relationships into lasting, profitable partnerships with advanced AI analytics and personalized strategies.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <a
                href="mailto:justin@klardata.com?subject=Demo Request: AI-Powered CLV Platform"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 sm:px-8"
              >
                Request Demo
              </a>
              <Link
                href="#features"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50 sm:px-8"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 