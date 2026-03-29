## ADDED Requirements

### Requirement: Blog content collection
The system SHALL define an Astro content collection named `blog` with frontmatter: title (string), description (string), date_published (date), tags (optional array of strings), and featured (optional boolean).

#### Scenario: Valid blog post
- **WHEN** a Markdown file in `src/content/blog/` has valid frontmatter
- **THEN** the post SHALL be accessible at `/blog/<slug>/` and appear in blog listing

### Requirement: Blog listing page
The system SHALL render a blog index page at `/blog/` listing all blog posts sorted by `date_published` descending, showing title, description, date, and tags.

#### Scenario: Blog index page
- **WHEN** a user visits `/blog/`
- **THEN** the page SHALL list all blog posts as cards with title, date, description, and tags, ordered by newest first

### Requirement: Blog post page
Each blog post SHALL render as a full article page with the post title, date, tags, and MDX content. The layout SHALL match the site's BaseLayout with appropriate SEO meta tags.

#### Scenario: Blog post render
- **WHEN** a user visits `/blog/blind-75-guide/`
- **THEN** the page SHALL display the blog post's full content with title, published date, tags, and formatted MDX body
