## ADDED Requirements

### Requirement: About page
The system SHALL provide a page at `/about/` that describes the site's purpose, the author, and the content approach (brute-to-optimal with flow diagrams).

#### Scenario: About page accessible
- **WHEN** a user visits `/about/`
- **THEN** the page SHALL display information about DSA Vault, the creator, and the site's educational mission

### Requirement: Privacy Policy page
The system SHALL provide a page at `/privacy-policy/` containing a privacy policy that discloses the use of Google AdSense, cookies, and Cloudflare Web Analytics.

#### Scenario: Privacy policy accessible
- **WHEN** a user visits `/privacy-policy/`
- **THEN** the page SHALL display a privacy policy covering data collection, third-party ads (Google AdSense), analytics (Cloudflare), and cookies

### Requirement: Contact page
The system SHALL provide a page at `/contact/` with contact information (email address or contact form).

#### Scenario: Contact page accessible
- **WHEN** a user visits `/contact/`
- **THEN** the page SHALL display a way to contact the site owner (email link or a simple static form)

### Requirement: Ad placement component
The system SHALL provide an AdPlacement component that renders a container div with a defined CSS class and dimensions at specified positions. The component SHALL be inert (no scripts) until an AdSense publisher ID is configured.

#### Scenario: Ad zone renders as placeholder
- **WHEN** a page with ad placement zones is rendered and no AdSense ID is configured
- **THEN** the ad zone SHALL render as an empty div with appropriate CSS class and reserved height, causing no layout shift

#### Scenario: Ad zone activates with AdSense
- **WHEN** an AdSense publisher ID is provided in the site configuration
- **THEN** the ad zone SHALL include the AdSense `<ins>` tag and the AdSense script SHALL be loaded once in the page head

### Requirement: Ad placement positions
The system SHALL place ad zones in these positions on problem pages: (1) below the metadata bar, (2) between the brute force and optimal approach sections, (3) after the YouTube embed section, (4) in the footer area.

#### Scenario: Ad zones on problem page
- **WHEN** a problem page is rendered
- **THEN** ad placement containers SHALL be present at the four defined positions without disrupting the reading flow
