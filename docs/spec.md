# Portfolio Site Specification

## Overview

A terminal-themed portfolio website built with Astro 5.x, featuring a modern dark aesthetic inspired by Nord color scheme. The site serves as a professional portfolio with bilingual support (English/Japanese).

**Live URL:** https://kenev.net
**Default Language:** English (`/` redirects to `/en`)

---

## Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | Astro 5.x (latest) |
| Output | Fully static site (SSG) |
| Styling | CSS (Nord color palette) |
| Typography | JetBrains Mono |
| Content | Astro Content Collections |
| Deployment | Cloudflare Pages |
| Analytics | Cloudflare Analytics (built-in) |

---

## Design System

### Color Palette (Nord Theme)

```css
/* Nord Polar Night (backgrounds) */
--nord0: #2e3440;  /* Darkest - main background */
--nord1: #3b4252;  /* Lighter bg - sidebar, cards */
--nord2: #434c5e;  /* Selection, hover states */
--nord3: #4c566a;  /* Comments, muted text */

/* Nord Snow Storm (text) */
--nord4: #d8dee9;  /* Primary text */
--nord5: #e5e9f0;  /* Brighter text */
--nord6: #eceff4;  /* Brightest - headings */

/* Nord Frost (accents) */
--nord7: #8fbcbb;  /* Teal - links */
--nord8: #88c0d0;  /* Cyan - primary accent */
--nord9: #81a1c1;  /* Blue - secondary */
--nord10: #5e81ac; /* Dark blue - tertiary */

/* Nord Aurora (semantic) */
--nord11: #bf616a; /* Red - errors */
--nord12: #d08770; /* Orange - warnings */
--nord13: #ebcb8b; /* Yellow - highlights */
--nord14: #a3be8c; /* Green - success */
--nord15: #b48ead; /* Purple - special */
```

### Typography

- **Font Family:** JetBrains Mono (loaded via Google Fonts or self-hosted)
- **Font Weights:** 400 (regular), 500 (medium), 700 (bold)
- **Base Size:** 16px
- **Line Height:** 1.6 for body, 1.2 for headings

### Terminal UI Chrome

The site is wrapped in a terminal window frame:

```
┌─────────────────────────────────────────────────────────────────┐
│ ● ○ ○  portfolio — ken@kenev.net                    [EN | JA]  │
├─────────────────────────────────────────────────────────────────┤
│ [SIDEBAR]          │ [MAIN CONTENT AREA]                       │
│                    │                                            │
│ ~/                 │                                            │
│ ├── README.md      │                                            │
│ ├── .config/       │                                            │
│ │   └── me         │                                            │
│ ├── src/           │                                            │
│ │   └── projects/  │                                            │
│ ├── skills.json    │                                            │
│ └── contact.sh     │                                            │
│                    │                                            │
├─────────────────────────────────────────────────────────────────┤
│ main ✓ | kenev.net                                              │
└─────────────────────────────────────────────────────────────────┘
```

**Components:**
1. **Titlebar:** macOS-style traffic lights, window title, language toggle [EN | JA]
2. **Sidebar:** File tree navigation (creative metaphor naming)
3. **Content Area:** Main page content
4. **Status Line:** Git-style info (branch indicator, site name)

---

## Site Structure & Navigation

### URL Structure

```
/                    → Redirects to /en
/en                  → English home (About)
/en/projects         → Projects listing
/en/skills           → Skills page
/en/contact          → Contact/social links
/ja                  → Japanese home (About)
/ja/projects         → Projects listing
/ja/skills           → Skills page
/ja/contact          → Contact/social links
```

### Sidebar File Tree (Creative Metaphor)

```
~/portfolio
├── README.md          → About (home)
├── .config/
│   └── me             → About (alternative entry)
├── src/
│   └── projects/      → Projects listing
│       ├── project-1/
│       ├── project-2/
│       └── ...
├── skills.json        → Skills page
└── contact.sh         → Contact page
```

Clicking any item navigates to that section. Active item is highlighted.

---

## Pages & Content

