"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Moon,
  ShieldCheck,
  RefreshCw,
  BellRing,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const NAV = [
  { id: "overview", icon: LayoutGrid, label: "Overview" },
  { id: "analitica", icon: BarChart3, label: "Analítica" },
  { id: "procesos", icon: Layers, label: "Procesos" },
  { id: "equipo", icon: Users, label: "Equipo" },
  { id: "configuracion", icon: Settings, label: "Configuración" },
] as const;

type NavId = (typeof NAV)[number]["id"];

const HEADERS: Record<NavId, { title: string; subtitle: string }> = {
  overview: { title: "Resumen operativo", subtitle: "Actualizado hace 2 minutos" },
  analitica: { title: "Analítica de rendimiento", subtitle: "Tendencias y proyecciones en tiempo real" },
  procesos: { title: "Procesos automatizados", subtitle: "Estado y automatización por proceso" },
  equipo: { title: "Actividad del equipo", subtitle: "Quién está trabajando en qué, ahora mismo" },
  configuracion: { title: "Configuración del sistema", subtitle: "Ajustes y preferencias de la plataforma" },
};

const PERIODS = {
  Semana: {
    bars: [45, 70, 55, 85, 60, 95, 72, 88, 65, 100, 78, 92],
    trend: "+18% vs. periodo anterior",
    kpis: [
      { label: "Procesos activos", value: "128" },
      { label: "Tiempo ahorrado", value: "312h" },
      { label: "Precisión IA", value: "99.4%" },
      { label: "Uptime", value: "99.98%" },
    ],
  },
  Mes: {
    bars: [60, 72, 58, 90, 68, 84, 76, 95, 70, 88, 82, 97],
    trend: "+24% vs. periodo anterior",
    kpis: [
      { label: "Procesos activos", value: "134" },
      { label: "Tiempo ahorrado", value: "1,240h" },
      { label: "Precisión IA", value: "99.5%" },
      { label: "Uptime", value: "99.97%" },
    ],
  },
  Trimestre: {
    bars: [50, 65, 80, 72, 88, 95, 78, 90, 85, 92, 89, 100],
    trend: "+31% vs. periodo anterior",
    kpis: [
      { label: "Procesos activos", value: "141" },
      { label: "Tiempo ahorrado", value: "3,680h" },
      { label: "Precisión IA", value: "99.6%" },
      { label: "Uptime", value: "99.99%" },
    ],
  },
} as const;

type Period = keyof typeof PERIODS;

const TABLE_ROWS = [
  { name: "Onboarding de clientes", status: "Automatizado", value: "98%" },
  { name: "Conciliación de pagos", status: "Automatizado", value: "94%" },
  { name: "Reportes financieros", status: "En optimización", value: "76%" },
  { name: "Soporte nivel 1", status: "Automatizado", value: "99%" },
];

const TEAM = [
  { initials: "AR", role: "Arquitectura", task: "Diseñando el nuevo módulo de reportes", status: "En línea", color: "bg-primary" },
  { initials: "BE", role: "Backend", task: "Optimizando la API de conciliación", status: "En línea", color: "bg-primary-bright" },
  { initials: "FE", role: "Frontend", task: "Puliendo el dashboard de analítica", status: "En reunión", color: "bg-purple-500" },
  { initials: "QA", role: "QA & Delivery", task: "Validando el release de esta semana", status: "En línea", color: "bg-emerald-500" },
];

const SETTINGS = [
  { icon: BellRing, label: "Notificaciones push", desc: "Alertas de procesos críticos en tiempo real", on: true },
  { icon: Moon, label: "Modo oscuro", desc: "Interfaz optimizada para uso prolongado", on: true },
  { icon: ShieldCheck, label: "Autenticación de dos factores", desc: "Capa extra de seguridad para tu equipo", on: true },
  { icon: RefreshCw, label: "Sincronización automática", desc: "Cada cambio se refleja al instante en todos lados", on: false },
];

