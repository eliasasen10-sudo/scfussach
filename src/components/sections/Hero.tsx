"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, ChevronDown, Clock } from "lucide-react";
import { useEffect, useState } from "react";
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

function NextMatchBanner() {
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
    <motion.div
      {...fadeUp(0.25)}
      className="w-full max-w-xs mx-auto mb-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-5"
    >
      {/* Label */}
      <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 text-center mb-4">
        Nächstes Spiel
      </p>

      {/* Icons oben – vs in der Mitte */}
      <div className="flex items-center justify-center gap-4 mb-2">
        {/* SC Fussach Logo */}
        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center p-1.5 shadow-lg shrink-0">
          <Image
            src="/images/logos/sc fussach wappen.png"
            alt="SC Fussach"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        {/* VS */}
        <span className="text-white/40 font-extrabold text-lg w-8 text-center shrink-0">vs</span>

        {/* Gegner Logo */}
        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0">
          {opponentLogo ? (
            <Image
              src={opponentLogo}
              alt={opponent}
              width={48}
              height={48}
              className="object-contain rounded-full"
              unoptimized
            />
          ) : (
            <span className="text-white font-extrabold text-2xl">
              {opponent[0]}
            </span>
          )}
        </div>
      </div>

      {/* Namen unter den Icons */}
      <div className="flex items-start justify-center gap-4 mb-4">
        <span className="text-white font-bold text-xs text-center leading-tight w-14">SC Fussach</span>
        <span className="w-8 shrink-0" />
        <span className="text-white font-bold text-xs text-center leading-tight w-14">{opponent}</span>
      </div>

      {/* Datum & Uhrzeit */}
      <div className="flex items-center justify-center gap-3 mb-3">
        <span className="flex items-center gap-1 text-white/50 text-xs">
          <Calendar size={11} />
          {match.date}
        </span>
        {match.time && (
          <span className="flex items-center gap-1 text-white/50 text-xs">
            <Clock size={11} />
            {match.time} Uhr
          </span>
        )}
      </div>

      {/* Countdown ganz unten */}
      <div className="flex justify-center">
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
        <div className="absolute inset-0 bg-primary-dark/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-primary-dark/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/50 via-transparent to-primary-dark/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 items-center justify-center container-site text-center py-20 sm:py-28">

        {/* Wappen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-4 sm:mb-6"
        >
          <div className="mx-auto w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-white flex items-center justify-center p-2 shadow-2xl">
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
          className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs sm:text-sm font-medium mb-4 sm:mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Saison 2025/2026 – Vorarlbergliga
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.0] tracking-tight mb-3 sm:mb-6"
        >
          SC Fussach
        </motion.h1>

        {/* Beschreibung – auf Handy versteckt */}
        <motion.p
          {...fadeUp(0.2)}
          className="hidden sm:block text-lg sm:text-xl text-white/70 max-w-xl mx-auto mb-8 leading-relaxed"
        >
          Leidenschaft, Teamgeist und Heimatliebe seit 1946.
          <br />
          Willkommen beim Sportclub aus dem Vorarlberger Rheintal.
        </motion.p>

        {/* Nächstes Spiel – über den Buttons */}
        <NextMatchBanner />

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.35)}
          className="flex flex-row items-center justify-center gap-3 mb-6 sm:mb-10"
        >
          <Link
            href="/aktuelles"
            className="group inline-flex items-center gap-1.5 px-4 py-3 sm:px-6 sm:py-3.5 bg-white text-primary font-semibold rounded-xl hover:bg-primary-light transition-all duration-200 text-xs sm:text-sm"
          >
            Aktuelle News
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            href="/spielplan"
            className="inline-flex items-center gap-1.5 px-4 py-3 sm:px-6 sm:py-3.5 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 text-xs sm:text-sm backdrop-blur-sm"
          >
            <Calendar size={14} />
            Spielplan
          </Link>
        </motion.div>

        {/* Stats – auf Handy versteckt */}
        <motion.div
          {...fadeUp(0.45)}
          className="hidden sm:grid grid-cols-3 gap-8 max-w-md mx-auto"
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
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
