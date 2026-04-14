import type { NewsItem } from "@/lib/types";

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Jannik Freestyle kommt nach Fussach!",
    excerpt:
      "Deutschlands Fußball-Freestyler Nr. 1 ist am 7. Juli 2026 zu Gast! In einem 2,5-stündigen Workshop lernst du seine spektakulärsten Tricks – mit Show, Challenges, Autogrammen und Special Guest Lucas Kamps.",
    date: "2026-07-07",
    category: "Veranstaltung",
    slug: "workshop-jannik-freestyle",
    featured: true,
    imageUrl: "/images/news/jannik.png",
  },
  {
    id: 2,
    title: "Heimsieg gegen FC Lustenau 07 – Dominante Leistung",
    excerpt:
      "Die 1. Mannschaft des SC Fussach gewann ihr Heimspiel gegen FC Lustenau 07 verdient mit 2:1. Beide Treffer fielen in der zweiten Halbzeit.",
    date: "2026-04-12",
    category: "Spielbericht",
    slug: "heimsieg-lustenau-07",
  },
  {
    id: 3,
    title: "Club100 – Jetzt Fördermitglied werden!",
    excerpt:
      "Mit nur 100 Euro im Jahr wirst du Teil unseres exklusiven Förderprogramms. Gutscheine, Tombola-Lose und Zugang zu Exklusiv-Events warten auf dich.",
    date: "2026-04-08",
    category: "Vereinsnews",
    slug: "club100-jetzt-einsteigen",
  },
  {
    id: 4,
    title: "CAMP2026 – Anmeldung jetzt möglich",
    excerpt:
      "Das Fussacher Fußballcamp geht in die nächste Runde! Vom 14. bis 18. Juli 2026 bieten wir ein professionelles Trainingsprogramm für alle Altersklassen an.",
    date: "2026-04-05",
    category: "Veranstaltung",
    slug: "camp2026-anmeldung",
    imageUrl: "/images/logos/camp-logo.png",
  },
  {
    id: 5,
    title: "Spielplan Rückrunde 2025/2026 veröffentlicht",
    excerpt:
      "Der vollständige Spielplan für die Rückrunde ist ab sofort verfügbar. Alle Termine im Überblick – jetzt downloaden und eintragen.",
    date: "2026-03-25",
    category: "Vereinsnews",
    slug: "spielplan-rueckrunde-2025-2026",
  },
  {
    id: 6,
    title: "Unentschieden in Bregenz – Punkt auswärts geholt",
    excerpt:
      "Mit einem 0:0 beim FC Bregenz holt die 1. Mannschaft einen wichtigen Auswärtspunkt. Keeper Michael Mayr hielt mit starken Paraden den Kasten sauber.",
    date: "2026-04-05",
    category: "Spielbericht",
    slug: "unentschieden-bregenz",
  },
];

export const featuredNews = newsItems.find((n) => n.featured) ?? newsItems[0];
export const latestNews = newsItems.slice(0, 4);
