# marlonii-web (monorepo)

This repo contains multiple Astro sites:

- `www/` - main site (Astro + Tailwind + Cloudflare adapter)
- `blog/` - documentation/blog (Astro + Starlight)
- `minimal/` - minimal Astro starter (Astro + Tailwind + Cloudflare adapter)

## Local development

Install once at the repo root:

```sh
npm install
```

Then run the app you want:

```sh
npm run dev:www
npm run dev:blog
npm run dev:minimal
```

## Build

Build the shared scripts and all apps from the repo root:

```sh
npm run build
```

## Shared TypeScript scripts

Shared code for the Astro apps lives in the `scripts/` workspace.

## Repo maintenance notes

- App-specific configuration lives inside each app folder (`astro.config.mjs`, `tsconfig.json`, etc.).
- Shared “repo hygiene” (like `.gitignore` and `.editorconfig`) lives at the repository root.
