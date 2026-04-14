import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SC Fussach – Sportclub seit 1946",
    template: "%s | SC Fussach",
  },
  description:
    "Offizielle Website des SC Fussach – Fußballverein aus Fussach, Vorarlberg. Spielplan, News, Mannschaften und mehr.",
  keywords: ["SC Fussach", "Fußball", "Vorarlberg", "Fussach", "Vorarlbergliga"],
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "SC Fussach",
    title: "SC Fussach – Sportclub seit 1946",
    description:
      "Offizielle Website des SC Fussach – Fußballverein aus Fussach, Vorarlberg.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <div className="flex-1 pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
