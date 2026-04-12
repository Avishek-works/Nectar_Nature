'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { images } from '@/config/images'
import { useRef, useState } from 'react'

const products = [
  { name: 'Green Detox', price: '₹180', emoji: '🥒', desc: 'Spinach, cucumber, apple & ginger. A powerful cleanse in every sip.', image: images.menu.juice1, category: 'Detox', tag: 'Bestseller' },
  { name: 'Tropical Sunrise', price: '₹160', emoji: '🥭', desc: 'Mango, pineapple & passion fruit. Pure sunshine, bottled.', image: images.menu.juice2, category: 'Tropical' },
  { name: 'Berry Bliss', price: '₹200', emoji: '🍇', desc: 'Mixed berries with pomegranate. Antioxidant powerhouse.', image: images.menu.juice3, category: 'Berry', tag: 'New' },
  { name: 'Watermelon Mint', price: '₹150', emoji: '🍉', desc: 'Fresh watermelon with spearmint. Summer in a glass.', image: images.menu.juice1, category: 'Summer' },
  { name: 'Orange Burst', price: '₹140', emoji: '🍊', desc: 'Fresh-pressed seasonal oranges. Pure vitamin C.', image: images.menu.juice2, category: 'Citrus', tag: 'Classic' },
  { name: 'Pink Lemonade', price: '₹170', emoji: '🍋', desc: 'Strawberry, lemon & a touch of basil. Refreshingly unique.', image: images.menu.juice3, category: 'Berry' },
]

const categories = ['All', 'Detox', 'Tropical', 'Berry', 'Citrus', 'Summer']

export default function Menu() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(product => product.category === activeCategory)

  return (
    <section id="menu" ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider mb-6"
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Our Menu
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-foreground">Crafted for Your</span>
            <br />
            <span className="text-primary">Body & Soul</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Every item on our menu is designed to nourish, energize, and delight.
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.name}
              layout
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: 1.2 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-card border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Emoji and Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <span className="text-4xl">{product.emoji}</span>
                  {product.tag && (
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {product.tag}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-foreground">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{product.desc}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold font-playfair text-primary">{product.price}</span>
                </div>
                <a
                  href={`https://wa.me/919999999999?text=I%20want%20to%20order%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                >
                  Order via WhatsApp →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
