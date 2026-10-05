const SkillCard = ({ skill }) => {
  return (
    <div
      className="card flex items-center gap-4 p-5 transition-transform duration-300 hover:-translate-y-1"
      data-aos="fade-up"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-2xl text-primary-dark dark:text-primary">
        <skill.icon />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
            {skill.name}
          </h4>
          <span className="text-xs font-medium text-slate-400">{skill.level}%</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary-dark to-primary-light"
            style={{ '--skill-level': `${skill.level}%` }}
            data-aos="width-animation"
            data-aos-delay="150"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
