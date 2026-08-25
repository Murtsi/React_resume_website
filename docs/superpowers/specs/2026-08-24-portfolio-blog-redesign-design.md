# Portfolio and Blog Redesign

## Design read

Reading this as: a recruiter-first developer portfolio and a separate cybersecurity / IT journal, whose primary jobs are to make practical work scannable and make longer learning notes readable, using selected work plus dated editorial posts in a warm-black, cream, and coral visual language.

## Scope

- Remove the abandoned Agent Security Lab from the portfolio, data, tests, and CV-facing copy.
- Keep `/` as a clean portfolio surface for profile, selected work, experience, credentials, contact, and a compact Security disclosures section.
- Add `/blog` as a separate journal index and `/blog/security-disclosure-checkout` as the first full article.
- Date the disclosure article `22/05/26` and keep its detailed finding, impact, response, and learning content only in the article.
- Link the portfolio disclosure entry to the article without duplicating the case details.

## Visual direction

- Design variance: 7. Motion intensity: 5. Visual density: 4.
- One dark theme by default with warm white text and a single coral accent. A light theme uses the same accent and contrast relationships.
- Large left-aligned portfolio typography, compact proof metadata, clear section rhythm, and restrained borders instead of stacked cards.
- Desktop navigation uses a floating dock-inspired control. Mobile uses a compact horizontal navigation.
- Theme switching is an explicit accessible control. Motion is limited to navigation state, theme transition, hover feedback, and article loading affordances, with reduced-motion fallbacks.
- Progressive blur is reserved for the bottom of the blog index list. Border-beam treatment is reserved for the featured article / latest post.

## Routes and content model

- `app/page.tsx`: portfolio only.
- `app/blog/page.tsx`: blog index only.
- `app/blog/[slug]/page.tsx`: static article route with metadata and readable long-form layout.
- `lib/blog.ts`: typed post metadata and article sections, starting with one disclosure post.

## Content boundaries

The portfolio may identify the current disclosure by title, date, and a concise summary. It must not repeat the article's detailed finding, impact, response, or learning sections. The blog article must avoid naming the affected operator or exposing sensitive target details.

## Verification

- Existing project UI tests are updated to assert the Agent Security Lab is absent, the disclosure link and date are present, and blog routes/content exist.
- Run type checking, tests, and a production build.
- Run the local dev server and inspect desktop and mobile layouts before handoff.
