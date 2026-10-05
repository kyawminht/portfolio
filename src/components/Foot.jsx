import { ArrowUp } from 'lucide-react';

import { profile, navLinks, socials } from '../data/content';

const Foot = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-ink">
      <div className="container-page py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-black text-white">
                {profile.initials}
              </span>
              <span className="text-lg font-extrabold text-slate-900 dark:text-white">
                {profile.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {profile.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Navigation</h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <a
                    href={`#${link.to}`}
                    className="text-sm text-slate-500 transition-colors hover:text-primary-dark dark:text-slate-400 dark:hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Connect</h4>
            <div className="mt-4 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-colors hover:border-primary hover:text-primary-dark dark:border-white/10 dark:text-slate-300 dark:hover:text-primary"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 sm:flex-row dark:border-white/10">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollTop}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-primary-dark dark:text-slate-400 dark:hover:text-primary"
          >
            Back to top
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Foot;
