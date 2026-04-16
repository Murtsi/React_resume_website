export const navLinks = [
  { label: 'expertise', href: '#expertise' },
  { label: 'projects', href: '#projects' },
  { label: 'experience', href: '#experience' },
  { label: 'contact', href: '#contact' },
] as const

export const hero = {
  name: 'Antti Murtokangas',
  label: 'Automation Engineering Student · AI Systems · Backend',
  subtitle: [
    'Automation Engineering student at SEAMK.',
    'Building AI pipelines, automation tools, and backend systems.',
    'Working in fiber network support and developing practical technical solutions.',
  ],
  stats: [
    { value: '5+', label: 'domains' },
    { value: '8+', label: 'years in tech' },
    { value: '3+', label: 'live projects' },
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
    id: 'kidehiiri',
    name: 'Kidehiiri',
    description:
      'Real-time ticket monitoring platform with machine-learning based ticket scoring.',
    fullDescription:
      'Real-time ticket monitoring platform with ML scoring and a TypeScript/PostgreSQL backend.',
    stack: ['TypeScript', 'PostgreSQL', 'Python', 'Docker', 'Railway'],
    techBars: [
      { label: 'TypeScript', value: 58, color: '#3178C6' },
      { label: 'Python',     value: 24, color: '#3572A5' },
      { label: 'SQL',        value: 12, color: '#C44536' },
      { label: 'Docker / Shell', value: 6, color: '#2EA043' },
    ],
    liveUrl: 'https://kidehiiri.fi',
    githubUrl: 'https://github.com/Murtsi/Kidehiiri-public',
    status: 'live',
  },
  {
    id: 'api-scanner',
    name: 'Pentesting Tool (Private)',
    description:
      'Linux-focused pentesting tool for authorized assessments with reconnaissance, adaptive local learning, and structured reporting.',
    fullDescription:
      'Linux-focused pentesting tool for authorized assessments with reconnaissance, adaptive local learning, and structured reporting.',
    stack: ['Node.js', 'TypeScript'],
    techBars: [
      { label: 'TypeScript',  value: 72, color: '#3178C6' },
      { label: 'JavaScript',  value: 18, color: '#F1E05A' },
      { label: 'HTML',        value: 10, color: '#E34C26' },
    ],
    liveUrl: 'https://api-scanner-eta.vercel.app/',
    githubUrl: 'https://github.com/Murtsi',
    status: 'in development',
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    description: 'This site. Next.js 15, Tailwind CSS v4, and a technical editorial UI.',
    fullDescription:
      'Personal portfolio built with Next.js 15 and TypeScript. Technical editorial style, no animation libraries.',
    stack: ['Next.js 15', 'TypeScript', 'Tailwind v4'],
    techBars: [
      { label: 'TypeScript', value: 60, color: '#3178C6' },
      { label: 'Next.js',    value: 25, color: '#8B949E' },
      { label: 'Tailwind',   value: 15, color: '#06B6D4' },
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/Murtsi',
    status: 'live',
  },
  {
    id: 'tradingagents-finnish',
    name: 'AI / Market Data Experiment',
    description:
      'Agent-based market data workflow and automation experiment for Finnish markets.',
    fullDescription:
      'Agent-based market data workflow and automation experiment. Python pipelines processing Finnish market data.',
    stack: ['Python', 'Agent workflows', 'Market data'],
    techBars: [
      { label: 'Python',          value: 70, color: '#3572A5' },
      { label: 'Agent workflows', value: 20, color: '#BC8CFF' },
      { label: 'Market data',     value: 10, color: '#58A6FF' },
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/Murtsi/TradingAgents-Finnish',
    status: 'in development',
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
    label: 'Security & Recon',
    description: 'API vulnerability scanning, endpoint discovery, and basic security assessment tooling.',
    tools: ['API scanning', 'Endpoint discovery', 'Exposure analysis'],
    accent: 'green',
  },
] as const

export const contact = {
  email: 'antti.murtsi@gmail.com',
  githubLabel: 'github.com/Murtsi',
  githubUrl: 'https://github.com/Murtsi',
  linkedinLabel: 'linkedin.com/in/antti-murtokangas-562725158',
  linkedinUrl: 'https://www.linkedin.com/in/antti-murtokangas-562725158/',
} as const