### 1. About / Home (`README.md`)

**Content Type:** Professional summary (2-3 paragraphs)

**Layout:**
```
$ cat README.md

# Ken Fukuyama

[Professional summary paragraph 1]

[Professional summary paragraph 2]

[Current focus / interests]
```

**Content Collection Schema:**
```typescript
// src/content/config.ts
const about = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['en', 'ja']),
  })
});
```

### 2. Projects (`src/projects/`)

**Display:** File listing style with inline expansion

**Listing View:**
```
$ ls -la src/projects/

drwxr-xr-x  project-alpha/    API Gateway for microservices
            [Go] [gRPC] [K8s]

drwxr-xr-x  project-beta/     Real-time analytics dashboard
            [React] [TypeScript] [D3]

drwxr-xr-x  project-gamma/    CLI tool for infrastructure
            [Rust] [AWS]
```

**Expanded View (on click):**
```
drwxr-xr-x  project-alpha/    API Gateway for microservices
            [Go] [gRPC] [K8s]

    ┌─────────────────────────────────────────────────────┐
    │ ## Project Alpha                                    │
    │                                                     │
    │ Full description of the project spanning multiple   │
    │ lines with details about the problem solved,        │
    │ architecture decisions, and outcomes.               │
    │                                                     │
    │ **Role:** Lead Developer                            │
    │ **Links:** [GitHub] [Live Demo]                     │
    └─────────────────────────────────────────────────────┘
```

**Content Collection Schema:**
```typescript
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),          // One-liner for listing
    lang: z.enum(['en', 'ja']),
    techStack: z.array(z.string()),   // ['Go', 'gRPC', 'K8s']
    role: z.string().optional(),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    order: z.number(),                // Sort order
  })
});
```

**Capacity:** 6-10 projects

### 3. Skills (`skills.json`)

**Display:** ASCII progress bars with years of experience

```
$ cat skills.json

{
  "languages": [
    { "name": "TypeScript", "years": 6, "bar": "████████████████░░░░" },
    { "name": "Go",         "years": 5, "bar": "███████████████░░░░░" },
    { "name": "Python",     "years": 4, "bar": "████████████░░░░░░░░" }
  ],
  "frameworks": [
    { "name": "React",      "years": 5, "bar": "███████████████░░░░░" },
    { "name": "Next.js",    "years": 3, "bar": "██████████░░░░░░░░░░" }
  ],
  "infrastructure": [
    { "name": "Kubernetes", "years": 4, "bar": "████████████░░░░░░░░" },
    { "name": "AWS",        "years": 6, "bar": "████████████████░░░░" }
  ]
}
```

**Progress Bar Scale:** 1 block = ~0.5 years (20 blocks total = 10 years)

**Content Collection Schema:**
```typescript
const skills = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.string(),           // 'languages', 'frameworks', etc.
    lang: z.enum(['en', 'ja']),
    items: z.array(z.object({
      name: z.string(),
      years: z.number(),
    }))
  })
});
```

### 4. Contact (`contact.sh`)

**Display:** Social links only, script-style presentation

```
$ ./contact.sh

#!/bin/bash
# Connect with me

GITHUB="https://github.com/kenfdev"
LINKEDIN="https://linkedin.com/in/..."
TWITTER="https://twitter.com/..."

echo "Choose your platform:"
→ [GitHub]   # kenfdev
→ [LinkedIn] # Ken Fukuyama
→ [Twitter]  # @...
```

**Included Platforms:**
- GitHub
- LinkedIn
- Twitter/X

---

## Animations & Interactions

### Boot Sequence (First Visit Only)

On first page load, show brief terminal boot animation (~2-3 seconds):

```
[    0.000] Initializing portfolio...
[    0.124] Loading content collections... OK
[    0.256] Mounting components... OK
[    0.512] Starting development server...

kenev.net ready.

$ _
```

- Duration: 2-3 seconds max
- Skip: Set `localStorage.visited = true` after first visit
- Subsequent visits: Instant load, no boot sequence

### Typewriter Effect (First Visit Only)

