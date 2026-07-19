"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Mail,
  Sheet,
  Bot,
  Database,
  LayoutDashboard,
  CheckCircle2,
  TrendingUp,
  Zap,
  Server,
} from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";

const INPUT_NODES = [
  { icon: Sheet, label: "Hojas de cálculo", top: "4%", left: "10%", delay: 0 },
  { icon: Mail, label: "Correos", top: "30%", left: "-4%", delay: 0.6 },
  { icon: Server, label: "ERP legado", top: "58%", left: "-2%", delay: 1.2 },
  { icon: FileText, label: "Documentos", top: "82%", left: "14%", delay: 1.8 },
];

const FLOW_PATHS = [
  "M14,6 C34,10 46,22 58,34",
  "M-2,32 C22,30 44,32 58,40",
  "M0,60 C24,56 44,50 58,44",
  "M16,84 C34,72 46,58 58,48",
];

const bars = [38, 62, 45, 80, 58, 92, 70];

export function HeroDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-[600px] pl-6 sm:pl-10">
      {/* ambient glow */}
      <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-primary/20 blur-[100px]" />
      <div className="absolute -inset-x-10 top-1/3 -z-10 h-64 rounded-full bg-primary-bright/10 blur-[90px]" />

      {/* convergence field: scattered manual processes flowing into the platform */}
      <div className="pointer-events-none absolute -left-4 -top-4 z-0 hidden h-full w-full sm:block">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full overflow-visible opacity-70"
        >
          {FLOW_PATHS.map((d, i) => (
            <g key={i}>
              <path
                d={d}
                fill="none"
                stroke="#2563EB"
                strokeWidth="0.35"
                strokeDasharray="1.2 1.6"
                opacity="0.4"
                vectorEffect="non-scaling-stroke"
              />
              <motion.circle
                r="0.8"
                fill="#60A5FA"
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "linear",
                }}
                style={{ offsetPath: `path('${d}')` } as React.CSSProperties}
              />
            </g>
          ))}
        </svg>

        {INPUT_NODES.map((node, i) => (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + node.delay * 0.15, duration: 0.6 }}
            className="absolute z-10"
            style={{ top: node.top, left: node.left }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5 + i * 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: node.delay,
              }}
              className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-surface2/80 px-2.5 py-1.5 shadow-card backdrop-blur-sm"
            >
              <node.icon className="h-3 w-3 text-gray-dim" />
              <span className="hidden whitespace-nowrap text-[10px] text-gray-dim md:inline">
                {node.label}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* floating badge — bottom right: automated success */}
      <motion.div
        initial={{ opacity: 0, y: 10, x: 10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 right-0 z-20 hidden -translate-x-[2%] translate-y-[55%] sm:block"
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="glass flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-card"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary-bright">
            <CheckCircle2 className="h-4 w-4" />
          </div>
          <div className="leading-tight">
            <p className="text-xs font-medium text-white">Proceso automatizado</p>
            <p className="text-[11px] text-gray-soft">
              -<CountUp value={80} suffix="%" /> tiempo operativo
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* main dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="glass-strong relative z-10 overflow-hidden rounded-3xl p-5 shadow-glow sm:p-6"
      >
        {/* animated top accent line */}
        <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
          <motion.div
            className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary-bright to-transparent"
            animate={{ x: ["-100%", "400%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* window controls */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-bright opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-bright" />
            </span>
            <span className="text-[10px] font-medium tracking-wide text-gray-soft">
              FORDEX OS — EN VIVO
            </span>
          </div>
        </div>

        {/* process flow: manual -> AI -> system -> dashboard */}
        <div className="mb-2 flex items-center justify-between">
          {[
            { icon: FileText, label: "Entrada", active: false },
            { icon: Bot, label: "IA", active: true },
            { icon: Database, label: "Datos", active: true },
            { icon: LayoutDashboard, label: "Panel", active: true },
          ].map((step, i, arr) => (
            <div key={i} className="flex flex-1 items-center last:flex-none">
              <div className="flex flex-col items-center gap-1.5">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                    step.active
                      ? "border-primary-bright/40 bg-primary/15 text-primary-bright shadow-[0_0_20px_-4px_rgba(59,130,246,0.6)]"
                      : "border-white/10 bg-white/5 text-gray-soft"
                  }`}
                >
                  <step.icon className="h-4 w-4" />
                </motion.div>
                <span className="text-[9px] uppercase tracking-wide text-gray-dim">
                  {step.label}
                </span>
              </div>
              {i < arr.length - 1 && (
                <svg
                  width="100%"
                  height="8"
                  className="mx-1 mb-4 min-w-[16px] flex-1 overflow-visible"
                >
                  <line
                    x1="0"
                    y1="4"
                    x2="100%"
                    y2="4"
                    stroke="#2563EB"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.5"
                  />
                  <motion.circle
                    cy="4"
                    r="2"
                    fill="#3B82F6"
                    animate={{ cx: ["0%", "100%"] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "linear",
                    }}
                  />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* charts row */}
        <div className="mb-5 mt-4 grid grid-cols-5 gap-3">
          <div className="col-span-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[11px] text-gray-soft">Eficiencia operativa</span>
              <span className="flex items-center gap-1 text-[11px] font-medium text-primary-bright">
                <TrendingUp className="h-3 w-3" /> +32%
              </span>
            </div>
            <svg viewBox="0 0 220 60" className="w-full overflow-visible">
              <defs>
                <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0,45 C20,40 30,20 50,25 C70,30 80,10 100,15 C120,20 130,35 150,25 C170,15 180,8 200,12 L220,10"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.path
                d="M0,45 C20,40 30,20 50,25 C70,30 80,10 100,15 C120,20 130,35 150,25 C170,15 180,8 200,12 L220,10 V60 H0 Z"
                fill="url(#areaFill)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </svg>
          </div>

          <div className="col-span-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
            <span className="mb-3 block text-[11px] text-gray-soft">Tareas/semana</span>
            <div className="flex h-[52px] items-end justify-between gap-1">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.6 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-full rounded-sm ${
                    i === bars.length - 2 ? "bg-primary-bright" : "bg-primary/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* KPI strip */}
        <div className="grid grid-cols-3 gap-3 border-t border-white/[0.06] pt-4">
          <div>
            <p className="text-lg font-semibold text-white">
              <CountUp value={12} suffix="x" />
            </p>
            <p className="text-[11px] text-gray-soft">Más rápido</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-white">
              <CountUp value={99} suffix=".9%" />
            </p>
            <p className="text-[11px] text-gray-soft">Precisión</p>
          </div>
          <div>
            <p className="flex items-center gap-1 text-lg font-semibold text-white">
              <Zap className="h-3.5 w-3.5 text-primary-bright" />
              <CountUp value={24} suffix="/7" />
            </p>
            <p className="text-[11px] text-gray-soft">Automatizado</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
