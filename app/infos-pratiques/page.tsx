'use client'

import Link from 'next/link'
import { SocialIcon } from 'react-social-icons'

export default function InfosPratiques() {
  const contactInfo = {
    phone: '+33 7 68 10 90 40',
    email: 'nicolas.bellencontre@outlook.fr',
    linkedinPersonal: 'https://www.linkedin.com/in/nicolas-bellencontre-287427303',
    linkedinCompany: 'https://www.linkedin.com/company/citadel-cybers%C3%A9curit%C3%A9/about/'
  }

  const faq = [
    {
      question: "Quels services proposez-vous exactement ?",
      answer:
        "Nous réalisons des audits de sécurité professionnels (avec contre-audit), des tests d’intrusion (web, système, Wi-Fi) et des programmes de sensibilisation adaptés aux équipes et aux dirigeants."
    },
    {
      question: "Faites-vous de la surveillance 24/7 ou du support en continu ?",
      answer:
        "Non. Notre cœur de métier est l’audit, le pentest et la formation. Nous intervenons en missions ponctuelles, puis proposons un contre-audit pour valider les corrections."
    },
    {
      question: "Intervenez-vous sur site ou à distance ?",
      answer:
        "Les deux. Nous sommes basés à Orléans et intervenons à distance partout en France. Les tests sur site sont possibles selon le périmètre défini lors du cadrage."
    },
    {
      question: "Quelle est la différence entre un audit et un pentest ?",
      answer:
        "L’audit vérifie en largeur les configurations et bonnes pratiques. Le pentest simule des attaques pour mesurer le risque réel en exploitant des failles comme un attaquant."
    },
    {
      question: "Proposez-vous un contre-audit après corrections ?",
      answer:
        "Oui. Le contre-audit (ou retest) permet de vérifier l’efficacité des corrections et de mettre à jour le rapport."
    },
    {
      question: "Pouvez-vous former nos équipes ?",
      answer:
        "Oui. Nous organisons des ateliers de sensibilisation (cyberhygiène, mots de passe, usages sûrs) avec des supports réutilisables et des formats dédiés dirigeants/équipes."
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
              L’essentiel pour travailler avec CITADEL Cybersécurité
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Nous contacter</h2>

            {/* Téléphone */}
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

            {/* Email */}
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

            {/* LinkedIn perso */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.5h5V24H0V8.5zM8.5 8.5h4.8v2.1h.1c.7-1.3 2.4-2.7 5-2.7 5.3 0 6.3 3.5 6.3 8V24h-5V16c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8.5z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-slate-900">LinkedIn (Nicolas Bellencontre)</div>
                <a href={contactInfo.linkedinPersonal} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Voir le profil
                </a>
              </div>
            </div>

            {/* LinkedIn entreprise */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.5h5V24H0V8.5zM8.5 8.5h4.8v2.1h.1c.7-1.3 2.4-2.7 5-2.7 5.3 0 6.3 3.5 6.3 8V24h-5V16c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8.5z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-slate-900">LinkedIn (Citadel Cybersécurité)</div>
                <a href={contactInfo.linkedinCompany} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Voir la page
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Questions fréquentes
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

      {/* CTA final */}
      <section className="py-16 relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à tester vos défenses ?
          </h2>

          <p className="text-blue-100 mb-8">
            Audit, pentest, sensibilisation — priorité à l’impact et aux actions concrètes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-8 py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition shadow-lg hover:shadow-xl"
            >
              Parcourir les services
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent border border-white text-white font-bold rounded-lg hover:bg-white/10 transition"
            >
              Nous contacter
            </Link>
          </div>
          <div className="flex justify-center items-center gap-6 mt-8">
            {/* LinkedIn Entreprise */}
            <a
              href="https://www.linkedin.com/company/citadel-cybers%C3%A9curit%C3%A9/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
            >
              <SocialIcon
                url="https://www.linkedin.com/company/citadel-cybers%C3%A9curit%C3%A9/about/"
                fgColor="#ffffff"
                bgColor="transparent"
                style={{ height: 30, width: 30 }}
              />
              <span className="text-white text-sm font-medium">CITADEL</span>
            </a>

            {/* LinkedIn Perso */}
            <a
              href="https://linkedin.com/in/nicolas-bellencontre-287427303"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
            >
              <SocialIcon
                url="https://linkedin.com/in/nicolas-bellencontre-287427303"
                fgColor="#ffffff"
                bgColor="transparent"
                style={{ height: 30, width: 30 }}
              />
              <span className="text-white text-sm font-medium">Nicolas Bellencontre</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
