import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";
import MiniBadge from "@/components/ui/MiniBadge";
import { Scale, MessageCircle, HeartPulse, Users, ShieldCheck } from "lucide-react";

export default function WhereDivorcePL() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">MenMind · rozwód</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Jestem w trakcie rozwodu
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Rozwód boli. Ale chaos kosztuje najwięcej.
            Najpierw spokój, potem decyzje i dokumenty.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-lg font-semibold text-zinc-100">Na dziś</h2>
            <MiniBadge label="10 min" tone="priority" />
          </div>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Zapisz 3 najpilniejsze sprawy (nie 30).
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Ustal 1 rzecz, którą zabezpieczasz (dziecko / finanse / kontakt).
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Zero kłótni na emocjach. Papier wygrywa z nerwami.
            </li>
          </ul>

          <Reset60 lang="pl" />

          <div className="mt-10">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-zinc-200">
                Co teraz ma sens?
              </h3>
              <MiniBadge label="Priorytety" tone="priority" />
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/spec/prawo"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition hover:-translate-y-[1px] hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 text-zinc-200">
                    <Scale size={18} />
                    <p className="font-semibold text-zinc-100">
                      Prawo / mediacje
                    </p>
                  </div>
                  <MiniBadge label="Priorytet" tone="priority" />
                </div>

                <p className="mt-2 text-sm text-zinc-400">
                  Kontakty, ustalenia, alimenty, zabezpieczenie.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Zobacz →</p>
              </Link>

              <Link
                href="/navimind?state=divorce"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition hover:-translate-y-[1px] hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 text-zinc-200">
                    <MessageCircle size={18} />
                    <p className="font-semibold text-zinc-100">
                      Navimind (uporządkuj głowę)
                    </p>
                  </div>
                  <MiniBadge label="Spokój" tone="info" />
                </div>

                <p className="mt-2 text-sm text-zinc-400">
                  Plan zamiast chaosu.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Otwórz →</p>
              </Link>

              <Link
                href="/spec/psychologowie"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition hover:-translate-y-[1px] hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 text-zinc-200">
                    <HeartPulse size={18} />
                    <p className="font-semibold text-zinc-100">
                      Psycholog (wsparcie)
                    </p>
                  </div>
                  <MiniBadge label="Stabilizacja" tone="default" />
                </div>

                <p className="mt-2 text-sm text-zinc-400">
                  Gdy emocje zalewają i spada sen.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Zobacz →</p>
              </Link>

              <Link
                href="/spec/grupy"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition hover:-translate-y-[1px] hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 text-zinc-200">
                    <Users size={18} />
                    <p className="font-semibold text-zinc-100">
                      Grupy wsparcia
                    </p>
                  </div>
                  <MiniBadge label="Nie bądź sam" tone="default" />
                </div>

                <p className="mt-2 text-sm text-zinc-400">
                  Ludzie, którzy rozumieją sytuację.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Zobacz →</p>
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Wróć na start
            </Link>

            <span className="inline-flex items-center gap-2 text-xs text-zinc-500">
              <ShieldCheck size={14} />
              Stabilność wygrywa. Emocje poczekają.
            </span>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Rozwód to proces. Ty masz przejść go mądrze, nie krwawo.
          </p>
        </section>
      </div>
    </main>
  );
}