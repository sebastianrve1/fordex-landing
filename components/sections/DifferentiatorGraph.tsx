"use client";

import { useMemo, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Cloud, Brain, ShieldCheck, Database, Code2, Workflow, Cable } from "lucide-react";
import { Isotipo } from "@/components/ui/Logo";

const NODES = [
  { icon: Cloud, label: "Cloud", angle: -90, delay: 0 },
  { icon: Brain, label: "IA", angle: -38.5, delay: 0.08 },
  { icon: ShieldCheck, label: "Seguridad", angle: 12.9, delay: 0.16 },
  { icon: Database, label: "Datos", angle: 64.3, delay: 0.24 },
  { icon: Workflow, label: "Automatización", angle: 115.7, delay: 0.32 },
  { icon: Code2, label: "APIs", angle: 167.1, delay: 0.4 },
  { icon: Cable, label: "Integraciones", angle: 218.6, delay: 0.48 },
];

const RADIUS = 190;

function polar(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: radius * Math.cos(rad),
    y: radius * Math.sin(rad),
  };
}

// deterministic pseudo-random star field so it's stable across renders
function makeStars(count: number) {
  let seed = 42;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: rand() * 100,
    left: rand() * 100,
    size: rand() * 1.8 + 0.6,
    delay: rand() * 4,
    duration: rand() * 3 + 2.5,
  }));
}

const STARS = makeStars(70);

function SatelliteNode({
  node,
  index,
}: {
  node: (typeof NODES)[number];
  index: number;
}) {
  const p = polar(node.angle, RADIUS);
  return (
    <div
      className="absolute left-1/2 top-1/2 z-10"
      style={{ transform: `translate(calc(-50% + ${p.x}px), calc(-50% + ${p.y}px))` }}
    >
      <motion.div
        drag
        dragElastic={0.55}
        dragSnapToOrigin
        dragTransition={{ bounceStiffness: 420, bounceDamping: 16 }}
        whileDrag={{ scale: 1.18, zIndex: 30 }}
        whileHover={{ scale: 1.08 }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: node.delay + 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="cursor-grab active:cursor-grabbing"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
          className="glass flex flex-col items-center gap-1.5 rounded-2xl px-3.5 py-3 shadow-card"
        >
          <node.icon className="h-4 w-4 text-primary-bright" />
          <span className="whitespace-nowrap text-[10px] text-gray-soft">{node.label}</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function DifferentiatorGraph() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 20 });
  const smy = useSpring(my, { stiffness: 60, damping: 20 });
  const starsX = useTransform(smx, (v) => v * -14);
  const starsY = useTransform(smy, (v) => v * -14);
  const glowX = useTransform(smx, (v) => v * 22);
  const glowY = useTransform(smy, (v) => v * 22);

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handlePointerLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative h-[480px] w-full overflow-hidden rounded-[2.5rem] border border-white/[0.06] bg-[radial-gradient(circle_at_50%_45%,rgba(15,23,41,0.9),#05070d_75%)] sm:h-[560px] lg:h-[620px]"
    >
      {/* deep space vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_35%,#05070d_92%)]" />

      {/* starfield with subtle parallax */}
      <motion.div
        style={{ x: starsX, y: starsY }}
        className="pointer-events-none absolute -inset-6"
      >
        {STARS.map((s) => (
          <motion.span
            key={s.id}
            className="absolute rounded-full bg-white"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: s.size,
              height: s.size,
            }}
            animate={{ opacity: [0.15, 0.9, 0.15] }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              delay: s.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* ambient glow that drifts with pointer */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[100px]"
      />

      {/* orbit rings + graph, centered */}
      <div className="absolute left-1/2 top-1/2 flex h-0 w-0 items-center justify-center">
        <div className="absolute h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />
        <div className="absolute h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
        <div className="absolute h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-dashed border-white/[0.04]" />

        <svg className="absolute h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 overflow-visible">
          {NODES.map((node, i) => {
            const p = polar(node.angle, RADIUS);
            return (
              <motion.line
                key={i}
                x1="220"
                y1="220"
                x2={220 + p.x}
                y2={220 + p.y}
                stroke="#3B82F6"
                strokeWidth="1"
                strokeDasharray="3 5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.45 }}
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
          className="relative z-10"
        >
          <span className="absolute inset-0 -m-4 animate-pulse-glow rounded-full bg-primary-bright/20 blur-xl" />
          <div className="glass-strong relative flex h-28 w-28 flex-col items-center justify-center gap-1 rounded-full text-center shadow-glow">
            <Isotipo variant="gradient" className="h-7 w-7" />
            <span className="text-[10px] font-medium leading-tight text-white">
              FORDEX
              <br />
              Core
            </span>
          </div>
        </motion.div>

        {/* satellite nodes — draggable */}
        {NODES.map((node, i) => (
          <SatelliteNode key={node.label} node={node} index={i} />
        ))}
      </div>

      {/* hint */}
      <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/[0.08] bg-black/30 px-3 py-1.5 text-[11px] text-gray-dim backdrop-blur-sm">
        Arrastra los nodos — mueve el cursor para explorar
      </div>
    </div>
  );
}
