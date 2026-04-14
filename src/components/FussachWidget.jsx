"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const BRAND = "#005BAC";

/* ── Kleines Team-Logo mit Fallback-Initial ─────────────────── */
function TeamLogo({ src, name, size = 20 }) {
  const [err, setErr] = useState(false);
  if (!src || err) {
    return (
      <span style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: size, height: size, borderRadius: "50%",
        background: "#e5e7eb", fontSize: size * 0.45,
        fontWeight: 700, color: "#6b7280", flexShrink: 0,
      }}>
        {(name || "?")[0]}
      </span>
    );
  }
  return (
    <Image
      src={src} alt={name || ""} width={size} height={size}
      onError={() => setErr(true)}
      style={{ objectFit: "contain", flexShrink: 0, borderRadius: 2 }}
      unoptimized
    />
  );
}

/* ── Ergebnis-Badge (S / U / N) ─────────────────────────────── */
function Badge({ result }) {
  const map = {
    win:  { bg: "#dcfce7", color: "#166534", label: "S" },
    loss: { bg: "#fee2e2", color: "#991b1b", label: "N" },
    draw: { bg: "#fef9c3", color: "#854d0e", label: "U" },
  };
  const s = map[result] || map.draw;
  return (
    <span style={{
      background: s.bg, color: s.color,
      fontSize: 10, fontWeight: 700,
      padding: "1px 5px", borderRadius: 4, marginLeft: 4,
    }}>{s.label}</span>
  );
}

/* ── Abschnitts-Überschrift ─────────────────────────────────── */
function SectionTitle({ children }) {
  return (
    <div style={{
      fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
      textTransform: "uppercase", color: "#9ca3af", marginBottom: "0.5rem",
    }}>{children}</div>
  );
}

