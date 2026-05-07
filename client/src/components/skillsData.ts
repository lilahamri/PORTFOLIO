export interface TechnicalSkill {
  label: string;
  weight: number;
}

export interface SoftSkill {
  label: string;
  subtitle: string;
}

export interface ToolIcon {
  label: string;
}

export interface SkillVariants {
  section: {
    hidden: { opacity: number; y: number };
    visible: {
      opacity: number;
      y: number;
      transition: {
        staggerChildren: number;
        delayChildren: number;
      };
    };
  };
  tag: {
    hidden: { opacity: number; scale: number; y: number };
    visible: {
      opacity: number;
      scale: number;
      y: number;
      transition: { duration: number; ease: string };
    };
  };
  card: {
    hidden: { opacity: number; rotateX: number; y: number; scale: number };
    visible: {
      opacity: number;
      rotateX: number;
      y: number;
      scale: number;
      transition: { duration: number; ease: string };
    };
  };
  tool: {
    hidden: { opacity: number; y: number; scale: number };
    visible: {
      opacity: number;
      y: number;
      scale: number;
      transition: { duration: number; ease: string };
    };
  };
}

export const technicalSkills: TechnicalSkill[] = [
  { label: 'React', weight: 1.4 },
  { label: 'JavaScript', weight: 1.35 },
  { label: 'TypeScript', weight: 1.3 },
  { label: 'HTML & CSS', weight: 1.15 },
  { label: 'Python', weight: 1.4 },
  { label: 'Node.js', weight: 1.2 },
  { label: 'SQL & MySQL', weight: 1.1 },
  { label: 'Git & GitHub', weight: 1.2 },
  { label: 'Docker', weight: 1.05 },
  { label: 'Linux', weight: 1.05 },
  { label: 'Jupyter Notebook', weight: 1.0 },
  { label: 'REST APIs', weight: 1.0 },
];

export const softSkills: SoftSkill[] = [
  { label: 'Curiosité & Apprentissage', subtitle: 'Toujours en quête de nouveauté et d’apprentissage.' },
  { label: 'Autonomie', subtitle: 'Je gère mes tâches et je reste efficace sans supervision constante.' },
  { label: 'Travail en équipe', subtitle: 'J’aime construire des projets en collaboration et partager mes idées.' },
  { label: 'Sens de l’organisation', subtitle: 'Je priorise clairement et je garde les livrables structurés.' },
  { label: 'Résolution de problèmes', subtitle: 'Je transforme les défis en solutions concrètes et fiables.' },
  { label: 'Sérieux & Motivation', subtitle: 'Je travaille avec engagement et volonté d’aller toujours plus loin.' },
  { label: 'Communication', subtitle: 'Je m’exprime clairement et je fais circuler l’information utile.' },
  { label: 'Adaptabilité', subtitle: 'Je m’ajuste rapidement aux nouvelles situations et outils.' },
];

export const toolsIcons: ToolIcon[] = [
  { label: 'Python' },
  { label: 'JavaScript' },
  { label: 'SQL' },
  { label: 'MySQL' },
  { label: 'Linux' },
  { label: 'Jupyter' },
  { label: 'React' },
  { label: 'Node.js' },
  { label: 'GitHub' },
  { label: 'Docker' },
  { label: 'Burp Suite' },
  { label: 'OWASP' },
];

export const skillVariants: SkillVariants = {
  section: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.12,
      },
    },
  },
  tag: {
    hidden: { opacity: 0, scale: 0.8, y: 16 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  },
  card: {
    hidden: { opacity: 0, rotateX: -18, y: 24, scale: 0.92 },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.65, ease: 'easeOut' },
    },
  },
  tool: {
    hidden: { opacity: 0, y: 18, scale: 0.86 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  },
};
