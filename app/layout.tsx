import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from './components/Navigation'
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CITADEL - Votre Rempart Contre Les Cybermenaces",
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

        {/* Footer global */}
        <footer className="bg-slate-900 text-blue-100 py-6 mt-1">
          <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm">
            <p>© {new Date().getFullYear()} CITADEL Cybersécurité. Tous droits réservés.</p>
            <div className="flex gap-4">
              <Link href="/mentions-legales" className="hover:text-white transition">
                Mentions légales
              </Link>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
