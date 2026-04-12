'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { images } from '@/config/images'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src={images.about}
                alt="Fresh organic fruits and vegetables being prepared for juice"
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -top-4 -right-4 md:-right-8 bg-primary rounded-2xl p-4 shadow-xl"
            >
              <div className="text-2xl font-bold font-playfair text-primary-foreground">100%</div>
              <div className="text-sm text-primary-foreground/80">Organic</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-4 -left-4 md:-left-8 bg-primary rounded-2xl p-4 shadow-xl"
            >
              <div className="text-2xl font-bold font-playfair text-primary-foreground">Fresh</div>
              <div className="text-sm text-primary-foreground/80">Daily</div>
            </motion.div>
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider"
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Our Story
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-2"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
                <span className="text-foreground">More Than Juice.</span>
                <br />
                <span className="text-primary">A Health Movement.</span>
              </h2>
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Nectar & Nature was born from a simple belief — real nutrition shouldn't come with compromise. We craft every juice fresh, using only premium ingredients, so you get the purest taste and maximum health benefits in every sip.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              No sugar added. No water. No ice. Just pure, unadulterated juice made the moment you order.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href="https://wa.me/919999999999?text=Tell%20me%20more%20about%20Nectar%20%26%20Nature"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Learn More →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
