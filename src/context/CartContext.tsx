import React, { createContext, useContext, useMemo, useState, useEffect } from 'react'
removePlan: () => {},
setQuantity: () => {},
clearPlans: () => {},
chooseDate: () => {},
})


export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
const [cart, setCart] = useState<CartState>({ track: 'familia', plans: [] })


useEffect(() => {
try {
const raw = localStorage.getItem(STORAGE_KEY)
if (!raw) return
const parsed = JSON.parse(raw)
if (parsed && Array.isArray(parsed.plans) && (parsed.track === 'familia' || parsed.track === 'adultos')) {
const safePlans = parsed.plans.filter((p: any) => p && p.quantity > 0)
setCart({ track: parsed.track, plans: safePlans, chosenDateId: parsed.chosenDateId })
}
} catch {}
}, [])


useEffect(() => {
try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)) } catch {}
}, [cart])


const api = useMemo(
() => ({
cart,
setTrack: (t: Track) => {
setCart((prev) => ({ track: t, plans: [], chosenDateId: undefined }))
},
addPlan: (plan: Plan) => {
setCart((prev) => {
const existing = prev.plans.find((p) => p.id === plan.id)
if (existing) {
return {
...prev,
plans: prev.plans.map((p) => (p.id === plan.id ? { ...p, quantity: p.quantity + 1 } : p)),
}
}
return { ...prev, plans: [...prev.plans, { ...plan, quantity: 1 }] }
})
},
removePlan: (planId: string) => setCart((prev) => ({ ...prev, plans: prev.plans.filter((p) => p.id !== planId) })),
setQuantity: (planId: string, quantity: number) => {
setCart((prev) => ({
...prev,
plans: prev.plans
.map((p) => (p.id === planId ? { ...p, quantity } : p))
.filter((p) => p.quantity > 0),
}))
},
clearPlans: () => setCart((prev) => ({ ...prev, plans: [], chosenDateId: undefined })),
chooseDate: (dateId: string) => setCart((prev) => ({ ...prev, chosenDateId: dateId })),
}),
[cart]
)


return <CartContext.Provider value={api}>{children}</CartContext.Provider>
}


export const useCart = () => useContext(CartContext)

