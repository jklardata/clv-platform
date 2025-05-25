import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link 
              href="https://klardata.com" 
              className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Klardata
            </Link>
          </div>
          <nav className="flex space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</Link>
            <Link href="#industries" className="text-gray-600 hover:text-gray-900">Industries</Link>
            <Link 
              href="mailto:justin@klardata.com" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Request Demo
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 