"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { FadeIn, FadeInStagger, fadeInItem } from "@/components/ui/FadeIn";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Isotipo } from "@/components/ui/Logo";

// deterministic pseudo-random field so the layout is stable across renders
function makeStars(count: number, seedStart: number) {
  let seed = seedStart;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: rand() * 100,
    left: rand() * 100,
    size: rand() * 1.6 + 0.6,
    delay: rand() * 5,
    duration: rand() * 3 + 3,
  }));
}

const FIELD_STARS = makeStars(60, 17);

// three stars in a shallow diagonal, echoing Orion's belt — a quiet focal
// point in the field rather than a literal constellation map
const BELT_STARS = [
  { top: 22, left: 62 },
  { top: 30, left: 68 },
  { top: 38, left: 74 },
];

function OrionField() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      style={{
        maskImage:
          "radial-gradient(ellipse 65% 70% at 50% 45%, black 25%, transparent 80%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 65% 70% at 50% 45%, black 25%, transparent 80%)",
      }}
    >
      {FIELD_STARS.map((s) => (
        <motion.span
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{ top: `${s.top}%`, left: `${s.left}%`, width: s.size, height: s.size }}
          animate={{ opacity: [0.1, 0.75, 0.1] }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            delay: s.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <svg className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <linearGradient id="beltLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="50%" stopColor="#93C5FD" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.line
          x1={`${BELT_STARS[0].left}%`}
          y1={`${BELT_STARS[0].top}%`}
          x2={`${BELT_STARS[2].left}%`}
          y2={`${BELT_STARS[2].top}%`}
          stroke="url(#beltLine)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />
      </svg>

      {BELT_STARS.map((s, i) => (
        <div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ top: `${s.top}%`, left: `${s.left}%` }}
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
            className="absolute inset-0 -m-2.5 rounded-full bg-primary-bright/30 blur-md"
          />
          <span className="relative block h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_6px_1px_rgba(255,255,255,0.8)]" />
        </div>
      ))}
    </div>
  );
}

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
      <OrionField />
      <Isotipo
        variant="mono"
        className="pointer-events-none absolute -right-6 -top-6 h-56 w-44 rotate-12 opacity-[0.06] sm:h-72 sm:w-56"
      />

      <div className="container">
        <div className="relative text-center">
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

