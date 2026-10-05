import resume from '../assets/kyawmin-htwe-Resume.pdf';
import roadSafetyImg from '../assets/road_safety.png';
import universityGuideImg from '../assets/university_guide.png';
import sdgDashboardImg from '../assets/sdg_dashboard.png';
import clinicQueueImg from '../assets/clinic_queue.png';
import educlassLogo from '../assets/educlass_logo.png';
import roehamptonLogo from '../assets/roehampton_logo.png';

import { TfiHtml5, TfiEmail } from 'react-icons/tfi';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io5';
import {
  SiTailwindcss,
  SiMysql,
  SiPostman,
  SiAmazonapigateway,
  SiNodedotjs,
  SiReactquery,
  SiCapacitor,
  SiPwa,
  SiFigma,
} from 'react-icons/si';
import {
  FaBootstrap,
  FaPhp,
  FaLaravel,
  FaGithub,
  FaReact,
  FaLinkedinIn,
  FaAndroid,
  FaApple,
  FaGooglePlay,
  FaAppStoreIos,
  FaSitemap,
  FaDatabase,
} from 'react-icons/fa';

export const profile = {
  name: 'Kyaw Min Htwe',
  initials: 'KMH',
  role: 'Full-Stack & Mobile Developer',
  roles: ['Full-Stack Developer', 'React & Capacitor Mobile Developer', 'UI/UX Enthusiast'],
  tagline:
    'I build fast, reliable web and mobile apps — from database schema and APIs to polished, production-ready interfaces.',
  bio: 'Full-Stack Developer with 2 years of professional experience building React and Node.js applications, including Android and iOS apps with Capacitor that are published on both the Play Store and the App Store.',
  email: 'kyawminhtway288@gmail.com',
  location: 'Yangon, Myanmar',
  languages: ['English'],
  resume,
  videoId: 'awabk805kfo',
};

export const stats = [
  { label: 'Years experience', value: '2+' },
];

export const socials = [
  { name: 'GitHub', url: 'https://github.com/kyawminht/', icon: FaGithub },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kyaw-min-htwe-99839b244/',
    icon: FaLinkedinIn,
  },
  { name: 'Email', url: `mailto:${profile.email}`, icon: TfiEmail },
];

export const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', level: 90, icon: TfiHtml5 },
      { name: 'CSS', level: 85, icon: IoLogoCss3 },
      { name: 'JavaScript', level: 85, icon: IoLogoJavascript },
      { name: 'React', level: 85, icon: FaReact },
      { name: 'Tailwind CSS', level: 80, icon: SiTailwindcss },
      { name: 'TanStack Query', level: 80, icon: SiReactquery },
      { name: 'Bootstrap', level: 70, icon: FaBootstrap },
      { name: 'UI/UX Design', level: 75, icon: SiFigma },
    ],
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'Capacitor', level: 80, icon: SiCapacitor },
      { name: 'React Capacitor Android', level: 75, icon: FaAndroid },
      { name: 'React Capacitor iOS', level: 75, icon: FaApple },
      { name: 'Progressive Web Apps', level: 75, icon: SiPwa },
      { name: 'Google Play Publishing', level: 80, icon: FaGooglePlay },
      { name: 'App Store Publishing', level: 80, icon: FaAppStoreIos },
    ],
  },
  {
    title: 'Backend & Architecture',
    skills: [
      { name: 'Node.js', level: 80, icon: SiNodedotjs },
      { name: 'PHP', level: 80, icon: FaPhp },
      { name: 'Laravel', level: 80, icon: FaLaravel },
      { name: 'REST API', level: 80, icon: SiAmazonapigateway },
      { name: 'MVC Architecture', level: 80, icon: FaSitemap },
      { name: 'IndexedDB & Background Sync', level: 75, icon: FaDatabase },
      { name: 'MySQL', level: 70, icon: SiMysql },
      { name: 'GitHub', level: 90, icon: FaGithub },
      { name: 'Postman', level: 70, icon: SiPostman },
    ],
  },
];

