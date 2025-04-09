'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const services = [
  {
    title: "Protection Essentielle",
    price: "À partir de",
    amount: "299",
    period: "€/mois",
    description: "Solution de base pour les petites entreprises",
    features: [
      "Analyse de vulnérabilités mensuelle",
      "Protection anti-malware",
      "Support technique 9h-18h",
      "Rapports de sécurité hebdomadaires",
      "Formation de base à la sécurité",
      "Protection des emails",
      "Sauvegarde quotidienne"
    ],
    cta: "Démarrer l'évaluation",
    popular: false
  },
  {
    title: "Protection Pro",
    price: "À partir de",
    amount: "699",
    period: "€/mois",
    description: "Solution complète pour les PME",
    features: [
      "Analyse de vulnérabilités hebdomadaire",
      "Protection anti-malware avancée",
      "Support technique 24/7",
      "Rapports de sécurité quotidiens",
      "Formation avancée à la sécurité",
      "Détection d'intrusion",
      "Gestion des accès",
      "Sauvegarde des données",
      "Protection des endpoints",
      "VPN sécurisé"
    ],
    cta: "Démarrer l'évaluation",
    popular: true
  },
  {
    title: "Protection Entreprise",
    price: "À partir de",
    amount: "1499",
    period: "€/mois",
    description: "Solution complète pour les grandes entreprises",
    features: [
      "Analyse de vulnérabilités en temps réel",
      "Protection complète multi-niveaux",
      "Support technique dédié 24/7",
      "Rapports de sécurité en temps réel",
      "Formation personnalisée",
      "Système de détection avancé",
      "Gestion des identités",
      "Sauvegarde et récupération",
      "Conformité RGPD",
      "Audit de sécurité régulier",
      "SIEM avancé",
      "Protection cloud"
    ],
    cta: "Démarrer l'évaluation",
    popular: false
  }
]

const additionalServices = [
  {
    title: "Audit de Sécurité",
    description: "Analyse approfondie de votre infrastructure et identification des vulnérabilités",
    price: "À partir de 2 500€",
    features: [
      "Analyse complète des systèmes",
      "Test de pénétration",
      "Rapport détaillé",
      "Recommandations personnalisées",
      "Plan d'action priorisé"
    ]
  },
  {
    title: "Formation à la Sécurité",
    description: "Programmes de formation adaptés à vos équipes",
    price: "À partir de 1 500€/jour",
    features: [
      "Formation sur mesure",
      "Simulations d'attaques",
      "Support post-formation",
      "Évaluation des compétences",
      "Certification interne"
    ]
  },
  {
    title: "Gestion des Incidents",
    description: "Réponse rapide et efficace aux incidents de sécurité",
    price: "À partir de 3 000€/incident",
    features: [
      "Analyse immédiate",
      "Containement de la menace",
      "Restauration des systèmes",
      "Rapport d'incident",
      "Plan de prévention"
    ]
  },
  {
    title: "Conformité RGPD",
    description: "Mise en conformité avec le RGPD et autres réglementations",
    price: "À partir de 4 000€",
    features: [
      "Audit de conformité",
      "Mise en place des processus",
      "Formation des équipes",
      "Documentation légale",
      "Support continu"
    ]
  }
]

const comparisonFeatures = [
  "Analyse de vulnérabilités",
  "Protection anti-malware",
  "Support technique",
  "Rapports de sécurité",
  "Formation",
  "Détection d'intrusion",
  "Gestion des accès",
  "Sauvegarde des données",
  "Protection des endpoints",
  "VPN sécurisé",
  "SIEM avancé",
  "Protection cloud",
  "SOC dédié",
  "Tests de pénétration",
  "Conformité RGPD"
]