- Applies to major headings and intro text
- Speed: ~50ms per character
- Only on first visit (same localStorage flag)
- No typewriter on subsequent visits or navigation

### Cursor Blinking

- Blinking block cursor (`█`) or underscore (`_`) after prompts
- CSS animation: `blink 1s step-end infinite`

### Hover States

- Sidebar items: Background highlight (nord2)
- Links: Underline + color shift (nord7 → nord8)
- Project cards: Subtle glow/border highlight

---

## Responsive Design

### Breakpoints

```css
/* Mobile */
@media (max-width: 768px) { }

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) { }

/* Desktop */
@media (min-width: 1025px) { }
```

### Mobile Behavior

- **Terminal frame:** Maintained but simplified
- **Sidebar:** Converts to hamburger menu (top-left)
- **Titlebar:** Shortened, language toggle remains
- **Status line:** Hidden or simplified on very small screens
- **Content:** Full width, appropriate padding

---

## Internationalization (i18n)

### Structure

```
src/content/
├── about/
│   ├── en.md
│   └── ja.md
├── projects/
│   ├── en/
│   │   ├── project-1.md
│   │   └── project-2.md
│   └── ja/
│       ├── project-1.md
│       └── project-2.md
├── skills/
│   ├── en.yaml
│   └── ja.yaml
└── config.ts
```

### Language Switching

- Toggle in titlebar: `[EN | JA]`
- Full page navigation on switch (e.g., `/en/projects` → `/ja/projects`)
- Preserves current section when switching
- `hreflang` tags for SEO

### Static Text Translations

```typescript
// src/i18n/translations.ts
export const t = {
  en: {
    nav: {
      about: 'README.md',
      projects: 'src/projects/',
      skills: 'skills.json',
      contact: 'contact.sh',
    },
    meta: {
      title: 'Ken Fukuyama - Portfolio',
      description: '...',
    }
  },
  ja: {
    nav: {
      about: 'README.md',
      projects: 'src/projects/',
      skills: 'skills.json',
      contact: 'contact.sh',
    },
    meta: {
      title: '福山 健 - ポートフォリオ',
      description: '...',
    }
  }
};
```

---

## SEO & Meta

### Per-Page Meta Tags

```html
<title>{pageTitle} | Ken Fukuyama</title>
<meta name="description" content="{pageDescription}">
<link rel="canonical" href="https://kenev.net{path}">
<link rel="alternate" hreflang="en" href="https://kenev.net/en{subpath}">
<link rel="alternate" hreflang="ja" href="https://kenev.net/ja{subpath}">
```

### Open Graph Tags

```html
<meta property="og:title" content="{title}">
<meta property="og:description" content="{description}">
<meta property="og:type" content="website">
<meta property="og:url" content="{canonicalUrl}">
<meta property="og:image" content="https://kenev.net/og-image.png">
<meta property="og:locale" content="en_US">
<meta property="og:locale:alternate" content="ja_JP">
```

### Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{title}">
<meta name="twitter:description" content="{description}">
<meta name="twitter:image" content="https://kenev.net/og-image.png">
```

### JSON-LD Structured Data

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ken Fukuyama",
  "url": "https://kenev.net",
  "sameAs": [
    "https://github.com/kenfdev",
    "https://linkedin.com/in/...",
    "https://twitter.com/..."
  ],
  "jobTitle": "Software Engineer",
  "knowsAbout": ["TypeScript", "Go", "Kubernetes", "..."]
}
```

---

## 404 Error Page

**Style:** Terminal error aesthetic

```
$ cat /nonexistent-page

Error: ENOENT: no such file or directory

    at readFile (portfolio/routes.ts:42:15)
    at processRequest (portfolio/server.ts:128:7)

The requested page could not be found.

$ cd ~  [← Return Home]
```

---

## Accessibility (WCAG AA)

### Requirements

