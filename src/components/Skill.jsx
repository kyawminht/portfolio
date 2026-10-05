import { skillGroups } from '../data/content';
import SectionHeading from './SectionHeading';
import SkillCard from './SkillCard';

const Skill = () => {
  return (
    <section id="skill" className="section bg-slate-100/70 dark:bg-white/[0.02]">
      <div className="container-page">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills & Tools"
          description="Technologies I use day to day to design, build, and maintain web applications."
        />

        <div className="mt-12 space-y-12">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 text-lg font-semibold text-slate-800 dark:text-slate-100">
                {group.title}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
