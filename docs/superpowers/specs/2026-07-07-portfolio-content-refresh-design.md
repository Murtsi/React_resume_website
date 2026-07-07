# Portfolio Content Refresh Design

## Goal

Refresh the portfolio content while keeping the site in English and preserving the existing technical editorial style. Lightly sharpen the positioning toward AI-assisted security research, AppSec, and LLM security interests.

## Project Section

The project section will show four projects in this order:

1. Tärppi — Event Monitoring & Ticket Reservation Assistant
2. Työhakuri — AI Job Search Copilot
3. KauppaAgentit — Finnish Market Analysis Agents
4. Pentesting Tool — Private Security CLI Framework

The current Portfolio project card will be removed. Fament will not be shown until the business or confidentiality situation is clear.

## Security Research Section

Add a separate `Security Research` section after projects and before certifications. It will also receive its own nav link.

The section should not reuse the project card pattern. It will be a single wide research-note style block with a title, a concise metadata line, and the factual disclosure text:

> Found and responsibly reported an unauthenticated SQL injection vulnerability in a Finnish fitness platform's public checkout flow. The issue was tied to promo-code validation and could have allowed payment bypass during membership signup. Reported through the operator's official channel under coordinated disclosure.

The fitness platform will not be named. The entry will not use badges; badges stay limited to project cards.

## AI Security Positioning

The page should make the user's interest in AI-based penetration testing, AI-assisted security research, LLM attack surfaces, prompt injection, jailbreaks, and data poisoning visible without making unsupported claims. This can be handled through the hero label and the existing expertise section.

## Data And Components

Content should stay centralized in `lib/data.ts` where practical. The new section can use a small dedicated component so the page structure remains simple:

- Update `navLinks`.
- Update `projects`.
- Add `securityResearch` data.
- Add a `SecurityResearch` component.
- Render it between `Projects` and `Certifications`.

## Verification

Run the existing build or lint command available in the repository after implementation. Also inspect the rendered page enough to confirm the new nav link, project order, removed Portfolio card, and Security Research note appear correctly.
