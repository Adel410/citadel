'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      className="relative group bg-slate-800/50 p-8 rounded-lg border border-slate-700 hover:border-cyan-500 transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Hover effect background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Glow effect */}
      <motion.div 
        className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"
        initial={{ scale: 0.95 }}
        animate={{ scale: isHovered ? 1 : 0.95 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <div className="relative">
        <motion.div 
          className="text-cyan-500 mb-6 transform group-hover:scale-110 transition-transform duration-300"
          whileHover={{ rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {icon}
        </motion.div>
        
        <motion.h3 
          className="text-2xl font-bold mb-4 group-hover:text-cyan-500 transition-colors duration-300"
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -2 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 mb-6"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="flex items-center text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300"
          initial={{ x: 0 }}
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-sm font-semibold">En savoir plus</span>
          <svg 
            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  )
} 