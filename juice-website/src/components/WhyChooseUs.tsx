'use client'

const reasons = [
  { icon: '🥗', title: 'Organic Ingredients', desc: '100% organic fruits & vegetables' },
  { icon: '⚡', title: 'Fresh Daily', desc: 'Made fresh every morning' },
  { icon: '🚚', title: 'Fast Delivery', desc: 'Delivered cold within hours' },
  { icon: '♻️', title: 'Eco Friendly', desc: 'Sustainable packaging' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-50 to-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center p-6 hover:scale-105 transition">
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="font-bold text-xl mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
