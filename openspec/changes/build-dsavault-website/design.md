## Context

Building a greenfield static website (dsavault.in) for LeetCode problem solutions. No existing codebase — this is a new project. The site targets interview prep searchers and monetizes via Google AdSense and YouTube channel referrals. The primary audience is developers preparing for technical interviews, predominantly from India and the US.

The site must be static (no server/database) to achieve zero hosting cost on Cloudflare Pages. Content is authored as Markdown files with YAML frontmatter and committed to a GitHub repository. Cloudflare Pages auto-builds and deploys on push.

## Goals / Non-Goals

**Goals:**
- Build a performant, SEO-optimized static site that ranks in Google for LeetCode solution queries
- Support a content workflow where adding a problem = writing one Markdown file and pushing to git
- Auto-generate listing pages (by company, topic, difficulty) from problem frontmatter
- Render Mermaid.js flow diagrams inline as part of problem explanations
- Include dual-language (Python + Java) code blocks with syntax highlighting
- Prepare ad placement zones for Google AdSense integration
- Achieve Lighthouse scores of 95+ Performance, 100 SEO, 100 Accessibility
- Deploy to Cloudflare Pages with automated builds

**Non-Goals:**
- User accounts, authentication, or user-generated content
- Server-side rendering or API backend
- Comments system (can add later via Giscus/Disqus)
- Dark/light mode toggle (ship dark mode only for v1)
- Newsletter/email signup
- Problem submission or online code execution
- Mobile app

## Decisions

### 1. Framework: Astro

**Choice**: Astro (v4+)
**Over**: Next.js, Hugo, 11ty, Gatsby

**Rationale**: Astro ships zero JavaScript by default — pages are pure HTML+CSS. This is critical for Lighthouse performance (direct ranking factor for Google) and ad viewability scores. Astro's content collections provide type-safe Markdown handling with Zod schema validation. MDX support allows embedding interactive components (Mermaid diagrams) in Markdown. Hugo is faster to build but lacks the component model needed for complex page layouts. Next.js adds unnecessary client-side JS hydration for what is fundamentally a content site.

### 2. Styling: Tailwind CSS

**Choice**: Tailwind CSS v3+ via @astrojs/tailwind
**Over**: Plain CSS, CSS Modules, Styled Components

**Rationale**: Utility-first CSS keeps the design system consistent, generates minimal CSS (only used classes ship), and integrates with Astro out of the box. No runtime cost. Dark theme implemented via Tailwind's dark color palette applied globally.

### 3. Mermaid Diagrams: Build-time rendering via remark plugin

**Choice**: remark-mermaidjs (renders Mermaid to SVG at build time)
**Over**: Client-side Mermaid.js, pre-generated images, ASCII art

**Rationale**: Build-time rendering means zero JavaScript shipped to the browser for diagrams. Diagrams are inlined as SVG in the HTML — instant rendering, no layout shift, no external requests. This preserves the zero-JS goal. Client-side Mermaid.js would add ~200KB of JavaScript. Pre-generated images require manual export workflow.

### 4. Hosting: Cloudflare Pages

**Choice**: Cloudflare Pages (free tier)
**Over**: Vercel, Netlify, GitHub Pages

**Rationale**: Unlimited bandwidth on free tier (Vercel/Netlify cap at 100GB). Global CDN with edge caching. Free SSL. No commercial use restrictions for static sites with ads. Automatic builds from GitHub pushes. Free Cloudflare Web Analytics (privacy-friendly, no cookie banner needed).

### 5. Domain: Namecheap → Cloudflare DNS

**Choice**: Buy dsavault.in on Namecheap, point nameservers to Cloudflare
**Over**: Other registrars

**Rationale**: Cloudflare doesn't sell .in domains. Namecheap has competitive .in pricing (~$3-4/yr). Changing nameservers to Cloudflare gives us free DNS management, automatic SSL provisioning, and seamless Cloudflare Pages custom domain setup.

