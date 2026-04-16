import type { Metadata } from "next";
import NewsCard from "@/components/shared/NewsCard";
import NextMatchBanner from "@/components/shared/NextMatchBanner";
import InstagramGrid from "@/components/shared/InstagramGrid";
import { newsItems } from "@/lib/data/news";

export const metadata: Metadata = {
  title: "Aktuelles",
  description: "Neuigkeiten und Berichte vom SC Fussach.",
};

export default function AktuellesPage() {
  return (
    <main className="section-padding min-h-screen">
      <div className="container-site">
        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
            Neuigkeiten
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Aktuelles
          </h1>
        </div>

        {/* Nächstes Spiel Banner */}
        <NextMatchBanner />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, i) => (
            <NewsCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Instagram Feed */}
        <InstagramGrid />
      </div>
    </main>
  );
}
