'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Sophie Martin",
    position: "Directrice des Systèmes d'Information",
    company: "TechCorp France",
    image: "/testimonials/1.jpg",
    content: "CITADEL a transformé notre approche de la sécurité. Leur expertise et leur réactivité sont exceptionnelles."
  },
  {
    name: "Thomas Dubois",
    position: "CTO",
    company: "Innovatech Solutions",
    image: "/testimonials/2.jpg",
    content: "Depuis que nous travaillons avec CITADEL, nous avons pu dormir sur nos deux oreilles. Leur service de surveillance 24/7 est impeccable."
  },
  {
    name: "Marie Laurent",
    position: "Responsable Sécurité",
    company: "DataSecure",
    image: "/testimonials/3.jpg",
    content: "L'approche proactive de CITADEL nous a permis d'anticiper et de prévenir plusieurs incidents majeurs."
  }
]

export default function Testimonials() {
  return (
    <section className="relative py-20 bg-slate-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      <div className="relative container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500"
        >
          Témoignages clients
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-300" />
              <div className="relative bg-slate-800/50 p-6 rounded-lg border border-slate-700 group-hover:border-cyan-500 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-500 mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">{testimonial.name}</h3>
                    <p className="text-sm text-slate-400">{testimonial.position}</p>
                    <p className="text-sm text-cyan-500">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-slate-300 italic">&quot;{testimonial.content}&quot;</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 