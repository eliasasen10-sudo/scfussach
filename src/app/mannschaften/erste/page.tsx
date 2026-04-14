"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Trophy, MapPin } from "lucide-react";

const BASE = "/images/Players/";

/* ── Positions-Farben ───────────────────────────────────────── */
const groupStyle: Record<string, { badge: string; dot: string; label: string }> = {
  Torwarte:   { badge: "bg-amber-100 text-amber-700",   dot: "bg-amber-400",   label: "Torwart" },
  Abwehr:     { badge: "bg-blue-100 text-blue-700",     dot: "bg-blue-500",    label: "Abwehr" },
  Mittelfeld: { badge: "bg-emerald-100 text-emerald-700", dot: "bg-emerald-500", label: "Mittelfeld" },
  Angriff:    { badge: "bg-red-100 text-red-700",       dot: "bg-red-500",     label: "Angriff" },
};

/* ── Daten ──────────────────────────────────────────────────── */
const staff = [
  { name: "Bernhard Erkinger", role: "Cheftrainer",     img: "BernhardErkingerTrainer.jpeg" },
  { name: "Stefan Pfanner",    role: "Co-Trainer",      img: "StefanPfannerCoTrainerPose.jpeg" },
  { name: "Armin",             role: "Tormanntrainer",  img: "ArminTormantrainerNormal.jpeg" },
  { name: "Christoph Kobleder",role: "Sportl. Leiter",  img: "ChristophKoblederSportlicherLeiterVerteidigungPose.jpeg" },
];

type Player = {
  name: string;
  position: string;
  group: "Torwarte" | "Abwehr" | "Mittelfeld" | "Angriff";
  normal: string | null;
  pose: string;
};

const players: Player[] = [
  // Torwarte
  { name: "Travis Schmid",        position: "Torwart",       group: "Torwarte",   normal: "TravisSchmidTorwartEinserTormannNormal.jpeg",             pose: "TravisSchmidTorwartEinserTormannPose.jpeg" },
  { name: "Laurin Tait",          position: "Torwart",       group: "Torwarte",   normal: "LaurinTaitNormalTormann.jpeg",                            pose: "LaurinTaitTormannPose.jpeg" },
  // Abwehr
  { name: "Fabian Hämmerle",      position: "Verteidiger",   group: "Abwehr",     normal: "FabianHämmerleNormalVerteidger.jpeg",                     pose: "FabianHämmerlePoseVerteidiger.jpeg" },
  { name: "Fabio Huditz",         position: "Verteidiger",   group: "Abwehr",     normal: "FabioHuditzVerteidigerNormal.jpeg",                       pose: "FabioHuditzPoseVerteidiger.jpeg" },
  { name: "Joel Bilgeri",         position: "Verteidiger",   group: "Abwehr",     normal: "JoelBilgeriVerteidigerNormal.jpeg",                       pose: "JoelBilgeriVerteidigerPose.jpeg" },
  { name: "Paul Niederer",        position: "Verteidiger",   group: "Abwehr",     normal: "PaulNiedererVerteidigerNormal.jpeg",                      pose: "PaulNiedererVerteidigerPose.jpeg" },
  { name: "Petkovic Martinovic",  position: "Verteidiger",   group: "Abwehr",     normal: "PetkovicMartinovicVerteidigerNormal.jpeg",                pose: "PetkovicMartinovicVerteidigerPose.jpeg" },
  // Mittelfeld
  { name: "Andrej Gravic",        position: "Mittelfeld",    group: "Mittelfeld", normal: null,                                                      pose: "AndrejGravicMittelfeldspielerPose.jpeg" },
  { name: "Elias Asen",           position: "Mittelfeld",    group: "Mittelfeld", normal: "EliasAsenMittelfeldNormal.jpeg",                          pose: "EliasAsenMittelfeldPose.jpeg" },
  { name: "Florian Riedmann",     position: "Mittelfeld",    group: "Mittelfeld", normal: "FlorianRiedmannNormalMittelfeld.jpeg",                    pose: "FlorianRiedmannPoseMittelfeld.jpeg" },
  { name: "Ogün Bozkurt",         position: "Mittelfeld",    group: "Mittelfeld", normal: "OgünBozkurtMittelfeldspielerNormal.jpeg",                 pose: "OgünBozkurtMittelfeldspielerPose.jpeg" },
  // Angriff
  { name: "Aleksej Martinovic",   position: "Flügelspieler", group: "Angriff",    normal: "AleksejmartinovicFlügelspielerNormal.jpeg",               pose: "AleksejmartinovicFlügelspielerPose.jpeg" },
  { name: "Alex Asiu",            position: "Flügelspieler", group: "Angriff",    normal: "AlexAsiuNormalFlügelspieler.jpeg",                        pose: "AlexAsiuFlügelspielerPose.jpeg" },
  { name: "Azad",                 position: "Flügelspieler", group: "Angriff",    normal: "AzadFlügelspielerNormal.jpeg",                            pose: "AzadFlügelspielerPose.jpeg" },
  { name: "David Wachter",        position: "Flügelspieler", group: "Angriff",    normal: null,                                                      pose: "DavidWachterFlügelspielerPose.jpeg" },
  { name: "Giuseppe Franchina",   position: "Flügelspieler", group: "Angriff",    normal: "GiuseppeFranchinaFlügelspielerNormal.jpeg",               pose: "GiuseppeFranchinaFlügelspielerPose.jpeg" },
  { name: "Severin Wund",         position: "Flügelspieler", group: "Angriff",    normal: "SeverinWundFlügelspielerNormal.jpeg",                     pose: "SeverinWundFlügelspielerPose.jpeg" },
  { name: "Benedikt Holzer",      position: "Stürmer",       group: "Angriff",    normal: "BenediktHolzerStürmerNormal.jpeg",                        pose: "BenediktHolzerStürmerPose.jpeg" },
  { name: "Martin Bartolini",     position: "Stürmer",       group: "Angriff",    normal: "Martin BartoliniAKABobbyStürmerNormal.jpeg",              pose: "Martin BartoliniAKABobbyStürmerPose.jpeg" },
  { name: "Phillip Stoß",         position: "Stürmer",       group: "Angriff",    normal: "PhillipStoßStürmerNormal.jpeg",                          pose: "PhillipStoßStürmerPose.jpeg" },
];

