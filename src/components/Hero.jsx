import { useEffect, useState } from 'react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

import { profile, stats, socials } from '../data/content';
import { trackEvent } from '../analystics';
import HeroImg from '../assets/pro.jpg';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % profile.roles.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0 grid-glow opacity-40 dark:opacity-30" />
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-primary/20 blur-[100px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div data-aos="fade-right">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-dark dark:text-primary">
            <Sparkles size={15} />
            Available for opportunities
          </span>

          <p className="mt-6 text-lg font-medium text-slate-500 dark:text-slate-400">
            Hi, I'm
          </p>
          <h1 className="mt-2 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 flex items-center gap-2 text-2xl font-bold sm:text-3xl">
            <span className="text-gradient">{profile.roles[roleIndex]}</span>
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-500 dark:text-slate-400">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#project"
              className="btn-primary"
              onClick={() => trackEvent('CTA', 'Click', 'View Work')}
            >
              View my work
              <ArrowRight size={16} />
            </a>
            <a
              href={profile.resume}
              download
              className="btn-ghost"
              onClick={() => trackEvent('Resume', 'Download', 'Hero')}
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary-dark dark:border-white/10 dark:text-slate-300 dark:hover:text-primary"
              >
                <social.icon />
              </a>
            ))}
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-slate-200 pt-6 dark:border-white/10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm" data-aos="fade-left" data-aos-delay="150">
          <div className="absolute inset-6 rounded-[2rem] bg-primary/25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-soft dark:border-white/10 dark:bg-ink-card">
            <img
              src={HeroImg}
              alt={`${profile.name} portrait`}
              className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-soft sm:block dark:border-white/10 dark:bg-ink-card">
            <p className="text-xs text-slate-500 dark:text-slate-400">Based in</p>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {profile.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
