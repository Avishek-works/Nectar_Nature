'use client'

import Image from 'next/image'
import { images } from '@/config/images'

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-100 to-emerald-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-3">
          Start Your Health Journey
        </h2>
        <p className="text-center text-gray-700 mb-16 text-lg">
          Ready to make a change? Reach out to us and let's craft the perfect plan for your health goals.
        </p>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-8">Quick Inquiry</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">📍</div>
                <div>
                  <p className="font-semibold text-gray-900">Visit Us</p>
                  <p className="text-gray-700">Baner, Pune</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-3xl">📞</div>
                <div>
                  <p className="font-semibold text-gray-900">Call Us</p>
                  <a href="tel:+919999999999" className="text-primary-green hover:underline">
                    +91 99999 99999
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-3xl">💬</div>
                <div>
                  <p className="font-semibold text-gray-900">WhatsApp</p>
                  <a href="https://wa.me/919999999999" className="text-primary-green hover:underline">
                    Chat with us
                  </a>
                </div>
              </div>
              <a href="https://wa.me/919999999999?text=Hi%20Nectar%20%26%20Nature%2C%20I%20have%20a%20question" className="mt-8 w-full bg-primary-green text-white py-4 px-8 rounded-xl font-semibold hover:bg-green-600 transition text-center block">
                Message on WhatsApp
              </a>
            </div>
          </div>
          <div className="relative">
            <Image
              src={images.contact}
              alt="Our store location"
              width={600}
              height={400}
              className="image-section"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
