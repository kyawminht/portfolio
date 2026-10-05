import { Briefcase, Calendar, MapPin } from 'lucide-react';

import { experiences } from '../data/content';
import SectionHeading from './SectionHeading';

const Experience = () => {
  return (
    <section id="experience" className="section bg-slate-100/70 dark:bg-white/[0.02]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Where I've worked"
          title="Experience"
          description="Building and maintaining products in a collaborative, client-facing environment."
        />

        <div className="relative mt-12 border-l border-slate-200 pl-8 dark:border-white/10">
          {experiences.map((experience, index) => (
            <div
              key={`${experience.title}-${experience.date}`}
              className={`relative ${index === experiences.length - 1 ? '' : 'pb-12'}`}
              data-aos="fade-up"
            >
              <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border-4 border-slate-50 bg-primary dark:border-ink" />

              <div className="card p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary-dark dark:text-primary">
                      <Briefcase size={18} />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {experience.title}
                      </h3>
                      {experience.url ? (
                        <a
                          href={experience.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-primary-dark hover:underline dark:text-primary"
                        >
                          {experience.company}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-primary-dark dark:text-primary">
                          {experience.company}
                        </p>
                      )}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-white/5 dark:text-slate-300">
                    <Calendar size={13} />
                    {experience.date}
                  </span>
                </div>

                <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin size={13} />
                  {experience.location}
                </p>

                <ul className="mt-4 space-y-2">
                  {experience.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
