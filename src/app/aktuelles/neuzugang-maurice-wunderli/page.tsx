import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, User, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Neuzugang Maurice Wunderli | SC Fussach",
  description: "Torjäger Maurice Wunderli wechselt ab der Saison 2026/27 zum SC Fussach.",
};

export default function WunderliPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden bg-primary-dark">
        <Image
          src="/images/Players/Wunderli.jpg"
          alt="Maurice Wunderli"
          fill
          priority
          className="object-cover opacity-50"
          style={{ objectPosition: "50% 50%" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/50 to-transparent" />
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
            <span className="text-white/60">Maurice Wunderli! 👋</span>
          </h1>
        </div>
      </section>

      {/* Badge-Leiste */}
      <section className="bg-primary py-4">
        <div className="container-site">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
            <span className="flex items-center gap-2"><User size={14} className="text-white/50" />Maurice Wunderli</span>
            <span className="w-px h-4 bg-white/20 hidden sm:block" />
            <span className="flex items-center gap-2"><Star size={14} className="text-white/50" />Stürmer · 28 Jahre</span>
            <span className="w-px h-4 bg-white/20 hidden sm:block" />
            <span className="flex items-center gap-2"><MapPin size={14} className="text-white/50" />Wechsel von FC Balzers</span>
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
                  src="/images/Players/Wunderli.jpg"
                  alt="Maurice Wunderli"
                  width={600}
                  height={900}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
              {/* Steckbrief */}
              <div className="mt-4 bg-gray-50 rounded-2xl border border-gray-100 p-4 space-y-2.5">
                {[
                  { label: "Name", value: "Maurice Wunderli" },
                  { label: "Alter", value: "28 Jahre" },
                  { label: "Position", value: "Stürmer" },
                  { label: "Kommt von", value: "FC Balzers (FL)" },
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
                Die Tinte ist trocken – Mauro stürmt für den SCF!
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4 text-base">
                <p>
                  <strong className="text-gray-900">Herzlich willkommen auf der Sportanlage Müss!</strong> Der SC Fussach freut sich, seinen ersten Neuzugang für die Saison 2026/27 vorzustellen: <strong className="text-gray-900">Maurice Wunderli (28)</strong> wechselt vom FC Balzers aus dem Fürstentum Liechtenstein zum SCF und wird ab sofort die Offensive der Erkinger-Elf verstärken.
                </p>
                <p>
                  Maurice bringt eine beeindruckende Vita mit: Zuvor spielte er unter anderem für den <strong className="text-gray-900">VfB Hohenems</strong>, den <strong className="text-gray-900">FC Lauterach</strong>, den <strong className="text-gray-900">USV Eschen/Mauren</strong> und den <strong className="text-gray-900">FC Egg</strong>. Mit seiner Torjäger-Qualität und seiner Erfahrung ist er eine echte Verstärkung für unser Angriffsspiel.
                </p>
                <p>
                  Herzlich willkommen in der SCF-Familie, Mauro! Wir freuen uns auf viele gemeinsame Spiele und zahlreiche Tore! 🔵⚪
                </p>
              </div>

              {/* Stationen */}
              <div className="mt-8">
                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">Frühere Stationen</p>
                <div className="flex flex-wrap gap-2">
                  {["FC Balzers", "VfB Hohenems", "FC Lauterach", "USV Eschen/Mauren", "FC Egg"].map((club) => (
                    <span key={club} className="px-3 py-1.5 bg-primary/5 border border-primary/10 text-primary text-xs font-bold rounded-full">
                      {club}
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
