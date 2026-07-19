import { HeartPulse, Boxes, ShoppingBag, Factory, HardHat } from "lucide-react";
import { GlowButton, GhostButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { GridBackground, GlowOrb } from "@/components/ui/Background";
import { HeroDashboard } from "./HeroDashboard";

const TRUST_INDUSTRIES = [
  { icon: HeartPulse, label: "Salud" },
  { icon: Boxes, label: "Logística" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: Factory, label: "Manufactura" },
  { icon: HardHat, label: "Construcción" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-40 sm:pb-28 sm:pt-48">
      <GridBackground />
      <GlowOrb color="primary" className="left-1/2 top-[-200px] h-[600px] w-[600px] -translate-x-1/2" />
      <GlowOrb color="bright" className="right-[-100px] top-[300px] h-[400px] w-[400px]" />

      <div className="container relative grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <FadeIn>
            <Eyebrow>Ingeniería de software empresarial</Eyebrow>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-6 text-display-xl font-semibold text-gradient">
              Transformamos procesos complejos en{" "}
              <span className="text-gradient-blue">plataformas inteligentes</span>.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-gray-soft">
              Desarrollamos software empresarial, automatizaciones e
              inteligencia artificial para empresas que quieren operar mejor,
              tomar decisiones con datos y crecer sin aumentar su carga
              operativa.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <GlowButton href="#contacto">Agendar reunión</GlowButton>
              <GhostButton href="#casos-de-uso">Ver proyectos</GhostButton>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-14 border-t border-white/[0.06] pt-8">
              <p className="text-xs uppercase tracking-widest text-gray-dim">
                Confiado por equipos de operación en
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                {TRUST_INDUSTRIES.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-sm font-medium text-gray-soft/80"
                  >
                    <item.icon className="h-3.5 w-3.5 text-primary-bright" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-6">
          <FadeIn delay={0.3} y={40}>
            <HeroDashboard />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
