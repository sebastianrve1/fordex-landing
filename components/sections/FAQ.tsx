"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const FAQS = [
  {
    question: "¿Cuánto tiempo toma desarrollar una plataforma a la medida?",
    answer:
      "Depende del alcance, pero la mayoría de nuestros proyectos entregan un primer módulo funcional en 6 a 10 semanas, con iteraciones continuas después.",
  },
  {
    question: "¿Trabajan con empresas que ya tienen sistemas legados?",
    answer:
      "Sí. Gran parte de nuestro trabajo es integrar y modernizar sistemas existentes sin interrumpir la operación actual.",
  },
  {
    question: "¿Qué tan involucrado debe estar mi equipo durante el desarrollo?",
    answer:
      "Buscamos visibilidad total: sesiones periódicas de revisión, acceso a entornos de prueba y comunicación directa con el equipo de ingeniería.",
  },
  {
    question: "¿Ofrecen soporte después del lanzamiento?",
    answer:
      "Sí, todos nuestros proyectos incluyen soporte continuo, monitoreo y ciclos de optimización una vez la plataforma está en producción.",
  },
  {
    question: "¿Pueden integrar inteligencia artificial en sistemas ya existentes?",
    answer:
      "Absolutamente. Diseñamos capas de IA que se conectan a tu infraestructura actual sin necesidad de reconstruir todo desde cero.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-20 sm:py-28">
      <div className="container">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Todo lo que necesitas saber" />

        <div className="mx-auto mt-16 max-w-2xl">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <FadeIn key={faq.question} delay={i * 0.05}>
                <div className="border-b border-white/[0.07]">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  >
                    <span className="text-[15px] font-medium text-white">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-white/10 text-gray-soft"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-10 text-sm leading-relaxed text-gray-soft">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
