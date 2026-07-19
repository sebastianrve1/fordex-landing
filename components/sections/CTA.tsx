import { GlowButton } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { GlowOrb } from "@/components/ui/Background";
import { Isotipo } from "@/components/ui/Logo";

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
                Conversemos sobre tu proceso más complejo. En 30 minutos te
                mostramos cómo lo convertimos en una plataforma inteligente.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mt-10 flex justify-center">
                <GlowButton href="mailto:contacto@fordex.com" className="px-9 py-4 text-base">
                  Agendar una reunión
                </GlowButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
