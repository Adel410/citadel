import Link from 'next/link'
import { SocialIcon } from "react-social-icons"

export default function FinalCTA() {
  return (
    <section className="relative py-12 sm:py-16 overflow-hidden text-white bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent animate-gradient-x">
          Prêt à tester vos défenses ?
        </h2>
        <p className="text-blue-100 mb-8 sm:mb-10 text-base sm:text-lg max-w-2xl mx-auto">
          Audit, pentest, sensibilisation — priorité à l’impact et aux actions concrètes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services" className="px-6 py-3 sm:px-8 sm:py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 border border-white/30">
            Parcourir les services
          </Link>
          <Link href="/contact" className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-blue-700 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
            Nous contacter
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8 sm:mt-10">
          <a href="https://www.linkedin.com/company/citadel-cybers%C3%A9curit%C3%A9/about/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition">
            <SocialIcon url="https://www.linkedin.com/company/citadel-cybers%C3%A9curit%C3%A9/about/" fgColor="#ffffff" bgColor="transparent" style={{ height: 26, width: 26 }} />
            <span className="text-white text-xs sm:text-sm font-medium">CITADEL</span>
          </a>

          <a href="https://linkedin.com/in/nicolas-bellencontre-287427303" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition">
            <SocialIcon url="https://linkedin.com/in/nicolas-bellencontre-287427303" fgColor="#ffffff" bgColor="transparent" style={{ height: 26, width: 26 }} />
            <span className="text-white text-xs sm:text-sm font-medium">Nicolas Bellencontre</span>
          </a>
        </div>
      </div>
    </section>
  );
}