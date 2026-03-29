# DSA Vault

LeetCode solutions with visual flow diagrams — from brute force to optimal — in Python and Java.

**Live site:** [dsavault.in](https://dsavault.in)

## Tech Stack

- **Astro v6** — static site generator (zero client JS by default)
- **Tailwind CSS v4** — dark vault theme
- **rehype-mermaid + Playwright** — build-time Mermaid → inline SVG rendering
- **Cloudflare Pages** — free hosting with unlimited bandwidth

## Project Structure

```
src/
├── content/
│   ├── problems/        # Problem .md files (content collection)
│   │   ├── 0001-two-sum.md
│   │   └── _template.md  # Template for new problems (excluded from build)
│   └── blog/            # Blog .md files
├── layouts/
│   ├── BaseLayout.astro
│   ├── ProblemLayout.astro
│   └── BlogLayout.astro
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── DifficultyBadge.astro
│   ├── YouTubeEmbed.astro
│   ├── AdPlacement.astro
│   ├── ProblemCard.astro
│   ├── Breadcrumbs.astro
│   └── SearchFilter.astro
├── pages/
│   ├── index.astro          # Homepage
│   ├── problems/            # Problem listings & detail pages
│   ├── company/             # Company index & filter pages
│   ├── topic/               # Topic index & filter pages
│   ├── difficulty/          # Easy/Medium/Hard filter pages
│   ├── blog/                # Blog listing & posts
│   ├── about.astro
│   ├── privacy-policy.astro
│   ├── contact.astro
│   └── 404.astro
├── plugins/
│   └── remark-mermaid-pre.mjs  # Fixes Shiki/Mermaid compatibility
├── styles/
│   └── global.css           # Tailwind theme config
└── utils/
    └── slug.ts
```

## Commands

| Command           | Action                                         |
| :---------------- | :--------------------------------------------- |
| `npm install`     | Install dependencies                           |
| `npm run dev`     | Start dev server at `localhost:4321`           |
| `npm run build`   | Build production site to `./dist/`             |
| `npm run preview` | Preview build locally before deploying         |

## Adding a New Problem

1. Copy `src/content/problems/_template.md` to a new file, e.g. `0053-maximum-subarray.md`
2. Fill in the frontmatter (title, number, difficulty, tags, companies, date_published)
3. Write the problem summary, brute force approach, and optimal approach
4. Add Mermaid diagrams using fenced code blocks with `mermaid` language
5. Run `npm run build` — the new problem page, topic pages, and company pages are all generated automatically

### Frontmatter Schema

```yaml
---
title: "Problem Title"
number: 53
difficulty: "Easy" | "Medium" | "Hard"
tags: ["Array", "Dynamic Programming"]
companies: ["Amazon", "Google"]
frequency: 85              # optional (0-100)
youtube_url: "https://..."  # optional
related_problems: ["0001-two-sum"]  # optional
date_published: 2026-03-28
---
```

## Deploy to Cloudflare Pages

### 1. Push to GitHub

```sh
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/dsavault.git
git push -u origin main
```

### 2. Connect Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create**
2. Select **Connect to Git** and choose your GitHub repository
3. Configure build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variable:** `NODE_VERSION` = `20`
4. Click **Save and Deploy**

### 3. Configure Custom Domain

1. **Namecheap:** Purchase `dsavault.in` (~$3-4/yr)
2. **Namecheap DNS settings:** Set nameservers to Cloudflare:
   - `ns1.cloudflare.com` (use the actual names Cloudflare gives you)
   - `ns2.cloudflare.com`
3. **Cloudflare Dashboard → DNS:** Add your domain and wait for verification
4. **Cloudflare Pages → Custom domains:** Add `dsavault.in` and `www.dsavault.in`
5. SSL/TLS is automatic — no additional configuration needed

### 4. Enable AdSense (after content is ready)

1. Reach ~15-20 quality problem pages
2. Apply at [Google AdSense](https://www.google.com/adsense/)
3. Once approved, update `src/components/AdPlacement.astro` with your AdSense client ID and slot IDs
4. Rebuild and deploy

## AdSense Ad Zones

The site has 3 ad placement zones on problem pages:
- **Header** — top of problem content
- **After Content** — below the solution
- **Footer** — above the page footer

All ad zones render as empty placeholder divs until configured with real AdSense IDs.
