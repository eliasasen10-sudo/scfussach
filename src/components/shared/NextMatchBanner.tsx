"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
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
      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center shrink-0 text-white font-bold text-2xl">
        {name[0]}
      </div>
    );
  }
  return (
    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 p-2 shadow-lg">
      <Image src={src} alt={name} width={48} height={48} className="object-contain" onError={() => setErr(true)} unoptimized />
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-primary rounded-2xl px-8 py-6 mb-10 w-full"
    >
      {/* Label */}
      <div className="flex items-center justify-center gap-2 mb-5">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-bold text-white/50 tracking-widest uppercase">
          Nächstes Spiel
        </span>
      </div>

      {/* Teams + VS */}
      <div className="flex items-center justify-between gap-4 mb-5">

        {/* SC Fussach */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center p-2 shadow-lg shrink-0">
            <Image
              src="/images/logos/sc fussach wappen.png"
              alt="SC Fussach"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <span className="text-white font-bold text-sm text-center leading-tight">SC Fussach</span>
        </div>

        {/* VS */}
        <div className="flex flex-col items-center gap-1 shrink-0">
          <span className="text-white/25 font-extrabold text-2xl">vs</span>
        </div>

        {/* Gegner */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <TeamLogo src={opponentLogo} name={opponent} />
          <span className="text-white font-bold text-sm text-center leading-tight">{opponent}</span>
        </div>

      </div>

      {/* Trennlinie */}
      <div className="w-full h-px bg-white/10 mb-4" />

      {/* Datum + Countdown */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
        <div className="flex items-center gap-3 text-white/50 text-xs">
          <span className="flex items-center gap-1.5"><Calendar size={12} />{match.date}</span>
          {match.time && <span className="flex items-center gap-1.5"><Clock size={12} />{match.time} Uhr</span>}
        </div>
        <div className="hidden sm:block w-px h-4 bg-white/10" />
        <MatchCountdown dateStr={match.date} timeStr={match.time} variant="banner" />
      </div>
    </motion.div>
  );
}
