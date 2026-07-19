import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FORDEX — Transformamos procesos complejos en plataformas inteligentes",
  description:
    "Desarrollamos software empresarial, automatizaciones e inteligencia artificial para empresas que quieren operar mejor, tomar decisiones con datos y crecer sin aumentar su carga operativa.",
  metadataBase: new URL("https://fordex.com"),
  openGraph: {
    title: "FORDEX — Ingeniería de software empresarial",
    description:
      "Transformamos procesos complejos en plataformas inteligentes.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <body className="relative bg-background font-sans text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
