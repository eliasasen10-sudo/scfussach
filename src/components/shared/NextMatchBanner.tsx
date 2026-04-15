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

function TeamLogo({ src, name }: { src: string | null; name: string }) {
  const [err, setErr] = useState(false);
  if (!src || err) {
    return (
      <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xl shrink-0">
        {name[0]}
      </div>
    );
  }
  return (
    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 p-1.5 shadow-lg">
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
      className="bg-primary rounded-2xl px-6 py-6 mb-10 max-w-xs mx-auto sm:max-w-sm"
    >
      {/* Label */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-bold text-white/60 tracking-widest uppercase">
          Nächstes Spiel
        </span>
      </div>

      {/* Icons oben – vs in der Mitte */}
      <div className="flex items-center justify-center gap-4 mb-2">
        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center p-1.5 shadow-lg shrink-0">
          <Image
            src="/images/logos/sc fussach wappen.png"
            alt="SC Fussach"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        <span className="text-white/40 font-extrabold text-lg w-8 text-center shrink-0">vs</span>

        <TeamLogo src={opponentLogo} name={opponent} />
      </div>

      {/* Namen unter den Icons */}
      <div className="flex items-start justify-center gap-4 mb-5">
        <span className="text-white font-bold text-xs text-center leading-tight w-14">SC Fussach</span>
        <span className="w-8 shrink-0" />
        <span className="text-white font-bold text-xs text-center leading-tight w-14">{opponent}</span>
      </div>

      {/* Countdown ganz unten */}
      <div className="flex justify-center">
        <MatchCountdown dateStr={match.date} timeStr={match.time} variant="banner" />
      </div>
    </motion.div>
  );
}
