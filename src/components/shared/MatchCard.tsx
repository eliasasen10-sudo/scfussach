"use client";

import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { cn, formatDateShort, getMatchResult } from "@/lib/utils";
import type { Match } from "@/lib/types";

interface MatchCardProps {
  match: Match;
  index?: number;
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

export default function MatchCard({ match, index = 0 }: MatchCardProps) {
  const result = getMatchResult(match.homeScore, match.awayScore, match.isHome);

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
      className={cn(
        "rounded-2xl border p-4 transition-all duration-200 hover:shadow-md",
        resultStyles[result]
      )}
    >
      {/* Date + Competition */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded-lg">
            {formatDateShort(match.date)}
          </span>
          <span className="flex items-center gap-1 text-xs text-gray-400">
            <Clock size={10} />
            {match.time}
          </span>
        </div>
        <span className="text-xs text-gray-400 font-medium">{match.competition}</span>
      </div>

      {/* Teams + Score */}
      <div className="flex items-center gap-3">
        {/* Home team */}
        <div className="flex-1 text-right">
          <span
            className={cn(
              "text-sm font-bold leading-tight",
              match.home === "SC Fussach" ? "text-primary" : "text-gray-700"
            )}
          >
            {match.home}
          </span>
        </div>

        {/* Score / VS */}
        <div
          className={cn(
            "shrink-0 w-16 text-center py-1.5 px-2 rounded-xl text-sm font-bold",
            scoreBadge[result]
          )}
        >
          {match.homeScore !== null && match.awayScore !== null
            ? `${match.homeScore} : ${match.awayScore}`
            : "vs"}
        </div>

        {/* Away team */}
        <div className="flex-1">
          <span
            className={cn(
              "text-sm font-bold leading-tight",
              match.away === "SC Fussach" ? "text-primary" : "text-gray-700"
            )}
          >
            {match.away}
          </span>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-1 mt-2.5">
        <MapPin size={11} className="text-gray-400 shrink-0" />
        <span className="text-xs text-gray-400 truncate">{match.location}</span>
      </div>
    </motion.div>
  );
}
