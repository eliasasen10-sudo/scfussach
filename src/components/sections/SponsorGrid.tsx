"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { sponsors } from "@/lib/data/sponsors";
import { cn } from "@/lib/utils";

const tierLabel: Record<string, string> = {
  gold: "Hauptsponsor",
  silver: "Premium-Partner",
  bronze: "Partner",
  partner: "Förderer",
};

const tierStyle: Record<string, string> = {
  gold: "border-amber-200 bg-amber-50",
  silver: "border-gray-200 bg-gray-50",
  bronze: "border-gray-100 bg-white",
  partner: "border-gray-100 bg-white",
};

export default function SponsorGrid() {
  const gold = sponsors.filter((s) => s.tier === "gold");
  const silver = sponsors.filter((s) => s.tier === "silver");
  const rest = sponsors.filter((s) => s.tier === "bronze" || s.tier === "partner");

  return (
    <section className="section-padding bg-gray-50" id="sponsoren">
      <div className="container-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
            Partner & Sponsoren
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Unsere Unterstützer
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Herzlichen Dank an alle Partner und Sponsoren, die den SC Fussach
            möglich machen.
          </p>
        </motion.div>

        {/* Gold sponsors */}
        {gold.length > 0 && (
          <div className="mb-8">
            <p className="text-xs font-bold text-amber-600 tracking-widest uppercase mb-4 text-center">
              Hauptsponsoren
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {gold.map((sponsor, i) => (
                <SponsorCard key={sponsor.id} sponsor={sponsor} index={i} large />
              ))}
            </div>
          </div>
        )}

        {/* Silver sponsors */}
        {silver.length > 0 && (
          <div className="mb-8">
            <p className="text-xs font-bold text-gray-500 tracking-widest uppercase mb-4 text-center">
              Premium-Partner
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              {silver.map((sponsor, i) => (
                <SponsorCard key={sponsor.id} sponsor={sponsor} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Rest */}
        {rest.length > 0 && (
          <div className="mb-10">
            <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4 text-center">
              Partner & Förderer
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
              {rest.map((sponsor, i) => (
                <SponsorCard key={sponsor.id} sponsor={sponsor} index={i} small />
              ))}
            </div>
          </div>
        )}

        {/* Become a sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-4"
        >
          <p className="text-sm text-gray-500 mb-4">
            Werden Sie Partner des SC Fussach und unterstützen Sie den lokalen Sport.
          </p>
          <Link
            href="/sponsoren"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary text-sm font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-200"
          >
            Sponsor werden
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function SponsorCard({
  sponsor,
  index,
  large,
  small,
}: {
  sponsor: (typeof sponsors)[0];
  index: number;
  large?: boolean;
  small?: boolean;
}) {
  const Wrapper = sponsor.website ? "a" : "div";
  const wrapperProps = sponsor.website
    ? { href: sponsor.website, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Wrapper
        {...wrapperProps}
        className={cn(
          "group relative flex flex-col items-center justify-center rounded-2xl border p-4 transition-all duration-300",
          "hover:shadow-md hover:border-primary/30",
          tierStyle[sponsor.tier],
          large && "py-8",
          small && "py-4"
        )}
      >
        {/* Logo */}
        <div
          className={cn(
            "relative rounded-xl overflow-hidden mb-2 transition-all duration-300 group-hover:scale-105",
            large ? "w-32 h-16" : small ? "w-16 h-10" : "w-24 h-12"
          )}
        >
          {sponsor.imageUrl ? (
            <Image
              src={sponsor.imageUrl}
              alt={sponsor.name}
              fill
              className="object-contain"
              sizes="128px"
            />
          ) : (
            <div className={cn(
              "w-full h-full bg-primary flex items-center justify-center text-white font-bold",
              large ? "text-xl" : small ? "text-sm" : "text-base"
            )}>
              {sponsor.logoPlaceholder}
            </div>
          )}
        </div>
        <span
          className={cn(
            "text-center font-semibold text-gray-700 leading-tight",
            large ? "text-sm" : "text-xs"
          )}
        >
          {sponsor.name}
        </span>
        {!small && (
          <span className="text-xs text-gray-400 mt-0.5">{tierLabel[sponsor.tier]}</span>
        )}
        {sponsor.website && (
          <ExternalLink
            size={10}
            className="absolute top-2 right-2 text-gray-300 group-hover:text-primary transition-colors"
          />
        )}
      </Wrapper>
    </motion.div>
  );
}