- **Color Contrast:** All text meets 4.5:1 ratio (Nord palette verified)
- **Keyboard Navigation:** Full site navigable via Tab/Enter/Arrow keys
- **Focus Indicators:** Visible focus rings on all interactive elements
- **Screen Readers:** Semantic HTML, ARIA labels where needed
- **Reduced Motion:** Respect `prefers-reduced-motion` media query
  - Skip boot sequence
  - Skip typewriter effects
  - Instant transitions

### Semantic HTML

```html
<header role="banner">...</header>
<nav role="navigation" aria-label="Main navigation">...</nav>
<main role="main">...</main>
<footer role="contentinfo">...</footer>
```

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 90+ |
| Lighthouse Accessibility | 90+ |
| Lighthouse Best Practices | 90+ |
| Lighthouse SEO | 90+ |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |

### Optimization Strategies

- **Font Loading:** `font-display: swap`, subset if possible
- **Images:** WebP format, proper sizing, lazy loading
- **CSS:** Minimal, no unused styles
- **JavaScript:** Minimal client-side JS (Astro islands only where needed)
- **Caching:** Proper cache headers via Cloudflare

---

## Project Structure

```
portfolio/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.ico
│   ├── og-image.png
│   └── fonts/
│       └── JetBrainsMono-*.woff2
├── src/
│   ├── components/
│   │   ├── Terminal/
│   │   │   ├── Frame.astro
│   │   │   ├── Titlebar.astro
│   │   │   ├── Sidebar.astro
│   │   │   ├── StatusLine.astro
│   │   │   └── BootSequence.astro
│   │   ├── ProjectCard.astro
│   │   ├── SkillBar.astro
│   │   └── LanguageToggle.astro
│   ├── content/
│   │   ├── config.ts
│   │   ├── about/
│   │   ├── projects/
│   │   └── skills/
│   ├── i18n/
│   │   └── translations.ts
│   ├── layouts/
│   │   └── TerminalLayout.astro
│   ├── pages/
│   │   ├── index.astro          (redirect to /en)
│   │   ├── en/
│   │   │   ├── index.astro      (About)
│   │   │   ├── projects.astro
│   │   │   ├── skills.astro
│   │   │   └── contact.astro
│   │   ├── ja/
│   │   │   ├── index.astro
│   │   │   ├── projects.astro
│   │   │   ├── skills.astro
│   │   │   └── contact.astro
│   │   └── 404.astro
│   └── styles/
│       ├── global.css
│       └── nord.css
└── docs/
    └── spec.md
```

---

## Deployment

### Cloudflare Pages Configuration

**Build Settings:**
- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: 20.x

**Redirects (`public/_redirects`):**
```
/ /en 302
```

**Headers (`public/_headers`):**
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

### Domain Configuration

- Primary domain: kenev.net
- Already configured with Cloudflare

---

## Out of Scope for v1

- Blog/articles section
- RSS feed
- PWA/offline support
- Comments/guestbook
- Easter eggs
- Dark/light theme toggle (always dark)
- Search functionality
- Contact form

---

## Summary of Decisions

| Decision | Choice |
|----------|--------|
| Framework | Astro 5.x (latest) |
| Interaction model | Terminal-styled UI (traditional navigation) |
| Color theme | Nord |
| Font | JetBrains Mono |
| Content management | Astro Content Collections |
| i18n approach | URL-based (/en, /ja) |
| Default language | English (redirect from /) |
| Project display | File listing with inline expansion |
| Skill display | ASCII progress bars (years of experience) |
| About depth | Professional summary |
| Contact method | Social links only (GitHub, LinkedIn, Twitter) |
| Boot sequence | Brief, first visit only |
| Typewriter | First visit only |
| Navigation | Sidebar file tree (creative metaphor) |
| Status line | Git-style info |
| Language toggle | In titlebar |
| Mobile strategy | Responsive terminal (sidebar → hamburger) |
| Accessibility | WCAG AA compliant |
| SEO | Full (OG + Twitter + JSON-LD) |
| 404 page | Terminal error style |
| Analytics | Cloudflare Analytics |
| Performance | 90+ Lighthouse scores |
| Deployment | Cloudflare Pages |
| PWA | No |
