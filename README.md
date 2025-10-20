# Apple-style Website (Next.js + TypeScript)

This repository is a learning project: an Apple-style marketing website rebuilt while following a JS Mastery tutorial. The original tutorial used plain React + JavaScript and Zustand for state management. I reimplemented the example in Next.js (App Router) with TypeScript to learn more about GSAP for animations and Three.js (via react-three/fiber) for 3D model viewing.

## Key goals

- Recreate the tutorial visuals and interactions while practicing Next.js and TypeScript.
- Learn and integrate GSAP ScrollTrigger-driven animations.
- Integrate 3D models using react-three/fiber and control them from a small global store (Zustand).

## Tech stack

- Next.js (App Router)
- TypeScript
- GSAP (ScrollTrigger)
- react-three/fiber (Three.js integration)
- Zustand (global state management) — used in the original tutorial and kept here
- Tailwind-inspired utility CSS (custom utilities in `app/globals.css`)

## What’s included

- App Router layout in `app/layout.tsx` and a client-side `page.tsx` that mounts the UI.
- Components: `navbar`, `hero`, `product-viewer` (3D viewer), `showcase`, `performance`, `features`, `highlights`, `footer`.
- Local fonts in `public/fonts` and global styles in `app/globals.css`.
- A small Zustand store in `store/index.ts` to control the 3D viewer (color/scale etc.).
- Example 3D models under `public/models` and React wrappers under `components/models`.

## Running the project locally

1. Install dependencies

```bash
pnpm install
```

2. Run the development server

```bash
pnpm dev
```

3. Open http://localhost:3000 in your browser

> Note: This repo uses `pnpm` by default. If you prefer `npm` or `yarn`, update the lockfile accordingly.

## Notes and implementation details

- The original JS Mastery tutorial used Create React App + JavaScript. This project adapts the tutorial into Next.js + TypeScript. Client-only behavior (GSAP timelines, three.js rendering) is placed inside components marked with `"use client"`.
- ScrollTrigger must be registered on the client. I register it inside client components where needed and scope animations with `gsap.context` and `gsap.matchMedia()` to ensure correct cleanup and responsive behavior.
- The `product-viewer` component uses `react-three/fiber` to render local 3D models. Interactions are controlled via a small Zustand store (`store/index.ts`).
- Fonts: local `@font-face` declarations live in `app/globals.css`. For extra performance you can switch to `next/font/local` which automatically preloads fonts.

## Troubleshooting

- If GSAP timelines jump on first load, make sure CSS doesn't force starting transforms (use `fromTo` in GSAP or set `transform: none` on the element initially). Use `invalidateOnRefresh: true` and `scrub: 1` for smooth scroll-linked animations.
- If the 3D canvas doesn't render, ensure the component is client-only and that assets are present under `public/models`.

## Credits

- This project was rebuilt while following a JS Mastery tutorial (plain React + JavaScript). I used that tutorial as a learning resource and reimplemented the example in Next.js + TypeScript.

Tutorial and inspiration: JS Mastery

## License

MIT
