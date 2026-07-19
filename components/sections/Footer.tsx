import { Logo } from "@/components/ui/Logo";
import { Linkedin, Twitter, Github } from "lucide-react";

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
    <footer className="relative border-t border-white/[0.06] py-16">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-gray-soft">
              Transformamos procesos complejos en plataformas inteligentes.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-soft transition-colors hover:border-primary-bright/40 hover:text-primary-bright"
                  aria-label="Red social de FORDEX"
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
