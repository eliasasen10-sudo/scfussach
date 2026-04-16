"use client";

import Link from "next/link";
import { ArrowLeft, Trophy, MapPin, Mail, Heart, Users, Calendar } from "lucide-react";

export default function AltherrenPage() {
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">Altherren (AH)</h1>
          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-white/70">
            <span className="flex items-center gap-1.5"><Trophy size={13} /> Altherrenliga Vorarlberg</span>
            <span className="flex items-center gap-1.5"><MapPin size={13} /> Sportanlage Müss, Fussach</span>
          </div>
        </div>
      </section>

      {/* Über die Mannschaft */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="container-site max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3 text-center">Über uns</p>
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Fußball hört nie auf
          </h2>

          <div className="text-gray-600 leading-relaxed space-y-4 text-base mb-10 max-w-2xl mx-auto text-center">
            <p>
              Wer sagt, dass Fußball mit 32 vorbei ist? Bei den <strong className="text-gray-900">Altherren des SC Fussach</strong> definitiv nicht. Unsere AH-Mannschaft zeigt Woche für Woche, dass Leidenschaft für den Ball kein Ablaufdatum hat.
            </p>
            <p>
              Mit viel Erfahrung, echter Kameradschaft und einem gesunden Schuss Humor gehen wir in der <strong className="text-gray-900">Altherrenliga Vorarlberg</strong> an den Start. Im Vordergrund steht nicht nur das Ergebnis – sondern der Spaß am gemeinsamen Spiel und das Beisammensein danach.
            </p>
          </div>

          {/* Karten */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              {
                icon: Users,
                title: "Erfahrung & Qualität",
                text: "Jahrelange Spielerfahrung trifft auf echten Teamgeist – die AH ist eine Klasse für sich.",
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: Heart,
                title: "Spaß im Mittelpunkt",
                text: "Gewinnen ist schön, aber das Lachen nach dem Spiel ist mindestens genauso wichtig.",
                color: "bg-rose-50 text-rose-600",
              },
              {
                icon: Calendar,
                title: "Regelmäßiger Spielbetrieb",
                text: "Wöchentliches Training und Pflichtspiele in der Altherrenliga Vorarlberg das ganze Jahr über.",
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
              { value: "32+", label: "Mindestalter" },
              { value: "AH-Liga", label: "Wettbewerb" },
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

      {/* CTA Mitmachen */}
      <section className="py-14 bg-primary">
        <div className="container-site max-w-xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Du bist 32+ und willst wieder kicken?
          </h2>
          <p className="text-white/70 text-sm leading-relaxed mb-8">
            Wir freuen uns immer über neue Gesichter! Komm einfach zum nächsten Training vorbei oder schreib uns kurz eine Nachricht – kein langer Papierkram, einfach mitmachen.
          </p>
          <a
            href="mailto:office@scfussach.at?subject=Interesse Altherren SC Fussach"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:bg-gray-100 transition-colors text-sm shadow-lg"
          >
            <Mail size={16} />
            Jetzt melden
          </a>
          <p className="text-white/40 text-xs mt-4">office@scfussach.at</p>
        </div>
      </section>

    </main>
  );
}
