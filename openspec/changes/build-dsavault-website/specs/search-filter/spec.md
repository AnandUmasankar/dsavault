## ADDED Requirements

### Requirement: Client-side search on problems page
The `/problems/` page SHALL include a search input that filters the problem list in real-time by matching against problem title, number, company names, and topic tags. No server request SHALL be made; filtering operates on a pre-built JSON index.

#### Scenario: User searches for "two sum"
- **WHEN** a user types "two sum" in the search input on `/problems/`
- **THEN** the problem list SHALL immediately filter to show only problems whose title contains "two sum" (case-insensitive)

#### Scenario: User searches by company
- **WHEN** a user types "amazon" in the search input
- **THEN** the problem list SHALL show all problems tagged with "Amazon"

### Requirement: Difficulty filter
The `/problems/` page SHALL include filter buttons for Easy, Medium, Hard, and All. Clicking a filter SHALL show only problems matching that difficulty.

#### Scenario: User filters by Medium difficulty
- **WHEN** a user clicks the "Medium" filter button
- **THEN** only problems with `difficulty: Medium` SHALL be visible, and the "Medium" button SHALL appear active/selected

### Requirement: Topic filter
The `/problems/` page SHALL include a topic dropdown or tag filter that allows selecting one or more topics to filter the problem list.

#### Scenario: User filters by "Array" topic
- **WHEN** a user selects "Array" from the topic filter
- **THEN** only problems whose `tags` include "Array" SHALL be visible

### Requirement: Combined filters
Search, difficulty filter, and topic filter SHALL work together. All active filters SHALL be applied simultaneously (AND logic).

#### Scenario: Search plus difficulty filter
- **WHEN** a user types "sum" in search AND selects "Easy" difficulty filter
- **THEN** only Easy problems containing "sum" in the title, tags, or companies SHALL be visible

### Requirement: Problem count display
The `/problems/` page SHALL display the count of currently visible problems (after filters) out of the total number of problems.

#### Scenario: Filtered count
- **WHEN** filters are active and 12 out of 75 problems match
- **THEN** the page SHALL display "Showing 12 of 75 problems"
