import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata = {
  title: "MenMind",
  description: "Punkt orientacyjny dla facetów w drodze",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body className="text-zinc-100 antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}