'use client'

import Image from 'next/image'
import { images } from '@/config/images'

export default function Hero() {
  return (
    <section className="relative w-full">
      <Image
        src={images.hero}
        alt="Fresh green juice hero"
        width={1470}
        height={800}
        priority
        className="image-hero"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div className="text-center text-white max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl">
            Pure Juice.
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 drop-shadow-lg text-green-200">
            Nothing Else.
          </h2>
          <p className="text-lg md:text-xl mb-8 drop-shadow-lg opacity-95">
            No Sugar. No Water. No Ice. Made Fresh When You Order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919999999999?text=Hi%20I%20want%20to%20order%20from%20Nectar%20%26%20Nature" className="bg-primary-green hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg">
              Order Now
            </a>
            <a href="#plans" className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold transition backdrop-blur border border-white">
              View Plans
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
