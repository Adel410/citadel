export default function About() {
  const team = [
    {
      name: "Toi",
      role: "CEO & Fondateur",
      description: "Expert en cybersécurité avec 20+ ans d'expérience. Ancien directeur sécurité dans le secteur bancaire.",
      avatar: "👨‍💼",
      certifications: ["CISSP", "CISM", "PhD Cybersécurité"]
    },
    {
      name: "Pas toi",
      role: "Directrice Technique",
      description: "Architecte sécurité reconnue, spécialiste des infrastructures cloud et Zero Trust.",
      avatar: "👩‍💻",
      certifications: ["CISSP", "SABSA", "AWS Security"]
    },
    {
      name: "Toi",
      role: "CEO & Fondateur",
      description: "Expert en cybersécurité avec 20+ ans d'expérience. Ancien directeur sécurité dans le secteur bancaire.",
      avatar: "👨‍💼",
      certifications: ["CISSP", "CISM", "PhD Cybersécurité"]
    },
    {
      name: "Pas toi",
      role: "Directrice Technique",
      description: "Architecte sécurité reconnue, spécialiste des infrastructures cloud et Zero Trust.",
      avatar: "👩‍💻",
      certifications: ["CISSP", "SABSA", "AWS Security"]
    }
  ]

  const values = [
    {
      title: "Excellence Technique",
      description: "Nous investissons constamment dans les dernières technologies et certifications pour rester à la pointe.",
      icon: "🏆"
    },
    {
      title: "Transparence Totale",
      description: "Nos clients connaissent exactement ce que nous faisons, comment nous le faisons et pourquoi.",
      icon: "🔍"
    },
    {
      title: "Disponibilité 24/7",
      description: "La cybersécurité ne dort jamais. Nos équipes sont toujours prêtes à intervenir.",
      icon: "🛡️"
    },
    {
      title: "Partenariat Durable",
      description: "Nous nous engageons dans des relations à long terme basées sur la confiance mutuelle.",
      icon: "🤝"
    }
  ]

  const milestones = [
    {
      year: "2015",
      title: "Création de Citadel",
      description: "Fondation de l'entreprise par une équipe d'experts issus du secteur bancaire et de la défense."
    },
    {
      year: "2017",
      title: "Certification ANSSI",
      description: "Obtention de la qualification ANSSI, reconnaissance de notre expertise par l'État français."
    },
    {
      year: "2019",
      title: "Expansion Européenne",
      description: "Ouverture de bureaux à Londres et Berlin pour servir nos clients européens."
    },
    {
      year: "2021",
      title: "500+ Clients",
      description: "Franchissement du cap des 500 entreprises protégées avec un taux de satisfaction de 99%."
    },
    {
      year: "2023",
      title: "Centre SOC 24/7",
      description: "Lancement de notre centre de surveillance opérationnelle pour une protection continue."
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              À Propos de Citadel
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Votre partenaire de confiance en cybersécurité depuis 2015
            </p>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400">8+</div>
                <div className="text-gray-300">Années d&apos;Expérience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">500+</div>
                <div className="text-gray-300">Clients Protégés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">99%</div>
                <div className="text-gray-300">Satisfaction Client</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">24/7</div>
                <div className="text-gray-300">Support Disponible</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Notre Mission
                </h2>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Chez Citadel, nous croyons que chaque entreprise mérite une protection cybersécurité de niveau militaire, 
                  quelle que soit sa taille.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Fondée en 2015 par une équipe d&apos;experts issus de la défense nationale et du secteur bancaire, 
                  nous avons développé une approche unique combinant expertise technique pointue et 
                  accompagnement humain personnalisé.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Aujourd&apos;hui, nous protégeons plus de 500 entreprises à travers l&apos;Europe, 
                  des startups innovantes aux grandes corporations, avec un engagement constant : 
                  être votre bouclier numérique de confiance.
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Nos Engagements</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Protection garantie 24h/24, 7j/7</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Intervention d&apos;urgence sous 15 minutes</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Transparence totale sur nos actions</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Formation continue de vos équipes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-12">
              Nos Valeurs
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
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
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
              Notre Équipe Dirigeante
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.description}</p>
                  
                  <div>
                    <div className="text-xs font-semibold text-slate-900 mb-2">Certifications :</div>
                    <div className="flex flex-wrap justify-center gap-1">
                      {member.certifications.map((cert, certIndex) => (
                        <span key={certIndex} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à Nous Rejoindre ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Découvrez comment notre expertise peut transformer la sécurité de votre entreprise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Nous Contacter
            </a>
            <a 
              href="/services"
              className="inline-block px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300"
            >
              Découvrir Nos Services
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 