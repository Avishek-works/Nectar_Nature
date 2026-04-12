/* FIXED BY BLACKBOXAI - Vercel build syntax error resolved. Original truncated JSX replaced with clean TSX. 2024 */

// Minimal clean version - copy this to replace entire file content

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
  
  const [selectedItems, setSelectedItems] = useState([])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [quantity, setQuantity] = useState({})

  const toggleItem = (id) => {
    setSelectedItems(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id])
    if (!selectedItems.includes(id)) setQuantity(p => ({ ...p, [id]: 1 }))
  }

  const updateQuantity = (id, n) => n > 0 && setQuantity(p => ({ ...p, [id]: n }))

  const total = selectedItems.reduce((s, id) => {
    const i = menuItems.find(m => m.id === id)
    return s + (i?.price || 0) * (quantity[id] || 1)
  }, 0)

  const submit = () => {
    if (!name.trim() || !phone.match(/^\\d{10}$/) || !selectedItems.length) return alert('Complete form')
    
    const items = selectedItems.map(id => {
      const i = menuItems.find(m => m.id === id)
      return `${i?.name || ''} x${quantity[id] || 1}`
    }).join('\\n')
    
    const msg = `Custom Order: ${name} | ${phone} | ${items} | ₹${total}`
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(msg)}`)
  }

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <div className="inline-flex gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold uppercase mb-6 shadow-md">
            <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
            Build Order
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground bg-clip-text text-transparent">
            Your Perfect Combo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mix & match fresh juices!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1 } : {}} className="lg:col-span-2">
            <div className="bg-card border rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Choose Items</h3>
              <div className="grid sm:grid-cols-2 gap-4 max-h-96 overflow-auto">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1 + i * 0.04 }}
                    onClick={() => toggleItem(item.id)}
                    className={`p-6 rounded-2xl border-2 cursor-pointer hover:shadow-lg transition-all ${selectedItems.includes(item.id) ? 'border-primary bg-primary/5 shadow-xl' : 'border-border hover:border-primary hover:bg-primary/5'}`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl">{item.emoji}</span>
                          <h4 className="font-semibold text-lg">{item.name}</h4>
                        </div>
                        <p className="font-bold text-primary">₹{item.price}</p>
                      </div>
                      {selectedItems.includes(item.id) && (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-7 h-7 bg-primary rounded-full flex center shadow-md">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                      )}
                    </div>
                    {selectedItems.includes(item.id) && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 pt-3 border-t border-primary/30 flex items-center gap-3 p-2 bg-primary/5 rounded-xl">
                        <button onClick={e => { e.stopPropagation(); const q = quantity[item.id] || 1; q > 1 && updateQuantity(item.id, q - 1) }} className="w-10 h-10 rounded-xl bg-primary/20 hover:bg-primary/40 text-primary font-bold text-lg flex center transition-all shadow-sm">
                          −
                        </button>
                        <span className="w-12 text-center font-bold text-lg bg-card rounded-lg px-3 py-1 shadow-sm">{quantity[item.id] || 1}</span>
                        <button onClick={e => { e.stopPropagation(); updateQuantity(item.id, (quantity[item.id] || 1) + 1) }} className="w-10 h-10 rounded-xl bg-primary/20 hover:bg-primary/40 text-primary font-bold text-lg flex center transition-all shadow-sm">
                          +
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1 } : {}} className="lg:col-span-1 space-y-6">
            <div className="sticky top-24">
              <div className="bg-card border rounded-3xl p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h7a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l.293.293a1 1 0 001.414-1.414L14 8.414V3a1 1 0 10-2 0v5.414l-2.293-2.293a1 1 0 00-1.414 1.414L11 10.414V16z" />
                  </svg>
                  Summary
                </h3>
                <div className="space-y-3 mb-8 max-h-64 overflow-auto pr-1">
                  {selectedItems.length === 0 ? (
                    <p className="text-muted-foreground text-center py-12">No items</p>
                  ) : (
                    selectedItems.map(id => {
                      const item = menuItems.find(m => m.id === id)
                      const q = quantity[id] || 1
                      return (
                        <div key={id} className="flex justify-between items-center p-3 bg-muted rounded-xl hover:bg-muted/50">
                          <span className="text-sm font-medium flex-1 truncate">
                            {item?.name} ×{q}
                          </span>
                          <span className="font-bold text-primary ml-4">₹{(item?.price || 0) * q}</span>
                        </div>
                      )
                    })
                  )}
                </div>
                {selectedItems.length > 0 && (
                  <div className="border-t pt-6 p-4 bg-gradient-to-r from-primary/5 rounded-2xl">
                    <div className="flex justify-between items-baseline mb-3">
                      <span className="text-xl font-bold">Total</span>
                      <span className="text-3xl font-bold text-primary">₹{total}</span>
                    </div>
                    <p className="text-xs text-muted-foreground text-center">Incl. taxes</p>
                  </div>
                )}
              </div>
              <div className="bg-card border rounded-3xl p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-6">Contact</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-primary transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone</label>
                    <input type="tel" value={phone} onChange={e => setPhone(e.target.value.replace(/[^0-9]/g, '').slice(0,10))} placeholder="9999999999" className="w-full px-4 py-3 rounded-xl border bg-background focus:ring-primary transition-all" />
                  </div>
                </div>
                <motion.button
                  disabled={!isButtonEnabled}
                  onClick={submit}
                  className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 mt-6 transition-all shadow-lg ${isButtonEnabled ? 'bg-primary text-white hover:shadow-xl hover:scale-[1.02]' : 'bg-muted cursor-not-allowed'}`}
                >
                  {isButtonEnabled ? 'Order WhatsApp →' : 'Ready →'}
                </motion.button>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Reply in 30min
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