function Toggle({ on }: { on: boolean }) {
  return (
    <span
      className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${
        on ? "bg-primary" : "bg-white/10"
      }`}
    >
      <motion.span
        animate={{ x: on ? 18 : 3 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="h-3.5 w-3.5 rounded-full bg-white"
      />
    </span>
  );
}

export function ProductShowcase() {
  const [nav, setNav] = useState<NavId>("overview");
  const [period, setPeriod] = useState<Period>("Mes");
  const data = PERIODS[period];
  const header = HEADERS[nav];

  return (
    <section className="relative py-28 sm:py-36">
      <div className="container">
        <SectionHeading
          eyebrow="El producto"
          title="Un panel de control para toda tu operación"
          description="Así se ve FORDEX en producción: visibilidad completa, datos en tiempo real y control total sobre cada proceso automatizado. Explóralo — cada pestaña responde de verdad."
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
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setNav(item.id)}
                        className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-left text-sm transition-colors ${
                          nav === item.id
                            ? "bg-primary/15 text-white"
                            : "text-gray-soft hover:bg-white/[0.03] hover:text-white"
                        }`}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </button>
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
                <div className="min-h-[520px] p-6 sm:p-8">
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={nav}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}
                      >
                        <h3 className="text-xl font-semibold text-white">{header.title}</h3>
                        <p className="text-sm text-gray-soft">{header.subtitle}</p>
                      </motion.div>
                    </AnimatePresence>

                    {(nav === "overview" || nav === "analitica") && (
                      <div className="flex gap-2">
                        {(Object.keys(PERIODS) as Period[]).map((p) => (
                          <button
                            key={p}
                            type="button"
                            onClick={() => setPeriod(p)}
                            className={`rounded-full px-3 py-1.5 text-xs transition-colors ${
                              period === p
                                ? "bg-primary text-white"
                                : "border border-white/10 text-gray-soft hover:border-white/20 hover:text-white"
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <AnimatePresence mode="wait">
                    {(nav === "overview" || nav === "analitica") && (
                      <motion.div
                        key={`data-${nav}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        {/* KPI cards */}
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                          {data.kpis.map((kpi) => (
                            <div
                              key={kpi.label}
                              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"
                            >
                              <p className="text-xl font-semibold text-white">
                                <AnimatePresence mode="wait">
                                  <motion.span
                                    key={kpi.value}
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 4 }}
                                    transition={{ duration: 0.2 }}
                                    className="inline-block"
                                  >
                                    {kpi.value}
                                  </motion.span>
                                </AnimatePresence>
                              </p>
                              <p className="mt-1 text-[11px] text-gray-soft">{kpi.label}</p>
                            </div>
                          ))}
                        </div>

                        {/* main chart */}
                        <div className="mt-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                          <div className="mb-4 flex items-center justify-between">
                            <span className="text-sm text-gray-soft">Rendimiento de plataforma</span>
                            <span className="text-xs text-primary-bright">{data.trend}</span>
                          </div>
                          <div className={`flex items-end gap-1.5 ${nav === "analitica" ? "h-40 sm:h-48" : "h-24 sm:h-32"}`}>
                            {data.bars.map((h, i) => (
                              <motion.div
                                key={`${period}-${i}`}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ delay: i * 0.03, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className={`w-full rounded-t-sm ${
                                  i === data.bars.length - 3 ? "bg-primary-bright" : "bg-primary/30"
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        {nav === "overview" && (
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
                        )}
                      </motion.div>
                    )}

                    {nav === "procesos" && (
                      <motion.div
                        key="data-procesos"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                          <div className="rounded-2xl border border-primary-bright/20 bg-primary/10 p-4">
                            <p className="text-xl font-semibold text-white">12</p>
                            <p className="mt-1 text-[11px] text-gray-soft">Automatizados esta semana</p>
                          </div>
                          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                            <p className="text-xl font-semibold text-white">3</p>
                            <p className="mt-1 text-[11px] text-gray-soft">En optimización</p>
                          </div>
                          <div className="col-span-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:col-span-1">
                            <p className="text-xl font-semibold text-white">0</p>
                            <p className="mt-1 text-[11px] text-gray-soft">Incidencias abiertas</p>
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
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
                                  className={`rounded-full px-2.5 py-1 text-[11px] ${
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
                      </motion.div>
                    )}

                    {nav === "equipo" && (
                      <motion.div
                        key="data-equipo"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-col gap-3"
                      >
                        {TEAM.map((member) => (
                          <div
                            key={member.role}
                            className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"
                          >
                            <span
                              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white ${member.color}`}
                            >
                              {member.initials}
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium text-white">{member.role}</p>
                              <p className="truncate text-xs text-gray-soft">{member.task}</p>
                            </div>
                            <span className="flex shrink-0 items-center gap-1.5 text-[11px] text-gray-dim">
                              <span
                                className={`h-1.5 w-1.5 rounded-full ${
                                  member.status === "En línea" ? "bg-emerald-400" : "bg-amber-400"
                                }`}
                              />
                              {member.status}
                            </span>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {nav === "configuracion" && (
                      <motion.div
                        key="data-configuracion"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex flex-col gap-3"
                      >
                        {SETTINGS.map((setting) => (
                          <div
                            key={setting.label}
                            className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"
                          >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-primary-bright">
                              <setting.icon className="h-4 w-4" />
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium text-white">{setting.label}</p>
                              <p className="text-xs text-gray-soft">{setting.desc}</p>
                            </div>
                            <Toggle on={setting.on} />
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
