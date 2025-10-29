import React, { useMemo } from 'react'
import { useCart } from '../../context/CartContext'


function formatCurrency(value: number) {
return value.toLocaleString('es-PE', {
style: 'currency',
currency: 'PEN',
minimumFractionDigits: 2,
})
}


export const HeaderBar: React.FC = () => {
const { cart } = useCart()
const items = cart.plans.reduce((acc, p) => acc + p.quantity, 0)
const total = useMemo(
() => cart.plans.reduce((acc, p) => acc + p.price * p.quantity, 0),
[cart.plans]
)


const goCart = () => {
const node = document.getElementById('carrito')
node?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}


return (
<header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur border-b">
<div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-green-600 text-white font-bold">P</span>
<span className="font-semibold">Plantapinta Taller</span>
</div>
<button
onClick={goCart}
className="relative rounded-2xl px-3 py-1.5 text-sm font-semibold border hover:bg-green-50 flex items-center gap-2"
aria-label={`Abrir carrito, ${items} artículo(s)`}
>
<span>Carrito</span>
{items > 0 && (
<>
<span className="text-gray-700">· {formatCurrency(total)}</span>
<span
className="absolute -top-2 -right-2 min-w-[20px] h-5 px-1 rounded-full text-xs bg-green-600 text-white flex items-center justify-center"
aria-live="polite"
>
{items}
</span>
</>
)}
</button>
</div>
</header>
)
}
