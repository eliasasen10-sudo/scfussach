"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import MatchCountdown from "@/components/shared/MatchCountdown";

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
      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-base shrink-0">
        {name[0]}
      </div>
    );
  }
  return (
    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 p-1">
      <Image src={src} alt={name} width={40} height={40} className="object-contain" onError={() => setErr(true)} unoptimized />
    </div>
  );
}

export default function NextMatchBanner() {
  const [match, setMatch] = useState<Match | null>(null);

  useEffect(() => {
    fetch("/api/fussach")
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(d => {
        const first = d?.erste?.nextFixtures?.[0];
        if (first) setMatch(first);
      })
      .catch(() => {});
  }, []);

  if (!match) return null;

  const isFussachHome = match.home.includes("Fussach");
  const opponent = isFussachHome ? match.away : match.home;
  const opponentLogo = isFussachHome ? match.awayLogo : match.homeLogo;
  const isHome = isFussachHome;

  return (
    <motion.a
      href={match.matchUrl ?? "https://ticker.ligaportal.at/mannschaft/2136/sc-fussach/spielplan"}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group flex items-center gap-6 bg-primary rounded-2xl px-6 py-5 hover:bg-primary-mid transition-colors duration-200 mb-10"
    >
      {/* Label */}
      <div className="hidden sm:flex items-center gap-2 shrink-0">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-bold text-white/70 tracking-widest uppercase whitespace-nowrap">
          Nächstes Spiel
        </span>
      </div>

      <div className="w-px h-10 bg-white/10 hidden sm:block shrink-0" />

      {/* Teams */}
      <div className="flex items-center gap-4 flex-1 min-w-0">
        {/* SC Fussach */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-0.5 shrink-0">
            <Image src="/images/logos/sc fussach wappen.png" alt="SC Fussach" width={36} height={36} className="object-contain" />
          </div>
          <span className="text-sm font-extrabold text-white hidden md:block">SC Fussach</span>
        </div>

        <span className="text-white/40 font-bold text-sm shrink-0">vs</span>

        {/* Gegner */}
        <div className="flex items-center gap-2.5">
          <TeamLogo src={opponentLogo} name={opponent} />
          <span className="text-sm font-extrabold text-white truncate">{opponent}</span>
        </div>
      </div>

      {/* Infos */}
      <div className="hidden lg:flex items-center gap-4 text-xs text-white/60 shrink-0">
        <div className="flex items-center gap-1.5">
          <Calendar size={12} />
          <span>{match.date}</span>
        </div>
        {match.time && (
          <div className="flex items-center gap-1.5">
            <Clock size={12} />
            <span>{match.time}</span>
          </div>
        )}
        <div className="flex items-center gap-1.5">
          <MapPin size={12} />
          <span>{isHome ? "Heimspiel" : "Auswärtsspiel"}</span>
        </div>
      </div>

      <MatchCountdown dateStr={match.date} timeStr={match.time} variant="banner" />

      <ArrowRight size={16} className="text-white/40 group-hover:text-white/80 transition-colors shrink-0 hidden sm:block" />
    </motion.a>
  );
}
