import React, { createContext, useContext, useMemo, useState, useEffect } from 'react'

export type Plan = {
  id: string
  title: string
  description?: string
  price: number
}

export type SelectedPlan = Plan & { quantity: number }

export type WorkshopDate = {
  id: string
  dateLabel: string
  capacity: number
  enrolled: number
}

export type CartState = {
  plans: SelectedPlan[]
  chosenDateId?: string
}

const STORAGE_KEY = 'plantapinta_cart_v1'

const CartContext = createContext<{
  cart: CartState
  addPlan: (plan: Plan) => void
  removePlan: (planId: string) => void
  setQuantity: (planId: string, quantity: number) => void
  clearPlans: () => void
  chooseDate: (dateId: string) => void
}>({
  cart: { plans: [] },
  addPlan: () => {},
  removePlan: () => {},
  setQuantity: () => {},
  clearPlans: () => {},
  chooseDate: () => {},
})

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartState>({ plans: [] })

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw)
      if (parsed && Array.isArray(parsed.plans)) {
        const safePlans = parsed.plans.filter((p: any) => p && p.quantity > 0)
        setCart({ plans: safePlans, chosenDateId: parsed.chosenDateId })
      }
    } catch (e) {
      console.warn('No se pudo leer el carrito del storage', e)
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
    } catch (e) {
      console.warn('No se pudo guardar el carrito en storage', e)
    }
  }, [cart])

  const api = useMemo(
    () => ({
      cart,
      addPlan: (plan: Plan) => {
        setCart((prev) => {
          const existing = prev.plans.find((p) => p.id === plan.id)
          if (existing) {
            return {
              ...prev,
              plans: prev.plans.map((p) =>
                p.id === plan.id ? { ...p, quantity: p.quantity + 1 } : p
              ),
            }
          }
          return { ...prev, plans: [...prev.plans, { ...plan, quantity: 1 }] }
        })
      },
      removePlan: (planId: string) => {
        setCart((prev) => ({ ...prev, plans: prev.plans.filter((p) => p.id !== planId) }))
      },
      setQuantity: (planId: string, quantity: number) => {
        setCart((prev) => ({
          ...prev,
          plans: prev.plans
            .map((p) => (p.id === planId ? { ...p, quantity } : p))
            .filter((p) => p.quantity > 0),
        }))
      },
      clearPlans: () => setCart({ plans: [] }),
      chooseDate: (dateId: string) => setCart((prev) => ({ ...prev, chosenDateId: dateId })),
    }),
    [cart]
  )

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)

