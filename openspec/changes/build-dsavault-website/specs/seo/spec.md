## ADDED Requirements

### Requirement: JSON-LD structured data on problem pages
Each problem page SHALL include JSON-LD structured data with `@type: Article` containing: headline, datePublished, description, author, and url.

#### Scenario: Structured data present
- **WHEN** a problem page is rendered
- **THEN** the HTML SHALL contain a `<script type="application/ld+json">` block with valid Article schema including the problem title, publish date, and site URL

### Requirement: Open Graph tags on all pages
Every page SHALL include Open Graph meta tags: `og:title`, `og:description`, `og:url`, `og:type`, and `og:site_name`.

#### Scenario: Social sharing metadata
- **WHEN** a problem page URL is shared on social media
- **THEN** the platform SHALL display the problem title, description, and site name from OG tags

### Requirement: Canonical URLs
Every page SHALL include a `<link rel="canonical">` tag pointing to the definitive URL of that page on dsavault.in.

#### Scenario: Canonical URL present
- **WHEN** any page is rendered
- **THEN** the HTML head SHALL contain a canonical link element with the full HTTPS URL of the page

### Requirement: Breadcrumb navigation with structured data
Problem pages SHALL display breadcrumb navigation (Home > Topic > Problem) and include BreadcrumbList JSON-LD structured data.

#### Scenario: Breadcrumb on problem page
- **WHEN** a user views a problem page like "Two Sum" tagged with "Array"
- **THEN** the page SHALL show breadcrumbs "Home > Arrays > Two Sum" with each segment linked, and JSON-LD BreadcrumbList data SHALL be present in the HTML

### Requirement: Meta description auto-generation
Each problem page's meta description SHALL be auto-generated from the problem summary content, truncated to 155 characters.

#### Scenario: Meta description generated
- **WHEN** a problem page is rendered
- **THEN** the `<meta name="description">` content SHALL contain a summary of the problem, not exceeding 160 characters
