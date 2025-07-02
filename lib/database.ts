import Database from 'better-sqlite3'
import path from 'path'

const dbPath = path.join(process.cwd(), 'citadel.db')
const db = new Database(dbPath)

// Types
export interface Service {
  id?: number
  title: string
  description: string
  features: string[]
  icon: string
  pricing: string
  bg_gradient: string
  icon_bg: string
  border_color: string
  hover_border: string
  badge: string
  badge_color: string
  position?: number
  active?: number
  created_at?: string
  updated_at?: string
}

export interface ServicePackage {
  id?: number
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular: boolean
  gradient: string
  shadow_color: string
  position?: number
  active?: number
  created_at?: string
  updated_at?: string
}

// Enable WAL mode for better performance
db.pragma('journal_mode = WAL')

// Tables creation
db.exec(`
  CREATE TABLE IF NOT EXISTS services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    features TEXT NOT NULL, -- JSON array
    icon TEXT NOT NULL,
    pricing TEXT NOT NULL,
    bg_gradient TEXT NOT NULL,
    icon_bg TEXT NOT NULL,
    border_color TEXT NOT NULL,
    hover_border TEXT NOT NULL,
    badge TEXT NOT NULL,
    badge_color TEXT NOT NULL,
    position INTEGER NOT NULL DEFAULT 0,
    active INTEGER NOT NULL DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS service_packages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price TEXT NOT NULL,
    period TEXT NOT NULL,
    description TEXT NOT NULL,
    features TEXT NOT NULL, -- JSON array
    popular INTEGER NOT NULL DEFAULT 0,
    gradient TEXT NOT NULL,
    shadow_color TEXT NOT NULL,
    position INTEGER NOT NULL DEFAULT 0,
    active INTEGER NOT NULL DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS page_contents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    page_id TEXT NOT NULL,
    section_id TEXT NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(page_id, section_id)
  );

  CREATE TABLE IF NOT EXISTS site_settings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    key TEXT UNIQUE NOT NULL,
    value TEXT NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`)

// Insert default services if table is empty
const serviceCount = db.prepare('SELECT COUNT(*) as count FROM services').get() as { count: number }

