import React from 'react'
import { CartProvider } from './context/CartContext'
import { HeaderBar } from './components/checkout/HeaderBar'
import { ErrorBoundary } from './components/checkout/ErrorBoundary'
import { HeroCTA } from './components/checkout/HeroCTA'
import { WorkshopTypeSelector } from './components/checkout/WorkshopTypeSelector'
import { IncludesSection } from './components/checkout/IncludesSection'
import { PlansSection } from './components/checkout/PlansSection'
import { DatesSection } from './components/checkout/DatesSection'
import { CartSection } from './components/checkout/CartSection'

export default function App() {
  return (
    <CartProvider>
      <ErrorBoundary>
        <HeaderBar />
        <main className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-10">
          <HeroCTA />
          <WorkshopTypeSelector />
          <IncludesSection />
          <PlansSection />
          <DatesSection />
          <CartSection />
        </main>
      </ErrorBoundary>
    </CartProvider>
  )
}
