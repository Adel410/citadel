"use client";

import Link from "next/link";
import FinalCTA from "./components/FinalCTA";
import Head from "next/head";

type Service = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
};

const SERVICES: Service[] = [
  {
    title: "Audit de sécurité",
    description:
      "Cartographie, revue de configuration, scans validés manuellement et plan d’action priorisé.",
    href: "/services#audit",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Tests d’intrusion (Pentests)",
    description:
      "Simulations d’attaques réalistes (web, système, Wi-Fi), preuves d’exploitation et recommandations.",
    href: "/services#pentest",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 2l7 4v6c0 5.25-3.5 10-7 10s-7-4.75-7-10V6l7-4z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 13l2-3 2 3m-2 0v3"
        />
      </svg>
    ),
  },
  {
    title: "Sensibilisation des collaborateurs",
    description:
      "Ateliers cyberhygiène, mots de passe et bonnes pratiques adaptés aux métiers.",
    href: "/services#sensibilisation",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5V10H2v10h5m10-10V6a4 4 0 10-8 0v4"
        />
      </svg>
    ),
  },
];

const STEPS = [
  { t: "Cadrage", d: "Objectifs, périmètre, accès, règles d’engagement" },
  { t: "Tests", d: "Collecte, scans, exploitation manuelle, preuves" },
  { t: "Restitution", d: "Rapport exécutif + technique, plan d’action" },
  { t: "Contre-audit", d: "Validation des corrections et mise à jour" },
];

const cardBase =
  "rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg";

function ServiceCard({ s }: { s: Service }) {
  return (
    <div
      className={`group p-6 sm:p-8 bg-slate-50 hover:bg-blue-50 ${cardBase}`}
    >
      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
        {s.icon}
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
        {s.title}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base mb-4">{s.description}</p>
      <Link
        href={s.href}
        className="text-blue-700 font-semibold hover:underline text-sm sm:text-base"
      >
        En savoir plus →
      </Link>
    </div>
  );
}

function Methodology() {
  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Notre méthodologie
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Une cadence claire, des livrables actionnables.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {STEPS.map((s, i) => (
            <div
              key={s.t}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-sm text-center sm:text-left"
            >
              <div className="text-sm font-semibold text-blue-700 mb-1">
                {i + 1}) {s.t}
              </div>
              <div className="text-slate-700 text-sm sm:text-base">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage: "url('/citadel_abstract.png')",
        backgroundSize: "cover",
        backgroundPosition: "center 70%",
        backgroundRepeat: "no-repeat",
      }}
      onMouseMove={(e) => {
        const el = e.currentTarget as HTMLElement;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--my", `${e.clientY - rect.top}px`);
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.setProperty("--mx", `-1000px`);
        el.style.setProperty("--my", `-1000px`);
      }}
    >
      {/* Voile + blur + animation */}
      <div
        className="absolute inset-0 z-0 animate-bg-reveal"
        style={{
          backgroundColor: "rgba(0,0,0,0.15)",
          backdropFilter: "blur(3px)",
        }}
      />

      {/* Reflet doux qui suit le curseur */}
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
      <div className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-32 z-20 text-center">
        <h2 className="text-xl sm:text-3xl lg:text-6xl font-bold mb-6 sm:mb-8 text-blue-50 drop-shadow leading-snug sm:leading-normal md:leading-relaxed animate-fade-down">
          Votre{" "}
          <span className="bg-blue-600/90 text-white font-bold px-2 rounded-md shadow">
            Rempart
          </span>{" "}
          contre les{" "}
          <span className="bg-blue-600/90 text-white font-bold px-2 rounded-md shadow">
            Cybermenaces
          </span>
        </h2>

        <p className="text-base sm:text-lg lg:text-2xl mb-8 sm:mb-10 text-gray-100 leading-relaxed font-medium animate-fade-down-2 max-w-3xl mx-auto">
          CITADEL Cybersécurité accompagne les entreprises et les collectivités
          dans leur démarche de cybersécurité.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-down-3">
          <Link
            href="/services"
            className="px-6 py-3 sm:px-8 sm:py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 border border-white/30"
          >
            Voir nos services
          </Link>
          <Link
            href="/contact?type=audit"
            className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Demander un audit
          </Link>
        </div>

        {/* Bandeau infos rapides */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/15 animate-fade-down-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-left">
            <div className="flex items-start gap-3 rounded-lg bg-white/10 backdrop-blur-sm ring-1 ring-white/15 p-4">
              <span className="text-xl leading-none">📍</span>
              <div>
                <div className="text-[11px] sm:text-xs uppercase tracking-wider text-blue-100/70">
                  Localisation
                </div>
                <div className="text-sm text-blue-100/95">Basés à Orléans</div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-white/10 backdrop-blur-sm ring-1 ring-white/15 p-4">
              <span className="text-xl leading-none">🏢</span>
              <div>
                <div className="text-[11px] sm:text-xs uppercase tracking-wider text-blue-100/70">
                  Clients
                </div>
                <div className="text-sm text-blue-100/95">
                  TPE · PME · Collectivités
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-white/10 backdrop-blur-sm ring-1 ring-white/15 p-4">
              <span className="text-xl leading-none">🛡️</span>
              <div>
                <div className="text-[11px] sm:text-xs uppercase tracking-wider text-blue-100/70">
                  Approche
                </div>
                <div className="text-sm text-blue-100/95">
                  Offensive & pédagogique
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Head>
        <title>Accueil | CITADEL Cybersécurité</title>
        <meta
          name="description"
          content="Découvrez nos services d’audit, pentest et sensibilisation pour protéger votre entreprise contre les cybermenaces."
        />
        <meta property="og:title" content="Accueil | CITADEL Cybersécurité" />
        <meta
          property="og:description"
          content="CITADEL Cybersécurité accompagne TPE, PME et collectivités avec des audits, pentests et formations."
        />
        <meta property="og:site_name" content="CITADEL Cybersécurité" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>
      {/* Hero */}
      <Hero />

      {/* Services */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Nos services clés
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Interventions concrètes et livrables exploitables pour renforcer
              votre posture de sécurité.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} s={s} />
            ))}
          </div>
        </div>
      </section>

      <Methodology />
      <FinalCTA />
    </main>
  );
}
