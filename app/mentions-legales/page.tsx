// app/mentions-legales/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Mentions légales | CITADEL Cybersécurité",
  description:
    "Mentions légales de CITADEL Cybersécurité : éditeur, hébergeur, propriété intellectuelle, données personnelles (RGPD), cookies et responsabilité.",
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Mentions légales</h1>
          <p className="text-blue-100">
            Conformément à la loi pour la confiance dans l&apos;économie numérique (LCEN).
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl space-y-10 text-slate-800">
          
          {/* 1. Editeur */}
          <section>
            <h2 className="text-2xl font-bold mb-3 text-slate-900">1. Éditeur du site</h2>
            <p><span className="font-semibold">Nom :</span> CITADEL Cybersécurité</p>
            <p><span className="font-semibold">Responsable :</span> Nicolas Bellencontre</p>
            <p><span className="font-semibold">Email :</span> 
              <a href="mailto:nicolas.bellencontre@outlook.fr" className="text-blue-700 underline"> nicolas.bellencontre@outlook.fr</a>
            </p>
            <p><span className="font-semibold">Téléphone :</span> +33 7 68 10 90 40</p>
          </section>

          {/* 2. Hébergeur */}
          <section>
            <h2 className="text-2xl font-bold mb-3 text-slate-900">2. Hébergeur</h2>
            <p>Site hébergé par <span className="font-semibold">Vercel Inc.</span></p>
            <p>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
            <p>
              Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">https://vercel.com</a>
            </p>
          </section>

          {/* 3. Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-bold mb-3 text-slate-900">3. Propriété intellectuelle</h2>
            <p>
              Les contenus de ce site (textes, images, code) sont protégés par le droit d&apos;auteur. 
              Toute reproduction est interdite sans autorisation.
            </p>
          </section>

          {/* 4. Données personnelles */}
          <section>
            <h2 className="text-2xl font-bold mb-3 text-slate-900">4. Données personnelles</h2>
            <p>
              Les données envoyées via le formulaire de contact sont utilisées uniquement 
              pour répondre à votre demande. 
            </p>
            <p>
              Elles sont traitées par notre prestataire <a href="https://formspree.io" target="_blank" className="text-blue-700 underline">Formspree</a> 
              et conservées le temps nécessaire à la prise de contact.
            </p>
            <p>
              Vous pouvez exercer vos droits (accès, rectification, suppression) en écrivant à : 
              <a href="mailto:nicolas.bellencontre@outlook.fr" className="text-blue-700 underline"> nicolas.bellencontre@outlook.fr</a>.
            </p>
          </section>

          {/* 5. Cookies */}
          <section>
            <h2 className="text-2xl font-bold mb-3 text-slate-900">5. Cookies</h2>
            <p>
              Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement. 
              Aucun cookie publicitaire n&apos;est utilisé.
            </p>
          </section>

          {/* 6. Responsabilité */}
          <section>
            <h2 className="text-2xl font-bold mb-3 text-slate-900">6. Limitation de responsabilité</h2>
            <p>
              Malgré le soin apporté, des erreurs peuvent subsister. 
              CITADEL Cybersécurité ne peut être tenue responsable d&apos;une mauvaise utilisation du site.
            </p>
          </section>

          {/* Footer */}
          <div className="pt-6 border-t border-slate-200 text-sm text-slate-500">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link href="/" className="px-5 py-3 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition">
              ← Retour à l’accueil
            </Link>
            <Link href="/contact" className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
