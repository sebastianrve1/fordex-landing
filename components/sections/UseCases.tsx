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
    description: "Gestión de pacientes, historiales clínicos y flujos de atención automatizados. Interoperabilidad entre sistemas hospitalarios y trazabilidad completa del paciente.",
    Chart: MiniLineChart,
    span: "lg:col-span-3 lg:row-span-2",
    featured: true,
  },
  {
    icon: Truck,
    title: "Transporte",
    description: "Monitoreo de flotas y rutas en tiempo real con alertas inteligentes.",
    Chart: MiniDots,
    span: "lg:col-span-3",
  },
  {
    icon: Boxes,
    title: "Logística",
    description: "Trazabilidad de inventario y automatización de cadena de suministro.",
    Chart: MiniBars,
    span: "lg:col-span-3",
  },
  {
    icon: HardHat,
    title: "Construcción",
    description: "Control de obra, proveedores y avance de proyectos en un solo lugar.",
    Chart: MiniProgress,
    span: "lg:col-span-2",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description: "Plataformas de venta, inventario y experiencia de cliente conectadas.",
    Chart: MiniRadial,
    span: "lg:col-span-2",
  },
  {
    icon: Factory,
    title: "Manufactura",
    description: "Monitoreo de planta, mantenimiento predictivo y eficiencia operativa.",
    Chart: MiniStats,
    span: "lg:col-span-2",
  },
];

export function UseCases() {
  return (
    <section id="casos-de-uso" className="relative py-28 sm:py-36">
      <div className="container">
        <SectionHeading
          eyebrow="Casos de uso"
          title="Industrias donde ya operamos"
          description="Cada sector tiene procesos distintos. Diseñamos plataformas que se adaptan a la complejidad real de tu operación."
        />

        <FadeInStagger className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-flow-row-dense lg:grid-cols-6">
          {USE_CASES.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative flex flex-col rounded-3xl border border-white/[0.06] bg-white/[0.02] p-7 transition-colors duration-300 hover:border-primary-bright/25 hover:bg-white/[0.035] ${item.span} ${
                item.featured ? "sm:col-span-2 lg:p-9" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-primary-bright ${
                    item.featured ? "h-12 w-12" : "h-10 w-10"
                  }`}
                >
                  <item.icon className={item.featured ? "h-5 w-5" : "h-4.5 w-4.5"} />
                </div>
                <h3
                  className={`font-semibold text-white ${
                    item.featured ? "text-xl" : "text-base"
                  }`}
                >
                  {item.title}
                </h3>
              </div>
              <p
                className={`mt-4 leading-relaxed text-gray-soft ${
                  item.featured ? "max-w-sm text-[15px]" : "text-sm"
                }`}
              >
                {item.description}
              </p>
              <div
                className={`mt-6 rounded-xl border border-white/[0.05] bg-black/20 ${
                  item.featured ? "flex-1 p-5" : "p-3.5"
                }`}
              >
                <item.Chart />
              </div>
            </motion.div>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
