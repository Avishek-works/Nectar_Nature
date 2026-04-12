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
          
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src={images.about}
                alt="Fresh organic fruits"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* FLOATING 100% */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="absolute -top-4 -right-4 md:-right-8 bg-primary rounded-2xl p-4 shadow-xl"
            >
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-white/80">Organic</div>
            </motion.div>

            {/* FLOATING FRESH */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-4 -left-4 md:-left-8 bg-primary rounded-2xl p-4 shadow-xl"
            >
              <div className="text-2xl font-bold text-white">Fresh</div>
              <div className="text-sm text-white/80">Daily</div>
            </motion.div>
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="space-y-8"
          >
            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium uppercase shadow-md"
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Our Story
            </motion.div>

            {/* HEADING */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span>More Than Juice.</span>
              <br />
              <span className="text-primary">A Health Movement.</span>
            </h2>

            {/* TEXT */}
            <p className="text-lg text-muted-foreground">
              Nectar & Nature was born from a simple belief — real nutrition
              shouldn't come with compromise.
            </p>

            <p className="text-lg text-muted-foreground">
              No sugar added. No water. No ice. Just pure juice.
            </p>

            {/* BUTTON */}
            <a
              href="https://wa.me/919960083547"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-white font-semibold hover:bg-primary/90"
            >
              Learn More →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
