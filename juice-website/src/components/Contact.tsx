'use client'

import Image from 'next/image'
import { images } from '@/config/images'

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-100 to-emerald-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Contact Us
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input type="text" className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea rows={5} className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-green focus:border-transparent" />
              </div>
              <button type="submit" className="w-full bg-primary-green text-white py-4 px-8 rounded-xl font-semibold hover:shadow-xl transition">
                Send Message
              </button>
            </form>
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
