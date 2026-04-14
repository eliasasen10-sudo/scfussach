"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, Star } from "lucide-react";

const benefits = [
  "Jährlicher Gutschein für den SC Fussach Shop",
  "Exklusive Tombola-Lose bei Vereinsevents",
  "Einladung zu Club100-Exklusiv-Events",
  "Namensnennung auf der Vereinswebsite",
  "Saisonkarte für Heimspiele (ermäßigt)",
  "Direkter Kontakt zum Vorstand",
];

export default function Club100Section() {
  return (
    <section className="section-padding bg-primary" id="club100">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-white/80 text-xs font-semibold mb-6">
              <Star size={12} className="text-amber-300" />
              Förderprogramm
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
              Club100 –
              <br />
              Werde Teil der
              <br />
              Fussach-Familie
            </h2>
            <p className="text-white/70 leading-relaxed mb-8 text-sm max-w-md">
              Mit nur{" "}
              <span className="text-white font-bold text-base">100 Euro im Jahr</span> wirst
              du Fördermitglied des SC Fussach. Du unterstützt deinen lokalen
              Verein und bekommst exklusive Vorteile zurück.
            </p>

            <Link
              href="/club100"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white text-primary font-bold rounded-xl hover:bg-primary-light transition-all duration-200 text-sm"
            >
              Jetzt Fördermitglied werden
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </motion.div>

          {/* Right: Benefits card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8"
          >
            {/* Price badge */}
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-extrabold text-white">100</span>
              <span className="text-xl text-white/70 font-bold">€</span>
              <span className="text-white/50 text-sm ml-1">/ Jahr</span>
            </div>

            <ul className="space-y-3">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                  className="flex items-start gap-3 text-sm text-white/80"
                >
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="text-white" />
                  </span>
                  {benefit}
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/20 text-xs text-white/40">
              Bereits über 50 Fördermitglieder sind dabei.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
