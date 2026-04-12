'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const menuItems = [
  { id: 'juice1', name: 'Green Detox', price: 180, emoji: '🥒' },
  { id: 'juice2', name: 'Tropical Sunrise', price: 160, emoji: '🥭' },
  { id: 'juice3', name: 'Berry Bliss', price: 200, emoji: '🍇' },
  { id: 'juice4', name: 'Watermelon Mint', price: 150, emoji: '🍉' },
  { id: 'juice5', name: 'Orange Burst', price: 140, emoji: '🍊' },
  { id: 'juice6', name: 'Pink Lemonade', price: 170, emoji: '🍋' },
  { id: 'salad1', name: 'Green Power Salad', price: 220, emoji: '🥗' },
  { id: 'salad2', name: 'Quinoa Buddha Bowl', price: 250, emoji: '🥙' },
  { id: 'snack1', name: 'Energy Balls', price: 120, emoji: '🍫' },
  { id: 'snack2', name: 'Protein Smoothie', price: 190, emoji: '🥤' },
]

export default function CustomOrder() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [quantity, setQuantity] = useState<Record<string, number>>({})

  const toggleItem = (id: string) => {
    setSelectedItems(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    )

    if (!selectedItems.includes(id)) {
      setQuantity(prev => ({ ...prev, [id]: 1 }))
    }
  }

  const updateQuantity = (id: string, n: number) => {
    if (n > 0) {
      setQuantity(prev => ({ ...prev, [id]: n }))
    }
  }

  const total = selectedItems.reduce((sum, id) => {
    const item = menuItems.find(m => m.id === id)
    return sum + (item?.price || 0) * (quantity[id] || 1)
  }, 0)

  const isButtonEnabled =
    name.trim().length > 0 &&
    /^\d{10}$/.test(phone) &&
    selectedItems.length > 0

  const submit = () => {
    if (!isButtonEnabled) return alert('Please complete the form')

    const items = selectedItems
      .map(id => {
        const item = menuItems.find(m => m.id === id)
        return `${item?.name || ''} x${quantity[id] || 1}`
      })
      .join('\n')

    const msg = `Custom Order:\nName: ${name}\nPhone: ${phone}\n\nItems:\n${items}\n\nTotal: ₹${total}`

    window.open(
      `https://wa.me/919960083547?text=${encodeURIComponent(msg)}`
    )
  }

  return (
    <section id="menu" ref={ref} className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT */}
          <div className="lg:col-span-2">
            <div className="bg-card border rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Choose Items</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {menuItems.map(item => (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`p-6 rounded-2xl border-2 cursor-pointer ${
                      selectedItems.includes(item.id)
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    <h4>{item.name}</h4>
                    <p>₹{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="bg-card border rounded-3xl p-6 shadow-xl mb-4">
              <h3 className="text-xl font-bold mb-4">Summary</h3>

              {selectedItems.length === 0 ? (
                <p>No items selected</p>
              ) : (
                selectedItems.map(id => {
                  const item = menuItems.find(m => m.id === id)
                  const q = quantity[id] || 1

                  return (
                    <div key={id} className="flex justify-between">
                      <span>{item?.name} ×{q}</span>
                      <span>₹{(item?.price || 0) * q}</span>
                    </div>
                  )
                })
              )}

              <div className="mt-3 font-bold">Total: ₹{total}</div>
            </div>

            <div className="bg-card border rounded-3xl p-6 shadow-xl">
              <input
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full mb-3 p-3 border rounded"
              />

              <input
                placeholder="Phone"
                value={phone}
                onChange={e =>
                  setPhone(e.target.value.replace(/[^0-9]/g, '').slice(0, 10))
                }
                className="w-full mb-4 p-3 border rounded"
              />

              <button
                disabled={!isButtonEnabled}
                onClick={submit}
                className={`w-full py-3 rounded-xl font-semibold ${
                  isButtonEnabled
                    ? 'bg-primary text-white'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                {!selectedItems.length
                  ? 'Select items first'
                  : !name
                  ? 'Enter your name'
                  : !/^\d{10}$/.test(phone)
                  ? 'Enter valid phone'
                  : 'Order on WhatsApp'}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
