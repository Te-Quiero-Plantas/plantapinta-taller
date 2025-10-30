import React from 'react'
import { useCart } from '../../context/CartContext'
import { INCLUDES_BY_TRACK } from '../../data/includes'


export const IncludesSection: React.FC = () => {
const { cart } = useCart()
const list = INCLUDES_BY_TRACK[cart.track]


return (
<section id="incluye" className="scroll-mt-24 py-12">
<h2 className="text-2xl md:text-3xl font-bold">¿Qué incluye el taller?</h2>
<ul className="mt-6 grid gap-3 md:grid-cols-2 text-gray-700">
{list.map((item, idx) => (
<li key={idx}>• {item}</li>
))}
</ul>
</section>
)
}
