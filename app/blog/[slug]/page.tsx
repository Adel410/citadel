'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useState } from 'react'

const articles = [
  {
    title: "Les 5 Menaces Cyber les Plus Courantes en 2024",
    excerpt: "Découvrez les principales menaces de cybersécurité auxquelles les entreprises doivent faire face cette année et comment les prévenir.",
    image: "/blog/cyber-threats.jpg",
    date: "15 Mars 2024",
    readTime: "5 min",
    category: "Sécurité",
    slug: "menaces-cyber-2024",
    author: {
      name: "Jean Dupont",
      role: "Expert en Cybersécurité",
      image: "/team/jean-dupont.jpg"
    },
    tags: ["Sécurité", "Menaces", "Ransomware", "Phishing"],
    content: `
      <h2>Introduction</h2>
      <p>En 2024, le paysage des menaces cyber continue d&apos;évoluer rapidement, avec de nouvelles techniques d&apos;attaque et des vecteurs de compromission toujours plus sophistiqués. Dans cet article, nous explorons les cinq menaces les plus préoccupantes pour les entreprises cette année.</p>

      <h2>1. Les Attaques Ransomware</h2>
      <p>Les attaques ransomware restent l&apos;une des menaces les plus importantes pour les entreprises. Les attaquants utilisent des techniques de plus en plus avancées pour crypter les données et exiger des rançons.</p>
      <ul>
        <li>Utilisation de l&apos;IA pour cibler les victimes</li>
        <li>Double extorsion (vol et chiffrement des données)</li>
        <li>Attaques sur la chaîne d&apos;approvisionnement</li>
      </ul>

      <h2>2. Le Phishing Évolué</h2>
      <p>Avec l&apos;utilisation croissante de l&apos;IA, les attaques de phishing deviennent plus personnalisées et difficiles à détecter. Les emails frauduleux sont maintenant presque impossibles à distinguer des communications légitimes.</p>
      <ul>
        <li>Deepfake audio et vidéo</li>
        <li>Phishing ciblé (spear phishing)</li>
        <li>Attaques BEC (Business Email Compromise)</li>
      </ul>

      <h2>3. Les Vulnérabilités Zero-Day</h2>
      <p>L&apos;exploitation des vulnérabilités zero-day continue de représenter un risque majeur, avec des attaquants qui ciblent des failles non encore corrigées dans les logiciels populaires.</p>
      <ul>
        <li>Exploitation des failles logicielles</li>
        <li>Attaques sur les systèmes d&apos;exploitation</li>
        <li>Vulnérabilités dans les applications cloud</li>
      </ul>

      <h2>4. Les Attaques sur la Chaîne d&apos;Approvisionnement</h2>
      <p>Les attaquants ciblent de plus en plus les fournisseurs et partenaires des entreprises pour accéder à leurs réseaux, créant ainsi des brèches dans les systèmes de sécurité.</p>
      <ul>
        <li>Compromission des fournisseurs de logiciels</li>
        <li>Attaques sur les services cloud</li>
        <li>Exploitation des relations de confiance</li>
      </ul>

      <h2>5. Les Menaces Internes</h2>
      <p>Les menaces internes, qu&apos;elles soient intentionnelles ou accidentelles, représentent un risque croissant pour les organisations de toutes tailles.</p>
      <ul>
        <li>Accès non autorisé aux données</li>
        <li>Erreurs humaines</li>
        <li>Comportements malveillants</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Pour se protéger contre ces menaces, les entreprises doivent adopter une approche proactive de la sécurité, combinant des solutions techniques avancées avec une formation continue des employés.</p>
    `
  },
  {
    title: "Guide Complet de la Protection des Données",
    excerpt: "Un guide pratique pour mettre en place une stratégie efficace de protection des données dans votre entreprise.",
    image: "/blog/data-protection.jpg",
    date: "10 Mars 2024",
    readTime: "8 min",
    category: "Conformité",
    slug: "protection-donnees",
    author: {
      name: "Marie Laurent",
      role: "Responsable Conformité",
      image: "/team/marie-laurent.jpg"
    },
    tags: ["RGPD", "Conformité", "Protection des données", "Sécurité"],
    content: `
      <h2>Introduction</h2>
      <p>La protection des données est devenue une priorité absolue pour les entreprises de toutes tailles. Ce guide vous aidera à mettre en place une stratégie efficace de protection des données.</p>

      <h2>1. Évaluation des Risques</h2>
      <p>La première étape consiste à identifier et évaluer les risques liés à vos données. Cela inclut la cartographie des flux de données et l&apos;identification des points critiques.</p>
      <ul>
        <li>Inventaire des données sensibles</li>
        <li>Analyse des flux de données</li>
        <li>Évaluation des risques</li>
      </ul>

      <h2>2. Mise en Place des Mesures Techniques</h2>
      <p>Découvrez les solutions techniques essentielles pour protéger vos données, du chiffrement à la gestion des accès.</p>
      <ul>
        <li>Chiffrement des données</li>
        <li>Gestion des accès</li>
        <li>Surveillance des activités</li>
      </ul>

      <h2>3. Conformité Réglementaire</h2>
      <p>Un aperçu des principales réglementations en matière de protection des données et comment s&apos;y conformer.</p>
      <ul>
        <li>RGPD</li>
        <li>Loi Informatique et Libertés</li>
        <li>Règles sectorielles</li>
      </ul>

      <h2>4. Formation et Sensibilisation</h2>
      <p>L&apos;importance de la formation des employés dans la protection des données et comment mettre en place un programme efficace.</p>
      <ul>
        <li>Programmes de formation</li>
        <li>Simulations de phishing</li>
        <li>Politiques de sécurité</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Une stratégie efficace de protection des données nécessite une approche holistique, combinant mesures techniques, processus et formation.</p>
    `
  },
  {
    title: "L&apos;Intelligence Artificielle dans la Cybersécurité",
    excerpt: "Comment l&apos;IA révolutionne la détection et la prévention des cyberattaques.",
    image: "/blog/ai-security.jpg",
    date: "5 Mars 2024",
    readTime: "6 min",
    category: "Innovation",
    slug: "ia-cybersecurite",
    author: {
      name: "Thomas Martin",
      role: "Expert en IA et Sécurité",
      image: "/team/thomas-martin.jpg"
    },
    tags: ["IA", "Machine Learning", "Sécurité", "Innovation"],
    content: `
      <h2>Introduction</h2>
      <p>L&apos;intelligence artificielle transforme le paysage de la cybersécurité, offrant de nouvelles possibilités pour la détection et la prévention des attaques.</p>

      <h2>1. Détection Avancée des Menaces</h2>
      <p>Comment l&apos;IA améliore la détection des menaces en analysant de vastes quantités de données et en identifiant des patterns complexes.</p>
      <ul>
        <li>Analyse comportementale</li>
        <li>Détection d&apos;anomalies</li>
        <li>Prédiction des attaques</li>
      </ul>

      <h2>2. Réponse Automatisée</h2>
      <p>L&apos;utilisation de l&apos;IA pour automatiser la réponse aux incidents de sécurité et réduire les temps de réaction.</p>
      <ul>
        <li>Orchestration de la sécurité</li>
        <li>Réponse automatisée</li>
        <li>Correction automatique</li>
      </ul>

      <h2>3. Prévention Proactive</h2>
      <p>Comment l&apos;IA permet une approche proactive de la sécurité en prédisant et prévenant les attaques potentielles.</p>
      <ul>
        <li>Analyse prédictive</li>
        <li>Évaluation des risques</li>
        <li>Recommandations de sécurité</li>
      </ul>

      <h2>4. Défis et Limites</h2>
      <p>Les défis actuels de l&apos;IA en cybersécurité et les limites à prendre en compte dans son déploiement.</p>
      <ul>
        <li>Faux positifs</li>
        <li>Complexité des modèles</li>
        <li>Besoins en données</li>
      </ul>

      <h2>Conclusion</h2>
      <p>L&apos;IA représente un outil puissant pour la cybersécurité, mais son utilisation doit être complétée par une expertise humaine et des processus robustes.</p>
    `
  }
]

