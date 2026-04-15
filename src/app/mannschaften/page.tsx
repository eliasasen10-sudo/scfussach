import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Mannschaften",
  description: "Alle Mannschaften des SC Fussach – von der 1. Mannschaft bis zum Nachwuchs.",
};

const teams: {
  id: string;
  name: string;
  league: string;
  trainer: string;
  description: string;
  color: string;
  externalUrl?: string;
}[] = [
  {
    id: "erste",
    name: "1. Mannschaft",
    league: "Vorarlbergliga",
    trainer: "Bernhard Erkinger",
    description:
      "Die erste Mannschaft des SC Fussach spielt in der Vorarlbergliga und repräsentiert den Verein auf höchstem lokalem Niveau.",
    color: "bg-primary",
  },
  {
    id: "erste-b",
    name: "1b Mannschaft",
    league: "Bezirksliga",
    trainer: "Trainer N.N.",
    description:
      "Die 1b Mannschaft bildet das Rückgrat des Vereins und bietet Nachwuchsspielern die Chance, sich zu beweisen.",
    color: "bg-primary-mid",
  },
  {
    id: "nachwuchs",
    name: "Nachwuchs",
    league: "Vorarlberger Nachwuchsliga",
    trainer: "ÖFB-ausgebildete Trainer",
    description:
      "Ca. 50 Kinder trainieren mehrmals die Woche mit Begeisterung. Im Mittelpunkt stehen Spiel, Spaß und viele Ballkontakte – in einem Umfeld das Respekt, Teamgeist und Fairness vermittelt.",
    color: "bg-emerald-600",
  },
  {
    id: "bsk",
    name: "Bodensee Kickers (BSK)",
    league: "Hobbyliga",
    trainer: "Tobias Battisti",
    description:
      "Seit Anfang 2024 decken die Bodensee Kickers den Hobbybereich ab. Wöchentliches Training und ca. 8–12 Spiele pro Jahr in der Hobbyliga – für alle, die Fußball mit weniger Aufwand genießen wollen.",
    color: "bg-amber-600",
  },
  {
    id: "altherren",
    name: "Altherren (AH)",
    league: "Altherrenliga Vorarlberg",
    trainer: "N.N.",
    description:
      "Für alle, die älter als 32 sind und den Fußball nicht aufgeben wollen – die Altherrenmannschaft mit viel Erfahrung und Spaß.",
    color: "bg-gray-600",
  },
];

export default function MannschaftenPage() {
  return (
    <main className="min-h-screen section-padding">
      <div className="container-site">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
            Teams
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Unsere Mannschaften
          </h1>
          <p className="text-gray-500 mt-4 max-w-lg text-sm">
            Vom Nachwuchs bis zu den Altherren – beim SC Fussach findet jeder
            sein Team.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <Link
              key={team.id}
              href={team.externalUrl ?? `/mannschaften/${team.id}`}
              target={team.externalUrl ? "_blank" : undefined}
              rel={team.externalUrl ? "noopener noreferrer" : undefined}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Color bar */}
              <div className={`${team.color} h-2`} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${team.color} flex items-center justify-center`}
                  >
                    <Users size={20} className="text-white" />
                  </div>
                  <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-lg">
                    {team.league}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {team.name}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                  {team.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{team.trainer}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Mehr
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
