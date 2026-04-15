"use client";

import Link from "next/link";
import { ArrowLeft, Trophy, MapPin, ExternalLink } from "lucide-react";

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

      {/* Inhalt */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-xl mx-auto text-center">
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Die Bodensee Kickers sind die Hobbymannschaft des SC Fussach – seit 2024 für alle, die einfach gemeinsam kicken wollen. Wöchentliches Training und rund 8 bis 12 Spiele pro Jahr in der Hobbyliga.
          </p>
          <a
            href="https://www.bodensee-kickers.at/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-mid transition-colors text-sm shadow-lg"
          >
            <ExternalLink size={16} />
            Hier geht's zu den Bodensee Kickers
          </a>
        </div>
      </section>

    </main>
  );
}
