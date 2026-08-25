export const navLinks = [
  { label: 'projects', href: '#projects' },
  { label: 'security', href: '#security' },
  { label: 'expertise', href: '#expertise' },
  { label: 'experience', href: '#experience' },
  { label: 'credentials', href: '#certifications' },
  { label: 'contact', href: '#contact' },
] as const

export const hero = {
  name: 'Antti Murtokangas',
  label: 'Automation Engineering Student · Technical Support',
  subtitle: [
    'I study Automation Engineering at SEAMK and work in technical support for fiber-network services.',
    'Outside work and studies, I build TypeScript and Python applications. Tärppi is my latest live project.',
  ],
  featured: {
    projectId: 'tarppi',
    label: 'Live project',
    status: 'tarppi.site',
    title: 'Tärppi',
    summary: 'Tracks Kide.app and Tiketti events. It can reserve selected tickets to cart when sales open and send Telegram alerts.',
    href: '#projects',
    linkLabel: 'View the project',
  },
  ctaPrimary: { label: 'View selected work', href: '#projects' },
  ctaSecondary: { label: 'Get in touch', href: '#contact' },
} as const

// --- Types ---

export interface Project {
  id: string
  name: string
  description: string
  fullDescription: string
  eyebrow?: string
  outcome?: string
  image?: string
  imageAlt?: string
  linkLabel?: string
  stack: string[]
  liveUrl: string | null
  githubUrl: string
  repositoryPublic?: boolean
  status: 'live' | 'in development' | 'private'
}

interface ExperienceEntry {
  role: string
  company?: string
  period: string
  tools?: string[]
}

interface EducationEntry {
  degree: string
  institution: string
  period: string
}

// --- Data ---

export const projects: Project[] = [
  {
    id: 'tarppi',
    name: 'Tärppi',
    eyebrow: 'Live build',
    description:
      'Live event monitor and ticket reservation assistant for Kide.app and Tiketti.',
    fullDescription:
      'Tärppi tracks Kide.app and Tiketti events, reserves selected tickets when sales open, and sends Telegram alerts. The React and TypeScript app runs on Vercel with a Railway and PostgreSQL backend.',
    outcome:
      'Live at tarppi.site and connected to both ticket platforms.',
    image: '/tarppi-preview.png',
    imageAlt: 'Tärppi dashboard with event search, tracking, and Telegram notification controls',
    linkLabel: 'Open Tärppi',
    stack: ['React', 'TypeScript', 'PostgreSQL', 'Railway'],
    liveUrl: 'https://www.tarppi.site/',
    githubUrl: 'https://github.com/Murtsi/Kidehiiri-public',
    repositoryPublic: true,
    status: 'live',
  },
  {
    id: 'tyohakuri',
    name: 'Työhakuri',
    eyebrow: 'In development',
    description:
      "Private prototype that collects Finnish job listings and compares them with a user's profile.",
    fullDescription:
      'A React dashboard with a FastAPI backend, Supabase authentication, Railway deployment, and job ingestion. Experimental analysis with LangGraph and Gemini helps users review job fit and tailor applications.',
    outcome: 'Private prototype in active development; no public demo or project repository.',
    stack: ['React', 'FastAPI', 'Supabase', 'LangGraph'],
    liveUrl: null,
    githubUrl: 'https://github.com/Murtsi',
    status: 'in development',
  },
  {
    id: 'kauppaagentit',
    name: 'KauppaAgentit',
    eyebrow: 'Research build',
    description:
      'Finnish adaptation of TradingAgents for experimenting with OMXH market analysis.',
    fullDescription:
      'A Finnish adaptation of the open-source TradingAgents framework. The repository adds Finnish prompts, CLI workflows, PostgreSQL storage, and evaluation runs for OMXH research.',
    outcome: 'Public repository with Finnish prompts and evaluation runs.',
    stack: ['Python', 'PostgreSQL', 'Agent workflows', 'Market data'],
    liveUrl: null,
    githubUrl: 'https://github.com/Murtsi/TradingAgents-Finnish',
    repositoryPublic: true,
    status: 'in development',
  },
  {
    id: 'pentesting-tool',
    name: 'Pentesting Tool',
    eyebrow: 'Private security tooling',
    description:
      'Private Python CLI for practicing security checks in authorized environments.',
    fullDescription:
      'A personal learning tool that groups basic reconnaissance, service checks, JWT inspection, and report generation into one workflow. Source remains private.',
    outcome:
      'Built for learning and authorized practice; source remains private.',
    linkLabel: 'GitHub profile (source private)',
    stack: ['Python', 'Security checks', 'CLI', 'Reporting'],
    liveUrl: null,
    githubUrl: 'https://github.com/Murtsi',
    status: 'private',
  },
]

