# Tarppi Featured Project and Recruiter Copy Design

## Goal

Make Tarppi the main visual proof on the portfolio and tighten the English copy so recruiters can quickly distinguish professional experience, coursework, and personal projects.

## Visual Direction

- Use the supplied Tarppi screenshot as the only featured project image.
- Feature Tarppi in the hero proof panel and at the top of Selected work.
- Keep Pentesting Tool as a smaller private learning project without an image.
- Remove the existing Pentesting Tool preview asset from `public` so private tooling is not visually exposed.
- Preserve the current quiet graphite interface, responsive structure, and project dialog behavior.

## Content Direction

The copy will stay in English and use first-person, factual language. It will avoid broad capability claims that are not supported by the current work history or project evidence.

The hierarchy will be:

1. Current technical support work in a fiber-operator environment.
2. Automation Engineering studies at SEAMK.
3. Practical TypeScript and Python projects, led by the live Tarppi service.
4. One responsibly disclosed SQL injection finding as limited, concrete security experience.

Industrial automation will be described as coursework and hands-on study. Software, AI, market analysis, and security work will be described as personal projects or learning where appropriate. The copy will not claim production ML deployments, professional backend ownership, or broad security expertise.

## Project Changes

### Tarppi

- Set `https://www.tarppi.site/` as the live URL.
- Use the supplied 1906 x 948 screenshot as `public/tarppi-preview.png`.
- Describe the verified functions: event monitoring for Kide.app and Tiketti, relevance scoring, cart reservation when sales open, and Telegram notifications.
- Avoid volatile numbers from the screenshot and avoid implying completed ticket purchases.

### Tyohakuri

- Present it as a private full-stack prototype in development.
- Name the implemented stack and experimental analysis without calling it a finished AI copilot product.

### KauppaAgentit

- State clearly that it is a Finnish adaptation and research experiment based on an existing agent framework.

### Pentesting Tool

- Keep it private and position it as a personal learning tool for authorized environments.
- Remove its image fields and any featured-project treatment.
- Keep the responsible-disclosure case separate from this tool.

## Interface Changes

- Select the featured project from `hero.featured.projectId` instead of hard-coding `pentesting-tool` in `Projects.tsx`.
- Change the hero proof status from `Private source` to a Tarppi live-site label.
- Use Tarppi's screenshot in the featured card and project dialog.
- Keep keyboard dialog behavior, focus restoration, and responsive image handling unchanged.

## Copy Audit Scope

Review and tighten:

- hero label, summary, and featured proof;
- project descriptions, detail copy, outcomes, and link labels;
- expertise labels, descriptions, and tool lists;
- section introductions;
- page metadata and manifest description.

Preserve factual work history, education dates, certification details, and contact information unless a clear inconsistency is found.

## Verification

- Add source-contract coverage that Tarppi is featured, `tarppi.site` is the live URL, and no Pentesting Tool image remains.
- Run the existing Node tests, TypeScript, lint, and a clean production build.
- Check desktop and 390 px, 375 px, and 320 px mobile layouts.
- Open the Tarppi dialog and verify the screenshot, live link, Escape close, and focus restoration.
- Confirm the removed Pentesting Tool image URL returns 404.

## Non-goals

- No Finnish translation.
- No new sections or navigation items.
- No claim of professional software, ML, or application-security employment.
- No redesign of the established visual system.