### 6. Content Schema: Astro Content Collections with Zod

**Choice**: Astro Content Collections with typed frontmatter
**Over**: Loose Markdown files, CMS, database

**Rationale**: Content Collections validate frontmatter at build time — a missing `difficulty` field or invalid `companies` array fails the build, not the user's browser. This catches authoring errors before deployment. Zod schemas enforce the contract between content and templates.

### 7. Code Highlighting: Shiki (built into Astro)

**Choice**: Shiki (Astro's default syntax highlighter)
**Over**: Prism.js, Highlight.js

**Rationale**: Shiki generates highlighted HTML at build time using VS Code's TextMate grammars — accurate highlighting with zero client-side JS. Supports all languages. Themed to match the site's dark color scheme.

### 8. Search/Filter: Client-side with vanilla JS

**Choice**: Lightweight client-side filtering with a small Astro island
**Over**: Algolia, Pagefind, server-side search

**Rationale**: With 75-200 problems, a full search engine is overkill. A JSON index generated at build time with client-side filtering provides instant results with minimal JS (<5KB). If the problem count grows past 500+, migrate to Pagefind (static search library). No external service dependency.

### 9. Ad Placement: Placeholder zones activated post-AdSense approval

**Choice**: Render empty container divs with defined dimensions in strategic positions
**Over**: No ad zones until approved, third-party ad networks

**Rationale**: AdSense approval requires showing Google where ads will appear. Placeholder zones with reserved dimensions prevent layout shift when ads load (CLS is a Core Web Vital). Zones are: header banner, between brute/optimal sections, sidebar on desktop, footer. AdSense script tag added only after approval.

### 10. Color Theme: Dark mode only (v1)

**Choice**: Dark theme with vault-inspired palette
**Over**: Light mode, theme toggle

**Rationale**: Developer audience prefers dark mode. Single theme halves CSS complexity and testing surface. The "vault" brand (dark, sleek, premium) reinforces the identity. Theme toggle deferred to v2.

**Palette**:
- Background: #0F172A (slate-900)
- Card/Surface: #1E293B (slate-800)
- Primary accent: #3B82F6 (blue-500)
- Easy badge: #10B981 (emerald-500)
- Medium badge: #F59E0B (amber-500)
- Hard badge: #EF4444 (red-500)
- Text: #F8FAFC (slate-50)
- Muted text: #94A3B8 (slate-400)

## Risks / Trade-offs

**[Risk] SEO competition is intense for LeetCode queries** → Mitigation: Differentiate via visual flow diagrams (unique content), company-tagged pages (high-intent keywords), and brute-to-optimal format (more content per page). Target long-tail keywords first ("two sum python hashmap approach").

**[Risk] Mermaid build-time rendering could slow builds** → Mitigation: remark-mermaidjs uses Playwright/Puppeteer headlessly. If builds exceed 5 minutes, switch to pre-rendered SVGs or a Mermaid CLI pre-build step. Monitor build times.

**[Risk] AdSense rejection on first application** → Mitigation: Don't apply until 50+ original content pages, 2+ months live, consistent traffic. Have all required pages (about, privacy, contact) ready. Only one chance at a clean first impression.

**[Risk] Copyright issues with LeetCode problem statements** → Mitigation: Never copy LeetCode problem text. Summarize each problem in original words. Reference problem numbers and titles (factual, non-copyrightable).

**[Risk] Client-side search won't scale past 500 problems** → Mitigation: Acceptable for v1 (Blind 75 + expansion). Migration path to Pagefind is well-documented and non-breaking.

**[Trade-off] Dark-only mode may reduce AdSense CTR** → Accepted. Brand consistency and developer preference outweigh marginal ad performance. Revisit with data after 3 months of AdSense.

**[Trade-off] No CMS — authors must know Markdown + Git** → Accepted. The only author is the site owner. Git-based workflow provides version control, no vendor lock-in, and zero CMS cost.
