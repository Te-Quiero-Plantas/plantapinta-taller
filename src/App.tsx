import React from "react";
import { CartProvider } from "./context/CartContext";
import { HeroCTA } from "./components/checkout/HeroCTA";
import { IncludesSection } from "./components/checkout/IncludesSection";
import { PlansSection } from "./components/checkout/PlansSection";
import { DatesSection } from "./components/checkout/DatesSection";
import { CartSection } from "./components/checkout/CartSection";
import { HeaderBar } from './components/checkout/HeaderBar';

export default function App() {
  return (
    <CartProvider>
      <HeaderBar />
      <main className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-10">
        <HeroCTA />
        <IncludesSection />
        <PlansSection />
        <DatesSection />
        <CartSection />
      </main>
    </CartProvider>
  )
}
