'use client'

import Image from 'next/image'
import { images } from '@/config/images'

const products = [
  { name: 'Green Detox', price: '$8.99', emoji: '🥬', image: images.menu.juice1 },
  { name: 'Orange Power', price: '$7.99', emoji: '🍊', image: images.menu.juice2 },
  { name: 'Berry Blast', price: '$9.99', emoji: '🫐', image: images.menu.juice3 },
]

export default function Menu() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Our Menu
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="image-card group-hover:scale-105 transition-transform object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-3xl">{product.emoji}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                <p className="text-primary-green text-2xl font-bold mb-4">{product.price}</p>
                <button className="w-full bg-primary-green text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
