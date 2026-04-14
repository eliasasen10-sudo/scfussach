"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, ChevronDown } from "lucide-react";

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const, delay },
  };
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-primary-dark">
      {/* Real header image as background */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/logos/header.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        {/* Strong dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 via-primary/80 to-primary-dark/95" />
      </div>

      {/* Field lines decoration overlay */}
      <div className="absolute inset-0 overflow-hidden opacity-5" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] border-2 border-white rounded-3xl"
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-white rounded-full"
        />
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white" />
      </div>

      <div className="container-site relative z-10 text-center py-32">
        {/* Wappen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6"
        >
          <div className="mx-auto w-28 h-28 rounded-full bg-white flex items-center justify-center p-2 shadow-2xl">
            <Image
              src="/images/logos/sc fussach wappen.png"
              alt="SC Fussach Wappen"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          {...fadeUp(0.05)}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Saison 2025/2026 – Vorarlbergliga
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.0] tracking-tight mb-6"
        >
          SC{" "}
          <span className="relative inline-block">
            Fussach
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-accent rounded-full origin-left"
            />
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Leidenschaft, Teamgeist und Heimatliebe seit 1946.
          <br className="hidden sm:block" />
          Willkommen beim Sportclub aus dem Vorarlberger Rheintal.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/aktuelles"
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white text-primary font-semibold rounded-xl hover:bg-primary-light transition-all duration-200 text-sm"
          >
            Aktuelle News
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            href="/spielplan"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 text-sm backdrop-blur-sm"
          >
            <Calendar size={16} />
            Spielplan
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp(0.45)}
          className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto"
        >
          {[
            { value: "1946", label: "Gegründet" },
            { value: "5+", label: "Mannschaften" },
            { value: "200+", label: "Mitglieder" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
