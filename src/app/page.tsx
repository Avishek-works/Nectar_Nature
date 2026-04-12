'use client'

// Force rebuild: Nectar & Nature reference site update

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Menu from '@/components/Menu'
import CustomOrder from '@/components/CustomOrder'
import WhyChooseUs from '@/components/WhyChooseUs'
import Plans from '@/components/Plans'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Menu />
      <CustomOrder />
      <WhyChooseUs />
      <Plans />
      <Contact />
      <Footer />
    </main>
  )
}
