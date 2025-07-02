import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CITADEL - Votre Bouclier Numérique de Confiance",
  description: "Solutions de cybersécurité sur mesure pour protéger votre entreprise contre les cybermenaces les plus sophistiquées.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-white text-slate-900`}>
        <Navigation />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
