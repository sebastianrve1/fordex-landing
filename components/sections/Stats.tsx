"use client";

import { motion } from "framer-motion";
import { Boxes, HeartHandshake, Timer, Radio } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";
import { FadeIn, FadeInStagger, fadeInItem } from "@/components/ui/FadeIn";

const STATS = [
  {
    icon: Boxes,
    value: 40,
    suffix: "+",
    label: "Plataformas construidas",
    context: "En seis industrias: salud, transporte, logística, construcción, retail y manufactura.",
  },
  {
    icon: HeartHandshake,
    value: 98,
    suffix: "%",
    label: "Satisfacción de clientes",
    context: "Medida en encuestas post-entrega, proyecto por proyecto.",
  },
  {
    icon: Timer,
    value: 8,
    prefix: "6–",
    suffix: " sem.",
    label: "Al primer módulo funcional",
    context: "Entregas incrementales desde la primera iteración, no todo o nada.",
  },
  {
    icon: Radio,
    value: 24,
    suffix: "/7",
    label: "Soporte y monitoreo",
    context: "Alertas automáticas antes de que el problema te encuentre a ti.",
    live: true,
  },
];

export function Stats() {
  return (
    <section className="relative border-y border-white/[0.06] py-14 sm:py-16">
      <div className="container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <FadeIn className="max-w-xs lg:pt-5">
            <p className="text-xs uppercase tracking-widest text-gray-dim">
              Resultados
            </p>
            <p className="mt-2 text-lg font-medium text-white">
              Números que respaldan cada entrega.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:flex-1">
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInItem}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-colors duration-300 hover:border-primary-bright/25 hover:bg-white/[0.035]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-primary-bright">
                    <stat.icon className="h-4 w-4" />
                  </span>
                  {stat.live && (
                    <span className="flex items-center gap-1.5 text-[10px] text-primary-bright">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-bright opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-bright" />
                      </span>
                      en vivo
                    </span>
                  )}
                </div>

                <p className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  {stat.prefix}
                  <CountUp value={stat.value} suffix={stat.suffix ?? ""} />
                </p>
                <p className="mt-1.5 text-sm text-gray-soft">{stat.label}</p>

                {/* context line: hidden by default, slides in on hover so the
                    card stays clean at rest but rewards curiosity */}
                <div className="grid transition-all duration-300 ease-out grid-rows-[0fr] group-hover:grid-rows-[1fr] group-hover:mt-3">
                  <p className="overflow-hidden text-[11px] leading-relaxed text-gray-dim opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {stat.context}
                  </p>
                </div>
              </motion.div>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </section>
  );
}
