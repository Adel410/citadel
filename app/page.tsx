'use client'

import Link from 'next/link'
import ServiceCard from './components/ServiceCard'
import Particles from './components/Particles'
import WhyChooseUs from './components/WhyChooseUs'
import Process from './components/Process'
import Testimonials from './components/Testimonials'

const services = [
  {
    title: "Audit de sécurité",
    description: "Analyse approfondie de votre infrastructure, identification des vulnérabilités critiques, rapport détaillé et priorisé.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Protection des données",
    description: "Chiffrement de bout en bout, gestion sécurisée des accès, conformité RGPD garantie.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    title: "Contre-mesures actives",
    description: "Systèmes de détection d'intrusion, protection DDoS avancée, surveillance 24/7 par nos experts.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    )
  },
  {
    title: "Formation et sensibilisation",
    description: "Programmes sur mesure pour vos équipes, simulations d'attaques phishing, création d'une culture de cybersécurité.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  }
]

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-indigo-900/20">
          <Particles />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          {/* Animated title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500 animate-gradient">
            CITADEL
          </h1>
          
          {/* Animated subtitle */}
          <h2 className="text-2xl md:text-3xl text-slate-300 mb-8 animate-fade-in">
            La forteresse numérique de votre entreprise
          </h2>
          
          {/* Description with typing effect */}
          <p className="text-xl text-slate-400 mb-12 max-w-2xl animate-fade-in-up">
            Protection avancée contre les cybermenaces modernes
          </p>
          
          {/* Enhanced CTA button */}
          <Link 
            href="/contact"
            className="group relative px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-lg transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Évaluation de sécurité gratuite</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 bg-slate-800">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="relative container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500">
            Nos services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Process Section */}
      <Process />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <section className="relative py-20 bg-slate-800">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500">
              Prêt à sécuriser votre entreprise ?
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              Contactez-nous pour une évaluation gratuite de votre sécurité
            </p>
            <Link 
              href="/contact"
              className="inline-block px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-lg transition-all duration-300"
            >
              Prendre contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
