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
          
          {/* LEFT */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium uppercase shadow-md"
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Fresh & Organic
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span>Fresh & Healthy</span>
              <br />
              <span className="text-primary">For Your Wellness.</span>
            </h1>

            <p className="text-lg text-muted-foreground">
              Pure cold-pressed juices, nourishing salads, and healthy snacks
              <br />
              100% Organic. Made Fresh When You Order.
            </p>

            <div className="flex gap-4">
              <a
                href="https://wa.me/919960083547"
                target="_blank"
                className="px-8 py-4 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700"
              >
                Order Now →
              </a>

              <a
                href="#plans"
                className="px-8 py-4 rounded-full border"
              >
                View Plans
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <motion.div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src={images.hero}
                alt="Fresh juice"
                fill
                className="object-cover"
              />
            </div>

            {/* ✅ FIXED BADGE */}
            <motion.div
              className="absolute -bottom-4 -left-4 bg-primary rounded-2xl p-4 shadow-xl"
            >
              <div className="text-white font-semibold">
                🌿 Baner, Pune
              </div>
              <div className="text-sm text-white/80">
                Freshly made daily
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
