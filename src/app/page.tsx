import Hero from "@/components/sections/Hero";
import NewsGrid from "@/components/sections/NewsGrid";
import SponsorGrid from "@/components/sections/SponsorGrid";
import SponsorTicker from "@/components/sections/SponsorTicker";
import Club100Section from "@/components/sections/Club100";
import SpielplanClient from "@/app/spielplan/SpielplanClient";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <NewsGrid />

      {/* Live-Daten */}
      <section className="section-padding bg-gray-50">
        <div className="container-site">
          <div className="mb-8">
            <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
              Live-Daten
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900">Spielplan & Tabelle</h2>
          </div>
          <SpielplanClient />
        </div>
      </section>

      <Club100Section />
      <SponsorGrid />
      <SponsorTicker />
    </main>
  );
}
