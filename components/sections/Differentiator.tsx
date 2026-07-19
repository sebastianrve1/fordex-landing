"use client";

import { Check } from "lucide-react";
import { Eyebrow } from "@/components/ui/SectionHeading";
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
      <div className="container grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <FadeIn>
            <Eyebrow>Por qué FORDEX</Eyebrow>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-6 text-display-md font-semibold text-gradient">
              Pensamos como socios, no como proveedores.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-gray-soft">
              No entregamos un proyecto y desaparecemos. Nos involucramos en
              tu operación, entendemos tus métricas de negocio y construimos
              tecnología pensada para crecer contigo.
            </p>
          </FadeIn>

          <FadeInStagger className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4">
            {POINTS.map((point) => (
              <motion.div
                key={point}
                variants={fadeInItem}
                className="flex items-center gap-2.5"
              >
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary-bright">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-sm text-gray-soft">{point}</span>
              </motion.div>
            ))}
          </FadeInStagger>
        </div>

        <div className="lg:col-span-6">
          <FadeIn delay={0.2} y={30}>
            <DifferentiatorGraph />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
