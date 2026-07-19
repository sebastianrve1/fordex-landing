"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const barsData = [30, 55, 40, 70, 50, 85, 60];

export function MiniLineChart() {
  return (
    <svg viewBox="0 0 160 50" className="w-full overflow-visible">
      <defs>
        <linearGradient id="miniLine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0,35 C15,30 25,15 40,20 C55,25 65,8 80,12 C95,16 105,30 120,22 C135,14 145,10 160,15"
        fill="none"
        stroke="#3B82F6"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
      <path
        d="M0,35 C15,30 25,15 40,20 C55,25 65,8 80,12 C95,16 105,30 120,22 C135,14 145,10 160,15 V50 H0 Z"
        fill="url(#miniLine)"
      />
    </svg>
  );
}

export function MiniBars() {
  return (
    <div className="flex h-[50px] w-full items-end gap-1.5">
      {barsData.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full rounded-sm ${i === 5 ? "bg-primary-bright" : "bg-primary/35"}`}
        />
      ))}
    </div>
  );
}

export function MiniRadial({ value = 72 }: { value?: number }) {
  const circumference = 2 * Math.PI * 22;
  const offset = circumference - (value / 100) * circumference;
  return (
    <div className="flex h-[64px] w-full items-center gap-4">
      <svg width="52" height="52" viewBox="0 0 52 52" className="shrink-0">
        <circle cx="26" cy="26" r="22" fill="none" stroke="#1B2436" strokeWidth="4.5" />
        <motion.circle
          cx="26"
          cy="26"
          r="22"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          transform="rotate(-90 26 26)"
        />
        <text
          x="26"
          y="30"
          textAnchor="middle"
          fontSize="12"
          fill="#ffffff"
          fontWeight="600"
        >
          {value}%
        </text>
      </svg>
      <div className="min-w-0">
        <p className="truncate text-xs text-gray-soft">Conversión de campañas</p>
        <p className="mt-1 flex items-center gap-1 text-sm font-medium text-primary-bright">
          <TrendingUp className="h-3.5 w-3.5" />
          +8% vs. mes anterior
        </p>
      </div>
    </div>
  );
}

export function MiniProgress() {
  const rows = [80, 55, 68];
  return (
    <div className="flex h-[50px] w-full flex-col justify-center gap-2.5">
      {rows.map((w, i) => (
        <div key={i} className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${w}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="h-full rounded-full bg-gradient-to-r from-primary to-primary-bright"
          />
        </div>
      ))}
    </div>
  );
}

export function MiniDots() {
  const points = [
    [10, 30], [30, 15], [50, 35], [70, 10], [90, 25], [110, 18], [130, 32], [150, 12],
  ];
  return (
    <svg viewBox="0 0 160 50" className="w-full overflow-visible">
      <polyline
        points={points.map((p) => p.join(",")).join(" ")}
        fill="none"
        stroke="#1B2436"
        strokeWidth="1.5"
      />
      {points.map((p, i) => (
        <motion.circle
          key={i}
          cx={p[0]}
          cy={p[1]}
          r="3.5"
          fill={i % 3 === 0 ? "#3B82F6" : "#2563EB"}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, duration: 0.4 }}
        />
      ))}
    </svg>
  );
}

export function MiniStats() {
  const stats = [
    { label: "OEE", value: "94%", bar: 94 },
    { label: "Uptime", value: "99.8%", bar: 99 },
    { label: "Producción", value: "+18%", bar: 78 },
  ];
  return (
    <div className="flex h-[64px] w-full flex-col justify-center gap-2">
      {stats.map((s, i) => (
        <div key={s.label} className="flex items-center gap-2.5">
          <span className="w-16 shrink-0 text-[10px] text-gray-soft">{s.label}</span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${s.bar}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-primary to-primary-bright"
            />
          </div>
          <span className="w-11 shrink-0 text-right text-[11px] font-medium text-white">
            {s.value}
          </span>
        </div>
      ))}
    </div>
  );
}
