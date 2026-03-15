# AGENTS.md

## Project Snapshot

This repository contains my personal website, used to showcase me, my work, and
related content.

The site should be maintainable long term and able to expand over time without
becoming difficult to reason about.

## Core Priorities

1. Consistency
2. Modularity
3. Simplicity

If a tradeoff is required, choose correctness and robustness over short-term convenience.

## Expandability

Build in a way that supports long-term maintenance and incremental expansion.

Guidelines:

- Prefer composable solutions when the added complexity is justified
- Avoid premature abstraction
- Do not over-engineer for hypothetical future features
- When possible, extend existing patterns instead of creating parallel ones

## Tech Stack

- CSS: TailwindCSS
- UI: shadcn/ui, Yet Another React Lightbox
- Frontend/Edge: TanStack Start, React, TypeScript
- Backend/DB: Supabase
- Hosting: Cloudflare Workers

## General Working Rules

- Make focused, minimal changes
- Preserve existing patterns unless there is a clear reason to improve them
- Do not add dependencies unless necessary
- Prefer readability over cleverness
- Reuse existing components, utilities, and patterns before introducing new ones
- Keep code organized and easy to extend

## Code Conventions

- Use TypeScript for all new code
- Prefer clear, descriptive names
- Keep components and functions small and focused
- Avoid deeply nested logic when a simpler structure is possible
- Keep presentational components separate from data-fetching or backend logic
- Follow the existing file and folder structure unless a change is justified

If unsure of what to pattern to follow. Prompt user back with options.

## UI and Styling

- Prefer existing shadcn/ui components and project UI primitives where possible
- Use Tailwind CSS consistently with the patterns already present in the codebase
- Avoid unnecessary one-off styling when an existing utility pattern works
- Keep the UI clean, responsive, and accessible
- Preserve visual consistency across pages and sections

## Data and Backend Rules

- Use Supabase through shared utilities or service layers where practical
- Avoid scattering direct database access across unrelated files
- Keep secrets and sensitive values out of source files
- Do not change database structure, policies, or auth-related logic unless
  explicitly requested

## Cloudflare Workers Compatibility

- Keep Cloudflare Workers runtime constraints in mind
- Avoid Node-specific APIs unless compatibility is confirmed
- Prefer platform-compatible patterns for server and edge code

## Commands

Use `pnpm` for package management and script execution.

- Development server: `pnpm dev`
- Lint: `pnpm lint`
- Format: `pnpm format`
- Build: `pnpm build`

## Validation

Before finishing work:

- Run `pnpm lint`
- Run `pnpm build` for changes that affect runtime behavior or structure
- Run `pnpm format` if formatting changes are needed
- Run relevant tests if they exist

## Safe Change Policy

- Do not modify database schema, RLS policies, or auth logic unless explicitly requested
- Do not change Cloudflare deployment or infrastructure configuration unless explicitly requested
- Do not introduce new dependencies unless necessary
- Do not refactor unrelated code
- Prefer minimal, reversible changes

## If Unsure

If requirements are unclear or a change may have broader architectural impact:

- stop and ask for clarification
- explain the tradeoffs
- choose the safest minimal path by default
