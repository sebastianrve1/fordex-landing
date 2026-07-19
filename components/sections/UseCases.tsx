"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Truck,
  Boxes,
  HardHat,
  ShoppingBag,
  Factory,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInStagger, fadeInItem } from "@/components/ui/FadeIn";
import {
  MiniLineChart,
  MiniBars,
  MiniRadial,
  MiniProgress,
  MiniDots,
  MiniStats,
} from "@/components/ui/MiniChart";

const USE_CASES = [
  {
    icon: HeartPulse,
    title: "Salud",
    description: "Gestión de pacientes, historiales clínicos y flujos de atención automatizados.",
    Chart: MiniLineChart,
  },
  {
    icon: Truck,
    title: "Transporte",
    description: "Monitoreo de flotas y rutas en tiempo real con alertas inteligentes.",
    Chart: MiniDots,
  },
  {
    icon: Boxes,
    title: "Logística",
    description: "Trazabilidad de inventario y automatización de cadena de suministro.",
    Chart: MiniBars,
  },
  {
    icon: HardHat,
    title: "Construcción",
    description: "Control de obra, proveedores y avance de proyectos en un solo lugar.",
    Chart: MiniProgress,
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description: "Plataformas de venta, inventario y experiencia de cliente conectadas.",
    Chart: MiniRadial,
  },
  {
    icon: Factory,
    title: "Manufactura",
    description: "Monitoreo de planta, mantenimiento predictivo y eficiencia operativa.",
    Chart: MiniStats,
  },
];

export function UseCases() {
  return (
    <section id="casos-de-uso" className="relative py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Casos de uso"
          title="Industrias donde ya operamos"
          description="Cada sector tiene procesos distintos. Diseñamos plataformas que se adaptan a la complejidad real de tu operación."
        />

        <FadeInStagger className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-3xl border border-white/[0.06] bg-white/[0.02] p-7 transition-colors duration-300 hover:border-primary-bright/25 hover:bg-white/[0.035]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-primary-bright">
                  <item.icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-soft">
                {item.description}
              </p>
              <div className="mt-6 rounded-xl border border-white/[0.05] bg-black/20 p-3.5">
                <item.Chart />
              </div>
            </motion.div>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
