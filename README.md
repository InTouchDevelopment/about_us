# NithenAI — About Us

A standalone About Us page built with React, Vite, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173/about-us/](http://localhost:5173/about-us/) to view locally.

## Build & Preview

```bash
npm run build      # outputs to dist/
npm run preview    # serves the built site locally
```

## Deploy to GitHub Pages

```bash
npm run deploy     # builds and pushes to gh-pages branch
```

Or push to `main` and the included GitHub Actions workflow (`.github/workflows/deploy.yml`) will deploy automatically.

**Before deploying**, update these two values to match your GitHub repo:

- `package.json` → `homepage`: set to `https://<username>.github.io/<repo-name>`
- `vite.config.js` → `base`: set to `/<repo-name>/`

---

## Placeholders to Replace

All placeholder content lives in **`src/constants.js`**. Update these before going live:

| Placeholder | Location | What to provide |
|---|---|---|
| **Calendly URL** | `CALENDLY.url` | Your real Calendly scheduling link (e.g. `https://calendly.com/yourname/30min`) |
| **Demo video** | `VIDEO.url` | Place your `.mp4` file in `public/` as `demo.mp4` — or change the path/URL |
| **Story image** | `STORY.image` | An image path (e.g. `'/about-us/team.jpg'` placed in `public/`) or external URL |
| **Hero description** | `HERO.description` | Refine the supporting paragraph beneath the headline |
| **Story copy** | `STORY.paragraphs` | Replace the three placeholder paragraphs with real company story text |
| **Value cards** | `VALUES[]` | Adjust icons, titles, and descriptions for each value |

---

## Project Structure

```
about_us/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD for Pages
├── public/
│   └── vite.svg                # Favicon
│   └── demo.mp4                # (you add this) Demo video file
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Sticky translucent nav with hub icon + account avatar
│   │   ├── Hero.jsx            # Badge pill + headline with blue accent text
│   │   ├── StorySection.jsx    # Two-column: company story text + image
│   │   ├── VideoSection.jsx    # Local/external video via react-player
│   │   ├── ValuesGrid.jsx      # 4 principle cards in responsive grid
│   │   ├── CalendlySection.jsx # Inline Calendly scheduling widget
│   │   └── Footer.jsx          # Brand, legal links, SOC2 compliance line
│   ├── constants.js            # All configurable content & placeholder values
│   ├── App.jsx                 # Page shell — assembles all sections
│   ├── index.css               # Tailwind imports + base font/scroll styles
│   └── main.jsx                # React entry point
├── index.html                  # HTML shell with Manrope + Material Symbols fonts
├── vite.config.js              # Vite config with base path for GitHub Pages
├── package.json                # Dependencies and scripts
└── claude.md                   # Build specification
```

## Section Order (top to bottom)

1. **Header** — sticky nav, anchors to page sections
2. **Hero** — badge + headline + description
3. **Our Story** — company narrative + image placeholder
4. **Demo Video** — embedded video player
5. **Values** — four principle cards
6. **Schedule a Demo** — Calendly inline widget
7. **Footer** — brand, legal links, compliance

## Tech Stack

- **React 19** + **Vite 6**
- **Tailwind CSS 4**
- **react-player** — video embed (supports local `.mp4` and external URLs)
- **react-calendly** — inline scheduling widget
- **gh-pages** — deployment utility
- **Google Fonts** — Manrope (typography) + Material Symbols Outlined (icons)
