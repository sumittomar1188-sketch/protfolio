# Sumit Tomar — Portfolio

Personal portfolio of Sumit Tomar, a Computer Science Engineering student focused on Artificial Intelligence and Machine Learning. The site presents projects, experience, skills, certificates, and contact information in an interactive skate-zine experience.

## Author and ownership

| Contact | Link |
| --- | --- |
| Author | Sumit Tomar |
| Email | [sumittomar1188@gmail.com](mailto:sumittomar1188@gmail.com) |
| GitHub | [sumittomar1188-sketch](https://github.com/sumittomar1188-sketch) |
| Repository | [protfolio](https://github.com/sumittomar1188-sketch/protfolio) |

Sumit Tomar holds the rights to the original project code and portfolio materials as described in [LICENSE](LICENSE). Third-party software, fonts, marks, and other assets remain under their respective licenses; this project does not claim ownership of them.

## About

Sumit is pursuing a B.Tech in Computer Science Engineering (Artificial Intelligence & Machine Learning) at Sushila Devi Bansal College of Engineering, Indore (2024–2028). His work includes AI applications and agents using tools such as LangChain, LangGraph, and Google ADK.

## Features

- Home page with the portfolio introduction and section navigation.
- Sections for experience, projects, technical skills, certificates, and contact.
- Animated rider and scroll rail, with section checkpoints and scroll interactions.
- Interactive project decks, skill wheels, and certificate binder.
- Contact form submission through Web3Forms.
- Reduced-motion behavior for visitors who request less motion.
- Static metadata and routes generated from the site configuration.

## Technology stack

- Next.js 16 with static export, React 19, and TypeScript.
- CSS Modules for component styling.
- Lenis for smooth scrolling.
- Custom TypeScript animation engine using `requestAnimationFrame` for the rider and scroll interactions.
- `@vercel/analytics` for analytics integration.
- `next/font` and the vendored Bowlby One font asset for typography and build-time image generation.
- ESLint, TypeScript, and Prettier for code checks and formatting.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/app/` | Home page, layout, metadata, and generated routes such as robots, sitemap, icons, and AI-readable profiles. |
| `src/components/sections/` | Page sections and their interactive UI components. |
| `src/config/` | Site identity, portfolio content, sections, theme, motion, and SEO configuration. |
| `src/features/ride/` | Rider overlay and animation engine. |
| `src/assets/fonts/` | Vendored font asset and its third-party license notice. |
| `scripts/rider/` | Source and generator used to produce rider artwork. |
| `docs/development.md` | Detailed development, architecture, and deployment guide. |
| `out/` | Generated static export created by the production build; do not edit by hand. |

## Installation and setup

Requirements: Node.js 22 or newer and npm.

```sh
npm ci
```

```powershell
Copy-Item .env.example .env.local
```

In `.env.local`, set the values for `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` and, when a canonical site domain is available, `NEXT_PUBLIC_SITE_URL`. `.env.local` is ignored by Git. Do not commit environment files.

The Web3Forms access key uses a `NEXT_PUBLIC_` variable and is included in the client-side static export. Treat it as public configuration, not as a server-side secret, and apply any access restrictions available from Web3Forms. Configure it in the deployment provider before building as well. No key value belongs in this README.

## Development and production build

Start the local development server:

```sh
npm run dev
```

Run the available checks and create the production export:

```sh
npm run lint
npm run typecheck
npm run build
```

`npm run build` creates the static site in `out/`. To serve that export locally, run `npm start`.

## Deployment

The project uses Next.js `output: "export"`; deployment does not require a Next.js server. Configure the environment values in the build environment, run `npm ci` and `npm run build`, then publish the contents of `out/` using a static host such as Vercel, Netlify, or Cloudflare Pages. Set `NEXT_PUBLIC_SITE_URL` to the canonical domain before building when one is configured. The Web3Forms key is also read at build time, so redeploy after changing it.

## Contact

- Email: [sumittomar1188@gmail.com](mailto:sumittomar1188@gmail.com)
- GitHub profile: [github.com/sumittomar1188-sketch](https://github.com/sumittomar1188-sketch)
- Repository: [github.com/sumittomar1188-sketch/protfolio](https://github.com/sumittomar1188-sketch/protfolio)