export const experience: ExperienceEntry[] = [
  {
    role: 'Technical Support',
    company: 'Fiber operator',
    period: '2024–present',
    tools: ['iMaster', 'Altiplano', 'Nokia OSS', 'Keycom'],
  },
  {
    role: 'Production Operator',
    company: 'Olvi',
    period: '2023',
  },
  {
    role: 'Production Line Operator',
    company: 'Keitele Timber',
    period: 'Summer 2022',
  },
  {
    role: 'Assembler',
    company: 'Tikli Group',
    period: '2018, 2021',
  },
  {
    role: 'Technical Support / IT Support',
    company: 'Alajärvi High School',
    period: '2017–2018',
    tools: ['Windows Server', 'Active Directory', 'Hardware'],
  },
]

export const education: EducationEntry[] = [
  {
    degree: "Bachelor's in Automation Engineering",
    institution: 'SEAMK',
    period: 'ongoing',
  },
  {
    degree: 'Automation in Wind Power Sector',
    institution: 'Professional Development Course',
    period: '2024',
  },
  {
    degree: 'Leadership Training',
    institution: 'Finnish Defence Forces',
    period: '2019–2020',
  },
  {
    degree: 'Vocational Qualification in Business IT',
    institution: 'Järviseudun ammatti-instituutti',
    period: '2015–2018',
  },
]

export const expertise = [
  {
    id: 'fiber',
    label: 'Network Support',
    description: 'I diagnose fiber service faults, provision services, and work with operator OSS tools.',
    tools: ['iMaster', 'Altiplano', 'Nokia OSS', 'OTDR', 'Keycom'],
    accent: 'green',
  },
  {
    id: 'automation',
    label: 'Industrial Automation',
    description: 'My coursework includes PLC programming, SCADA, electrical design, machine vision, and simulation.',
    tools: ['Codesys', 'SCADA', 'Eplan', 'Cognex', 'Visual Components'],
    accent: 'blue',
  },
  {
    id: 'software',
    label: 'Software Projects',
    description: 'I build TypeScript and Python projects with React, FastAPI, and PostgreSQL.',
    tools: ['TypeScript', 'React', 'Python', 'FastAPI', 'PostgreSQL'],
    accent: 'amber',
  },
  {
    id: 'ai',
    label: 'Applied AI',
    description: 'I use Gemini, LangGraph, and agent workflows in personal prototypes.',
    tools: ['Gemini', 'LangGraph', 'scikit-learn', 'Agent workflows'],
    accent: 'purple',
  },
  {
    id: 'security',
    label: 'Application Security',
    description:
      'My practical security experience is one responsibly disclosed SQL injection finding. I also maintain a private Python learning tool for authorized environments.',
    tools: ['SQL injection', 'Responsible disclosure', 'Python'],
    accent: 'green',
  },
] as const

export interface Certification {
  name: string
  issuer: string
  credentialId: string
  certNumber: string
  earnedOn: string
  verifyUrl: string
  logo?: string
}

export const certifications: Certification[] = [
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    credentialId: '65AC4CE0150CFDCE',
    certNumber: '91C416-68C3E2',
    earnedOn: '2026-04-17',
    verifyUrl: 'https://learn.microsoft.com/en-us/users/anttimurtokangas-5846/credentials/65ac4ce0150cfdce',
    logo: '/logos/microsoft.svg',
  },
  {
    name: 'Google: AI Specialization',
    issuer: 'Coursera / Google',
    credentialId: 'UBM2ZJMEA8IN',
    certNumber: '',
    earnedOn: '',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/specialization/UBM2ZJMEA8IN',
    logo: '/logos/google.svg',
  },
  {
    name: 'Google AI Essentials',
    issuer: 'Credly / Google',
    credentialId: 'd6785c33-8920-4cf3-8ff3-1c602940bf3d',
    certNumber: 'd6785c33-8920-4cf3-8ff3-1c602940bf3d',
    earnedOn: '',
    verifyUrl: 'https://www.credly.com/badges/d6785c33-8920-4cf3-8ff3-1c602940bf3d/linked_in_profile',
    logo: '/logos/google.svg',
  },
]

export const contact = {
  email: 'antti.murtsi@gmail.com',
  githubLabel: 'github.com/Murtsi',
  githubUrl: 'https://github.com/Murtsi',
  linkedinLabel: 'linkedin.com/in/antti-murtokangas-562725158',
  linkedinUrl: 'https://www.linkedin.com/in/antti-murtokangas-562725158/',
} as const
