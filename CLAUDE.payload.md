# CLAUDE.payload.md – Payload CMS + Next.js Guide
# SC Fussach Website – Payload CMS Integration (geplant)

Dieses Dokument gibt Claude Code genaue Anweisungen für die Payload CMS Integration.
**Lies diese Datei immer zuerst und halte dich strikt daran.**

## Project Overview
Payload CMS v3 wird in die bestehende SC Fussach Next.js Website integriert.
Ziel: Admin-Panel für News, Spieler, Sponsoren, Teams – kein hardcoded Content mehr.
Payload läuft als Fullstack-Framework im selben Next.js Projekt (App Router).

## Tech Stack (genaue Versionen – immer einhalten)
- **Next.js**: 15.x (App Router) – bereits vorhanden
- **Payload CMS**: 3.x (aktuellste stabile Version)
- **TypeScript**: strict mode – bereits vorhanden
- **Database**: PostgreSQL via Neon.tech (kostenlos)
- **Styling**: Tailwind CSS v4 – bereits vorhanden
- **Deployment**: Vercel – bereits vorhanden

## Collections die wir brauchen
- `News` – Artikel, Datum, Kategorie, Bild, Slug
- `Players` – Name, Position, Bild, Mannschaft
- `Teams` – Name, Liga, Trainer, Beschreibung, Bild
- `Sponsors` – Name, Logo, URL, Kategorie
- `Pages` – statische Seiten (optional)

## Wichtige Coding Rules (MUST FOLLOW)

### Payload Patterns (aus offizieller CLAUDE.md + SKILL.md)
- **Prefer single object parameters** für Funktionen
- **Prefer types over interfaces** (außer beim Extending von Payload-Typen)
- **Prefer functions over classes**
- **Pure functions** wo möglich
- **Top-down organization**: Hilfsfunktionen zuerst, dann Hauptfunktion
- Collections immer in `src/collections/`
- Globals immer in `src/globals/`
- Blocks immer in `src/blocks/`
- Fields immer mit `type: 'text'` etc. (keine v2-Patterns!)
- Access Control **immer** explizit definieren (auch `() => true`)
- Hooks mit klarer Typisierung: `beforeChange`, `afterChange`, `beforeRead`

### Datei- & Ordnerstruktur
```
/src
  /collections      ← News.ts, Players.ts, Teams.ts, Sponsors.ts
  /globals          ← Header.ts, Footer.ts, Settings.ts
  /blocks           ← wiederverwendbare Blocks
  /components       ← React Components
  /app
    /(payload)      ← Payload Admin Routes
    /api            ← custom Endpoints
```

### Namenskonventionen
- Collection-Dateien: Plural (News.ts, Players.ts)
- Block-Komponenten: PascalCase + "Block" (HeroBlock.tsx)
- Field-Namen: camelCase
- Slugs: mit `slugField()` automatisch generieren

### Anti-Drift Regeln (sehr wichtig!)
- **Nichts hinzufügen** was nicht angefordert wurde (keine extra Fields, Icons, Debug-Logs)
- Immer zuerst **Plan Mode** – Plan bestätigen lassen
- Bevor Code geändert wird: Vorschau zeigen
- Nach jeder Änderung: `npm run build` + TypeScript-Check
- Feature ist erst fertig wenn `npm run build` fehlerfrei läuft

### Referenzquellen (immer nutzen!)
1. Offizielle Payload CLAUDE.md: https://github.com/payloadcms/payload/blob/main/CLAUDE.md
2. Offizielle SKILL.md: https://github.com/payloadcms/payload/blob/main/tools/claude-plugin/skills/payload/SKILL.md
3. Payload Docs: https://payloadcms.com/docs
4. Offizielle Beispiele: https://github.com/payloadcms/payload/tree/main/examples
5. Payload Web Demo (seeded) als Code-Referenz nutzen

### Workflow für neue Features
1. Neuen Branch anlegen
2. Plan Mode – Plan bestätigen lassen
3. Statische Komponenten zuerst bauen + reviewen
4. Dann Payload Collections / Blocks / Hooks erstellen
5. `npm run build` prüfen
6. Erst dann commit & push

### MCP & Skills
- Payload MCP Plugin: `@payloadcms/plugin-mcp`
- MCP hinzufügen: `claude mcp add --transport http Payload http://127.0.0.1:3000`
- Bei Payload-Fragen: aktuelle v3 Docs + SKILL.md nutzen

### TypeScript & Build
- `strict: true` – immer
- Keine `any`-Typen (außer `PayloadRequest`)
- Nach jeder Änderung: `tsc --noEmit` oder `npm run build`

### Verboten
- Alte Payload v2 Syntax
- Unnötige Plugins ohne Rückfrage
- Hardcoded Secrets oder API-Keys
- Console.logs in Produktionscode

## Zusammenfassung
Du bist Experte für Payload CMS v3 + Next.js 15 + SC Fussach.
Plane zuerst, zeige Vorschauen, prüfe Builds, füge nichts Extra hinzu.
Wenn unsicher → fragen.