const faqItems = [
  {
    question: "Quelle est la durée minimale d'engagement ?",
    answer: "Nos contrats sont flexibles, avec un engagement minimum de 3 mois pour les services essentiels et 6 mois pour les services avancés. Nous proposons également des contrats annuels avec des réductions allant jusqu'à 20%."
  },
  {
    question: "Comment se déroule la mise en place ?",
    answer: "Nous commençons par une évaluation complète de vos besoins, suivie d'une phase de déploiement progressive sur 2 à 4 semaines selon le niveau de service choisi. Notre équipe reste à votre disposition tout au long du processus pour assurer une transition en douceur."
  },
  {
    question: "Proposez-vous des services à l'étranger ?",
    answer: "Oui, nous opérons dans toute l'Europe et pouvons adapter nos services selon les réglementations locales. Nous avons des équipes locales dans plusieurs pays et des partenariats stratégiques pour assurer une couverture complète."
  },
  {
    question: "Quelle est votre disponibilité en cas d'urgence ?",
    answer: "Nous offrons un support 24/7 pour tous nos services, avec des temps de réponse garantis selon votre niveau de service. Pour les urgences critiques, notre temps de réponse est de moins de 15 minutes."
  },
  {
    question: "Comment sont calculés les prix ?",
    answer: "Nos prix sont basés sur plusieurs facteurs : le nombre d'utilisateurs, la taille de votre infrastructure, le niveau de service choisi, et les services additionnels requis. Nous proposons des tarifs dégressifs pour les grandes entreprises."
  },
  {
    question: "Quelle est votre politique de mise à jour ?",
    answer: "Nous effectuons des mises à jour régulières de nos systèmes de sécurité pour contrer les nouvelles menaces. Ces mises à jour sont incluses dans tous nos forfaits et sont appliquées automatiquement pour garantir une protection optimale."
  },
  {
    question: "Proposez-vous des audits de sécurité ?",
    answer: "Oui, nous proposons des audits de sécurité complets, incluant des tests de pénétration, des analyses de vulnérabilités, et des évaluations de conformité. Ces audits peuvent être ponctuels ou réguliers selon vos besoins."
  },
  {
    question: "Comment gérez-vous la formation de nos équipes ?",
    answer: "Nous proposons des programmes de formation sur mesure, adaptés à vos besoins spécifiques. Ces formations peuvent être en présentiel ou en ligne, et incluent des simulations d'attaques pour une meilleure préparation."
  }
]

