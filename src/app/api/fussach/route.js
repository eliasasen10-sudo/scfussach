import * as cheerio from "cheerio";
import { NextResponse } from "next/server";

export const revalidate = 86400;

const BASE = "https://ticker.ligaportal.at";

const TEAMS = {
  erste: { id: "2136", slug: "sc-fussach",    label: "1. Mannschaft", liga: "Vorarlbergliga"  },
  ersteb: { id: "2202", slug: "sc-fussach-1b", label: "1b Mannschaft", liga: "4. Landesklasse" },
};

async function fetchPage(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
      Accept: "text/html,application/xhtml+xml",
    },
    next: { revalidate: 86400 },
  });
  if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${url}`);
  return res.text();
}

function getLogo($img) {
  const url = $img.attr("data-src") || $img.attr("src") || "";
  return url.includes("default-logo") ? null : url || null;
}

function parseSpielplan(html, teamId) {
  const $ = cheerio.load(html);
  const played = [];
  const upcoming = [];

  $("tr.game-row").each((_, row) => {
    const $row = $(row);
    const classes = $row.attr("class") || "";
    const isUpcoming = classes.includes("gameNotStarted");

    const dateRaw = $row.prev("tr").find("td strong").first().text().trim();
    const date = dateRaw.replace(/^[^\d]+/, "").trim();

    const $homeTd = $row.find("td.team.text-right");
    const home     = $homeTd.find("a").first().text().trim().replace(/\s+/g, " ");
    const homeLogo = getLogo($homeTd.find("img").first());

    const $awayTd = $row.find("td.team.text-left");
    const away     = $awayTd.find("a").first().text().trim().replace(/\s+/g, " ");
    const awayLogo = getLogo($awayTd.find("img").first());

    const scoreCell = $row.find("td.score").text().trim().replace(/\s+/g, " ");
    const scoreMain = $row.find("td.score strong").text().trim() || scoreCell;

    const tickerHref = $row.find("td.button-holder a").first().attr("href") || "";
    const matchUrl = tickerHref
      ? (tickerHref.startsWith("http") ? tickerHref : `${BASE}${tickerHref}`)
      : null;

    if (!home || !away) return;

    if (isUpcoming) {
      upcoming.push({ date, time: scoreCell, home, homeLogo, away, awayLogo, matchUrl });
    } else {
      const result = classes.includes("gameWon") ? "win"
                   : classes.includes("gameLost") ? "loss"
                   : "draw";
      played.push({ date, home, homeLogo, away, awayLogo, score: scoreMain, result, matchUrl });
    }
  });

  return {
    lastResults:  played.slice(-2),
    nextFixtures: upcoming.slice(0, 2),
  };
}

function parseTabelle(html, teamId) {
  const $ = cheerio.load(html);
  const table = [];

  $("tr.tableEntry").each((_, row) => {
    const $row   = $(row);
    const rank   = $row.find("td.tableRank").text().trim();
    const name   = $row.find("td.team a").text().trim().replace(/\s+/g, " ");
    const played = $row.find("td.gamesPlayed").text().trim();
    const won    = $row.find("td.gamesWon").text().trim();
    const drawn  = $row.find("td.gamesRemis").text().trim();
    const lost   = $row.find("td.gamesLost").text().trim();
    const goals  = $row.find("td.gamesRatio").first().text().trim();
    const points = $row.find("td.points").text().trim();
    const logo   = getLogo($row.find("td.team img").first());

    const href = $row.find("td.team a").attr("href") || "";
    const isFussach = href.includes(teamId) || name.toLowerCase().includes("fussach");

    if (rank && name) {
      table.push({
        rank: parseInt(rank, 10),
        name, logo,
        played: parseInt(played, 10) || 0,
        won:   parseInt(won,    10) || 0,
        drawn: parseInt(drawn,  10) || 0,
        lost:  parseInt(lost,   10) || 0,
        goals,
        points: parseInt(points, 10) || 0,
        isFussach,
      });
    }
  });

  return table;
}

async function fetchTeam(team) {
  const [spielplanHtml, tabelleHtml] = await Promise.all([
    fetchPage(`${BASE}/mannschaft/${team.id}/${team.slug}/spielplan`),
    fetchPage(`${BASE}/mannschaft/${team.id}/${team.slug}/tabelle`),
  ]);
  return {
    ...parseSpielplan(spielplanHtml, team.id),
    table: parseTabelle(tabelleHtml, team.id),
    label: team.label,
    liga:  team.liga,
  };
}

export async function GET() {
  try {
    const [erste, ersteb] = await Promise.all([
      fetchTeam(TEAMS.erste),
      fetchTeam(TEAMS.ersteb),
    ]);

    return NextResponse.json(
      { erste, ersteb },
      { headers: { "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=600" } }
    );
  } catch (err) {
    console.error("[/api/fussach] Error:", err);
    return NextResponse.json({ error: err.message }, { status: 502 });
  }
}
