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
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [quantity, setQuantity] = useState<{ [key: string]: number }>({})

  const toggleItem = (itemId: string) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
    if (!selectedItems.includes(itemId)) {
      setQuantity(prev => ({ ...prev, [itemId]: 1 }))
    }
  }

  const updateQuantity = (itemId: string, q: number) => {
    if (q > 0) {
      setQuantity(prev => ({ ...prev, [itemId]: q }))
    }
  }

  const calculateTotal = () => {
    return selectedItems.reduce((total, itemId) => {
      const item = menuItems.find(m => m.id === itemId)
      return total + (item?.price || 0) * (quantity[itemId] || 1)
    }, 0)
  }

  const handleSubmit = () => {
    if (!name || !phone || selectedItems.length === 0) {
      alert('Please fill in all fields and select at least one item')
      return
    }

    const orderDetails = selectedItems
      .map(itemId => {
        const item = menuItems.find(m => m.id === itemId)
        const qty = quantity[itemId] || 1
        return `${item?.name} (Qty: ${qty})`
      })
      .join('%0A')

    const message = `Hi! I'd like to place a custom order:%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${phone}%0A%0AItems:%0A${orderDetails}%0A%0ATotal: ₹${calculateTotal()}`
    
    window.open(`https://wa.me/919999999999?text=${message}`, '_blank')
  }

  return (
    <section id="custom-order" ref={ref} className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider mb-6 shadow-md"
          >
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Build Your Order
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-foreground">Create Your</span>
            <br />
            <span className="text-primary">Perfect Combo</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Mix and match from our menu to create your ideal healthy order. We'll prepare it fresh for you!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items Selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <div className="bg-card border border-border rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Select Items</h3>
              <div className="grid sm:grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => toggleItem(item.id)}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      selectedItems.includes(item.id)
                        ? 'border-primary bg-primary/10 shadow-lg'
                        : 'border-border bg-background hover:border-primary/50 hover:bg-secondary/20'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-2xl">{item.emoji}</span>
                          <h4 className="font-semibold text-foreground">{item.name}</h4>
                        </div>
                        <p className="text-sm text-primary font-semibold">₹{item.price}</p>
                      </div>
                      {selectedItems.includes(item.id) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0"
                        >
                          <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                      )}
                    </div>

                    {selectedItems.includes(item.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-3 pt-3 border-t border-primary/20 flex items-center gap-2"
                      >
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            updateQuantity(item.id, (quantity[item.id] || 1) - 1)
                          }}
                          className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors"
                        >
                          −
                        </button>
                        <span className="flex-1 text-center font-semibold text-sm">{quantity[item.id] || 1}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            updateQuantity(item.id, (quantity[item.id] || 1) + 1)
                          }}
                          className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors"
                        >
                          +
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Order Summary & Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 space-y-6">
              {/* Order Summary */}
              <div className="bg-card border border-border rounded-3xl p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Order Summary</h3>
                
                <div className="space-y-3 mb-6 max-h-48 overflow-y-auto">
                  {selectedItems.length === 0 ? (
                    <p className="text-muted-foreground text-sm">No items selected</p>
                  ) : (
                    selectedItems.map(itemId => {
                      const item = menuItems.find(m => m.id === itemId)
                      const qty = quantity[itemId] || 1
                      return (
                        <div key={itemId} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            {item?.name} <span className="text-primary font-semibold">x{qty}</span>
                          </span>
                          <span className="font-semibold">₹{(item?.price || 0) * qty}</span>
                        </div>
                      )
                    })
                  )}
                </div>

                {selectedItems.length > 0 && (
                  <div className="border-t border-border pt-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-foreground font-semibold">Total</span>
                      <span className="text-2xl font-bold text-primary font-playfair">₹{calculateTotal()}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Form */}
              <div className="bg-card border border-border rounded-3xl p-6 space-y-4">
                <h3 className="text-xl font-bold mb-4 text-foreground">Your Details</h3>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="91-9999999999"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <motion.button
                  disabled={selectedItems.length === 0 || !name || !phone}
                  whileHover={{ scale: selectedItems.length > 0 && name && phone ? 1.02 : 1 }}
                  whileTap={{ scale: selectedItems.length > 0 && name && phone ? 0.98 : 1 }}
                  onClick={handleSubmit}
                  className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all ${\n                    selectedItems.length > 0 && name && phone\n                      ? 'bg-primary text-white hover:bg-primary/90 cursor-pointer shadow-lg hover:shadow-xl'\n                      : 'bg-primary/50 text-white cursor-not-allowed'\n                  }`}\n                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.006a9.87 9.87 0 00-5.031 1.378c-3.055 2.116-4.922 5.636-4.922 9.228 0 1.141.264 2.253.754 3.312l-1.35 4.861 5.119-1.377c.984.292 1.961.445 2.959.456h.006c5.364 0 9.814-4.424 9.814-9.844 0-2.68-1.186-5.192-3.22-7.055-2.022-1.848-4.66-2.559-7.252-2.559"/>
                  </svg>
                  Order via WhatsApp
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
