import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react";
import { fetchInstagramPosts } from "@/lib/instagram";

export const revalidate = 3600;

type Props = { params: Promise<{ id: string }> };

export default async function InstaPostPage({ params }: Props) {
  const { id } = await params;
  const posts = await fetchInstagramPosts();
  const post = posts.find((p) => p.id === id);

  if (!post) notFound();

  const imageUrl =
    post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url;

  const date = new Date(post.timestamp).toLocaleDateString("de-AT", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // Format caption: split hashtags from text
  const rawCaption = post.caption ?? "";
  const hashtagRegex = /#\w+/g;
  const hashtags = rawCaption.match(hashtagRegex) ?? [];
  const text = rawCaption.replace(hashtagRegex, "").trim();

  return (
    <main className="section-padding min-h-screen">
      <div className="container-site max-w-3xl">
        {/* Back */}
        <Link
          href="/aktuelles"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Zurück zu Aktuelles
        </Link>

        {/* Category */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white">
            <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </span>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <Calendar size={12} />
            {date}
          </div>
        </div>

        {/* Image */}
        {imageUrl && (
          <div className="relative w-full rounded-2xl overflow-hidden mb-8 bg-gray-100 flex justify-center">
            <Image
              src={imageUrl}
              alt="Instagram Post"
              width={1080}
              height={1080}
              className="w-full h-auto object-contain rounded-2xl"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        )}

        {/* Text */}
        {text && (
          <div className="prose prose-lg max-w-none mb-6">
            {text.split("\n").map((line, i) =>
              line.trim() ? (
                <p key={i} className="text-gray-800 leading-relaxed mb-3">
                  {line}
                </p>
              ) : (
                <br key={i} />
              )
            )}
          </div>
        )}

        {/* Hashtags */}
        {hashtags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {hashtags.map((tag) => (
              <span
                key={tag}
                className="text-sm text-primary font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Instagram link */}
        <a
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-sm font-semibold text-gray-700 transition-colors"
        >
          <ExternalLink size={15} />
          Original auf Instagram ansehen
        </a>
      </div>
    </main>
  );
}
