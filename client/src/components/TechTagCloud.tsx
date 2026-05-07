import { motion } from 'framer-motion';
import { technicalSkills, skillVariants, type TechnicalSkill } from './skillsData';

const buildFontSize = (weight: number): string => `${85 + (weight - 1) * 18}%`;

export default function TechTagCloud() {
  return (
    <motion.section
      variants={skillVariants.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="rounded-[32px] border border-cyan-400/15 bg-slate-950/80 p-6 shadow-[0_25px_80px_rgba(6,182,212,0.08)] backdrop-blur-xl"
    >
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">Compétences Techniques</h3>
        </div>

      </div>

      <div className="flex min-h-[120px] flex-wrap items-center gap-2">
        {technicalSkills.map((skill: TechnicalSkill, index: number) => (
          <motion.div
            key={skill.label}
            whileHover={{
              scale: 1.1,
              color: '#22d3ee',
              backgroundColor: '#0f172a',
              boxShadow: '0 0 25px rgba(34, 211, 238, 0.25)',
            }}
            className="cursor-pointer rounded-full border border-cyan-400/10 bg-slate-900/85 px-3 py-2 text-slate-100 transition-all duration-300"
            style={{ fontSize: buildFontSize(skill.weight) }}
          >
            {skill.label}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
