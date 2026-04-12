'use client'

import Image from 'next/image'
import { images } from '@/config/images'

const products = [
  { name: 'Green Detox', price: '₹180', emoji: '🥬', desc: 'Spinach, cucumber, apple & ginger. A powerful cleanse in every sip.', image: images.menu.juice1 },
  { name: 'Orange Press', price: '₹140', emoji: '🍊', desc: 'Fresh-pressed seasonal oranges. Pure vitamin C.', image: images.menu.juice2 },
  { name: 'Berry Bliss', price: '₹200', emoji: '🫐', desc: 'Mixed berries with pomegranate. Antioxidant powerhouse.', image: images.menu.juice3 },
  { name: 'Tropical Sunrise', price: '₹160', emoji: '🥭', desc: 'Mango, pineapple & passion fruit. Pure sunshine, bottled.', image: images.menu.juice1 },
  { name: 'Watermelon Mint', price: '₹150', emoji: '🍉', desc: 'Fresh watermelon with spearmint. Summer in a glass.', image: images.menu.juice2 },
  { name: 'Pink Lemonade', price: '₹170', emoji: '🍋', desc: 'Strawberry, lemon & a touch of basil. Refreshingly unique.', image: images.menu.juice3 },
]

export default function Menu() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-3">
          Crafted for Your Body
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Every item on our menu is designed to nourish, energize, and delight.
        </p>
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
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.desc}</p>
                <p className="text-primary-green text-2xl font-bold mb-4">{product.price}</p>
                <a href="https://wa.me/919999999999?text=I%20want%20to%20order%20" className="w-full bg-primary-green text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition inline-block text-center">
                  Order via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
