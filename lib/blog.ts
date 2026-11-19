export interface BlogSection { heading: string; paragraphs: string[]; image?: string; imageAlt?: string }
export interface BlogFact { label: string; value: string }
export interface BlogPost { slug: string; title: string; date: string; category: string; summary: string; readTime: string; facts: BlogFact[]; sections: BlogSection[]; tags?: string[] }

export const blogPosts: BlogPost[] = [
  {
    slug: 'security-recon-console',
    title: 'A recon console that checks its own work',
    date: '04/11/26',
    category: 'Security notes',
    summary:
      'A security recon console I built for bug bounty work. It finds exposed services, throws away the noise before paying for a model, and refuses to touch anything outside a program\'s scope.',
    readTime: '8 min read',
    facts: [
      { label: 'Project type', value: 'Bug bounty automation' },
      { label: 'Stack', value: 'React 19, TypeScript, Python, FastAPI' },
      { label: 'Deployment', value: 'Docker on VPS' },
      { label: 'Status', value: 'In active use' },
    ],
    sections: [
      {
        heading: 'Why I built this',
        paragraphs: [
          'Bug bounty recon produces a lot of noise. A scanner can return thousands of hits in a day, and most of them are 404 pages, login screens, parked domains and default server pages. Reading all of that by hand is slow, and sending all of it to a language model is expensive.',
          'This is the tool I built to deal with that. It is a web console backed by a collector service. The collector discovers hosts, fetches their pages and decides whether a page shows a real exposure, such as an open admin panel, a directory listing with sensitive files or an API that answers without a login. The console is where I review what it found.',
          'The project started as a passive scanner for one country\'s address space. I then added a mode for bug bounty programs, and that is the version this post is about.',
        ],
        image: '/aukko/findings-hd.png',
        imageAlt: 'The findings inventory: filters, severity, confidence and the evidence behind each row',
      },
      {
        heading: 'How I use it',
        paragraphs: [
          'A bug bounty engagement is scoped by program. I pick a program, the program\'s published scope is synced in, and everything else is filtered through that engagement: the findings, the reports and the chat assistant. Reloading the browser puts me back in the same engagement.',
          'From there the loop is short. The collector fetches pages from in-scope hosts, the pipeline decides which ones matter, and I review the evidence for each finding and write the report from it. The tool does the sorting. I still make every decision about what gets reported.',
        ],
      },
      {
        heading: 'Throwing out the noise before it costs money',
        paragraphs: [
          'Most pages cannot be a finding, and a model does not need to tell me that. Before any model sees a page, a plain rule-based screen checks it. It drops pages that return 404 or 500 errors, refuse access, serve a file instead of a page, show a stock server install or a parked domain, sit behind a login form, or contain almost no text. It also drops ordinary pages with no sign of an admin tool, API or open directory.',
          'Whatever passes goes to a model. If that model errors, is unsure, or claims an exposure without proof, the page gets a second opinion. A confident "nothing here" never gets one. The pipeline supports a cheap first tier and a stronger second tier, so the expensive model only sees the pages that need it. Right now I run both tiers on the same inexpensive model, so the screen in front of them is the part that keeps most pages away from a model at all.',
        ],
      },
      {
        heading: 'A model has to quote its evidence',
        paragraphs: [
          'Language models sometimes sound sure about things that are not on the page. So when the model says a page exposes something, it must include a quote copied from the captured page. The code then checks that the quote really appears in the capture. If it does not, the claim is treated as unverified and goes back for another look instead of becoming a finding.',
          'A few cases never need a model at all. A directory listing that holds one tiny file and nothing sensitive is rejected by a fixed rule.',
        ],
      },
      {
        heading: 'Staying inside the rules of the program',
        paragraphs: [
          'Bug bounty programs publish what you may test. Touching anything else can get you banned or worse, so scope is the part of the tool I was most careful with.',
          'A host that matches no rule from the program is refused. There is no fallback that guesses it is probably fine. A wildcard such as *.example.com covers subdomains, not example.com itself, unless the program also lists that domain. An exclusion beats every other setting.',
          'When a program publishes a daily request limit, that budget is shared across all workers. If the counter cannot be read, the tool sends nothing instead of guessing. Requests to the same host are spaced out, and any active tool runs from a fixed list of command templates. A model can fill in arguments but cannot write a shell command.',
        ],
      },
      {
        heading: 'Playbooks chosen by rules, with reasons',
        paragraphs: [
          'Once a page looks interesting, the tool suggests what to test next. It reads the page it already captured and notes what it can see: a GraphQL endpoint, an upload form, an ID in a query string, a database error message. A scoring function then ranks the playbooks that match and returns at most three.',
          'I made this a scored function and not a prompt because I want to answer "why did it suggest that?" with something I can check. Every suggestion lists the signals that produced it, and a page with no strong signal gets no suggestion at all.',
        ],
        image: '/aukko/skills-hd.png',
        imageAlt: 'The Skills page: a library of testing playbooks, many distilled from disclosed HackerOne reports',
      },
      {
        heading: 'The playbook library',
        paragraphs: [
          'The playbooks live in the Skills page as plain markdown. Many were distilled from publicly disclosed HackerOne reports and the rest I wrote by hand. In this build the page is read-only.',
        ],
      },
      {
        heading: 'The assistant inside the console',
        paragraphs: [
          'A chat assistant works from the findings in the active engagement. I use it for questions like which finding is most likely a true positive, or what evidence a triager would want before I submit.',
          'Its tools are limited on purpose. It can read findings, screenshots and the request and response pairs behind them. The one thing it can do beyond reading is retake a screenshot, and that sends a single request to the target, so it goes through the same scope check as everything else. A tool the model invents does not exist. The API key stays on the server, and the browser never sees it.',
        ],
        image: '/aukko/nyx-chat-hd.png',
        imageAlt: 'Chat assistant grounded in the findings of the current engagement',
      },
      {
        heading: 'What it is built with',
        paragraphs: [
          'The console is React 19 and TypeScript, built with Vite and styled with Tailwind. It uses TanStack Virtual to keep a long findings table fast, Radix for accessible dialogs, and Auth0 for sign-in. Unit tests run on Vitest, and Playwright scripts check the console on desktop and mobile layouts.',
          'The collector is a Python service that stores its data in Postgres and uses Redis for queues and shared counters. It runs in Docker on a small VPS.',
          'The design rule I kept coming back to is that the console only shows what the collector returns. There is no demo data and no placeholder chart. If the API is not connected or has nothing to show, the page says that.',
        ],
      },
      {
        heading: 'What I would tell another engineer',
        paragraphs: [
          'Put the cheap, deterministic checks in front of the expensive, fuzzy ones. Make the model show its evidence and verify it in code. Make the scope check fail closed, and put it in one place so no tool can skip it. Those three decisions did more for the quality of the output than any prompt change.',
        ],
      },
      {
        heading: 'What is next',
        paragraphs: [
          'Discovery today combines subdomain enumeration with optional search-engine data. The next step is a campaign model: a named set of domains a program authorises, with its own schedule and budget, discovered from free sources only, with port checks added. That design is written up but not built yet, so I treat it as a plan and not a feature.',
        ],
      },
    ],
  },
  {
    slug: 'tarppi-event-monitor',
    title: 'Building Tärppi: A Real-Time Event Reservation System',
    date: '14/08/26',
    category: 'Software notes',
    summary:
      'How I built a live event monitoring and ticket reservation tool for Kide.app using React, Express, and Railway. The system tracks events, scores demand, and reserves tickets when sales open.',
    readTime: '7 min read',
    tags: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Railway'],
    facts: [
      { label: 'Project type', value: 'Event automation' },
      { label: 'Stack', value: 'React 19, TypeScript, Express 5, PostgreSQL' },
      { label: 'Deployment', value: 'Vercel (frontend), Railway (backend)' },
      { label: 'Status', value: 'Live at tarppi.site' },
    ],
    sections: [
      {
        heading: 'The Problem',
        paragraphs: [
          'Popular events on Kide.app sell out in seconds. Users need to be online exactly when sales open, navigate the UI quickly, and hope their connection holds. Missing a drop means waiting for resale or missing the event entirely.',
          'I wanted a system that could monitor events continuously, notify me when sales open, and automatically reserve tickets to my cart — all running on a server so browser crashes or network hiccups wouldn\'t kill the reservation.',
        ],
      },
      {
        heading: 'The Solution',
        paragraphs: [
          'Tärppi is a full-stack event monitor built with React 19, TypeScript, Express 5, and PostgreSQL. The frontend runs on Vercel, the backend runs on Railway, and an optional FastAPI reranker scores events by demand.',
          'The core workflow: users paste a Kide.app event URL, the system validates it, tracks the event, and schedules a reservation job. When sales open, the backend reserves the selected ticket variant to the user\'s cart and sends a Telegram alert. Payment still happens on Kide.app — Tärppi just handles the speed-critical reservation step.',
          'The system is live at tarppi.site and has been reserving tickets successfully since launch.',
        ],
        image: '/blog/tarppi-dashboard.png',
        imageAlt: 'Tärppi dashboard showing Helsinki event listings, event lookup, and Telegram notification setup',
      },
      {
        heading: 'Architecture',
        paragraphs: [
          'The frontend is a compact operations console. It shows backend health, token status, active scans, and reservation state in one view. Users can paste event URLs, browse city scans, configure their Kide.app token, and start reservation jobs without navigating between pages.',
          'The backend polls Kide.app for event updates, persists jobs in PostgreSQL for restart recovery, and uses an encrypted session store for user tokens. Reservation jobs run server-side in isolated workers, so closing the browser doesn\'t cancel the job.',
          'The optional AI reranker uses FastAPI and scikit-learn to score events based on historical demand patterns. If it\'s offline, the system falls back to heuristic scoring.',
        ],
      },
      {
        heading: 'Technical Decisions',
        paragraphs: [
          'Server-side jobs were non-negotiable. Browser-based reservation scripts fail when the tab closes, the laptop sleeps, or the network drops. Railway provides persistent compute with auto-restart, so jobs survive deployments.',
          'Token storage needed to balance security and usability. I encrypt tokens with a rotation-capable key, store them in PostgreSQL, and clear them on logout. Users re-authenticate by pasting a fresh token from their Kide.app session.',
          'Telegram notifications provide instant feedback without requiring users to check the app. When a ticket lands in the cart, the bot sends the event name, variant, and a direct link.',
        ],
      },
      {
        heading: 'Kide.app Integration',
        paragraphs: [
          'Kide.app has no public API, so Tärppi works by observing the same HTTP requests the website makes. The system respects rate limits, only fetches events users have explicitly tracked, and never attempts payment — that step stays manual.',
          'Event URLs are validated before tracking. The system extracts the event ID, fetches metadata, checks that sales haven\'t ended, and stores the event details. Invalid or expired links are rejected immediately.',
          'Reservation timing matters. The system schedules the job slightly before the official sale time, waits for the exact moment, then sends the reservation request. If the sale time shifts, the job adapts.',
        ],
      },
      {
        heading: 'Challenges',
        paragraphs: [
          'Timing precision was difficult. Clocks drift between the client, Railway, and Kide.app. I poll event metadata for updated sale times and use server timestamps to avoid client clock skew.',
          'Error handling needed to be specific. A failed reservation could mean the event sold out, the token expired, the variant is unavailable, or the network timed out. The system logs the exact failure reason and surfaces it in the UI.',
          'Concurrent users required job isolation. Each reservation runs in its own worker with its own token and cart state. Shared state would let one user\'s cart leak into another\'s.',
        ],
      },
      {
        heading: 'Current Status',
        paragraphs: [
          'Tärppi is live at tarppi.site. The backend has successfully reserved tickets for multiple events, the Telegram bot delivers alerts reliably, and the UI handles backend outages gracefully.',
          'The public repository at github.com/Murtsi/Kidehiiri-public contains product documentation and links. The private source includes the full implementation, deployment configs, and tests.',
          'Future work includes better mobile UX for small screens, historical success rate tracking, and support for more ticket platforms.',
        ],
      },
      {
        heading: 'Stack',
        paragraphs: [
          'Frontend: React 19, TypeScript, Vite, Tailwind CSS, deployed on Vercel.',
          'Backend: Express 5, PostgreSQL, Railway deployment with Nixpacks.',
          'AI Reranker (optional): FastAPI, scikit-learn, Railway.',
          'Notifications: Telegram Bot API.',
          'Testing: Playwright for end-to-end flows, Vitest for unit tests.',
        ],
      },
    ],
  },
  {
    slug: 'security-disclosure-checkout',
    title: 'SQL injection in campaign-code validation during checkout',
    date: '22/05/26',
    category: 'Security notes',
    readTime: '4 min read',
    summary: 'How I confirmed a checkout SQL injection, limited the test, and reported it without exposing customer data.',
    facts: [
      { label: 'Reported', value: '22/05/26' },
      { label: 'Classification', value: 'SQL injection (CWE-89)' },
      { label: 'Affected input', value: 'Campaign-code validation' },
      { label: 'Status', value: 'Patched' },
    ],
    sections: [
      {
        heading: 'Summary',
        paragraphs: [
          'While testing a public membership checkout, I found SQL injection behavior in the campaign-code field. A limited test also showed that the issue could be used to bypass payment during signup.',
          'I stopped once the finding and its impact were clear. The operator is not named here, and I have left out the payload and reproduction details that would make the issue easier to misuse.',
        ],
      },
      {
        heading: 'What I found',
        paragraphs: [
          'The checkout accepted campaign-code input that changed the database query behavior. The finding fits SQL injection, classified as CWE-89.',
          'I did not have access to the application source, so I could not verify how the query was built internally. The report described the behavior I could reproduce from the checkout rather than guessing at the vendor\'s implementation.',
        ],
      },
      {
        heading: 'Testing boundary',
        paragraphs: [
          'I tested only the campaign-code path needed to confirm the issue. No customer data was accessed or changed. I did not run automated scans, test unrelated endpoints, or attempt destructive database operations.',
          'Once I had a repeatable result and understood the payment impact, more testing would only have added risk. It would not have made the report more useful.',
        ],
      },
      {
        heading: 'Impact',
        paragraphs: [
          'The confirmed impact was a payment bypass in the membership checkout. That was enough to make the issue financially relevant without testing whether other database operations or data were reachable.',
          'The public version of this case stays with that observed result. Broader attack scenarios were not tested and are not presented as findings.',
        ],
      },
      {
        heading: 'Disclosure',
        paragraphs: [
          'On 22/05/26, I sent the report to the operator\'s data protection officer and relevant security contacts. It included a description of the issue, limited reproduction steps, the observed payment impact, and the boundaries of my testing.',
          'The affected path was later patched.',
        ],
      },
    ],
  },
]
