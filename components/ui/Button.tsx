"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function GlowButton({
  children,
  href = "#",
  icon = true,
  className,
}: {
  children: ReactNode;
  href?: string;
  icon?: boolean;
  className?: string;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-white shadow-glow-sm transition-shadow duration-300 hover:shadow-glow",
        className
      )}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative">{children}</span>
      {icon && (
        <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </motion.a>
  );
}

export function GhostButton({
  children,
  href = "#",
  icon = false,
  className,
}: {
  children: ReactNode;
  href?: string;
  icon?: boolean;
  className?: string;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.06]",
        className
      )}
    >
      <span>{children}</span>
      {icon && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </motion.a>
  );
}
