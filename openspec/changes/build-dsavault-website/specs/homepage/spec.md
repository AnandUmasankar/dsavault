## ADDED Requirements

### Requirement: Hero section
The homepage SHALL display a hero section with the site name "DSA Vault", the tagline "From Brute Force to Optimal — Visually", a brief description, and a search input or CTA button linking to `/problems/`.

#### Scenario: Hero renders on homepage
- **WHEN** a user visits `/`
- **THEN** the hero section SHALL display the site name, tagline, description text, and a primary CTA linking to the all-problems page

### Requirement: Topic grid
The homepage SHALL display a grid of topic cards (Arrays, Trees, Graphs, Dynamic Programming, etc.) linking to their respective `/topic/<slug>/` pages, each showing the topic name and problem count.

#### Scenario: Topic cards displayed
- **WHEN** a user visits `/`
- **THEN** the page SHALL render a grid of topic cards derived from all unique tags in the problem collection, each card showing the topic name and number of problems, linking to the topic page

### Requirement: Company quick-links
The homepage SHALL display a row of top company logos/names (Amazon, Google, Meta, Microsoft, Apple) linking to their respective `/company/<slug>/` pages.

#### Scenario: Company links displayed
- **WHEN** a user visits `/`
- **THEN** the page SHALL show quick-link cards for at least the top 5 companies (by problem count), linking to their company pages

### Requirement: Recent problems section
The homepage SHALL display the 6 most recently published problems as cards showing the problem title, number, difficulty badge, and topic tags.

#### Scenario: Recent problems listed
- **WHEN** a user visits `/` after problems have been published
- **THEN** the page SHALL display up to 6 problem cards sorted by `date_published` descending, each linking to the problem page
