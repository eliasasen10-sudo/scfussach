"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Clock } from "lucide-react";
import MatchCountdown from "@/components/shared/MatchCountdown";
import NewsCard from "@/components/shared/NewsCard";
import { newsItems } from "@/lib/data/news";
import { useEffect, useState } from "react";

interface Match {
  date: string;
  time?: string;
  home: string;
  away: string;
  homeLogo: string | null;
  awayLogo: string | null;
  matchUrl?: string | null;
}


function TeamLogo({ src, name }: { src: string | null; name: string }) {
  const [err, setErr] = useState(false);
  if (!src || err) {
    return (
      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm shrink-0">
        {name[0]}
      </div>
    );
  }
  return (
    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 p-0.5">
      <Image
        src={src}
        alt={name}
        width={36}
        height={36}
        className="object-contain"
        onError={() => setErr(true)}
        unoptimized
      />
    </div>
  );
}

function NextMatchCard({ match }: { match: Match }) {
  const isFussachHome = match.home.includes("Fussach");
  const opponent = isFussachHome ? match.away : match.home;
  const opponentLogo = isFussachHome ? match.awayLogo : match.homeLogo;
  const isHome = isFussachHome;

  return (
    <motion.a
      href={match.matchUrl ?? "https://ticker.ligaportal.at/mannschaft/2136/sc-fussach/spielplan"}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="group block bg-primary rounded-2xl p-5 hover:bg-primary-mid transition-colors duration-200"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-bold text-white/70 tracking-widest uppercase">
          Nächstes Spiel
        </span>
      </div>

      {/* Teams mit Logos */}
      <div className="flex items-center justify-between gap-2 mb-4">
        {/* SC Fussach */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-0.5 shrink-0">
            <Image
              src="/images/logos/sc fussach wappen.png"
              alt="SC Fussach"
              width={36}
              height={36}
              className="object-contain"
            />
          </div>
          <span className="text-xs font-bold text-white text-center leading-tight">SC Fussach</span>
        </div>

        {/* VS */}
        <div className="shrink-0 px-2 py-1 bg-white/10 rounded-lg">
          <span className="text-white/80 font-bold text-xs">VS</span>
        </div>

        {/* Gegner */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <TeamLogo src={opponentLogo} name={opponent} />
          <span className="text-xs font-bold text-white text-center leading-tight">{opponent}</span>
        </div>
      </div>

      {/* Countdown */}
      <div className="mb-2">
        <MatchCountdown dateStr={match.date} timeStr={match.time} variant="card" />
      </div>

      {/* Infos */}
      <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-white/60 border-t border-white/10 pt-3">
        <div className="flex items-center gap-1">
          <Calendar size={11} />
          <span>{match.date}</span>
        </div>
        {match.time && (
          <div className="flex items-center gap-1">
            <Clock size={11} />
            <span>{match.time}</span>
          </div>
        )}
        <div className="flex items-center gap-1">
          <MapPin size={11} />
          <span>{isHome ? "Heimspiel" : "Auswärtsspiel"}</span>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-white/50 group-hover:text-white/80 transition-colors">
        Zum Spielplan <ArrowRight size={11} />
      </div>
    </motion.a>
  );
}

export default function NewsGrid() {
  const featured = newsItems.find((n) => n.featured) ?? newsItems[0];
  const rest = newsItems.filter((n) => n.id !== featured.id).slice(0, 2);

  const [nextMatch, setNextMatch] = useState<Match | null>(null);

  useEffect(() => {
    fetch("/api/fussach")
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(d => {
        const first = d?.erste?.nextFixtures?.[0];
        if (first) setNextMatch(first);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="section-padding bg-gray-50" id="aktuelles">
      <div className="container-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-10 gap-4"
        >
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
              Neuigkeiten
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Aktuelles vom
              <br className="hidden sm:block" /> SC Fussach
            </h2>
          </div>
          <Link
            href="/aktuelles"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200 shrink-0"
          >
            Alle News
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Grid: Featured large + side column */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured */}
          <div className="lg:col-span-2">
            <NewsCard item={featured} featured index={0} />
          </div>

          {/* Side: nächstes Spiel + News */}
          <div className="flex flex-col gap-4">
            {nextMatch && <NextMatchCard match={nextMatch} />}
            {rest.map((item, i) => (
              <NewsCard key={item.id} item={item} index={i + 1} />
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/aktuelles"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-mid transition-colors duration-200"
          >
            Alle News ansehen
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
