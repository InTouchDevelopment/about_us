# Claude Build Prompt: Niten AI About Us Page (React + Tailwind + GitHub Pages)

You are a senior frontend engineer. Build a **standalone About Us page** that reuses the exact visual language and layout style from the provided Niten AI landing markup.

## 1) Project Goal
Create a single-page React experience called **About Us** that:
- Uses the same shell/layout/styling conventions as the provided page.
- Includes a professional company story section, value propositions, and team/company credibility content.
- Embeds a demo video.
- Embeds a Calendly booking widget.
- Is deployable as a **static frontend-only site** on GitHub Pages.

No backend is required.

---

## 2) Tech Stack and Constraints
Use this exact stack unless noted otherwise:
- **React** (latest stable)
- **Vite** (preferred for this static page)
- **Tailwind CSS** for styling and responsive design
- **react-player** for video
- **react-calendly** for inline scheduling
- **GitHub Pages** deployment via GitHub Actions and/or `gh-pages`

Constraints:
- Frontend-only, no server/API implementation.
- Keep dependencies minimal.
- Accessibility and responsive behavior are required.
- Keep implementation maintainable and componentized.

---

## 3) Architecture (Serverless Static)
Design as static SPA output:
- Route can be `/about` (if using router) or a dedicated standalone page entry.
- All content is static JSON/constants or inline content.
- Calendly and video use third-party embeds/components.
- Final output builds to static assets for GitHub Pages (`dist/`).

---

## 4) Visual System to Reuse
Follow the original page’s style DNA.

### 4.1 Main Shell (must match)
Use this on the main wrapper:
- Tailwind class baseline: `relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f6f7f8]`
- Equivalent behavior:
  - `position: relative`
  - `display: flex`
  - `min-height: 100vh`
  - `width: 100%`
  - `flex-direction: column`
  - `overflow-x: hidden`
  - `background-color: #f6f7f8`

### 4.2 Brand Tokens
- Primary: `#137fec`
- Neutral text palette: Tailwind `slate-*`
- Corner radii: rounded-lg / rounded-2xl
- Shadows: subtle card shadows + hover elevation
- Typography:
  - Headings: bold/extrabold, tight tracking
  - Font family includes **Manrope** for headline style

### 4.3 Structural Reuse
Preserve these layout ideas:
- Sticky translucent header (`bg-white/80`, blur, border-bottom)
- Centered max-width content container (`max-w-7xl`, `mx-auto`, responsive padding)
- Section rhythm with generous vertical spacing
- Footer with links and compliance/copyright text

---

## 5) Page Content Requirements (About Us)
Build sections in this order:

1. **Header / Nav**
   - Brand mark/name (Niten AI style)
   - Nav links (e.g., Product, Solutions, Security, Pricing, About)
   - CTA button: “Request Demo”

2. **Hero (About Us)**
   - Badge (small pill)
   - Large headline about mission/why the company exists
   - Supporting paragraph focused on metadata intelligence and privacy-first approach

3. **Our Story**
   - 2-column section (text + image/card)
   - Explain company origin, problem, and approach

4. **Values / Principles**
   - 3–4 cards with icon, title, short description
   - Keep styling consistent with existing card treatment

5. **Demo Video Section**
   - Use `react-player`
   - Support YouTube/Vimeo URL (preferred) and local file fallback
   - Include title and short context text

6. **Schedule a Demo (Calendly)**
   - Use `react-calendly` `InlineWidget`
   - Embed in a clean bordered/rounded container
   - Include heading and short call-to-action copy

7. **Footer**
   - Brand + link list
   - Legal/compliance line

---

## 6) Component Design
Create reusable components:
- `Header`
- `Hero`
- `StorySection`
- `ValuesGrid`
- `VideoSection`
- `CalendlySection`
- `Footer`

Keep sections data-driven where practical (arrays for values, links, etc.).

---

## 7) Implementation Details

### 7.1 Calendly
Install and use:
- `npm install react-calendly`
- Use:
  - `InlineWidget`
  - URL from config constant (e.g., `https://calendly.com/your-handle`)

### 7.2 Video
Install and use:
- `npm install react-player`
- Use `controls={true}` and responsive wrapper
- Prefer external host URL for performance and size constraints

### 7.3 Responsiveness
- Mobile-first
- Ensure no horizontal overflow
- Cards stack on small screens, split into columns on md+

### 7.4 Accessibility
- Semantic landmarks (`header`, `main`, `section`, `footer`)
- Keyboard-focusable interactive elements
- Descriptive alt text
- Adequate color contrast
- Visible focus states

---

## 8) GitHub Pages Deployment Requirements

### 8.1 Package setup
- Add `homepage` in `package.json`:
  - `https://<username>.github.io/<repo-name>`

### 8.2 Scripts
Include scripts (Vite):
- `build`: `vite build`
- `predeploy`: `npm run build`
- `deploy`: `gh-pages -d dist`

### 8.3 Base path
Configure Vite base for project repo if needed:
- `base: '/<repo-name>/'` in `vite.config.*`

### 8.4 CI/CD
Provide GitHub Actions workflow to:
- install deps
- build app
- deploy static output to Pages

---

## 9) Testing Strategy
Define and run the following checks:

### 9.1 Static checks
- Linting and formatting
- Type checks (if TypeScript)
- Build success (`npm run build`)

### 9.2 Functional checks
- Header renders and nav/CTA visible
- Video component loads and displays controls
- Calendly widget renders in page
- No section causes horizontal overflow on mobile

### 9.3 Responsive checks
Validate at typical breakpoints:
- 375px (mobile)
- 768px (tablet)
- 1280px+ (desktop)

### 9.4 Accessibility smoke tests
- Keyboard navigation through interactive controls
- Sufficient heading hierarchy
- Image alt coverage
- Focus indicators visible

### 9.5 Deployment validation
- Built site loads from GitHub Pages URL
- Assets resolve correctly under repo base path
- Refresh/deep-link behavior acceptable for static hosting constraints

---

## 10) Deliverables
Produce:
1. Fully implemented About Us page in React with Tailwind style parity.
2. Reusable section components.
3. Video + Calendly integration working.
4. Deployment config for GitHub Pages.
5. README section with setup, run, build, deploy steps.
6. Brief test report of completed checks.

---

## 11) Acceptance Criteria
The task is complete only when:
- The page visually matches the original style system (especially shell/layout/token usage).
- Header and footer are included and consistent with the existing design language.
- Video and Calendly sections are functional.
- Site builds cleanly and deploys to GitHub Pages.
- Mobile/desktop responsiveness and baseline accessibility are verified.

If any assumption is required (e.g., final Calendly URL, video URL, exact copy), define it clearly in a config/constants section and document it in README.
