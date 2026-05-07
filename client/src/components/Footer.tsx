import { motion } from 'framer-motion';
import { Heart, ArrowUp, Code2 } from 'lucide-react';



export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const quickLinks = [
    { label: 'Accueil', href: '#home' },
    { label: 'À propos', href: '#about' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Projets', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-background border-t border-cyan-400/20 glow-border">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 liquid-blob"
          animate={{
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 container max-w-6xl">
        <motion.div
          className="space-y-8 py-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <div className="flex items-center gap-2">
                <Code2 className="neon-glow" size={28} />
                <h3 className="text-xl font-bold neon-glow">{'<'}Lila Hamri{' />'}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Étudiante en informatique à Epitech Marseille, passionnée par la cybersécurité et les technologies modernes. Curieuse, autonome et motivée à contribuer à des projets innovants.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <h4 className="font-semibold neon-glow">Navigation</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <motion.button
                      onClick={() => handleScroll(link.href)}
                      className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm font-mono"
                      whileHover={{ x: 5 }}
                    >
                      &gt; {link.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <h4 className="font-semibold neon-glow-magenta">Réseaux</h4>
              <ul className="space-y-2">
                <li>
                  <motion.a
                    href="https://github.com/lilahamri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm font-mono"
                    whileHover={{ x: 5 }}
                  >
                    &gt; GitHub
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="https://linkedin.com/in/lilahamri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm font-mono"
                    whileHover={{ x: 5 }}
                  >
                    &gt; LinkedIn
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="mailto:lila.hamri@epitech.eu"
                    className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm font-mono"
                    whileHover={{ x: 5 }}
                  >
                    &gt; Email
                  </motion.a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            className="h-px bg-gradient-to-r from-cyan-400 to-pink-500"
            variants={itemVariants}
          />

          {/* Bottom Footer */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            variants={itemVariants}
          >
            {/* Copyright */}
            <p className="text-muted-foreground text-sm flex items-center gap-2 font-mono">
              <span className="text-cyan-400">&lt;</span>
              <span>© {currentYear} Lila Hamri. Fait avec</span>
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
              <span>et React.</span>
              <span className="text-cyan-400">/&gt;</span>
            </p>

            {/* Back to Top */}
            <motion.button
              onClick={() => handleScroll('#home')}
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-mono text-sm neon-glow"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Retour en haut</span>
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Version */}
          <motion.div
            className="text-center text-xs text-muted-foreground font-mono"
            variants={itemVariants}
          >
            <span className="text-cyan-400">v1.0</span> - Portfolio Liquid Code © 2025
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
