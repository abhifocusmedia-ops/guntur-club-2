import type { Metadata } from "next";
import "./globals.css";
import "./inner-pages.css";
import "./amenities.css";
import "./remaining-pages.css";
import "./premium-motion.css";
import "./advanced-motion.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import FloatingTools from "@/components/ui/FloatingTools";
import PremiumMotion from "@/components/animations/PremiumMotion";
import AdvancedMotion from "@/components/animations/AdvancedMotion";
import CinematicEntrance from "@/components/animations/CinematicEntrance";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import CardRevealMotion from "@/components/animations/CardRevealMotion";
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.gunturclub.com",
  ),
  title: {
    default: "Guntur Club | A Legacy of Prestige Since 1929",
    template: "%s | Guntur Club",
  },
  description:
    "Discover Guntur Club, a distinguished institution in Guntur offering premium sports, recreation, dining, hospitality and social experiences since 1929.",
  openGraph: {
    type: "website",
    siteName: "Guntur Club",
    images: ["/images/club-exterior.webp"],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <CinematicEntrance />
        <SmoothScroll />
        <Header />
        <main id="main-content">{children}</main>
        <PremiumMotion />
        <AdvancedMotion />
        <CardRevealMotion />
        <Footer />
        <FloatingTools />
      </body>
    </html>
  );
}