if (serviceCount.count === 0) {
  const insertService = db.prepare(`
    INSERT INTO services (title, description, features, icon, pricing, bg_gradient, icon_bg, border_color, hover_border, badge, badge_color, position)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)

  const defaultServices = [
    {
      title: "Audit de Sécurité",
      description: "Évaluation complète de votre infrastructure avec identification des vulnérabilités critiques et plan d'action détaillé.",
      features: JSON.stringify([
        "Analyse des systèmes et réseaux",
        "Tests de pénétration",
        "Rapport détaillé avec recommandations",
        "Plan d'action priorisé",
        "Suivi post-audit"
      ]),
      icon: "🔍",
      pricing: "À partir de 2,500€",
      bg_gradient: "from-blue-50 to-indigo-50",
      icon_bg: "bg-blue-600",
      border_color: "border-blue-200",
      hover_border: "hover:border-blue-400",
      badge: "Populaire",
      badge_color: "bg-blue-100 text-blue-800",
      position: 1
    },
    {
      title: "Protection des Données",
      description: "Chiffrement avancé, sauvegarde sécurisée et mise en conformité RGPD pour protéger vos données sensibles.",
      features: JSON.stringify([
        "Chiffrement bout-en-bout",
        "Sauvegarde automatisée",
        "Conformité RGPD",
        "Gestion des accès",
        "Monitoring continu"
      ]),
      icon: "🔒",
      pricing: "À partir de 1,800€/mois",
      bg_gradient: "from-emerald-50 to-teal-50",
      icon_bg: "bg-emerald-600",
      border_color: "border-emerald-200",
      hover_border: "hover:border-emerald-400",
      badge: "Essentiel",
      badge_color: "bg-emerald-100 text-emerald-800",
      position: 2
    },
    {
      title: "Surveillance Continue",
      description: "Monitoring 24/7 de votre infrastructure avec détection proactive des menaces et intervention rapide.",
      features: JSON.stringify([
        "Monitoring temps réel",
        "Détection d'anomalies",
        "Alertes instantanées",
        "Support 24/7",
        "Tableaux de bord"
      ]),
      icon: "👁️",
      pricing: "À partir de 2,200€/mois",
      bg_gradient: "from-purple-50 to-violet-50",
      icon_bg: "bg-purple-600",
      border_color: "border-purple-200",
      hover_border: "hover:border-purple-400",
      badge: "24/7",
      badge_color: "bg-purple-100 text-purple-800",
      position: 3
    },
    {
      title: "Réponse aux Incidents",
      description: "Intervention d'urgence pour contenir les menaces, analyser les incidents et restaurer vos systèmes.",
      features: JSON.stringify([
        "Intervention < 15 minutes",
        "Containment des menaces",
        "Analyse forensique",
        "Restauration des systèmes",
        "Rapport d'incident"
      ]),
      icon: "🚨",
      pricing: "À partir de 3,500€/incident",
      bg_gradient: "from-red-50 to-orange-50",
      icon_bg: "bg-red-600",
      border_color: "border-red-200",
      hover_border: "hover:border-red-400",
      badge: "Urgence",
      badge_color: "bg-red-100 text-red-800",
      position: 4
    },
    {
      title: "Formation Sécurité",
      description: "Programmes de sensibilisation personnalisés pour créer une culture de cybersécurité dans votre entreprise.",
      features: JSON.stringify([
        "Formation sur mesure",
        "Tests de phishing",
        "Simulations d'attaques",
        "Certificats de formation",
        "Suivi des progrès"
      ]),
      icon: "🎓",
      pricing: "À partir de 1,200€/jour",
      bg_gradient: "from-amber-50 to-yellow-50",
      icon_bg: "bg-amber-600",
      border_color: "border-amber-200",
      hover_border: "hover:border-amber-400",
      badge: "Préventif",
      badge_color: "bg-amber-100 text-amber-800",
      position: 5
    },
    {
      title: "Architecture Sécurisée",
      description: "Conception et déploiement d'infrastructures résilientes avec sécurité intégrée dès la conception.",
      features: JSON.stringify([
        "Audit d'architecture",
        "Conception sécurisée",
        "Déploiement supervisé",
        "Tests de sécurité",
        "Documentation complète"
      ]),
      icon: "🏗️",
      pricing: "Sur devis",
      bg_gradient: "from-slate-50 to-gray-50",
      icon_bg: "bg-slate-600",
      border_color: "border-slate-200",
      hover_border: "hover:border-slate-400",
      badge: "Sur mesure",
      badge_color: "bg-slate-100 text-slate-800",
      position: 6
    }
  ]

  for (const service of defaultServices) {
    insertService.run(
      service.title,
      service.description,
      service.features,
      service.icon,
      service.pricing,
      service.bg_gradient,
      service.icon_bg,
      service.border_color,
      service.hover_border,
      service.badge,
      service.badge_color,
      service.position
    )
  }
}

// Insert default packages if table is empty
const packageCount = db.prepare('SELECT COUNT(*) as count FROM service_packages').get() as { count: number }

if (packageCount.count === 0) {
  const insertPackage = db.prepare(`
    INSERT INTO service_packages (name, price, period, description, features, popular, gradient, shadow_color, position)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)

  const defaultPackages = [
    {
      name: "Protection Essentielle",
      price: "799€",
      period: "/mois",
      description: "Pour les PME qui débutent leur transformation digitale",
      features: JSON.stringify([
        "Audit de sécurité trimestriel",
        "Protection antivirus/anti-malware",
        "Sauvegarde quotidienne",
        "Support technique 9h-18h",
        "Formation de base (2h/mois)",
        "Rapports mensuels"
      ]),
      popular: 0,
      gradient: "from-blue-500 to-blue-600",
      shadow_color: "shadow-blue-500/20",
      position: 1
    },
    {
      name: "Protection Avancée",
      price: "1,499€",
      period: "/mois",
      description: "Solution complète pour entreprises en croissance",
      features: JSON.stringify([
        "Surveillance continue 24/7",
        "Détection avancée des menaces",
        "Réponse aux incidents incluse",
        "Support technique prioritaire",
        "Formation équipes (4h/mois)",
        "Conformité RGPD",
        "Tests de pénétration trimestriels",
        "Dashboard temps réel"
      ]),
      popular: 1,
      gradient: "from-purple-500 to-purple-600",
      shadow_color: "shadow-purple-500/20",
      position: 2
    },
    {
      name: "Protection Entreprise",
      price: "2,999€",
      period: "/mois",
      description: "Solution premium pour grandes organisations",
      features: JSON.stringify([
        "SOC dédié 24/7",
        "Threat hunting proactif",
        "Intervention sur site",
        "Support technique dédié",
        "Formation personnalisée illimitée",
        "Audit de sécurité mensuel",
        "Certification ISO 27001",
        "Tableaux de bord exécutifs",
        "SLA garantis"
      ]),
      popular: 0,
      gradient: "from-emerald-500 to-emerald-600",
      shadow_color: "shadow-emerald-500/20",
      position: 3
    }
  ]

  for (const pkg of defaultPackages) {
    insertPackage.run(
      pkg.name,
      pkg.price,
      pkg.period,
      pkg.description,
      pkg.features,
      pkg.popular,
      pkg.gradient,
      pkg.shadow_color,
      pkg.position
    )
  }
}

