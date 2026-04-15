"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import MatchCountdown from "@/components/shared/MatchCountdown";

interface NextMatch {
  date: string;
  time?: string;
  home: string;
  away: string;
  homeLogo: string | null;
  awayLogo: string | null;
  venue?: string;
}

export default function NextMatchSection() {
  const [match, setMatch] = useState<NextMatch | null>(null);

  useEffect(() => {
    fetch("/api/fussach")
      .then((r) => r.json())
      .then((d) => {
        const next = d?.erste?.nextFixtures?.[0];
        if (next) setMatch(next);
      })
      .catch(() => {});
  }, []);

  if (!match) return null;

  const isFussachHome = match.home.includes("Fussach");
  const opponent = isFussachHome ? match.away : match.home;
  const opponentLogo = isFussachHome ? match.awayLogo : match.homeLogo;

  return (
    <section className="bg-primary-dark py-6 border-b border-white/5">
      <div className="container-site">
        <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-4 text-center">
          Nächstes Spiel
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl px-6 py-5 max-w-2xl mx-auto">
          {/* Teams */}
          <div className="flex items-center gap-4 flex-1 justify-center">
            {/* SC Fussach */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-1 shadow-lg">
                <Image
                  src="/images/logos/sc fussach wappen.png"
                  alt="SC Fussach"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <span className="text-white font-bold text-xs text-center leading-tight max-w-[80px]">
                SC Fussach
              </span>
            </div>

            {/* VS */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-white/30 font-extrabold text-lg">vs</span>
              <div className="flex items-center gap-2 text-white/40 text-[10px]">
                <Calendar size={10} />
                <span>{match.date}</span>
                {match.time && (
                  <>
                    <Clock size={10} />
                    <span>{match.time}</span>
                  </>
                )}
              </div>
            </div>

            {/* Opponent */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                {opponentLogo ? (
                  <Image
                    src={opponentLogo}
                    alt={opponent}
                    width={44}
                    height={44}
                    className="object-contain"
                    unoptimized
                  />
                ) : (
                  <span className="text-white font-extrabold text-lg">
                    {opponent[0]}
                  </span>
                )}
              </div>
              <span className="text-white font-bold text-xs text-center leading-tight max-w-[80px]">
                {opponent}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-16 bg-white/10" />

          {/* Countdown + venue */}
          <div className="flex flex-col items-center gap-2 shrink-0">
            <MatchCountdown dateStr={match.date} timeStr={match.time} variant="banner" />
            {match.venue && (
              <span className="flex items-center gap-1 text-white/30 text-[10px]">
                <MapPin size={10} />
                {match.venue}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
