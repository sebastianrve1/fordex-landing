import { cn } from "@/lib/utils";
import { FadeIn } from "./FadeIn";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium uppercase tracking-widest text-gray-soft",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-primary-bright shadow-[0_0_10px_2px_rgba(59,130,246,0.7)]" />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <FadeIn>
          <Eyebrow>{eyebrow}</Eyebrow>
        </FadeIn>
      )}
      <FadeIn delay={0.08}>
        <h2 className="text-display-md font-semibold text-gradient max-w-3xl">
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.16}>
          <p className="max-w-2xl text-balance text-lg leading-relaxed text-gray-soft">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
