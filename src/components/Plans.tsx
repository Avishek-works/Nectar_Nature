'use client'

const plans = [
  {
    name: 'Daily Plan',
    price: '₹180',
    period: '/day',
    items: '1 Juice + 1 Salad',
    features: ['Fresh Daily', 'Doorstep Delivery', 'Customizable', 'No Preservatives'],
    popular: false
  },
  {
    name: 'Weekly Plan',
    price: '₹1200',
    period: '/week',
    items: '7 Juices + 7 Salads',
    features: ['Fresh Daily', 'Doorstep Delivery', 'Customizable', 'No Preservatives'],
    popular: true
  },
  {
    name: 'Monthly Plan',
    price: '₹4800',
    period: '/month',
    items: '30 Juices + 30 Salads',
    features: ['Fresh Daily', 'Doorstep Delivery', 'Customizable', 'No Preservatives'],
    popular: false
  }
]

export default function Plans() {
  return (
    <section id="plans" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase tracking-[0.35em] text-primary-green mb-4 fade-in">
          Our Plans
        </p>
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-3 fade-in-delay">
          Choose Your Journey
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg fade-in-delay-2">
          Flexible plans designed to fit your lifestyle and health goals.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover-scale fade-in ${plan.popular ? 'ring-2 ring-primary-green scale-105' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
              {plan.popular && (
                <div className="bg-primary-green text-white text-center py-1 px-4 rounded-full text-sm font-semibold mb-4 -mt-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
              <div className="text-center mb-4">
                <span className="text-4xl font-bold text-primary-green">{plan.price}</span>
                <span className="text-gray-600">{plan.period}</span>
              </div>
              <p className="text-center text-gray-600 mb-6">{plan.items}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/919999999999?text=I%20want%20to%20subscribe%20to%20the%20" className={`w-full py-3 rounded-xl font-semibold transition text-center inline-block ${plan.popular ? 'bg-primary-green text-white hover:bg-green-600' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
