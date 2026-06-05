export type Locale = "zh" | "en";

export interface Publication {
  id: string;
  title: string;
  venue: string;
  year: string;
  status: string;
  tags: string[];
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
  links?: { label: string; href: string }[];
}

export interface AgentIdea {
  title: string;
  description: string;
  harnessNotes: string;
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
    agentLab: string;
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
    journal: string;
    conference: string;
    items: Publication[];
  };
  projects: {
    title: string;
    subtitle: string;
    items: Project[];
  };
  agentLab: {
    title: string;
    subtitle: string;
    harnessIntro: string;
    ideas: AgentIdea[];
  };
  contact: {
    title: string;
    email: string;
    location: string;
    deployHint: string;
  };
  footer: {
    builtWith: string;
    harnessNote: string;
  };
  langToggle: { zh: string; en: string };
}
