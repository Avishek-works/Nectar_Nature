import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700']
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Nectar & Nature | Fresh Indian Juices & Salads',
  description: 'Healthy fresh juices, salads and subscription plans delivered in Pune.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans scroll-smooth`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
