## ADDED Requirements

### Requirement: Problem content collection schema
The system SHALL define an Astro content collection named `problems` with a Zod-validated frontmatter schema including: title (string), number (number), difficulty (enum: Easy/Medium/Hard), tags (array of strings), companies (array of strings), frequency (optional string), youtube_url (optional string), related_problems (optional array of numbers), and date_published (date).

#### Scenario: Valid problem file accepted
- **WHEN** a Markdown file in `src/content/problems/` has all required frontmatter fields with valid types
- **THEN** the build SHALL succeed and the problem SHALL be accessible via the content collection API

#### Scenario: Invalid problem file rejected
- **WHEN** a Markdown file in `src/content/problems/` is missing a required field or has an invalid type
- **THEN** the build SHALL fail with a descriptive error indicating which field failed validation

### Requirement: Problem page layout
The system SHALL render each problem page with the following sections in order: problem title and metadata bar (number, difficulty badge, topic tags, company tags), problem summary, brute force approach section, bridge paragraph, optimal approach section, YouTube embed (if URL provided), related problems list.

#### Scenario: Full problem page render
- **WHEN** a user visits a problem page (e.g., `/problems/two-sum/`)
- **THEN** the page SHALL display all sections with the problem's metadata bar, brute force approach, a connecting paragraph explaining why the brute force is insufficient, the optimal approach, and a YouTube video embed if the `youtube_url` frontmatter field is set

### Requirement: Approach section structure
Each approach section (brute force and optimal) SHALL contain: an intuition paragraph, a Mermaid flow diagram, Python code block, Java code block, and time/space complexity analysis.

#### Scenario: Approach section with all elements
- **WHEN** a problem page's approach section is rendered
- **THEN** it SHALL display an intuition explanation, a rendered Mermaid SVG diagram, syntax-highlighted Python code, syntax-highlighted Java code, and complexity notation (e.g., "Time: O(n), Space: O(n)")

### Requirement: Difficulty badges
The system SHALL render difficulty as a colored badge: Easy (#10B981 green), Medium (#F59E0B amber), Hard (#EF4444 red).

#### Scenario: Easy problem badge
- **WHEN** a problem with `difficulty: Easy` is rendered
- **THEN** the difficulty badge SHALL display "Easy" with green (#10B981) background

### Requirement: Code blocks with copy button
Each code block SHALL include a "Copy" button and a language label (Python/Java) that allows users to copy the code to clipboard.

#### Scenario: User copies Python code
- **WHEN** a user clicks the "Copy" button on a Python code block
- **THEN** the code content SHALL be copied to the user's clipboard and the button text SHALL temporarily change to "Copied!"

### Requirement: Company and topic tags as links
Company tags and topic tags on the problem page SHALL be rendered as clickable links that navigate to the respective company or topic listing page.

#### Scenario: User clicks company tag
- **WHEN** a user clicks the "Amazon" company tag on a problem page
- **THEN** the user SHALL be navigated to `/company/amazon/`
