import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';

import { profile, navLinks, socials } from '../data/content';
import { trackEvent } from '../analystics';

const Nav = () => {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('mode');
    if (stored) return stored === 'dark';
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  });
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('mode', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (label) => {
    trackEvent('Navigation', 'Link Clicked', label);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isSticky
          ? 'border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-ink/80'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <Link
          to="home"
          smooth
          duration={500}
          offset={-70}
          onClick={() => handleLink('Home')}
          className="flex cursor-pointer items-center gap-2 text-lg font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-black text-white">
            {profile.initials}
          </span>
          <span className="hidden sm:block">{profile.name}</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              spy
              offset={-70}
              duration={500}
              activeClass="nav-link-active"
              onClick={() => handleLink(link.label)}
              className="link-nav"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setIsDark((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-colors hover:border-primary hover:text-primary-dark dark:border-white/10 dark:text-slate-300 dark:hover:text-primary"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href={profile.resume}
            download
            className="btn-primary hidden !px-4 !py-2.5 sm:inline-flex"
            onClick={() => trackEvent('Resume', 'Download', 'Navbar')}
          >
            <Download size={16} />
            Resume
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 lg:hidden dark:border-white/10 dark:text-white"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-slate-200 bg-white transition-[max-height] duration-300 lg:hidden dark:border-white/10 dark:bg-ink ${
          isOpen ? 'max-h-96 border-t' : 'max-h-0'
        }`}
      >
        <div className="container-page flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              spy
              offset={-70}
              duration={500}
              activeClass="nav-link-active"
              onClick={() => handleLink(link.label)}
              className="link-nav rounded-lg px-3 py-3 hover:bg-slate-100 dark:hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-2 flex items-center gap-3 px-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 dark:border-white/10 dark:text-slate-300"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
