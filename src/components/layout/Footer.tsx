import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

const footerLinks: Record<string, { href: string; label: string; external?: boolean }[]> = {
  Verein: [
    { href: "/verein", label: "Über uns" },
    { href: "/verein#vorstand", label: "Vorstand" },
    { href: "/verein#mitglied", label: "Mitglied werden" },
    { href: "/club100", label: "Club100" },
  ],
  Mannschaften: [
    { href: "/mannschaften/erste", label: "1. Mannschaft" },
    { href: "/mannschaften/erste-b", label: "1b Mannschaft" },
    { href: "/mannschaften/nachwuchs", label: "Nachwuchs" },
    { href: "/mannschaften/altherren", label: "Altherren" },
  ],
  Mehr: [
    { href: "/aktuelles", label: "Aktuelles" },
    { href: "/sponsoren", label: "Sponsoren" },
    { href: "/camp2026", label: "CAMP2026" },
    { href: "/downloads", label: "Downloads" },
    { href: "https://shop.scfussach.at", label: "Online-Shop", external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center p-1">
                <Image
                  src="/images/logos/sc fussach wappen.png"
                  alt="SC Fussach Wappen"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-white text-base leading-tight">SC Fussach</div>
                <div className="text-xs text-gray-500 leading-tight">Sportclub seit 1946</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-6">
              Der SC Fussach ist ein traditionsreicher Fußballverein aus dem Herzen des Vorarlberger
              Rheindeltals. Leidenschaft, Teamgeist und Heimatliebe seit 1946.
            </p>
            {/* Hashtags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["#scfussach", "#alwaysblue", "#uesraweag"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/scfussach/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SC Fussach auf Facebook"
                className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-200"
              >
                {/* Facebook icon */}
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/scfussach1946/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SC Fussach auf Instagram"
                className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-200"
              >
                {/* Instagram icon */}
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="mailto:info@scfussach.at"
                aria-label="E-Mail an SC Fussach"
                className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-200"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-10 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-gray-500 shrink-0" />
                <span>Sportplatz Fussach, 6972 Fussach, Vorarlberg</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-gray-500 shrink-0" />
                <a href="mailto:info@scfussach.at" className="hover:text-white transition-colors duration-200">
                  info@scfussach.at
                </a>
              </div>
            </div>
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} SC Fussach. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
