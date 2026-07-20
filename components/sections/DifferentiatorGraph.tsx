"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";
import { Cloud, Brain, ShieldCheck, Database, Code2, Workflow, Cable, Building2 } from "lucide-react";
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
const ABSORB_RADIUS = 72;
const MAGNET_RADIUS = 150;

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
  onAbsorbed,
  onMagnet,
}: {
  node: (typeof NODES)[number];
  index: number;
  onAbsorbed: () => void;
  onMagnet: (near: boolean) => void;
}) {
  const p = polar(node.angle, RADIUS);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(0);
  const [absorbed, setAbsorbed] = useState(false);

  useEffect(() => {
    const controls = animate(scale, 1, {
      duration: 0.5,
      delay: node.delay,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDrag = useCallback(() => {
    const dist = Math.hypot(p.x + x.get(), p.y + y.get());
    onMagnet(dist < MAGNET_RADIUS);
  }, [p.x, p.y, x, y, onMagnet]);

  const handleDragEnd = useCallback(() => {
    const dist = Math.hypot(p.x + x.get(), p.y + y.get());
    onMagnet(false);
    if (dist < ABSORB_RADIUS) {
      animate(x, -p.x, { type: "spring", stiffness: 320, damping: 24 });
      animate(y, -p.y, { type: "spring", stiffness: 320, damping: 24 });
      animate(scale, 0, { delay: 0.18, duration: 0.25, ease: "easeIn" });
      setAbsorbed(true);
      setTimeout(onAbsorbed, 260);
    } else {
      animate(x, 0, { type: "spring", stiffness: 380, damping: 22 });
      animate(y, 0, { type: "spring", stiffness: 380, damping: 22 });
    }
  }, [p.x, p.y, x, y, scale, onAbsorbed, onMagnet]);

  return (
    <div
      className="absolute left-1/2 top-1/2 z-10"
      style={{ transform: `translate(calc(-50% + ${p.x}px), calc(-50% + ${p.y}px))` }}
    >
      <motion.div
        drag={!absorbed}
        dragElastic={0.4}
        dragMomentum={false}
        style={{ x, y, scale }}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        whileDrag={{ scale: 1.18, zIndex: 30 }}
        whileHover={absorbed ? undefined : { scale: 1.08 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: absorbed ? 0 : 1 }}
        transition={{ duration: 0.25 }}
        className={absorbed ? "pointer-events-none" : "cursor-grab active:cursor-grabbing"}
      >
        <motion.div
          animate={absorbed ? {} : { y: [0, -8, 0] }}
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

function BigBangBurst() {
  const particles = useRef(
    Array.from({ length: 22 }, (_, i) => {
      const angle = (i / 22) * Math.PI * 2 + Math.random() * 0.3;
      const dist = 140 + Math.random() * 140;
      return { id: i, x: Math.cos(angle) * dist, y: Math.sin(angle) * dist };
    })
  ).current;

  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 5, opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-bright"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0.9 }}
        animate={{ scale: 3.2, opacity: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-md"
      />
      {particles.map((pt) => (
        <motion.span
          key={pt.id}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{ x: pt.x, y: pt.y, opacity: 0, scale: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-bright"
        />
      ))}
    </>
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

  const [absorbedCount, setAbsorbedCount] = useState(0);
  const [magnet, setMagnet] = useState(false);
  const [exploding, setExploding] = useState(false);
  const [fused, setFused] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    if (absorbedCount === NODES.length) {
      setExploding(true);
      const t = setTimeout(() => {
        setExploding(false);
        setFused(true);
      }, 900);
      return () => clearTimeout(t);
    }
  }, [absorbedCount]);

  function handleReset() {
    setAbsorbedCount(0);
    setExploding(false);
    setFused(false);
    setMagnet(false);
    setResetKey((k) => k + 1);
  }

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
      className="relative h-[480px] w-full sm:h-[560px] lg:h-[620px]"
    >
      {/* atmosphere: starfield + glow, feathered so it dissolves into the page background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(ellipse 50% 50% at 50% 50%, black 25%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 50% 50% at 50% 50%, black 25%, transparent 80%)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(15,23,41,0.9),transparent_75%)]" />

        <motion.div style={{ x: starsX, y: starsY }} className="absolute -inset-6">
          {STARS.map((s) => (
            <motion.span
              key={s.id}
              className="absolute rounded-full bg-white"
              style={{ top: `${s.top}%`, left: `${s.left}%`, width: s.size, height: s.size }}
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

        {/* outer wrapper owns the -50%/-50% centering transform via plain CSS
            classes so it's never overridden by the inner motion.div's own
            x/y-driven inline transform (the same Framer Motion gotcha fixed
            elsewhere in this component) */}
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2">
          <motion.div
            style={{ x: glowX, y: glowY }}
            className="h-full w-full rounded-full bg-primary/15 blur-[100px]"
          />
        </div>
      </div>

      {/* orbit rings + graph, centered */}
      <div className="absolute left-1/2 top-1/2 flex h-0 w-0 items-center justify-center">
        <div className="absolute h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />
        <div className="absolute h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />

        <svg className="absolute h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 overflow-visible">
          <defs>
            <radialGradient id="tetherFade" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
            </radialGradient>
          </defs>
          {NODES.map((node, i) => {
            const p = polar(node.angle, RADIUS);
            return (
              <motion.line
                key={i}
                x1="220"
                y1="220"
                x2={220 + p.x}
                y2={220 + p.y}
                stroke="url(#tetherFade)"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: node.delay, duration: 0.6 }}
              />
            );
          })}
        </svg>

        {/* big bang burst — an independent sibling anchored with the exact same
            left-1/2/top-1/2/-translate-50% pattern as the core node below, so its
            origin is pixel-identical to the core's center regardless of the core's
            own scale animation or nested box sizing */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <AnimatePresence>{exploding && <BigBangBurst />}</AnimatePresence>
        </div>

        {/* connector — a thin animated bridge between the two circles once
            fused, with a traveling pulse suggesting a live, two-way link.
            Outer wrapper is a plain (non-motion) element so its CSS
            -50%/-50% centering is never overridden by the inner scaleX/opacity
            animation's own transform tracking. */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-[5] -translate-x-1/2 -translate-y-1/2">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: fused ? 1 : 0, scaleX: fused ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative h-px w-[68px] bg-gradient-to-r from-primary-bright/70 via-white/60 to-primary-bright/70"
          >
            <motion.span
              animate={{ left: fused ? ["0%", "100%"] : "0%" }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "linear", delay: 0.6 }}
              className="absolute top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-glow-sm"
            />
          </motion.div>
        </div>

        {/* FORDEX Core — outer wrapper is a plain (non-motion) element so its
            CSS -50%/-50% centering transform is never overridden by
            Framer Motion's own transform tracking on the inner scale/x animation */}
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ scale: magnet && !fused ? 1.12 : 1, x: fused ? -90 : 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="relative"
          >
            <motion.span
              animate={{ opacity: magnet && !fused ? 0.55 : 0.28 }}
              className="absolute inset-0 -m-4 animate-pulse-glow rounded-full bg-primary-bright/20 blur-xl"
            />

            <div className="glass-strong relative flex h-28 w-28 flex-col items-center justify-center gap-1.5 rounded-full text-center shadow-glow">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: exploding ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-1"
              >
                <Isotipo variant="gradient" className="h-7 w-7" />
                <span className="text-[10px] font-medium leading-tight text-white">
                  FORDEX
                  <br />
                  Core
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Tu Empresa — a second, independent world that appears once fused,
            mirrored on the opposite side of the connector from Core */}
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            initial={{ x: 0, scale: 0.5, opacity: 0 }}
            animate={{
              x: fused ? 90 : 0,
              scale: fused ? 1 : 0.5,
              opacity: fused ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 22,
              delay: fused ? 0.12 : 0,
            }}
            className="relative"
          >
            <span className="absolute inset-0 -m-4 rounded-full bg-white/10 blur-xl" />

            <div className="glass-strong relative flex h-28 w-28 flex-col items-center justify-center gap-1.5 rounded-full text-center shadow-glow">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white">
                <Building2 className="h-4 w-4" />
              </span>
              <span className="text-[10px] font-medium leading-tight text-white">
                TU
                <br />
                EMPRESA
              </span>
            </div>
          </motion.div>
        </div>

        {/* satellite nodes — draggable, absorbed into the core */}
        <div key={resetKey}>
          {NODES.map((node, i) => (
            <SatelliteNode
              key={node.label}
              node={node}
              index={i}
              onAbsorbed={() => setAbsorbedCount((c) => c + 1)}
              onMagnet={setMagnet}
            />
          ))}
        </div>
      </div>

      {/* hint / status */}
      <div className="pointer-events-none absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3">
        <div className="rounded-full border border-white/[0.08] bg-black/30 px-3 py-1.5 text-[11px] text-gray-dim backdrop-blur-sm">
          {fused
            ? "Dos mundos, una misma operación conectada."
            : "Arrastra los nodos hacia el centro para fusionarlos"}
        </div>
        {fused && (
          <button
            onClick={handleReset}
            className="pointer-events-auto rounded-full border border-white/[0.08] bg-black/30 px-3 py-1.5 text-[11px] text-primary-bright backdrop-blur-sm transition-colors hover:border-primary-bright/40"
          >
            Reiniciar
          </button>
        )}
      </div>
    </div>
  );
}
