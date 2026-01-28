import Link from "next/link";
import MiniBadge from "@/components/ui/MiniBadge";
import { Users } from "lucide-react";

export default function NightlifeEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">MenMind · nightlife</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Clubs / bars / nightlife
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            This is not about “escaping into partying”.
            It’s about social contact and leaving isolation — if done smart.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-lg font-semibold text-zinc-100">
              Nightlife partners
            </h2>
            <MiniBadge label="soon" tone="soon" />
          </div>

          <div className="mt-4 rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
            <div className="flex items-center gap-2 text-zinc-200">
              <Users size={18} />
              <p className="font-semibold">Curated list in progress</p>
            </div>

            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
              Next versions will include verified clubs, bars and events
              (online + cities). No spam. No random ads.
            </p>

            <p className="mt-3 text-sm text-zinc-500">
              Want to join as a partner? Use the Partnership tab.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/partnership"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              Apply as partner →
            </Link>

            <Link
              href="/en/where/ready"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Back (ready)
            </Link>

            <Link
              href="/en"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/30 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-800/70 hover:bg-zinc-800/50 transition"
            >
              Home
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Tip: go “towards people”, not “towards drama”.
          </p>
        </section>
      </div>
    </main>
  );
}