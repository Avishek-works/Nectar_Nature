'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { getWhatsAppLink } from '@/config/whatsapp.ts'

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  const link = getWhatsAppLink(
    "Hi, I want to order from Nectar & Nature 🥤"
  )

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-[9999]"
    >
      {/* BUTTON */}
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 px-5 py-3 rounded-full shadow-2xl
                   bg-green-600 text-white hover:bg-green-700 transition-all"
      >
        {/* WhatsApp SVG ICON */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-6 h-6 fill-white"
        >
          <path d="M16 .396C7.164.396 0 7.56 0 16c0 2.822.74 5.49 2.02 7.81L0 32l8.39-2.19A15.56 15.56 0 0 0 16 31.604c8.836 0 16-7.164 16-16s-7.164-15.208-16-15.208zm0 28.208a13.85 13.85 0 0 1-7.06-1.95l-.5-.3-4.97 1.3 1.33-4.84-.32-.52A13.77 13.77 0 0 1 2.146 16C2.146 8.52 8.42 2.246 16 2.246S29.854 8.52 29.854 16 23.58 29.604 16 29.604zm7.86-10.68c-.43-.21-2.54-1.25-2.94-1.39-.4-.14-.69-.21-.98.21-.29.43-1.12 1.39-1.37 1.68-.25.29-.5.32-.93.11-.43-.21-1.81-.67-3.45-2.14-1.28-1.14-2.14-2.54-2.39-2.97-.25-.43-.03-.66.19-.87.2-.2.43-.5.64-.75.21-.25.29-.43.43-.71.14-.29.07-.54-.03-.75-.11-.21-.98-2.36-1.34-3.24-.35-.85-.71-.73-.98-.74-.25-.01-.54-.01-.83-.01-.29 0-.75.11-1.14.54-.4.43-1.5 1.46-1.5 3.56 0 2.1 1.53 4.13 1.75 4.42.21.29 3.01 4.6 7.3 6.45 1.02.44 1.81.7 2.43.89 1.02.32 1.95.27 2.68.16.82-.12 2.54-1.04 2.9-2.05.36-1.01.36-1.87.25-2.05-.11-.18-.4-.29-.83-.5z" />
        </svg>

        <span className="font-semibold hidden sm:inline">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* GLOW PULSE */}
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full bg-green-500 -z-10"
      />
    </motion.div>
  )
}