const groups = ["Torwarte", "Abwehr", "Mittelfeld", "Angriff"] as const;

/* ── Spieler-Karte ──────────────────────────────────────────── */
function PlayerCard({ player }: { player: Player }) {
  const s = groupStyle[player.group];
  const primarySrc = BASE + (player.normal ?? player.pose);
  const poseSrc    = BASE + player.pose;

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-gray-900 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-default" style={{ aspectRatio: "3/4" }}>
      {/* Normal image (default visible) */}
      <Image
        src={primarySrc}
        alt={player.name}
        fill
        unoptimized
        className="object-cover object-top transition-opacity duration-500 group-hover:opacity-0"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      {/* Pose image (fades in on hover) */}
      {player.normal && (
        <Image
          src={poseSrc}
          alt={player.name}
          fill
          unoptimized
          className="object-cover object-top transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      )}
      {/* Dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      {/* Position badge */}
      <div className="absolute top-3 left-3">
        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${s.badge}`}>
          {player.position}
        </span>
      </div>
      {/* Name */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-white font-bold text-sm leading-snug">{player.name}</p>
      </div>
    </div>
  );
}

/* ── Staff-Karte ────────────────────────────────────────────── */
function StaffCard({ member }: { member: typeof staff[0] }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-24 h-24 rounded-2xl overflow-hidden ring-2 ring-primary/20 shadow-md">
        <Image
          src={BASE + member.img}
          alt={member.name}
          fill
          unoptimized
          className="object-cover object-top"
          sizes="96px"
        />
      </div>
      <div className="text-center">
        <p className="font-bold text-gray-900 text-sm leading-tight">{member.name}</p>
        <p className="text-xs text-primary font-semibold mt-0.5">{member.role}</p>
      </div>
    </div>
  );
}

/* ── Hauptseite ─────────────────────────────────────────────── */
export default function ErsteMannschaftPage() {
  return (
    <main className="min-h-screen">

      {/* Hero mit Mannschaftsfoto */}
      <section className="relative h-[480px] md:h-[580px] overflow-hidden bg-primary-dark">
        <Image
          src="/images/Players/Mannschaftsfoto2026.jpeg"
          alt="SC Fussach 1. Mannschaft 2026"
          fill
          unoptimized
          priority
          className="object-cover object-center opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end container-site pb-10">
          <Link
            href="/mannschaften"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-4 transition-colors w-fit"
          >
            <ArrowLeft size={14} />
            Alle Mannschaften
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-bold tracking-widest uppercase text-white/60">
              SC Fussach
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            1. Mannschaft
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-white/70">
            <span className="flex items-center gap-1.5"><Trophy size={13} /> Vorarlbergliga</span>
            <span className="flex items-center gap-1.5"><MapPin size={13} /> Sportanlage Müss, Fussach</span>
          </div>
        </div>
      </section>

      {/* Trainerteam */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-site">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-8 text-center">
            Trainerteam
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            {staff.map((m) => (
              <StaffCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Spieler */}
      <section className="section-padding bg-gray-50">
        <div className="container-site">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2 text-center">
            Kader 2025/2026
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
            Der Kader
          </h2>

          {/* Tipp */}
          <p className="text-center text-xs text-gray-400 mb-10 -mt-6">
            Hover über eine Karte für das Action-Bild
          </p>

          {groups.map((group) => {
            const groupPlayers = players.filter((p) => p.group === group);
            if (!groupPlayers.length) return null;
            const s = groupStyle[group];
            return (
              <div key={group} className="mb-12">
                {/* Gruppen-Header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className={`w-3 h-3 rounded-full ${s.dot}`} />
                  <h3 className="text-lg font-extrabold text-gray-900">{group}</h3>
                  <span className="text-xs text-gray-400 font-medium">
                    {groupPlayers.length} Spieler
                  </span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {groupPlayers.map((p) => (
                    <PlayerCard key={p.name} player={p} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </main>
  );
}
