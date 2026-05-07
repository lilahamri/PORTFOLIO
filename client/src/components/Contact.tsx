import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Terminal } from 'lucide-react';
import { useState } from 'react';



export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to send message');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:lila.hamri@epitech.eu', color: 'neon-glow' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/lilahamri', color: 'neon-glow' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/lila-hamri-b2522039a/', color: 'neon-glow-magenta' },
  ];

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
    <section id="contact" className="relative py-32 overflow-hidden bg-background">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 liquid-blob"
          animate={{
            scale: [1, 1.1, 0.9, 1],
            x: [0, 100, -100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 container max-w-4xl">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="space-y-4 text-center">
            <h2 className="section-title neon-glow">
              Parlons <span className="neon-glow-magenta">Ensemble</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Vous avez une question ou une opportunité ? N'hésitez pas à me contacter !
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto"></div>
          </motion.div>

          {/* Contact Form - Terminal Style */}
          <motion.div variants={itemVariants} className="glow-border p-8 rounded-lg bg-gradient-to-br from-slate-900 to-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="neon-glow" size={24} />
              <h3 className="text-2xl font-bold neon-glow">$ contact.send()</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 } as any}
                viewport={{ once: true }}
              >
                <label className="text-sm font-mono text-cyan-400">&gt; name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className="w-full bg-slate-950 border border-cyan-400 rounded px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-400 font-mono"
                  required
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 } as any}
                viewport={{ once: true }}
              >
                <label className="text-sm font-mono text-cyan-400">&gt; email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className="w-full bg-slate-950 border border-cyan-400 rounded px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-400 font-mono"
                  required
                />
              </motion.div>

              {/* Message Input */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 } as any}
                viewport={{ once: true }}
              >
                <label className="text-sm font-mono text-cyan-400">&gt; message:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message..."
                  rows={5}
                  className="w-full bg-slate-950 border border-cyan-400 rounded px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-400 font-mono resize-none"
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-cyan-400 text-background font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-cyan-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!loading ? { scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.6)' } : {}}
                whileTap={!loading ? { scale: 0.95 } : {}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 } as any}
                viewport={{ once: true }}
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-background"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Envoyer le message
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  className="p-4 bg-lime-400/20 border border-lime-400 rounded text-lime-400 text-center font-mono"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  ✓ Message envoyé avec succès !
                </motion.div>
              )}

              {/* Error Message */}
              {error && (
                <motion.div
                  className="p-4 bg-red-400/20 border border-red-400 rounded text-red-400 text-center font-mono"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  ✗ Erreur: {error}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-8 flex-wrap"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 glow-border rounded-lg hover:scale-110 transition-transform ${link.color}`}
                  whileHover={{
                    boxShadow: link.color === 'neon-glow' 
                      ? '0 0 40px rgba(0, 217, 255, 0.6)' 
                      : '0 0 40px rgba(255, 0, 110, 0.6)',
                  } as any}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={32} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* CV Download */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <p className="text-muted-foreground mb-4">Vous voulez en savoir plus ?</p>
            <motion.a
              href="/cv_hamri_lila.pdf"
              download="cv_hamri_lila.pdf"
              className="inline-block px-8 py-3 border-2 border-lime-400 text-lime-400 rounded-lg font-bold hover:bg-lime-400 hover:text-background transition-colors neon-glow-lime"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Télécharger mon CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
