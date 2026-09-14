# WebCraft Business Landing Page

WebCraft is a responsive business landing page for a digital product studio. It introduces the studio, presents its core services, highlights selected work, explains business benefits, shares fictional client testimonials, and provides a contact form for project inquiries.

The project is built as a React portfolio project to demonstrate component organization, reusable data-driven UI, controlled forms, validation, responsive design, accessibility improvements, and production deployment.

## Live Demo

🔗 **[View WebCraft Live Demo](https://webcraft-business-landing-page.netlify.app/)**

## Current Status

The project currently includes:

* A WebCraft brand header with responsive navigation links.
* A hero section describing the studio and its primary call to action.
* A six-card services section covering design, development, optimization, and accessibility.
* A data-driven portfolio section with FinEdge, LocalBite, and FitTrack project cards.
* A "Why Work With Us" section with four data-driven business benefits.
* A testimonials section with three fictional client quotes.
* A controlled contact form with validation and submission feedback.
* Contact form validation, simulated submission feedback, and form reset.
* Anchor navigation for Services, Work, and Contact with smooth scrolling.
* Header and hero calls to action that scroll to the Contact section.
* Scroll-aware active navigation links.
* Responsive mobile navigation with open, close, and link-selection behavior.
* Responsive layouts for mobile, tablet, and desktop viewport sizes.
* A scroll-to-top control with accessible button feedback and focus states.
* Hover, active, and focus-visible states for interactive elements.
* SEO metadata for the page title, description, robots, theme color, and social sharing previews.
* A successful production build using Vite.
* Public deployment on Netlify.

## Technology

* React
* Vite
* JavaScript
* JSX
* CSS
* npm

## Project Structure

```text
.
├── index.html          # HTML document shell and page metadata
├── package.json        # Dependencies and npm scripts
├── README.md           # Complete project documentation
└── src/
    ├── components/     # Reusable page-section components
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

* Node.js 24 or newer
* npm

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

Vite will print the local URL in the terminal, normally:

```text
http://localhost:5173/
```

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

| Command           | Purpose                               |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the local development server.   |
| `npm run build`   | Build the application for production. |
| `npm run preview` | Serve the production build locally.   |

## Page Sections

### Header

The header displays the WebCraft brand, links to the Services, Work, and Contact sections, and includes a "Let's talk" action.

The navigation supports responsive behavior and includes a mobile menu for smaller screens.

### Hero

The hero establishes WebCraft as a digital product studio and introduces the primary project-starting call to action.

The main call-to-action button navigates to the Contact section.

### Services

The services section presents six data-driven offerings. Each card includes a service number, title, description, and hover interaction:

1. Web Design
2. Frontend Development
3. UI Systems
4. Responsive Design
5. Website Optimization
6. Accessibility

### Selected Work

The work section presents three fictional portfolio projects. Each card includes the project name, category, short description, CSS placeholder visual, and hover interaction:

1. FinEdge — Finance Platform
2. LocalBite — Food Discovery
3. FitTrack — Wellness Product

### Why Work With Us

The benefits section presents four reusable business benefits:

1. User-focused design
2. Responsive development
3. Clean reusable code
4. Clear communication

### Testimonials

The testimonials section presents three fictional client notes with a quote, person name, role, and company:

1. Alex Morgan — Product Lead, Northstar Labs
2. Priya Shah — Founder, LocalBite
3. Jordan Lee — Operations Director, FitTrack

The testimonials are fictional and are included for demonstration purposes as part of the portfolio project.

### Contact

The contact section contains a controlled React form with:

* Name
* Email
* Company (optional)
* Project type
* Message

The form validates required name, email, and message fields and checks the email format.

The form also:

* Displays inline validation messages.
* Provides accessible validation feedback.
* Disables submission while sending.
* Displays `Sending...` during the simulated submission process.
* Simulates a short submission delay.
* Displays a success message after submission.
* Resets the form after successful submission.

## Navigation and User Experience

The application includes several interaction improvements:

* Smooth scrolling between page sections.
* Header navigation links for Services, Work, and Contact.
* Scroll-aware active navigation styling.
* Header and hero calls to action that navigate to the Contact section.
* Responsive mobile navigation.
* Mobile menu open and close behavior.
* Automatic mobile menu closing after navigation.
* Scroll-to-top functionality.
* Hover states for interactive elements.
* Active states for buttons and links.
* Visible keyboard focus states.

## Accessibility

The project includes accessibility-focused improvements such as:

* Semantic HTML elements.
* Accessible mobile navigation controls.
* `aria-label` attributes for interactive controls.
* `aria-expanded` state for the mobile navigation menu.
* Accessible form validation feedback.
* `aria-invalid` for invalid form fields.
* `aria-describedby` connections between fields and error messages.
* Visible `:focus-visible` styles.
* Semantic `<blockquote>` elements for testimonials.

## SEO and Metadata

The `index.html` document includes metadata for:

* Page title.
* Page description.
* Document language.
* Robots indexing instructions.
* Theme color.
* Open Graph social sharing metadata.
* Twitter card metadata.

## Deployment

The project is deployed publicly on Netlify.

### Live Application

🔗 **https://webcraft-business-landing-page.netlify.app/**

### Netlify Build Configuration

The production deployment uses:

* **Build command:** `npm run build`
* **Publish directory:** `dist`

The application was successfully built before deployment using:

```bash
npm run build
```

## Responsive Behavior

The layout uses responsive CSS across the requested viewport sizes.

### Mobile — 375px

* Single-column card layouts.
* Compact spacing.
* Usable stacked contact form.
* Toggle-based mobile navigation.
* Responsive typography and controls.

### Tablet — 768px

* Two-column layouts where appropriate.
* Balanced section spacing.
* Responsive service, portfolio, and testimonial grids.

### Desktop — 1440px

* Multi-column layouts.
* Wider content areas.
* Capped content widths.
* Comfortable spacing and typography.

Section headings and form fields scale and stack where needed on smaller screens.

## Development Guidelines

* Keep page-section markup in its matching folder under `src/components/`.
* Keep `src/App.jsx` focused on composing page components.
* Keep visual styles in `src/styles.css`.
* Keep document-level metadata in `index.html`.
* Preserve the existing WebCraft project branding unless intentionally changing the project.
* Run `npm run build` before production deployment.
* Test responsive behavior at mobile, tablet, and desktop viewport sizes.
* Update this README whenever significant project features, structure, setup, or behavior changes.

## Future Improvements

Possible future enhancements include:

* Backend integration for real contact form submissions.
* Email service integration.
* Real portfolio project content.
* Image optimization.
* Additional animations.
* Dark and light theme support.
* Analytics integration.
* Expanded SEO metadata.
* Automated testing.

## Project Purpose

WebCraft is a frontend portfolio project created to demonstrate practical React development skills, including reusable components, data-driven rendering, state management, controlled forms, validation, responsive layouts, accessibility considerations, user interface interactions, SEO metadata, and production deployment.
