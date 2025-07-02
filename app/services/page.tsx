'use client'

interface Service {
  id: number
  name: string
  description: string
  price: string
  category: string
}

export default function Services() {
  // Services par défaut
  const services: Service[] = [
    {
      id: 1,
      name: "Audit de Sécurité",
      description: "Évaluation complète de votre infrastructure avec identification des vulnérabilités critiques et plan d'action détaillé.",
      price: "2,500€",
      category: "Audit"
    },
    {
      id: 2,
      name: "Protection des Données",
      description: "Chiffrement avancé, sauvegarde sécurisée et mise en conformité RGPD pour protéger vos données sensibles.",
      price: "1,800€/mois",
      category: "Protection"
    },
    {
      id: 3,
      name: "Surveillance Continue",
      description: "Monitoring 24/7 de votre infrastructure avec détection proactive des menaces et intervention rapide.",
      price: "2,200€/mois",
      category: "Surveillance"
    },
    {
      id: 4,
      name: "Réponse aux Incidents",
      description: "Intervention d'urgence pour contenir les menaces, analyser les incidents et restaurer vos systèmes.",
      price: "3,500€/incident",
      category: "Urgence"
    },
    {
      id: 5,
      name: "Formation Sécurité",
      description: "Programmes de sensibilisation personnalisés pour créer une culture de cybersécurité dans votre entreprise.",
      price: "1,200€/jour",
      category: "Formation"
    },
    {
      id: 6,
      name: "Architecture Sécurisée",
      description: "Conception et déploiement d'infrastructures résilientes avec sécurité intégrée dès la conception.",
      price: "Sur devis",
      category: "Conception"
    },
    {
      id: 7,
      name: "Tests de Pénétration",
      description: "Simulation d'attaques réelles pour identifier les failles de sécurité avant les cybercriminels.",
      price: "4,500€",
      category: "Test"
    },
    {
      id: 8,
      name: "Conformité Réglementaire",
      description: "Mise en conformité avec les réglementations sectorielles (RGPD, PCI-DSS, ISO 27001, etc.).",
      price: "2,800€/mois",
      category: "Conformité"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Nos Services
            </h1>
            <p className="text-lg text-gray-300">
              Solutions de cybersécurité complètes adaptées à chaque besoin d&apos;entreprise
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Services de Cybersécurité
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des solutions simples et efficaces pour protéger votre entreprise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-blue-300 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-3">
                    {service.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-800 transition-colors duration-300 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                    {service.price}
                  </div>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                    Devis
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Besoin d&apos;une Solution Sur Mesure ?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
            Nos experts analysent vos besoins et conçoivent la solution de sécurité parfaite pour votre entreprise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group inline-block px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
              <span className="flex items-center justify-center">
                Audit Gratuit
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <button className="group inline-block px-6 py-3 bg-transparent border-2 border-white/30 hover:bg-white/10 hover:border-white/50 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95">
              <span className="flex items-center justify-center">
                Nous Contacter
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
} 