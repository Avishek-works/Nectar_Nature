'use client'

import Image from 'next/image'
import { images } from '@/config/images'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-green-100 to-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase tracking-[0.35em] text-primary-green mb-4 fade-in">
          Get in Touch
        </p>
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-3 fade-in-delay">
          Start Your Health Journey
        </h2>
        <p className="text-center text-gray-700 mb-16 text-lg fade-in-delay-2">
          Ready to make a change? Reach out to us and let's craft the perfect plan for your health goals.
        </p>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">📞</div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <a href="tel:+919999999999" className="text-primary-green hover:underline">
                    +91 99999 99999
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-3xl">✉️</div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:hello@nectarandnature.com" className="text-primary-green hover:underline">
                    hello@nectarandnature.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-3xl">📍</div>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-700">Delhi NCR</p>
                </div>
              </div>
              <a href="https://wa.me/919999999999?text=Hi%20Nectar%20%26%20Nature%2C%20I%20have%20a%20question" className="mt-8 w-full bg-primary-green text-white py-4 px-8 rounded-xl font-semibold hover:bg-green-600 transition text-center block hover-scale">
                Message on WhatsApp
              </a>
            </div>
          </div>
          <div className="relative fade-in-delay">
            <Image
              src={images.contact}
              alt="Our store location"
              width={600}
              height={400}
              className="image-section rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
