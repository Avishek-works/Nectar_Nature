'use client'

import Image from 'next/image'
import { images } from '@/config/images'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <span className="inline-block text-sm uppercase tracking-[0.35em] text-primary-green mb-4">
              Our Story
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              More Than Juice.
            </h2>
            <h3 className="text-3xl font-bold text-primary-green mb-8">
              A Health Movement.
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Nectar & Nature was born from a simple belief — real nutrition shouldn't come with compromise. We craft every juice fresh, using only premium ingredients, so you get the purest taste and maximum health benefits in every sip.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              No sugar added. No water. No ice. Just pure, unadulterated juice made the moment you order.
            </p>
            <a href="https://wa.me/919999999999?text=Tell%20me%20more%20about%20Nectar%20%26%20Nature" className="bg-primary-green text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all inline-block hover-scale">
              Learn More
            </a>
          </div>
          <div className="relative fade-in-delay">
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
