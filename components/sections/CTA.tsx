"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { FadeIn, FadeInStagger, fadeInItem } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { GlowOrb } from "@/components/ui/Background";
import { Isotipo } from "@/components/ui/Logo";

const INDUSTRIES = [
  "Salud",
  "Transporte",
  "Logística",
  "Construcción",
  "Retail",
  "Manufactura",
];

const CONTACT_OPTIONS = [
  {
    icon: Mail,
    title: "Escríbenos por correo",
    description: "Cuéntanos sobre tu proceso, con calma y en detalle.",
    action: "gerencia@fordex.com.co",
    href: "mailto:gerencia@fordex.com.co?subject=Quiero%20transformar%20mi%20operación",
    badge: "Respuesta en <24h",
    live: false,
  },
  {
    icon: MessageCircle,
    title: "Escríbenos por WhatsApp",
    description: "Conversemos ahora mismo, directo y sin formularios.",
    action: "+57 311 618 1201",
    href: "https://wa.me/573116181201?text=Hola%2C%20quiero%20saber%20más%20sobre%20FORDEX",
    badge: "Respuesta inmediata",
    live: true,
  },
];

export function CTA() {
  return (
    <section id="contacto" className="relative py-28 sm:py-36">
      <div className="container">
        <div className="relative overflow-hidden rounded-5xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent px-6 py-20 text-center sm:px-14 sm:py-28">
          <GlowOrb color="primary" className="left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2" />
          <Isotipo
            variant="mono"
            className="pointer-events-none absolute -right-10 -top-10 h-56 w-44 rotate-12 opacity-[0.06] sm:h-72 sm:w-56"
          />

          <div className="relative">
            <FadeIn>
              <div className="flex justify-center">
                <Eyebrow>Contacto</Eyebrow>
              </div>
            </FadeIn>

            <FadeIn delay={0.06}>
              <p className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[11px] font-medium uppercase tracking-[0.2em] text-gray-dim">
                {INDUSTRIES.map((industry, i) => (
                  <span key={industry} className="flex items-center gap-2.5">
                    {industry}
                    {i !== INDUSTRIES.length - 1 && (
                      <span className="h-1 w-1 rounded-full bg-white/15" />
                    )}
                  </span>
                ))}
              </p>
            </FadeIn>

            <FadeIn delay={0.12}>
              <h2 className="mt-6 text-display-lg font-semibold text-gradient">
                ¿Listo para transformar tu operación?
              </h2>
            </FadeIn>
            <FadeIn delay={0.18}>
              <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-gray-soft">
                Elige el canal que prefieras. Hablas directo con el equipo que
                construye, no con un formulario.
              </p>
            </FadeIn>

            <FadeInStagger className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
              {CONTACT_OPTIONS.map((option) => (
                <motion.a
                  key={option.title}
                  href={option.href}
                  target={option.href.startsWith("http") ? "_blank" : undefined}
                  rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  variants={fadeInItem}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7 text-left backdrop-blur-sm transition-colors duration-300 hover:border-primary-bright/40 hover:bg-white/[0.05]"
                >
                  {option.live && (
                    <div className="pointer-events-none absolute -inset-px -z-10 animate-pulse-glow rounded-3xl bg-primary/10 blur-xl" />
                  )}

                  <div className="flex w-full items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-primary-bright transition-all duration-300 group-hover:border-primary-bright/40 group-hover:shadow-[0_0_20px_-4px_rgba(59,130,246,0.6)]">
                      <option.icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-gray-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-bright" />
                  </div>

                  <h3 className="mt-6 text-base font-semibold text-white">
                    {option.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-soft">
                    {option.description}
                  </p>

                  <div className="mt-5 flex w-full items-center justify-between gap-3 border-t border-white/[0.06] pt-4">
                    <span className="text-sm font-medium text-primary-bright">
                      {option.action}
                    </span>
                    <span
                      className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-medium ${
                        option.live
                          ? "bg-emerald-400/10 text-emerald-300"
                          : "bg-primary/10 text-primary-bright"
                      }`}
                    >
                      <span className="relative flex h-1.5 w-1.5">
                        {option.live && (
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        )}
                        <span
                          className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
                            option.live ? "bg-emerald-400" : "bg-primary-bright"
                          }`}
                        />
                      </span>
                      {option.badge}
                    </span>
                  </div>
                </motion.a>
              ))}
            </FadeInStagger>

            <FadeIn delay={0.3}>
              <p className="mt-8 text-sm text-gray-dim">
                Sin compromiso. Sin formularios eternos.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
