import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { sponsors } from "@/lib/data/sponsors";

export const metadata: Metadata = {
  title: "Sponsoren",
  description: "Unsere Partner und Sponsoren – Danke für die Unterstützung des SC Fussach.",
};

const tierOrder = ["gold", "silver", "bronze", "partner"] as const;
const tierLabels = {
  gold: "Hauptsponsoren",
  silver: "Premium-Partner",
  bronze: "Partner",
  partner: "Förderer",
};

export default function SponsorenPage() {
  return (
    <main className="min-h-screen section-padding">
      <div className="container-site">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
            Danke
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Unsere Sponsoren
          </h1>
          <p className="text-gray-500 max-w-md mx-auto text-sm">
            Ohne die Unterstützung unserer Sponsoren und Partner wäre der
            SC Fussach nicht möglich. Herzlichen Dank!
          </p>
        </div>

        {/* Sponsors by tier */}
        {tierOrder.map((tier) => {
          const tierSponsors = sponsors.filter((s) => s.tier === tier);
          if (tierSponsors.length === 0) return null;

          const cardSize =
            tier === "gold"
              ? { card: "w-52 p-8", img: "w-40 h-24" }
              : tier === "silver"
              ? { card: "w-44 p-6", img: "w-32 h-16" }
              : { card: "w-36 p-5", img: "w-24 h-14" };

          return (
            <div key={tier} className="mb-12">
              <h2 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6 text-center">
                {tierLabels[tier]}
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {tierSponsors.map((sponsor) => {
                  const Wrapper = sponsor.website ? "a" : "div";
                  const wrapperProps = sponsor.website
                    ? { href: sponsor.website, target: "_blank", rel: "noopener noreferrer" }
                    : {};
                  return (
                    <Wrapper
                      key={sponsor.id}
                      {...wrapperProps}
                      className={`group flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl hover:shadow-md hover:border-primary/20 transition-all duration-300 ${cardSize.card}`}
                    >
                      <div className={`relative mb-3 transition-transform duration-300 group-hover:scale-105 ${cardSize.img}`}>
                        {sponsor.imageUrl ? (
                          <Image
                            src={sponsor.imageUrl}
                            alt={sponsor.name}
                            fill
                            className="object-contain"
                            sizes="160px"
                          />
                        ) : (
                          <div className="w-full h-full rounded-xl bg-primary flex items-center justify-center text-white font-bold">
                            {sponsor.logoPlaceholder}
                          </div>
                        )}
                      </div>
                      <span className="text-xs font-semibold text-gray-600 text-center leading-tight">
                        {sponsor.name}
                      </span>
                    </Wrapper>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Become sponsor CTA */}
        <div className="mt-8 bg-primary rounded-3xl p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Werden Sie Sponsor
          </h2>
          <p className="text-white/70 max-w-md mx-auto text-sm leading-relaxed mb-8">
            Unterstützen Sie den lokalen Sport und sichern Sie sich wertvolle
            Sichtbarkeit in der Region. Wir freuen uns auf Ihre Anfrage.
          </p>
          <Link
            href="mailto:info@scfussach.at?subject=Sponsoring SC Fussach"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-primary font-bold rounded-xl hover:bg-primary-light transition-all duration-200 text-sm"
          >
            <Mail size={16} />
            Jetzt kontaktieren
          </Link>
        </div>
      </div>
    </main>
  );
}
