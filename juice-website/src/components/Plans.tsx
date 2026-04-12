'use client'

const plans = [
  { name: 'Starter', price: '$29/month', features: ['5 juices/week', 'Standard delivery'] },
  { name: 'Premium', price: '$49/month', features: ['10 juices/week', 'Express delivery', 'Free shipping'] },
  { name: 'Family', price: '$79/month', features: ['20 juices/week', 'Express delivery', 'Priority support'] },
]

export default function Plans() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Subscription Plans
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition bg-gradient-to-b from-white to-gray-50">
              <h3 className="text-2xl font-bold mb-6">{plan.name}</h3>
              <div className="text-4xl font-bold text-primary-green mb-8">{plan.price}</div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <span className="w-5 h-5 bg-primary-green rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-primary-green text-white py-4 rounded-xl font-semibold hover:bg-green-600 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
