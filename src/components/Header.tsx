'use client'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/70 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-primary-green/10 px-4 py-2 text-primary-green font-bold text-lg">
            Nectar & Nature
          </div>
          <span className="hidden sm:inline text-sm text-gray-600">
            Fresh Indian juices & salads
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#about" className="hover:text-primary-green transition">
            About
          </a>
          <a href="#menu" className="hover:text-primary-green transition">
            Menu
          </a>
          <a href="#why" className="hover:text-primary-green transition">
            Why
          </a>
          <a href="#plans" className="hover:text-primary-green transition">
            Plans
          </a>
          <a href="#contact" className="hover:text-primary-green transition">
            Contact
          </a>
        </nav>
        <a
          href="https://wa.me/919999999999"
          className="inline-flex items-center justify-center rounded-full bg-primary-green px-5 py-3 text-white font-semibold shadow-lg hover:bg-green-600 transition"
        >
          WhatsApp
        </a>
      </div>
    </header>
  )
}
