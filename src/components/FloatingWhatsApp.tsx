'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.a
      href="https://wa.me/919960083547?text=Hi%2C%20I%20want%20to%20order%20from%20Nectar%20%26%20Nature"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-xl"
    >
      <span className="text-xl">💬</span>
      <span className="font-semibold hidden sm:inline">Order Now</span>
    </motion.a>
  )
}
