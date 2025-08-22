"use client";

import { useCallback } from "react";
import FinalCTA from "../components/FinalCTA";
import Head from "next/head";

type Service = {
  id: number;
  title: string;
  tag?: string;
  points: string[];
};

const SERVICES: Service[] = [
  {
    id: 1,
    title: "Audit de sécurité",
    tag: "Professionnel + contre-audit",
    points: [
      "Cartographie des systèmes et des flux réseau",
      "Revue de configuration (systèmes, annuaire, pare-feu, sauvegardes)",
      "Scan et validation manuelle des vulnérabilités",
      "Rapport exécutif + rapport technique détaillé",
      "Plan d’action priorisé (effort/impact) et session de restitution",
      "Contre-audit pour valider les corrections",
    ],
  },
  {
    id: 2,
    title: "Tests d’intrusion (Pentests)",
    tag: "Web • Système • Wi-Fi",
    points: [
      "Cadrage du périmètre et des règles d’engagement",
      "Simulations d’attaques réalistes (OWASP, TTP adverses)",
      "Pentest externe pour mesurer l’exposition Internet",
      "Chaînage de vulnérabilités / élévation de privilèges",
      "Preuves d’exploitation (screens/logs) et recommandations",
      "Retest inclus sur périmètre corrigé (selon offre)",
    ],
  },
  {
    id: 3,
    title: "Sensibilisation des collaborateurs",
    tag: "Ateliers & exercices",
    points: [
      "Ateliers cyberhygiène (poste, email, web, mots de passe)",
      "Guides pratiques et supports réutilisables",
      "Formats adaptés dirigeants / équipes opérationnelles",
    ],
  },
];

const STEPS = [
  {
    t: "Cadrage",
    d: "Objectifs, périmètre, accès, planning, règles d’engagement",
  },
  { t: "Tests", d: "Collecte d’info, scans, exploitation manuelle, preuves" },
  {
    t: "Restitution",
    d: "Rapport exécutif + technique, plan d’action priorisé",
  },
  {
    t: "Contre-audit",
    d: "Validation des corrections et mise à jour du rapport",
  },
];

const DELIVERABLES = [
  "Rapport exécutif (décideurs) et rapport technique (équipes)",
  "Tableau des risques priorisé (criticité, impact, effort)",
  "Preuves d’exploitation et recommandations concrètes",
  "Checklist de remédiation et quick-wins",
  "Session de restitution et Q&A",
  "Contre-audit / retest (selon offre)",
];

const FAQS = [
  {
    q: "Quelle est la différence entre audit et pentest ?",
    a: "L’audit vérifie en largeur la configuration et les bonnes pratiques. Le pentest cherche à exploiter des failles comme un attaquant, pour mesurer le risque réel.",
  },
  {
    q: "Proposez-vous un suivi continu ?",
    a: "Notre cœur de métier est l’audit, le test d’intrusion et la sensibilisation. Nous proposons un contre-audit pour valider les corrections.",
  },
];

/* ---------- UI bits ---------- */

function ServicesHero() {
  const handleMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);

  const handleLeave = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    el.style.setProperty("--mx", `-1000px`);
    el.style.setProperty("--my", `-1000px`);
  }, []);

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage: "url('/citadel_abstract.png')",
        backgroundSize: "cover",
        backgroundPosition: "center 65%",
        backgroundRepeat: "no-repeat",
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {/* Voile + blur + animation */}
      <div
        className="absolute inset-0 bg-grey/20 z-0 animate-bg-reveal"
        style={{ backdropFilter: "blur(2px)" }}
      />

      {/* Reflet curseur */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(380px 380px at var(--mx, -1000px) var(--my, -1000px), rgba(255,255,255,0.06), rgba(255,255,255,0.03) 35%, rgba(0,0,0,0) 95%)",
          mixBlendMode: "screen",
          transition: "background-position 120ms ease-out",
        }}
      />

      {/* Contenu */}
      <div className="relative container mx-auto px-6 py-24 lg:py-32 z-20 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-down">
          Nos{" "}
          <span className="bg-blue-600/90 text-white font-bold px-2 rounded-md shadow">
            Services
          </span>
        </h1>

        <p className="text-lg lg:text-2xl text-blue-100 mb-10 animate-fade-down-2">
          Audits professionnels, tests d’intrusion éthiques et
          sensibilisation&nbsp;: révélez vos failles avant les attaquants.
        </p>
      </div>
    </section>
  );
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
      <h3 className="font-bold text-xl md:text-2xl mb-3 text-blue-900">
        {s.title}
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-blue-900/90">
        {s.points.map((pt, idx) => (
          <li key={idx}>{pt}</li>
        ))}
      </ul>
    </div>
  );
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
  );
}

function Deliverables() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">
            Livrables
          </h2>
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
  );
}

function FAQ() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl p-5 shadow-sm"
              >
                <summary className="cursor-pointer list-none font-semibold text-slate-900">
                  {f.q}
                  <span className="float-right transition-transform group-open:rotate-90">
                    ›
                  </span>
                </summary>
                <p className="mt-3 text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Head>
        <title>Services | CITADEL Cybersécurité</title>
        <meta
          name="description"
          content="Audits de sécurité, tests d’intrusion (pentests) et sensibilisation des collaborateurs. Découvrez nos services clés."
        />
        <meta property="og:title" content="Services | CITADEL Cybersécurité" />
        <meta
          property="og:description"
          content="Audits, pentests, sensibilisation : des solutions concrètes pour renforcer la cybersécurité de votre entreprise."
        />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>
      <ServicesHero />
      {/* grille des services */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Services de cybersécurité
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Interventions ciblées et livrables exploitables pour TPE, PME et
              collectivités.
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
  );
}
