import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Check, Copy, Loader2, Mail, MapPin, Send } from 'lucide-react';

import { profile, socials } from '../data/content';
import SectionHeading from './SectionHeading';
import { trackEvent } from '../analystics';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const isConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

const initialForm = { name: '', email: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [copied, setCopied] = useState(false);

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy email:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isConfigured) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'someone'}`);
      const body = encodeURIComponent(`${form.message}\n\nReply to: ${form.email}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );
      trackEvent('Contact', 'Form Submit', 'Success');
      setStatus('success');
      setForm(initialForm);
    } catch (error) {
      console.error('EmailJS error:', error);
      trackEvent('Contact', 'Form Submit', 'Error');
      setStatus('error');
    }
  };

  const inputStyles =
    'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-primary dark:border-white/10 dark:bg-white/5 dark:text-slate-200';

  return (
    <section id="contact" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Let's talk"
          title="Get In Touch"
          description="Have a project, a role, or just a question? I'd love to hear from you."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4" data-aos="fade-right">
            <button
              type="button"
              onClick={handleCopy}
              className="card flex w-full items-center gap-4 p-5 text-left transition-colors hover:border-primary"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary-dark dark:text-primary">
                <Mail size={18} />
              </span>
              <span className="flex-1">
                <span className="block text-xs uppercase tracking-wide text-slate-400">
                  Email
                </span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  {profile.email}
                </span>
              </span>
              {copied ? (
                <Check size={17} className="text-primary-dark dark:text-primary" />
              ) : (
                <Copy size={17} className="text-slate-400" />
              )}
            </button>

            <div className="card flex items-center gap-4 p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary-dark dark:text-primary">
                <MapPin size={18} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-slate-400">
                  Location
                </span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  {profile.location}
                </span>
              </span>
            </div>

            <div className="card p-5">
              <span className="block text-xs uppercase tracking-wide text-slate-400">
                Find me online
              </span>
              <div className="mt-3 flex gap-3">
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

          <form onSubmit={handleSubmit} className="card p-6 sm:p-8" data-aos="fade-left">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className={inputStyles}
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Your email"
                className={inputStyles}
              />
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me about your project..."
              className={`${inputStyles} mt-4 resize-none`}
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary mt-4 w-full disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send message
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="mt-3 text-center text-sm font-medium text-primary-dark dark:text-primary">
                Thanks! Your message has been sent.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-3 text-center text-sm font-medium text-red-500">
                Something went wrong. Please email me directly at {profile.email}.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
