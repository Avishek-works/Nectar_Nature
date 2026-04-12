'use client'

const reasons = [
  { icon: '🍯', title: 'No Sugar Added', desc: 'Pure fruit sweetness only. Zero refined sugar, zero artificial sweeteners.' },
  { icon: '⏱️', title: 'Freshly Made', desc: 'Every juice is prepared the moment you order. Nothing pre-made, ever.' },
  { icon: '🏥', title: '100% Hygienic', desc: 'FSSAI compliant. Sanitized equipment, clean environment, every single day.' },
  { icon: '🌾', title: 'Premium Ingredients', desc: 'Hand-picked, seasonal produce sourced from trusted organic farms.' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-3">
          The Difference You Can Taste
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          What sets Nectar & Nature apart from the rest.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition">
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="font-bold text-lg mb-3 text-gray-900">{reason.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
