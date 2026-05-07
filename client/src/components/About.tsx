import { motion } from 'framer-motion';



export default function About() {
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
    <section id="about" className="relative py-32 overflow-hidden bg-background">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 liquid-blob"
          animate={{
            scale: [1, 1.2, 0.8, 1],
            x: [0, 50, -50, 0],
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
              À propos de <span className="neon-glow-magenta">moi</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-pink-500"></div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Je suis Lila Hamri, étudiante en première année d'informatique à Epitech Marseille. Particulièrement intéressée par la cybersécurité et les technologies modernes, je suis motivée à explorer les domaines de la sécurité informatique et de la programmation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sérieuse, curieuse et autonome, je m'investis pleinement dans les projets qui me sont confiés. Mon parcours m'a permis d'acquérir une solide base en programmation web et une compréhension des principes de sécurité informatique. Je suis particulièrement passionnée par la résolution de problèmes et l'apprentissage continu.
              </p>
            </motion.div>

            {/* Right - Profile Photo */}
            <motion.div variants={itemVariants} className="flex justify-center items-center">
              <motion.div
                className="glow-border rounded-lg overflow-hidden cursor-grab"
                whileHover={{
                  scale: 1.04,
                  boxShadow: '0 0 40px rgba(0, 217, 255, 0.8)',
                  y: -6,
                } as any}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 } as any}
                viewport={{ once: true }}
              >
                <img
                  src="/images/image.jpeg"
                  alt="Lila Hamri"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Skills Preview */}
          <motion.div
            variants={itemVariants}
            className="glow-border-magenta p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold neon-glow-magenta mb-6">Ma Philosophie</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Apprentissage Continu', desc: 'Je crois en la capacité à apprendre constamment et à adapter mes compétences aux nouvelles technologies' },
                { title: 'Autonomie & Responsabilité', desc: 'Je prends en charge mes projets et développe un sens des responsabilités dans chaque mission' },
                { title: 'Travail en Équipe', desc: 'Je valorise la collaboration, la communication claire et la contribution collective au succès' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 } as any}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold text-cyan-400">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
