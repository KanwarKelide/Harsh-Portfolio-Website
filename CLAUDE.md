# Harsh Aryan Portfolio — CLAUDE.md

## Project Overview
Luxury portfolio website for **Harsh Aryan**, a 24-year-old real estate sales professional at Star Estates, Noida, India. The site is designed to feel like a premium real estate brand experience — not a standard developer portfolio.

## Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS v3 (custom config with obsidian/gold color palette)
- **Animations**: Framer Motion v11
- **Icons**: Lucide React
- **Fonts**: Cormorant Garamond (display), DM Sans (body)

## Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `obsidian-900` | `#0A0A0B` | Main background |
| `obsidian-800` | `#111114` | Secondary sections |
| `obsidian-700` | `#1A1A1E` | Cards, surfaces |
| `gold-500` | `#C9A84C` | Primary accent, CTAs |
| `gold-400` | `#E8C97A` | Light accent, text highlights |
| `gold-300` | `#F0D98A` | Hover states |

### Typography
- **Display/Headlines**: `font-cormorant` (Cormorant Garamond) — luxury editorial feel
- **Body/UI**: `font-dm` (DM Sans) — clean, modern, readable
- Tracking conventions: body labels use `tracking-[0.3em–0.45em]` in uppercase

### Key CSS Classes (index.css)
- `.gold-gradient-text` — animated gold gradient on text
- `.shimmer-text` — shimmer animation on text
- `.glass-card` — glassmorphism surface
- `.gold-border-card` — gradient border using padding-box trick
- `.section-tag` — standard section label with gold line prefix

## File Structure
```
src/
├── components/
│   ├── Navbar.jsx        # Sticky nav with mobile drawer
│   ├── Hero.jsx          # Full-screen cinematic hero + parallax
│   ├── About.jsx         # Story + animated stat counters
│   ├── Experience.jsx    # Star Estates role + story cards
│   ├── Projects.jsx      # Jacob & Co, Elie Saab showcase gallery
│   ├── Skills.jsx        # Animated progress bars + soft skills
│   ├── Testimonials.jsx  # Rotating testimonials + trust indicators
│   ├── PersonalEdge.jsx  # Karate / Singing / Social work
│   ├── CTA.jsx           # Book a call + contact links
│   └── Footer.jsx        # Clean footer with nav + contact
├── App.jsx
├── main.jsx
└── index.css
```

## Animation Patterns
- All scroll-triggered sections use `useInView` with `once: true`
- Stagger children with `transition: { delay: 0.1 + index * 0.1 }`
- Hero parallax: `useScroll` + `useTransform` on background image
- Counter animation: `requestAnimationFrame` with cubic ease-out
- Hover effects: `whileHover={{ scale: 1.02, y: -2 }}`

## Personal Info (for updates)
- **Email**: harryaryan1110@gmail.com
- **Phone**: +91 9310 034 979
- **Location**: Noida, India
- **Company**: Star Estates
- **Education**: MBA Marketing & Sales, Amity Business School (2026)
- **LinkedIn**: linkedin.com/in/harsh-aryan

## Commands
```bash
npm install      # Install dependencies
npm run dev      # Start dev server (port 3000)
npm run build    # Production build
npm run preview  # Preview production build
```

## Content Updates
- **Stats** (About.jsx, Hero.jsx): Update `HERO_STATS` and `STATS` arrays
- **Projects** (Projects.jsx): Update `PROJECTS` array with real images/pricing
- **Testimonials** (Testimonials.jsx): Update `TESTIMONIALS` array
- **Resume**: Replace `/public/Harsh_Aryan_Resume.pdf` with actual resume PDF

## Image Sources
Currently using Unsplash for placeholder images. For production:
- Replace hero background with a personal professional photo or branded property image
- Replace project images with actual Jacob & Co / Elie Saab project photography
- Add a proper profile photo in the About section
