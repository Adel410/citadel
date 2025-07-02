export default function Portfolio() {
  const projects = [
    {
      title: "Sécurisation Banque Régionale",
      category: "Secteur Financier",
      description: "Migration complète vers une architecture Zero Trust, réduction de 95% des tentatives d'intrusion.",
      technologies: ["Zero Trust", "Multi-Factor Auth", "SIEM", "Encryption"],
      image: "🏦",
      results: ["95% réduction des incidents", "Conformité PCI-DSS", "0 breach en 2 ans"]
    },
    {
      title: "Protection Hôpital Universitaire",
      category: "Santé",
      description: "Sécurisation des données patients et mise en conformité RGPD avec surveillance 24/7.",
      technologies: ["RGPD Compliance", "Medical IoT Security", "Data Encryption", "Network Monitoring"],
      image: "🏥",
      results: ["100% conformité RGPD", "Protection 10,000+ patients", "Temps de réponse < 5min"]
    },
    {
      title: "Cyberdéfense Industrie 4.0",
      category: "Industrie",
      description: "Protection des systèmes de production connectés contre les attaques ciblées sur l'IoT industriel.",
      technologies: ["OT Security", "Industrial IoT", "Anomaly Detection", "Network Segmentation"],
      image: "🏭",
      results: ["0 arrêt production", "Protection 500+ capteurs", "ROI 300% en 1 an"]
    },
    {
      title: "E-commerce Sécurisé",
      category: "Commerce",
      description: "Architecture sécurisée pour plateforme handling 1M+ transactions/jour avec protection DDoS.",
      technologies: ["DDoS Protection", "Payment Security", "Web Application Firewall", "CDN Security"],
      image: "🛒",
      results: ["1M+ transactions/jour", "99.99% uptime", "Fraud reduction 90%"]
    },
    {
      title: "Gouvernement Local",
      category: "Public",
      description: "Infrastructure sécurisée pour services citoyens avec authentification forte et chiffrement bout-en-bout.",
      technologies: ["Government Grade Security", "Digital Identity", "Secure Communication", "Audit Compliance"],
      image: "🏛️",
      results: ["50,000+ citoyens sécurisés", "Certification ANSSI", "Transparence 100%"]
    },
    {
      title: "Startup FinTech",
      category: "Finance",
      description: "Solution de sécurité évolutive pour startup en hypercroissance avec contraintes budgétaires.",
      technologies: ["Cloud Security", "DevSecOps", "API Security", "Cost Optimization"],
      image: "💳",
      results: ["Croissance 500%", "Budget -40%", "Time-to-market /2"]
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Notre Portfolio
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Découvrez comment nous avons transformé la sécurité de nos clients
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400">150+</div>
                <div className="text-gray-300">Projets Réalisés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">98%</div>
                <div className="text-gray-300">Taux de Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">0</div>
                <div className="text-gray-300">Breach Post-Déploiement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className="p-8">
                  {/* Project Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{project.image}</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-slate-900 mb-2">Technologies:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <div className="text-sm font-semibold text-slate-900 mb-2">Résultats:</div>
                    <ul className="space-y-1">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-sm text-green-600 flex items-center">
                          <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Votre Projet Sera le Prochain
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Rejoignez nos clients satisfaits et sécurisez votre entreprise dès aujourd&apos;hui.
          </p>
          <a 
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Discuter de Votre Projet
          </a>
        </div>
      </section>
    </main>
  )
} 