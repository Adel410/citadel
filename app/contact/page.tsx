'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    _gotcha: '' // honeypot anti-spam
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeozblnl'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _subject: `Contact – ${formData.service || 'Demande'}`,
          _gotcha: formData._gotcha
        })
      })

      if (!res.ok) throw new Error('send_failed')
      setSubmitted(true)
    } catch {
      alert("Erreur lors de l'envoi. Réessaie dans un instant.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const contactInfo = [
    {
      title: 'Téléphone',
      subtitle: 'Lun–Ven 9h–18h',
      value: '+33 7 68 10 90 40',
      icon: '📞'
    },
    {
      title: 'Email',
      subtitle: 'Réponse sous 24h ouvrées',
      value: 'nicolas.bellencontre@outlook.fr',
      icon: '✉️'
    }
  ]

  const services = [
    'Audit de sécurité',
    'Tests d’intrusion (Pentest)',
    'Sensibilisation des collaborateurs',
    'Autre'
  ]

  if (submitted) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Message envoyé</h1>
          <p className="text-gray-600 mb-8">
            Merci pour votre demande. Nous revenons vers vous rapidement.
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
                message: '',
                _gotcha: ''
              })
            }}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Nouveau message
          </button>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="px-5 py-3 bg-slate-100 rounded-lg hover:bg-slate-200">
              Retour à l’accueil
            </Link>
            <Link href="/services" className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Voir nos services
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Contact
            </h1>
            <p className="text-xl text-gray-300 mb-2">
              Parlons de votre besoin en audit, pentest ou sensibilisation
            </p>
          </div>
        </div>
      </section>

      {/* Form + Infos */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Formulaire */}
              <div className="bg-slate-50 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Nous écrire</h2>
                <p className="text-gray-600 mb-8">
                  Décrivez votre contexte et vos objectifs — nous revenons vers vous rapidement.
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
                        required
                        className="w-full px-4 py-3 bg-white text-slate-900 placeholder-slate-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
                        required
                        className="w-full px-4 py-3 bg-white text-slate-900 placeholder-slate-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
                        required
                        className="w-full px-4 py-3 bg-white text-slate-900 placeholder-slate-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
                        className="w-full px-4 py-3 bg-white text-slate-900 placeholder-slate-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
                      required
                      className="w-full px-4 py-3 bg-white text-slate-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option value="">Sélectionnez un service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                      Votre message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Décrivez votre contexte, vos contraintes et vos objectifs…"
                      required
                      className="w-full px-4 py-3 bg-white text-slate-900 placeholder-slate-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>

                  {/* Honeypot anti-spam */}
                  <input
                    type="text"
                    name="_gotcha"
                    value={formData._gotcha}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : (
                      'Envoyer'
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    En soumettant ce formulaire, vous acceptez d&apos;être contacté par notre équipe.
                  </p>
                </form>
              </div>

              {/* Infos de contact */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Informations de contact</h2>

                <div className="space-y-6 mb-12">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
                    >
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
                  <h3 className="text-2xl font-bold mb-4">Premier échange</h3>
                  <p className="mb-6 text-blue-100">
                    Besoin d’un premier cadrage ? Discutons de votre contexte et des livrables attendus.
                  </p>
                  <a
                    href="tel:+33768109040"
                    className="inline-block px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    📞 Appeler le +33 7 68 10 90 40
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Vous voulez en savoir plus ?</h2>
          <p className="text-gray-600 mb-8">Découvrez nos services ou retournez à l’accueil.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
            >
              Retour à l’accueil
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition"
            >
              Voir nos services
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
