'use client'
import React from 'react'


export const HeroCTA: React.FC<{ onPrimaryClick?: () => void }> = ({ onPrimaryClick }) => {
const handleClick = () => {
// Si no hay plan seleccionado, primero ir a tipos
const tipos = document.getElementById('tipos')
tipos?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}


return (
<div className="w-full rounded-2xl p-8 md:p-12 bg-green-50 border border-green-100">
<h1 className="text-3xl md:text-5xl font-bold">Taller Plantapinta</h1>
<p className="mt-4 text-lg md:text-xl text-gray-700">
Un espacio para compartir en familia: pintar macetas, trasplantar y aprender de plantas.
</p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<button
onClick={handleClick}
className="px-6 py-3 rounded-2xl bg-green-600 text-white font-semibold shadow hover:opacity-90"
>
Inscribirse ahora
</button>
<a
href="#tipos"
className="px-6 py-3 rounded-2xl bg-white text-green-700 font-semibold border border-green-200 hover:bg-green-50"
>
Ver planes
</a>
</div>
</div>
)
}
