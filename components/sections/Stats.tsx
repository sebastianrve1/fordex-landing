"use client";

import { CountUp } from "@/components/ui/CountUp";
import { FadeIn } from "@/components/ui/FadeIn";

const STATS = [
  { value: 40, suffix: "+", label: "Plataformas construidas" },
  { value: 98, suffix: "%", label: "Satisfacción de clientes" },
  { value: 8, prefix: "6–", suffix: " sem.", label: "Al primer módulo funcional" },
  { value: 24, suffix: "/7", label: "Soporte y monitoreo" },
];

export function Stats() {
  return (
    <section className="relative border-y border-white/[0.06] py-14 sm:py-16">
      <div className="container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <FadeIn className="max-w-xs">
            <p className="text-xs uppercase tracking-widest text-gray-dim">
              Resultados
            </p>
            <p className="mt-2 text-lg font-medium text-white">
              Números que respaldan cada entrega.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4 lg:flex-1">
            {STATS.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.08}>
                <div className="border-l border-white/[0.08] pl-5">
                  <p className="text-3xl font-semibold text-white sm:text-4xl">
                    {stat.prefix}
                    <CountUp value={stat.value} suffix={stat.suffix ?? ""} />
                  </p>
                  <p className="mt-1.5 text-sm text-gray-soft">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
