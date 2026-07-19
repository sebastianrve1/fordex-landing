export function GridBackground({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 bg-grid-pattern bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)] ${className}`}
    />
  );
}

export function GlowOrb({
  className = "",
  color = "primary",
}: {
  className?: string;
  color?: "primary" | "bright";
}) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full blur-[120px] ${
        color === "primary" ? "bg-primary/25" : "bg-primary-bright/20"
      } ${className}`}
    />
  );
}
