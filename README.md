# SKGULF Website

Corporate website for **SK Gulf**, implemented with **Next.js + TypeScript + App Router** and optimized for **Vercel deployment**.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4 + custom global CSS system

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Checks

```bash
npm run lint
npm run build
```

## SEO Files

- Global metadata: `src/app/layout.tsx`
- Structured data (Organization schema): `src/app/page.tsx`
- Robots: `src/app/robots.ts`
- Sitemap: `src/app/sitemap.ts`

## Content Update Points

Main homepage content lives in:

- `src/app/page.tsx`

Global look-and-feel variables and section styles:

- `src/app/globals.css`

## Deploy to GitHub + Vercel

1. Initialize and push to GitHub:

```bash
git init
git add .
git commit -m "Initial SK Gulf website"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

2. In Vercel:
   - Import GitHub repository
   - Framework preset: Next.js (auto-detected)
   - Build command: `npm run build`
   - Output: default

3. Connect domain:
   - Add `sk-gulf.com` and `www.sk-gulf.com` in Vercel Project Settings > Domains
   - Apply DNS records provided by Vercel at your domain registrar

## Notes

- This implementation started with a high-performance, SEO-first homepage structure inspired by enterprise corporate websites.
- Final text/media should be aligned with the approved SK Gulf brochure content and brand assets.
