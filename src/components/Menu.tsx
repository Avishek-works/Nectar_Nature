'use client'

import Image from 'next/image'
import { images } from '@/config/images'

const products = [
  { name: 'Green Detox Juice', price: '₹180', emoji: '🥬', desc: 'Spinach, cucumber, apple & ginger. Cleanse your system with fresh greens.', image: images.menu.juice1 },
  { name: 'Mango Mint Press', price: '₹160', emoji: '🥭', desc: 'Fresh mango blended with mint and lemon for a refreshing Indian summer drink.', image: images.menu.juice2 },
  { name: 'Beetroot Energy', price: '₹190', emoji: '🧃', desc: 'Beetroot, carrot and ginger for immunity and natural energy.', image: images.menu.juice3 },
  { name: 'Kale Caesar Salad', price: '₹260', emoji: '🥗', desc: 'Crisp greens, cherry tomatoes, parmesan and herb dressing.', image: images.menu.salad1 },
  { name: 'Quinoa Power Bowl', price: '₹320', emoji: '🍚', desc: 'Quinoa, avocado, sprouts and seeds with fresh seasonal vegetables.', image: images.menu.salad2 },
  { name: 'Seasonal Fruit Bowl', price: '₹150', emoji: '🍓', desc: 'Fresh seasonal fruits with mint and citrus drizzle for a light meal.', image: images.menu.bowl1 },
]

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase tracking-[0.35em] text-primary-green mb-4">
          Our Menu
        </p>
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
