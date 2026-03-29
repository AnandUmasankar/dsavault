## ADDED Requirements

### Requirement: Company listing pages
The system SHALL auto-generate a listing page at `/company/<company-slug>/` for each unique company found across all problem frontmatter `companies` arrays. The page SHALL display the company name and a table of all problems tagged to that company.

#### Scenario: Amazon company page
- **WHEN** a user visits `/company/amazon/`
- **THEN** the page SHALL display "Amazon" as the heading and list all problems whose `companies` frontmatter includes "Amazon", showing problem number, title (linked), difficulty badge, and topic tags

### Requirement: Topic listing pages
The system SHALL auto-generate a listing page at `/topic/<topic-slug>/` for each unique tag found across all problem frontmatter `tags` arrays. The page SHALL display the topic name and a table of all problems with that tag.

#### Scenario: Dynamic Programming topic page
- **WHEN** a user visits `/topic/dynamic-programming/`
- **THEN** the page SHALL display "Dynamic Programming" as the heading and list all problems whose `tags` frontmatter includes "Dynamic Programming"

### Requirement: Difficulty listing pages
The system SHALL provide listing pages at `/difficulty/easy/`, `/difficulty/medium/`, and `/difficulty/hard/` that filter all problems by difficulty level.

#### Scenario: Easy difficulty page
- **WHEN** a user visits `/difficulty/easy/`
- **THEN** the page SHALL list all problems with `difficulty: Easy`, displaying each problem's number, title (linked), topic tags, and company tags

### Requirement: Company index page
The system SHALL provide a page at `/company/` that lists all companies with the count of problems tagged to each, linking to individual company pages.

#### Scenario: Company index
- **WHEN** a user visits `/company/`
- **THEN** the page SHALL display all unique company names as cards or links, each showing the company name and problem count, linking to `/company/<slug>/`

### Requirement: Topic index page
The system SHALL provide a page at `/topic/` that lists all topics with the count of problems tagged to each, linking to individual topic pages.

#### Scenario: Topic index
- **WHEN** a user visits `/topic/`
- **THEN** the page SHALL display all unique topic names with problem counts, linking to `/topic/<slug>/`

### Requirement: Listing table format
All listing pages SHALL display problems in a table with columns: #, Problem (linked to problem page), Difficulty (colored badge), Topics, Companies. The table SHALL be sorted by problem number ascending by default.

#### Scenario: Table row display
- **WHEN** a listing page renders a problem row
- **THEN** the row SHALL show the problem number, a linked title, a colored difficulty badge, topic tags, and company tags
