import { motion } from 'framer-motion';
import { softSkills, skillVariants, type SoftSkill } from './skillsData';

export default function SoftSkillCards() {
  return (
    <motion.section
      variants={skillVariants.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="rounded-[32px] border border-pink-500/15 bg-slate-950/80 p-6 shadow-[0_25px_80px_rgba(249, 168, 212, 0.08)] backdrop-blur-xl"
    >
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-300/80">Soft Skills</h3>
        </div>

      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {softSkills.map((skill: SoftSkill) => (
          <motion.article
            key={skill.label}
            whileHover={{ scale: 1.03, rotateY: 3, boxShadow: '0 0 35px rgba(255, 45, 135, 0.18)' }}
            className="group overflow-hidden rounded-[24px] border border-pink-400/10 bg-slate-900/85 p-4 text-left transition-transform duration-300"
          >
            <div className="flex items-center gap-3 mb-4">

            </div>
            <h4 className="text-lg font-semibold text-white">{skill.label}</h4>
            <p className="mt-2 text-xs leading-5 text-slate-300">{skill.subtitle}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
