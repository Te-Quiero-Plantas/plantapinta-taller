import React, { createContext, useContext, useMemo, useState, useEffect } from 'react'

export type Track = 'familia' | 'adultos'

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
  track: Track
  plans: SelectedPlan[]
  chosenDateId?: string
}

const STORAGE_KEY = 'plantapinta_cart_v2'

const CartContext = createContext<{
  cart: CartState
  setTrack: (t: Track) => void
  addPlan: (plan: Plan) => void
  removePlan: (planId: string) => void
  setQuantity: (planId: string, quantity: number) => void
  clearPlans: () => void
  chooseDate: (dateId: string) => void
}>({
  cart: { track: 'familia', plans: [] },
  setTrack: () => {},
  addPlan: () => {},
  removePlan: () => {},
  setQuantity: () => {},
  clearPlans: () => {},
  chooseDate: () => {},
})

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartState>({ track: 'familia', plans: [] })

  // Cargar estado desde localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw)
      if (
        parsed &&
        (parsed.track === 'familia' || parsed.track === 'adultos') &&
        Array.isArray(parsed.plans)
      ) {
        const safePlans = parsed.plans.filter((p: any) => p && p.quantity > 0)
        setCart({ track: parsed.track, plans: safePlans, chosenDateId: parsed.chosenDateId })
      }
    } catch {
      // ignore
    }
  }, [])

  // Guardar en localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
    } catch {
      // ignore
    }
  }, [cart])

  const api = useMemo(
    () => ({
      cart,
      setTrack: (t: Track) => {
        // al cambiar de track limpiamos carrito y fecha
        setCart({ track: t, plans: [], chosenDateId: undefined })
      },
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
      clearPlans: () => setCart((prev) => ({ ...prev, plans: [], chosenDateId: undefined })),
      chooseDate: (dateId: string) => setCart((prev) => ({ ...prev, chosenDateId: dateId })),
    }),
    [cart]
  )

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