// Insert default page contents if table is empty
const contentCount = db.prepare('SELECT COUNT(*) as count FROM page_contents').get() as { count: number }

if (contentCount.count === 0) {
  const insertContent = db.prepare(`
    INSERT INTO page_contents (page_id, section_id, title, content)
    VALUES (?, ?, ?, ?)
  `)

  const defaultContents = [
    {
      page_id: 'home',
      section_id: 'hero-title',
      title: 'Titre Principal',
      content: 'CITADEL - Votre Bouclier Numérique de Confiance'
    },
    {
      page_id: 'home',
      section_id: 'hero-subtitle',
      title: 'Sous-titre',
      content: 'Nous protégeons votre entreprise contre les cybermenaces les plus sophistiquées avec des solutions de sécurité sur mesure et une expertise reconnue.'
    },
    {
      page_id: 'services',
      section_id: 'hero-title',
      title: 'Titre Principal',
      content: 'Nos Services'
    },
    {
      page_id: 'services',
      section_id: 'hero-subtitle',
      title: 'Sous-titre',
      content: 'Solutions de cybersécurité complètes adaptées à chaque besoin d\'entreprise'
    },
    {
      page_id: 'about',
      section_id: 'hero-title',
      title: 'Titre Principal',
      content: 'À Propos de Citadel'
    },
    {
      page_id: 'about',
      section_id: 'hero-subtitle',
      title: 'Sous-titre',
      content: 'Votre partenaire de confiance en cybersécurité depuis 2015'
    },
    {
      page_id: 'contact',
      section_id: 'hero-title',
      title: 'Titre Principal',
      content: 'Contactez-Nous'
    },
    {
      page_id: 'contact',
      section_id: 'hero-subtitle',
      title: 'Sous-titre',
      content: 'Notre équipe d\'experts est disponible pour répondre à tous vos besoins en cybersécurité'
    }
  ]

  for (const content of defaultContents) {
    insertContent.run(content.page_id, content.section_id, content.title, content.content)
  }
}

