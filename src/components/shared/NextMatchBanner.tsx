"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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

function TeamLogo({ src, name, size = 14 }: { src: string | null; name: string; size?: number }) {
  const [err, setErr] = useState(false);
  const cls = `rounded-full bg-white flex items-center justify-center shrink-0 p-1.5 shadow-lg`;
  const style = { width: size * 4, height: size * 4 };
  if (!src || err) {
    return (
      <div className="rounded-full bg-white/20 flex items-center justify-center shrink-0 text-white font-bold text-xl" style={style}>
        {name[0]}
      </div>
    );
  }
  return (
    <div className={cls} style={style}>
      <Image src={src} alt={name} width={size * 3} height={size * 3} className="object-contain" onError={() => setErr(true)} unoptimized />
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
      className="bg-primary rounded-2xl px-6 py-5 mb-10 w-full"
    >
      {/* Label */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-bold text-white/60 tracking-widest uppercase">
          Nächstes Spiel
        </span>
      </div>

      {/* Desktop: horizontal – Mobile: vertikal */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">

        {/* SC Fussach */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center p-1.5 shadow-lg shrink-0">
            <Image
              src="/images/logos/sc fussach wappen.png"
              alt="SC Fussach"
              width={44}
              height={44}
              className="object-contain"
            />
          </div>
          <span className="text-white font-bold text-sm text-center sm:text-left">SC Fussach</span>
        </div>

        {/* VS + Countdown */}
        <div className="flex flex-col items-center gap-2 shrink-0">
          <span className="text-white/30 font-extrabold text-xl">vs</span>
          <MatchCountdown dateStr={match.date} timeStr={match.time} variant="banner" />
        </div>

        {/* Gegner */}
        <div className="flex flex-col sm:flex-row-reverse items-center gap-2 sm:gap-3">
          <TeamLogo src={opponentLogo} name={opponent} size={14} />
          <span className="text-white font-bold text-sm text-center sm:text-right">{opponent}</span>
        </div>

      </div>
    </motion.div>
  );
}
