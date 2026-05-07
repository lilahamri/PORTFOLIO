import { motion } from 'framer-motion';
import { toolsIcons, skillVariants, type ToolIcon } from './skillsData';

export default function ToolsIconGrid(): JSX.Element {
  return (
    <motion.section
      variants={skillVariants.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="rounded-[32px] border border-lime-400/15 bg-slate-950/80 p-6 shadow-[0_25px_80px_rgba(132, 204, 22, 0.08)] backdrop-blur-xl"
    >
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-300/80">Technologies & Outils</h3>
        </div>

      </div>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {toolsIcons.map((tool: ToolIcon) => (
          <motion.button
            key={tool.label}
            type="button"
            whileHover={{ scale: 1.07, rotate: 6, boxShadow: '0 0 25px rgba(34, 211, 238, 0.18)' }}
            whileTap={{ scale: 0.96 }}
            className="flex flex-col items-center justify-center rounded-2xl border border-lime-400/15 bg-slate-900/85 px-2 py-4 text-center text-slate-100 transition-all duration-300"
          >
            <span className="mt-2 text-xs font-semibold text-white">{tool.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.section>
  );
}