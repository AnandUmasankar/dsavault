## 1. Project Initialization

- [x] 1.1 Initialize Astro project with TypeScript (`npm create astro@latest`)
- [x] 1.2 Install integrations: `@astrojs/mdx`, `@astrojs/sitemap`, `@astrojs/tailwind`
- [x] 1.3 Configure `astro.config.mjs` with all integrations, site URL `https://dsavault.in`
- [x] 1.4 Configure `tailwind.config.mjs` with custom dark vault theme colors (vault-bg, vault-surface, vault-primary, vault-text, vault-muted, difficulty colors)
- [x] 1.5 Set up Mermaid build-time rendering via remark plugin (`remark-mermaidjs` or equivalent)
- [x] 1.6 Create `public/robots.txt` with crawler allow rules and sitemap reference
- [x] 1.7 Verify `npm run build` completes successfully with empty project

## 2. Content Collections & Schema

- [x] 2.1 Define `problems` content collection in `src/content/config.ts` with Zod schema (title, number, difficulty, tags, companies, frequency, youtube_url, related_problems, date_published)
- [x] 2.2 Define `blog` content collection in `src/content/config.ts` with Zod schema (title, description, date_published, tags, featured)
- [x] 2.3 Create problem template file `src/content/problems/_template.md` with full frontmatter and content structure guide

## 3. Base Layout & Navigation

- [x] 3.1 Create `src/layouts/BaseLayout.astro` with HTML head (SEO meta tags, Open Graph, canonical URL, JSON-LD slot), dark theme body, header slot, footer slot
- [x] 3.2 Create `src/components/Header.astro` with site logo "DSA Vault", navigation links (Problems, Topics, Companies, Blog, About), mobile-responsive hamburger menu
- [x] 3.3 Create `src/components/Footer.astro` with links (Privacy Policy, Contact, About), copyright "© 2026 DSA Vault"
- [x] 3.4 Verify BaseLayout renders correctly on a test page with all meta tags present

## 4. Reusable Components

- [x] 4.1 Create `src/components/DifficultyBadge.astro` — colored badge (green Easy, amber Medium, red Hard)
- [x] 4.2 Create `src/components/CodeBlock.astro` — syntax-highlighted code block with language label and copy-to-clipboard button
- [x] 4.3 Create `src/components/YouTubeEmbed.astro` — lazy-loaded YouTube embed (thumbnail placeholder, loads iframe on click)
- [x] 4.4 Create `src/components/AdPlacement.astro` — ad zone container div with configurable position, reserved dimensions, optional AdSense activation via site config
- [x] 4.5 Create `src/components/ProblemCard.astro` — card component showing problem number, title, difficulty badge, topic tags, company tags
- [x] 4.6 Create `src/components/Breadcrumbs.astro` — breadcrumb navigation with JSON-LD BreadcrumbList structured data

## 5. Problem Pages

- [x] 5.1 Create `src/layouts/ProblemLayout.astro` with problem page structure: metadata bar, problem summary, brute force section, bridge paragraph, optimal section, YouTube embed, related problems, ad placements
- [x] 5.2 Create `src/pages/problems/[...slug].astro` dynamic route that renders each problem from the content collection using ProblemLayout
- [x] 5.3 Add JSON-LD Article structured data to problem pages (headline, datePublished, description, author, url)
- [x] 5.4 Create sample problem `src/content/problems/0001-two-sum.md` with full content: frontmatter, summary, brute force approach (intuition, Mermaid diagram, Python code, Java code, complexity), bridge paragraph, optimal approach (intuition, Mermaid diagram, Python code, Java code, complexity)
- [x] 5.5 Verify Two Sum page renders correctly with Mermaid SVG diagrams, syntax-highlighted code, difficulty badge, company/topic tag links, and all ad zones

## 6. Listing Pages

- [x] 6.1 Create `src/pages/problems/index.astro` — all problems page with table (number, title linked, difficulty badge, topics, companies)
- [x] 6.2 Create `src/pages/company/index.astro` — company index page listing all companies with problem counts
- [x] 6.3 Create `src/pages/company/[company].astro` — dynamic company page listing all problems tagged to that company
- [x] 6.4 Create `src/pages/topic/index.astro` — topic index page listing all topics with problem counts
- [x] 6.5 Create `src/pages/topic/[topic].astro` — dynamic topic page listing all problems with that tag
- [x] 6.6 Create `src/pages/difficulty/[level].astro` — difficulty filter pages (easy, medium, hard)

## 7. Search & Filter

- [x] 7.1 Generate a JSON index at build time containing all problem metadata (number, title, slug, difficulty, tags, companies)
- [x] 7.2 Create `src/components/SearchFilter.astro` (Astro island with client-side JS) — search input + difficulty radio buttons + topic dropdown
- [x] 7.3 Implement client-side filtering logic: text search matches title/number/company/tag, difficulty filter, topic filter, combined AND logic
- [x] 7.4 Add "Showing X of Y problems" count display
- [x] 7.5 Integrate SearchFilter into the `/problems/` index page

## 8. Homepage

- [x] 8.1 Create `src/pages/index.astro` with hero section (site name, tagline "From Brute Force to Optimal — Visually", CTA to /problems/)
- [x] 8.2 Add topic grid section — cards for each topic with problem count, linked to `/topic/<slug>/`
- [x] 8.3 Add company quick-links section — top 5 companies by problem count, linked to `/company/<slug>/`
- [x] 8.4 Add recent problems section — 6 most recently published problem cards

## 9. Blog

- [x] 9.1 Create `src/layouts/BlogLayout.astro` — blog post layout with title, date, tags, MDX body
- [x] 9.2 Create `src/pages/blog/index.astro` — blog listing page sorted by date descending
- [x] 9.3 Create `src/pages/blog/[...slug].astro` — dynamic blog post pages from blog content collection

## 10. Static Pages (AdSense Required)

- [x] 10.1 Create `src/pages/about.astro` — about DSA Vault, the creator, educational mission
- [x] 10.2 Create `src/pages/privacy-policy.astro` — privacy policy covering AdSense, Cloudflare Analytics, cookies
- [x] 10.3 Create `src/pages/contact.astro` — contact page with email link

## 11. Error Page

- [x] 11.1 Create `src/pages/404.astro` — styled 404 page with site header, friendly message, links to homepage and problems page

## 12. SEO Finalization

- [x] 12.1 Verify sitemap.xml contains all problem, company, topic, difficulty, blog, and static pages
- [x] 12.2 Verify all pages have unique meta descriptions, canonical URLs, and Open Graph tags
- [x] 12.3 Verify JSON-LD structured data on problem pages passes Google Rich Results Test
- [x] 12.4 Verify breadcrumbs render correctly and include BreadcrumbList JSON-LD

## 13. Build & Deploy Verification

- [x] 13.1 Run `npm run build` — zero errors, all static pages generated
- [x] 13.2 Run Lighthouse audit on built output — target 95+ Performance, 100 SEO, 100 Accessibility
- [x] 13.3 Test mobile responsiveness across phone/tablet/desktop breakpoints
- [x] 13.4 Verify Mermaid diagrams render as inline SVGs with no client-side JS
- [x] 13.5 Verify the content workflow: create new .md problem file → build → new page appears + listings update
- [x] 13.6 Document Cloudflare Pages deployment steps in README.md (connect GitHub, set build command, configure custom domain)
