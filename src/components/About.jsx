import { profile } from '../data/content';
import SectionHeading from './SectionHeading';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Get to know me"
          title="About Me"
          description="A developer who cares about clean architecture, thoughtful interfaces, and shipping work that actually solves problems."
        />

        <div className="mt-12 max-w-3xl">
          <div className="card p-8" data-aos="fade-up">
            <h3 className="text-2xl font-bold">{profile.role}</h3>
            <p className="mt-4 leading-relaxed text-slate-500 dark:text-slate-400">
              {profile.bio}
            </p>
            <p className="mt-4 leading-relaxed text-slate-500 dark:text-slate-400">
              I have 2 years of professional experience with React.js, Node.js, and Capacitor,
              building Android and iOS apps that are published on both the Play Store and the App
              Store. I improved mobile performance through windowed rendering and moved API calls
              to TanStack Query, and refactored our Node.js repo into an MVC pattern with only
              models and controllers since it exists purely for API calls.
            </p>
            <p className="mt-4 leading-relaxed text-slate-500 dark:text-slate-400">
              I also build online and offline form submissions using IndexedDB and background sync.
              I've learned how and why UI/UX matters for creating and selling products, and I'm
              actively learning UI/UX because good design is important for every developer.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {['React', 'Node.js', 'Capacitor', 'TanStack Query', 'IndexedDB', 'UI/UX'].map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
