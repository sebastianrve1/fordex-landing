"use client";

import { motion } from "framer-motion";
import {
  LayoutGrid,
  Search,
  Bell,
  Settings,
  Users,
  BarChart3,
  Layers,
  Zap,
  ChevronRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const NAV = [
  { icon: LayoutGrid, label: "Overview", active: true },
  { icon: BarChart3, label: "Analítica" },
  { icon: Layers, label: "Procesos" },
  { icon: Users, label: "Equipo" },
  { icon: Settings, label: "Configuración" },
];

const TABLE_ROWS = [
  { name: "Onboarding de clientes", status: "Automatizado", value: "98%", trend: "up" },
  { name: "Conciliación de pagos", status: "Automatizado", value: "94%", trend: "up" },
  { name: "Reportes financieros", status: "En optimización", value: "76%", trend: "up" },
  { name: "Soporte nivel 1", status: "Automatizado", value: "99%", trend: "up" },
];

const bigBars = [45, 70, 55, 85, 60, 95, 72, 88, 65, 100, 78, 92];

export function ProductShowcase() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="El producto"
          title="Un panel de control para toda tu operación"
          description="Así se ve FORDEX en producción: visibilidad completa, datos en tiempo real y control total sobre cada proceso automatizado."
        />

        <FadeIn delay={0.15} y={40} className="mt-16">
          <div className="relative">
            <div className="absolute -inset-x-10 -inset-y-10 -z-10 bg-primary/15 blur-[120px]" />
            <div className="glass-strong overflow-hidden rounded-4xl shadow-glow">
              {/* top bar */}
              <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="ml-3 text-xs text-gray-dim">app.fordex.io/dashboard</span>
                </div>
                <div className="flex items-center gap-3 text-gray-soft">
                  <Search className="h-4 w-4" />
                  <Bell className="h-4 w-4" />
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-primary to-primary-bright" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
                {/* sidebar */}
                <div className="hidden border-r border-white/[0.06] p-5 md:block">
                  <nav className="flex flex-col gap-1">
                    {NAV.map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm transition-colors ${
                          item.active
                            ? "bg-primary/15 text-white"
                            : "text-gray-soft hover:text-white"
                        }`}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </div>
                    ))}
                  </nav>

                  <div className="mt-8 rounded-2xl border border-primary-bright/20 bg-primary/10 p-4">
                    <Zap className="h-4 w-4 text-primary-bright" />
                    <p className="mt-2 text-xs leading-relaxed text-gray-soft">
                      12 procesos automatizados esta semana
                    </p>
                  </div>
                </div>

                {/* main panel */}
                <div className="p-6 sm:p-8">
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">Resumen operativo</h3>
                      <p className="text-sm text-gray-soft">Actualizado hace 2 minutos</p>
                    </div>
                    <div className="flex gap-2">
                      {["Semana", "Mes", "Trimestre"].map((t, i) => (
                        <span
                          key={t}
                          className={`rounded-full px-3 py-1.5 text-xs ${
                            i === 1
                              ? "bg-primary text-white"
                              : "border border-white/10 text-gray-soft"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* KPI cards */}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                      { label: "Procesos activos", value: "128" },
                      { label: "Tiempo ahorrado", value: "312h" },
                      { label: "Precisión IA", value: "99.4%" },
                      { label: "Uptime", value: "99.98%" },
                    ].map((kpi) => (
                      <div
                        key={kpi.label}
                        className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"
                      >
                        <p className="text-xl font-semibold text-white">{kpi.value}</p>
                        <p className="mt-1 text-[11px] text-gray-soft">{kpi.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* main chart */}
                  <div className="mt-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm text-gray-soft">Rendimiento de plataforma</span>
                      <span className="text-xs text-primary-bright">+18% vs. periodo anterior</span>
                    </div>
                    <div className="flex h-24 items-end gap-1.5 sm:h-32">
                      {bigBars.map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.04, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className={`w-full rounded-t-sm ${
                            i === bigBars.length - 3 ? "bg-primary-bright" : "bg-primary/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* table */}
                  <div className="mt-4 overflow-hidden rounded-2xl border border-white/[0.06]">
                    {TABLE_ROWS.map((row, i) => (
                      <div
                        key={row.name}
                        className={`flex items-center justify-between px-5 py-3.5 text-sm ${
                          i !== TABLE_ROWS.length - 1 ? "border-b border-white/[0.05]" : ""
                        }`}
                      >
                        <span className="text-white">{row.name}</span>
                        <div className="flex items-center gap-4">
                          <span
                            className={`hidden rounded-full px-2.5 py-1 text-[11px] sm:inline ${
                              row.status === "Automatizado"
                                ? "bg-primary/15 text-primary-bright"
                                : "bg-white/[0.06] text-gray-soft"
                            }`}
                          >
                            {row.status}
                          </span>
                          <span className="text-gray-soft">{row.value}</span>
                          <ChevronRight className="h-4 w-4 text-gray-dim" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