export default function ServicesPage() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [calculatorInputs, setCalculatorInputs] = useState({
    users: 10,
    serviceLevel: 'essential',
    additionalServices: [] as string[],
    contractDuration: 'monthly'
  })
  const [showTooltip, setShowTooltip] = useState<string | null>(null)

  const calculatePrice = () => {
    let basePrice = 0
    switch (calculatorInputs.serviceLevel) {
      case 'essential':
        basePrice = 299
        break
      case 'pro':
        basePrice = 699
        break
      case 'enterprise':
        basePrice = 1499
        break
      default:
        basePrice = 299
    }

    // Calculate user-based pricing
    const userMultiplier = Math.ceil(calculatorInputs.users / 10)
    let totalPrice = basePrice * userMultiplier

    // Add additional services
    calculatorInputs.additionalServices.forEach(service => {
      switch (service) {
        case 'audit':
          totalPrice += 2500
          break
        case 'training':
          totalPrice += 1500
          break
        case 'incident':
          totalPrice += 3000
          break
        case 'gdpr':
          totalPrice += 4000
          break
      }
    })

    // Apply contract duration discount
    if (calculatorInputs.contractDuration === 'yearly') {
      totalPrice = totalPrice * 12 * 0.8 // 20% discount for yearly contracts
    }

    return totalPrice
  }

  const getPricePerMonth = () => {
    const totalPrice = calculatePrice()
    return calculatorInputs.contractDuration === 'yearly' ? totalPrice / 12 : totalPrice
  }

  return (
    <main className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500"
            >
              Nos Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto"
            >
              Des solutions de cybersécurité adaptées à vos besoins, avec des niveaux de protection personnalisables
            </motion.p>
          </div>

          {/* Pricing Tiers */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative group"
                >
                  {service.popular && (
                    <motion.div 
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Plus populaire
                      </span>
                    </motion.div>
                  )}
                  <motion.div 
                    className={`relative bg-slate-800/50 p-8 rounded-lg border border-slate-700 group-hover:border-cyan-500 transition-all duration-300 h-full overflow-hidden ${
                      service.popular ? 'scale-105' : ''
                    }`}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Hover effect background */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Glow effect */}
                    <motion.div 
                      className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"
                      initial={{ scale: 0.95 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Header section */}
                    <div className="relative mb-8">
                      <h3 className="text-2xl font-bold mb-2 text-slate-100 group-hover:text-cyan-500 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>

                    {/* Price section */}
                    <div className="relative mb-8">
                      <span className="text-slate-400 text-sm">{service.price}</span>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300">
                          {service.amount}
                        </span>
                        <span className="text-slate-400 ml-2">{service.period}</span>
                      </div>
                    </div>

                    {/* Features section */}
                    <div className="relative mb-8">
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li 
                            key={featureIndex} 
                            className="flex items-center text-slate-300 group-hover:text-slate-200 transition-colors duration-300"
                            initial={{ x: -20 }}
                            animate={{ x: 0 }}
                            transition={{ delay: 0.6 + featureIndex * 0.1 }}
                          >
                            <svg className="w-5 h-5 text-cyan-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA section */}
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href="/contact"
                        className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                          service.popular
                            ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900'
                            : 'bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600 text-slate-900'
                        }`}
                      >
                        {service.cta}
                      </Link>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mb-20 overflow-x-auto">
            <div className="min-w-[800px]">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500"
              >
                Comparaison des Services
              </motion.h2>
              
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="p-4 text-left text-slate-300">Fonctionnalités</th>
                    {services.map((service, index) => (
                      <th key={index} className="p-4 text-center text-slate-300">
                        {service.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr
                      key={index}
                      className={`border-b border-slate-700 hover:bg-slate-800/50 cursor-pointer ${
                        selectedFeature === feature ? 'bg-slate-800/50' : ''
                      }`}
                      onClick={() => setSelectedFeature(feature === selectedFeature ? null : feature)}
                    >
                      <td className="p-4 text-slate-300">{feature}</td>
                      {services.map((service, serviceIndex) => (
                        <td key={serviceIndex} className="p-4 text-center">
                          {service.features.includes(feature) ? (
                            <svg className="w-6 h-6 text-cyan-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <span className="text-slate-500">-</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Services */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500"
            >
              Services Additionnels
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto mb-12"
            >
              Des services spécialisés pour répondre à vos besoins spécifiques
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 hover:border-cyan-500 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold mb-2 text-slate-100">{service.title}</h3>
                  <p className="text-slate-400 mb-4">{service.description}</p>
                  <p className="text-cyan-500 font-semibold mb-6">{service.price}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <svg className="w-5 h-5 text-cyan-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-900 rounded-lg font-semibold transition-colors duration-300"
                  >
                    En savoir plus
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced FAQ Section */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500"
            >
              Questions Fréquentes
            </motion.h2>
            
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                  >
                    <h3 className="text-xl font-semibold text-slate-100">{faq.question}</h3>
                    <svg
                      className={`w-6 h-6 text-cyan-500 transform transition-transform duration-200 ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-6 pb-6"
                      >
                        <p className="text-slate-300">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced Pricing Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 mb-20"
          >
            <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500">
              Calculateur de Prix
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Nombre d&apos;utilisateurs
                </label>
                <input
                  type="number"
                  min="1"
                  value={calculatorInputs.users}
                  onChange={(e) => setCalculatorInputs({ ...calculatorInputs, users: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-100"
                />
                <button
                  onMouseEnter={() => setShowTooltip('users')}
                  onMouseLeave={() => setShowTooltip(null)}
                  className="absolute right-2 top-8 text-slate-400 hover:text-slate-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                {showTooltip === 'users' && (
                  <div className="absolute right-0 top-12 bg-slate-700 p-2 rounded-lg text-sm text-slate-300 w-64 z-10">
                    Le prix est calculé par tranche de 10 utilisateurs. Par exemple, 15 utilisateurs seront facturés comme 20 utilisateurs.
                  </div>
                )}
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Niveau de service
                </label>
                <select
                  value={calculatorInputs.serviceLevel}
                  onChange={(e) => setCalculatorInputs({ ...calculatorInputs, serviceLevel: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-100"
                >
                  <option value="essential">Protection Essentielle</option>
                  <option value="pro">Protection Pro</option>
                  <option value="enterprise">Protection Entreprise</option>
                </select>
                <button
                  onMouseEnter={() => setShowTooltip('service')}
                  onMouseLeave={() => setShowTooltip(null)}
                  className="absolute right-2 top-8 text-slate-400 hover:text-slate-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                {showTooltip === 'service' && (
                  <div className="absolute right-0 top-12 bg-slate-700 p-2 rounded-lg text-sm text-slate-300 w-64 z-10">
                    Choisissez le niveau de service qui correspond à vos besoins en termes de protection et de support.
                  </div>
                )}
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Services additionnels
                </label>
                <select
                  multiple
                  value={calculatorInputs.additionalServices}
                  onChange={(e) => {
                    const options = Array.from(e.target.selectedOptions, option => option.value)
                    setCalculatorInputs({ ...calculatorInputs, additionalServices: options })
                  }}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-100"
                >
                  <option value="audit">Audit de Sécurité</option>
                  <option value="training">Formation</option>
                  <option value="incident">Gestion des Incidents</option>
                  <option value="gdpr">Conformité RGPD</option>
                </select>
                <button
                  onMouseEnter={() => setShowTooltip('additional')}
                  onMouseLeave={() => setShowTooltip(null)}
                  className="absolute right-2 top-8 text-slate-400 hover:text-slate-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                {showTooltip === 'additional' && (
                  <div className="absolute right-0 top-12 bg-slate-700 p-2 rounded-lg text-sm text-slate-300 w-64 z-10">
                    Sélectionnez les services additionnels dont vous avez besoin. Maintenez Ctrl (ou Cmd) pour sélectionner plusieurs options.
                  </div>
                )}
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Durée du contrat
                </label>
                <select
                  value={calculatorInputs.contractDuration}
                  onChange={(e) => setCalculatorInputs({ ...calculatorInputs, contractDuration: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-100"
                >
                  <option value="monthly">Mensuel</option>
                  <option value="yearly">Annuel (-20%)</option>
                </select>
                <button
                  onMouseEnter={() => setShowTooltip('duration')}
                  onMouseLeave={() => setShowTooltip(null)}
                  className="absolute right-2 top-8 text-slate-400 hover:text-slate-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                {showTooltip === 'duration' && (
                  <div className="absolute right-0 top-12 bg-slate-700 p-2 rounded-lg text-sm text-slate-300 w-64 z-10">
                    Les contrats annuels bénéficient d&apos;une réduction de 20% par rapport au tarif mensuel.
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-100 mb-4">Récapitulatif</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Prix de base</span>
                    <span className="text-slate-100">{getPricePerMonth().toFixed(2)}€/mois</span>
                  </div>
                  {calculatorInputs.additionalServices.length > 0 && (
                    <div className="border-t border-slate-600 pt-4">
                      <h4 className="text-slate-300 mb-2">Services additionnels</h4>
                      {calculatorInputs.additionalServices.map((service, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-slate-400">
                            {service === 'audit' && 'Audit de Sécurité'}
                            {service === 'training' && 'Formation'}
                            {service === 'incident' && 'Gestion des Incidents'}
                            {service === 'gdpr' && 'Conformité RGPD'}
                          </span>
                          <span className="text-slate-300">
                            {service === 'audit' && '2 500€'}
                            {service === 'training' && '1 500€'}
                            {service === 'incident' && '3 000€'}
                            {service === 'gdpr' && '4 000€'}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="border-t border-slate-600 pt-4">
                    <div className="flex justify-between">
                      <span className="text-slate-100 font-semibold">Total {calculatorInputs.contractDuration === 'yearly' ? 'annuel' : 'mensuel'}</span>
                      <span className="text-cyan-500 font-bold text-xl">
                        {calculatorInputs.contractDuration === 'yearly' 
                          ? `${calculatePrice().toFixed(2)}€/an`
                          : `${calculatePrice().toFixed(2)}€/mois`}
                      </span>
                    </div>
                    {calculatorInputs.contractDuration === 'yearly' && (
                      <p className="text-sm text-slate-400 mt-2">
                        Équivalent à {(calculatePrice() / 12).toFixed(2)}€/mois
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-slate-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-100 mb-4">Prochaines étapes</h3>
                <p className="text-slate-300 mb-6">
                  Votre estimation est prête ! Contactez-nous pour finaliser votre demande et bénéficier d&apos;une évaluation personnalisée.
                </p>
                <Link
                  href="/contact"
                  className="inline-block w-full text-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-lg transition-colors duration-300"
                >
                  Prendre contact
                </Link>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
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