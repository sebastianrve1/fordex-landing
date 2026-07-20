import { Logo, Isotipo } from "@/components/ui/Logo";
import { Linkedin, Instagram } from "lucide-react";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: XIcon, label: "X" },
  { Icon: Instagram, label: "Instagram" },
];

const COLUMNS = [
  {
    title: "Servicios",
    links: ["Desarrollo de software", "Automatización", "Inteligencia Artificial", "Integraciones"],
  },
  {
    title: "Empresa",
    links: ["Nosotros", "Casos de uso", "Blog", "Contacto"],
  },
  {
    title: "Legal",
    links: ["Privacidad", "Términos", "Seguridad"],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] py-16">
      <Isotipo
        variant="white"
        className="pointer-events-none absolute -bottom-24 -right-16 h-[380px] w-[380px] opacity-[0.035] sm:-bottom-32 sm:-right-20 sm:h-[520px] sm:w-[520px]"
      />
      <div className="container relative">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-gray-soft">
              Transformamos procesos complejos en plataformas inteligentes.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-soft transition-colors hover:border-primary-bright/40 hover:text-primary-bright"
                  aria-label={`FORDEX en ${label}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-medium text-white">{col.title}</h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-gray-soft transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-gray-dim">
            © {new Date().getFullYear()} FORDEX. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-dim">
            Precisión, progreso y confianza.
          </p>
        </div>
      </div>
    </footer>
  );
}
