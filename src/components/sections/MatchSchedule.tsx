"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const BRAND = "#003087";

interface Match {
  date: string;
  time?: string;
  home: string;
  homeLogo: string | null;
  away: string;
  awayLogo: string | null;
  score?: string;
  result?: "win" | "loss" | "draw";
  matchUrl?: string | null;
}

interface TeamData {
  label: string;
  liga: string;
  lastResults: Match[];
  nextFixtures: Match[];
}

interface ApiData {
  erste: TeamData;
  ersteb: TeamData;
}

const resultStyles = {
  win: "bg-emerald-50 border-emerald-200",
  loss: "bg-red-50 border-red-200",
  draw: "bg-amber-50 border-amber-200",
  upcoming: "bg-white border-gray-100",
};

const scoreBadge = {
  win: "text-emerald-700 bg-emerald-100",
  loss: "text-red-700 bg-red-100",
  draw: "text-amber-700 bg-amber-100",
  upcoming: "text-primary bg-primary-light",
};

function LiveMatchCard({ match, isUpcoming, index }: { match: Match; isUpcoming: boolean; index: number }) {
  const isFussachHome = match.home.includes("Fussach");
  const style = isUpcoming ? "upcoming" : (match.result ?? "draw");
  const linkUrl = match.matchUrl ?? "https://ticker.ligaportal.at/mannschaft/2136/sc-fussach/spielplan";

  return (
    <motion.a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className={cn(
        "rounded-2xl border p-4 transition-all duration-200 hover:shadow-md block group",
        resultStyles[style as keyof typeof resultStyles]
      )}
    >
      {/* Date + Competition */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-lg">
            {match.date}
          </span>
          {isUpcoming && match.time && (
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Clock size={10} />
              {match.time}
            </span>
          )}
        </div>
        <ExternalLink size={11} className="text-gray-300 group-hover:text-primary transition-colors" />
      </div>

      {/* Teams + Score */}
      <div className="flex items-center gap-3">
        <div className="flex-1 text-right">
          <span className={cn("text-sm font-bold leading-tight", isFussachHome ? "text-primary" : "text-gray-700")}>
            {match.home}
          </span>
        </div>
        <div className={cn("shrink-0 w-16 text-center py-1.5 px-2 rounded-xl text-sm font-bold", scoreBadge[style as keyof typeof scoreBadge])}>
          {isUpcoming ? "vs" : match.score}
        </div>
        <div className="flex-1">
          <span className={cn("text-sm font-bold leading-tight", !isFussachHome ? "text-primary" : "text-gray-700")}>
            {match.away}
          </span>
        </div>
      </div>
    </motion.a>
  );
}

function Skeleton() {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map(i => (
        <div key={i} className="rounded-2xl border border-gray-100 p-4 animate-pulse bg-gray-50">
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-3" />
          <div className="flex gap-3 items-center">
            <div className="flex-1 h-4 bg-gray-200 rounded" />
            <div className="w-16 h-8 bg-gray-200 rounded-xl" />
            <div className="flex-1 h-4 bg-gray-200 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

type Tab = "upcoming" | "results";

export default function MatchSchedule() {
  const [tab, setTab] = useState<Tab>("upcoming");
  const [data, setData] = useState<ApiData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/fussach")
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(d => !d.error && setData(d))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const erste = data?.erste;
  const upcoming = erste?.nextFixtures ?? [];
  const results = erste?.lastResults ?? [];
  const display = tab === "upcoming" ? upcoming : results;

  return (
    <section className="section-padding bg-white" id="spielplan">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
              Spielplan
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              1. Mannschaft –
              <br />
              Vorarlbergliga
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
              Aktuelle Spiele und Ergebnisse der 1. Mannschaft – live von Ligaportal.
            </p>

            {/* Tab switcher */}
            <div className="inline-flex p-1 bg-gray-100 rounded-xl gap-1">
              {(["upcoming", "results"] as Tab[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={cn(
                    "px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200",
                    tab === t ? "bg-white text-primary shadow-sm" : "text-gray-500 hover:text-gray-700"
                  )}
                >
                  {t === "upcoming" ? "Nächste Spiele" : "Ergebnisse"}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/spielplan"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
              >
                Vollständiger Spielplan
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Right: match cards */}
          <div className="flex flex-col gap-3">
            {loading ? (
              <Skeleton />
            ) : display.length === 0 ? (
              <p className="text-gray-400 text-sm py-8 text-center">
                Keine Spiele in dieser Kategorie.
              </p>
            ) : (
              display.slice(0, 4).map((match, i) => (
                <LiveMatchCard key={i} match={match} isUpcoming={tab === "upcoming"} index={i} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
