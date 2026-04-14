import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Users, Calendar, MapPin, Trophy, Heart, ArrowRight, Phone, Mail, Building2, CreditCard, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Verein",
  description: "Erfahre mehr über den SC Fussach – Geschichte, Vorstand und Mitgliedschaft.",
};

const vorstand = [
  { name: "David Olivotto", role: "Obmann / Kassier", phone: "0650 4432347", email: "d.olivotto@cable.vol.at" },
  { name: "Stefan Pfanner", role: "Obmann / Schriftführer", phone: "0664 75013686", email: "stefan.pfanner@gmail.com" },
  { name: "Kai Humpeler", role: "Obmann / Club Management", phone: "0664 2127199", email: "humpeler.kai@hotmail.com" },
  { name: "Franz Blum", role: "Obmann / Wirtschaftlicher Leiter", phone: "0664 1104716", email: "fischereiblum@gmx.at" },
  { name: "Christoph Kobleder", role: "Sportliche Leitung", phone: "", email: "" },
  { name: "Johannes Küng", role: "Nachwuchsleiter", phone: "0670 6050005", email: "fussball@kueng.biz" },
  { name: "Luca Gratzer", role: "Medien", phone: "0664 6508064", email: "gratzerluca@gmail.com" },
  { name: "Wolfgang Bartolini", role: "Kantinenleitung / Kassier Stv.", phone: "0676 3901191", email: "wolfgang.bartolini@gmail.com" },
  { name: "Sieghard Brunner", role: "Kantinenleitung Stv.", phone: "0680 1520299", email: "sieghard.brunner@hotmail.com" },
];

const milestones = [
  { year: "1946", text: "Gründung des SC Fussach" },
  { year: "1965", text: "Bau des ersten eigenen Sportplatzes" },
  { year: "1987", text: "Erstmaliger Aufstieg in die Landesliga" },
  { year: "2005", text: "Renovierung der Sportanlage" },
  { year: "2015", text: "Einführung des Nachwuchsprogramms" },
  { year: "2024", text: "Aufstieg in die Vorarlbergliga" },
];

