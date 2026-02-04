import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/layout/Header";
import NavimindCornerButton from "@/components/NavimindCornerButton";

export const metadata = {
  title: "MenMind",
  description: "Punkt orientacyjny dla facetów w drodze",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body className="text-zinc-100 antialiased">
        <Header />
        {children}

        {/* ✅ Szybkie przejście do Navimind.app */}
        <NavimindCornerButton />
      </body>
    </html>
  );
}
