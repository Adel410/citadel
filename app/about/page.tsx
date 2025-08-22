"use client";

import FinalCTA from "../components/FinalCTA";
import Head from "next/head";

export default function About() {
  <Head>
    <title>À propos | CITADEL Cybersécurité</title>
    <meta
      name="description"
      content="Découvrez l’histoire, les valeurs et la mission de CITADEL Cybersécurité, votre partenaire sécurité basé à Orléans."
    />
    <meta property="og:title" content="À propos | CITADEL Cybersécurité" />
    <meta
      property="og:description"
      content="Éthique, expertise offensive, pédagogie et exigence : découvrez les valeurs de CITADEL Cybersécurité."
    />
    <meta property="og:image" content="/og-image.jpg" />
  </Head>;

  const values = [
    {
      title: "Éthique et Transparence",
      description:
        "Nous testons vos systèmes comme le ferait un attaquant, mais toujours dans un cadre contractuel et sécurisé.",
      icon: "🔍",
    },
    {
      title: "Expertise Offensive",
      description:
        "Nos audits et tests d’intrusion s’appuient sur des méthodes utilisées par les hackers, pour mieux anticiper leurs actions.",
      icon: "⚡",
    },
    {
      title: "Pédagogie",
      description:
        "Nous accompagnons vos collaborateurs avec des ateliers et des formations pratiques en cybersécurité.",
      icon: "🎓",
    },
    {
      title: "Exigence",
      description:
        "Chaque mission donne lieu à un rapport professionnel clair, avec recommandations et contre-audit si nécessaire.",
      icon: "📑",
    },
  ];

  const milestones = [
    {
      year: "2025",
      title: "Création de Citadel",
      description:
        "Fondée à Orléans par d’anciens militaires passionnés par la cybersécurité et soucieux de la défense des entreprises françaises.",
    },
    {
      year: "2025",
      title: "Premiers audits",
      description:
        "Réalisation des premiers audits techniques et organisationnels auprès de TPE et collectivités.",
    },
    {
      year: "2026",
      title: "Développement",
      description:
        "Montée en puissance des tests d’intrusion et des programmes de sensibilisation pour les PME régionales.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section
        className="relative overflow-hidden text-white"
        style={{
          backgroundImage: "url('/citadel_abstract.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 65%",
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
        {/* Voile + blur */}
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
        <div className="relative container mx-auto px-6 py-20 md:py-28 z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-x animate-fade-down">
            À Propos de Citadel
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-down-2">
            CITADEL Cybersécurité, basée à Orléans, accompagne les TPE, PME et
            collectivités dans l’évaluation de leur sécurité numérique. Nous
            réalisons des audits complets, des tests d’intrusion et des sessions
            de sensibilisation pour révéler les failles avant les attaquants.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Notre Approche
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Notre mission est de tester vos défenses, comme le ferait un
                pirate, afin de révéler vos vulnérabilités.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Chaque audit est suivi d’un rapport détaillé, clair et priorisé.
                Nous proposons également des contre-audits pour valider la
                correction des failles.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Enfin, nous formons vos équipes pour réduire le facteur humain,
                souvent maillon faible en cybersécurité.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Nos Engagements
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔️ Audits techniques et organisationnels complets</li>
                <li>
                  ✔️ Tests d’intrusion réalistes en conditions proches du
                  terrain
                </li>
                <li>
                  ✔️ Rapports clairs et exploitables, destinés aux dirigeants
                  comme aux équipes techniques
                </li>
                <li>
                  ✔️ Sensibilisation adaptée aux collaborateurs et dirigeants
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">
            Nos Valeurs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Notre Parcours
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-8 relative">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-0"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
