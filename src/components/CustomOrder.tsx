"use client"

import { motion, useInView } from \"framer-motion\"
import { useRef, useState } from \"react\"

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
  const isInView = useInView(ref, { once: true, margin: \"-100px\" })
  
  const [selectedItems, setSelectedItems] = useState([] as string[])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [quantity, setQuantity] = useState({} as Record<string, number>)

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
    return selectedItems.reduce((total: number, itemId: string) => {
      const item = menuItems.find(m => m.id === itemId)
      return total + (item?.price || 0) * (quantity[itemId] || 1)
    }, 0)
  }

  const handleSubmit = () => {
    if (!name.trim() || !phone.trim() || selectedItems.length === 0) {
      alert('Please fill in your name, phone, and select at least one item')
      return
    }
    if (!/^\\d{10}$/.test(phone.replace(/[^0-9]/g, ''))) {
      alert('Please enter a valid 10-digit phone number')
      return
    }

    const orderDetails = selectedItems
      .map(itemId => {
        const item = menuItems.find(m => m.id === itemId)
        const qty = quantity[itemId] || 1
        return `${item?.name || 'Item'} x${qty}`
      })
      .join('\\n')

    const message = `Hi! Custom Order:\\n\\nName: ${name}\\nPhone: ${phone}\\n\\nItems:\\n${orderDetails}\\n\\nTotal: ₹${calculateTotal()}`
    
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(message)}`, \"_blank\")
  }

  const isButtonEnabled = selectedItems.length > 0 && name.trim().length > 0 && phone.trim().length === 10 && /^\\d{10}$/.test(phone.replace(/[^0-9]/g, ''))

  return (
    <section id=\"custom-order\" ref={ref} className=\"py-24 bg-gradient-to-b from-background to-secondary/20\">
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className=\"text-center mb-16\"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=\"inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider mb-6 shadow-md\"
          >
            <div className=\"w-2 h-2 bg-primary-foreground rounded-full animate-pulse\" />
            Build Your Order
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className=\"text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent\"
          >
            Create Your
            <br />
            Perfect Combo
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className=\"text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto\"
          >
            Mix and match from our menu to create your ideal healthy order. Freshly prepared just for you!
          </motion.p>
        </motion.div>

        <div className=\"grid lg:grid-cols-3 gap-8\">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className=\"lg:col-span-2\"
          >
            <div className=\"bg-card border border-border rounded-3xl p-8 shadow-xl\">
              <h3 className=\"text-2xl font-bold mb-6 text-foreground\">Select Your Items</h3>
              <div className=\"grid sm:grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent\">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.04 }}
                    onClick={() => toggleItem(item.id)}
                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg group \${selectedItems.includes(item.id)
                      ? 'border-primary bg-primary/5 shadow-xl ring-2 ring-primary/30'
                      : 'border-border hover:border-primary/50 hover:bg-primary/5'
                    }\`}
                  >
                    <div className=\"flex items-start justify-between\">
                      <div className=\"flex-1\">
                        <div className=\"flex items-center gap-3 mb-2\">
                          <span className=\"text-3xl group-hover:scale-110 transition-transform duration-300\">{item.emoji}</span>
                          <h4 className=\"font-semibold text-lg text-foreground leading-tight\">{item.name}</h4>
                        </div>
                        <p className=\"text-lg font-bold text-primary\">₹{item.price}</p>
                      </div>
                      {selectedItems.includes(item.id) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className=\"w-7 h-7 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-md\"
                          exit={{ scale: 0 }}
                        >
                          <svg className=\"w-4 h-4 text-primary-foreground\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
                            <path fillRule=\"evenodd\" d=\"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\" clipRule=\"evenodd\" />
                          </svg>
                        </motion.div>
                      )}
                    </div>

                    {selectedItems.includes(item.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className=\"mt-4 pt-4 border-t border-primary/30 flex items-center gap-3 bg-primary/5 p-3 rounded-xl\"
                      >
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            const currentQty = quantity[item.id] || 1
                            if (currentQty > 1) {
                              updateQuantity(item.id, currentQty - 1)
                            }
                          }}
                          className=\"w-10 h-10 rounded-xl bg-primary/20 hover:bg-primary/40 text-primary font-bold text-lg transition-all flex items-center justify-center shadow-sm hover:shadow-md\"
                          aria-label=\"Decrease quantity\"
                        >
                          −
                        </button>
                        <span className=\"min-w-[2rem] text-center font-bold text-lg text-foreground bg-card rounded-lg px-3 py-1 shadow-sm\">{quantity[item.id] || 1}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            updateQuantity(item.id, (quantity[item.id] || 1) + 1)
                          }}
                          className=\"w-10 h-10 rounded-xl bg-primary/20 hover:bg-primary/40 text-primary font-bold text-lg transition-all flex items-center justify-center shadow-sm hover:shadow-md\"
                          aria-label=\"Increase quantity\"
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className=\"lg:col-span-1 space-y-6\"
          >
            <div className=\"lg:sticky lg:top-24\">
              <div className=\"bg-card border border-border rounded-3xl p-6 shadow-xl\">
                <h3 className=\"text-xl font-bold mb-6 text-foreground flex items-center gap-2\">
                  <svg className=\"w-6 h-6 text-primary\" fill=\"currentColor\" viewBox=\"0 0 20 20\">
                    <path d=\"M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h7a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l.293.293a1 1 0 001.414-1.414L14 8.414V3a1 1 0 10-2 0v5.414l-2.293-2.293a1 1 0 00-1.414 1.414L11 10.414V16z\"/>
                  </svg>
                  Order Summary
                </h3>
                
                <div className=\"space-y-3 mb-8 max-h-64 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent\">
                  {selectedItems.length === 0 ? (
                    <p className=\"text-muted-foreground text-center py-12 font-medium\">No items selected yet</p>
                  ) : (
                    selectedItems.map(itemId => {
                      const item = menuItems.find(m => m.id === itemId)
                      const qty = quantity[itemId] || 1
                      const itemTotal = (item?.price || 0) * qty
                      return (
                        <div key={itemId} className=\"flex justify-between items-center p-3 bg-secondary/50 rounded-xl group hover:bg-secondary\">
                          <span className=\"text-sm font-medium text-foreground flex-1 truncate\">
                            {item?.name} <span className=\"text-primary font-bold\">×{qty}</span>
                          </span>
                          <span className=\"font-bold text-lg text-primary ml-4 whitespace-nowrap\">₹{itemTotal}</span>
                        </div>
                      )
                    })
                  )}
                </div>

                {selectedItems.length === 0 && (
                  <div className=\"border-t border-border pt-6 p-4 bg-gradient-to-r from-primary/5 to-secondary rounded-2xl\">
                    <div className=\"flex justify-between items-baseline mb-3\">
                      <span className=\"text-xl font-bold text-foreground\">Total</span>
                      <span className=\"text-3xl font-bold bg-gradient-to-r from-primary to-green bg-clip-text text-transparent tracking-tight\">₹{calculateTotal()}</span>
                    </div>
                    <p className=\"text-xs text-muted-foreground text-center\">Taxes & delivery included</p>
                  </div>
                )}
              </div>

              <div className=\"bg-card border border-border rounded-3xl p-6 shadow-xl\">
                <h3 className=\"text-xl font-bold mb-6 text-foreground\">Contact Details</h3>
                
                <div className=\"space-y-4\">
                  <div>
                    <label htmlFor=\"customer-name\" className=\"block text-sm font-semibold text-foreground mb-2\">Full Name</label>
                    <input
                      id=\"customer-name\"
                      type=\"text\"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder=\"Enter your name\"
                      className=\"w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm\"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor=\"customer-phone\" className=\"block text-sm font-semibold text-foreground mb-2\">Phone Number</label>
                    <input
                      id=\"customer-phone\"
                      type=\"tel\"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, '').slice(0,10))}
                      placeholder=\"9999999999\"
                      maxLength={10}
                      className=\"w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm\"
                      required
                    />
                  </div>
                </div>

                <motion.button
                  disabled={!isButtonEnabled}
                  whileHover={isButtonEnabled ? { scale: 1.02 } : {}}
                  whileTap={isButtonEnabled ? { scale: 0.98 } : {}}
                  onClick={handleSubmit}
                  className={`w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-lg \${isButtonEnabled
                    ? 'bg-gradient-to-r from-primary to-green text-primary-foreground hover:shadow-xl hover:-translate-y-0.5 cursor-pointer hover:from-primary/90 hover:to-green'
                    : 'bg-primary/30 text-primary-foreground/60 cursor-not-allowed'
                  }\`}
                >
                  {isButtonEnabled ? (
                    <>
                      <svg className=\"w-5 h-5\" fill=\"currentColor\" viewBox=\"0 0 24 24\">
                        <path d=\"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.006a9.87 9.87 0 00-5.031 1.378c-3.055 2.116-4.922 5.636-4.922 9.228 0 1.141.264 2.253.754 3.312l-1.35 4.861 5.119-1.377c.984.292 1.961.445 2.959.456h.006c5.364 0 9.814-4.424 9.814-9.844 0-2.68-1.186-5.192-3.22-7.055-2.022-1.848-4.66-2.559-7.252-2.559\"/>
                      </svg>
                      Order via WhatsApp
                    </>
                  ) : (
                    <>
                      <div className=\"w-5 h-5 animate-spin rounded-full border-2 border-primary-foreground/20 border-t-primary-foreground/80\" />
                      Ready to Order
                    </>
                  )}
                </motion.button>

                <p className=\"text-xs text-muted-foreground mt-4 text-center\">
                  We'll contact you within 30 mins to confirm your order
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}"
