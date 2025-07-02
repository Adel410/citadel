export default function Temoignages() {
  const testimonials = [
    {
      name: "Marie Dubois",
      position: "DSI",
      company: "BankSecure SA",
      content: "Citadel a transformé notre approche de la cybersécurité. Leur expertise en Zero Trust nous a permis de réduire les incidents de 95%. L'équipe est réactive et toujours disponible.",
      rating: 5,
      sector: "Finance",
      avatar: "👩‍💼"
    },
    {
      name: "Pierre Martin",
      position: "Directeur IT",
      company: "IndustrialTech",
      content: "La sécurisation de notre infrastructure IoT industrielle était un défi majeur. Citadel a livré une solution robuste sans impact sur notre production. Résultat : 0 arrêt en 18 mois.",
      rating: 5,
      sector: "Industrie",
      avatar: "👨‍💻"
    },
    {
      name: "Dr. Sophie Laurent",
      position: "Responsable SI",
      company: "Hôpital Universitaire",
      content: "La conformité RGPD était critique pour nous. L'équipe Citadel a su allier sécurité et facilité d'usage. Nos équipes médicales peuvent se concentrer sur les patients en toute sérénité.",
      rating: 5,
      sector: "Santé",
      avatar: "👩‍⚕️"
    },
    {
      name: "Jean-Luc Moreau",
      position: "CTO",
      company: "FinTech Innovation",
      content: "En tant que startup, nous avions besoin d'une sécurité de niveau entreprise avec un budget serré. Citadel a conçu une solution évolutive qui a grandi avec nous. ROI exceptionnel !",
      rating: 5,
      sector: "Startup",
      avatar: "👨‍🚀"
    },
    {
      name: "Isabelle Leroy",
      position: "RSSI",
      company: "Commerce Digital",
      content: "Avec 1 million de transactions par jour, la sécurité est vitale. La solution DDoS de Citadel nous a sauvés lors du Black Friday. Aucune interruption, aucune perte.",
      rating: 5,
      sector: "E-commerce",
      avatar: "👩‍💼"
    },
    {
      name: "Michel Bertrand",
      position: "Maire",
      company: "Ville de Techville",
      content: "La digitalisation des services publics nécessitait une sécurité irréprochable. Citadel nous a accompagnés avec professionnalisme. 50,000 citoyens nous font confiance.",
      rating: 5,
      sector: "Public",
      avatar: "👨‍💼"
    }
  ]

  const stats = [
    { number: "500+", label: "Clients Protégés" },
    { number: "99.2%", label: "Taux de Satisfaction" },
    { number: "24/7", label: "Support Disponible" },
    { number: "0", label: "Breach Non Résolu" }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Témoignages Clients
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Découvrez pourquoi nos clients nous font confiance pour leur cybersécurité
            </p>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{testimonial.avatar}</span>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm font-medium text-blue-600">{testimonial.company}</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 mb-4 leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </blockquote>

                {/* Sector Badge */}
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {testimonial.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">
              Ils Nous Ont Fait Confiance
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-6xl mb-4">🏦</div>
                <div className="font-semibold text-slate-900">Secteur Bancaire</div>
                <div className="text-sm text-gray-600">15+ banques sécurisées</div>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🏥</div>
                <div className="font-semibold text-slate-900">Santé</div>
                <div className="text-sm text-gray-600">50+ établissements</div>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🏭</div>
                <div className="font-semibold text-slate-900">Industrie</div>
                <div className="text-sm text-gray-600">100+ sites industriels</div>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🏛️</div>
                <div className="font-semibold text-slate-900">Secteur Public</div>
                <div className="text-sm text-gray-600">30+ collectivités</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Certifications & Reconnaissances
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">🏆</div>
                  <div className="font-semibold">ANSSI Certifié</div>
                  <div className="text-sm text-gray-600">Qualification de sécurité</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">🔒</div>
                  <div className="font-semibold">ISO 27001</div>
                  <div className="text-sm text-gray-600">Management de la sécurité</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">⭐</div>
                  <div className="font-semibold">Prix Excellence</div>
                  <div className="text-sm text-gray-600">Cybersécurité 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Rejoignez Nos Clients Satisfaits
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Découvrez comment nous pouvons transformer la sécurité de votre entreprise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Demander un Devis
            </a>
            <a 
              href="/portfolio"
              className="inline-block px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300"
            >
              Voir Nos Réalisations
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 