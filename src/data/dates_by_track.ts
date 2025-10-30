import type { WorkshopDate } from '../context/CartContext'


export const DATES_BY_TRACK: Record<'familia' | 'adultos', WorkshopDate[]> = {
familia: [
{ id: 'fam-2025-11-22-10am', dateLabel: 'Sáb 22 Nov, 10:00', capacity: 15, enrolled: 9 },
{ id: 'fam-2025-11-22-4pm', dateLabel: 'Sáb 22 Nov, 16:00', capacity: 15, enrolled: 14 },
],
adultos: [
{ id: 'adu-2025-11-29-7pm', dateLabel: 'Sáb 29 Nov, 19:00', capacity: 12, enrolled: 6 },
{ id: 'adu-2025-12-06-7pm', dateLabel: 'Sáb 06 Dic, 19:00', capacity: 12, enrolled: 3 },
],
}
