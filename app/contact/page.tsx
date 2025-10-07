// app/contact/page.tsx
import Link from 'next/link'

export default function Contact() {
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
                            <Link href="/contact" className="text-blue-600 font-medium">
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
                        Contact Us
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Get in touch to discuss your catering needs. We're here to make your event unforgettable.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Your first name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Your last name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="+263 78 123 4567"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                                        Event Type
                                    </label>
                                    <select
                                        id="eventType"
                                        name="eventType"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="">Select event type</option>
                                        <option value="wedding">Wedding</option>
                                        <option value="corporate">Corporate Event</option>
                                        <option value="private">Private Party</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                                        Event Date
                                    </label>
                                    <input
                                        type="date"
                                        id="eventDate"
                                        name="eventDate"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Tell us about your event and any specific requirements..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-lg">
                                        <span className="text-2xl">📞</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                                        <p className="text-gray-600 text-lg">+263 78 123 4567</p>
                                        <p className="text-gray-500">Mon - Sun: 8:00 AM - 10:00 PM</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-lg">
                                        <span className="text-2xl">✉️</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                                        <p className="text-gray-600 text-lg">info@cateringco.co.zw</p>
                                        <p className="text-gray-500">We respond within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-lg">
                                        <span className="text-2xl">📍</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
                                        <p className="text-gray-600 text-lg">Harare, Zimbabwe</p>
                                        <p className="text-gray-500">Serving all major areas in Zimbabwe</p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 rounded-2xl p-8 mt-8">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                                    <ul className="space-y-3 text-gray-600">
                                        <li>• Free consultation and tasting session</li>
                                        <li>• Customized menus for every budget</li>
                                        <li>• Professional and experienced staff</li>
                                        <li>• Fresh, locally sourced ingredients</li>
                                        <li>• Full event planning support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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