import type { NewsItem } from "@/lib/types";

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Jannik Freestyle kommt nach Fussach!",
    excerpt:
      "Deutschlands Fußball-Freestyler Nr. 1 ist am 7. Juli 2026 zu Gast! In einem 2,5-stündigen Workshop lernst du seine spektakulärsten Tricks – mit Show, Challenges, Autogrammen und Special Guest Lucas Kamps.",
    date: "2026-03-15",
    category: "Veranstaltung",
    slug: "workshop-jannik-freestyle",
    imageUrl: "/images/news/jannik.png",
    imagePosition: "50% 20%",
  },
  {
    id: 4,
    title: "CAMP2026 – Anmeldung jetzt möglich",
    excerpt:
      "Das Fussacher Fußballcamp geht in die nächste Runde! Vom 14. bis 18. Juli 2026 bieten wir ein professionelles Trainingsprogramm für alle Altersklassen an.",
    date: "2026-03-13",
    category: "Veranstaltung",
    slug: "camp2026-anmeldung",
    imageUrl: "/images/logos/camp-logo.png",
    imageContain: true,
  },
  {
    id: 3,
    title: "Club100 – Jetzt Fördermitglied werden!",
    excerpt:
      "Mit nur 100 Euro im Jahr wirst du Teil unseres exklusiven Förderprogramms. Gutscheine, Tombola-Lose und Zugang zu Exklusiv-Events warten auf dich.",
    date: "2026-03-11",
    category: "Vereinsnews",
    slug: "club100-jetzt-einsteigen",
    href: "/club100",
    imageUrl: "/images/DavidClub100.png",
    imagePosition: "50% 30%",
  },

];

export const featuredNews = newsItems.find((n) => n.featured) ?? newsItems[0];
export const latestNews = newsItems.slice(0, 4);
