"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Trophy, MapPin } from "lucide-react";

export default function ErsteBMannschaftPage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary/70 to-primary/50" />
        <div className="absolute inset-0 flex flex-col justify-end container-site pb-10">
          <Link
            href="/mannschaften"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-4 transition-colors w-fit"
          >
            <ArrowLeft size={14} />
            Alle Mannschaften
          </Link>
          <span className="text-xs font-bold tracking-widest uppercase text-white/60 mb-2">SC Fussach</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">1b Mannschaft</h1>
          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-white/70">
            <span className="flex items-center gap-1.5"><Trophy size={13} /> 4. Landesklasse</span>
            <span className="flex items-center gap-1.5"><MapPin size={13} /> Sportanlage Müss, Fussach</span>
          </div>
        </div>
      </section>

      {/* Mannschaftsfoto */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-site">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-8 text-center">
            Saison 2025/2026
          </p>
          <div className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/Mannschaftsfoto1b.jpg"
              alt="SC Fussach 1b Mannschaft 2025/2026"
              width={800}
              height={600}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Über die Mannschaft */}
      <section className="section-padding bg-gray-50">
        <div className="container-site max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3 text-center">
            Über uns
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Die 1b Mannschaft
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              {
                title: "Bindeglied im Verein",
                text: "Die 1b Mannschaft ist das wichtige Bindeglied zwischen Nachwuchs und 1. Mannschaft. Hier sammeln junge Talente ihre ersten Erfahrungen im Erwachsenenfußball und entwickeln sich Schritt für Schritt weiter.",
              },
              {
                title: "Förderung & Entwicklung",
                text: "Spieler aus dem Nachwuchs bekommen hier die Möglichkeit, sich in einem kompetitiven Umfeld zu beweisen und für höhere Aufgaben zu empfehlen. Gleichzeitig erfahrene Spieler geben ihr Wissen an die Jüngeren weiter.",
              },
              {
                title: "Teamgeist & Zusammenhalt",
                text: "Was die 1b auszeichnet, ist der starke Zusammenhalt innerhalb der Gruppe. Egal ob auf dem Platz oder daneben – hier wird Fußball mit echter Leidenschaft und Freude gelebt.",
              },
              {
                title: "Wettbewerb",
                text: "In der 4. Landesklasse messen sich die Spieler wöchentlich gegen starke regionale Mannschaften. Jedes Spiel ist eine Chance, sich zu zeigen und gemeinsam als Team zu wachsen.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-extrabold text-gray-900 text-base mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Fakten */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "4. LK", label: "Liga" },
              { value: "2025/26", label: "Saison" },
              { value: "Müss", label: "Heimplatz" },
            ].map((stat) => (
              <div key={stat.label} className="bg-primary rounded-2xl p-5 text-center">
                <div className="text-2xl font-extrabold text-white">{stat.value}</div>
                <div className="text-xs text-white/60 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
