import React from 'react'
>
Añadir a carrito
</button>
) : (
<div className="mt-4 flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<button
onClick={() => setQuantity(plan.id, selected.quantity - 1)}
className="w-9 h-9 rounded-xl border text-lg"
>
–
</button>
<span className="min-w-[2ch] text-center">{selected.quantity}</span>
<button
onClick={() => setQuantity(plan.id, selected.quantity + 1)}
className="w-9 h-9 rounded-xl border text-lg"
>
+
</button>
</div>
<button
onClick={() => removePlan(plan.id)}
className="text-sm text-red-600 hover:underline"
>
Quitar
</button>
</div>
)}
</div>
)
})}
</div>


<div className="mt-6 flex items-center justify-between">
<div className="text-gray-700">
{cart.plans.length > 0 ? (
<>
<span className="font-semibold">{cart.plans.length}</span> ítem(s) en tu carrito
</>
) : (
<span className="text-gray-500">Aún no has añadido planes</span>
)}
</div>
<button
onClick={goFechas}
disabled={cart.plans.length === 0}
className="rounded-2xl px-5 py-2 font-semibold border disabled:opacity-40 bg-white hover:bg-green-50"
>
Ver fechas disponibles
</button>
</div>
</section>
)
}
