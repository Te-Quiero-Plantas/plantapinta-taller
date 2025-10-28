import React from 'react'


export const CapacityBar: React.FC<{ enrolled: number; capacity: number }> = ({ enrolled, capacity }) => {
const pct = Math.min(100, Math.round((enrolled / capacity) * 100))
return (
<div className="mt-2">
<div className="flex justify-between text-xs text-gray-600">
<span>{enrolled} inscritos</span>
<span>cupos: {capacity}</span>
</div>
<div className="mt-1 h-2 w-full rounded-full bg-gray-100 overflow-hidden">
<div className="h-full bg-green-500" style={{ width: `${pct}%` }} />
</div>
</div>
)
}
