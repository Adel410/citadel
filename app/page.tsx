'use client'

import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              CITADEL
            </h1>

            <h2 className="text-2xl lg:text-3xl font-light mb-8 text-blue-100">
              Votre{' '}
              <span className="text-white bg-blue-600 px-1 py-0.1 rounded-sm">
                rempart
              </span>{' '}
              contre les{' '}
              <span className="text-white bg-blue-600 px-1 py-0.2 rounded-sm">
                cybermenaces
              </span>
            </h2>

            <p className="text-2xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed text-center font-medium">
              CITADEL Cybersécurité accompagne les entreprises et les collectivités dans leur démarche de cybersécurité.
            </p>

            {/* CTA principal */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 border border-white/30"
              >
                Voir nos services
              </Link>

              <Link
                href="/contact?type=audit"
                className="px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Demander un audit
              </Link>
            </div>

            {/* Bandeau infos rapides */}
            <div className="mt-12 pt-8 border-t border-white/15">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                {/* Carte 1 */}
                <div className="flex items-start gap-3 rounded-lg bg-white/10 ring-1 ring-white/15 p-4">
                  <span className="text-xl leading-none">📍</span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-blue-100/70">Localisation</div>
                    <div className="text-sm text-blue-100/95">Basés à Orléans</div>
                  </div>
                </div>

                {/* Carte 2 */}
                <div className="flex items-start gap-3 rounded-lg bg-white/10 ring-1 ring-white/15 p-4">
                  <span className="text-xl leading-none">🏢</span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-blue-100/70">Clients</div>
                    <div className="text-sm text-blue-100/95">TPE · PME · Collectivités</div>
                  </div>
                </div>

                {/* Carte 3 */}
                <div className="flex items-start gap-3 rounded-lg bg-white/10 ring-1 ring-white/15 p-4">
                  <span className="text-xl leading-none">🛡️</span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-blue-100/70">Approche</div>
                    <div className="text-sm text-blue-100/95">Offensive & pédagogique</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services (aperçu) */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Nos services clés</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Interventions concrètes et livrables exploitables pour renforcer votre posture de sécurité.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Audit */}
            <div className="group p-8 bg-slate-50 hover:bg-blue-50 rounded-xl transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Audit de sécurité</h3>
              <p className="text-gray-600 mb-4">
                Cartographie, revue de configuration, scans validés manuellement et plan d’action priorisé.
              </p>
              <Link href="/services#audit" className="text-blue-700 font-semibold hover:underline">
                En savoir plus →
              </Link>
            </div>

            {/* Pentest */}
            <div className="group p-8 bg-slate-50 hover:bg-blue-50 rounded-xl transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l7 4v6c0 5.25-3.5 10-7 10s-7-4.75-7-10V6l7-4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 13l2-3 2 3m-2 0v3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Tests d’intrusion (Pentests)</h3>
              <p className="text-gray-600 mb-4">
                Simulations d’attaques réalistes (web, système, Wi-Fi), preuves d’exploitation et recommandations.
              </p>
              <Link href="/services#pentest" className="text-blue-700 font-semibold hover:underline">
                Voir la méthode →
              </Link>
            </div>

            {/* Sensibilisation */}
            <div className="group p-8 bg-slate-50 hover:bg-blue-50 rounded-xl transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5V10H2v10h5m10-10V6a4 4 0 10-8 0v4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Sensibilisation des collaborateurs</h3>
              <p className="text-gray-600 mb-4">
                Ateliers cyberhygiène, mots de passe et bonnes pratiques adaptés aux métiers.
              </p>
              <Link href="/services#sensibilisation" className="text-blue-700 font-semibold hover:underline">
                Voir les formats →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Méthodologie en 4 étapes */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Notre méthodologie</h2>
            <p className="text-gray-600 mt-3">Une cadence claire, des livrables actionnables.</p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { t: 'Cadrage', d: "Objectifs, périmètre, accès, règles d’engagement" },
              { t: 'Tests', d: 'Collecte, scans, exploitation manuelle, preuves' },
              { t: 'Restitution', d: 'Rapport exécutif + technique, plan d’action' },
              { t: 'Contre-audit', d: 'Validation des corrections et mise à jour' }
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-sm font-semibold text-blue-700 mb-1">
                  {i + 1}) {s.t}
                </div>
                <div className="text-slate-700">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à tester vos défenses ?
          </h2>

          <p className="text-blue-100 mb-8">
            Audit, pentest, sensibilisation — priorité à l’impact et aux actions concrètes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition shadow-lg hover:shadow-xl"
            >
              Parcourir les services
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent border border-white text-white font-bold rounded-lg hover:bg-white/10 transition"
            >
              Nous contacter
            </Link>
          </div>
          <div className="flex justify-center items-center gap-6 mt-8">
            {/* LinkedIn Entreprise */}
            <a
              href="https://www.linkedin.com/company/citadel-cybers%C3%A9curit%C3%A9/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
            >
              <SocialIcon
                url="https://www.linkedin.com/company/citadel-cybers%C3%A9curit%C3%A9/about/"
                fgColor="#ffffff"
                bgColor="transparent"
                style={{ height: 30, width: 30 }}
              />
              <span className="text-white text-sm font-medium">CITADEL</span>
            </a>

            {/* LinkedIn Perso */}
            <a
              href="https://linkedin.com/in/nicolas-bellencontre-287427303"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
            >
              <SocialIcon
                url="https://linkedin.com/in/nicolas-bellencontre-287427303"
                fgColor="#ffffff"
                bgColor="transparent"
                style={{ height: 30, width: 30 }}
              />
              <span className="text-white text-sm font-medium">Nicolas Bellencontre</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
