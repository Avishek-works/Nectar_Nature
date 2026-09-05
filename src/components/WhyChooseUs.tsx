'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const reasons = [
  { icon: '🍯', title: 'No Sugar Added', desc: 'Pure fruit sweetness only. Zero refined sugar, zero artificial sweeteners.' },
  { icon: '⏱️', title: 'Freshly Made', desc: 'Every juice is prepared the moment you order. Nothing pre-made, ever.' },
  { icon: '🏥', title: '100% Hygienic', desc: 'FSSAI compliant. Sanitized equipment, clean environment, every single day.' },
  { icon: '🌾', title: 'Premium Ingredients', desc: 'Hand-picked, seasonal produce sourced from trusted organic farms.' },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="why" ref={ref} className="py-24 bg-background">
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
            className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider mb-6 shadow-md"
          >
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Why Choose Us
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-foreground">The Difference</span>
            <br />
            <span className="text-primary">You Can Taste</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            What sets Nature Fresh apart from the rest.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-card border border-border rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300"
              >
                {reason.icon}
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-bold text-xl mb-4 text-foreground"
              >
                {reason.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-muted-foreground leading-relaxed"
              >
                {reason.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
