# Recruiter Polish and Motion Design

## Design read

Reading this as a recruiter-first developer portfolio and technical journal with a calm editorial language, using Geist, warm monochrome surfaces, one coral accent, and restrained native motion.

## Dials

- Design variance: 5. Keep the asymmetric editorial structure but reduce dramatic scale.
- Motion intensity: 4. Motion supports orientation, hierarchy, and loading only.
- Visual density: 4. Shorten large empty spans while preserving scan-friendly separation.

## Changes

- Reduce portfolio, blog, article, section, and contact heading scales.
- Keep the three-line role statement but fit the whole idea comfortably in the first viewport.
- Replace the translating masked border with a corner-origin perimeter highlight that does not cross content.
- Add native smooth anchor scrolling and one IntersectionObserver-based reveal controller for section content.
- Add an article reading-progress bar.
- Add route-level skeletons and a four-dot blog navigation indicator inspired by the supplied loader reference.
- Refine the article opening into a compact header and readable centered column.
- Preserve keyboard behavior, reduced-motion support, and the portfolio/blog content boundary.

## Source decisions

- Bouayaben: retain strong left alignment and a single accent, reduce its display scale for recruiter scanning.
- Motion Primitives animated background: use motion for clear active/loading state rather than decoration.
- Magic UI border beam: retain a perimeter cue but correct its geometry and reserve it for featured content.
- Uiverse four-dot loader: adapt the rhythm into a small route-transition indicator without copying the surrounding visual style.
