import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
const root = process.cwd()
const read = (file) => readFileSync(join(root, file), 'utf8')

test('portfolio keeps disclosure details on the blog route', () => {
  const home = read('app/page.tsx')
  const blog = read('lib/blog.ts')
  assert.match(home, /Security disclosures/)
  assert.match(home, /blogPosts\[0\]\.slug/)
  assert.match(blog, /22\/05\/26/)
  assert.match(blog, /SQL injection \(CWE-89\)/i)
})

test('abandoned agent lab is removed', () => {
  assert.doesNotMatch(read('app/page.tsx'), /Agent Security Lab|AgentSecurityTrace/)
  assert.doesNotMatch(read('scripts/generate_cv.py'), /Agent Security Lab/)
})

test('separate blog routes and accessibility contracts exist', () => {
  assert.match(read('app/blog/page.tsx'), /blogPosts/)
  assert.match(read('app/blog/[slug]/page.tsx'), /generateStaticParams/)
  assert.match(read('components/Nav.tsx'), /aria-label="Toggle color theme"/)
  assert.match(read('app/globals.css'), /prefers-reduced-motion/)
})

test('selected work still leads with Tarppi', () => {
  const data = read('lib/data.ts')
  assert.match(data, /id: 'tarppi'/)
  assert.match(data, /https:\/\/www\.tarppi\.site\//)
})

test('hero states the three current roles directly', () => {
  const home = read('app/page.tsx')
  assert.match(home, /Working in technical support/)
  assert.match(home, /Studying automation engineering/)
  assert.match(home, /Learning cybersecurity and LLM red teaming/)
})

test('portfolio renders every saved certification with verification links', () => {
  const home = read('app/page.tsx')
  assert.match(home, /certifications\.map/)
  assert.match(home, /cert\.verifyUrl/)
  assert.match(home, /id="certifications"/)
})

test('scroll experience uses Lenis without delayed DOM hiding', () => {
  assert.equal(existsSync(join(root, 'components/ScrollExperience.tsx')), true)
  const layout = read('app/layout.tsx')
  const scroll = read('components/ScrollExperience.tsx')
  assert.match(layout, /<ScrollExperience \/>/)
  assert.match(scroll, /new Lenis/)
  assert.match(scroll, /prefers-reduced-motion/)
  assert.doesNotMatch(scroll, /IntersectionObserver|setTimeout|data-revealed/)
})

test('blog navigation uses a lightweight progress transition', () => {
  assert.equal(existsSync(join(root, 'components/BlogPostLink.tsx')), true)
  assert.equal(existsSync(join(root, 'app/blog/loading.tsx')), false)
  assert.match(read('app/blog/page.tsx'), /BlogPostLink/)
  assert.match(read('components/BlogPostLink.tsx'), /from 'next\/link'/)
  assert.match(read('components/BlogPostLink.tsx'), /route-progress/)
  assert.doesNotMatch(read('components/BlogPostLink.tsx'), /router\.push|route-loader-dots/)
})

test('motion system avoids the translating midpoint border animation', () => {
  const css = read('app/globals.css')
  assert.doesNotMatch(css, /@keyframes beam\{to\{transform:translateX\(100%\)\}\}/)
  assert.match(css, /\.reading-progress/)
  assert.match(css, /\[data-reveal\]/)
  assert.match(css, /animation-timeline:\s*view/)
  assert.match(css, /\.route-progress/)
  assert.doesNotMatch(css, /\.route-loader-dots/)
  assert.match(read('app/layout.tsx'), /data-scroll-behavior="smooth"/)
})

test('portfolio copy is direct and recruiter friendly', () => {
  const home = read('app/page.tsx')
  assert.match(home, /Skills and working style/)
  assert.match(home, /Projects I have built and maintained/)
  assert.doesNotMatch(home, /The useful middle|show how I think and ship|sits between systems and people|finding the sharp edge/)
})

test('theme preference persists without a route flash', () => {
  const nav = read('components/Nav.tsx')
  const layout = read('app/layout.tsx')
  assert.match(nav, /localStorage\.setItem\('portfolio-theme'/)
  assert.match(nav, /aria-pressed=/)
  assert.match(layout, /portfolio-theme/)
  assert.match(layout, /prefers-color-scheme/)
  assert.match(layout, /suppressHydrationWarning/)
})

test('navigation keeps recruiter destinations available on mobile', () => {
  const nav = read('components/Nav.tsx')
  const css = read('app/globals.css')
  assert.match(nav, /className="menu-toggle"/)
  assert.match(nav, /aria-expanded=/)
  assert.match(nav, />Email<\/a>/)
  assert.match(nav, /href:\s*'\/#security'/)
  assert.match(nav, /aria-current=/)
  assert.match(css, /min-height:\s*44px/)
  assert.match(css, /\.mobile-menu/)
})

test('email actions use the concise label', () => {
  const home = read('app/page.tsx')
  const nav = read('components/Nav.tsx')
  assert.match(home, />Email <span/)
  assert.match(nav, />Email<\/a>/)
  assert.doesNotMatch(`${home}\n${nav}`, /Email Antti/)
})

test('homepage exposes recruiter proof paths near relevant projects', () => {
  const home = read('app/page.tsx')
  assert.match(home, /SupportingProject/)
  assert.match(home, /View repository/)
  assert.match(home, /Private project/)
})

test('featured project image uses responsive Next image optimization', () => {
  const home = read('app/page.tsx')
  assert.match(home, /from 'next\/image'/)
  assert.match(home, /loading="lazy"/)
  assert.match(home, /sizes=/)
  assert.doesNotMatch(home, /<img src=\{featured\.image\}/)
})

test('disclosure article includes concise verified case facts', () => {
  const blog = read('lib/blog.ts')
  const article = read('app/blog/[slug]/page.tsx')
  assert.match(blog, /facts:/)
  assert.match(blog, /Status', value: 'Patched'/)
  assert.match(article, /article-facts/)
})

test('reduced motion preserves navigation feedback', () => {
  const css = read('app/globals.css')
  assert.match(css, /prefers-reduced-motion:[\s\S]*\.route-progress[\s\S]*transform:\s*scaleX\(1\)/)
})

test('portfolio keeps CV in the hero only and omits availability metadata', () => {
  const home = read('app/page.tsx')
  const nav = read('components/Nav.tsx')
  assert.match(home, /Download CV/)
  assert.match(home, /Selected work[\s\S]*Download CV[\s\S]*Read the journal/)
  assert.doesNotMatch(home, /SEAMK · Finland|Open to practical engineering roles|proof-meta/)
  assert.doesNotMatch(nav, /nav-cv|Download CV/)
})

test('featured image preserves source detail and native composition', () => {
  const home = read('app/page.tsx')
  const css = read('app/globals.css')
  assert.match(home, /quality=\{90\}/)
  assert.match(css, /\.featured-work-media\s*\{[^}]*aspect-ratio:\s*1906\s*\/\s*948/s)
  assert.match(css, /\.featured-work-media img\s*\{[^}]*object-fit:\s*contain/s)
})

test('portfolio includes a progressive viewport veil and targeted interaction polish', () => {
  const home = read('app/page.tsx')
  const css = read('app/globals.css')
  assert.match(home, /className="scroll-veil"/)
  assert.match(css, /\.scroll-veil/)
  assert.match(css, /backdrop-filter:\s*blur/)
  assert.match(css, /animation-timeline:\s*scroll/)
  assert.match(css, /\.role-title span/)
  assert.match(css, /\.featured-work:hover/)
  assert.match(css, /\.expertise-row:hover/)
  assert.match(css, /\.certification-item:hover img/)
})

test('public disclosure is factual, scoped, and based on the supplied report', () => {
  const blog = read('lib/blog.ts')
  assert.match(blog, /CWE-89/)
  assert.match(blog, /data protection officer/)
  assert.match(blog, /No customer data was accessed/)
  assert.match(blog, /parameterized quer/)
  assert.match(blog, /Status', value: 'Patched'/)
  assert.doesNotMatch(blog, /Remediation not confirmed|has not been confirmed/)
  assert.doesNotMatch(blog, /OR 1=1|data exfiltration|authentication bypass|Finnish fitness chain|\[Your Name\]/i)
})
