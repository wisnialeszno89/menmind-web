import Link from "next/link";
import MiniBadge from "@/components/ui/MiniBadge";
import { Users } from "lucide-react";

export default function ClubsPL() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">MenMind · kluby</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Kluby / bary / imprezy
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            To nie jest “ucieczka w balet”.
            To jest kontakt z ludźmi i wyjście z izolacji — jeśli robisz to mądrze.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-lg font-semibold text-zinc-100">
              Partnerzy klubowi
            </h2>
            <MiniBadge label="wkrótce" tone="soon" />
          </div>

          <div className="mt-4 rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
            <div className="flex items-center gap-2 text-zinc-200">
              <Users size={18} />
              <p className="font-semibold">Lista miejsc w przygotowaniu</p>
            </div>

            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
              W kolejnych wersjach pojawią się zweryfikowane kluby, bary i wydarzenia
              (online + miasta). Bez spamu i przypadkowych reklam.
            </p>

            <p className="mt-3 text-sm text-zinc-500">
              Jeśli chcesz dołączyć jako partner — przejdź do zakładki Partnerstwo.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/partnerstwo"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              Zgłoś partnera →
            </Link>

            <Link
              href="/where/ready"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Wróć (gotowość)
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/30 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-800/70 hover:bg-zinc-800/50 transition"
            >
              Start
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Tip: idź “do ludzi”, nie “do dramy”.
          </p>
        </section>
      </div>
    </main>
  );
}