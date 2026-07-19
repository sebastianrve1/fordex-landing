"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { GlowButton } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Soluciones", href: "#como-trabajamos" },
  { label: "Casos de uso", href: "#casos-de-uso" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500",
            scrolled
              ? "glass shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)]"
              : "border border-transparent bg-transparent"
          )}
        >
          <a href="#" aria-label="FORDEX — inicio">
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative rounded-full px-4 py-2 text-sm text-gray-soft transition-colors duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <GlowButton href="#contacto" icon={false} className="px-5 py-2.5 text-[13px]">
              Agendar reunión
            </GlowButton>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
            aria-label="Abrir menú"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="container overflow-hidden lg:hidden"
          >
            <div className="glass mt-2 flex flex-col gap-1 rounded-2xl p-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm text-gray-soft transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <GlowButton href="#contacto" icon={false} className="mt-2 justify-center">
                Agendar reunión
              </GlowButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
