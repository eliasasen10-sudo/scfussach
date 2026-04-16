import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, User, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Neuzugang Markus Siller | SC Fussach",
  description: "Offensivspieler Markus Siller wechselt ab der Saison 2026/27 zum SC Fussach.",
};

export default function SillerPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary/70 to-primary/50" />
        <div className="absolute inset-0 flex flex-col justify-end container-site pb-10">
          <Link
            href="/aktuelles"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-4 transition-colors w-fit"
          >
            <ArrowLeft size={14} />
            Zurück zu Aktuelles
          </Link>
          <span className="text-xs font-bold tracking-widest uppercase text-white/50 mb-2">
            Transfer · Saison 2026/27
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Herzlich willkommen,<br />
            <span className="text-white/60">Markus Siller! 👋</span>
          </h1>
        </div>
      </section>

      {/* Badge-Leiste */}
      <section className="bg-primary py-4">
        <div className="container-site">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
            <span className="flex items-center gap-2"><User size={14} className="text-white/50" />Markus Siller</span>
            <span className="w-px h-4 bg-white/20 hidden sm:block" />
            <span className="flex items-center gap-2"><Star size={14} className="text-white/50" />Offensivspieler · 20 Jahre</span>
            <span className="w-px h-4 bg-white/20 hidden sm:block" />
            <span className="flex items-center gap-2"><MapPin size={14} className="text-white/50" />Wechsel von FC Lauterach</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 bg-white">
        <div className="container-site max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-start">

            {/* Bild */}
            <div className="w-full md:w-64 shrink-0">
              <div className="rounded-2xl overflow-hidden shadow-lg ring-4 ring-primary/10">
                <Image
                  src="/images/Players/MarkusSiller.jpg"
                  alt="Markus Siller"
                  width={600}
                  height={900}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
              {/* Steckbrief */}
              <div className="mt-4 bg-gray-50 rounded-2xl border border-gray-100 p-4 space-y-2.5">
                {[
                  { label: "Name", value: "Markus Siller" },
                  { label: "Alter", value: "20 Jahre" },
                  { label: "Position", value: "Offensivspieler" },
                  { label: "Kommt von", value: "FC Lauterach" },
                  { label: "Ab", value: "Saison 2026/27" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-gray-400 font-medium">{label}</span>
                    <span className="text-gray-900 font-bold text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Neuzugang</p>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6 leading-tight">
                Junges Talent mit großer Erfahrung!
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4 text-base">
                <p>
                  <strong className="text-gray-900">Herzlich willkommen auf der Sportanlage Müss!</strong> Mit <strong className="text-gray-900">Markus Siller (20)</strong> darf der SCF seinen zweiten Neuzugang für die Saison 2026/27 präsentieren! Der junge Offensivspieler wechselt von seinem Stammverein <strong className="text-gray-900">FC Lauterach</strong> zum SC Fussach.
                </p>
                <p>
                  Markus durchlief zuvor auch die Nachwuchsmannschaften von <strong className="text-gray-900">Schwarz Weiß Bregenz</strong> und sammelte dort wertvolle Erfahrung. Trotz seines jungen Alters bringt er bereits beeindruckende Erfahrung aus der <strong className="text-gray-900">Regional- und Eliteliga</strong> mit – eine echte Verstärkung für unser Offensivspiel!
                </p>
                <p>
                  Herzlich willkommen in der SCF-Familie, Markus! Wir freuen uns auf viele gemeinsame und erfolgreiche Spiele in Blau und Weiß! 🔵⚪
                </p>
              </div>

              {/* Stationen */}
              <div className="mt-8">
                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">Frühere Stationen</p>
                <div className="flex flex-wrap gap-2">
                  {["FC Lauterach", "Schwarz Weiß Bregenz (Nachwuchs)"].map((club) => (
                    <span key={club} className="px-3 py-1.5 bg-primary/5 border border-primary/10 text-primary text-xs font-bold rounded-full">
                      {club}
                    </span>
                  ))}
                </div>
              </div>

              {/* Liga-Erfahrung */}
              <div className="mt-6">
                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Liga-Erfahrung</p>
                <div className="flex flex-wrap gap-2">
                  {["Regionalliga", "Eliteliga"].map((liga) => (
                    <span key={liga} className="px-3 py-1.5 bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                      {liga}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hashtags */}
              <div className="mt-6 flex gap-2 flex-wrap">
                <span className="text-xs text-primary/50 font-bold">#alwaysblue</span>
                <span className="text-xs text-primary/50 font-bold">#uesraweag</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
