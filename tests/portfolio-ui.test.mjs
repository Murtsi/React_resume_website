import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'

const root = process.cwd()
const read = (file) => readFileSync(join(root, file), 'utf8')

test('major sections expose a real level-two heading', () => {
  for (const file of [
    'components/Expertise.tsx',
    'components/Projects.tsx',
    'components/Certifications.tsx',
    'components/Experience.tsx',
    'components/Contact.tsx',
  ]) {
    assert.match(read(file), /<h2\b/, `${file} should contain an h2`)
  }
})

test('project triggers and modal expose keyboard semantics', () => {
  const source = read('components/Projects.tsx')
  assert.match(source, /<button\b[^>]*className="project-card"/)
  assert.match(source, /role="dialog"/)
  assert.match(source, /aria-modal="true"/)
  assert.match(source, /aria-labelledby="project-dialog-title"/)
  assert.match(source, /focus\(\)/)
})

test('responsive and motion contracts are present', () => {
  const css = read('app/globals.css')
  assert.match(css, /minmax\(min\(100%, 300px\)/)
  assert.match(css, /\.project-card-image\s*\{[^}]*aspect-ratio:\s*2\s*\/\s*1/s)
  assert.match(css, /\.modal-image\s*\{[^}]*aspect-ratio:\s*2\s*\/\s*1/s)
  assert.match(css, /prefers-reduced-motion: reduce/)
  assert.match(css, /:focus-visible/)
  assert.match(css, /scroll-margin-top/)
})

test('security case copy stays focused on the demonstrated finding', () => {
  const data = read('lib/data.ts')
  assert.match(data, /SQL injection in the promo-code validation of a public membership checkout/)
  assert.doesNotMatch(data, /Research focus: AI-assisted security testing/)
  assert.doesNotMatch(data, /LLM attack surfaces such as prompt injection/)
})

test('agent security trace stays interactive and clearly in development', () => {
  const trace = read('components/AgentSecurityTrace.tsx')
  const security = read('components/SecurityResearch.tsx')

  assert.match(security, /<AgentSecurityTrace \/>/)
  assert.match(trace, /In development/)
  assert.match(trace, /Normal request/)
  assert.match(trace, /Prompt injection/)
  assert.match(trace, /Tool misuse/)
  assert.match(trace, /aria-pressed=/)
  assert.doesNotMatch(trace, /production-ready|automated vulnerability detection/i)
})

test('visible metadata no longer contains known stale claims', () => {
  assert.doesNotMatch(read('public/manifest.json'), /Fiber Optic Specialist/)
  assert.doesNotMatch(read('README.md'), /download CV button is currently removed/i)
  assert.doesNotMatch(read('components/Contact.tsx'), /next\.js 15/i)
})

test('Tarppi is the only featured project image', () => {
  const data = read('lib/data.ts')
  const projects = read('components/Projects.tsx')

  assert.match(data, /projectId: 'tarppi'/)
  assert.match(data, /image: '\/tarppi-preview\.png'/)
  assert.match(data, /liveUrl: 'https:\/\/www\.tarppi\.site\/'/)
  assert.doesNotMatch(data, /pentest-tool-preview\.png/)
  assert.match(projects, /hero\.featured\.projectId/)
})

test('downloadable CV stays aligned with the current career direction', () => {
  const source = read('scripts/generate_cv.py')

  assert.match(source, /Automaatiotekniikan opiskelija ja Technical Support/)
  assert.match(source, /AI- ja LLM-turvallisuuden tehtäviin/)
  assert.match(source, /Agent Security Lab/)
  assert.match(source, /Tärppi/)
  assert.match(source, /SQL-injektio/)
  assert.match(source, /Azure Fundamentals/)
  assert.match(source, /antti-murtokangas-562725158/)
  assert.doesNotMatch(source, /Verkkoasiantuntija/)
  assert.doesNotMatch(source, /Next\.js 15|Hashcat|Airgeddon/)
})
