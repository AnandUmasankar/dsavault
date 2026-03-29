## ADDED Requirements

### Requirement: Astro project initialization
The system SHALL be initialized as an Astro v4+ project with TypeScript support, using the `@astrojs/mdx`, `@astrojs/sitemap`, and `@astrojs/tailwind` integrations.

#### Scenario: Fresh project setup
- **WHEN** the project is initialized
- **THEN** `astro.config.mjs` SHALL include mdx, sitemap, and tailwind integrations, and `tsconfig.json` SHALL be present with strict mode

### Requirement: Tailwind CSS configuration
The system SHALL use Tailwind CSS with a custom dark theme palette: background #0F172A, surface #1E293B, primary #3B82F6, text #F8FAFC, muted #94A3B8.

#### Scenario: Tailwind theme applied
- **WHEN** any page is rendered
- **THEN** the dark color palette SHALL be applied globally via Tailwind configuration with custom color tokens (vault-bg, vault-surface, vault-primary, vault-text, vault-muted)

### Requirement: Mermaid.js build-time rendering
The system SHALL render Mermaid diagram code blocks in Markdown to inline SVG at build time using a remark plugin, shipping zero Mermaid JavaScript to the browser.

#### Scenario: Mermaid code block in problem markdown
- **WHEN** a Markdown file contains a fenced code block with language `mermaid`
- **THEN** the build output SHALL contain an inline SVG rendering of that diagram with no client-side JavaScript dependency

### Requirement: Base layout with SEO meta tags
The system SHALL provide a BaseLayout component that renders proper `<head>` content including title, meta description, Open Graph tags (og:title, og:description, og:image, og:url), canonical URL, and viewport meta tag.

#### Scenario: Page rendered with SEO tags
- **WHEN** any page is rendered using BaseLayout
- **THEN** the HTML head SHALL contain a unique title, meta description, canonical URL, and Open Graph tags derived from page-specific props

### Requirement: Sitemap generation
The system SHALL auto-generate a `sitemap.xml` at build time containing all problem pages, company pages, topic pages, difficulty pages, blog pages, and static pages.

#### Scenario: Sitemap after build
- **WHEN** the site is built
- **THEN** `sitemap.xml` SHALL be present in the output directory listing all public URLs of the site

### Requirement: robots.txt
The system SHALL include a `robots.txt` file that allows all crawlers and references the sitemap URL.

#### Scenario: robots.txt accessible
- **WHEN** a crawler requests `/robots.txt`
- **THEN** the response SHALL contain `User-agent: *`, `Allow: /`, and `Sitemap: https://dsavault.in/sitemap-index.xml`
