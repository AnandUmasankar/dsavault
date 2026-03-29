## Why

Generate sustainable side income through a LeetCode solutions website (dsavault.in) paired with a YouTube channel (DSA Vault). The site will provide high-quality, visually-explained solutions with Mermaid.js flow diagrams, targeting interview prep searchers. Monetized via Google AdSense on the website and YouTube ad revenue. The competitive landscape (NeetCode, Striver, GFG) lacks visual flow-diagram-based explanations — this is the differentiator. Starting now to begin the 6+ month SEO compounding timeline.

## What Changes

- Build a complete static website (Astro framework) for LeetCode problem solutions
- Each problem page includes: problem summary, brute force approach, optimal approach, Mermaid.js flow diagrams, Python + Java code, complexity analysis, YouTube embed, company tags
- Auto-generated listing pages by company (Amazon, Google, Meta, etc.), topic (Arrays, DP, Trees, etc.), and difficulty (Easy, Medium, Hard)
- Homepage with hero section, topic cards, company quick-links, featured problems
- Blog section for SEO guide articles (Blind 75 Guide, DP Patterns, etc.)
- AdSense-required pages: About, Privacy Policy, Contact
- Client-side search and filtering on problem listings
- SEO infrastructure: sitemap.xml, JSON-LD structured data, Open Graph tags, robots.txt
- Deploy on Cloudflare Pages (free hosting) with dsavault.in custom domain (Namecheap)

## Capabilities

### New Capabilities
- `site-framework`: Astro project setup with Tailwind CSS, MDX, sitemap, Mermaid.js integration, and base layout with SEO meta tags
- `problem-pages`: Problem page template and content collection schema supporting brute-to-optimal approach, dual-language code blocks, Mermaid flow diagrams, YouTube embeds, and ad placement zones
- `listing-pages`: Auto-generated listing pages for companies, topics, and difficulty levels derived from problem frontmatter tags
- `homepage`: Homepage with hero section, topic grid, company links, and recent/featured problem cards
- `search-filter`: Client-side search and filter functionality on problem listing pages
- `blog`: Blog section with MDX content collection for SEO guide articles
- `seo`: SEO infrastructure including JSON-LD structured data, Open Graph tags, canonical URLs, breadcrumbs, sitemap.xml, robots.txt
- `adsense-pages`: Required AdSense pages (About, Privacy Policy, Contact) and ad placement component
- `deployment`: Cloudflare Pages deployment configuration with GitHub integration
- `content-template`: Sample problem markdown files (starting with Two Sum) and content authoring guide

### Modified Capabilities

## Impact

- **New dependencies**: Astro, Tailwind CSS, @astrojs/mdx, @astrojs/sitemap, remark/rehype plugins for Mermaid rendering
- **New infrastructure**: GitHub repository, Cloudflare Pages project, Cloudflare DNS, Namecheap domain registration
- **Content pipeline**: Markdown files in `src/content/problems/` auto-build into static HTML pages on git push
- **External integrations**: Google AdSense (post-launch), Google Search Console, Cloudflare Web Analytics, YouTube embeds
