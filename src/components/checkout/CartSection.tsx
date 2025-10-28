'use client'
import React, { useMemo } from 'react'
import { useCart } from '../../context/CartContext'


export const CartSection: React.FC = () => {
const { cart, setQuantity, removePlan } = useCart()


const total = useMemo(() => cart.plans.reduce((acc, p) => acc + p.price * p.quantity, 0), [cart.plans])


return (
<section id="carrito" className="scroll-mt-24 py-12">
<h2 className="text-2xl md:text-3xl font-bold">Tu carrito</h2>
{cart.plans.length === 0 ? (
<p className="mt-4 text-gray-600">Aún no has añadido planes.</p>
) : (
<div className="mt-6 grid gap-4">
{cart.plans.map((p) => (
<div key={p.id} className="rounded-2xl border p-5 bg-white flex items-center justify-between">
<div>
<div className="font-semibold">{p.title}</div>
<div className="text-sm text-gray-600">S/ {p.price} c/u</div>
</div>
<div className="flex items-center gap-3">
<button onClick={() => setQuantity(p.id, Math.max(0, p.quantity - 1))} className="w-9 h-9 rounded-xl border text-lg">–</button>
<span className="min-w-[2ch] text-center">{p.quantity}</span>
<button onClick={() => setQuantity(p.id, p.quantity + 1)} className="w-9 h-9 rounded-xl border text-lg">+</button>
<button onClick={() => removePlan(p.id)} className="text-sm text-red-600 hover:underline">Quitar</button>
</div>
</div>
))}


<div className="rounded-2xl border p-5 bg-white">
<div className="flex items-center justify-between">
<span className="text-gray-700">Fecha elegida</span>
<span className="font-semibold">{cart.chosenDateId ? cart.chosenDateId : '—'}</span>
</div>
<div className="mt-3 flex items-center justify-between text-lg">
<span className="font-semibold">Total</span>
<span className="font-bold">S/ {total}</span>
</div>
<div className="mt-4 flex items-center justify-end gap-3">
<a href="#fechas" className="text-sm text-green-700 hover:underline">Cambiar fecha</a>
<button className="rounded-2xl px-5 py-2 font-semibold bg-green-600 text-white hover:opacity-90">
Continuar a pago
</button>
</div>
</div>
</div>
)}
</section>
)
}
