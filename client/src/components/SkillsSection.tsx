import TechTagCloud from './TechTagCloud.tsx';
import SoftSkillCards from './SoftSkillCards.tsx';
import ToolsIconGrid from './ToolsIconGrid.tsx';

export default function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden bg-background py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Section compétences</p>
          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl neon-glow">Mes compétences</h2>

        </div>

        <div className="space-y-10">
          <TechTagCloud />
          <SoftSkillCards />
          <ToolsIconGrid />
        </div>
      </div>
    </section>
  );
}
