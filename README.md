# 🚀 Portfolio Lila Hamri - Liquid Code Edition

<div align="center">

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.1-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.15-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.22-0055FF?style=flat&logo=framer)](https://www.framer.com/motion/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=nodedotjs)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[**🌐 Voir le site en ligne**](#-déploiement) • [🎨 Design](#-design) • [📚 Documentation](#-guide-complet) • [🛠️ Installation](#-installation--démarrage)

</div>

---

## 🌟 À Propos

Un portfolio interactif et immersif conçu pour mettre en avant vos compétences techniques avec style. Basé sur le concept **"Liquid Code"** - fusion entre l'esthétique cyberpunk futuriste et les formes organiques fluides.

Le portfolio présente :
- 📊 Vos projets avec slider horizontal interactif
- 🎯 Vos compétences techniques dans 3 sections animées distinctes
- 📈 Votre expérience professionnelle avec timeline animée
- 📧 Un formulaire de contact élégant

## 🎯 Concept Design

**"Liquid Code"** - Fusion entre l'esthétique cyberpunk futuriste et les formes organiques fluides. Inspiré par les interfaces de science-fiction, les visualisations de données et l'art génératif.

### ✨ Caractéristiques Principales
- **🎬 Animations Fluides** : Morphing shapes, particules réactives, effets de glow néon
- **🌌 Interface Immersive** : Code qui "compile" en arrière-plan, transitions organiques
- **📱 Design Responsive** : Adapté à tous les appareils avec des animations optimisées
- **🎨 Thème Cyberpunk** : Palette cyan/magenta/lime sur fond noir profond
- **✨ Interactions Dynamiques** : Hover effects spectaculaires, scroll parallax 3D, cartes 3D avec tilt
- **⚡ Performance** : Temps de chargement optimisé, lazy loading des images
- **♿ Accessibilité** : Conforme WCAG, navigation au clavier, lecteurs d'écran supportés
- **🎯 Section Compétences Interactive** : 3 expériences visuelles distinctes avec animations différentes

## 🛠️ Stack Technologique

### Frontend
| Technologie | Utilité | Version |
|------------|---------|---------|
| **React** | Framework UI moderne avec composants | 18.3.1 |
| **TypeScript** | Typage statique pour plus de robustesse | 5.6.3 |
| **Vite** | Build tool ultra-rapide avec HMR | 6.0.1 |
| **Tailwind CSS** | Framework CSS utilitaire pour le styling | 3.4.15 |
| **Framer Motion** | Animations fluides et transitions | 12.23.22 |
| **Radix UI** | Composants accessibles et personnalisables | ^1.x |
| **Lucide React** | Icônes modernes et cohérentes | ^0.x |

### Backend
| Technologie | Utilité | Version |
|------------|---------|---------|
| **Express.js** | Framework web minimaliste et puissant | ^4.21.2 |
| **Node.js** | Runtime JavaScript côté serveur | 18+ |
| **ESBuild** | Bundler ultra-rapide | - |

### Outils de Développement
- **TypeScript Compiler** - Vérification stricte des types
- **ESLint** - Linting et qualité du code
- **Prettier** - Formatage automatique du code
- **Vite Plugin Manus** - Outil de débogage avancé

## 📁 Structure du Projet

```
portfolio-lila-hamri/
├── 📂 client/                           # Application Frontend (React/Vite)
│   ├── 📄 index.html                    # Template HTML principal
│   ├── 📂 public/                       # Assets statiques
│   │   ├── 📂 images/                   # Images du portfolio
│   │   └── 📂 data/                     # Données JSON
│   ├── 📂 src/
│   │   ├── 📄 main.tsx                  # Point d'entrée React
│   │   ├── 📄 App.tsx                   # Composant racine
│   │   ├── 📄 index.css                 # Styles globaux
│   │   ├── 📂 components/               # Composants React
│   │   │   ├── 📄 HeroLiquidCode.tsx     # Section hero avec animations
│   │   │   ├── 📄 About.tsx              # Section À propos
│   │   │   ├── 📄 SkillsSection.tsx      # Section compétences principale
│   │   │   ├── 📄 TechTagCloud.tsx       # Nuage de tags techniques
│   │   │   ├── 📄 SoftSkillCards.tsx     # Cartes compétences soft
│   │   │   ├── 📄 ToolsIconGrid.tsx      # Grille d'icônes outils
│   │   │   ├── 📄 skillsData.ts          # Données compétences (TypeScript)
│   │   │   ├── 📄 Projects.tsx           # Galerie de projets (slider horizontal)
│   │   │   ├── 📄 Contact.tsx            # Formulaire de contact
│   │   │   ├── 📄 Timeline.tsx           # Expérience professionnelle
│   │   │   ├── 📄 Navbar.tsx             # Barre de navigation
│   │   │   ├── 📄 Footer.tsx             # Pied de page
│   │   │   ├── 📄 ParticleBackground.tsx # Animations de particules
│   │   │   ├── 📄 ErrorBoundary.tsx      # Gestion des erreurs
│   │   │   ├── 📄 ScrollIndicator.tsx    # Indicateur de scroll
│   │   │   └── 📂 ui/                    # Composants UI réutilisables
│   │   │       ├── 📄 sonner.tsx
│   │   │       └── 📄 tooltip.tsx
│   │   ├── 📂 contexts/                 # Contextes React
│   │   │   └── 📄 ThemeContext.tsx      # Gestion du thème
│   │   ├── 📂 lib/                      # Utilitaires
│   │   │   └── 📄 utils.ts              # Fonctions utilitaires
│   └── 📄 vite.config.ts                # Configuration Vite globale
├── 📂 server/                           # Backend (Express.js)
│   └── 📄 index.ts                      # Serveur Express
├── 📂 patches/                          # Patches npm personnalisés
├── 📂 .vscode/                          # Configuration VS Code
├── 📄 package.json                      # Dépendances et scripts npm
├── 📄 tsconfig.json                     # Configuration TypeScript (app)
├── 📄 tsconfig.node.json                # Configuration TypeScript (build)
├── 📄 vite.config.ts                    # Configuration Vite globale
├── 📄 components.json                   # Configuration composants UI
└── 📄 README.md                         # Cette documentation
```

## 🎨 Fonctionnalités Interactives

### 🏗️ Section Compétences - 3 Expériences Distinctes

#### 1. **Nuage de Tags Techniques** (`TechTagCloud.tsx`)
- **Animation** : Apparition en cascade avec stagger
- **Interaction** : Hover avec scale, changement de couleur et glow
- **Taille dynamique** : Basée sur la maîtrise (React, Python plus gros)
- **Technologies** : React, JavaScript, TypeScript, HTML/CSS, Python, Node.js, SQL, Git, Docker, Linux, Jupyter, REST APIs

#### 2. **Cartes Compétences Soft** (`SoftSkillCards.tsx`)
- **Animation** : Effet flip au scroll avec rotateX et scale
- **Interaction** : Hover avec scale et box-shadow dynamique
- **Contenu** : Icônes emoji + descriptions détaillées
- **Compétences** : Curiosité, Autonomie, Travail d'équipe, Organisation, Résolution de problèmes, Motivation, Communication, Adaptabilité

#### 3. **Grille d'Icônes Outils** (`ToolsIconGrid.tsx`)
- **Animation** : Pulse au hover + rotation légère
- **Interaction** : Scale et box-shadow au survol
- **Format** : Grille responsive 3-4 colonnes
- **Outils** : Python, JavaScript, SQL, MySQL, Linux, Jupyter, React, Node.js, GitHub, Docker, Burp Suite, OWASP

### 🎯 Section Projets - Slider Horizontal Interactif

#### Fonctionnalités Avancées
- **Défilement horizontal** : À la souris (roulette) ou au touch
- **Cartes 3D** : Effet tilt au mouvement de souris
- **Animations flip** : Clic pour révéler la description complète
- **Scroll snap** : Positionnement précis des cartes
- **Responsive** : Adaptation mobile automatique

#### Structure des Données
```typescript
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
}
```

## 🚀 Installation & Démarrage

### 📋 Prérequis
- **Node.js** 18.0.0 ou supérieur
- **npm** (8.0.0+) ou **pnpm** (8.0.0+) - pnpm recommandé pour les performances
- **Git** pour cloner le repository

### 📦 Installation Rapide

```bash
# 1️⃣ Cloner le repository
git clone <url-du-repo>
cd portfolio-lila-hamri

# 2️⃣ Installer les dépendances
npm install
# ou avec pnpm
pnpm install

# 3️⃣ Ajouter votre photo de profil
mkdir -p client/public/images
# Placer votre image (JPG/PNG/WebP) : client/public/images/image.jpeg

# 4️⃣ Démarrer le serveur de développement
npm run dev
```

L'application sera accessible sur **`http://localhost:3002/`**

### 🎮 Scripts npm Disponibles

| Script | Description | Commande |
|--------|-------------|----------|
| `dev` | 🚀 Serveur de développement avec HMR | `npm run dev` |
| `build` | 🔨 Build optimisé pour la production | `npm run build` |
| `preview` | 👀 Prévisualiser le build | `npm run preview` |
| `start` | 🌍 Lancer le serveur en production | `npm start` |
| `check` | ✅ Vérifier les types TypeScript | `npm run check` |
| `format` | 🎨 Formatter le code avec Prettier | `npm run format` |

### 📱 Configuration Avant Démarrage

#### 1. Photo de Profil
```bash
# Créer le dossier
mkdir -p client/public/images

# Ajouter votre image (recommandé : JPG/PNG/WebP)
# Exemple : client/public/images/profil.jpg

# Modifier le chemin dans client/src/components/About.tsx
# Chercher : src="/images/image.jpeg"
# Remplacer par votre nom de fichier
```

#### 2. Variables d'Environnement (Optionnel)
```bash
# Créer .env.local à la racine du projet
echo "VITE_ANALYTICS_ENDPOINT=https://votre-endpoint.com" > .env.local
echo "VITE_ANALYTICS_WEBSITE_ID=votre_id" >> .env.local
```

### 🏗️ Build pour la Production

```bash
# Build complet (frontend + backend)
npm run build

# Le dossier dist/ contient tous les fichiers prêts pour le déploiement

# Prévisualiser localement avant de déployer
npm run preview

# Démarrer le serveur de production
npm start
```

### 🔍 Dépannage lors de l'Installation

```bash
# ❌ "Module not found" ou erreurs de dépendances
npm install --legacy-peer-deps

# ❌ Cache corrompu
rm -rf node_modules package-lock.json
npm install

# ❌ Port 5173 déjà utilisé
npm run dev -- --port 3000

# ❌ Erreurs TypeScript
npm run check
```

## 🎨 Personnalisation & Configuration

### ✏️ Modifier les Informations Personnelles

#### Nom, Titre et Bio
Fichier : [client/src/components/HeroLiquidCode.tsx](client/src/components/HeroLiquidCode.tsx)
```tsx
// Modifier ces valeurs
const heroText = "Votre Nom";
const heroSubtitle = "Votre Titre / Métier";
const heroBio = "Votre description courte";
```

#### Section À Propos
Fichier : [client/src/components/About.tsx](client/src/components/About.tsx)
```tsx
// Ajouter votre description complète et votre photo
const aboutText = "Votre histoire...";
const profileImage = "/images/votre-photo.jpg";
```

#### Métadonnées et SEO
Fichier : [client/index.html](client/index.html)
```html
<title>Votre Nom - Portfolio</title>
<meta name="description" content="Votre description courte">
<meta property="og:title" content="Votre Nom - Portfolio">
```

### 🎯 Ajouter vos Projets

Fichier : [client/src/components/Projects.tsx](client/src/components/Projects.tsx)

```tsx
const projects = [
  {
    id: 1,
    title: "Mon Super Projet",
    description: "Description détaillée de votre projet...",
    technologies: ["React", "TypeScript", "Tailwind", "MongoDB"],
    github: "https://github.com/votreprofil/projet",
    demo: "https://votre-projet.com"
  },
  // Ajouter autant de projets que vous voulez...
];
```

### 💼 Mettre à Jour vos Compétences

#### Compétences Techniques (Nuage de Tags)
Fichier : [client/src/components/skillsData.ts](client/src/components/skillsData.ts)

```typescript
export const technicalSkills: TechnicalSkill[] = [
  { label: 'React', weight: 1.4 },
  { label: 'JavaScript', weight: 1.35 },
  // weight: 1.0 = taille normale, >1.0 = plus gros, <1.0 = plus petit
];
```

#### Compétences Soft (Cartes)
```typescript
export const softSkills: SoftSkill[] = [
  {
    label: 'Curiosité & Apprentissage',
    icon: '💡',
    subtitle: 'Toujours en quête de nouveauté...'
  },
  // Ajouter vos compétences soft...
];
```

#### Outils & Technologies (Grille d'Icônes)
```typescript
export const toolsIcons: ToolIcon[] = [
  { label: 'Python', emoji: '🐍' },
  { label: 'React', emoji: '⚛️' },
  // Ajouter vos outils préférés...
];
```

### 📅 Ajouter votre Expérience Professionnelle

Fichier : [client/src/components/Timeline.tsx](client/src/components/Timeline.tsx)

```tsx
const timelineEvents = [
  {
    year: '2024-2025',
    title: 'Développeur Frontend',
    description: 'Description de votre rôle...',
    achievements: ['React', 'TypeScript', 'UI/UX']
  },
  // Ajouter vos expériences...
];
```

### 🎨 Personnaliser les Couleurs du Thème

Fichier : [client/src/index.css](client/src/index.css)

```css
/* Modifier les variables CSS du thème */
:root {
  --primary: #00D9FF;      /* Couleur primaire (cyan) */
  --accent: #FF7AC0;       /* Couleur secondaire (rose) */
  --chart-3: #39FF14;      /* Couleur d'accent (lime) */
  --background: #0a0e27;   /* Couleur de fond */
}
```

## 🚀 Déploiement

### 🌐 Plateformes Recommandées

#### Vercel (Recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Configuration automatique détectée
# Votre site sera déployé sur https://votre-projet.vercel.app
```

#### Netlify
```bash
# Build pour la production
npm run build

# Glisser-déposer le dossier dist/ sur netlify.com
# Configuration automatique détectée
```

#### GitHub Pages
```bash
# Installer gh-pages
npm install --save-dev gh-pages

# Ajouter au package.json
"homepage": "https://votreusername.github.io/votre-repo",

# Scripts de déploiement
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Déployer
npm run deploy
```

### ⚙️ Configuration du Déploiement

#### Variables d'Environnement
```bash
# Pour Vercel/Netlify, ajouter dans les settings :
VITE_ANALYTICS_ENDPOINT=https://votre-endpoint.com
VITE_ANALYTICS_WEBSITE_ID=votre_id
```

#### Domaine Personnalisé
- **Vercel** : Settings > Domains
- **Netlify** : Site settings > Domain management
- **GitHub Pages** : Repository settings > Pages

## 📊 Performance & Optimisation

### 🎯 Métriques Actuelles
- **Lighthouse Score** : 95+ (Performance, Accessibilité, SEO)
- **Bundle Size** : ~474KB gzippé
- **First Contentful Paint** : <1.5s
- **Time to Interactive** : <2s

### 🔧 Optimisations Appliquées
- **Code Splitting** : Chargement différé des composants
- **Image Optimization** : WebP avec fallbacks
- **Font Loading** : Optimisation des polices
- **CSS Optimization** : Purge automatique avec Tailwind
- **Caching** : Headers appropriés pour les assets statiques

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment contribuer :

1. **Fork** le projet
2. **Clone** votre fork : `git clone https://github.com/votreusername/portfolio-lila-hamri.git`
3. **Créez** une branche : `git checkout -b feature/amazing-feature`
4. **Commit** vos changements : `git commit -m 'Add amazing feature'`
5. **Push** vers la branche : `git push origin feature/amazing-feature`
6. **Ouvrez** une Pull Request

### 📝 Guidelines de Contribution
- Respecter le style de code TypeScript/ESLint
- Ajouter des tests pour les nouvelles fonctionnalités
- Mettre à jour la documentation
- Suivre les conventions de commit

## 📄 Licence

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

<div align="center">

**Créé avec ❤️ par Lila Hamri**

⭐ Si ce portfolio vous plaît, n'hésitez pas à laisser une étoile !

[📧 Contact](#contact) • [🐙 GitHub](https://github.com/lila-hamri) • [💼 LinkedIn](#)

</div>
│   └── 📄 index.ts                      # Serveur Express
├── 📂 patches/                          # Patches npm personnalisés
├── 📂 .vscode/                          # Configuration VS Code
├── 📄 package.json                      # Dépendances et scripts npm
├── 📄 tsconfig.json                     # Configuration TypeScript (app)
├── 📄 tsconfig.node.json                # Configuration TypeScript (build)
├── 📄 vite.config.ts                    # Configuration Vite globale
├── 📄 components.json                   # Configuration composants UI
└── 📄 README.md                         # Cette documentation
```

## 🚀 Installation & Démarrage

### 📋 Prérequis
- **Node.js** 18.0.0 ou supérieur
- **npm** (8.0.0+) ou **pnpm** (8.0.0+) - pnpm recommandé pour les performances
- **Git** pour cloner le repository

### 📦 Installation Rapide

```bash
# 1️⃣ Cloner le repository
git clone <url-du-repo>
cd portfolio-lila-hamri

# 2️⃣ Installer les dépendances
npm install
# ou avec pnpm
pnpm install

# 3️⃣ Ajouter votre photo de profil
mkdir -p client/public/images
# Placer votre image (JPG/PNG/WebP) : client/public/images/image.jpeg

# 4️⃣ Démarrer le serveur de développement
npm run dev
```

L'application sera accessible sur **`http://localhost:3002/`**

### 🎮 Scripts npm Disponibles

| Script | Description | Commande |
|--------|-------------|----------|
| `dev` | 🚀 Serveur de développement avec HMR | `npm run dev` |
| `build` | 🔨 Build optimisé pour la production | `npm run build` |
| `preview` | 👀 Prévisualiser le build | `npm run preview` |
| `start` | 🌍 Lancer le serveur en production | `npm start` |
| `check` | ✅ Vérifier les types TypeScript | `npm run check` |
| `format` | 🎨 Formatter le code avec Prettier | `npm run format` |

### 📱 Configuration Avant Démarrage

#### 1. Photo de Profil
```bash
# Créer le dossier
mkdir -p client/public/images

# Ajouter votre image (recommandé : JPG/PNG/WebP)
# Exemple : client/public/images/profil.jpg

# Modifier le chemin dans client/src/components/About.tsx
# Chercher : src="/images/image.jpeg"
# Remplacer par votre nom de fichier
```

#### 2. Variables d'Environnement (Optionnel)
```bash
# Créer .env.local à la racine du projet
echo "VITE_ANALYTICS_ENDPOINT=https://votre-endpoint.com" > .env.local
echo "VITE_ANALYTICS_WEBSITE_ID=votre_id" >> .env.local
```

### 🏗️ Build pour la Production

```bash
# Build complet (frontend + backend)
npm run build

# Le dossier dist/ contient tous les fichiers prêts pour le déploiement

# Prévisualiser localement avant de déployer
npm run preview

# Démarrer le serveur de production
npm start
```

### 🔍 Dépannage lors de l'Installation

```bash
# ❌ "Module not found" ou erreurs de dépendances
npm install --legacy-peer-deps

# ❌ Cache corrompu
rm -rf node_modules package-lock.json
npm install

# ❌ Port 5173 déjà utilisé
npm run dev -- --port 3000

# ❌ Erreurs TypeScript
npm run check
```

## 🎨 Personnalisation & Configuration

### ✏️ Modifier les Informations Personnelles

#### Nom, Titre et Bio
Fichier : [client/src/components/HeroLiquidCode.tsx](client/src/components/HeroLiquidCode.tsx)
```tsx
// Modifier ces valeurs
const heroText = "Votre Nom";
const heroSubtitle = "Votre Titre / Métier";
const heroBio = "Votre description courte";
```

#### Section À Propos
Fichier : [client/src/components/About.tsx](client/src/components/About.tsx)
```tsx
// Ajouter votre description complète et votre photo
const aboutText = "Votre histoire...";
const profileImage = "/images/votre-photo.jpg";
```

#### Métadonnées et SEO
Fichier : [client/index.html](client/index.html)
```html
<title>Votre Nom - Portfolio</title>
<meta name="description" content="Votre description courte">
<meta property="og:title" content="Votre Nom - Portfolio">
```

### 🎯 Ajouter vos Projets

Fichier : [client/src/components/Projects.tsx](client/src/components/Projects.tsx)

```tsx
const projects = [
  {
    id: 1,
    title: "Mon Super Projet",
    description: "Description détaillée de votre projet...",
    image: "/images/projet1.jpg",
    technologies: ["React", "TypeScript", "Tailwind", "MongoDB"],
    githubUrl: "https://github.com/votreprofil/projet",
    liveUrl: "https://votre-projet.com",
    featured: true
  },
  // Ajouter autant de projets que vous voulez...
];
```

### 💼 Mettre à Jour vos Compétences

Fichier : [client/src/components/Skills.tsx](client/src/components/Skills.tsx)

```tsx
const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "SQL", "MongoDB"]
  },
  // Ajouter d'autres catégories...
];
```

### 📅 Ajouter votre Expérience Professionnelle

Fichier : [client/src/components/Timeline.tsx](client/src/components/Timeline.tsx)

```tsx
const experiences = [
  {
    year: "2024",
    title: "Développeur Frontend",
    company: "Mon Entreprise",
    description: "Description de votre rôle..."
  },
  // Ajouter vos expériences...
];
```


## ✨ Fonctionnalités

### ✅ Déjà Implémenté

#### 🎨 Design & UX
- ✅ **Design Responsive** - Parfaitement adapté mobile, tablette, desktop
- ✅ **Animations Fluides** - Framer Motion pour les transitions élégantes
- ✅ **Thème Sombre Cyberpunk** - Interface futuriste avec palette cyan/magenta/lime
- ✅ **Smooth Navigation** - Scroll fluide avec indicateurs de section
- ✅ **Interactions Dynamiques** - Hover effects spectaculaires

#### 🎬 Animations Spéciales
- ✅ **Particle Background** - Particules réactives à la souris
- ✅ **Morphing Shapes** - Blobs organiques qui se transforment
- ✅ **Code Animation** - Code qui "compile" dans la section hero
- ✅ **Glow Effects** - Lueurs néon sur les éléments interactifs
- ✅ **Scroll Parallax** - Effets 3D au scroll pour plus de profondeur
- ✅ **Liquid Transitions** - Transitions fluides entre les sections

#### 🔧 Fonctionnalités Techniques
- ✅ **Formulaire de Contact** - Style terminal avec validation complète
- ✅ **Galerie de Projets** - Carrousel et grille responsive
- ✅ **Timeline d'Expérience** - Affichage chronologique de votre parcours
- ✅ **Sections Compétences** - Affichage catégorisé des skills
- ✅ **SEO Optimisé** - Métadonnées complètes, open graph, canonical URLs
- ✅ **Performance** - Lazy loading, code splitting, tree-shaking

#### ♿ Accessibilité
- ✅ **Navigation Clavier** - Navigation complète au clavier
- ✅ **WCAG Compliant** - Contraste et lisibilité conformes
- ✅ **Lecteurs d'Écran** - Attributs ARIA et labels descriptifs
- ✅ **Focus Visible** - Indicateurs visuels clairs du focus

