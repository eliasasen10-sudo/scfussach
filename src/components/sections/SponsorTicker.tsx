"use client";

import Image from "next/image";
import { sponsors } from "@/lib/data/sponsors";

export default function SponsorTicker() {
  // Alle Sponsoren mit Bild
  const items = sponsors.filter(s => s.imageUrl);
  // Duplizieren für nahtlosen Loop
  const doubled = [...items, ...items];

  return (
    <section className="bg-gray-900 py-8 overflow-hidden border-y border-white/5">
      <div className="relative flex">
        <div
          className="flex items-center gap-16 animate-ticker whitespace-nowrap"
          style={{ animationDuration: "30s" }}
        >
          {doubled.map((s, i) => (
            <a
              key={i}
              href={s.website ?? undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center justify-center opacity-40 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0"
              style={{ width: 120, height: 50 }}
            >
              <Image
                src={s.imageUrl!}
                alt={s.name}
                width={120}
                height={50}
                className="object-contain w-full h-full"
                unoptimized
              />
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker linear infinite;
        }
      `}</style>
    </section>
  );
}
