# Sts. Anthony & Lydia Foundation — Website

One-page Next.js website with scroll-to-section navigation, built for deployment on Vercel.

## Run locally (optional)

Requires Node.js 18+.

```bash
cd website
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

### Step 1 — Push to GitHub

1. Create a new repository at https://github.com/new (e.g. `foundation-website`). Keep it empty — no README.
2. In Terminal:

```bash
cd "/Users/kazeemojuade/Desktop/St. Anthony and Lydia Foundation/website"
git init
git add .
git commit -m "Foundation website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/foundation-website.git
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to https://vercel.com/new and sign in with GitHub.
2. Import the `foundation-website` repository.
3. Vercel auto-detects Next.js — leave all settings as default.
4. Click **Deploy**. Your site goes live at `foundation-website.vercel.app` in about a minute.

### Step 3 — Custom domain (optional)

In the Vercel project: **Settings → Domains → Add**, then follow the DNS instructions from your domain registrar.

## Updating content

- **Text**: edit the files in `components/` — each section is one file (Hero, About, MissionVision, Impact, Gallery, GetInvolved, Donate, Footer).
- **Photos**: the gallery currently uses stock placeholders. Replace the URLs in `components/Gallery.jsx` (and `Hero.jsx` / `About.jsx`) with your own photos — put image files in `public/` and reference them as `/filename.jpg`.
- **Impact numbers**: edit `components/Impact.jsx`.
- **Bank details**: edit `components/Donate.jsx`.

Any push to `main` on GitHub automatically redeploys on Vercel.

## Online payments (later)

The "Donate Online" button is a placeholder. When ready, create a Paystack account and we can wire up a real payment flow.
