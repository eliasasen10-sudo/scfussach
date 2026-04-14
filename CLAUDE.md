# CLAUDE.md – SC Fussach Website Rebuild

## Projekt-Ziel
Du bist mein Senior Frontend Engineer. Baue die Website von **SC Fussach** (https://scfussach.at) nach –
**deutlich moderner, cleaner und hochwertiger** als das Original (2026 Design-Trends: dark-first optional,
glassmorphism, bento layouts, buttery micro-interactions, perfekte Typografie).

SC Fussach ist ein österreichischer Fußballverein (gegründet 1946) aus Fussach, Vorarlberg.
Corporate Color: **Blau** ("alwaysblue" – dunkles Blau als Primärfarbe, Akzent Weiß/Rot).

## Tech-Stack
- Next.js 16 (App Router) – `node_modules/next/dist/docs/` lesen vor Codeänderungen
- TypeScript (strict)
- Tailwind CSS v4 (CSS-first, kein tailwind.config.js)
- Framer Motion für alle Animationen
- Lucide Icons
- Responsive + accessible (WCAG AA)

## Seiten & Sektionen
- **Home**: Hero, aktuelle News, nächste Spiele, Sponsoren, Club100-Teaser
- **Aktuelles**: News-Feed
- **Verein**: Geschichte (seit 1946), Vorstand, Mitglied werden
- **Mannschaften**: 1. Mannschaft, 1b, Nachwuchs, BSK, Altherren
- **Sponsoren**: Partner-Grid
- **Downloads**, **Shop**, **CAMP2026**, **EVENTS**, **Club100**

## Design-Prinzipien
- Immer `.claude/design-system/DESIGN.md` beachten
- Vereinsfarbe Blau (#003087) dominant
- Mobile-first (Smartphone primär)
- Performance > alles

## Befehle
- `/clone https://scfussach.at` → kompletter Rebuild starten
- `/modernize` → aktuelle Seite verbessern
- `/section [name]` → einzelne Section bauen
