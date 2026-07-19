"use client";

import { motion } from "framer-motion";
import { Cloud, Brain, ShieldCheck, Database, Code2 } from "lucide-react";
import { Isotipo } from "@/components/ui/Logo";

const NODES = [
  { icon: Cloud, label: "Cloud", angle: -90, delay: 0 },
  { icon: Brain, label: "IA", angle: -18, delay: 0.1 },
  { icon: ShieldCheck, label: "Seguridad", angle: 54, delay: 0.2 },
  { icon: Database, label: "Datos", angle: 126, delay: 0.3 },
  { icon: Code2, label: "APIs", angle: 198, delay: 0.4 },
];

const RADIUS = 118;

function polar(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: radius * Math.cos(rad),
    y: radius * Math.sin(rad),
  };
}

export function DifferentiatorGraph() {
  return (
    <div className="relative mx-auto flex h-[420px] w-full max-w-[440px] items-center justify-center">
      <div className="absolute h-[340px] w-[340px] rounded-full border border-white/[0.05]" />
      <div className="absolute h-[240px] w-[240px] rounded-full border border-white/[0.06]" />
      <div className="absolute h-[340px] w-[340px] rounded-full bg-primary/10 blur-[80px]" />

      <svg className="absolute h-[340px] w-[340px] overflow-visible">
        {NODES.map((node, i) => {
          const p = polar(node.angle, RADIUS);
          return (
            <motion.line
              key={i}
              x1="170"
              y1="170"
              x2={170 + p.x}
              y2={170 + p.y}
              stroke="#2563EB"
              strokeWidth="1"
              strokeDasharray="3 4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ delay: node.delay, duration: 0.6 }}
            />
          );
        })}
      </svg>

      {/* center node */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-strong relative z-10 flex h-24 w-24 flex-col items-center justify-center gap-1 rounded-full text-center shadow-glow"
      >
        <Isotipo variant="gradient" className="h-6 w-6" />
        <span className="text-[10px] font-medium leading-tight text-white">
          FORDEX
          <br />
          Core
        </span>
      </motion.div>

      {/* satellite nodes */}
      {NODES.map((node, i) => {
        const p = polar(node.angle, RADIUS);
        return (
          <motion.div
            key={node.label}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: node.delay + 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              transform: `translate(calc(-50% + ${p.x}px), calc(-50% + ${p.y}px))`,
            }}
            className="absolute left-1/2 top-1/2 z-10"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
              className="glass flex flex-col items-center gap-1.5 rounded-2xl px-3.5 py-3 shadow-card"
            >
              <node.icon className="h-4 w-4 text-primary-bright" />
              <span className="text-[10px] text-gray-soft">{node.label}</span>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
