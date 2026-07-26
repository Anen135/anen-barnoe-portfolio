# Portfolio · Anen Barnoe

Middle Fullstack Web Developer. 4+ года коммерческого опыта. React, Next.js, Node.js, NestJS, PostgreSQL и облачная инфраструктура.

## Quick Start

```bash
npm install
npm run dev
```

## Deploy

This project builds a vinext app for Cloudflare Workers with static assets.
It is not a plain Cloudflare Pages static deploy.

Requirements:

- Node.js 22.13+
- A Cloudflare account
- Wrangler authentication

Local deploy:

```bash
npm ci
npx wrangler login
npm run deploy
```

CI deploy:

```bash
npm ci
npm run deploy
```

Set these CI environment variables:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

To verify the upload package without publishing:

```bash
npm run deploy:dry-run
```

The build writes the Worker config to `dist/server/wrangler.json`, and the deploy
command publishes that generated config with assets from `dist/client`.
