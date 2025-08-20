import Link from 'next/link'

export default function About() {
  const values = [
    {
      title: "Ethique et Transparence",
      description: "Nous testons vos systèmes comme le ferait un attaquant, mais toujours dans un cadre contractuel et sécurisé.",
      icon: "🔍"
    },
    {
      title: "Expertise Offensive",
      description: "Nos audits et tests d’intrusion s’appuient sur des méthodes utilisées par les hackers, pour mieux anticiper leurs actions.",
      icon: "⚡"
    },
    {
      title: "Pédagogie",
      description: "Nous accompagnons vos collaborateurs avec des ateliers et des formations pratiques en cybersécurité.",
      icon: "🎓"
    },
    {
      title: "Exigence",
      description: "Chaque mission donne lieu à un rapport professionnel clair, avec recommandations et contre-audit si nécessaire.",
      icon: "📑"
    }
  ]

  const milestones = [
    {
      year: "2025",
      title: "Création de Citadel",
      description: "Fondée à Orléans par d’anciens militaires passionnés par l’audit et le hacking éthique."
    },
    {
      year: "2025",
      title: "Premiers audits",
      description: "Réalisation des premiers audits techniques et organisationnels auprès de TPE et collectivités."
    },
    {
      year: "2026",
      title: "Développement",
      description: "Montée en puissance des tests d’intrusion et des programmes de sensibilisation pour les PME régionales."
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            À Propos de Citadel
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            CITADEL Cybersécurité, basée à Orléans, accompagne les TPE, PME et collectivités dans l’évaluation de leur sécurité numérique.  
            Nous réalisons des audits complets, des tests d’intrusion et des sessions de sensibilisation pour révéler les failles avant les attaquants.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Notre Approche</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Notre mission est de tester vos défenses, comme le ferait un pirate, afin de révéler vos vulnérabilités.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Chaque audit est suivi d’un rapport détaillé, clair et priorisé. Nous proposons également des contre-audits pour valider la correction des failles.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Enfin, nous formons vos équipes pour réduire le facteur humain, souvent maillon faible en cybersécurité.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Nos Engagements</h3>
              <ul className="space-y-4 text-gray-700">
                <li>✔️ Audits techniques et organisationnels complets</li>
                <li>✔️ Tests d’intrusion réalistes en conditions proches du terrain</li>
                <li>✔️ Rapports clairs et exploitables, destinés aux dirigeants comme aux équipes techniques</li>
                <li>✔️ Sensibilisation adaptée aux collaborateurs et dirigeants</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Nos Valeurs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">Notre Parcours</h2>
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
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
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
