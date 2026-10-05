import { ArrowUpRight, Github } from 'lucide-react';

import { projects } from '../data/content';
import SectionHeading from './SectionHeading';
import { trackEvent } from '../analystics';

const Project = () => {
  return (
    <section id="project" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Glimpse into my work"
          title="Featured Projects"
          description="A selection of full-stack and front-end projects I've built and shipped."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="card group flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1.5"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {project.detail}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-5 border-t border-slate-100 pt-4 dark:border-white/10">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent('Project', 'Live Click', project.title)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-dark dark:text-primary"
                    >
                      Live demo
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('Project', 'GitHub Click', project.title)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    <Github size={15} />
                    Source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
