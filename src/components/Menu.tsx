'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { images } from '@/config/images'
import { useRef, useState, useEffect } from 'react'

const products = [
  {
    name: 'Green Detox',
    price: '₹180',
    desc: 'Spinach, cucumber, apple & ginger. A powerful cleanse in every sip.',
    image: images.menu.greenDetox,
    category: 'Detox',
    tag: 'Bestseller',
  },
  {
    name: 'Tropical Sunshine',
    price: '₹160',
    desc: 'Mango, pineapple & passion fruit. Pure sunshine, bottled.',
    image: images.menu.tropicalSunrise,
    category: 'Tropical',
  },
  {
    name: 'Berry Bliss',
    price: '₹200',
    desc: 'Mixed berries with pomegranate. Antioxidant powerhouse.',
    image: images.menu.berryBliss,
    category: 'Berry',
    tag: 'New',
  },
  {
    name: 'Watermelon Mint',
    price: '₹150',
    desc: 'Fresh watermelon with spearmint. Summer in a glass.',
    image: images.menu.watermelonMint, // ✅ FIXED
    category: 'Summer',
  },
  {
    name: 'Orange Burst',
    price: '₹140',
    desc: 'Fresh-pressed seasonal oranges. Pure vitamin C.',
    image: images.menu.orangeBurst, // ✅ FIXED
    category: 'Citrus',
    tag: 'Classic',
  },
  {
    name: 'Pink Lemonade',
    price: '₹170',
    desc: 'Strawberry, lemon & basil. Refreshingly unique.',
    image: images.menu.pinkLemonade, // ✅ FIXED
    category: 'Berry',
  },
]

const categories = ['All', 'Detox', 'Tropical', 'Berry', 'Citrus', 'Summer']

export default function Menu() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const containerRef = useRef<HTMLDivElement>(null)

  const [activeCategory, setActiveCategory] = useState('All')
  const [isHovering, setIsHovering] = useState(false)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter(p => p.category === activeCategory)

  useEffect(() => {
    if (isHovering || expandedId) return

    const interval = setInterval(() => {
      if (containerRef.current) {
        const maxScroll =
          containerRef.current.scrollWidth -
          containerRef.current.clientWidth

        setScrollPosition(prev => {
          const next = prev + 2
          return next >= maxScroll - 10 ? maxScroll : next
        })
      }
    }, 30)

    return () => clearInterval(interval)
  }, [isHovering, expandedId])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollPosition
    }
  }, [scrollPosition])

  return (
    <section id="menu" ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider mb-6 shadow-md">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Our Menu
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Crafted for Your</span>
            <br />
            <span className="text-primary">Body & Soul</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Every item on our menu is designed to nourish, energize, and delight.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category)
                setScrollPosition(0)
                setExpandedId(null)
              }}
              className={`px-6 py-3 rounded-full font-medium transition ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto pb-4"
          >
            {filteredProducts.map(product => (
              <div
                key={product.name}
                className={`flex-shrink-0 transition-all duration-300 ${
                  expandedId === product.name
                    ? 'w-[500px]'
                    : 'w-72'
                }`}
              >
                <div
                  onClick={() =>
                    setExpandedId(
                      expandedId === product.name ? null : product.name
                    )
                  }
                  className="group bg-card border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer"
                >

                  {/* Image */}
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {product.tag && (
                      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {product.tag}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">
                      {product.name}
                    </h3>

                    {expandedId === product.name && (
                      <p className="text-muted-foreground text-sm mb-4">
                        {product.desc}
                      </p>
                    )}

                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-primary">
                        {product.price}
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/919960083547?text=I%20want%20to%20order%20${encodeURIComponent(product.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/90"
                    >
                      Order via WhatsApp →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          {!isHovering && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 text-primary text-2xl animate-pulse">
              →
            </div>
          )}
        </div>
      </div>
    </section>
  )
}