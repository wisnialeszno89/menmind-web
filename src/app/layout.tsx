import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MenMind",
  description: "Przestrzeń dla mężczyzn w drodze",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${inter.className} bg-midnight text-textPrimary antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}