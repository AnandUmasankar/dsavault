## ADDED Requirements

### Requirement: Cloudflare Pages build configuration
The system SHALL include a Cloudflare Pages-compatible build configuration with build command `npm run build` and output directory `dist/`.

#### Scenario: Cloudflare Pages build
- **WHEN** Cloudflare Pages triggers a build from a GitHub push
- **THEN** the build SHALL succeed using `npm run build` and the output in `dist/` SHALL contain all HTML, CSS, JS, and asset files

### Requirement: GitHub repository structure
The project SHALL be structured as a standard npm project with `package.json`, `astro.config.mjs`, `src/` directory, and `public/` directory at the root.

#### Scenario: Repository cloneable and buildable
- **WHEN** the repository is cloned and `npm install && npm run build` is run
- **THEN** the build SHALL complete successfully with zero errors

### Requirement: Custom domain configuration
The site SHALL be configured to serve from `https://dsavault.in` as the primary domain with SSL provided by Cloudflare.

#### Scenario: Custom domain access
- **WHEN** a user visits `https://dsavault.in`
- **THEN** the site SHALL load with a valid SSL certificate and all links SHALL use the dsavault.in domain

### Requirement: 404 page
The system SHALL provide a custom 404 error page at `src/pages/404.astro` that matches the site design and provides navigation back to the homepage or problem listing.

#### Scenario: Invalid URL visited
- **WHEN** a user visits a non-existent URL
- **THEN** the site SHALL display a styled 404 page with the site header, a message, and links to the homepage and problems page
