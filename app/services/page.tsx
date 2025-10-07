// app/services/page.tsx
import Link from 'next/link'

export default function Services() {
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
                            <Link href="/services" className="text-blue-600 font-medium">
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

            {/* Header */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Our Services
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive catering solutions tailored to make your event unforgettable
                    </p>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Wedding Catering */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Wedding Catering
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Make your special day truly memorable with our exquisite wedding catering services.
                                We work closely with you to create a personalized menu that reflects your style and preferences.
                            </p>
                            <ul className="text-gray-600 space-y-3">
                                <li>• Custom menu planning and tasting sessions</li>
                                <li>• Elegant table settings and presentation</li>
                                <li>• Professional serving staff</li>
                                <li>• Dietary requirement accommodations</li>
                                <li>• Wedding cake coordination</li>
                            </ul>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Elegant wedding catering setup"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Corporate Events */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div className="lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Corporate Events
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Impress your clients and colleagues with professional catering that meets the highest standards.
                                Perfect for meetings, conferences, and corporate celebrations.
                            </p>
                            <ul className="text-gray-600 space-y-3">
                                <li>• Breakfast meetings and working lunches</li>
                                <li>• Conference and seminar catering</li>
                                <li>• Corporate gala dinners</li>
                                <li>• Office party catering</li>
                                <li>• Branded food stations</li>
                            </ul>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg lg:order-1">
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Corporate event catering"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Private Parties */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Private Parties
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                From intimate dinner parties to large family gatherings, we bring exceptional cuisine
                                and service to your home or chosen venue.
                            </p>
                            <ul className="text-gray-600 space-y-3">
                                <li>• Birthday celebrations</li>
                                <li>• Anniversary parties</li>
                                <li>• Family reunions</li>
                                <li>• Holiday gatherings</li>
                                <li>• Intimate dinner parties</li>
                            </ul>
                        </div>
                        <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Private party catering"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Additional Services
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Menu Planning',
                                description: 'Custom menu development tailored to your event theme and guest preferences',
                                icon: '📋'
                            },
                            {
                                title: 'Equipment Rental',
                                description: 'Complete setup including tables, chairs, linens, and serving equipment',
                                icon: '🪑'
                            },
                            {
                                title: 'Staffing',
                                description: 'Professional servers, bartenders, and event coordinators',
                                icon: '👨‍🍳'
                            }
                        ].map((service, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg">
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Discuss Your Event?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Contact us to get started with your catering needs
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-semibold text-lg">
                            Contact Us
                        </Link>
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