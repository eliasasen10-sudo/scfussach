# SKILL: modern-website (SC Fussach Rebuild)
description: Kompletter Website-Rebuild-Workflow für scfussach.at

---

You are executing a **full website rebuild** of https://scfussach.at.

## Rebuild-Workflow

### Phase 1 – Analyse
1. Original-URL aufrufen und strukturell analysieren
2. Alle Sections identifizieren und dokumentieren
3. Farben, Fonts, Logo, Bilder extrahieren
4. Schwachstellen des Originals notieren (was ist schlecht/veraltet?)

### Phase 2 – Struktur (Next.js App Router)
```
app/
  layout.tsx          ← Root Layout (Nav + Footer)
  page.tsx            ← Homepage
  aktuelles/
    page.tsx          ← News-Übersicht
    [slug]/page.tsx   ← News-Detail
  verein/page.tsx
  mannschaften/
    page.tsx
    [team]/page.tsx
  sponsoren/page.tsx
  downloads/page.tsx
  shop/page.tsx
  camp2026/page.tsx
  events/page.tsx
  club100/page.tsx

components/
  layout/
    Navbar.tsx
    Footer.tsx
    MobileMenu.tsx
  sections/
    Hero.tsx
    NewsGrid.tsx
    MatchSchedule.tsx
    SponsorGrid.tsx
    Club100.tsx
  ui/                 ← shadcn/ui components
  shared/
    MatchCard.tsx
    NewsCard.tsx
    TeamCard.tsx
    SponsorCard.tsx

lib/
  types.ts
  utils.ts
  data/               ← Static mock data (JSON)
```

### Phase 3 – Sections bauen (Reihenfolge)
1. `Navbar` + `Footer` (Framework zuerst)
2. `Hero` Section (erster Eindruck = wichtigster)
3. `NewsGrid` (Aktuelles)
4. `MatchSchedule` (Spielplan)
5. `SponsorGrid`
6. Weitere Sections nach Bedarf

### Phase 4 – Polish
- Framer Motion Animations nachrüsten
- Dark Mode Toggle (optional)
- Accessibility Audit
- Performance Check (Lighthouse > 90)

## Wichtige Vereins-Daten
- **Verein**: SC Fussach
- **Gegründet**: 1946
- **Ort**: Fussach, Vorarlberg, Österreich
- **Corporate Color**: Blau (#003087)
- **Mannschaften**: 1. Mannschaft, 1b, Nachwuchs, BSK, Altherren
- **Specials**: CAMP2026, EVENTS, Club100 (100 €/Jahr Förderung)
- **Social**: Facebook, Instagram
- **Original CMS**: TYPO3 (wird durch Next.js ersetzt)

## Mock Data Beispiele
```ts
// lib/data/matches.ts
export const matches = [
  {
    id: 1,
    date: "2026-04-20",
    home: "SC Fussach",
    away: "FC Hard",
    score: null, // null = geplant
    competition: "Vorarlbergliga",
    team: "1. Mannschaft"
  }
]

// lib/data/news.ts
export const news = [
  {
    id: 1,
    title: "Workshop mit Jannik Freestyle",
    date: "2026-04-10",
    category: "Jugend",
    excerpt: "...",
    slug: "workshop-jannik-freestyle"
  }
]
```

## Qualitätsziele
- Lighthouse Performance: > 90
- Lighthouse Accessibility: > 95
- Mobile First: perfekt auf iPhone SE (375px)
- Ladezeit: < 2s (First Contentful Paint)
