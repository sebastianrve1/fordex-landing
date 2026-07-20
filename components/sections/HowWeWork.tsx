"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Layers, Braces, Rocket, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const STEPS = [
  {
    icon: Search,
    number: "01",
    title: "Descubrimiento",
    description: "Entendemos tu operación, tus cuellos de botella y tus objetivos de negocio.",
  },
  {
    icon: Layers,
    number: "02",
    title: "Arquitectura",
    description: "Diseñamos la arquitectura técnica óptima: escalable, segura y a la medida.",
  },
  {
    icon: Braces,
    number: "03",
    title: "Desarrollo",
    description: "Construimos con estándares de ingeniería de nivel empresarial.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Implementación",
    description: "Desplegamos en tu infraestructura con cero fricción para tu equipo.",
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "Optimización",
    description: "Medimos, ajustamos y mejoramos continuamente el rendimiento.",
  },
];

export function HowWeWork() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="como-trabajamos" className="relative py-28 sm:py-36">
      <div className="container">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Un proceso claro, de extremo a extremo"
          description="Sin sorpresas ni caja negra. Cada etapa tiene entregables concretos y visibilidad total para tu equipo."
        />

        <div className="relative mt-20">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/[0.08] md:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-primary via-primary-bright to-primary/30 md:block"
          />
          {/* signal that travels the line once, as if the process itself just
              fired up — lands roughly where each icon sits along the way */}
          <motion.span
            initial={{ left: "0%", opacity: 0 }}
            whileInView={{ left: "100%", opacity: [0, 1, 1, 0] }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-6 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-glow-sm md:block"
          />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6">
            {STEPS.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.1}>
                <motion.div
                  onHoverStart={() => setHovered(i)}
                  onHoverEnd={() => setHovered(null)}
                  animate={{
                    opacity: hovered === null || hovered === i ? 1 : 0.45,
                  }}
                  transition={{ duration: 0.25 }}
                  className="relative flex cursor-default flex-col items-start md:items-center md:text-center"
                >
                  <motion.div
                    animate={{
                      scale: hovered === i ? 1.12 : 1,
                      boxShadow:
                        hovered === i
                          ? "0 0 32px -6px rgba(59,130,246,0.95)"
                          : "0 0 25px -6px rgba(59,130,246,0.7)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-primary-bright/30 bg-background text-primary-bright"
                  >
                    <step.icon className="h-5 w-5" />
                  </motion.div>
                  <span className="mt-5 text-xs font-medium tracking-widest text-gray-dim">
                    {step.number}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-gray-soft">
                    {step.description}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
