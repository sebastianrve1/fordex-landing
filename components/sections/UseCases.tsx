"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartPulse,
  Truck,
  Boxes,
  HardHat,
  ShoppingBag,
  Factory,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInStagger, fadeInItem } from "@/components/ui/FadeIn";
import {
  MiniPulse,
  MiniBars,
  MiniRadial,
  MiniProgress,
  MiniRoute,
  MiniStats,
} from "@/components/ui/MiniChart";

const USE_CASES = [
  {
    icon: HeartPulse,
    title: "Salud",
    description: "Gestión de pacientes, historiales clínicos y flujos de atención automatizados.",
    pitch: "Desde historiales clínicos hasta programación de citas, todo conectado y auditable.",
    Chart: MiniPulse,
  },
  {
    icon: Truck,
    title: "Transporte",
    description: "Monitoreo de flotas y rutas en tiempo real con alertas inteligentes.",
    pitch: "Rutas optimizadas y alertas en tiempo real para que ninguna entrega se pierda.",
    Chart: MiniRoute,
  },
  {
    icon: Boxes,
    title: "Logística",
    description: "Trazabilidad de inventario y automatización de cadena de suministro.",
    pitch: "Visibilidad total de inventario, de bodega a bodega, sin hojas de cálculo.",
    Chart: MiniBars,
  },
  {
    icon: HardHat,
    title: "Construcción",
    description: "Control de obra, proveedores y avance de proyectos en un solo lugar.",
    pitch: "Control de obra y proveedores en un solo lugar, sin llamadas ni mensajes perdidos.",
    Chart: MiniProgress,
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description: "Plataformas de venta, inventario y experiencia de cliente conectadas.",
    pitch: "Una sola plataforma para vender, medir y fidelizar, en línea y en tienda.",
    Chart: MiniRadial,
  },
  {
    icon: Factory,
    title: "Manufactura",
    description: "Monitoreo de planta, mantenimiento predictivo y eficiencia operativa.",
    pitch: "Planta, mantenimiento y eficiencia operativa, monitoreados en tiempo real.",
    Chart: MiniStats,
  },
];

export function UseCases() {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected !== null ? USE_CASES[selected] : null;

  return (
    <section id="casos-de-uso" className="relative py-28 sm:py-36">
      <div className="container">
        <SectionHeading
          eyebrow="Casos de uso"
          title="Industrias donde ya operamos"
          description="Cada sector tiene procesos distintos. Elige el tuyo — diseñamos plataformas que se adaptan a la complejidad real de tu operación."
        />

        <FadeInStagger className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((item, i) => (
            <motion.button
              key={item.title}
              type="button"
              onClick={() => setSelected(selected === i ? null : i)}
              variants={fadeInItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`group flex h-full flex-col rounded-3xl border p-7 text-left transition-colors duration-300 ${
                selected === i
                  ? "border-primary-bright/50 bg-white/[0.045] shadow-[0_0_40px_-14px_rgba(59,130,246,0.8)]"
                  : "border-white/[0.06] bg-white/[0.02] hover:border-primary-bright/25 hover:bg-white/[0.035]"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-primary-bright transition-colors duration-300 ${
                    selected === i
                      ? "border-primary-bright/40 bg-primary/15"
                      : "border-white/10 bg-white/[0.04]"
                  }`}
                >
                  <item.icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
              </div>
              <p className="mt-4 min-h-[44px] text-sm leading-relaxed text-gray-soft">
                {item.description}
              </p>
              <div className="mt-6 flex h-[92px] items-center justify-center rounded-xl border border-white/[0.05] bg-black/20 p-3.5">
                <item.Chart />
              </div>
            </motion.button>
          ))}
        </FadeInStagger>

        {/* personalized payoff — appears once the visitor picks their
            industry, so the section talks back instead of just listing */}
        <div className="mt-8 flex justify-center">
          <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key={active.title}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex max-w-xl flex-col items-center gap-3 rounded-2xl border border-primary-bright/20 bg-primary/[0.06] px-6 py-5 text-center"
              >
                <p className="text-sm leading-relaxed text-gray-soft">
                  <span className="font-medium text-white">{active.title}: </span>
                  {active.pitch}
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-bright transition-colors hover:text-white"
                >
                  Hablemos de tu operación
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            ) : (
              <motion.p
                key="hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-sm text-gray-dim"
              >
                Toca tu industria para ver cómo encajamos.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
