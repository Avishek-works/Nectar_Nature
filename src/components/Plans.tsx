'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const plans = [
  {
    name: '6 Day',
    subtitle: 'Starter Cleanse',
    price: '₹999',
    period: '/ 6 days',
    features: ['1 fresh juice daily', 'Choose from 5+ options', 'Free delivery', 'Pause anytime'],
    popular: false
  },
  {
    name: '15 Day',
    subtitle: 'Health Reset',
    price: '₹2,199',
    period: '/ 15 days',
    features: ['1 fresh juice daily', 'Choose from all options', 'Free delivery', 'Weekly menu change', 'Priority support'],
    popular: true
  },
  {
    name: '30 Day',
    subtitle: 'Total Transformation',
    price: '₹3,999',
    period: '/ 30 days',
    features: ['1 fresh juice daily', 'Full menu access', 'Free delivery', 'Weekly menu change', 'Priority support', '2 free salads/month'],
    popular: false
  }
]

export default function Plans() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="plans" ref={ref} className="py-24 bg-secondary/30">
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
            Our Plans
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-foreground">Choose Your</span>
            <br />
            <span className="text-primary">Health Journey</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Subscribe and never miss a day of fresh, pure nutrition. Cancel or pause anytime.
          </motion.p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className={`relative bg-card border border-border rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-primary shadow-primary/20' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold"
                >
                  Most Popular
                </motion.div>
              )}

              {/* Plan Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-center mb-6"
              >
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-primary font-semibold mb-4">{plan.subtitle}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold font-playfair text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </motion.div>

              {/* Features */}
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-3 mb-8"
              >
                {plan.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.2 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center"
                  >
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.6 + index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
                  href={`https://wa.me/919999999999?text=I%20want%20to%20subscribe%20to%20the%20${encodeURIComponent(plan.name)}%20plan`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  Start Subscription →
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
