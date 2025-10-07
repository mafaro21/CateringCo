// app/page.tsx - Updated Homepage
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="font-bold text-2xl text-blue-600">
              CateringCo
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Services
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contact
              </Link>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium shadow-lg">
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Delicious Food, <span className="text-blue-600">Unforgettable</span> Moments
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              We transform your events into extraordinary experiences with fresh, innovative cuisine
              and impeccable service that your guests will remember.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg">
                Our Services
              </button>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-colors font-semibold text-lg border border-blue-200">
                Call: +263 78 123 4567
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Catering Services
            </h2>
            <p className="text-xl text-gray-600">
              From planning to execution, we handle every detail
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Wedding Catering',
                description: 'Beautiful dining experiences for your special day with custom menus and elegant presentation.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Corporate Events',
                description: 'Professional catering for meetings, conferences, and corporate gatherings of any size.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Private Parties',
                description: 'Intimate gatherings and celebrations with personalized menu options and attentive service.',
                color: 'from-purple-500 to-pink-500'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to discuss your catering needs and get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg">
              Call: +263 78 123 4567
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">CateringCo</h3>
              <p className="text-gray-400">
                Creating memorable culinary experiences for every occasion in Zimbabwe.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Harare, Zimbabwe</li>
                <li>+263 78 123 4567</li>
                <li>info@cateringco.co.zw</li>
                <li>Mon - Sun: 8:00 AM - 10:00 PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CateringCo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}