/* ── Einzelne Spielzeile ────────────────────────────────────── */
function MatchRow({ home, homeLogo, away, awayLogo, score, time, date, result, isUpcoming, matchUrl }) {
  const inner = (
    <div style={{
      display: "grid", gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center", gap: "0.4rem",
      padding: "0.45rem 0.75rem", borderRadius: 10,
      background: "#f9fafb", marginBottom: 5, fontSize: 12,
      cursor: matchUrl ? "pointer" : "default",
    }}>
      {/* Heimteam */}
      <div style={{
        display: "flex", alignItems: "center",
        justifyContent: "flex-end", gap: 5, overflow: "hidden",
        fontWeight: home.includes("Fussach") ? 700 : 500,
        color: home.includes("Fussach") ? BRAND : "#374151",
      }}>
        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {home}
        </span>
        <TeamLogo src={homeLogo} name={home} size={18} />
      </div>

      {/* Score / Uhrzeit */}
      <div style={{ textAlign: "center", minWidth: 62 }}>
        {isUpcoming ? (
          <>
            <div style={{ fontSize: 10, color: "#9ca3af", marginBottom: 1 }}>{date}</div>
            <div style={{
              fontWeight: 700, color: BRAND, background: "#eff6ff",
              borderRadius: 6, padding: "2px 7px", display: "inline-block",
            }}>{time}</div>
          </>
        ) : (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
            <span style={{
              fontWeight: 800, fontSize: 14, color: "#111827",
              background: "#fff", border: "1px solid #e5e7eb",
              borderRadius: 6, padding: "2px 7px",
            }}>{score}</span>
            <Badge result={result} />
          </div>
        )}
      </div>

      {/* Gastteam */}
      <div style={{
        display: "flex", alignItems: "center", gap: 5, overflow: "hidden",
        fontWeight: away.includes("Fussach") ? 700 : 500,
        color: away.includes("Fussach") ? BRAND : "#374151",
      }}>
        <TeamLogo src={awayLogo} name={away} size={18} />
        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {away}
        </span>
      </div>
    </div>
  );

  if (matchUrl) {
    return (
      <a href={matchUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>
        {inner}
      </a>
    );
  }
  return inner;
}

/* ── Tabellen-Ausschnitt ────────────────────────────────────── */
function TableSection({ table, liga }) {
  if (!table?.length) return null;

  const fussachIdx = table.findIndex(r => r.isFussach);
  const show = new Set([0, 1, 2]);
  if (fussachIdx > 0) {
    [fussachIdx - 1, fussachIdx, fussachIdx + 1].forEach(i => {
      if (i >= 0 && i < table.length) show.add(i);
    });
  }
  const indices = [...show].sort((a, b) => a - b);

  return (
    <div style={{ marginBottom: "1rem" }}>
      <SectionTitle>Tabelle – {liga}</SectionTitle>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
        <thead>
          <tr style={{ color: "#9ca3af", fontWeight: 600 }}>
            <th style={{ textAlign: "center", padding: "3px 4px", width: 22 }}>#</th>
            <th style={{ textAlign: "left", padding: "3px 4px" }}>Mannschaft</th>
            <th style={{ textAlign: "center", padding: "3px 4px", width: 26 }}>Sp</th>
            <th style={{ textAlign: "center", padding: "3px 4px", width: 50 }}>Tore</th>
            <th style={{ textAlign: "center", padding: "3px 4px", width: 30 }}>Pkt</th>
          </tr>
        </thead>
        <tbody>
          {indices.map((idx, i) => {
            const row = table[idx];
            const hasGap = i > 0 && idx > indices[i - 1] + 1;
            return (
              <React.Fragment key={idx}>
                {hasGap && (
                  <tr>
                    <td colSpan={5} style={{ textAlign: "center", color: "#d1d5db", padding: "1px 0", fontSize: 10 }}>
                      · · ·
                    </td>
                  </tr>
                )}
                <tr style={{ background: row.isFussach ? "#eff6ff" : "transparent" }}>
                  <td style={{ textAlign: "center", padding: "4px 4px", fontWeight: row.isFussach ? 700 : 400, color: row.isFussach ? BRAND : "#374151" }}>
                    {row.rank}
                  </td>
                  <td style={{ padding: "4px 4px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <TeamLogo src={row.logo} name={row.name} size={16} />
                      <span style={{
                        fontWeight: row.isFussach ? 700 : 400,
                        color: row.isFussach ? BRAND : "#374151",
                        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                        maxWidth: 130,
                      }}>
                        {row.name}
                      </span>
                      {row.isFussach && (
                        <span style={{
                          background: BRAND, color: "#fff",
                          fontSize: 9, fontWeight: 700, padding: "1px 4px",
                          borderRadius: 3, flexShrink: 0,
                          textTransform: "uppercase", letterSpacing: "0.04em",
                        }}>Wir</span>
                      )}
                    </div>
                  </td>
                  <td style={{ textAlign: "center", padding: "4px 4px", color: "#6b7280" }}>{row.played}</td>
                  <td style={{ textAlign: "center", padding: "4px 4px", color: "#6b7280" }}>{row.goals}</td>
                  <td style={{ textAlign: "center", padding: "4px 4px", fontWeight: row.isFussach ? 700 : 600, color: row.isFussach ? BRAND : "#111827" }}>
                    {row.points}
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/* ── Team-Panel (Ergebnisse + Spiele + Tabelle) ─────────────── */
function TeamPanel({ data }) {
  if (!data) return null;
  return (
    <div>
      {data.lastResults?.length > 0 && (
        <div style={{ marginBottom: "1rem" }}>
          <SectionTitle>Letzte Ergebnisse</SectionTitle>
          {data.lastResults.map((m, i) => <MatchRow key={i} {...m} isUpcoming={false} />)}
        </div>
      )}
      {data.nextFixtures?.length > 0 && (
        <div style={{ marginBottom: "1rem" }}>
          <SectionTitle>Nächste Spiele</SectionTitle>
          {data.nextFixtures.map((m, i) => <MatchRow key={i} {...m} isUpcoming={true} />)}
        </div>
      )}
      <TableSection table={data.table} liga={data.liga} />
    </div>
  );
}

/* ── Spinner ─────────────────────────────────────────────────── */
function Spinner() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
      <div style={{
        width: 28, height: 28,
        border: "3px solid #e5e7eb", borderTopColor: BRAND,
        borderRadius: "50%", animation: "spin 0.7s linear infinite",
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

/* ── Haupt-Widget ────────────────────────────────────────────── */
export default function FussachWidget() {
  const [data, setData]     = useState(null);
  const [error, setError]   = useState(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab]       = useState("erste");

  useEffect(() => {
    fetch("/api/fussach")
      .then(r => { if (!r.ok) throw new Error(`API ${r.status}`); return r.json(); })
      .then(d => { if (d.error) throw new Error(d.error); setData(d); })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const tabs = [
    { key: "erste",  label: "1. Mannschaft" },
    { key: "ersteb", label: "1b Mannschaft" },
  ];

  return (
    <div style={{
      background: "#fff", border: "1px solid #e5e7eb",
      borderRadius: 16, padding: "1.25rem", maxWidth: 460,
      fontFamily: "Inter, system-ui, sans-serif",
      boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    }}>
      {/* Header */}
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        marginBottom: "1rem", paddingBottom: "0.875rem",
        borderBottom: "1px solid #f3f4f6",
      }}>
        <div style={{
          width: 34, height: 34, background: "#fff", borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, overflow: "hidden", border: "1px solid #e5e7eb",
        }}>
          <Image
            src="/images/logos/sc fussach wappen.png"
            alt="SC Fussach"
            width={30}
            height={30}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, color: "#111827" }}>SC Fussach</div>
          <div style={{ fontSize: 11, color: "#9ca3af" }}>Saison 2025/26</div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        display: "inline-flex", background: "#f3f4f6",
        borderRadius: 10, padding: 3, gap: 2, marginBottom: "1rem",
      }}>
        {tabs.map(t => (
          <button key={t.key} onClick={() => setTab(t.key)} style={{
            padding: "5px 14px", borderRadius: 8, border: "none", cursor: "pointer",
            fontSize: 12, fontWeight: 600,
            background: tab === t.key ? "#fff" : "transparent",
            color: tab === t.key ? BRAND : "#6b7280",
            boxShadow: tab === t.key ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
            transition: "all 0.15s",
          }}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {loading && <Spinner />}
      {error && (
        <div style={{
          background: "#fef2f2", border: "1px solid #fecaca",
          borderRadius: 8, padding: "0.75rem 1rem",
          color: "#dc2626", fontSize: 13,
        }}>
          Daten konnten nicht geladen werden.
        </div>
      )}
      {data && <TeamPanel data={data[tab]} />}

      {/* Quelle */}
      <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: "0.6rem", textAlign: "right" }}>
        <a href="https://ticker.ligaportal.at/mannschaft/2136/sc-fussach/spielplan"
          target="_blank" rel="noopener noreferrer"
          style={{ fontSize: 10, color: "#9ca3af", textDecoration: "none" }}>
          Daten: ligaportal.at ↗
        </a>
      </div>
    </div>
  );
}
