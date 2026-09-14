# WebCraft Business Landing Page

WebCraft is a responsive business landing page for a digital product studio. It
introduces the studio, presents its core services, highlights its work, and
provides a contact call to action.

This README is the single project document. Update the relevant sections as
each development phase adds or changes functionality.

## Current Status

The project currently includes:

- A WebCraft brand header with responsive navigation links.
- A hero section describing the studio and its primary call to action.
- A six-card services section covering design, development, optimization, and
	accessibility.
- A data-driven portfolio section with FinEdge, LocalBite, and FitTrack project
	cards.
- A contact section with a project inquiry call to action.
- Anchor navigation for Services, Work, and Contact with smooth scrolling.
- Header and hero calls to action that scroll to the Contact section.
- Responsive mobile navigation with open, close, and link-selection behavior.
- Responsive layouts for mobile, tablet, and desktop viewport sizes.
- Scroll-to-top control with accessible button feedback and focus states.
- Responsive styles for smaller screens.
- SEO metadata for the page title, description, robots, theme color, and social
	sharing previews.

## Technology

- React
- Vite
- JSX
- CSS
- npm

## Project Structure

```text
.
├── index.html          # HTML document shell and page metadata
├── package.json        # Dependencies and npm scripts
├── README.md           # Complete project documentation
└── src/
		├── components/      # Reusable page-section components
		│   ├── Header/
		│   ├── Hero/
		│   ├── Services/
		│   ├── Work/
		│   ├── Benefits/
		│   ├── Testimonials/
		│   ├── Contact/
		│   ├── ScrollToTop/
		│   └── Footer/
		├── App.jsx         # Root component that composes the page
		├── main.jsx        # React application entry point
		└── styles.css      # Layout, typography, colors, and responsive rules
```

## Requirements

- Node.js 24 or newer
- npm

## Installation

Install the project dependencies from the project directory:

```bash
npm install
```

## Development

Start the Vite development server:

```bash
npm run dev
```

Vite will print the local URL in the terminal, normally
`http://localhost:5173/`.

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Build the application for production. |
| `npm run preview` | Serve the production build locally. |

## Page Sections

### Header

The header displays the WebCraft brand, links to the Services, Work, and
Contact sections, and includes a "Let's talk" action.

### Hero

The hero establishes WebCraft as a digital product studio and introduces the
primary project-starting call to action.

### Services

The services section presents six data-driven offerings. Each card includes a
service number, title, description, and hover interaction:

1. Web Design
2. Frontend Development
3. UI Systems
4. Responsive Design
5. Website Optimization
6. Accessibility

### Selected Work

The work section presents three fictional portfolio projects. Each card includes
the project name, category, short description, CSS placeholder visual, and a
hover interaction:

1. FinEdge — Finance Platform
2. LocalBite — Food Discovery
3. FitTrack — Wellness Product

### Why Work With Us

The About section at `#about` presents four reusable benefits:

1. User-focused design
2. Responsive development
3. Clean reusable code
4. Clear communication

### Testimonials

The testimonials section presents three fictional client notes with a quote,
person name, role, and company:

1. Alex Morgan — Product Lead, Northstar Labs
2. Priya Shah — Founder, LocalBite
3. Jordan Lee — Operations Director, FitTrack

### Contact

The contact section closes the page with a controlled React form containing:

- Name
- Email
- Company (optional)
- Project type
- Message

The form validates required name, email, and message fields, checks email
format, displays inline validation messages, disables submission while sending,
simulates a short submission delay, and resets after a successful submission.

## Responsive Behavior

The layout uses responsive CSS grids across the requested viewport sizes:

- Mobile at 375px: single-column cards, compact spacing, usable stacked form,
	and toggle-based navigation.
- Tablet at 768px: two-column service, portfolio, and testimonial grids with
	balanced section spacing.
- Desktop at 1440px: multi-column layouts with a 1600px content-width cap.

Section headings and form fields scale down and stack where needed on smaller
screens.

## Development Guidelines

- Keep page-section markup in its matching folder under `src/components/`.
- Keep `src/App.jsx` focused on composing the page components.
- Keep visual styles in `src/styles.css`.
- Keep document-level metadata and the React mount in `index.html`.
- Preserve the existing WebCraft brand unless a phase explicitly changes it.
- Run `npm run build` after each phase to verify that the application compiles.
- Update this README whenever a phase changes the project's features, setup,
	structure, or behavior.

## Phase Log

### Phase 1: Initial Landing Page

- Created the WebCraft business landing page with React and Vite.
- Added the header, hero, services, selected work, contact, and footer areas.
- Added responsive styling for mobile layouts.
- Added HTML5 document metadata and the WebCraft page title.
- Added the initial project setup and build commands.

