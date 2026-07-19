"use client";

import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, FadeInStagger, fadeInItem } from "@/components/ui/FadeIn";
import { motion } from "framer-motion";
import { DifferentiatorGraph } from "./DifferentiatorGraph";

const POINTS = [
  "Código escalable",
  "Arquitectura moderna",
  "Cloud",
  "Inteligencia Artificial",
  "Seguridad",
  "Documentación",
  "Soporte continuo",
];

export function Differentiator() {
  return (
    <section id="nosotros" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[500px] -translate-y-1/2 bg-radial-glow opacity-60" />
      <div className="container">
        <SectionHeading
          eyebrow="Por qué FORDEX"
          title="Pensamos como socios, no como proveedores."
          description="No entregamos un proyecto y desaparecemos. Nos involucramos en tu operación, entendemos tus métricas de negocio y construimos tecnología pensada para crecer contigo."
        />

        <FadeInStagger className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {POINTS.map((point) => (
            <motion.div
              key={point}
              variants={fadeInItem}
              className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-2"
            >
              <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary-bright">
                <Check className="h-2.5 w-2.5" />
              </span>
              <span className="text-sm text-gray-soft">{point}</span>
            </motion.div>
          ))}
        </FadeInStagger>

        <FadeIn delay={0.2} y={30} className="mt-14">
          <DifferentiatorGraph />
        </FadeIn>
      </div>
    </section>
  );
}
