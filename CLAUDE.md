# Ten Aker Wood — Crew Area Guide

Mobile-first local guide for the Ten Aker Wood film crew (Apr 11 - May 7, 2026). Deployed at tenaker.devonmeadows.com.

## Stack

- Next.js 16, React 19, TypeScript
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- GSAP, Lenis, SplitType (subtle animations)
- Phosphor Icons (`@phosphor-icons/react`)
- bun (package manager)
- Static export → Cloudflare Pages

## Commands

- `bun run dev` — local dev server
- `bun run build` — static export to `out/`
- `bun run lint` — eslint

## Architecture

- `data/venues.ts` — All venue data (typed array, one file)
- `data/emergency.ts` — Emergency contacts + safety tips
- `lib/types.ts` — Venue, EmergencyContact types
- `components/ui/venue-card.tsx` — Main reusable venue card
- `components/layout/nav.tsx` — Desktop top nav + mobile bottom tab bar

## Adding a Venue

Add to `data/venues.ts`. Follow the `Venue` type. Required fields: slug, name, category, description, address, coordinates, driveTime, tags.

## Design

- Warm cream/redwood palette (see globals.css CSS variables)
- Headlines: Fraunces (variable serif)
- Body: Geist Sans
- Mono: Geist Mono
- Mobile-first with fixed bottom tab bar
- Drive times from Cazadero General Store on every venue
