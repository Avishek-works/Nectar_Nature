'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Menu from '@/components/Menu'
import WhyChooseUs from '@/components/WhyChooseUs'
import Plans from '@/components/Plans'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Menu />
      <WhyChooseUs />
      <Plans />
      <Contact />
    </main>
  )
}
