import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("de-AT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function formatDateShort(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("de-AT", {
    day: "2-digit",
    month: "short",
  });
}

export function getMatchResult(
  homeScore: number | null,
  awayScore: number | null,
  isHome: boolean
): "win" | "draw" | "loss" | "upcoming" {
  if (homeScore === null || awayScore === null) return "upcoming";
  const scored = isHome ? homeScore : awayScore;
  const conceded = isHome ? awayScore : homeScore;
  if (scored > conceded) return "win";
  if (scored < conceded) return "loss";
  return "draw";
}

export function categoryColor(category: string): string {
  const map: Record<string, string> = {
    Spielbericht: "bg-primary text-white",
    Jugend: "bg-emerald-100 text-emerald-800",
    Vereinsnews: "bg-primary-light text-primary",
    Veranstaltung: "bg-amber-100 text-amber-800",
    Transfer: "bg-purple-100 text-purple-800",
    Allgemein: "bg-gray-100 text-gray-700",
  };
  return map[category] ?? "bg-gray-100 text-gray-700";
}
