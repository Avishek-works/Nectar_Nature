'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  const link =
    "https://wa.me/919960083547?text=Hi%2C%20I%20want%20to%20order%20from%20Nature%20Fresh"

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-primary text-white px-5 py-4 rounded-full shadow-lg hover:bg-primary/90 transition"
      >
        <span className="text-xl">💬</span>
        <span className="font-semibold hidden sm:inline">
          Order Now
        </span>
      </a>
    </motion.div>
  )
}