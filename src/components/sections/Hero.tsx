"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Calendar, ChevronDown, Clock, MapPin } from "lucide-react";
import MatchCountdown from "@/components/shared/MatchCountdown";

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const, delay },
  };
}

interface NextMatch {
  date: string;
  time?: string;
  home: string;
  away: string;
  homeLogo: string | null;
  awayLogo: string | null;
}

function NextMatchBar() {
  const [match, setMatch] = useState<NextMatch | null>(null);

  useEffect(() => {
    fetch("/api/fussach")
      .then(r => r.json())
      .then(d => {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className="flex flex-col sm:flex-row items-center gap-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 max-w-2xl w-full mx-auto"
    >
      {/* Teams */}
      <div className="flex items-center gap-3 flex-1 min-w-0 justify-center sm:justify-start">
        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center p-0.5 shrink-0">
          <Image src="/images/logos/sc fussach wappen.png" alt="SC Fussach" width={32} height={32} className="object-contain" />
        </div>
        <span className="text-white font-bold text-sm">SC Fussach</span>
        <span className="text-white/40 font-bold text-xs shrink-0">vs</span>
        {opponentLogo ? (
          <Image src={opponentLogo} alt={opponent} width={28} height={28} className="object-contain shrink-0" unoptimized />
        ) : (
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold shrink-0">{opponent[0]}</div>
        )}
        <span className="text-white font-bold text-sm truncate">{opponent}</span>
      </div>

      {/* Divider */}
      <div className="hidden sm:block w-px h-10 bg-white/10" />

      {/* Date + Countdown */}
      <div className="flex flex-col items-center gap-1 shrink-0">
        <div className="flex items-center gap-3 text-white/50 text-xs">
          <span className="flex items-center gap-1"><Calendar size={10} />{match.date}</span>
          {match.time && <span className="flex items-center gap-1"><Clock size={10} />{match.time} Uhr</span>}
        </div>
        <MatchCountdown dateStr={match.date} timeStr={match.time} variant="banner" />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-primary-dark">

      {/* Mannschaftsfoto als Hintergrund */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/Players/Mannschaftsfoto2026.jpeg"
          alt=""
          fill
          priority
          unoptimized
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-primary-dark/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-primary-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/50 via-transparent to-primary-dark/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 items-center justify-center container-site text-center py-32">

        {/* Wappen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6"
        >
          <div className="mx-auto w-28 h-28 rounded-full bg-white flex items-center justify-center p-2 shadow-2xl">
            <Image
              src="/images/logos/sc fussach wappen.png"
              alt="SC Fussach Wappen"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          {...fadeUp(0.05)}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Saison 2025/2026 – Vorarlbergliga
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.0] tracking-tight mb-6"
        >
          SC Fussach
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Leidenschaft, Teamgeist und Heimatliebe seit 1946.
          <br className="hidden sm:block" />
          Willkommen beim Sportclub aus dem Vorarlberger Rheintal.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            href="/aktuelles"
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white text-primary font-semibold rounded-xl hover:bg-primary-light transition-all duration-200 text-sm"
          >
            Aktuelle News
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            href="/spielplan"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 text-sm backdrop-blur-sm"
          >
            <Calendar size={16} />
            Spielplan
          </Link>
        </motion.div>

        {/* Next Match Countdown */}
        <NextMatchBar />

        {/* Stats */}
        <motion.div
          {...fadeUp(0.5)}
          className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto"
        >
          {[
            { value: "1946", label: "Gegründet" },
            { value: "5+", label: "Mannschaften" },
            { value: "200+", label: "Mitglieder" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
