import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, Star, ArrowRight, Mail, Gift, Trophy, Ticket } from "lucide-react";

export const metadata: Metadata = {
  title: "Club100 – SC Fussach",
  description:
    "Werde Teil des Club100 und unterstütze den SC Fussach mit 100 Euro im Jahr. Exklusive Vorteile, dein Name auf der Anlage und vieles mehr.",
};

const goodies = [
  {
    icon: Gift,
    title: "Bowling-Gutschein",
    desc: "Eine Stunde Bowling in der Funworld Hard für sechs Personen inkl. Leihschuhe – im Gegenwert von 50 Euro.",
  },
  {
    icon: Ticket,
    title: "Vorteile & Verlosungen",
    desc: "Laufende Vorteile und exklusive Verlosungen bei Heimspielen – nur für Club100-Mitglieder.",
  },
  {
    icon: Trophy,
    title: "Exklusive Tombola",
    desc: "Beim letzten Heimspiel (Sa. 13.06.26) verlosen wir als Hauptpreis ein Tennisset von Jannik Sinner inkl. handsigniertem Head-Schläger.",
  },
];

export default function Club100Page() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="section-padding bg-primary">
        <div className="container-site text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-white/80 text-xs font-semibold mb-6">
            <Star size={12} className="text-amber-300" />
            Förderprogramm des SC Fussach
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Club<span className="text-white/50">100</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-base leading-relaxed mb-10">
            Werde Teil des Club100 und unterstütze den SC Fussach mit einem jährlichen Beitrag
            von <strong className="text-white">100 Euro</strong>. Jeder Euro hilft, unsere
            Jugendarbeit zu stärken, Talente zu fördern und die Zukunft des Vereins aktiv
            mitzugestalten.
          </p>
          <a
            href="mailto:info@scfussach.at?subject=Club100 Anmeldung"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-primary-light transition-all duration-200"
          >
            Jetzt mitmachen
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Warum Club100 */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
                Warum Club100?
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                Gemeinsam schaffen wir mehr.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                Als Mitglied des Club100 zeigst du nicht nur Herz für den Fußball, sondern wirst
                auch sichtbar Teil unserer Gemeinschaft. Dein Name wird auf unserer digitalen
                Club100-Tafel verewigt – als Zeichen deines Engagements.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Ersichtlich bist du auf der Sportanlage bei allen Heimspielen, Clubabenden,
                ausgewählten Veranstaltungen und natürlich unter{" "}
                <a
                  href="https://club100.scfussach.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  club100.scfussach.at
                </a>{" "}
                auf dieser Seite.
              </p>
              <p className="text-gray-500 text-sm mt-4 italic">
                Mehr Möglichkeiten, mehr Freude am Fußball – jetzt mitmachen und den SC Fussach
                nachhaltig unterstützen!
              </p>
            </div>

            {/* Zahlungsbox */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
              <div className="text-center mb-6">
                <div className="text-5xl font-extrabold text-primary mb-1">100 €</div>
                <div className="text-sm text-gray-500">pro Saison</div>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <p className="font-semibold text-gray-900">So wirst du Mitglied:</p>
                <p>Überweise 100 Euro auf folgendes Konto und gib beim Verwendungszweck deinen Vor- und Nachnamen an (dieser wird für die Beschriftung des Feldes verwendet).</p>
                <div className="bg-white rounded-xl border border-gray-100 p-4 mt-3 space-y-1 font-mono text-xs">
                  <p className="text-gray-500">Raiffeisenbank Bodensee-Leiblachtal</p>
                  <p className="font-semibold text-gray-800">Sportclub Fussach</p>
                  <p><span className="text-gray-400">IBAN</span> AT83 3743 1000 0481 8621</p>
                  <p><span className="text-gray-400">BIC&nbsp;</span> RVVGAT2B431</p>
                </div>
              </div>
              <a
                href="mailto:info@scfussach.at?subject=Club100 Anmeldung"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-mid transition-colors duration-200 text-sm"
              >
                <Mail size={16} />
                Jetzt anmelden
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Goodies Saison 25/26 */}
      <section className="section-padding bg-gray-50">
        <div className="container-site">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
              Saison 2025/2026
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900">Goodies für Club100-Mitglieder</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {goodies.map((g) => (
              <div key={g.title} className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <g.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{g.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gesonderte Unterstützer */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="text-center mb-8">
            <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
              Unterstützer
            </span>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Gesonderte Unterstützer des Club100
            </h2>
            <p className="text-sm text-gray-500 mt-2">Saison 2025/2026</p>
          </div>
          <div className="flex justify-center">
            <a
              href="https://funworld-hard.at"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-40 h-20 relative">
                {/* Sobald funworld.jpg in /images/sponsors/ liegt, wird es hier angezeigt */}
                <Image
                  src="/images/sponsors/funworld.jpg"
                  alt="Funworld Hard"
                  fill
                  className="object-contain"
                  sizes="160px"
                  onError={() => {}}
                />
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors">
                funworld-hard.at
              </span>
            </a>
          </div>

          {/* Selbst unterstützen */}
          <div className="mt-12 text-center bg-gray-50 rounded-2xl border border-gray-100 p-8 max-w-xl mx-auto">
            <p className="text-sm text-gray-600 mb-4">
              Ihr wollt unseren Club100 gesondert unterstützen? Meldet euch mit euren Vorschlägen und Ideen!
            </p>
            <a
              href="mailto:info@scfussach.at"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary-mid transition-colors"
            >
              <Mail size={14} />
              info@scfussach.at
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
