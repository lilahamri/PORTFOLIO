import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [tilt, setTilt] = React.useState({ rotateX: 0, rotateY: 0 });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x - rect.width / 2) / rect.width) * 18;
    const rotateX = -((y - rect.height / 2) / rect.height) * 18;
    setTilt({ rotateX, rotateY });
  };

  return (
    <motion.div
      className="project-card min-w-[340px] max-w-[400px] h-[36rem] cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 } as any}
      viewport={{ once: true }}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setTilt({ rotateX: 0, rotateY: 0 })}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY + (isFlipped ? 180 : 0),
        }}
        whileHover={{ scale: 1.04 }}
        transition={{ type: 'spring', stiffness: 220, damping: 24 } as any}
        style={{ transformStyle: 'preserve-3d' } as any}
      >
        {/* Front */}
        <motion.div
          className="absolute w-full h-full glow-border p-6 rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden' } as any}
        >
          <div>
            <Code2 className="neon-glow mb-4" size={32} />
            <h3 className="text-2xl font-bold neon-glow mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 bg-cyan-400/20 text-cyan-400 rounded">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Back */}
        <motion.div
          className="absolute w-full h-full glow-border-magenta p-6 rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' } as any}
        >
          <p className="text-muted-foreground">{project.description}</p>
          <div className="flex gap-4">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-cyan-400 text-background rounded font-bold hover:bg-cyan-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
              Code
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border-2 border-pink-500 text-pink-500 rounded font-bold hover:bg-pink-500 hover:text-background transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={18} />
              Démo
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/data/projects.json')
      .then((res) => res.json())
      .then((data) => setProjects(data.projects))
      .catch((error) => console.error('Error loading projects:', error));
  }, []);

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

  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    event.preventDefault();
    sliderRef.current.scrollBy({ left: event.deltaY * 1.8, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="relative py-40 overflow-visible bg-background">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 liquid-blob"
          animate={{
            scale: [1, 1.3, 0.7, 1],
            x: [0, 100, -100, 0],
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
              Mes <span className="neon-glow-lime">Projets</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-lime-400 to-cyan-400"></div>
          </motion.div>

          {/* Projects Slider */}
          <div
            className="projects-scroll"
            ref={sliderRef}
            onWheel={handleScroll}
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
