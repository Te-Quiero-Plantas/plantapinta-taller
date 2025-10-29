import React from "react";
import { useCart, WorkshopDate } from "../../context/CartContext";
import { CapacityBar } from "./CapacityBar";
import { WORKSHOP_DATES } from "../../data/dates";

export const DatesSection: React.FC<{ dates?: WorkshopDate[] }> = ({ dates = WORKSHOP_DATES }) => {
  const { cart, chooseDate } = useCart();
  const goCart = () => {
    const node = document.getElementById("carrito");
    node?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="fechas" className="scroll-mt-24 py-12">
      <h2 className="text-2xl md:text-3xl font-bold">Fechas disponibles</h2>
      <p className="mt-2 text-gray-600">Elige la fecha que más te acomode.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {dates.map((d) => (
          <button
            key={d.id}
            onClick={() => chooseDate(d.id)}
            className={`text-left rounded-2xl border p-5 bg-white shadow-sm hover:border-green-400 ${
              cart.chosenDateId === d.id ? "ring-2 ring-green-500 border-green-500" : ""
            }`}
          >
            <div className="font-semibold">{d.dateLabel}</div>
            <CapacityBar enrolled={d.enrolled} capacity={d.capacity} />
          </button>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-end">
        <button
          onClick={goCart}
          disabled={!cart.chosenDateId}
          className="rounded-2xl px-5 py-2 font-semibold border disabled:opacity-40 bg-white hover:bg-green-50"
        >
          Ir a mi carrito
        </button>
      </div>
    </section>
  );
};
