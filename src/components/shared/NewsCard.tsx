"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { cn, formatDate, categoryColor } from "@/lib/utils";
import type { NewsItem } from "@/lib/types";

interface NewsCardProps {
  item: NewsItem;
  featured?: boolean;
  index?: number;
}

export default function NewsCard({ item, featured = false, index = 0 }: NewsCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className={cn(
        "group bg-white rounded-2xl border border-gray-100 overflow-hidden",
        "hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      )}
    >
      {/* Image */}
      <div
        className={cn(
          "relative overflow-hidden",
          featured ? "h-52 md:h-64" : "h-44"
        )}
      >
        {item.imageUrl ? (
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className={cn(
              item.imageContain ? "object-contain p-4" : "object-cover group-hover:scale-105",
              "transition-transform duration-500"
            )}
            style={{ objectPosition: item.imagePosition ?? "center" }}
            sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          />
        ) : (
          <div
            className="w-full h-full bg-gradient-to-br from-primary to-primary-mid flex items-center justify-center text-white/20 font-bold text-6xl"
            aria-hidden="true"
          >
            ⚽
          </div>
        )}
        {/* Category overlay on image */}
        <span
          className={cn(
            "absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-semibold backdrop-blur-sm",
            categoryColor(item.category)
          )}
        >
          {item.category}
        </span>
      </div>

      <div className={cn("p-5", featured && "md:p-7")}>
        {/* Date */}
        <div className="flex items-center gap-1 text-xs text-gray-400 mb-3">
          <Calendar size={11} />
          {formatDate(item.date)}
        </div>

        {/* Title */}
        <h3
          className={cn(
            "font-bold text-gray-900 leading-tight mb-2 group-hover:text-primary transition-colors duration-200",
            featured ? "text-xl md:text-2xl" : "text-base"
          )}
        >
          <Link href={item.href ?? `/aktuelles/${item.slug}`}>{item.title}</Link>
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">
          {item.excerpt}
        </p>

        {/* Read more */}
        <Link
          href={item.href ?? `/aktuelles/${item.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all duration-200"
        >
          Weiterlesen
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.article>
  );
}
