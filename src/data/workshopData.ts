export const familyPlans = [
  {
    name: "Pack Individual",
    price: "S/ 70",
    description: "Perfecto para un padre/madre con un hijo",
    features: [
      "1 maceta para pintar",
      "1 planta para transplantar",
      "Snack saludable",
      "Materiales de arte completos",
      "Instrucciones paso a paso",
      "Guía de cuidados familiar",
      "Te llevarás tu planta y maceta a casa",
      "Duración: 2.5 horas",
    ],
    popular: false,
    value: "individual-family",
  },
  {
    name: "Pack Familiar - 2 personas",
    price: "S/ 120",
    description: "Ideal para 1 adulto + 1 niño",
    features: [
      "1 maceta para pintar",
      "1 planta para transplantar",
      "Snacks y bebidas para todos",
      "Materiales completos por persona",
      "Guías de cuidado",
      "1 Regalo sorpresa",
      "Foto familiar digital de regalo",
      "Te llevarás tu planta y maceta a casa",
      "Duración: 2.5 horas",
      "¡Ahorra S/ 20!",
    ],
    popular: true,
    value: "combo1-family",
  },
  {
    name: "Pack Familiar - 3 personas",
    price: "S/ 150",
    description: "Ideal para 2 adultos + 1 niño",
    features: [
      "1 maceta para pintar",
      "1 planta para transplantar",
      "Snacks y bebidas para todos",
      "Materiales completos",
      "Guías de cuidado",
      "1 Regalo sorpresa",
      "Foto familiar digital de regalo",
      "Te llevarás tu planta y maceta a casa",
      "Duración: 2.5 horas",
    ],
    popular: false,
    value: "combo2-family",
  },
];

export const adultsPlans = [
  {
    name: "Pack Individual",
    price: "S/ 120",
    description: "Experiencia personal relajante",
    features: [
      "1 maceta premium para pintar",
      "Set completo de pinturas profesionales",
      "1 planta decorativa",
      "Vino ilimitado",
      "Snacks gourmet",
      "Guía de cuidados",
      "Duración: 2 horas",
    ],
    popular: false,
    value: "individual-adults",
  },
  {
    name: "Pack para 2",
    price: "S/ 230",
    description: "Perfecto para compartir con amigos o pareja",
    features: [
      "2 macetas premium",
      "Set completo de pinturas por persona",
      "2 plantas decorativas",
      "Vino ilimitado",
      "Tabla de snacks gourmet",
      "Guías de cuidado",
      "Foto de recuerdo",
      "Duración: 2 horas",
    ],
    popular: true,
    value: "combo-adults",
  },
];

export const familySchedules = [
  {
    day: "Sábados",
    times: [
      { label: "10:00 AM", value: "fam-sab-10" },
      { label: "3:00 PM", value: "fam-sab-15" },
    ],
    available: true,
  },
  {
    day: "Domingos",
    times: [
      { label: "10:00 AM", value: "fam-dom-10" },
      { label: "3:00 PM", value: "fam-dom-15" },
    ],
    available: true,
  },
];

export const adultsSchedules = [
  {
    day: "Viernes",
    times: [
      { label: "6:00 PM", value: "adu-vie-18" },
      { label: "8:00 PM", value: "adu-vie-20" },
    ],
    available: true,
  },
  {
    day: "Sábados",
    times: [
      { label: "5:00 PM", value: "adu-sab-17" },
      { label: "7:00 PM", value: "adu-sab-19" },
    ],
    available: true,
  },
];
