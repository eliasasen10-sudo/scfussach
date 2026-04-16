import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Heart, Users, Star, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Nachwuchs – SC Fussach",
  description:
    "Der SC Fussach Nachwuchs – ca. 50 Kinder trainieren mehrmals pro Woche mit Begeisterung. Jetzt zum Probetraining anmelden!",
};

const values = [
  { icon: Shield, label: "Respekt" },
  { icon: Users, label: "Teamgeist" },
  { icon: Star, label: "Fairness" },
  { icon: Heart, label: "Hilfsbereitschaft" },
];

export default function NachwuchsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <div className="bg-primary-dark text-white py-20 md:py-28">
        <div className="container-site">
          <Link
            href="/mannschaften"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Alle Mannschaften
          </Link>
          <span className="text-xs font-bold tracking-widest uppercase text-emerald-400 mb-3 block">
            Nachwuchs
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            SC Fussach Nachwuchs
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Vorarlberger Nachwuchsliga · ca. 50 Kinder · mehrmals pro Woche
          </p>
        </div>
      </div>

      <div className="container-site py-16 space-y-16">
        {/* Intro */}
        <section className="max-w-3xl">
          <p className="text-gray-700 text-lg leading-relaxed">
            Der Nachwuchs des SC Fussach ist ein wichtiger Teil unseres Vereins und richtet sich an
            Kinder, die Freude am Fußball haben und sich gerne aktiv mit dem Ball bewegen. In unserem
            Nachwuchs haben wir derzeit{" "}
            <strong className="text-primary">ca. 50 Kinder</strong>, die mit Begeisterung und
            Engagement mehrmals in der Woche am Trainings- und Spielbetrieb teilnehmen.
          </p>
        </section>

        {/* Training */}
        <section className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Unser Trainingsansatz</h2>
          <p className="text-gray-600 leading-relaxed">
            Im Mittelpunkt unserer Nachwuchsarbeit stehen vor allem <strong>Spiel und Spaß</strong>,
            viele Ballkontakte und Torabschlüsse, damit die Kinder ihre fußballerischen Fähigkeiten
            entwickeln und ein gutes Gefühl für den Ball bekommen. Unsere größtenteils vom{" "}
            <strong>ÖFB ausgebildeten Trainer</strong> achten auf ein altersgerechtes Training, bei
            dem sich jedes Kind entsprechend seinen Möglichkeiten entfalten und weiterentwickeln kann.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Der Leistungsgedanke steht hier noch nicht vollends im Vordergrund, dennoch wünschen wir
            uns von unseren Spielern Interesse am Fußball, Freude am Lernen und die Bereitschaft,
            sich im Team einzubringen.
          </p>
        </section>

        {/* Werte */}
        <section className="max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Unsere Werte</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {values.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon size={20} className="text-primary" />
                </div>
                <span className="text-sm font-semibold text-gray-700">{label}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">
            Diese Werte prägen nicht nur das Miteinander auf dem Platz, sondern auch die persönliche
            Entwicklung der Kinder. Der SC Fussach möchte fußballbegeisterten Kindern einen Ort
            bieten, an dem sie sich sportlich und menschlich weiterentwickeln und Teil einer
            Gemeinschaft werden können.
          </p>
        </section>

        {/* CTA Probetraining */}
        <section className="bg-primary rounded-2xl p-8 md:p-12 text-white text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Interesse?</h2>
          <p className="text-white/80 mb-6 text-lg">
            Meldet euch zum Probetraining an – wir freuen uns auf euch!
          </p>
          <a
            href="mailto:office@scfussach.at"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold rounded-xl hover:bg-primary-light transition-colors duration-200"
          >
            Probetraining anfragen
          </a>
        </section>
      </div>
    </main>
  );
}
