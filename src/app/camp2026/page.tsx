import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Mail, Users, Clock, CheckCircle, Star, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "CAMP2026 – Fußballcamp SC Fussach",
  description: "Das SC Fussach Fußballcamp 2026 – 5 Tage professionelles Training für U7 bis U18. Vom 14. bis 18. Juli 2026 auf der Sportanlage Müss in Fussach.",
};

export default function Camp2026Page() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="relative min-h-[60vh] flex flex-col justify-end overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <Image src="/images/logos/camp-logo.png" alt="" width={700} height={700} className="object-contain" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary/70 to-primary/50" />
        <div className="relative z-10 container-site pb-16 pt-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Sommer 2026 · Anmeldung offen
          </div>
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-2xl p-4 shadow-2xl">
              <Image
                src="/images/logos/camp-logo.png"
                alt="CAMP2026"
                width={160}
                height={130}
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-none tracking-tight mb-4">
            CAMP<span className="text-white/30">2026</span>
          </h1>
          <p className="text-white/70 text-lg max-w-md mx-auto mb-8">
            5 Tage Fußball, Training & Teamgeist auf der Sportanlage Müss in Fussach.
          </p>
          <a
            href="mailto:office@scfussach.at?subject=CAMP2026 Anmeldung"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:bg-gray-100 transition-colors text-sm shadow-xl"
          >
            <Mail size={16} />
            Jetzt anmelden
          </a>
        </div>
        <div className="relative z-10 flex justify-center pb-6 text-white/30">
          <ChevronDown size={20} />
        </div>
      </section>

      {/* Fakten */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Calendar, label: "Termin", value: "14.–18. Juli 2026" },
              { icon: Clock, label: "Täglich", value: "9:00 – 16:00 Uhr" },
              { icon: MapPin, label: "Ort", value: "Sportanlage Müss" },
              { icon: Users, label: "Für wen", value: "U7 bis U18" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-gray-50 rounded-2xl border border-gray-100 p-5 text-center">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon size={18} className="text-primary" />
                </div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
                <p className="font-bold text-gray-900 text-sm leading-tight">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Über das Camp */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3 text-center">Über das Camp</p>
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Was dich erwartet</h2>
          <div className="text-gray-600 leading-relaxed space-y-4 text-base mb-10">
            <p>
              Das <strong className="text-gray-900">SC Fussach CAMP2026</strong> bietet Kindern und Jugendlichen von U7 bis U18 fünf intensive Tage mit professionellem Fußballtraining. Unsere erfahrenen Trainer des SC Fussach begleiten die Teilnehmer durch ein abwechslungsreiches Programm aus Technik, Taktik, Zweikampf und Spielformen.
            </p>
            <p>
              Das Camp ist nach Altersgruppen aufgeteilt, damit jede Trainingseinheit auf das jeweilige Niveau angepasst ist – vom kleinen Steppke bei der U7 bis zum erfahrenen Jugendspieler bei der U18. Neben dem sportlichen Aspekt stehen auch Teamgeist, neue Freundschaften und einfach jede Menge Spaß im Vordergrund.
            </p>
          </div>

          {/* Inhalte */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Techniktraining: Dribbling, Passen, Schuss",
              "Taktik & Positionsspiele",
              "Zweikampftraining",
              "Torwarttraining",
              "Tägliches Abschlussspiel",
              "Challenges mit Gewinnmöglichkeiten",
              "Mittagsverpflegung inklusive",
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

      {/* Tagesablauf */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="container-site max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3 text-center">Tagesablauf</p>
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">Ein typischer Camptag</h2>
          <div className="space-y-3">
            {[
              { time: "09:00", title: "Ankommen & Aufwärmen", desc: "Begrüßung, Dehnen, Koordination" },
              { time: "09:30", title: "Techniktraining", desc: "Ballkontrolle, Dribbling, Passen, Schuss" },
              { time: "11:00", title: "Taktik & Spielformen", desc: "Positionsspiele und altersgerechte Taktikeinheiten" },
              { time: "12:30", title: "Mittagspause", desc: "Verpflegung, Erholung, freies Kicken" },
              { time: "13:30", title: "Zweikampf & Challenges", desc: "1 gegen 1, lustige Wettbewerbe mit Gewinnmöglichkeiten" },
              { time: "15:00", title: "Abschlussspiel", desc: "Täglich ein Spielchen – das Highlight!" },
              { time: "16:00", title: "Abholung", desc: "Ende des Trainingstages" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
                <div className="shrink-0">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-lg whitespace-nowrap">{item.time}</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Altersgruppen */}
      <section className="py-14 bg-white">
        <div className="container-site max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3 text-center">Altersgruppen</p>
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">Für jeden die passende Gruppe</h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {["U7", "U8", "U9", "U10", "U11", "U12", "U14", "U16", "U18"].map((u) => (
              <div key={u} className="bg-primary/5 border border-primary/10 rounded-2xl py-4 text-center">
                <Star size={14} className="text-primary mx-auto mb-1.5" />
                <span className="font-extrabold text-primary text-base">{u}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-site max-w-xl mx-auto text-center">
          <div className="flex justify-center mb-5">
            <div className="bg-white rounded-2xl p-3 shadow-lg">
              <Image src="/images/logos/camp-logo.png" alt="CAMP2026" width={80} height={65} className="object-contain" />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Sicher dir jetzt deinen Platz!
          </h2>
          <p className="text-white/70 text-sm leading-relaxed mb-8">
            Plätze sind begrenzt – melde dich so früh wie möglich an.<br />
            Einfach per E-Mail mit Name, Jahrgang und gewünschter Altersgruppe.
          </p>
          <a
            href="mailto:office@scfussach.at?subject=CAMP2026 Anmeldung"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:bg-gray-100 transition-colors text-sm shadow-lg"
          >
            <Mail size={16} />
            office@scfussach.at
          </a>
          <p className="text-white/40 text-xs mt-4">Name, Jahrgang und Altersgruppe angeben</p>
        </div>
      </section>

    </main>
  );
}
