"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { FadeIn, FadeInStagger, fadeInItem } from "@/components/ui/FadeIn";
import { GlowOrb } from "@/components/ui/Background";
import { Isotipo } from "@/components/ui/Logo";

const CONTACT_OPTIONS = [
  {
    icon: Mail,
    title: "Escríbenos por correo",
    description: "Cuéntanos sobre tu proceso y te respondemos en menos de 24 horas.",
    action: "gerencia@fordex.com.co",
    href: "mailto:gerencia@fordex.com.co?subject=Quiero%20transformar%20mi%20operación",
  },
  {
    icon: MessageCircle,
    title: "Escríbenos por WhatsApp",
    description: "Conversemos ahora mismo, directo y sin formularios.",
    action: "+57 311 618 1201",
    href: "https://wa.me/573116181201?text=Hola%2C%20quiero%20saber%20más%20sobre%20FORDEX",
  },
];

export function CTA() {
  return (
    <section id="contacto" className="relative py-20 sm:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-5xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent px-6 py-16 text-center sm:px-12 sm:py-20">
          <GlowOrb color="primary" className="left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2" />
          <Isotipo
            variant="mono"
            className="pointer-events-none absolute -right-10 -top-10 h-56 w-44 rotate-12 opacity-[0.06] sm:h-72 sm:w-56"
          />

          <div className="relative">
            <FadeIn>
              <h2 className="text-display-lg font-semibold text-gradient">
                ¿Listo para transformar tu operación?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-gray-soft">
                Conversemos sobre tu proceso más complejo. Elige el canal que
                prefieras, te respondemos rápido.
              </p>
            </FadeIn>

            <FadeInStagger className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
              {CONTACT_OPTIONS.map((option) => (
                <motion.a
                  key={option.title}
                  href={option.href}
                  target={option.href.startsWith("http") ? "_blank" : undefined}
                  rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  variants={fadeInItem}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col items-start rounded-3xl border border-white/[0.08] bg-white/[0.03] p-6 text-left backdrop-blur-sm transition-colors duration-300 hover:border-primary-bright/40 hover:bg-white/[0.05]"
                >
                  <div className="flex w-full items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-primary-bright transition-all duration-300 group-hover:border-primary-bright/40 group-hover:shadow-[0_0_20px_-4px_rgba(59,130,246,0.6)]">
                      <option.icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-gray-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-bright" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-white">
                    {option.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-soft">
                    {option.description}
                  </p>
                  <span className="mt-4 text-sm font-medium text-primary-bright">
                    {option.action}
                  </span>
                </motion.a>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </div>
    </section>
  );
}
