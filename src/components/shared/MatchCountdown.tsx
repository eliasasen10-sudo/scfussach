"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

function parseMatchDate(dateStr: string, timeStr?: string): Date | null {
  // dateStr: "18.04.2026" or "18. Apr." etc.
  const full = dateStr.match(/(\d{1,2})\.(\d{2})\.(\d{4})/);
  if (!full) return null;
  const [, day, month, year] = full;
  let hours = 0, minutes = 0;
  if (timeStr) {
    const t = timeStr.match(/(\d{1,2}):(\d{2})/);
    if (t) { hours = parseInt(t[1]); minutes = parseInt(t[2]); }
  }
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day), hours, minutes, 0);
}

function getTimeLeft(target: Date): TimeLeft {
  const total = target.getTime() - Date.now();
  if (total <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours   = Math.floor((total / 1000 / 60 / 60) % 24);
  const days    = Math.floor(total / 1000 / 60 / 60 / 24);
  return { days, hours, minutes, seconds, total };
}

function Pad({ n }: { n: number }) {
  return <>{String(n).padStart(2, "0")}</>;
}

interface Props {
  dateStr: string;
  timeStr?: string;
  /** "card" = vertical blocks, "banner" = compact inline */
  variant?: "card" | "banner";
}

export default function MatchCountdown({ dateStr, timeStr, variant = "card" }: Props) {
  const target = parseMatchDate(dateStr, timeStr);
  const [left, setLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    if (!target) return;
    setLeft(getTimeLeft(target));
    const id = setInterval(() => setLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [dateStr, timeStr]);

  if (!target || !left) return null;

  if (left.total <= 0) {
    return (
      <span className="text-emerald-300 font-extrabold text-sm animate-pulse">
        Läuft jetzt!
      </span>
    );
  }

  if (variant === "banner") {
    return (
      <div className="flex items-center gap-1 shrink-0">
        {left.days > 0 && (
          <>
            <div className="flex flex-col items-center bg-white/15 rounded-lg px-2 py-1 min-w-[36px]">
              <span className="text-sm font-extrabold text-white leading-none"><Pad n={left.days} /></span>
              <span className="text-[9px] text-white/50 font-semibold uppercase">T</span>
            </div>
            <span className="text-white/30 font-bold text-xs">:</span>
          </>
        )}
        <div className="flex flex-col items-center bg-white/15 rounded-lg px-2 py-1 min-w-[36px]">
          <span className="text-sm font-extrabold text-white leading-none"><Pad n={left.hours} /></span>
          <span className="text-[9px] text-white/50 font-semibold uppercase">Std</span>
        </div>
        <span className="text-white/30 font-bold text-xs">:</span>
        <div className="flex flex-col items-center bg-white/15 rounded-lg px-2 py-1 min-w-[36px]">
          <span className="text-sm font-extrabold text-white leading-none"><Pad n={left.minutes} /></span>
          <span className="text-[9px] text-white/50 font-semibold uppercase">Min</span>
        </div>
        <span className="text-white/30 font-bold text-xs">:</span>
        <div className="flex flex-col items-center bg-white/15 rounded-lg px-2 py-1 min-w-[36px]">
          <span className="text-sm font-extrabold text-white leading-none"><Pad n={left.seconds} /></span>
          <span className="text-[9px] text-white/50 font-semibold uppercase">Sek</span>
        </div>
      </div>
    );
  }

  // card variant
  return (
    <div className="flex items-center justify-center gap-1.5 bg-white/10 rounded-xl py-2.5 px-3">
      {left.days > 0 && (
        <>
          <div className="flex flex-col items-center">
            <span className="text-xl font-extrabold text-white leading-none"><Pad n={left.days} /></span>
            <span className="text-[9px] text-white/50 font-bold uppercase mt-0.5">Tage</span>
          </div>
          <span className="text-white/30 font-bold text-base mb-2">:</span>
        </>
      )}
      <div className="flex flex-col items-center">
        <span className="text-xl font-extrabold text-white leading-none"><Pad n={left.hours} /></span>
        <span className="text-[9px] text-white/50 font-bold uppercase mt-0.5">Std</span>
      </div>
      <span className="text-white/30 font-bold text-base mb-2">:</span>
      <div className="flex flex-col items-center">
        <span className="text-xl font-extrabold text-white leading-none"><Pad n={left.minutes} /></span>
        <span className="text-[9px] text-white/50 font-bold uppercase mt-0.5">Min</span>
      </div>
      <span className="text-white/30 font-bold text-base mb-2">:</span>
      <div className="flex flex-col items-center">
        <span className="text-xl font-extrabold text-white leading-none"><Pad n={left.seconds} /></span>
        <span className="text-[9px] text-white/50 font-bold uppercase mt-0.5">Sek</span>
      </div>
    </div>
  );
}
