'use client'

import Link from 'next/link'

interface Service {
  id: number
  title: string
  points: string[]
  tag?: string
}

export default function Services() {
  const services: Service[] = [
    {
      id: 1,
      title: 'Audit de sécurité',
      tag: 'Professionnel + contre-audit',
      points: [
        'Cartographie des systèmes et des flux réseau',
        'Revue de configuration (systèmes, annuaire, pare-feu, sauvegardes)',
        'Scan et validation manuelle des vulnérabilités',
        'Rapport exécutif + rapport technique détaillé',
        "Plan d’action priorisé (effort/impact) et session de restitution",
        'Contre-audit pour valider les corrections',
      ],
    },
    {
      id: 2,
      title: 'Tests d’intrusion (Pentests)',
      tag: 'Web • Système • Wi-Fi',
      points: [
        'Cadrage du périmètre et des règles d’engagement',
        'Simulations d’attaques réalistes (OWASP, TTP adverses)',
        'Pentest externe pour mesurer l’exposition Internet',
        'Chaînage de vulnérabilités / élévation de privilèges',
        'Preuves d’exploitation (screens/logs) et recommandations',
        'Retest inclus sur périmètre corrigé (selon offre)',
      ],
    },
    {
      id: 3,
      title: 'Sensibilisation des collaborateurs',
      tag: 'Ateliers & exercices',
      points: [
        'Ateliers cyberhygiène (poste, email, web, mots de passe)',
        'Guides pratiques et supports réutilisables',
        'Formats adaptés dirigeants / équipes opérationnelles',
      ],
    },
  ]

  const steps = [
    { title: '1) Cadrage', desc: 'Objectifs, périmètre, accès, planning, règles d’engagement' },
    { title: '2) Tests', desc: 'Collecte d’info, scans, exploitation manuelle, preuves' },
    { title: '3) Restitution', desc: 'Rapport exécutif + technique, plan d’action priorisé' },
    { title: '4) Contre-audit', desc: 'Validation des corrections et mise à jour du rapport' },
  ]

  const deliverables = [
    'Rapport exécutif (décideurs) et rapport technique (équipes)',
    'Tableau des risques priorisé (criticité, impact, effort)',
    'Preuves d’exploitation et recommandations concrètes',
    'Checklist de remédiation et quick-wins',
    'Session de restitution et Q&A',
    'Contre-audit / retest (selon offre)',
  ]

  const faqs = [
    {
      q: 'Quelle est la différence entre audit et pentest ?',
      a: "L’audit vérifie en largeur la configuration et les bonnes pratiques. Le pentest cherche à exploiter des failles comme un attaquant, pour mesurer le risque réel.",
    },
    {
      q: 'Proposez-vous un suivi continu ?',
      a: "Notre cœur de métier est l’audit, le test d’intrusion et la sensibilisation. Nous proposons un contre-audit pour valider les corrections.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Nos Services
            </h1>
            <p className="text-lg text-gray-300">
              Audits professionnels, tests d’intrusion éthiques et sensibilisation : révélez vos failles avant les attaquants.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Services de cybersécurité</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Interventions ciblées et livrables exploitables pour TPE, PME et collectivités.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="w-full bg-white text-blue-900 transition-all duration-300 flex flex-col justify-start p-8 rounded-2xl shadow hover:shadow-lg hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-3xl font-extrabold text-blue-800/80">{service.id}</div>
                  {service.tag && (
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-blue-100 text-blue-700">{service.tag}</span>
                  )}
                </div>
                <h3 className="font-bold text-xl md:text-2xl mb-3 text-blue-900">{service.title}</h3>
                <ul className="list-disc pl-5 space-y-2 text-blue-900/90">
                  {service.points.map((pt, idx2) => (
                    <li key={idx2}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Méthodologie (4 étapes) */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">Méthodologie & cadence</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {steps.map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-sm font-semibold text-blue-700 mb-1">{s.title}</div>
                  <div className="text-slate-700">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Livrables */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">Livrables</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
              {deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ légère */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">Questions fréquentes</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="group bg-white rounded-xl p-5 shadow-sm">
                  <summary className="cursor-pointer list-none font-semibold text-slate-900">
                    {f.q}
                    <span className="float-right transition-transform group-open:rotate-90">›</span>
                  </summary>
                  <p className="mt-3 text-slate-700">{f.a}</p>
                </details>
              ))}
            </div>
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
