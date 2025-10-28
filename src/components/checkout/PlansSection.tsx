import React from "react";
import { useCart, Plan } from "../../context/CartContext";

const DEFAULT_PLANS: Plan[] = [
  { id: "padre-hijo", title: "Padre/Madre + 1 hijo/a", price: 99 },
  { id: "padre-2hijos", title: "Padre/Madre + 2 hijos/as", price: 149 },
  { id: "adicional", title: "Hijo/a adicional", price: 45 },
];
