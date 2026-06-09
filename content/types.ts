export type Locale = "zh" | "en";

export interface Publication {
  id: string;
  title: string;
  venue: string;
  year: string;
  status: string;
  tags: string[];
  demoSlug?: string;
}

export interface Project {
  id: string;
  name: string;
  period: string;
  role: string;
  summary: string;
  responsibilities: string[];
  outcomes: string[];
  stack: string[];
  demoSlug?: string;
  links?: { label: string; href: string }[];
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    publications: string;
    projects: string;
    contact: string;
  };
  hero: {
    name: string;
    tagline: string;
    subtitle: string;
    ctaResearch: string;
    ctaProjects: string;
  };
  about: {
    title: string;
    education: { period: string; school: string; detail: string }[];
    focus: string[];
    skills: { category: string; items: string }[];
    awards: string;
  };
  publications: {
    title: string;
    subtitle: string;
    tryDemo: string;
    journal: string;
    conference: string;
    items: Publication[];
  };
  projects: {
    title: string;
    subtitle: string;
    tryDemo: string;
    items: Project[];
  };
  contact: {
    title: string;
    email: string;
    location: string;
    deployHint: string;
  };
  footer: {
    builtWith: string;
  };
  langToggle: { zh: string; en: string };
}
