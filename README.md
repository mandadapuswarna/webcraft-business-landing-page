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
- A selected work section for the studio's portfolio message.
- A contact section with a project inquiry call to action.
- Anchor navigation for Services, Work, and Contact with smooth scrolling.
- Header and hero calls to action that scroll to the Contact section.
- Responsive styles for smaller screens.
- HTML metadata for the page title, description, language, and theme color.

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
		│   ├── Contact/
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

The work section provides a dedicated area for the studio's portfolio message
and can be expanded with real project examples in a later phase.

### Contact

The contact section closes the page with an inquiry message and an email call
to action.

## Responsive Behavior

The layout uses a desktop-first CSS grid for the service cards. At viewport
widths below 700px, the navigation is hidden and the service cards stack into a
single column. Section headings also scale down for smaller screens.

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

### Future Phases

Add each new phase below using this format:

```markdown
### Phase N: Phase Name

- What was added or changed.
- New user-facing behavior.
- New dependencies, files, or setup steps.
- Validation performed.
```
