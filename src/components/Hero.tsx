'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { images } from '@/config/images'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider"
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Fresh & Organic
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-2"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
                <span className="text-foreground">Fresh & Healthy</span>
                <br />
                <span className="text-primary">For Your Wellness.</span>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Pure cold-pressed juices, nourishing salads, and healthy snacks
              <br />
              100% Organic. Made Fresh When You Order.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20order%20from%20Nectar%20%26%20Nature"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Order Now →
              </a>
              <a
                href="#plans"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-border bg-transparent px-8 py-4 text-foreground font-semibold hover:bg-secondary/50 transition-colors"
              >
                View Plans
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-8 pt-4"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold font-playfair text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Natural</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold font-playfair text-foreground">Zero</div>
                <div className="text-sm text-muted-foreground">Additives</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold font-playfair text-foreground">Fresh</div>
                <div className="text-sm text-muted-foreground">Made to Order</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src={images.hero}
                alt="Fresh green juice with organic fruits and leaves"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-4 -left-4 md:-left-8 bg-card border border-border rounded-2xl p-4 shadow-xl"
            >
              <div className="text-primary font-semibold font-playfair">🌿 Baner, Pune</div>
              <div className="text-sm text-muted-foreground">Freshly made daily</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
