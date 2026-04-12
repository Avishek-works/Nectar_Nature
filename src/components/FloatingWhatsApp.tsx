'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.a
        href="https://wa.me/919960083547?text=Hi%2C%20I%20want%20to%20order%20from%20Nectar%20%26%20Nature"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        className="flex items-center gap-3 bg-primary text-white px-4 py-3 rounded-full shadow-lg"
      >
        💬 <span>Order Now</span>
      </motion.a>

      {/* FIXED CLICK BLOCK ISSUE */}
      <motion.div
        className="absolute inset-0 bg-primary rounded-full pointer-events-none"
      />
    </motion.div>
  )
}
