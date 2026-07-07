export const navLinks = [
  { label: 'expertise', href: '#expertise' },
  { label: 'projects', href: '#projects' },
  { label: 'security', href: '#security' },
  { label: 'certs', href: '#certifications' },
  { label: 'experience', href: '#experience' },
  { label: 'contact', href: '#contact' },
] as const

export const hero = {
  name: 'Antti Murtokangas',
  label: 'Automation Engineering Student · AI Systems · AI Security',
  subtitle: [
    'Automation Engineering student at SEAMK.',
    'Building AI-assisted tools, automation workflows, and backend systems.',
    'Exploring AI-assisted security research, LLM attack surfaces, and responsible disclosure.',
  ],
  stats: [
    { value: '4', label: 'featured builds' },
    { value: '8+', label: 'years in tech' },
    { value: 'AI', label: 'security focus' },
  ],
  ctaPrimary: { label: '> view_projects()', href: '#projects' },
  ctaSecondary: { label: '> contact()', href: '#contact' },
} as const

// --- Types ---

interface TechBar {
  label: string
  color: string
  value?: number
}

export interface Project {
  id: string
  name: string
  description: string
  fullDescription: string
  stack: string[]
  techBars: TechBar[]
  liveUrl: string | null
  githubUrl: string
  status: 'live' | 'in development'
}

interface SecurityResearchEntry {
  title: string
  meta: string
  focus: string
  body: string
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
    description:
      'Event monitoring and ticket reservation assistant for Kide.app and Tiketti events.',
    fullDescription:
      'React and TypeScript app for monitoring Kide.app and Tiketti events, scoring event relevance, reserving tickets to cart when sales open, and sending Telegram notifications. Backend runs on Railway with PostgreSQL persistence; frontend is deployed through Vercel.',
    stack: ['React', 'TypeScript', 'PostgreSQL', 'Railway'],
    techBars: [
      { label: 'TypeScript', value: 56, color: '#3178C6' },
      { label: 'React',      value: 18, color: '#58A6FF' },
      { label: 'SQL',        value: 16, color: '#C44536' },
      { label: 'Railway',    value: 10, color: '#BC8CFF' },
    ],
    liveUrl: 'https://kidehiiri.vercel.app/',
    githubUrl: 'https://github.com/Murtsi/Kidehiiri-public',
    status: 'in development',
  },
  {
    id: 'tyohakuri',
    name: 'Työhakuri',
    description:
      'AI job search copilot for the Finnish job market with recommendations and application analysis.',
    fullDescription:
      'Full-stack AI assistant for the Finnish job market. React dashboard, FastAPI backend, Supabase auth, Railway deployment, job ingestion, recommendation scoring, and LangGraph/Gemini-based analysis for tailoring applications while keeping the user in control.',
    stack: ['React', 'FastAPI', 'Supabase', 'LangGraph'],
    techBars: [
      { label: 'TypeScript', value: 34, color: '#3178C6' },
      { label: 'Python',     value: 30, color: '#3572A5' },
      { label: 'AI / LLM',   value: 22, color: '#BC8CFF' },
      { label: 'Supabase',   value: 14, color: '#3FB950' },
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/Murtsi',
    status: 'in development',
  },
  {
    id: 'kauppaagentit',
    name: 'KauppaAgentit',
    description:
      'Finnish market analysis agents for OMXH stocks with multi-agent research workflows.',
    fullDescription:
      'Finnish adaptation of an agent-based market analysis framework for OMXH stocks. Includes Finnish prompts, CLI workflows, PostgreSQL storage, evaluation runs, and multi-agent roles for fundamentals, news, sentiment, technical analysis, risk, and portfolio decisions.',
    stack: ['Python', 'PostgreSQL', 'Agent workflows', 'Market data'],
    techBars: [
      { label: 'Python',          value: 58, color: '#3572A5' },
      { label: 'Agent workflows', value: 20, color: '#BC8CFF' },
      { label: 'SQL',             value: 12, color: '#C44536' },
      { label: 'Market data',     value: 10, color: '#58A6FF' },
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/Murtsi/TradingAgents-Finnish',
    status: 'in development',
  },
  {
    id: 'pentesting-tool',
    name: 'Pentesting Tool',
    description:
      'Private security CLI framework for authorized assessments and OWASP-oriented testing.',
    fullDescription:
      'Python-based penetration testing CLI framework for authorized assessments. Covers reconnaissance, service fingerprinting, vulnerability checks, JWT analysis, reporting, and OWASP-oriented testing. Kept private for security reasons.',
    stack: ['Python', 'Security tooling', 'OWASP', 'CLI'],
    techBars: [
      { label: 'Python',    value: 64, color: '#3572A5' },
      { label: 'Security',  value: 18, color: '#3FB950' },
      { label: 'CLI',       value: 10, color: '#8B949E' },
      { label: 'Reporting', value: 8, color: '#D29922' },
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/Murtsi',
    status: 'in development',
  },
]

export const securityResearch: SecurityResearchEntry = {
  title: 'Responsible Disclosure — SQL Injection',
  meta: 'Coordinated disclosure · Public checkout flow · Finnish fitness platform',
  focus:
    'Research focus: AI-assisted security testing, responsible disclosure, and LLM/application security.',
  body:
    "Found and responsibly reported an unauthenticated SQL injection vulnerability in a Finnish fitness platform's public checkout flow. The issue was tied to promo-code validation and could have allowed payment bypass during membership signup. Reported through the operator's official channel under coordinated disclosure.",
}

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
    label: 'Fiber Operations',
    description: 'Network fault diagnosis, service provisioning, and OSS platform operations for fiber infrastructure.',
    tools: ['iMaster', 'Altiplano', 'Nokia OSS', 'OTDR', 'Keycom'],
    accent: 'green',
  },
  {
    id: 'automation',
    label: 'Industrial Automation',
    description: 'PLC programming, SCADA systems, and electrical design for industrial and wind power environments.',
    tools: ['Codesys', 'SCADA', 'Eplan', 'Cognex', 'Visual Components'],
    accent: 'blue',
  },
  {
    id: 'ml',
    label: 'Machine Learning & AI',
    description: 'Building and deploying ML models, data pipelines, and AI-driven backend services.',
    tools: ['Python', 'scikit-learn', 'Data pipelines', 'REST APIs', 'Model training'],
    accent: 'purple',
  },
  {
    id: 'trading-ai',
    label: 'Trading Analysis / AI Finance',
    description: 'Agent-based trading analysis, market data processing, and automation for Finnish market research.',
    tools: ['Python', 'Market data', 'Agent workflows', 'Analysis automation', 'Research tooling'],
    accent: 'green',
  },
  {
    id: 'backend',
    label: 'Backend Development',
    description: 'Designing and shipping TypeScript/Node.js services with PostgreSQL, containerized with Docker.',
    tools: ['Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Railway'],
    accent: 'amber',
  },
  {
    id: 'security',
    label: 'AI Security & AppSec Research',
    description:
      'AI-assisted vulnerability analysis, responsible disclosure, OWASP-oriented testing, and research into LLM attack surfaces such as prompt injection, tool misuse, jailbreaks, and data poisoning.',
    tools: ['AI-assisted testing', 'OWASP', 'Prompt injection', 'LLM red teaming', 'Responsible disclosure'],
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
