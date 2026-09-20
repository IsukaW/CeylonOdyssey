# Ceylon Odyssey

A single-page, editorial-style luxury travel showcase for Sri Lanka — built as a cinematic "digital monograph" of curated expeditions, cultural heritage, and bespoke itinerary planning across the island.

Live sections walk through Sri Lanka chapter by chapter: a full-bleed Sigiriya hero, a geographically accurate interactive island map, curated signature expeditions, sensory culture & cuisine, cultural heritage, a bespoke trip-tailoring engine, a photographic monograph gallery, and traveler dispatches.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 8** for dev server and build tooling
- **lucide-react** for icons
- Hand-authored utility CSS (a Tailwind-style class system in `src/index.css`, without a Tailwind build step)
- **Oxlint** for linting

No CSS framework, animation library, or UI kit is used — layout, glassmorphism, and motion are all plain CSS.

## Getting Started

**Requirements:** Node.js 18+

```bash
npm install
npm run dev
```

The dev server prints a local URL (Vite will pick the next free port starting from `5173`).

### Available Scripts

| Command           | Description                                  |
| ------------------ | --------------------------------------------- |
| `npm run dev`      | Start the Vite dev server with HMR            |
| `npm run build`    | Type-check (`tsc -b`) and build for production |
| `npm run preview`  | Preview the production build locally          |
| `npm run lint`     | Run Oxlint against the codebase                |

## Project Structure

```
src/
  components/
    Navbar.tsx            Floating glass navbar, scroll progress, mobile drawer
    HeroSection.tsx        Full-bleed cinematic hero with trip search bar
    InteractiveMap.tsx     Geo-accurate SVG map of Sri Lanka with live waypoints
    ExpeditionsSection.tsx Curated multi-day expedition cards & pricing
    SensoryCeylon.tsx      Cuisine & tea culture showcase
    CulturalHeritage.tsx   Traditions, dance, and heritage storytelling
    ItineraryBuilder.tsx   Bespoke trip tailor with live price estimation
    MonographGallery.tsx   Full-bleed photographic gallery
    Testimonials.tsx        Traveler dispatches & press mentions
    ConciergeModal.tsx     Inquiry / booking modal
    Footer.tsx             Site footer & newsletter signup
  data/
    destinations.ts        Waypoint data (name, coordinates, highlights, lodges)
    expeditions.ts          Signature expedition itineraries & pricing
    cultureAndCuisine.ts     Cultural & culinary content
    gallery.ts               Monograph gallery images
  index.css                 Design tokens + hand-rolled utility classes
  App.tsx                    Page composition & shared state (currency, modals)
public/
  images/                    Destination photography & brand emblem
```

## Notable Features

- **Interactive island map** — an accurate Sri Lanka coastline (simplified from OpenStreetMap boundary data) with destination pins placed by real latitude/longitude, animated circuit routes, and a live destination dossier panel.
- **Bespoke Itinerary Builder** — a guided trip-planning flow with live price estimation across multiple currencies (USD, EUR, GBP, LKR).
- **Concierge inquiry modal** — captures pre-selected expeditions or custom bespoke plans for follow-up.
- **Responsive, glass-styled navbar** — scroll-aware, with an active-section indicator, animated mobile drawer, and a reading-progress bar.

## License

MIT — see [LICENSE](LICENSE).
