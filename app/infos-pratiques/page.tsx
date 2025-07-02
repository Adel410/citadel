export default function InfosPratiques() {
  const contactInfo = {
    phone: "+33 1 23 45 67 89",
    email: "contact@citadel-security.fr",
    emergencyPhone: "+33 1 23 45 67 90",
    address: "123 Avenue de la Cybersécurité, 75001 Paris",
    hours: {
      business: "Lundi - Vendredi : 8h00 - 18h00",
      support: "Support 24/7 disponible",
      emergency: "Hotline incidents : 24h/24, 7j/7"
    }
  }

  const certifications = [
    {
      name: "ANSSI",
      description: "Qualification de sécurité niveau Expert",
      validity: "2024-2027",
      icon: "🏛️"
    },
    {
      name: "ISO 27001",
      description: "Management de la sécurité de l'information",
      validity: "2023-2026",
      icon: "🔒"
    },
    {
      name: "CISA",
      description: "Certified Information Systems Auditor",
      validity: "Permanent",
      icon: "🔍"
    },
    {
      name: "CISSP",
      description: "Certified Information Systems Security Professional",
      validity: "Permanent",
      icon: "🛡️"
    }
  ]

  const services = [
    {
      title: "Audit Express",
      duration: "2-3 jours",
      description: "Analyse rapide des vulnérabilités critiques",
      price: "Sur devis",
      delivrable: "Rapport d'audit + recommandations prioritaires"
    },
    {
      title: "Audit Complet",
      duration: "1-2 semaines",
      description: "Évaluation complète de votre infrastructure",
      price: "Sur devis",
      delivrable: "Rapport détaillé + plan d'action + présentation"
    },
    {
      title: "Surveillance Continue",
      duration: "Contrat annuel",
      description: "Monitoring 24/7 de votre infrastructure",
      price: "À partir de 2,500€/mois",
      delivrable: "Dashboards temps réel + alertes + rapports mensuels"
    },
    {
      title: "Formation Équipes",
      duration: "1-3 jours",
      description: "Sensibilisation cybersécurité personnalisée",
      price: "1,200€ par jour",
      delivrable: "Supports de formation + certificats + tests"
    }
  ]

  const faq = [
    {
      question: "Combien de temps faut-il pour un audit de sécurité ?",
      answer: "Un audit express prend 2-3 jours, tandis qu'un audit complet nécessite 1-2 semaines selon la complexité de votre infrastructure."
    },
    {
      question: "Proposez-vous des contrats de maintenance ?",
      answer: "Oui, nous offrons des contrats de surveillance continue avec monitoring 24/7, mise à jour des signatures et support technique."
    },
    {
      question: "Êtes-vous certifiés ANSSI ?",
      answer: "Oui, nous possédons la qualification ANSSI niveau Expert, renouvelée régulièrement. Nous sommes également certifiés ISO 27001."
    },
    {
      question: "Comment se déroule une intervention d'urgence ?",
      answer: "Notre hotline d'urgence est disponible 24/7. Nous garantissons une première réponse sous 15 minutes et une intervention sur site sous 2h en région parisienne."
    },
    {
      question: "Travaillez-vous avec des PME ?",
      answer: "Absolument ! Nous adaptons nos solutions aux budgets et besoins des PME. Nous proposons des packages spécialement conçus pour les petites structures."
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Infos Pratiques
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Tout ce que vous devez savoir pour travailler avec Citadel
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Nous Contacter</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Téléphone</div>
                    <div className="text-gray-600">{contactInfo.phone}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Urgences 24/7</div>
                    <div className="text-gray-600">{contactInfo.emergencyPhone}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Email</div>
                    <div className="text-gray-600">{contactInfo.email}</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Adresse</div>
                    <div className="text-gray-600">{contactInfo.address}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Horaires</h2>
              <div className="bg-slate-50 rounded-xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Bureaux</div>
                      <div className="text-gray-600">{contactInfo.hours.business}</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Support</div>
                      <div className="text-gray-600">{contactInfo.hours.support}</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Urgences</div>
                      <div className="text-gray-600">{contactInfo.hours.emergency}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Certifications & Qualifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{cert.description}</p>
                <div className="text-xs text-blue-600 font-medium">
                  Validité : {cert.validity}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Nos Services & Tarifs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {service.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <div className="text-sm font-semibold text-slate-900 mb-1">Livrable :</div>
                  <div className="text-sm text-gray-600">{service.delivrable}</div>
                </div>
                <div className="text-2xl font-bold text-blue-600">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Questions Fréquentes
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à Commencer ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Contactez-nous pour discuter de vos besoins en cybersécurité
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Nous Contacter
            </a>
            <a 
              href={`tel:${contactInfo.phone}`}
              className="inline-block px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300"
            >
              Appeler Maintenant
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 