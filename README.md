# Inn The Middle — website

A Next.js site for Inn The Middle, 125 Station Road, Langley Mill NG16 4DU.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Deploy

This is a standard Next.js app, so it deploys to any Next.js-compatible host
with no extra configuration.

### Vercel (recommended, free tier available)

1. Push this folder to a GitHub repository.
2. Go to https://vercel.com, sign in, and click "Add New Project".
3. Import the repository — Vercel auto-detects Next.js and deploys it.
4. Add your custom domain under Project Settings → Domains.

### Netlify

1. Push this folder to a GitHub repository.
2. Go to https://app.netlify.com, "Add new site" → "Import an existing project".
3. Netlify auto-detects Next.js (build command `npm run build`, no publish
   directory override needed with the Next.js Runtime plugin).

### Any Node host (self-managed)

```bash
npm install
npm run build
npm run start
```

This starts a production server on port 3000 (set `PORT` to change it).

## Project notes

- Images live in `public/images` and are referenced as `/images/...`.
- Page content is split by route under `app/` (`/`, `/our-menu`, `/gallery`,
  `/reviews`), each pulling in section components from `components/`.
- Styling uses Tailwind CSS v4 (config lives in `app/globals.css` via
  `@theme`, not a separate `tailwind.config.js`).
