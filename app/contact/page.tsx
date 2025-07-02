'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const contactInfo = [
    {
      title: "Urgences Cybersécurité",
      subtitle: "Disponible 24h/24, 7j/7",
      value: "+33 1 23 45 67 90",
      icon: "🚨",
      color: "red"
    },
    {
      title: "Commercial",
      subtitle: "Lun-Ven 8h-18h",
      value: "+33 1 23 45 67 89",
      icon: "📞", 
      color: "blue"
    },
    {
      title: "Email",
      subtitle: "Réponse sous 2h",
      value: "contact@citadel-security.fr",
      icon: "✉️",
      color: "green"
    },
    {
      title: "Adresse",
      subtitle: "Siège social",
      value: "123 Avenue de la Cybersécurité\n75001 Paris, France",
      icon: "📍",
      color: "purple"
    }
  ]

  const services = [
    "Audit de sécurité",
    "Protection des données", 
    "Surveillance continue",
    "Réponse aux incidents",
    "Formation sécurité",
    "Architecture sécurisée",
    "Autre"
  ]

  if (submitted) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Message Envoyé !
          </h1>
          <p className="text-gray-600 mb-8">
            Merci pour votre demande. Notre équipe vous contactera dans les plus brefs délais.
          </p>
          <button 
            onClick={() => {
              setSubmitted(false)
              setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                service: '',
                message: ''
              })
            }}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Nouveau Message
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Contactez-Nous
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Notre équipe d&apos;experts est disponible pour répondre à tous vos besoins en cybersécurité
            </p>
                         <div className="grid md:grid-cols-3 gap-8 text-center">
               <div>
                 <div className="text-3xl font-bold text-blue-400">&lt; 15min</div>
                 <div className="text-gray-300">Temps de Réponse Urgence</div>
               </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">24/7</div>
                <div className="text-gray-300">Support Disponible</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">2h</div>
                <div className="text-gray-300">Réponse Email Garantie</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-slate-50 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Demande de Devis Gratuit
                </h2>
                <p className="text-gray-600 mb-8">
                  Remplissez ce formulaire et recevez votre évaluation de sécurité personnalisée.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                        Email professionnel *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-2">
                        Entreprise *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-900 mb-2">
                      Service souhaité *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                    >
                      <option value="">Sélectionnez un service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                      Décrivez vos besoins *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Décrivez votre contexte, vos défis sécurité et vos objectifs..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : (
                      'Envoyer ma Demande'
                    )}
                  </button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    En soumettant ce formulaire, vous acceptez d&apos;être contacté par notre équipe commerciale.
                  </p>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  Informations de Contact
                </h2>
                
                <div className="space-y-6 mb-12">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="text-4xl mr-4">{info.icon}</div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">{info.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">{info.subtitle}</p>
                        <p className="text-gray-700 whitespace-pre-line">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Audit Gratuit Immédiat</h3>
                  <p className="mb-6 text-blue-100">
                    Besoin d&apos;une évaluation rapide ? Appelez notre hotline pour un premier diagnostic gratuit.
                  </p>
                  <a 
                    href="tel:+33123456789"
                    className="inline-block px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    📞 Appeler Maintenant
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Contact */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">
              Questions Fréquentes sur Nos Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-3">Combien de temps pour un premier audit ?</h3>
                <p className="text-gray-600">Un audit express peut être réalisé en 2-3 jours. Nous proposons également un pré-diagnostic gratuit par téléphone en 30 minutes.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-3">Travaillez-vous avec les PME ?</h3>
                <p className="text-gray-600">Absolument ! Nous avons des solutions adaptées à tous les budgets, des startups aux grandes entreprises.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-3">Comment se passe l&apos;intervention d&apos;urgence ?</h3>
                <p className="text-gray-600">Appel de notre hotline 24/7, première réponse sous 15 minutes, intervention sur site sous 2h en région parisienne.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-3">Proposez-vous des contrats de maintenance ?</h3>
                <p className="text-gray-600">Oui, nous offrons des contrats de surveillance continue avec monitoring 24/7 et mises à jour régulières.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 