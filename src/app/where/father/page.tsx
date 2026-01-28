import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";
import MiniBadge from "@/components/ui/MiniBadge";
import { Baby, Scale, MessageCircle, Sparkles } from "lucide-react";

export default function WhereFatherPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">MenMind · ojcostwo</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Ojcostwo
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Tu nie chodzi o „bycie idealnym”.
            Chodzi o stabilność, obecność i mądre granice — bez wojny i bez ego.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-lg font-semibold text-zinc-100">
              Na dziś (prosto)
            </h2>
            <MiniBadge label="5–10 min" tone="info" />
          </div>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              15 minut pełnej uwagi (bez telefonu).
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Jedna aktywność: ruch / wspólne gotowanie / klocki / spacer.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Jedna granica: czego dziś nie robisz (kłótnia, napięcie, szarpanina).
            </li>
          </ul>

          <Reset60 lang="pl" />

          {/* ✅ POMYSŁY NA CZAS Z DZIECKIEM */}
          <div className="mt-10">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-zinc-200">
                Pomysły na czas z dzieckiem
              </h3>
              <MiniBadge label="Gotowe" tone="start" />
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3">
              <Link
                href="/spec/ojcostwo-rytualy"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5 hover:bg-zinc-900/50 transition hover:-translate-y-[1px] hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 text-zinc-200">
                    <Baby size={18} />
                    <p className="text-lg font-semibold text-zinc-100">
                      Proste aktywności i rytuały
                    </p>
                  </div>
                  <MiniBadge label="10–20 min" tone="default" />
                </div>

                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Podział wieku + gotowe pomysły. Zero presji.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Zobacz →</p>
              </Link>

              <Link
                href="/spec/ojcostwo-awaryjna"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5 hover:bg-zinc-900/50 transition hover:-translate-y-[1px] hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 text-zinc-200">
                    <Sparkles size={18} />
                    <p className="text-lg font-semibold text-zinc-100">
                      Lista awaryjna: 10 pomysłów
                    </p>
                  </div>
                  <MiniBadge label="Od razu" tone="info" />
                </div>

                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Gdy masz pustkę w głowie — wybierz 1 i zrobione.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Otwórz →</p>
              </Link>
            </div>
          </div>

          {/* ✅ USTALENIA / KONFLIKT */}
          <div className="mt-10">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-zinc-200">
                Jeśli jest konflikt / ustalenia
              </h3>
              <MiniBadge label="Konkret" tone="priority" />
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/spec/prawo"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition hover:-translate-y-[1px] hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 text-zinc-200">
                    <Scale size={18} />
                    <p className="font-semibold text-zinc-100">Prawo / mediacje</p>
                  </div>
                  <MiniBadge label="30–60 min" tone="default" />
                </div>

                <p className="mt-2 text-sm text-zinc-400">
                  Ustalenia i granice. Papier = mniej chaosu.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Otwórz →</p>
              </Link>

              <Link
                href="/navimind?state=father"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition hover:-translate-y-[1px] hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 text-zinc-200">
                    <MessageCircle size={18} />
                    <p className="font-semibold text-zinc-100">Navimind</p>
                  </div>
                  <MiniBadge label="Teraz" tone="info" />
                </div>

                <p className="mt-2 text-sm text-zinc-400">
                  Spokój, klarowność i konkretne kroki.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Otwórz →</p>
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
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Ojcostwo wygrywa spokojem, nie siłą.
          </p>
        </section>
      </div>
    </main>
  );
}