export default function ArticlePage() {
  const params = useParams()
  const article = articles.find(a => a.slug === params.slug)
  const [isSubscribed, setIsSubscribed] = useState(false)

  if (!article) {
    return (
      <main className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-100 mb-4">Article non trouvé</h1>
          <Link href="/blog" className="text-cyan-500 hover:text-cyan-400">
            Retour au blog
          </Link>
        </div>
      </main>
    )
  }

  const relatedArticles = articles
    .filter(a => a.slug !== article.slug)
    .slice(0, 2)

  const handleShare = (platform: string) => {
    const url = window.location.href
    const title = article.title

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`)
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`)
        break
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`)
        break
    }
  }

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubscribed(true)
  }

  return (
    <main className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Article Header */}
          <div className="mb-12">
            <Link
              href="/blog"
              className="inline-flex items-center text-cyan-500 hover:text-cyan-400 mb-8"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour au blog
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-cyan-500">{article.category}</span>
              <span className="text-sm text-slate-400">{article.date}</span>
              <span className="text-sm text-slate-400">{article.readTime} de lecture</span>
            </div>

            <h1 className="text-4xl font-bold mb-6 text-slate-100">{article.title}</h1>
            <p className="text-xl text-slate-300 mb-8">{article.excerpt}</p>

            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-slate-700 flex items-center justify-center">
                  <span className="text-xl text-slate-400">{article.author.name.charAt(0)}</span>
                </div>
              </div>
              <div>
                <p className="text-slate-100 font-medium">{article.author.name}</p>
                <p className="text-slate-400 text-sm">{article.author.role}</p>
              </div>
            </div>

            {/* Article Image */}
            <div className="relative h-96 rounded-lg overflow-hidden mb-8">
              <div className="absolute inset-0 bg-slate-700 flex items-center justify-center">
                <span className="text-6xl text-slate-400">{article.title.charAt(0)}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Social Sharing */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-slate-300">Partager :</span>
              <button
                onClick={() => handleShare('twitter')}
                className="text-slate-400 hover:text-cyan-500 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="text-slate-400 hover:text-cyan-500 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="text-slate-400 hover:text-cyan-500 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          {/* Related Articles */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8 text-slate-100">Articles Similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((relatedArticle, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300"
                >
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-slate-700 flex items-center justify-center">
                      <span className="text-4xl text-slate-400">{relatedArticle.title.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm text-cyan-500">{relatedArticle.category}</span>
                      <span className="text-sm text-slate-400">{relatedArticle.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-100">{relatedArticle.title}</h3>
                    <p className="text-slate-300 mb-6">{relatedArticle.excerpt}</p>
                    <Link
                      href={`/blog/${relatedArticle.slug}`}
                      className="inline-flex items-center text-cyan-500 hover:text-cyan-400 transition-colors duration-300"
                    >
                      Lire l&apos;article
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-20 bg-slate-800/50 p-8 rounded-lg border border-slate-700 text-center">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">Restez informé</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Abonnez-vous à notre newsletter pour recevoir les derniers articles et actualités sur la cybersécurité
            </p>
            {isSubscribed ? (
              <div className="text-cyan-500">
                Merci pour votre abonnement !
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-100"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold rounded-lg transition-colors duration-300"
                >
                  S&apos;abonner
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  )
} 