export default function VereinPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-primary">
        <div className="container-site">
          <span className="text-xs font-bold tracking-widest uppercase text-white/60 mb-3 block">
            Über uns
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Der SC Fussach
          </h1>
          <p className="text-white/70 max-w-xl text-base leading-relaxed">
            Seit 1946 steht der Sportclub Fussach für Leidenschaft, Zusammenhalt und
            gelebte Vereinskultur im Herzen des Vorarlberger Rheindeltals.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Calendar, value: "1946", label: "Gegründet" },
              { icon: Users, value: "200+", label: "Mitglieder" },
              { icon: Trophy, value: "5", label: "Mannschaften" },
              { icon: MapPin, value: "Fussach", label: "Vorarlberg" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center mx-auto mb-3">
                  <Icon size={18} className="text-primary" />
                </div>
                <div className="text-2xl font-extrabold text-gray-900">{value}</div>
                <div className="text-sm text-gray-500 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vereinsdaten */}
      <section className="section-padding bg-white" id="vereinsdaten">
        <div className="container-site">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
              Vereinsdaten
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900">Sportclub Fussach 1946</h2>
            <p className="text-gray-500 text-sm mt-2">ZVR-Zahl: 627101517</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Adresse */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin size={18} className="text-primary" />
                </div>
                <h3 className="font-bold text-gray-900">Vereinsadresse</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Mühlwasen 85<br />
                A-6972 Fussach
              </p>
            </div>

            {/* Kontakt */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Phone size={18} className="text-primary" />
                </div>
                <h3 className="font-bold text-gray-900">Kontakt</h3>
              </div>
              <p className="text-sm text-gray-700 font-semibold">David Olivotto</p>
              <a href="tel:+436504432347" className="text-sm text-gray-600 hover:text-primary transition-colors block mt-1">
                0650 4432347
              </a>
              <a href="mailto:info@scfussach.at" className="text-sm text-primary hover:underline block mt-1">
                info@scfussach.at
              </a>
            </div>

            {/* Sportanlage */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Building2 size={18} className="text-primary" />
                </div>
                <h3 className="font-bold text-gray-900">Sportanlage</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sportanlage Müss<br />
                Müss 99, A-6972 Fussach
              </p>
            </div>

            {/* Bankdaten */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center">
                  <CreditCard size={18} className="text-primary" />
                </div>
                <h3 className="font-bold text-gray-900">Bankdaten</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Raiffeisenbank Bodensee-Leiblachtal<br />
                <span className="font-medium text-gray-700">Sportclub Fussach</span><br />
                IBAN: AT83 3743 1000 0481 8621<br />
                BIC: RVVGAT2B431
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sportanlage */}
      <section className="section-padding bg-gray-50" id="sportanlage">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/Sportanlage02.jpg"
                alt="Sportanlage Müss – SC Fussach"
                width={600}
                height={400}
                className="w-full h-auto object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
                Sportanlage
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Sportanlage Müss</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Der SC Fussach bestreitet seine Heimspiele auf einer der wohl schönsten Anlagen
                Vorarlbergs, der <strong className="text-gray-800">Sportanlage Müss</strong>. Zwei
                Naturrasen- sowie ein Kunstrasenplatz, bestens gepflegt von unserem Platzwart{" "}
                <strong className="text-gray-800">Daniel Hofer</strong>, bieten optimale Trainings-
                und Spielbedingungen für unsere Mannschaften und deren Trainer.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "2", label: "Naturrasenplätze" },
                  { value: "1", label: "Kunstrasenplatz" },
                  { value: "Müss 99", label: "Adresse, 6972 Fussach" },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-xl p-4 border border-gray-100 text-center">
                    <div className="text-lg font-extrabold text-primary">{item.value}</div>
                    <div className="text-xs text-gray-500 mt-0.5 leading-tight">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Förderprojekt */}
      <section className="section-padding bg-white" id="foerderprojekt">
        <div className="container-site">
          <div className="flex gap-12 items-start">
            <div className="flex-1">
              <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
                Förderprojekt
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">&ldquo;Üsra Weag&rdquo;</h2>
              <p className="text-sm text-gray-400 italic mb-5">Wer etwas ändern will, muss neue Wege gehen.</p>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                Das Förderprojekt <strong className="text-gray-800">&ldquo;Üsra Weag&rdquo;</strong> steht
                für einen neuen Weg in der Förderung von Nachwuchsspielern, Kampfmannschaftsspielern
                und für verletzte Spieler aller Altersstufen. Dies soll dem SC Fussach mittel- und
                langfristig helfen, die sportlichen Ziele mit eigenen ausgebildeten Talenten zu erreichen.
              </p>

              <div className="space-y-4 mb-6">
                {[
                  {
                    title: "Talente",
                    text: "Spezielle Förderungen im fußballspezifischen Bereich, in der Sportmotorik und im taktischen Bereich – individuell auf jeden Spieler abgestimmt.",
                  },
                  {
                    title: "Kampfmannschaft",
                    text: "Spieler erhalten die Möglichkeit, an ihren Defiziten zu arbeiten und sich kontinuierlich zu verbessern.",
                  },
                  {
                    title: "Verletzte Spieler",
                    text: "Schnellstmögliche Wiedereingliederung und Erhalt der körperlichen Verfassung während der Verletzungsphase.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-1.5 shrink-0 bg-primary rounded-full mt-1" />
                    <div>
                      <div className="text-sm font-bold text-gray-900 mb-0.5">{item.title}</div>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-gray-400 italic">
                Auch der weiteste Weg beginnt mit dem ersten Schritt.
              </p>
            </div>

            {/* Icon rechts */}
            <div className="shrink-0 hidden sm:block">
              <Image
                src="/images/üsraweg.jpg"
                alt="Üsra Weag Logo"
                width={120}
                height={120}
                style={{ width: 120, height: "auto" }}
                className="rounded-2xl shadow-md"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Geschichte */}
      <section className="section-padding bg-gray-50" id="geschichte">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
                Geschichte
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                78 Jahre Fußballgeschichte
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                Der SC Fussach wurde 1946, kurz nach dem Zweiten Weltkrieg, von einer
                Gruppe begeisterter Fußballfans in Fussach gegründet. Was als kleiner
                Dorfverein begann, ist heute ein wichtiger Bestandteil der lokalen
                Gemeinschaft.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Mit mehreren Mannschaften vom Nachwuchs bis zu den Altherren bieten wir
                Menschen jedes Alters die Möglichkeit, Fußball zu spielen und Teil
                unserer Vereinsfamilie zu werden.
              </p>
            </div>

            {/* Timeline */}
            <div>
              <div className="space-y-4">
                {milestones.map((m, i) => (
                  <div key={m.year} className="flex gap-4 items-start">
                    <div className="shrink-0 w-16 text-right">
                      <span className="text-sm font-bold text-primary">{m.year}</span>
                    </div>
                    <div className="relative pl-4 border-l-2 border-gray-200 pb-4">
                      <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary" />
                      <p className="text-sm text-gray-700">{m.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vorstand */}
      <section className="section-padding bg-white" id="vorstand">
        <div className="container-site">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
              Führung
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900">Unser Vorstand</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {vorstand.map((person) => (
              <div
                key={person.name}
                className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {person.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-gray-900 leading-tight">{person.name}</div>
                  <div className="text-xs text-primary font-medium mt-0.5">{person.role}</div>
                  {person.phone && (
                    <a href={`tel:${person.phone.replace(/\s/g, "")}`} className="text-xs text-gray-500 hover:text-primary transition-colors block mt-1.5">
                      {person.phone}
                    </a>
                  )}
                  {person.email && (
                    <a href={`mailto:${person.email}`} className="text-xs text-gray-400 hover:text-primary transition-colors block truncate">
                      {person.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mitglied werden */}
      <section className="section-padding bg-gray-50" id="mitglied">
        <div className="container-site">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
              Mitgliedschaft
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Werde heute noch Mitglied!
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
              Der SC Fussach bestreitet seine Einnahmen aus Sponsorbeiträgen, Sportplatzeinnahmen,
              Veranstaltungen, Sportförderungen und Mitgliedsbeiträgen. Je mehr Mitglieder unseren
              Verein unterstützen, um so mehr wird die Arbeit anerkannt und um so mehr Ideen können
              in Zukunft umgesetzt werden.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto mb-12">
            {/* Bild */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/Mitgliedsschaft.jpg"
                alt="SC Fussach Mitgliedschaft"
                width={600}
                height={400}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Pakete */}
            <div className="space-y-4">
              {/* Mitgliedschaft */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-extrabold text-gray-900">Mitgliedschaft</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Jährlich</p>
                  </div>
                  <span className="text-2xl font-extrabold text-primary">79 €</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    Saisonkarte – freier Eintritt bei allen Heimspielen
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-600">
                    <Check size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    Stimmrecht auf der Jahreshauptversammlung
                  </li>
                </ul>
              </div>

              {/* Mitgliedschaft+ */}
              <div className="bg-primary rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute -top-3 right-4 bg-white text-primary text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Empfohlen
                </div>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-extrabold">Mitgliedschaft+</h3>
                    <p className="text-xs text-white/60 mt-0.5">Jährlich</p>
                  </div>
                  <span className="text-2xl font-extrabold">159 €</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-white/90">
                    <Check size={15} className="text-emerald-300 shrink-0 mt-0.5" />
                    Saisonkarte+ – freier Eintritt bei allen Heimspielen
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/90">
                    <Check size={15} className="text-emerald-300 shrink-0 mt-0.5" />
                    Je ein Essen und ein Getränk nach Wahl
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/90">
                    <Check size={15} className="text-emerald-300 shrink-0 mt-0.5" />
                    Stimmrecht auf der Jahreshauptversammlung
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Wie anmelden */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-100 p-8 text-center">
            <Heart size={28} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-extrabold text-gray-900 mb-3">So wirst du Mitglied</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              Kontaktiere uns per Mail oder Telefon mit deinem Vor- und Nachnamen sowie deiner Anschrift.
              Nach Überweisung des Mitgliedsbeitrags wird deine Saisonkarte an der Stadionkassa hinterlegt.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              <span className="font-medium">IBAN:</span> AT83 3743 1000 0481 8621
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:info@scfussach.at?subject=Mitgliedschaft SC Fussach"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-mid transition-colors text-sm"
              >
                <Mail size={15} />
                info@scfussach.at
              </a>
              <a
                href="tel:+436504432347"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:border-primary hover:text-primary transition-colors text-sm"
              >
                <Phone size={15} />
                0650 4432347
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
