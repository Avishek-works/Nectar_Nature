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
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl">
            Fresh Juice
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-lg">
            Natural, Healthy, Delicious
          </p>
        </div>
      </div>
    </section>
  )
}
