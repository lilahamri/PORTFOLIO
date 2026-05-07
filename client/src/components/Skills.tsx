import { motion } from 'framer-motion';
import { Zap, Code2, Brain } from 'lucide-react';



const technicalSkills = [
  'React',
  'JavaScript',
  'TypeScript',
  'HTML & CSS',
  'Python',
  'Node.js',
  'SQL & MySQL',
  'Git & GitHub',
  'Docker',
  'Linux',
  'Jupyter Notebook',
  'REST APIs',
];

const softSkills = [
  'Curiosité & Apprentissage',
  'Autonomie',
  'Travail en équipe',
  'Sens de l\'organisation',
  'Résolution de problèmes',
  'Sérieux & Motivation',
  'Communication',
  'Adaptabilité',
];

interface SkillTagProps {
  name: string;
  index: number;
  color: 'cyan' | 'magenta';
}

function SkillTag({ name, index, color }: SkillTagProps) {
  const isCyan = color === 'cyan';
  const borderClass = isCyan ? 'border-cyan-400 glow-border' : 'border-pink-500 glow-border-magenta';
  const textClass = isCyan ? 'text-cyan-400 neon-glow' : 'text-pink-500 neon-glow-magenta';
  const hoverGlow = isCyan ? 'rgba(0, 217, 255, 0.6)' : 'rgba(255, 0, 110, 0.6)';

  return (
    <motion.div
      className={`${borderClass} border-2 px-4 py-3 rounded-lg text-center font-mono text-sm ${textClass} hover:scale-110 transition-transform cursor-default`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.5 } as any}
      whileHover={{
        scale: 1.12,
        boxShadow: `0 0 30px ${hoverGlow}`,
      } as any}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
}

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="relative py-32 overflow-hidden bg-background">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-lime-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 liquid-blob"
          animate={{
            scale: [1, 1.1, 0.9, 1],
            y: [0, -50, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
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
              Mes <span className="neon-glow-lime">Compétences</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-lime-400 to-cyan-400"></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Technical Skills */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-center gap-3 mb-8">
                <Code2 className="neon-glow" size={28} />
                <h3 className="text-2xl font-bold neon-glow">Compétences Techniques</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {technicalSkills.map((skill, index) => (
                  <SkillTag
                    key={skill}
                    name={skill}
                    index={index}
                    color="cyan"
                  />
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="flex items-center gap-3 mb-8">
                <Brain className="neon-glow-magenta" size={28} />
                <h3 className="text-2xl font-bold neon-glow-magenta">Soft Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <SkillTag
                    key={skill}
                    name={skill}
                    index={index}
                    color="magenta"
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Technologies & Outils */}
          <motion.div variants={itemVariants} className="glow-border-magenta p-8 rounded-lg">
            <h3 className="text-2xl font-bold neon-glow-magenta mb-8">Technologies & Outils</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Python',
                'JavaScript',
                'React',
                'Node.js',
                'SQL',
                'MySQL',
                'GitHub',
                'Docker',
                'Linux',
                'Jupyter',
                'Burp Suite',
                'OWASP',
              ].map((tech, i) => (
                <motion.div
                  key={tech}
                  className="glow-border p-4 rounded-lg text-center font-mono text-sm neon-glow hover:scale-105 transition-transform"
                  whileHover={{
                    boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)',
                  } as any}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 } as any}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
