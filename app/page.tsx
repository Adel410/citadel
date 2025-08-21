"use client";

import Link from "next/link";
import { SocialIcon } from "react-social-icons";

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
    <div className={`group p-8 bg-slate-50 hover:bg-blue-50 ${cardBase}`}>
      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
        {s.icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
      <p className="text-gray-600 mb-4">{s.description}</p>
      <Link
        href={s.href}
        className="text-blue-700 font-semibold hover:underline"
      >
        En savoir plus →
      </Link>
    </div>
  );
}

function Methodology() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Notre méthodologie
          </h2>
          <p className="text-gray-600 mt-3">
            Une cadence claire, des livrables actionnables.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
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
    </section>
  );
}

function FinalCTA() {
  return (
    <section
      className="relative py-15 overflow-hidden text-white bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
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
      {/* Fond animé mesh */}
      <div
        aria-hidden
        className="absolute -inset-[30%] -z-20 opacity-40 animate-spin-very-slow"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(30,64,175,0.35), rgba(59,130,246,0.35), rgba(99,102,241,0.35), rgba(2,132,199,0.35), rgba(30,64,175,0.35))",
          animationDuration: "40s",
          filter: "blur(120px)",
        }}
      />
      {/* Reflet doux au curseur */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(380px 380px at var(--mx, -1000px) var(--my, -1000px), rgba(255,255,255,0.04), rgba(255,255,255,0.02) 35%, rgba(0,0,0,0) 65%)",
          mixBlendMode: "screen",
          transition: "background-position 120ms ease-out",
        }}
      />

      {/* Contenu */}
      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-x">
          Prêt à tester vos défenses ?
        </h2>
        <p className="text-blue-100 mb-10 text-lg">
          Audit, pentest, sensibilisation — priorité à l’impact et aux actions
          concrètes.
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
            <SocialIcon
              url="https://www.linkedin.com/company/citadel-cybers%C3%A9curit%C3%A9/about/"
              fgColor="#ffffff"
              bgColor="transparent"
              style={{ height: 30, width: 30 }}
            />
            <span className="text-white text-sm font-medium">CITADEL</span>
          </a>

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
            <span className="text-white text-sm font-medium">
              Nicolas Bellencontre
            </span>
          </a>
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
      <div className="absolute inset-0 bg-grey/10 z-0 animate-bg-reveal" style={{ backdropFilter: "blur(3px)" }} />

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
      <div className="relative container mx-auto px-6 py-24 lg:py-32 z-20 text-center">
        <h2 className="text-2xl lg:text-6xl font-bold mb-10 text-blue-50 drop-shadow leading-snug sm:leading-normal md:leading-relaxed animate-fade-down">
          Votre{" "}
          <span className="bg-blue-600/90 text-white font-bold px-2 rounded-md shadow">
            Rempart
          </span>{" "}
          contre les{" "}
          <span className="bg-blue-600/90 text-white font-bold px-2 rounded-md shadow">
            Cybermenaces
          </span>
        </h2>

        <p className="text-2xl mb-10 text-gray-100 leading-relaxed font-medium animate-fade-down-2">
          CITADEL Cybersécurité accompagne les entreprises et les collectivités
          dans leur démarche de cybersécurité.
        </p>

        {/* CTA principal */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-down-3">
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
        <div className="mt-12 pt-8 border-t border-white/15 animate-fade-down-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="flex items-start gap-3 rounded-lg bg-white/10 backdrop-blur-sm ring-1 ring-white/15 p-4">
              <span className="text-xl leading-none">📍</span>
              <div>
                <div className="text-xs uppercase tracking-wider text-blue-100/70">
                  Localisation
                </div>
                <div className="text-sm text-blue-100/95">Basés à Orléans</div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-white/10 backdrop-blur-sm ring-1 ring-white/15 p-4">
              <span className="text-xl leading-none">🏢</span>
              <div>
                <div className="text-xs uppercase tracking-wider text-blue-100/70">
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
                <div className="text-xs uppercase tracking-wider text-blue-100/70">
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
      <Hero />

      {/* Services (aperçu) */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Nos services clés
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Interventions concrètes et livrables exploitables pour renforcer
              votre posture de sécurité.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
