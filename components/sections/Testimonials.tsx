"use client";

import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInStagger, fadeInItem } from "@/components/ui/FadeIn";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "FORDEX no solo entregó software: rediseñó cómo pensamos nuestra operación. Redujimos tiempos de proceso en más de la mitad.",
    name: "Directora de Operaciones",
    role: "Empresa de logística",
    initials: "DO",
  },
  {
    quote:
      "La forma en que integraron IA a nuestros flujos existentes fue impecable. Cero fricción para el equipo, adopción inmediata.",
    name: "VP de Tecnología",
    role: "Grupo de salud",
    initials: "VT",
  },
  {
    quote:
      "Se sienten un equipo interno más, no un proveedor externo. Entienden el negocio tanto como la tecnología.",
    name: "CEO",
    role: "Retail multicanal",
    initials: "CE",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container">
        <SectionHeading eyebrow="Testimonios" title="Lo que dicen quienes ya trabajan con nosotros" />

        <FadeInStagger className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeInItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col rounded-3xl border border-white/[0.06] bg-white/[0.02] p-7"
            >
              <Quote className="h-5 w-5 text-primary-bright/60" />
              <p className="mt-5 flex-1 text-[15px] leading-relaxed text-gray-soft">
                “{t.quote}”
              </p>
              <div className="mt-7 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-bright text-xs font-semibold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-gray-soft">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
