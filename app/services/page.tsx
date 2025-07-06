'use client'

interface Service {
  id: number
  title: string
  points: string[]
}

export default function Services() {
  // Services selon l'image de référence
  const services: Service[] = [
    {
      id: 1,
      title: "Audit de sécurité initial",
      points: [
        "Analyse des postes, réseau, système, RGPD, accès, sauvegardes",
        "Rapport synthétique de vulnérabilités et non-conformités",
        "Recommandations priorisées"
      ]
    },
    {
      id: 2,
      title: "Mise en conformité de base",
      points: [
        "Mise à jour des systèmes (Windows, logiciels)",
        "Installation ou renforcement antivirus/EDR",
        "Mise en place d'un pare-feu (matériel ou logiciel)",
        "Activation du MFA (authentification à deux facteurs)",
        "Gestion des droits et des accès"
      ]
    },
    {
      id: 3,
      title: "Test de hacking éthique",
      points: [
        "Analyse réseau approfondie (scan de ports, services)",
        "Pentest externe (si exposition Internet)",
        "Simulation de phishing",
        "Scan de vulnérabilités automatisé",
        "Rapport technique détaillé avec plan de remédiation"
      ]
    },
    {
      id: 4,
      title: "Formation du personnel",
      points: [
        "Formation à la cyberhygiène (PC, email, web, mots de passe)",
        "Formation anti-phishing (sensibilisation + test simulé)",
        "Bonnes pratiques pour dirigeants et salariés",
        "Livrets et documents pédagogiques fournis"
      ]
    },
    {
      id: 5,
      title: "Mise en conformité RGPD & NIS2",
      points: [
        "Audit de conformité",
        "Registre de traitements",
        "Politique de confidentialité",
        "DPO externalisé si besoin",
        "Anticipation des obligations NIS2 (secteurs critiques)"
      ]
    },
    {
      id: 6,
      title: "Surveillance continue (SOC) - PDIS",
      points: [
        "Surveillance active des postes et serveurs (via EDR)",
        "Détection d'incidents en temps réel",
        "Mises à jour et maintenance continue",
        "Alertes et réponses immédiates en cas d'anomalie",
        "Reporting mensuel"
      ]
    },
    {
      id: 7,
      title: "Cyberassurance",
      points: [
        "Estimation du risque résiduel",
        "Préparation au dossier pour l'assureur",
        "Mise en relation avec un assureur",
        "Suivi du dossier et du contrat"
      ]
    },
    {
      id: 8,
      title: "Réponse aux attaques - PRIS",
      points: [
        "Assistance immédiate en cas d'incident",
        "Contre-mesures techniques : isolement, nettoyage",
        "Analyse forensique simplifiée (origine, impact)",
        "Reprise d'activité (plan de secours, restauration)",
        "Rapport post-incident"
      ]
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
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 border-4 rounded-4xl border-blue-800">
            {services.map((service, idx) => {
              const col = idx % 2;
              const row = Math.floor(idx / 2);
              const isBlue = (row % 2 === 0 && col === 0) || (row % 2 === 1 && col === 1);
              // Arrondi haut si première ligne de la colonne, bas si dernière ligne de la colonne
              const isFirstRow = row === 0;
              const isLastRow = row === Math.floor((services.length - 1) / 2);
              let rounded = '';
              if (isFirstRow) rounded += col === 0 ? ' rounded-tl-3xl' : ' rounded-tr-3xl';
              if (isLastRow) rounded += col === 0 ? ' rounded-bl-3xl' : ' rounded-br-3xl';
              return (
                <div
                  key={service.id}
                  className={`w-full ${isBlue ? 'bg-blue-800 text-white' : 'bg-white text-blue-900'}${rounded} transition-all duration-300 flex flex-col justify-start px-6 py-10 md:px-10 md:py-14`}
                  style={{ minHeight: '220px' }}
                >
                  <div className={`text-3xl md:text-4xl font-extrabold mb-2 ${isBlue ? 'text-white/80' : 'text-blue-800/80'}`}>{service.id}</div>
                  <h3 className={`font-bold text-xl md:text-2xl mb-3 ${isBlue ? 'text-white' : 'text-blue-900'}`}>{service.title}</h3>
                  <ul className={`list-disc pl-5 space-y-2 ${isBlue ? 'text-white/90' : 'text-blue-900/90'}`}>
                    {service.points.map((pt, idx2) => (
                      <li key={idx2}>{pt}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
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