// Database operations
export const serviceOperations = {
  getAll: () => {
    return db.prepare('SELECT * FROM services WHERE active = 1 ORDER BY position ASC').all()
  },
  
  getById: (id: number) => {
    return db.prepare('SELECT * FROM services WHERE id = ?').get(id)
  },
  
  create: (service: Omit<Service, 'id' | 'created_at' | 'updated_at' | 'active'>) => {
    const stmt = db.prepare(`
      INSERT INTO services (title, description, features, icon, pricing, bg_gradient, icon_bg, border_color, hover_border, badge, badge_color, position)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)
    return stmt.run(
      service.title,
      service.description,
      JSON.stringify(service.features),
      service.icon,
      service.pricing,
      service.bg_gradient,
      service.icon_bg,
      service.border_color,
      service.hover_border,
      service.badge,
      service.badge_color,
      service.position || 0
    )
  },
  
  update: (id: number, service: Omit<Service, 'id' | 'created_at' | 'updated_at' | 'active'>) => {
    const stmt = db.prepare(`
      UPDATE services 
      SET title = ?, description = ?, features = ?, icon = ?, pricing = ?, 
          bg_gradient = ?, icon_bg = ?, border_color = ?, hover_border = ?, 
          badge = ?, badge_color = ?, position = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `)
    return stmt.run(
      service.title,
      service.description,
      JSON.stringify(service.features),
      service.icon,
      service.pricing,
      service.bg_gradient,
      service.icon_bg,
      service.border_color,
      service.hover_border,
      service.badge,
      service.badge_color,
      service.position || 0,
      id
    )
  },
  
  delete: (id: number) => {
    return db.prepare('UPDATE services SET active = 0 WHERE id = ?').run(id)
  },
  
  reorder: (services: Array<{ id: number, position: number }>) => {
    const stmt = db.prepare('UPDATE services SET position = ? WHERE id = ?')
    const transaction = db.transaction(() => {
      for (const service of services) {
        stmt.run(service.position, service.id)
      }
    })
    return transaction()
  }
}

export const packageOperations = {
  getAll: () => {
    return db.prepare('SELECT * FROM service_packages WHERE active = 1 ORDER BY position ASC').all()
  },
  
  getById: (id: number) => {
    return db.prepare('SELECT * FROM service_packages WHERE id = ?').get(id)
  },
  
  create: (pkg: Omit<ServicePackage, 'id' | 'created_at' | 'updated_at' | 'active'>) => {
    const stmt = db.prepare(`
      INSERT INTO service_packages (name, price, period, description, features, popular, gradient, shadow_color, position)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)
    return stmt.run(
      pkg.name,
      pkg.price,
      pkg.period,
      pkg.description,
      JSON.stringify(pkg.features),
      pkg.popular ? 1 : 0,
      pkg.gradient,
      pkg.shadow_color,
      pkg.position || 0
    )
  },
  
  update: (id: number, pkg: Omit<ServicePackage, 'id' | 'created_at' | 'updated_at' | 'active'>) => {
    const stmt = db.prepare(`
      UPDATE service_packages 
      SET name = ?, price = ?, period = ?, description = ?, features = ?, 
          popular = ?, gradient = ?, shadow_color = ?, position = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `)
    return stmt.run(
      pkg.name,
      pkg.price,
      pkg.period,
      pkg.description,
      JSON.stringify(pkg.features),
      pkg.popular ? 1 : 0,
      pkg.gradient,
      pkg.shadow_color,
      pkg.position || 0,
      id
    )
  },
  
  delete: (id: number) => {
    return db.prepare('UPDATE service_packages SET active = 0 WHERE id = ?').run(id)
  }
}

export const contentOperations = {
  getByPage: (pageId: string) => {
    return db.prepare('SELECT * FROM page_contents WHERE page_id = ?').all(pageId)
  },
  
  updateContent: (pageId: string, sectionId: string, content: string) => {
    const stmt = db.prepare(`
      UPDATE page_contents 
      SET content = ?, updated_at = CURRENT_TIMESTAMP
      WHERE page_id = ? AND section_id = ?
    `)
    return stmt.run(content, pageId, sectionId)
  }
}

export const settingsOperations = {
  get: (key: string) => {
    return db.prepare('SELECT value FROM site_settings WHERE key = ?').get(key)
  },
  
  set: (key: string, value: string) => {
    const stmt = db.prepare(`
      INSERT OR REPLACE INTO site_settings (key, value, updated_at)
      VALUES (?, ?, CURRENT_TIMESTAMP)
    `)
    return stmt.run(key, value)
  }
}

export default db 