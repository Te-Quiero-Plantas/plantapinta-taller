import React from 'react'
import { useCart } from '../../context/CartContext'


export const WorkshopTypeSelector: React.FC = () => {
const { cart, setTrack } = useCart()


const goNext = () => {
const node = document.getElementById('incluye')
node?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}


const Card: React.FC<{ id: 'familia' | 'adultos'; title: string; desc: string }> = ({ id, title, desc }) => (
<button
onClick={() => setTrack(id)}
className={`text-left rounded-2xl border p-5 bg-white shadow-sm hover:border-green-400 ${
cart.track === id ? 'ring-2 ring-green-500 border-green-500' : ''
}`}
>
<div className="font-semibold text-lg">{title}</div>
<p className="mt-1 text-gray-600 text-sm">{desc}</p>
</button>
)


return (
<section id="tipos-taller" className="scroll-mt-24 py-10">
<h2 className="text-2xl md:text-3xl font-bold">Elige el tipo de taller</h2>
<div className="mt-6 grid gap-4 md:grid-cols-2">
<Card id="familia" title="Niños/as + Padres" desc="Pintan macetas y trasplantan juntos. Ideal 3–12 años." />
<Card id="adultos" title="Solo adultos" desc="Espacio relajado para pintar y aprender de plantas." />
</div>
<div className="mt-6 flex justify-end">
<button onClick={goNext} className="rounded-2xl px-5 py-2 font-semibold border bg-white hover:bg-green-50">Continuar</button>
</div>
</section>
)
}
