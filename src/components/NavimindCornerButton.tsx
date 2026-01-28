"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function NavimindCornerButton() {
  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      <Link
        href="https://navimind.app"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Navimind.app"
        title="Navimind.app"
        className="group inline-flex items-center gap-2 rounded-full border border-zinc-800/70 bg-zinc-950/70 px-4 py-3 shadow-lg shadow-black/30 backdrop-blur transition hover:bg-zinc-900/80 hover:border-zinc-700/70 hover:-translate-y-[1px]"
      >
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/15 ring-1 ring-cyan-400/20">
          <MessageCircle className="text-cyan-200" size={18} />
        </span>

        {/* Tekst pokazuje się dopiero na hover (desktop), na mobile zostaje sama ikonka */}
        <span className="hidden sm:inline text-sm font-semibold text-zinc-100 group-hover:text-cyan-200 transition">
          Navimind.app
        </span>
      </Link>
    </div>
  );
}