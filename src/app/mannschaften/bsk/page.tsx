"use client";

import Link from "next/link";
import { ArrowLeft, Trophy, MapPin, ExternalLink, Users, Calendar, Heart } from "lucide-react";

export default function BSKPage() {
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">Bodensee Kickers</h1>
          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-white/70">
            <span className="flex items-center gap-1.5"><Trophy size={13} /> Hobbyliga</span>
            <span className="flex items-center gap-1.5"><MapPin size={13} /> Sportanlage Müss, Fussach</span>
          </div>
        </div>
      </section>

      {/* Über BSK */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="container-site max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-amber-600 mb-3 text-center">Über uns</p>
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Fußball ohne Druck – einfach Spaß haben
          </h2>

          <div className="text-gray-600 leading-relaxed space-y-4 text-base mb-10 max-w-2xl mx-auto text-center">
            <p>
              Seit Anfang 2024 gibt es die <strong className="text-gray-900">Bodensee Kickers (BSK)</strong> – die Hobbymannschaft des SC Fussach. Gegründet für alle, die den Fußball lieben, aber ihn ohne den Druck des Ligabetriebs genießen wollen.
            </p>
            <p>
              Wöchentliches Training, rund <strong className="text-gray-900">8 bis 12 Spiele pro Jahr</strong> in der Hobbyliga und vor allem eines: jede Menge Spaß auf dem Platz. Egal ob jung oder alt, Anfänger oder erfahrener Kicker – bei den BSK ist jeder willkommen.
            </p>
          </div>

          {/* Karten */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              {
                icon: Heart,
                title: "Kein Leistungsdruck",
                text: "Hobby bedeutet bei uns wirklich Hobby – Spaß am Ball steht immer an erster Stelle.",
                color: "bg-amber-50 text-amber-600",
              },
              {
                icon: Users,
                title: "Jeder ist willkommen",
                text: "Egal welches Level – bei den Bodensee Kickers findet jeder seinen Platz.",
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: Calendar,
                title: "8–12 Spiele pro Jahr",
                text: "Überschaubarer Aufwand, maximale Freude – perfekt für alle mit wenig Zeit.",
                color: "bg-emerald-50 text-emerald-600",
              },
            ].map(({ icon: Icon, title, text, color }) => (
              <div key={title} className="bg-gray-50 rounded-2xl border border-gray-100 p-5 text-center">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3 ${color}`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-extrabold text-gray-900 text-sm mb-1.5">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* Fakten */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "2024", label: "Gegründet" },
              { value: "8–12", label: "Spiele/Jahr" },
              { value: "Hobbyliga", label: "Wettbewerb" },
            ].map((stat) => (
              <div key={stat.label} className="bg-amber-500 rounded-2xl p-5 text-center">
                <div className="text-2xl font-extrabold text-white">{stat.value}</div>
                <div className="text-xs text-white/70 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA zur BSK Website */}
      <section className="py-14 bg-gray-900">
        <div className="container-site max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Mehr über die Bodensee Kickers
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            Alle Infos, Spielberichte und News direkt auf der offiziellen Website der Bodensee Kickers.
          </p>
          <a
            href="https://www.bodensee-kickers.at/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-2xl transition-colors text-sm shadow-lg"
          >
            <ExternalLink size={16} />
            Hier geht's zu den Bodensee Kickers
          </a>
        </div>
      </section>

    </main>
  );
}
