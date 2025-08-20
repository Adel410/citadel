'use client'

import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'
import { useCallback } from 'react'

type Service = {
  id: number
  title: string
  tag?: string
  points: string[]
}

const SERVICES: Service[] = [
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

const STEPS = [
  { t: 'Cadrage', d: 'Objectifs, périmètre, accès, planning, règles d’engagement' },
  { t: 'Tests', d: 'Collecte d’info, scans, exploitation manuelle, preuves' },
  { t: 'Restitution', d: 'Rapport exécutif + technique, plan d’action priorisé' },
  { t: 'Contre-audit', d: 'Validation des corrections et mise à jour du rapport' },
]

const DELIVERABLES = [
  'Rapport exécutif (décideurs) et rapport technique (équipes)',
  'Tableau des risques priorisé (criticité, impact, effort)',
  'Preuves d’exploitation et recommandations concrètes',
  'Checklist de remédiation et quick-wins',
  'Session de restitution et Q&A',
  'Contre-audit / retest (selon offre)',
]

const FAQS = [
  {
    q: 'Quelle est la différence entre audit et pentest ?',
    a: "L’audit vérifie en largeur la configuration et les bonnes pratiques. Le pentest cherche à exploiter des failles comme un attaquant, pour mesurer le risque réel.",
  },
  {
    q: 'Proposez-vous un suivi continu ?',
    a: "Notre cœur de métier est l’audit, le test d’intrusion et la sensibilisation. Nous proposons un contre-audit pour valider les corrections.",
  },
]

/* ---------- UI bits ---------- */

function ServicesHero() {
  const handleMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }, [])

  const handleLeave = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement
    el.style.setProperty('--mx', `-1000px`)
    el.style.setProperty('--my', `-1000px`)
  }, [])

  return (
    <section
      className="relative overflow-hidden text-white bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {/* fond animé mesh (conic) */}
      <div
        aria-hidden
        className="absolute -inset-[30%] -z-20 opacity-40 animate-spin-very-slow"
        style={{
          background:
            'conic-gradient(from 0deg, rgba(30,64,175,0.35), rgba(59,130,246,0.35), rgba(99,102,241,0.35), rgba(2,132,199,0.35), rgba(30,64,175,0.35))',
          animationDuration: '40s',
          filter: 'blur(120px)',
        }}
      />

      {/* reflet curseur */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(380px 380px at var(--mx, -1000px) var(--my, -1000px), rgba(255,255,255,0.035), rgba(255,255,255,0.02) 35%, rgba(0,0,0,0) 65%)',
          mixBlendMode: 'screen',
          transition: 'background-position 120ms ease-out',
        }}
      />

      <div className="relative container mx-auto px-6 py-20">
        {/* carte verre translucide */}
        <div className="mx-auto max-w-4xl text-center rounded-2xl bg-white/20 backdrop-blur-2xl ring-1 ring-white/20 p-8 md:p-12 shadow-xl">
          <h1 className="relative inline-block mx-auto text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-none">
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-x tracking-tight">
              Nos Services
            </span>
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 blur-2xl opacity-30"
              style={{
                background:
                  'radial-gradient(60% 60% at 50% 55%, rgba(96,165,250,0.35), rgba(59,130,246,0.15) 40%, rgba(0,0,0,0) 70%)',
                filter: 'drop-shadow(0 0 25px rgba(96,165,250,0.35))',
              }}
            />
          </h1>
          <p className="text-lg md:text-xl text-blue-50">
            Audits professionnels, tests d’intrusion éthiques et sensibilisation&nbsp;: révélez vos failles avant les attaquants.
          </p>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ s }: { s: Service }) {
  return (
    <div className="w-full bg-white text-blue-900 transition-all duration-300 flex flex-col justify-start p-8 rounded-2xl shadow hover:shadow-lg hover:scale-[1.02]">
      <div className="flex items-center justify-between mb-3">
        <div className="text-3xl font-extrabold text-blue-800/80">{s.id}</div>
        {s.tag && (
          <span className="text-xs font-semibold px-2 py-1 rounded bg-blue-100 text-blue-700">
            {s.tag}
          </span>
        )}
      </div>
      <h3 className="font-bold text-xl md:text-2xl mb-3 text-blue-900">{s.title}</h3>
      <ul className="list-disc pl-5 space-y-2 text-blue-900/90">
        {s.points.map((pt, idx) => (
          <li key={idx}>{pt}</li>
        ))}
      </ul>
    </div>
  )
}

function Methodology() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
            Méthodologie & cadence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {STEPS.map((s, i) => (
              <div key={s.t} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-sm font-semibold text-blue-700 mb-1">
                  {i + 1}) {s.t}
                </div>
                <div className="text-slate-700">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Deliverables() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">Livrables</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
            {DELIVERABLES.map((d, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">Questions fréquentes</h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
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
  )
}

function FinalCTA() {
  const handleMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }, [])

  const handleLeave = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement
    el.style.setProperty('--mx', `-1000px`)
    el.style.setProperty('--my', `-1000px`)
  }, [])

  return (
    <section
      className="relative py-16 overflow-hidden text-white bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {/* fond animé mesh */}
      <div
        aria-hidden
        className="absolute -inset-[30%] -z-20 opacity-40 animate-spin-very-slow"
        style={{
          background:
            'conic-gradient(from 0deg, rgba(30,64,175,0.35), rgba(59,130,246,0.35), rgba(99,102,241,0.35), rgba(2,132,199,0.35), rgba(30,64,175,0.35))',
          animationDuration: '40s',
          filter: 'blur(120px)',
        }}
      />
      {/* reflet curseur */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(380px 380px at var(--mx, -1000px) var(--my, -1000px), rgba(255,255,255,0.04), rgba(255,255,255,0.02) 35%, rgba(0,0,0,0) 65%)',
          mixBlendMode: 'screen',
          transition: 'background-position 120ms ease-out',
        }}
      />

      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-x">
          Prêt à tester vos défenses ?
        </h2>
        <p className="text-blue-100 mb-10 text-lg">
          Audit, pentest, sensibilisation — priorité à l’impact et aux actions concrètes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 border border-white/30"
          >
            Parcourir les services
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Nous contacter
          </Link>
        </div>

        <div className="flex justify-center items-center gap-6 mt-10">
          <a
            href="https://www.linkedin.com/company/citadel-cybers%C3%A9curit%C3%A9/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
          >
            <SocialIcon url="https://www.linkedin.com/company/citadel-cybers%C3%A9curit%C3%A9/about/" fgColor="#ffffff" bgColor="transparent" style={{ height: 30, width: 30 }} />
            <span className="text-white text-sm font-medium">CITADEL</span>
          </a>
          <a
            href="https://linkedin.com/in/nicolas-bellencontre-287427303"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
          >
            <SocialIcon url="https://linkedin.com/in/nicolas-bellencontre-287427303" fgColor="#ffffff" bgColor="transparent" style={{ height: 30, width: 30 }} />
            <span className="text-white text-sm font-medium">Nicolas Bellencontre</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServicesHero />

      {/* grille des services */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Services de cybersécurité</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Interventions ciblées et livrables exploitables pour TPE, PME et collectivités.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <ServiceCard key={s.id} s={s} />
            ))}
          </div>
        </div>
      </section>

      <Methodology />
      <Deliverables />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
