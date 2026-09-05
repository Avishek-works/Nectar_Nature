'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { images } from '@/config/images'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" ref={ref} className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider mb-6 shadow-md">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Get in Touch
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Start Your</span><br />
            <span className="text-primary">Health Journey</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to make a change? Reach out to us and let's craft the perfect plan for your health goals.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="space-y-8"
          >
            <div className="space-y-6">

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-card border rounded-2xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">
                  📍
                </div>
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-muted-foreground">Baner, Pune</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 bg-card border rounded-2xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">
                  📞
                </div>
                <div>
                  <p className="font-semibold">Call Us</p>
                  <a href="tel:+919960083547" className="text-primary">
                    +91 99600 83547
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 p-4 bg-card border rounded-2xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">
                  💬
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <a
                    href="https://wa.me/919960083547"
                    target="_blank"
                    className="text-primary"
                  >
                    Chat with us
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/919960083547?text=Hi%2C%20I%20have%20a%20question%20about%20Nature%20Fresh"
              target="_blank"
              className="block text-center bg-primary text-white py-4 rounded-xl font-semibold shadow-md hover:opacity-90"
            >
              Send via WhatsApp →
            </a>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={images.contact}
                alt="Store"
                fill
                className="object-cover"
              />
            </div>

            {/* ✅ FIXED BADGE */}
            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-primary text-white px-5 py-4 rounded-2xl shadow-2xl">
              <div className="font-semibold flex items-center gap-2">
                🌿 Open Daily
              </div>
              <div className="text-sm opacity-90">
                8 AM - 8 PM
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
