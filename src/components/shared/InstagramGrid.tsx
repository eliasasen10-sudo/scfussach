"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import type { InstagramPost } from "@/lib/instagram";

function InstagramCard({ post, index }: { post: InstagramPost; index: number }) {
  const imageUrl =
    post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url;

  const caption = post.caption
    ? post.caption.replace(/#\w+/g, "").trim().slice(0, 80) +
      (post.caption.length > 80 ? "…" : "")
    : "";

  const date = new Date(post.timestamp).toLocaleDateString("de-AT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative block aspect-square rounded-xl overflow-hidden bg-gray-100"
    >
      <Link href={`/aktuelles/insta/${post.id}`} className="block w-full h-full">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={caption || "Instagram Post"}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-primary-mid" />
        )}

        {/* Video indicator */}
        {post.media_type === "VIDEO" && (
          <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1">
            <Play size={12} className="text-white fill-white" />
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
          {caption && (
            <p className="text-white text-xs leading-snug line-clamp-3 mb-1">
              {caption}
            </p>
          )}
          <div className="flex items-center justify-between">
            <span className="text-white/60 text-xs">{date}</span>
            <span className="text-white/60 text-xs font-medium">Lesen →</span>
          </div>
        </div>
      </Link>

      {/* External Instagram link */}
      <a
        href={post.permalink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-full p-1"
        onClick={(e) => e.stopPropagation()}
        title="Auf Instagram öffnen"
      >
        <ExternalLink size={11} className="text-white" />
      </a>
    </motion.div>
  );
}

export default function InstagramGrid({ limit }: { limit?: number } = {}) {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/instagram")
      .then((r) => r.json())
      .then((d) => {
        if (d.posts?.length) setPosts(limit ? d.posts.slice(0, limit) : d.posts);
        else setError(true);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (error) return null;

  return (
    <section className="mt-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-primary block">
              Social Media
            </span>
            <h2 className="text-2xl font-extrabold text-gray-900 leading-none">
              Instagram
            </h2>
          </div>
        </div>
        <a
          href="https://www.instagram.com/scfussach1946/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          @scfussach1946
          <ExternalLink size={13} />
        </a>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {Array.from({ length: limit ?? 12 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl bg-gray-100 animate-pulse"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {posts.map((post, i) => (
            <InstagramCard key={post.id} post={post} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}
