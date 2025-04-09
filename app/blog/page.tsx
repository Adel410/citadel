'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const articles = [
  {
    title: "Les 5 Menaces Cyber les Plus Courantes en 2024",
    excerpt: "Découvrez les principales menaces de cybersécurité auxquelles les entreprises doivent faire face cette année et comment les prévenir.",
    image: "/blog/cyber-threats.jpg",
    date: "15 Mars 2024",
    readTime: "5 min",
    category: "Sécurité",
    slug: "menaces-cyber-2024"
  },
  {
    title: "Guide Complet de la Protection des Données",
    excerpt: "Un guide pratique pour mettre en place une stratégie efficace de protection des données dans votre entreprise.",
    image: "/blog/data-protection.jpg",
    date: "10 Mars 2024",
    readTime: "8 min",
    category: "Conformité",
    slug: "protection-donnees"
  },
  {
    title: "L&apos;Intelligence Artificielle dans la Cybersécurité",
    excerpt: "Comment l&apos;IA révolutionne la détection et la prévention des cyberattaques.",
    image: "/blog/ai-security.jpg",
    date: "5 Mars 2024",
    readTime: "6 min",
    category: "Innovation",
    slug: "ia-cybersecurite"
  }
]

export default function BlogPage() {
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
              Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-slate-300 max-w-2xl mx-auto"
            >
              Découvrez nos articles sur la cybersécurité, les bonnes pratiques et les dernières tendances
            </motion.p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-cyan-500">{article.category}</span>
                    <span className="text-sm text-slate-400">{article.date}</span>
                    <span className="text-sm text-slate-400">{article.readTime} de lecture</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-slate-100">{article.title}</h2>
                  <p className="text-slate-300 mb-6">{article.excerpt}</p>
                  <Link
                    href={`/blog/${article.slug}`}
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

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 text-center"
          >
            <h2 className="text-2xl font-bold mb-4 text-slate-100">Restez informé</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Abonnez-vous à notre newsletter pour recevoir les derniers articles et actualités sur la cybersécurité
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-slate-100"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold rounded-lg transition-colors duration-300"
              >
                S&apos;abonner
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
} 