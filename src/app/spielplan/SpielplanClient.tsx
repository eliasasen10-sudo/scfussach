"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const BRAND = "#005BAC";

/* ── Typen ──────────────────────────────────────────────────── */
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

interface TableRow {
  rank: number;
  name: string;
  logo: string | null;
  played: number;
  goals: string;
  points: number;
  isFussach: boolean;
}

interface TeamData {
  label: string;
  liga: string;
  lastResults: Match[];
  nextFixtures: Match[];
  table: TableRow[];
}

interface ApiData {
  erste: TeamData;
  ersteb: TeamData;
}

/* ── Team-Logo ──────────────────────────────────────────────── */
function TeamLogo({ src, name, size = 24 }: { src: string | null; name: string; size?: number }) {
  const [err, setErr] = useState(false);
  if (!src || err) {
    return (
      <span style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: size, height: size, borderRadius: "50%",
        background: "#e5e7eb", fontSize: size * 0.42,
        fontWeight: 700, color: "#6b7280", flexShrink: 0,
      }}>
        {(name || "?")[0]}
      </span>
    );
  }
  return (
    <Image
      src={src} alt={name} width={size} height={size}
      onError={() => setErr(true)}
      style={{ objectFit: "contain", flexShrink: 0, borderRadius: 2 }}
      unoptimized
    />
  );
}

/* ── Ergebnis-Badge ─────────────────────────────────────────── */
function Badge({ result }: { result?: string }) {
  const map: Record<string, { bg: string; color: string; label: string }> = {
    win:  { bg: "#dcfce7", color: "#166534", label: "Sieg" },
    loss: { bg: "#fee2e2", color: "#991b1b", label: "Niederlage" },
    draw: { bg: "#fef9c3", color: "#854d0e", label: "Unentschieden" },
  };
  const s = map[result ?? ""] ?? map.draw;
  return (
    <span style={{
      background: s.bg, color: s.color,
      fontSize: 11, fontWeight: 700,
      padding: "2px 8px", borderRadius: 20,
    }}>{s.label}</span>
  );
}

/* ── Spielzeile (groß) ──────────────────────────────────────── */
function MatchRowFull({ match, isUpcoming }: { match: Match; isUpcoming: boolean }) {
  const isFussachHome = match.home.includes("Fussach");
  const isFussachAway = match.away.includes("Fussach");

  const inner = (
    <div style={{
      background: "#fff",
      border: "1px solid #e5e7eb",
      borderRadius: 14,
      padding: "0.85rem 1.25rem",
      marginBottom: 8,
      cursor: match.matchUrl ? "pointer" : "default",
      transition: "box-shadow 0.15s",
    }}
      onMouseEnter={e => { if (match.matchUrl) (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(0,91,172,0.12)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
    >
      {/* Datum / Uhrzeit */}
      <div style={{
        fontSize: 11, color: "#9ca3af", marginBottom: 8,
        display: "flex", alignItems: "center", gap: 8,
      }}>
        <span>{match.date}</span>
        {isUpcoming && match.time && (
          <span style={{
            background: "#eff6ff", color: BRAND,
            fontWeight: 700, padding: "1px 7px", borderRadius: 6,
          }}>{match.time}</span>
        )}
        {!isUpcoming && <Badge result={match.result} />}
      </div>

      {/* Teams + Score */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        gap: "1rem",
      }}>
        {/* Heimteam */}
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "flex-end", gap: 8,
        }}>
          <span style={{
            fontWeight: isFussachHome ? 700 : 500,
            color: isFussachHome ? BRAND : "#111827",
            fontSize: 14, textAlign: "right",
          }}>{match.home}</span>
          <TeamLogo src={match.homeLogo} name={match.home} size={28} />
        </div>

        {/* Score / VS */}
        <div style={{ textAlign: "center", minWidth: 72 }}>
          {isUpcoming ? (
            <span style={{ color: "#9ca3af", fontWeight: 600, fontSize: 14 }}>vs</span>
          ) : (
            <span style={{
              fontWeight: 800, fontSize: 20, color: "#111827",
              background: "#f3f4f6", borderRadius: 8,
              padding: "4px 12px", display: "inline-block",
            }}>{match.score}</span>
          )}
        </div>

        {/* Gastteam */}
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
        }}>
          <TeamLogo src={match.awayLogo} name={match.away} size={28} />
          <span style={{
            fontWeight: isFussachAway ? 700 : 500,
            color: isFussachAway ? BRAND : "#111827",
            fontSize: 14,
          }}>{match.away}</span>
        </div>
      </div>
    </div>
  );

  const linkUrl = match.matchUrl ?? "https://ticker.ligaportal.at/mannschaft/2136/sc-fussach/spielplan";
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>
      {inner}
    </a>
  );
}

