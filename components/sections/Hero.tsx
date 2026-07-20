import { GlowButton, GhostButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { GridBackground, GlowOrb } from "@/components/ui/Background";
import { HeroDashboard } from "./HeroDashboard";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-40 sm:pb-28 sm:pt-48">
      <GridBackground />
      <GlowOrb color="primary" className="left-1/2 top-[-200px] h-[600px] w-[600px] -translate-x-1/2" />
      <GlowOrb color="bright" className="right-[-100px] top-[300px] h-[400px] w-[400px]" />

      <div className="container relative grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-5">
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

        </div>

        <div className="lg:col-span-7">
          <FadeIn delay={0.3} y={40}>
            <HeroDashboard />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
