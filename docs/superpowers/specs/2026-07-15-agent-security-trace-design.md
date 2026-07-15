# Agent Security Trace Local Concept Design

## Goal

Add a local visual concept that makes Antti's AI and LLM security direction tangible without presenting the unfinished agent-security project as completed work.

## Placement And Hierarchy

- Keep Tarppi as the featured project and primary product proof.
- Keep the responsible SQL injection disclosure as a separate, completed security case.
- Add an `Agent Security Lab` concept below the disclosure case inside the existing security section.
- Mark the concept `In development` in visible text.
- Do not add a navigation item or a new top-level page section.

## Interaction Model

The concept contains a three-option segmented control:

1. Normal request
2. Prompt injection
3. Tool misuse

Changing the scenario updates a compact trace with four stages:

1. Input
2. Agent
3. Policy gate
4. Tool

The normal request reaches the tool. Prompt injection stops at the policy gate. Tool misuse reaches the policy gate and is denied before execution. The visualization is an explanatory local concept, not a claim that a complete detection engine exists.

## Visual Direction

- Preserve the existing graphite background, restrained green, blue, amber, and purple accents, square geometry, typography, and compact spacing.
- Present the trace as a genuinely framed visualization tool, not a decorative card nested inside another card.
- Use solid lines and restrained color changes instead of neon, glow-heavy cyberpunk styling, gradients, matrix effects, scanlines, particles, or 3D tilt.
- Use a horizontal trace on wider screens and a vertical trace on narrow screens.
- Animate only the active signal path and scenario state change.
- Keep content visible by default; animation only enhances the state transition.

## Content

Heading: `Agent Security Lab`

Status: `In development`

Description: `A local concept for exploring how an LLM agent handles untrusted input and tool requests. The project is currently in development.`

Scenario outcomes use factual interface labels such as `Allowed`, `Blocked`, and `Denied`. The copy must not claim production deployment, automated vulnerability detection, broad red-team coverage, or a finished security product.

## Accessibility

- Implement the scenario selector as real buttons with an accessible group label and pressed state.
- Do not rely on color alone: every outcome includes a text status.
- Preserve visible focus styles and logical keyboard order.
- Keep touch targets at least 44 pixels high.
- Disable trace motion under `prefers-reduced-motion: reduce` while preserving the final state.
- Do not rely on hover for any information or control.

## Implementation Boundaries

- Add one focused client component for scenario state.
- Reuse existing CSS variables and component conventions.
- Do not add Motion, GSAP, Three.js, a component library, or another runtime dependency.
- Keep the current project dialog implementation unchanged.
- Keep the PDF CV static and outside this visual change.

## Verification

- Add focused source-contract coverage for the in-development label, all three scenarios, and the absence of inflated security claims.
- Run the existing Node tests, TypeScript check, lint, and production build.
- Verify the interaction with mouse and keyboard.
- Verify 1280 px desktop and 390 px, 375 px, and 320 px mobile layouts.
- Verify no horizontal overflow and no overlapping stage labels.
- Verify the reduced-motion state and readable contrast.

## Non-Goals

- No actual LLM, policy engine, model API, or security scanner integration.
- No public deployment decision in this change.
- No cyberpunk redesign or site-wide animation system.
- No claim that the empty `LLM breaker` repository already implements the displayed behavior.
