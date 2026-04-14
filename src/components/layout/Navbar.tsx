"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/aktuelles", label: "Aktuelles" },
  { href: "/spielplan", label: "Spielplan" },
  { href: "/verein", label: "Verein" },
  {
    label: "Mannschaften",
    href: "/mannschaften",
    children: [
      { href: "/mannschaften/erste", label: "1. Mannschaft" },
      { href: "/mannschaften/erste-b", label: "1b Mannschaft" },
      { href: "/mannschaften/nachwuchs", label: "Nachwuchs" },
      { href: "/mannschaften/bsk", label: "BSK" },
      { href: "/mannschaften/altherren", label: "Altherren" },
    ],
  },
  { href: "/sponsoren", label: "Sponsoren" },
  { href: "/camp2026", label: "CAMP2026" },
  { href: "https://shop.scfussach.at", label: "Shop", external: true },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/90 backdrop-blur-sm"
      )}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="SC Fussach – Startseite">
            <div className="shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm p-0.5">
              <Image
                src="/images/logos/sc fussach wappen.png"
                alt="SC Fussach Wappen"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-gray-900 text-sm leading-tight">SC Fussach</div>
              <div className="text-xs text-gray-500 leading-tight">seit 1946</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Hauptnavigation">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === link.label ? null : link.label)
                    }
                    onBlur={() => setTimeout(() => setOpenDropdown(null), 150)}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                      pathname.startsWith(link.href ?? "")
                        ? "text-primary bg-primary-light"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform duration-200",
                        openDropdown === link.label ? "rotate-180" : ""
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-44 bg-white rounded-xl shadow-lg border border-gray-100 py-1 overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-light hover:text-primary transition-colors duration-150"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : link.external ? (
                <a
                  key={link.href}
                  href={link.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-gray-600 hover:text-primary hover:bg-gray-50"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                    pathname === link.href
                      ? "text-primary bg-primary-light"
                      : "text-gray-600 hover:text-primary hover:bg-gray-50"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-2">
            <Link
              href="/club100"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-mid transition-colors duration-200"
            >
              Club100
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200"
              aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-gray-100 bg-white"
          >
            <nav className="container-site py-4 flex flex-col gap-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 text-gray-700 hover:bg-gray-50"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href ?? "#"}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200",
                        pathname === link.href
                          ? "text-primary bg-primary-light"
                          : "text-gray-700 hover:bg-gray-50"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                  {link.children && (
                    <div className="ml-4 mt-1 flex flex-col gap-0.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 rounded-lg text-sm text-gray-600 hover:text-primary hover:bg-primary-light transition-colors duration-150"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-2 pt-2 border-t border-gray-100">
                <Link
                  href="/club100"
                  className="block w-full text-center px-4 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-mid transition-colors"
                >
                  Club100 – Jetzt Fördermitglied werden
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
