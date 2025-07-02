'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              CITADEL
            </h1>
            <h2 className="text-2xl lg:text-3xl font-light mb-8 text-blue-100">
              Votre Bouclier Numérique de Confiance
            </h2>
            <p className="text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Nous protégeons votre entreprise contre les cybermenaces les plus sophistiquées avec des solutions de sécurité sur mesure et une expertise reconnue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Audit Gratuit
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Nos Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Core */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Protection Complète de Votre Écosystème Digital
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions de cybersécurité adaptées à chaque défi de votre entreprise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group p-8 bg-slate-50 hover:bg-blue-50 rounded-xl transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Audit de Sécurité</h3>
                             <p className="text-gray-600">
                 Évaluation complète de vos systèmes, identification des vulnérabilités et plan d&apos;action prioritaire.
               </p>
            </div>

            {/* Service 2 */}
            <div className="group p-8 bg-slate-50 hover:bg-blue-50 rounded-xl transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Protection des Données</h3>
              <p className="text-gray-600">
                Chiffrement avancé, sauvegarde sécurisée et conformité réglementaire (RGPD, ISO 27001).
              </p>
            </div>

            {/* Service 3 */}
            <div className="group p-8 bg-slate-50 hover:bg-blue-50 rounded-xl transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Réponse aux Incidents</h3>
              <p className="text-gray-600">
                Intervention rapide 24/7, containment des menaces et restauration sécurisée de vos systèmes.
              </p>
            </div>

            {/* Service 4 */}
            <div className="group p-8 bg-slate-50 hover:bg-blue-50 rounded-xl transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Surveillance Continue</h3>
                             <p className="text-gray-600">
                 Monitoring en temps réel, détection d&apos;anomalies et veille proactive des menaces.
               </p>
            </div>

            {/* Service 5 */}
            <div className="group p-8 bg-slate-50 hover:bg-blue-50 rounded-xl transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Formation Sécurité</h3>
                             <p className="text-gray-600">
                 Sensibilisation des équipes, tests de phishing et création d&apos;une culture cyber-sécurisée.
               </p>
            </div>

            {/* Service 6 */}
            <div className="group p-8 bg-slate-50 hover:bg-blue-50 rounded-xl transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Architecture Sécurisée</h3>
                             <p className="text-gray-600">
                 Conception et déploiement d&apos;infrastructures résilientes avec sécurité intégrée dès la conception.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Citadel */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Pourquoi Choisir Citadel ?</h2>
              <p className="text-xl text-gray-300">
                Une expertise reconnue au service de votre sécurité digitale
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
                                 <div className="text-lg font-semibold mb-2">Années d&apos;Expérience</div>
                 <p className="text-gray-400">Dans la protection cyber des entreprises</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-lg font-semibold mb-2">Clients Protégés</div>
                <p className="text-gray-400">PME et grandes entreprises sécurisées</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-lg font-semibold mb-2">Support Expert</div>
                <p className="text-gray-400">Surveillance et intervention continues</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-lg font-semibold mb-2">Disponibilité</div>
                <p className="text-gray-400">Garantie de service et de protection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à Sécuriser Votre Entreprise ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Obtenez une évaluation gratuite de votre sécurité et découvrez comment nous pouvons protéger votre business.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Demander un Audit Gratuit
          </Link>
        </div>
      </section>
    </main>
  )
}
