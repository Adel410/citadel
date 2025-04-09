'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const teamMembers = [
  {
    name: "Jean Dupont",
    role: "CEO & Fondateur",
    image: "/team/jean-dupont.jpg",
    description: "Expert en cybersécurité avec plus de 15 ans d'expérience dans la protection des entreprises."
  },
  {
    name: "Marie Laurent",
    role: "Directrice Technique",
    image: "/team/marie-laurent.jpg",
    description: "Spécialiste en architecture de sécurité et gestion des risques."
  },
  {
    name: "Thomas Martin",
    role: "Responsable des Opérations",
    image: "/team/thomas-martin.jpg",
    description: "Expert en gestion des incidents et réponse aux cyberattaques."
  },
  {
    name: "Sophie Bernard",
    role: "Responsable Formation",
    image: "/team/sophie-bernard.jpg",
    description: "Formatrice certifiée en sécurité informatique et sensibilisation."
  }
]

const values = [
  {
    title: "Excellence",
    description: "Nous nous engageons à fournir des solutions de sécurité de la plus haute qualité.",
    icon: (
      <svg className="w-8 h-8 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )
  },
  {
    title: "Innovation",
    description: "Nous restons à la pointe de la technologie pour anticiper les menaces futures.",
    icon: (
      <svg className="w-8 h-8 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Confidentialité",
    description: "La protection de vos données est notre priorité absolue.",
    icon: (
      <svg className="w-8 h-8 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    title: "Engagement",
    description: "Nous nous engageons à être votre partenaire de confiance en cybersécurité.",
    icon: (
      <svg className="w-8 h-8 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500"
            >
              À propos de CITADEL
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto"
            >
              Leader en cybersécurité, nous protégeons les entreprises contre les menaces numériques depuis plus de 10 ans.
            </motion.p>
          </div>

          {/* Company Story */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-slate-100">Notre Histoire</h2>
                <p className="text-slate-300 mb-4">
                  Fondée en 2013, CITADEL est née d&apos;une vision simple : protéger les entreprises contre les menaces croissantes du monde numérique.
                </p>
                <p className="text-slate-300 mb-4">
                  Notre équipe d&apos;experts en cybersécurité travaille sans relâche pour développer des solutions innovantes et adaptées aux besoins de nos clients.
                </p>
                <p className="text-slate-300">
                  Aujourd&apos;hui, nous sommes fiers de protéger plus de 500 entreprises à travers l&apos;Europe, avec un taux de satisfaction client de 98%.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-slate-800/50 p-8 rounded-lg border border-slate-700"
              >
                <h3 className="text-2xl font-bold mb-4 text-slate-100">Nos Chiffres Clés</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-cyan-500 mb-2">500+</p>
                    <p className="text-slate-300">Clients Satisfaits</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-cyan-500 mb-2">98%</p>
                    <p className="text-slate-300">Taux de Satisfaction</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-cyan-500 mb-2">24/7</p>
                    <p className="text-slate-300">Support Disponible</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-cyan-500 mb-2">10+</p>
                    <p className="text-slate-300">Ans d&apos;Expérience</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-3xl font-bold mb-12 text-center text-slate-100"
            >
              Nos Valeurs
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 hover:border-cyan-500 transition-all duration-300"
                >
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-slate-100">{value.title}</h3>
                  <p className="text-slate-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-3xl font-bold mb-12 text-center text-slate-100"
            >
              Notre Équipe
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 hover:border-cyan-500 transition-all duration-300"
                >
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-slate-700 overflow-hidden">
                    {/* Placeholder for team member image */}
                    <div className="w-full h-full bg-slate-600 flex items-center justify-center">
                      <span className="text-4xl text-slate-400">{member.name.charAt(0)}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center text-slate-100">{member.name}</h3>
                  <p className="text-cyan-500 text-center mb-4">{member.role}</p>
                  <p className="text-slate-300 text-center">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-center bg-slate-800/50 p-12 rounded-lg border border-slate-700"
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500">
              Prêt à sécuriser votre entreprise ?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour une évaluation gratuite de vos besoins en sécurité
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-lg transition-colors duration-300"
            >
              Prendre contact
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
} 