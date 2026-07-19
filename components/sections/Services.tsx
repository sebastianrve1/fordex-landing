"use client";

import { motion } from "framer-motion";
import { Code2, Workflow, BrainCircuit, Cable, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeInStagger, fadeInItem } from "@/components/ui/FadeIn";

const SERVICES = [
  {
    icon: Code2,
    title: "Desarrollo de Software",
    description:
      "Plataformas y aplicaciones empresariales a la medida, construidas con arquitecturas modernas y escalables.",
    tags: ["Web apps", "APIs", "Plataformas"],
  },
  {
    icon: Workflow,
    title: "Automatización",
    description:
      "Eliminamos tareas manuales y conectamos flujos de trabajo para que tu operación corra sola.",
    tags: ["Workflows", "RPA", "Orquestación"],
  },
  {
    icon: BrainCircuit,
    title: "Inteligencia Artificial",
    description:
      "Modelos y agentes que analizan datos, predicen resultados y toman decisiones en tiempo real.",
    tags: ["Modelos", "Agentes", "Analítica"],
  },
  {
    icon: Cable,
    title: "Integraciones",
    description:
      "Conectamos tus sistemas, ERPs y herramientas en una sola infraestructura que habla el mismo idioma.",
    tags: ["ERP", "APIs", "Data sync"],
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-28 sm:py-36">
      <div className="container">
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Un equipo de ingeniería completo para tu operación"
          description="De la idea a producción: diseñamos, construimos y mantenemos la infraestructura de software que tu empresa necesita para escalar."
        />

        <FadeInStagger className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeInItem}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.035] to-white/[0.01] p-7 shadow-card"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/0 blur-3xl transition-colors duration-500 group-hover:bg-primary/25" />

              <div className="relative flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-primary-bright transition-all duration-500 group-hover:border-primary-bright/40 group-hover:shadow-[0_0_30px_-8px_rgba(59,130,246,0.7)]">
                  <service.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-gray-dim opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary-bright group-hover:opacity-100" />
              </div>

              <h3 className="relative mt-6 text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="relative mt-3 flex-1 text-sm leading-relaxed text-gray-soft">
                {service.description}
              </p>

              <div className="relative mt-6 flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] text-gray-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