export const projects = [
  {
    title: 'Road Safety for Myanmar Children',
    detail:
      'A mobile-first learning app that teaches road safety to children through visual flip cards and interactive games — no reading required. Includes downloadable flashcards for teachers and Mixpanel usage analytics.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'Framer Motion'],
    image: roadSafetyImg,
    live: 'https://road-safety-mm.vercel.app/',
    github: 'https://github.com/kyawminht/road-safety',
    featured: true,
  },
  {
    title: 'Myanmar University Admission Checker',
    detail:
      'A real-time web app that helps Grade 12 students instantly find eligible universities and majors from their matriculation marks, covering 100+ universities and 500+ programs with dual mark calculations.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'React Helmet'],
    image: universityGuideImg,
    live: 'https://uni-winkwint.vercel.app/',
    github: 'https://github.com/kyawminht/university_guide',
  },
  {
    title: 'Hmawbi Township SDG Dashboard',
    detail:
      'A health SDG performance dashboard with a clickable SVG map of six health facilities and interactive charts for comparing indicators across the township.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Recharts', 'SVG'],
    image: sdgDashboardImg,
    live: 'https://hmawbi-sdg-indicators.vercel.app',
    github: 'https://github.com/kyawminht/-Hmawbi-Region-SDG-Indicators-Dashboard',
  },
  {
    title: 'Clinic Queue Management System',
    detail:
      'A PWA that lets patients book appointments and receive queue numbers in three steps, with offline support, an installable app experience, and an admin dashboard for clinic staff.',
    tech: ['React', 'TanStack Query', 'Tailwind CSS', 'PWA', 'React Router'],
    image: clinicQueueImg,
    live: null,
    github: 'https://github.com/kyawminht/clinic-queue-management-system',
  },
];

export const experiences = [
  {
    title: 'Mobile & Full-stack Developer',
    company: 'MFI Ventures',
    url: 'https://www.mfi.ventures/',
    location: 'Philippines',
    date: 'Nov 2024 – Present',
    points: [
      'Building and shipping Android and iOS apps with React and Capacitor, published on the Play Store and App Store.',
      'Improved mobile app performance through windowed list rendering and optimized component re-renders.',
      'Moved API calls to TanStack Query for reliable caching, retries, and background refetching.',
      'Refactored the Node.js repo into an MVC structure with dedicated models and controllers.',
      'Implementing online/offline form submissions with IndexedDB and background sync.',
    ],
  },
  {
    title: 'Full-stack Web Developer Intern',
    company: 'Revelio',
    location: 'Yangon, Myanmar',
    date: 'Mar 2024 – May 2024',
    points: [
      'Contributed to a property booking platform similar to Booking.com.',
      'Built user interfaces that adhered to UI/UX design principles.',
      'Collaborated with senior developers to design and optimize the database.',
      'Created robust backend APIs using Laravel.',
      'Built dynamic, interactive components on the Vue.js frontend.',
    ],
  },
];

export const education = [
  {
    degree: 'BSc (Hons) Computer Science (Top-Up)',
    institution: 'University of Roehampton',
    duration: '2025 – 2026',
    details:
      'Top-up degree following the Level 5 HND. Completed a final-year project building a Progressive Web App clinic queue management system for Myanmar clinics.',
    status: 'Completed',
    logo: roehamptonLogo,
  },
  {
    degree: 'Level 3 Foundation Diploma in Computing',
    institution: 'Lithan Educlaas',
    duration: '2022 – 2023',
    details: 'Focused on foundational computing skills and programming principles.',
    status: 'Completed',
    logo: educlassLogo,
  },
  {
    degree: 'Level 4 HND Diploma in Computing',
    institution: 'Lithan Educlaas',
    duration: '2023 – 2024',
    details: 'Specialized in software development, web technologies, and database management.',
    status: 'Completed',
    logo: educlassLogo,
  },
  {
    degree: 'Level 5 HND Diploma in Computing',
    institution: 'Lithan Educlaas',
    duration: '2024 – 2025',
    details: 'Specialized in software development, web technologies, and database management.',
    status: 'Completed',
    logo: educlassLogo,
  },
];

export const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skill', label: 'Skills' },
  { to: 'project', label: 'Projects' },
  { to: 'experience', label: 'Experience' },
  { to: 'education', label: 'Education' },
];
