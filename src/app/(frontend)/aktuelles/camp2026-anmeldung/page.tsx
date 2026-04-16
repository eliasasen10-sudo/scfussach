import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Mail, ArrowLeft, Users, Clock, CheckCircle, Star, Euro } from "lucide-react";

export const metadata: Metadata = {
  title: "CAMP2026 – Anmeldung jetzt möglich | SC Fussach",
  description:
    "Das SC Fussach Fußballcamp 2026 – vom 14. bis 18. Juli 2026 auf der Sportanlage Müss. Professionelles Training für alle Altersklassen. Jetzt anmelden!",
};

export default function Camp2026ArtikelPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <Image
            src="/images/logos/camp-logo.png"
            alt=""
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary/80 to-primary/60" />
        <div className="absolute inset-0 flex flex-col justify-end container-site pb-10">
          <Link
            href="/aktuelles"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-4 transition-colors w-fit"
          >
            <ArrowLeft size={14} />
            Zurück zu Aktuelles
          </Link>
          <span className="text-xs font-bold tracking-widest uppercase text-white/50 mb-2">
            Veranstaltung · Sommer 2026
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            CAMP2026 –<br />
            <span className="text-white/60">Anmeldung jetzt möglich!</span>
          </h1>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-primary py-5">
        <div className="container-site">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
            <span className="flex items-center gap-2"><Calendar size={14} className="text-white/50" />14.–18. Juli 2026</span>
            <span className="w-px h-4 bg-white/20 hidden sm:block" />
            <span className="flex items-center gap-2"><Clock size={14} className="text-white/50" />täglich 9:00 – 16:00 Uhr</span>
            <span className="w-px h-4 bg-white/20 hidden sm:block" />
            <span className="flex items-center gap-2"><MapPin size={14} className="text-white/50" />Sportanlage Müss, Fussach</span>
            <span className="w-px h-4 bg-white/20 hidden sm:block" />
            <span className="flex items-center gap-2"><Users size={14} className="text-white/50" />U7 bis U18</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-site max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-1">
              <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Das Camp</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 leading-tight">
                5 Tage Fußball, Teamgeist & unvergessliche Erlebnisse
              </h2>
              <div className="text-gray-600 leading-relaxed space-y-4 text-base">
                <p>
                  Das <strong className="text-gray-900">CAMP2026</strong> des SC Fussach geht in die nächste Runde! Vom 14. bis 18. Juli 2026 erwartet Kinder und Jugendliche von U7 bis U18 ein professionelles Fußball-Trainingsprogramm auf der Sportanlage Müss in Fussach.
                </p>
                <p>
                  In fünf intensiven Tagen trainieren die Teilnehmer unter Anleitung von <strong className="text-gray-900">qualifizierten Trainern des SC Fussach</strong> – täglich von 9:00 bis 16:00 Uhr. Technik, Taktik, Zweikampf und Spielformen stehen ebenso auf dem Programm wie Spaß, neue Freundschaften und jede Menge gemeinsame Erlebnisse.
                </p>
                <p>
                  Egal ob Anfänger oder erfahrener Spieler – das Camp richtet sich an alle Levels und bietet jedem die Chance, sich weiterzuentwickeln und den Fußball noch mehr zu lieben.
                </p>
              </div>
            </div>
            <div className="shrink-0 mx-auto">
              <div className="w-44 h-52 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center p-4 shadow-sm">
                <Image
                  src="/images/logos/camp-logo.png"
                  alt="CAMP2026 Logo"
                  width={160}
                  height={180}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programm */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="container-site max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3 text-center">Ablauf</p>
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">Ein Tag im Camp</h2>
          <div className="space-y-3">
            {[
              { time: "09:00", title: "Ankommen & Aufwärmen", desc: "Begrüßung, Dehnen, Koordinationsübungen" },
              { time: "09:30", title: "Techniktraining", desc: "Ballkontrolle, Dribbling, Passen und Schusstraining in kleinen Gruppen" },
              { time: "11:00", title: "Taktik & Spielformen", desc: "Positionsspiele, Pressing, Aufbauspiel – altersgerecht erklärt" },
              { time: "12:30", title: "Mittagspause", desc: "Verpflegung, Erholen, freies Kicken" },
              { time: "13:30", title: "Zweikampftraining & Challenges", desc: "1 gegen 1, Turniere und lustige Wettkämpfe" },
              { time: "15:00", title: "Abschlussspiel", desc: "Täglich ein Spielchen zum Abschluss – das Highlight des Tages" },
              { time: "16:00", title: "Abholung", desc: "Ende des Trainingstags" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
                <div className="shrink-0">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-lg whitespace-nowrap">{item.time}</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Was ist dabei */}
      <section className="py-12 bg-white">
        <div className="container-site max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3 text-center">Inklusive</p>
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">Was ist dabei?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "5 Tage professionelles Fußballtraining",
              "Qualifizierte Trainer des SC Fussach",
              "Altersgerechte Gruppen (U7–U18)",
              "Technik, Taktik & Zweikampf",
              "Tägliches Abschlussspiel",
              "Spaß, Teamgeist & neue Freundschaften",
              "Verpflegung während der Mittagspause",
              "Camp-Urkunde für alle Teilnehmer",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl border border-gray-100 p-3.5">
                <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                <span className="text-sm text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="container-site max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3 text-center">Details</p>
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">Camp-Infos auf einen Blick</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Calendar, label: "Datum", value: "14. – 18. Juli 2026\n(Montag bis Freitag)", color: "bg-blue-50 text-blue-600" },
              { icon: Clock, label: "Uhrzeit", value: "täglich 9:00 – 16:00 Uhr", color: "bg-purple-50 text-purple-600" },
              { icon: MapPin, label: "Ort", value: "Sportanlage Müss\nMüss 99, 6972 Fussach", color: "bg-emerald-50 text-emerald-600" },
              { icon: Users, label: "Altersgruppen", value: "U7, U8, U9, U10, U11\nU12, U14, U16, U18", color: "bg-amber-50 text-amber-600" },
              { icon: Euro, label: "Teilnahmegebühr", value: "Auf Anfrage\nFrühbucherrabatt möglich", color: "bg-rose-50 text-rose-600" },
              { icon: Star, label: "Veranstalter", value: "SC Fussach\noffice@scfussach.at", color: "bg-primary/10 text-primary" },
            ].map(({ icon: Icon, label, value, color }) => (
              <div key={label} className="flex items-start gap-4 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{label}</p>
                  <p className="text-sm font-semibold text-gray-900 mt-0.5 whitespace-pre-line">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary">
        <div className="container-site max-w-xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Jetzt einen Platz sichern!
          </h2>
          <p className="text-white/70 text-sm leading-relaxed mb-8">
            Die Plätze sind begrenzt – melde dich so früh wie möglich an.<br />
            Schreib uns einfach eine E-Mail mit Name, Alter und Jahrgang.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:office@scfussach.at?subject=CAMP2026 Anmeldung"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:bg-gray-100 transition-colors text-sm shadow-lg"
            >
              <Mail size={16} />
              office@scfussach.at
            </a>
            <Link
              href="/camp2026"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-colors text-sm"
            >
              Mehr zum Camp
            </Link>
          </div>
          <p className="text-white/40 text-xs mt-4">
            Name, Alter und Jahrgang angeben
          </p>
        </div>
      </section>

    </main>
  );
}
