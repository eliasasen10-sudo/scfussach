import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Euro, Mail, Star, ArrowLeft, Users, Clock, CheckCircle, Zap, Trophy, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Jannik Freestyle – Workshop & Show 7. Juli 2026 | SC Fussach",
  description:
    "Deutschlands Fußball-Freestyler Nr. 1 kommt nach Fussach! Workshop, Show & Action am 7. Juli 2026 auf der Sportanlage Müss. Jetzt anmelden!",
};

export default function JannikFreestylePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden bg-primary-dark">
        <Image
          src="/images/news/jannik.png"
          alt="Jannik Freestyle"
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end container-site pb-10">
          <Link
            href="/aktuelles"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-4 transition-colors w-fit"
          >
            <ArrowLeft size={14} />
            Zurück zu Aktuelles
          </Link>
          <span className="text-xs font-bold tracking-widest uppercase text-white/50 mb-2">
            Veranstaltung · 7. Juli 2026
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Jannik Freestyle<br />
            <span className="text-white/60">kommt nach Fussach!</span>
          </h1>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-primary py-5">
        <div className="container-site">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
            <span className="flex items-center gap-2"><Calendar size={14} className="text-white/50" />Di., 7. Juli 2026</span>
            <span className="w-px h-4 bg-white/20 hidden sm:block" />
            <span className="flex items-center gap-2"><Clock size={14} className="text-white/50" />17:00 – 19:30 Uhr</span>
            <span className="w-px h-4 bg-white/20 hidden sm:block" />
            <span className="flex items-center gap-2"><MapPin size={14} className="text-white/50" />Sportanlage Müss, Fussach</span>
            <span className="w-px h-4 bg-white/20 hidden sm:block" />
            <span className="flex items-center gap-2"><Euro size={14} className="text-white/50" />29 EUR</span>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-site max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Das Event</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 leading-tight">
            Ein Tag voller Tricks, Show und Inspiration
          </h2>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4 text-base">
            <p>
              Im Sommer 2026 holt der SC Fussach ein echtes Highlight nach Vorarlberg: <strong className="text-gray-900">Jannik Freestyle</strong> – Deutschlands bekanntester Fußball-Freestyler und Social-Media-Star mit Millionen Followern – kommt persönlich auf die Sportanlage Müss in Fussach.
            </p>
            <p>
              In einem <strong className="text-gray-900">2,5-stündigen Workshop</strong> zeigt Jannik seine spektakulärsten Tricks, bringt euch die Grundlagen des Freestyle-Fußballs bei und sorgt mit einer fulminanten Show für unvergessliche Momente. Jeder Teilnehmer bekommt die Chance, direkt mit Jannik zu interagieren, Tricks zu erlernen und sich zu messen.
            </p>
            <p>
              Als besonderes Highlight ist <strong className="text-gray-900">Lucas Kamps</strong> als Special Guest dabei – DFB-lizenzierter Fußball-Mentaltrainer, der zeigt, wie mentale Stärke den Unterschied auf dem Platz macht.
            </p>
          </div>
        </div>
      </section>

      {/* Programm */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="container-site max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3 text-center">Ablauf</p>
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">Programm des Abends</h2>
          <div className="space-y-3">
            {[
              { time: "17:00", title: "Einlass & Begrüßung", desc: "Ankommen, Platz nehmen, erste Eindrücke sammeln" },
              { time: "17:15", title: "Freestyle-Show", desc: "Jannik zeigt sein komplettes Repertoire – Balljonglage, Tricks und spektakuläre Moves" },
              { time: "17:45", title: "Workshop Part 1 – Grundlagen", desc: "Schritt-für-Schritt-Anleitung zu ersten Freestyle-Tricks für alle Levels" },
              { time: "18:20", title: "Mental Game mit Lucas Kamps", desc: "Der DFB-lizenzierte Mentaltrainer erklärt, wie Kopf und Körper zusammenspielen" },
              { time: "18:45", title: "Workshop Part 2 – Challenges", desc: "Wer schafft den coolsten Trick? Challenges mit Gewinnen warten!" },
              { time: "19:15", title: "Autogramme, Selfies & Merch", desc: "Persönliche Zeit mit Jannik und Lucas – Fotos, Autogramme, Merchandise-Artikel" },
              { time: "19:30", title: "Ende der Veranstaltung", desc: "Ein unvergesslicher Abend geht zu Ende" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
                <div className="shrink-0 text-right">
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

      {/* Über Jannik + Über Lucas */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-site max-w-3xl mx-auto space-y-10">

          {/* Jannik */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shrink-0">
              <Zap size={28} className="text-white" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-primary mb-1">Über den Gast</p>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">Jannik Freestyle</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Jannik ist Deutschlands Fußball-Freestyler Nr. 1 und begeistert auf Social Media Millionen von Fans mit seinen spektakulären Tricks und Challenges. Er ist bekannt für seine einzigartigen Freestyle-Moves, die er in jahrelangem Training perfektioniert hat. Mit seiner offenen und motivierenden Art ist er der perfekte Host für Workshops aller Altersklassen.
              </p>
            </div>
          </div>

          <div className="h-px bg-gray-100" />

          {/* Lucas */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center shrink-0">
              <Trophy size={28} className="text-white" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-emerald-600 mb-1">Special Guest</p>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">Lucas Kamps – Mentaltrainer</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lucas Kamps ist DFB-lizenzierter Fußball-Mentaltrainer und hilft Spielern aller Niveaus dabei, ihre mentale Stärke zu entwickeln. Er erklärt, wie man mit Druck umgeht, Selbstvertrauen aufbaut und auch in schwierigen Situationen fokussiert bleibt. Ein echtes Bonus-Highlight des Abends!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Was ist dabei */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="container-site max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3 text-center">Inklusive</p>
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">Was ist dabei?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Live Freestyle-Show von Jannik",
              "2,5-stündiger Workshop",
              "Tricks lernen für jedes Level",
              "Challenges mit Gewinnchancen",
              "Mental-Session mit Lucas Kamps",
              "Persönliche Fragerunde",
              "Autogramme & Selfies",
              "Merch-Artikel erhältlich",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 p-3.5 shadow-sm">
                <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                <span className="text-sm text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Karten */}
      <section className="py-12 bg-white">
        <div className="container-site max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3 text-center">Details</p>
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">Event-Infos auf einen Blick</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Calendar, label: "Datum", value: "Dienstag, 7. Juli 2026", color: "bg-blue-50 text-blue-600" },
              { icon: Clock, label: "Uhrzeit", value: "17:00 – 19:30 Uhr", color: "bg-purple-50 text-purple-600" },
              { icon: MapPin, label: "Ort", value: "Sportanlage Müss\nMüss 99, 6972 Fussach", color: "bg-emerald-50 text-emerald-600" },
              { icon: Euro, label: "Teilnahmegebühr", value: "29 EUR pro Person", color: "bg-amber-50 text-amber-600" },
              { icon: Users, label: "Zielgruppe", value: "Alle Altersklassen\nAnfänger bis Fortgeschrittene", color: "bg-rose-50 text-rose-600" },
              { icon: Heart, label: "Veranstalter", value: "SC Fussach\nevent@scfussach.at", color: "bg-primary/10 text-primary" },
            ].map(({ icon: Icon, label, value, color }) => (
              <div key={label} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-4 border border-gray-100">
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

      {/* CTA Anmeldung */}
      <section className="py-14 bg-primary">
        <div className="container-site max-w-xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Sichere dir jetzt deinen Platz!
          </h2>
          <p className="text-white/70 text-sm leading-relaxed mb-8">
            Die Plätze sind begrenzt – schnell sein lohnt sich!<br />
            Anmeldung per E-Mail mit deinem Namen, Alter und Anzahl der Personen.
          </p>
          <a
            href="mailto:event@scfussach.at?subject=Anmeldung Jannik Freestyle Workshop 7. Juli 2026"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:bg-gray-100 transition-colors text-sm shadow-lg"
          >
            <Mail size={16} />
            event@scfussach.at
          </a>
          <p className="text-white/40 text-xs mt-4">
            Bitte Name, Alter und Anzahl Personen angeben
          </p>
        </div>
      </section>

    </main>
  );
}
