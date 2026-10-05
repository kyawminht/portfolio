import YouTube from 'react-youtube';

import { profile } from '../data/content';
import SectionHeading from './SectionHeading';

const videoOptions = {
  width: '100%',
  height: '100%',
  playerVars: { autoplay: 0, rel: 0 },
};

const Intro = () => {
  return (
    <section id="intro" className="section bg-slate-100/70 dark:bg-white/[0.02]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Hear it from me"
          title="Introduction Video"
          description="A short introduction to who I am, what I build, and how I work."
        />

        <div
          className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-black shadow-soft dark:border-white/10"
          data-aos="zoom-in"
        >
          <div className="aspect-video w-full">
            <YouTube
              videoId={profile.videoId}
              opts={videoOptions}
              className="h-full w-full"
              iframeClassName="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
