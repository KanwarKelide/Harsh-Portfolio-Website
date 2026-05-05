# Harsh Aryan — Luxury Real Estate Portfolio

> A high-conversion, visually stunning portfolio website for Harsh Aryan, 24-year-old real estate sales professional at Star Estates, Noida.

## Live Preview

```bash
npm install
npm run dev
# Opens at http://localhost:3000
```

## Design Direction

**Aesthetic**: Obsidian & Gold — the feel of walking into a luxury penthouse showroom.

- Dark charcoal backgrounds with warm obsidian tones
- Liquid gold typography and geometric accents
- Glassmorphism surfaces with subtle depth
- Cinematic Framer Motion animations throughout
- Typography: Cormorant Garamond (display) + DM Sans (body)

## Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Full-screen cinematic with parallax background, animated headline, CTA buttons, stat bar |
| 2 | **About** | Story narrative + animated stat counters + profile card |
| 3 | **Experience** | Star Estates role detail + story cards showing sales process |
| 4 | **Projects** | Luxury property showcase — Jacob & Co, Elie Saab, Penthouse Collection |
| 5 | **Skills** | Animated progress bars for core sales skills + soft skills grid |
| 6 | **Testimonials** | Rotating testimonials with trust indicators |
| 7 | **Personal Edge** | Karate / Singing / Social Work — the human side |
| 8 | **CTA** | Bold call-to-action with Book a Call, Resume, LinkedIn |
| 9 | **Footer** | Clean contact info and navigation |

## Tech Stack

```
React 18        — UI framework
Vite            — Build tool
Tailwind CSS    — Utility styling with custom gold/obsidian palette
Framer Motion   — Scroll-triggered & cinematic animations
Lucide React    — Icon set
Google Fonts    — Cormorant Garamond + DM Sans
```

## Quick Customisation

### Update contact info
Edit `CTA.jsx` and `Footer.jsx` — search for `harryaryan1110@gmail.com` and `+91 9310 034 979`.

### Update stats
In `Hero.jsx` → `HERO_STATS` array  
In `About.jsx` → `STATS` array

### Add real project images
In `Projects.jsx` → `PROJECTS` array, update the `image` field with actual property photography URLs.

### Add resume PDF
Drop `Harsh_Aryan_Resume.pdf` into the `public/` folder.

### Update LinkedIn
Search for `linkedin.com/in/harsh-aryan` across all files and replace with the actual URL.

## Production Build

```bash
npm run build
# Output in /dist — ready for Vercel, Netlify, or any static host
```

## Deployment (Vercel — recommended)

```bash
npm i -g vercel
vercel
# Follow prompts — auto-detects Vite config
```

---

*Built with obsidian precision and gold-standard ambition.*
