import { motion } from 'framer-motion';
import { ArrowDown, Code2, Zap } from 'lucide-react';



const codeLines = [
  'const portfolio = {',
  '  name: "Lila Hamri",',
  '  role: "Developer & Designer",',
  '  passion: "Web Innovation",',
  '  status: "COMPILING...",',
  '};',
];

export default function HeroLiquidCode() {
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
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  };

  const codeVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      } as any,
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Gradient background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 liquid-blob"
          animate={{
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 90, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 liquid-blob"
          animate={{
            scale: [1, 0.8, 1.2, 1],
            rotate: [360, 180, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 5 }}
        />
        <motion.div
          className="absolute bottom-40 right-40 w-80 h-80 bg-lime-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 liquid-blob"
          animate={{
            scale: [1, 1.1, 0.9, 1],
            rotate: [0, 180, 360, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 10 }}
        />
      </div>

      <div className="relative z-10 container max-w-6xl">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left side - Code */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              className="code-block"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 } as any}
            >
              <div className="space-y-2 font-mono text-sm">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={codeVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center"
                  >
                    <span className="text-cyan-400 mr-2">&gt;</span>
                    <span className="text-gray-300">{line}</span>
                    {i === codeLines.length - 1 && (
                      <motion.span
                        className="ml-2 text-lime-400"
                      animate={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity } as any}
                      >
                        ▌
                      </motion.span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="section-title neon-glow">
                Bienvenue dans mon <span className="neon-glow-magenta">Portfolio</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Étudiante en première année à Epitech Marseille...
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <motion.a
                href="#projects"
                className="px-8 py-3 bg-cyan-400 text-background font-bold rounded-lg flex items-center gap-2 hover:bg-cyan-300 transition-all"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.6)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Code2 size={20} />
                Voir mes projets
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3 border-2 border-pink-500 text-pink-500 font-bold rounded-lg hover:bg-pink-500 hover:text-background transition-all"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 0, 110, 0.6)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap size={20} />
                Me contacter
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Animated illustration */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 hidden lg:flex items-center justify-center"
          >
            <motion.div
              className="absolute w-64 h-64 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-3xl opacity-20 blur-3xl"
              animate={{
                scale: [1, 1.2, 0.8, 1],
                rotate: [0, 90, 180, 360],
              }}
              transition={{ duration: 15, repeat: Infinity }}
            />
            <motion.div
              className="relative z-10 text-center space-y-4"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Code2 size={120} className="neon-glow mx-auto" />
              <p className="text-2xl font-bold neon-glow">COMPILING...</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="neon-glow" size={32} />
      </motion.div>
    </section>
  );
}
