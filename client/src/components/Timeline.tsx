import { motion } from 'framer-motion';
import { CheckCircle, Zap } from 'lucide-react';



const timelineEvents = [
  {
    year: '2025-2030',
    title: 'Epitech Marseille',
    description: 'Études d\'informatique en école d\'ingénieur. Apprentissage de la programmation, du développement web, et des principes de cybersécurité.',
    achievements: ['Programmation', 'Web Dev', 'Cybersécurité'],
  },
  {
    year: '2022-2024',
    title: 'Fernando Pessoa Porto',
    description: 'Études en médecine dentaire à Porto, Portugal. Développement de compétences en travail d\'équipe et gestion du stress.',
    achievements: ['Discipline', 'Rigueur', 'International'],
  },
    {
    year: '2024-2025',
    title: 'Aide aux Devoirs',
    description: 'Aide aux devoirs scolaires à Marseille. Partage de connaissances et pédagogie adaptée au niveau de chaque élève.',
    achievements: ['Communication', 'Pédagogie', 'Responsabilité'],
  },
  {
    year: '2022',
    title: 'Baccalauréat',
    description: 'Diplôme du Baccalauréat obtenu à Notre Dame de Sion, Marseille. Formation générale avec focus académique.',
    achievements: ['Réussite', 'Fondations Académiques'],
  }

];

interface TimelineItemProps {
  event: typeof timelineEvents[0];
  index: number;
}

function TimelineItem({ event, index }: TimelineItemProps) {
  return (
    <motion.div
      className="relative mb-16"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 } as any}
      viewport={{ once: true }}
    >
      {/* Timeline line and dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-pink-500 -z-10"></div>
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 w-8 h-8 bg-background border-2 border-cyan-400 rounded-full flex items-center justify-center"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity } as any}
      >
        <Zap className="neon-glow" size={16} />
      </motion.div>

      {/* Content */}
      <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
        {/* Left/Right alternating */}
        <motion.div
          className={`${index % 2 === 1 ? 'md:col-start-1' : 'md:col-start-2'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 } as any}
          viewport={{ once: true }}
        >
          <motion.div
            className="glow-border p-6 rounded-lg"
            whileHover={{ scale: 1.03, y: -6, boxShadow: '0 0 30px rgba(255, 0, 110, 0.25)' } as any}
            transition={{ type: 'spring', stiffness: 220, damping: 24 } as any}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold neon-glow">{event.year}</span>
              <CheckCircle className="neon-glow-lime" size={24} />
            </div>
            <h3 className="text-xl font-bold neon-glow mb-2">{event.title}</h3>
            <p className="text-muted-foreground mb-4">{event.description}</p>
            <div className="flex flex-wrap gap-2">
              {event.achievements.map((achievement) => (
                <span
                  key={achievement}
                  className="text-xs px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full font-mono"
                >
                  {achievement}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Spacer for alternating layout */}
        <div className="hidden md:block"></div>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="timeline" className="relative py-32 overflow-hidden bg-background">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 liquid-blob"
          animate={{
            scale: [1, 1.2, 0.8, 1],
            y: [0, -100, 100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 container max-w-6xl">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="section-title neon-glow">
              Mon <span className="neon-glow-magenta">Parcours</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-pink-500"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={event.year + index} event={event} index={index} />
            ))}
          </div>

          {/* Future goals */}
          <motion.div
            variants={itemVariants}
            className="glow-border-magenta p-8 rounded-lg text-center"
          >
            <h3 className="text-2xl font-bold neon-glow-magenta mb-4">Objectifs 2025+</h3>
            <p className="text-muted-foreground mb-6">
              Continuer à apprendre, explorer les technologies émergentes, et créer des projets qui font la différence.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {['Full-Stack', 'DevOps', 'AI/ML', 'Entrepreneurship'].map((goal) => (
                <motion.span
                  key={goal}
                  className="px-4 py-2 glow-border rounded-lg font-mono text-sm neon-glow"
                  whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' } as any}
                >
                  {goal}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
