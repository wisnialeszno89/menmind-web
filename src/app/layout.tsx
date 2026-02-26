import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import FloatingChat from "../components/FloatingChat";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${inter.className} bg-[#0F172A] text-zinc-100`}>

        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0F172A]/70 border-b border-zinc-800/60">
          <div className="container-2026 flex items-center justify-between py-4">

            <Link href="/" className="text-lg font-semibold tracking-tight">
              MenMind
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
              <Link href="/#kryzys" className="hover:text-white transition">
                Droga
              </Link>
              <Link href="/propozycje" className="hover:text-white transition">
                Propozycje
              </Link>
              <Link href="/#ojcostwo" className="hover:text-white transition">
                Ojcostwo
              </Link>
              <a
                href="https://navimind.app"
                target="_blank"
                className="text-white hover:opacity-80 transition"
              >
                Navimind
              </a>
            </nav>

          </div>
        </header>

        <div className="pt-24">
          {children}
        </div>

        <FloatingChat />

      </body>
    </html>
  );
}