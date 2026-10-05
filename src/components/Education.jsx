import { GraduationCap } from 'lucide-react';

import { education } from '../data/content';
import SectionHeading from './SectionHeading';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="My learning path"
          title="Education"
          description="Formal computing qualifications that built my software development foundation."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {education.map((item, index) => (
            <div
              key={item.degree}
              className="card flex flex-col p-6"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary-dark dark:text-primary">
                  <GraduationCap size={20} />
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.status === 'Completed'
                      ? 'bg-primary/10 text-primary-dark dark:text-primary'
                      : 'bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300'
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-bold leading-snug text-slate-900 dark:text-white">
                {item.degree}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary-dark dark:text-primary">
                {item.duration}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {item.details}
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4 dark:border-white/10">
                <img
                  src={item.logo}
                  alt={`${item.institution} logo`}
                  className="h-9 w-9 rounded-lg object-contain"
                />
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  {item.institution}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
