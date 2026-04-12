'use client'

import Image from 'next/image'
import { images } from '@/config/images'

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Our Juices
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Made from the freshest organic fruits and vegetables. No added sugars, preservatives, or artificial flavors. 
              Just pure, natural goodness in every bottle.
            </p>
            <button className="bg-primary-green text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all">
              Learn More
            </button>
          </div>
          <div className="relative">
            <Image
              src={images.about}
              alt="Fresh ingredients"
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
