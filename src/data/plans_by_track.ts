import type { Plan } from '../context/CartContext'


export const PLANS_BY_TRACK: Record<'familia' | 'adultos', Plan[]> = {
familia: [
{ id: 'padre-hijo', title: 'Padre/Madre + 1 hijo/a', price: 99 },
{ id: 'padre-2hijos', title: 'Padre/Madre + 2 hijos/as', price: 149 },
{ id: 'adicional', title: 'Hijo/a adicional', price: 45 },
],
adultos: [
{ id: 'adulto-solo', title: '1 adulto', price: 89 },
{ id: 'adulto-doble', title: '2 adultos', price: 160 },
],
}
