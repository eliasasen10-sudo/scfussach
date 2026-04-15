"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import NewsCard from "@/components/shared/NewsCard";
import { newsItems } from "@/lib/data/news";

export default function NewsGrid() {
  const featured = newsItems.find((n) => n.featured) ?? newsItems[0];
  const rest = newsItems.filter((n) => n.id !== featured.id).slice(0, 3);

  return (
    <section className="section-padding bg-gray-50" id="aktuelles">
      <div className="container-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-10 gap-4"
        >
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2 block">
              Neuigkeiten
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Aktuelles vom
              <br className="hidden sm:block" /> SC Fussach
            </h2>
          </div>
          <Link
            href="/aktuelles"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200 shrink-0"
          >
            Alle News
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <NewsCard item={featured} featured index={0} />
          </div>
          <div className="flex flex-col gap-4">
            {rest.map((item, i) => (
              <NewsCard key={item.id} item={item} index={i + 1} />
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/aktuelles"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-mid transition-colors duration-200"
          >
            Alle News ansehen
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
