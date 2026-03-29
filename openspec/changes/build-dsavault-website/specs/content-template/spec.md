## ADDED Requirements

### Requirement: Sample problem file — Two Sum
The system SHALL include a complete sample problem file at `src/content/problems/0001-two-sum.md` demonstrating the full content structure: frontmatter, problem summary, brute force approach with Mermaid diagram and Python/Java code, bridge paragraph, optimal approach with Mermaid diagram and Python/Java code, and complexity analysis.

#### Scenario: Two Sum page renders correctly
- **WHEN** the site is built with the sample Two Sum problem file
- **THEN** the page at `/problems/0001-two-sum/` SHALL render all sections including two Mermaid flow diagrams, four code blocks (Python + Java for each approach), difficulty badge, company tags, and topic tags

### Requirement: Problem markdown template
The project SHALL include a template file at `src/content/problems/_template.md` (excluded from build) documenting the full frontmatter schema and content structure for authors to copy when creating new problems.

#### Scenario: Template used for new problem
- **WHEN** an author copies `_template.md` and fills in the content for a new problem
- **THEN** the file SHALL pass Zod schema validation when placed in the problems directory (with the underscore prefix removed or renamed)

### Requirement: Navigation header
The system SHALL render a site-wide navigation header with the site logo/name ("DSA Vault"), and links to: Problems, Topics, Companies, Blog, and About.

#### Scenario: Header on every page
- **WHEN** any page on the site is rendered
- **THEN** the navigation header SHALL be visible with the site name and links to all main sections

### Requirement: Footer
The system SHALL render a site-wide footer with links to Privacy Policy, Contact, About, and a copyright notice.

#### Scenario: Footer on every page
- **WHEN** any page on the site is rendered
- **THEN** the footer SHALL display links to Privacy Policy, Contact, About, and "© 2026 DSA Vault"

### Requirement: YouTube embed component
The system SHALL provide a YouTubeEmbed component that lazy-loads a YouTube video by ID. The component SHALL render a thumbnail placeholder initially and only load the iframe when clicked (performance optimization).

#### Scenario: YouTube embed with lazy load
- **WHEN** a problem page with a `youtube_url` is rendered
- **THEN** a YouTube thumbnail SHALL be displayed initially, and clicking it SHALL load the full YouTube iframe player