### Phase 1: Component Organization

- Split the header, hero, services, work, contact, and footer into reusable
	components under `src/components/`.
- Kept the existing UI, anchors, labels, and interactions unchanged.
- Composed the page from the new components in `src/App.jsx`.
- Added a React `key` prop to each mapped service card.
- Validation: production build completed successfully with `npx vite build`.

### Phase 2: Navigation and Smooth Scrolling

- Kept the Services, Work, and Contact navigation anchors.
- Connected the "Let's talk" and "Start a project" calls to action to
	`#contact` using normal anchor links.
- Preserved smooth scrolling through the existing global CSS behavior.
- Added scroll-aware active styling to the Services, Work, and Contact links.
- Validation: production build completed successfully with `npx vite build`.

### Phase 3: Expanded Services

- Replaced tuple-based service data with objects containing `title` and
	`description` properties.
- Expanded the services section from three cards to six.
- Added numbered service labels and a subtle hover lift, border, and shadow
	animation.
- Validation: production build completed successfully with `npx vite build`.

### Phase 4: Portfolio Work Showcase

- Replaced the selected work placeholder with three data-driven project cards.
- Added project names, categories, descriptions, and CSS design placeholders.
- Added hover lift, border, shadow, and visual scale interactions.
- Added a single-column project layout for smaller screens.
- Validation: production build completed successfully with `npx vite build`.

### Phase 5: Business Benefits

- Added a reusable Benefits component with four data-driven feature items.
- Added the "Why Work With Us" section with the message "Small team. Big
	attention to detail."
- Added responsive two-column and single-column layouts with subtle hover
	interactions.
- Validation: production build completed successfully with `npx vite build`.

### Phase 6: Client Testimonials

- Added a reusable Testimonials component with three data-driven testimonial
	cards.
- Added fictional quotes with person names, roles, and companies.
- Added responsive testimonial cards with subtle hover interactions.
- Validation: production build completed successfully with `npx vite build`.

### Phase 7: Contact Form

- Replaced the email call to action with a controlled React contact form.
- Added name, email, optional company, project type, and message fields.
- Added required-field and email-format validation with accessible error
	messages.
- Added a success message and cleared the form after valid submission.
- Validation: production build completed successfully with `npx vite build`.

### Phase 8: Form UX and Feedback

- Added submitting state with an 800 ms simulated submission delay.
- Disabled the submit button while the form is submitting and displayed
	`Sending...` feedback.
- Added `✓ Message sent successfully!` confirmation after submission.
- Preserved inline validation feedback from Phase 7.
- Validation: production build completed successfully with `npx vite build`.

### Phase 9: Mobile Navigation

- Added an accessible mobile menu toggle with open and close states.
- Added mobile navigation links for Services, Work, and Contact.
- Closed the menu after selecting a navigation link or the Contact CTA.
- Preserved the existing desktop navigation layout.
- Validation: production build completed successfully with `npx vite build`.

### Phase 10: Responsive Layout

- Added tablet two-column grid behavior for services, portfolio, and
	testimonials between 701px and 1024px.
- Preserved single-column layouts and mobile navigation at 700px and below.
- Added capped content widths and viewport-safe spacing at desktop, tablet, and
	mobile sizes.
- Validation: production build completed successfully with `npx vite build` and
	viewport checks at 375px, 768px, and 1440px.

### Phase 11: UX and Accessibility Improvements

- Added a scroll-to-top button that appears after the page is scrolled.
- Added hover, focus-visible, and active states for buttons and links.
- Added section scroll offsets for the sticky header and smooth transitions.
- Added accessible labels and visible keyboard focus treatment.
- Validation: production build completed successfully with `npx vite build`.

### Phase 12: SEO and Metadata

- Added robots indexing metadata and a dark theme color matching the brand UI.
- Added Open Graph metadata for website previews.
- Added Twitter card metadata for social sharing previews.
- Preserved the WebCraft title, description, and document language metadata.
- Validation: production build completed successfully with `npx vite build`.

### Phase 13: Code Cleanup and UI Polish

- Corrected the hero project CTA to navigate to the Contact section.
- Confirmed mapped service, project, benefit, and testimonial items use React
	keys.
- Confirmed the development, production build, and preview scripts are
	configured for their intended commands.
- Validation: `npm run dev`, `npm run build`, and browser console checks passed.

### Future Phases

Add each new phase below using this format:

```markdown
### Phase N: Phase Name

- What was added or changed.
- New user-facing behavior.
- New dependencies, files, or setup steps.
- Validation performed.
```
