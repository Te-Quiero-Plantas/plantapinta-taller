import React from 'react'
import { CartProvider } from '../context/CartContext'
import { HeroCTA } from '../components/checkout/HeroCTA'
import { IncludesSection } from '../components/checkout/IncludesSection'
import { PlansSection } from '../components/checkout/PlansSection'
import { DatesSection } from '../components/checkout/DatesSection'
import { CartSection } from '../components/checkout/CartSection'


export default function Page() {
return (
<CartProvider>
<main className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-10">
<HeroCTA />
{/* Sección "¿Qué incluye?" antes de elegir plan */}
<IncludesSection />
{/* Selección de planes con "Añadir a carrito" (multi-selección) */}
<PlansSection />
{/* Fechas con capacidad/inscritos */}
<DatesSection />
{/* Carrito final */}
<CartSection />
</main>
</CartProvider>
)
}
