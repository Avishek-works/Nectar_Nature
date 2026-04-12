'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.a
        href="https://wa.me/919960083547?text=Hi%2C%20I%20want%20to%20order%20from%20Nectar%20%26%20Nature"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 px-5 py-3 rounded-full shadow-xl transition-all
                   bg-green-600 text-white hover:bg-green-700"
      >
        {/* ICON */}
        <span className="text-xl">💬</span>

        {/* TEXT */}
        <span className="font-semibold hidden sm:inline">
          Order Now
        </span>
      </motion.a>

      {/* GLOW / PULSE */}
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full bg-green-500 -z-10"
      />
    </motion.div>
  )
}
