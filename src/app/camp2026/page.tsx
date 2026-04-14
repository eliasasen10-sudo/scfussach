import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Users, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "CAMP2026 – Fußballcamp SC Fussach",
  description: "Das SC Fussach Fußballcamp 2026 – professionelles Training für alle Altersklassen.",
};

export default function Camp2026Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-primary">
        <div className="container-site">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <span className="text-xs font-bold tracking-widest uppercase text-white/60 mb-3 block">
                Sommer 2026
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                CAMP<span className="text-white/40">2026</span>
              </h1>
              <p className="text-white/70 text-base leading-relaxed mb-8 max-w-md">
                Das Fussacher Fußballcamp geht in die nächste Runde! Professionelles
                Training, Teamgeist und unvergessliche Erlebnisse – für alle
                Altersklassen.
              </p>
              <Link
                href="mailto:office@scfussach.at?subject=CAMP2026 Anmeldung"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-primary font-bold rounded-xl hover:bg-primary-light transition-all duration-200 text-sm"
              >
                <Mail size={16} />
                Jetzt anmelden
              </Link>
            </div>
            {/* Camp logo */}
            <div className="shrink-0 w-48 h-56 bg-white rounded-2xl flex items-center justify-center p-4 shadow-lg">
              <div className="relative w-full h-full">
                <Image
                  src="/images/logos/camp-logo.png"
                  alt="CAMP2026 Logo"
                  fill
                  className="object-contain"
                  sizes="192px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Calendar, title: "Termin", value: "14.–18. Juli 2026" },
              { icon: MapPin, title: "Ort", value: "Sportplatz Fussach" },
              { icon: Users, title: "Zielgruppe", value: "U7 bis U18" },
            ].map(({ icon: Icon, title, value }) => (
              <div
                key={title}
                className="bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mx-auto mb-4">
                  <Icon size={20} className="text-primary" />
                </div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                  {title}
                </div>
                <div className="text-lg font-bold text-gray-900">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
