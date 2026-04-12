'use client'

const plans = [
  { name: 'Starter Cleanse', period: '6 Day', price: '₹999', features: ['1 fresh juice daily', 'Choose from 5+ options', 'Free delivery', 'Pause anytime'], popular: false },
  { name: 'Health Reset', period: '15 Day', price: '₹2,199', features: ['1 fresh juice daily', 'Choose from all options', 'Free delivery', 'Weekly menu change', 'Priority support'], popular: true },
  { name: 'Total Transformation', period: '30 Day', price: '₹3,999', features: ['1 fresh juice daily', 'Full menu access', 'Free delivery', 'Weekly menu change', 'Priority support', '2 free salads/month'], popular: false },
]

export default function Plans() {
  return (
    <section id="plans" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase tracking-[0.35em] text-primary-green mb-4">
          Subscription Plans
        </p>
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-3">
          Your Daily Dose of Health
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Subscribe and never miss a day of fresh, pure nutrition. Cancel or pause anytime.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative rounded-2xl p-8 transition-all ${plan.popular ? 'border-2 border-primary-green shadow-2xl scale-105' : 'border border-gray-200 hover:shadow-xl'} bg-gradient-to-b from-white to-gray-50`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-green text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.period}</p>
              <div className="text-4xl font-bold text-primary-green mb-1">{plan.price}</div>
              <p className="text-gray-600 mb-8">/ {plan.period.toLowerCase()}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <span className="w-5 h-5 bg-primary-green rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/919999999999?text=I%20want%20to%20subscribe%20" className="w-full bg-primary-green text-white py-4 rounded-xl font-semibold hover:bg-green-600 transition text-center block">
                Start Subscription
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
