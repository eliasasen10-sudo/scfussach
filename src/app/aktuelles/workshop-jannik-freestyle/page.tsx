import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Euro, Mail, Star, ArrowLeft, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Jannik Freestyle – Event 7. Juli 2026 | SC Fussach",
  description:
    "Deutschlands Fußball-Freestyler Nr. 1 kommt nach Fussach! Workshop, Show & Action am 7. Juli 2026 auf der Sportanlage Müss.",
};

const highlights = [
  "Freestyle-Show von Deutschlands Fußball-Freestyler Nr. 1 – Jannik Freestyle",
  "Special Guest: Lucas Kamps, DFB-lizenzierter Fußball-Mentaltrainer",
  "Tricks erlernen, Challenges bestreiten",
  "Fragerunde, Autogramme, Merch-Artikel & Selfies",
];

export default function JannikFreestylePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-primary">
        <div className="container-site">
          <Link
            href="/aktuelles"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} />
            Zurück zu Aktuelles
          </Link>

          <span className="text-xs font-bold tracking-widest uppercase text-white/60 mb-3 block">
            Veranstaltung
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Jannik Freestyle<br />
            <span className="text-white/50">kommt nach Fussach!</span>
          </h1>
          <p className="text-white/70 max-w-xl text-base leading-relaxed">
            Im Juli 2026 erwartet euch ein echtes Highlight in Fussach. Jannik Freestyle,
            Deutschlands Fußball-Freestyler Nr. 1, ist zu Gast und bringt euch in einem
            2,5-stündigen Workshop seine Tricks bei!
          </p>
        </div>
      </section>

      {/* Bild + Infos */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Bild */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/news/jannik.png"
                alt="Jannik Freestyle"
                width={700}
                height={500}
                className="w-full h-auto"
              />
            </div>

            {/* Details */}
            <div>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Erlebe ein einzigartiges Fußball-Event mit Show, Workshop und jeder Menge Action!
              </p>

              {/* Event-Daten */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: Calendar, label: "Termin", value: "Dienstag, 7. Juli 2026, ab 17:00 Uhr" },
                  { icon: MapPin, label: "Ort", value: "Sportanlage Müss, Müss 99, 6972 Fussach" },
                  { icon: Euro, label: "Teilnahmegebühr", value: "29 EUR" },
                  { icon: Users, label: "Für wen?", value: "Alle Altersklassen willkommen" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                    <div className="w-9 h-9 rounded-lg bg-primary-light flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{label}</p>
                      <p className="text-sm font-semibold text-gray-900 mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="mailto:event@scfussach.at?subject=Anmeldung Jannik Freestyle Workshop"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-mid transition-colors text-sm w-full justify-center"
              >
                <Mail size={16} />
                Jetzt anmelden – event@scfussach.at
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-gray-50">
        <div className="container-site max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block text-center">
            Was euch erwartet
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Highlights</h2>

          <div className="space-y-3">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-2xl border border-gray-100 p-5 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Star size={14} className="text-white" fill="white" />
                </div>
                <p className="text-sm text-gray-700 font-medium leading-relaxed">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anmeldung */}
      <section className="section-padding bg-primary">
        <div className="container-site text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-3">Sicher dir deinen Platz!</h2>
          <p className="text-white/70 text-sm mb-6">
            Anmeldungen per E-Mail oder über den QR-Code. Die Plätze sind begrenzt – schnell sein lohnt sich!
          </p>
          <a
            href="mailto:event@scfussach.at?subject=Anmeldung Jannik Freestyle Workshop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-colors text-sm"
          >
            <Mail size={16} />
            event@scfussach.at
          </a>
        </div>
      </section>
    </main>
  );
}
