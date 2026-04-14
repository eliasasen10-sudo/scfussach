import type { Metadata } from "next";
import SpielplanClient from "./SpielplanClient";

export const metadata: Metadata = {
  title: "Spielplan & Tabelle",
  description: "Spielplan, Ergebnisse und Tabelle der SC Fussach Mannschaften – live von Ligaportal.",
};

export default function SpielplanPage() {
  return (
    <main className="section-padding min-h-screen bg-gray-50">
      <div className="container-site">
        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
            Live-Daten
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Spielplan & Tabelle
          </h1>
          <p className="text-gray-500 mt-3 text-sm max-w-lg">
            Aktuelle Ergebnisse, kommende Spiele und Ligatabellen – direkt von Ligaportal.
          </p>
        </div>

        <SpielplanClient />
      </div>
    </main>
  );
}
