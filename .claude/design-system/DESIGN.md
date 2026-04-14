# DESIGN.md – SC Fussach Modern Design System (2026)

## Brand Identity
SC Fussach ist ein Fußballverein – das Design soll **Energie, Teamgeist und lokale Identität**
transportieren. Modern und professionell, aber nahbar. Kein übertriebenes Glassmorphism –
stattdessen: klare Struktur, starke Farben, schnelle Lesbarkeit.

## Color Palette

### Primär (Vereinsfarben)
```
--color-primary:     #003087   /* SC Fussach Dunkelblau */
--color-primary-mid: #0050c8   /* Mittleres Blau – CTAs, Links */
--color-primary-light:#e8f0fe  /* Helles Blau – Backgrounds, Badges */
--color-accent:      #e63329   /* Rot – Highlights, Urgent-Badges */
--color-white:       #ffffff
--color-black:       #0a0a0a
```

### Neutrals
```
--color-gray-50:  #f9fafb
--color-gray-100: #f3f4f6
--color-gray-200: #e5e7eb
--color-gray-600: #4b5563
--color-gray-900: #111827
```

### Dark Mode (optional)
```
bg: #0d1117   text: #f0f6ff   card: #161b22   border: #30363d
```

## Typography

### Fonts
- **Heading**: `Inter` (700, 800) – clean, modern, gut lesbar
- **Body**: `Inter` (400, 500) – einheitlich
- Fallback: `system-ui, sans-serif`

### Type Scale (fluid, Tailwind v4)
| Token       | Size         | Usage                     |
|-------------|--------------|---------------------------|
| `text-5xl`  | 3rem / 48px  | Hero Headline             |
| `text-4xl`  | 2.25rem      | Section Titles            |
| `text-2xl`  | 1.5rem       | Card Headlines            |
| `text-lg`   | 1.125rem     | Subheadings               |
| `text-base` | 1rem         | Body Text                 |
| `text-sm`   | 0.875rem     | Labels, Captions          |

## Spacing System
- Basis: 4px (Tailwind default)
- Section padding: `py-20` (80px) – großzügig
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card gap: `gap-6` oder `gap-8`

## Component Styles

### Cards (News, Spiele, Sponsoren)
```
rounded-2xl bg-white shadow-sm border border-gray-100
hover:shadow-md hover:-translate-y-1 transition-all duration-300
```

### Buttons
```
Primary:  bg-primary text-white px-6 py-3 rounded-xl font-semibold
          hover:bg-primary-mid transition-colors duration-200
Ghost:    border border-primary text-primary hover:bg-primary-light
```

### Navigation (sticky, clean)
```
sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100
Logo links | Nav-Links mittig | CTA rechts (z.B. "Mitglied werden")
Mobile: Hamburger-Menu mit Slide-in
```

### Hero Section
```
min-h-[90vh] relative overflow-hidden
Hintergrundbild (Stadion / Spielszene) mit dunklem Overlay
Großes Vereinslogo + Headline + CTA
Scroll-down Indicator mit Animation
```

### Match Cards (Spielplan)
```
Horizontales Layout: Heim | Score | Gast
Datum oben als Badge, Wettbewerb-Label
Farb-Akzent je nach Ergebnis (Sieg/Niederlage/Unentschieden)
```

### Sponsor Grid
```
Logo-Grid: responsive (2-3-4-6 cols)
Grayscale-Filter → hover: color + slight scale
rounded-xl bg-gray-50 p-6
```

## Motion Rules (Framer Motion)

```js
// Standard Page Enter
initial: { opacity: 0, y: 20 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.5, ease: "easeOut" }

// Stagger für Listen (Cards etc.)
staggerChildren: 0.08

// Hover auf Cards
whileHover: { y: -4, transition: { duration: 0.2 } }

// Scroll-triggered Sections
viewport: { once: true, margin: "-100px" }
```

**Kein Overkill**: Animationen verstärken die UX, lenken nicht ab.
Jede Animation max. 0.6s. Keine parallax-Exzesse.

## Sections Spezifisch

### Hero
- Fullscreen mit Vereins-Bildwelt (Action-Foto Fußball)
- Overlay: `bg-gradient-to-b from-primary/80 to-primary/40`
- Headline in Weiß, groß, bold
- CTA: "Nächste Spiele" + "Zum Verein"

### Spielplan / Ergebnisse
- Timeline oder Cards-Grid
- Live-Indikator falls möglich
- Filter nach Mannschaft

### News
- Masonry oder 3-col Grid
- Großes Featured-Article links
- Datum + Kategorie-Badge

### Nachwuchs
- Altersgruppen als Cards mit Icon + Info
- Anmeldebutton prominent

### Club100
- Highlight-Section mit dunklem Hintergrund (--color-primary)
- Benefit-Liste mit Check-Icons
- CTA Button hervorgehoben

## Was NICHT tun
- Keine generischen Stock-Foto-Hero-Sections
- Kein excessive Glassmorphism bei einem Sportverein – zu kalt
- Keine animierten Hintergründe die von Inhalten ablenken
- Keine Comic Sans oder slab-serif Fonts
- Kein Layout das auf Mobile bricht
