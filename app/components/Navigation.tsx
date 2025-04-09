import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-500">
            CITADEL
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-slate-300 hover:text-cyan-500 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-cyan-500 transition-colors">
              À propos
            </Link>
            <Link href="/blog" className="text-slate-300 hover:text-cyan-500 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-lg transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 