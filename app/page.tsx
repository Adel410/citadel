'use client'

import Link from 'next/link'

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
              Votre <span className="text-white bg-blue-600 px-2 py-1 rounded-md">rempart</span> contre les <span className="text-white bg-blue-600 px-2 py-1 rounded-md">cybermenaces</span>
            </h2>
            <p className="text-xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              CITADEL Cybersécurité, basée à Orléans, accompagne collectivités et entreprises
              avec des <span className="font-semibold text-white/95">audits professionnels</span>, des
              <span className="font-semibold text-white/95"> tests d’intrusion éthiques</span> et des
              <span className="font-semibold text-white/95"> programmes de sensibilisation</span>.
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
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-blue-100/90">
              <div className="px-4 py-2 rounded-lg border border-white/10 bg-white/5">Basés à Orléans</div>
              <div className="px-4 py-2 rounded-lg border border-white/10 bg-white/5">TPE · PME · Collectivités</div>
              <div className="px-4 py-2 rounded-lg border border-white/10 bg-white/5">Approche offensive & pédagogique</div>
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
                <div className="text-sm font-semibold text-blue-700 mb-1">{i + 1}) {s.t}</div>
                <div className="text-slate-700">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs servis */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Nous intervenons pour</h2>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: 'TPE', d: 'Mise à niveau sécurité pragmatique' },
              { t: 'PME', d: 'Audits ciblés & pentests réguliers' },
              { t: 'Collectivités', d: 'Accompagnement et sensibilisation' }
            ].map((c, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-sm text-center">
                <div className="text-2xl font-extrabold text-blue-800/80 mb-2">{c.t}</div>
                <div className="text-slate-700">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
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
          <p className="mt-6 text-sm text-blue-100/90">
            Suivre nos actus :{' '}
            <a
              href="https://www.linkedin.com/company/citadel-cybers%C3%A9curit%C3%A9/about/"
              target="_blank"
              className="underline hover:text-white"
            >
              LinkedIn CITADEL
            </a>{' '}
            •{' '}
            <a
              href="https://linkedin.com/in/nicolas-bellencontre-287427303"
              target="_blank"
              className="underline hover:text-white"
            >
              Nicolas Bellencontre
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}
