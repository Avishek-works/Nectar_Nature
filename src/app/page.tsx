'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Menu from '@/components/Menu'
import WhyChooseUs from '@/components/WhyChooseUs'
import Plans from '@/components/Plans'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_rgba(240,249,235,1))] text-slate-900">
      <Header />
      <Hero />
      <About />
      <Menu />
      <WhyChooseUs />
      <Plans />
      <Contact />
    </main>
  )
}