/* ── Volle Tabelle ──────────────────────────────────────────── */
function FullTable({ table, liga }: { table: TableRow[]; liga: string }) {
  if (!table?.length) return null;

  return (
    <div style={{
      background: "#fff", border: "1px solid #e5e7eb",
      borderRadius: 16, overflow: "hidden",
    }}>
      <div style={{
        padding: "1rem 1.25rem",
        borderBottom: "1px solid #f3f4f6",
        fontWeight: 700, fontSize: 14, color: "#111827",
      }}>
        Tabelle – {liga}
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr style={{ background: "#f9fafb" }}>
            {["#", "Mannschaft", "Sp", "Tore", "Pkt"].map(h => (
              <th key={h} style={{
                padding: "8px 10px",
                textAlign: h === "Mannschaft" ? "left" : "center",
                fontWeight: 600, color: "#6b7280", fontSize: 11,
                textTransform: "uppercase", letterSpacing: "0.05em",
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.map((row, i) => (
            <tr key={row.rank} style={{
              background: row.isFussach ? "#eff6ff" : i % 2 === 0 ? "#fff" : "#fafafa",
              borderTop: "1px solid #f3f4f6",
            }}>
              <td style={{ textAlign: "center", padding: "9px 10px", fontWeight: row.isFussach ? 700 : 400, color: row.isFussach ? BRAND : "#374151" }}>
                {row.rank}
              </td>
              <td style={{ padding: "9px 10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <TeamLogo src={row.logo} name={row.name} size={20} />
                  <span style={{
                    fontWeight: row.isFussach ? 700 : 400,
                    color: row.isFussach ? BRAND : "#111827",
                  }}>{row.name}</span>
                  {row.isFussach && (
                    <span style={{
                      background: BRAND, color: "#fff",
                      fontSize: 9, fontWeight: 700, padding: "1px 5px",
                      borderRadius: 4, textTransform: "uppercase",
                    }}>Wir</span>
                  )}
                </div>
              </td>
              <td style={{ textAlign: "center", padding: "9px 10px", color: "#6b7280" }}>{row.played}</td>
              <td style={{ textAlign: "center", padding: "9px 10px", color: "#6b7280" }}>{row.goals}</td>
              <td style={{ textAlign: "center", padding: "9px 10px", fontWeight: row.isFussach ? 700 : 600, color: row.isFussach ? BRAND : "#111827" }}>
                {row.points}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Team-Panel ─────────────────────────────────────────────── */
function TeamPanel({ data }: { data: TeamData }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
      {/* Ergebnisse + Nächste Spiele nebeneinander auf Desktop */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "1.5rem",
      }}>
        {/* Letzte Ergebnisse */}
        {data.lastResults?.length > 0 && (
          <div>
            <div style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "#9ca3af", marginBottom: "0.75rem",
            }}>Letzte Ergebnisse</div>
            {data.lastResults.map((m, i) => (
              <MatchRowFull key={i} match={m} isUpcoming={false} />
            ))}
          </div>
        )}

        {/* Nächste Spiele */}
        {data.nextFixtures?.length > 0 && (
          <div>
            <div style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "#9ca3af", marginBottom: "0.75rem",
            }}>Nächste Spiele</div>
            {data.nextFixtures.map((m, i) => (
              <MatchRowFull key={i} match={m} isUpcoming={true} />
            ))}
          </div>
        )}
      </div>

      {/* Tabelle */}
      <FullTable table={data.table} liga={data.liga} />
    </div>
  );
}

/* ── Spinner ─────────────────────────────────────────────────── */
function Spinner() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "4rem" }}>
      <div style={{
        width: 36, height: 36,
        border: "3px solid #e5e7eb", borderTopColor: BRAND,
        borderRadius: "50%", animation: "spin 0.7s linear infinite",
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

/* ── Haupt-Client-Komponente ────────────────────────────────── */
export default function SpielplanClient() {
  const [data, setData]       = useState<ApiData | null>(null);
  const [error, setError]     = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab]         = useState<"erste" | "ersteb">("erste");

  useEffect(() => {
    fetch("/api/fussach")
      .then(r => { if (!r.ok) throw new Error(`API ${r.status}`); return r.json(); })
      .then(d => { if (d.error) throw new Error(d.error); setData(d); })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const tabs = [
    { key: "erste"  as const, label: "SC Fussach" },
    { key: "ersteb" as const, label: "SC Fussach 1b" },
  ];

  return (
    <div>
      {/* Tab-Leiste */}
      <div className="flex gap-2 mb-8 border-b border-gray-200">
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`pb-3 px-1 text-sm font-semibold border-b-2 transition-colors duration-200 ${
              tab === t.key
                ? "border-primary text-primary"
                : "border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            <span>{t.label}</span>
          </button>
        ))}
      </div>

      {loading && <Spinner />}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600 text-sm">
          Daten konnten nicht geladen werden. Bitte später nochmal versuchen.
        </div>
      )}

      {data && <TeamPanel data={data[tab]} />}

      {/* Quelle */}
      <div className="mt-8 text-right">
        <a
          href="https://ticker.ligaportal.at/mannschaft/2136/sc-fussach/spielplan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-400 hover:text-primary transition-colors"
        >
          Daten: ligaportal.at ↗
        </a>
      </div>
    </div>
  );
}
