import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";

export default function WhereDivorcePage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">MenMind · stan</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Jestem w trakcie rozwodu
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Rozwód to emocje + decyzje, które zostają na lata. Najpierw
            stabilizacja, potem ruchy prawne. Bez chaosu.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">Na teraz</h2>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Nie eskaluj konfliktu wiadomościami i telefonami.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Zapisz fakty: daty, ustalenia, koszty (bez interpretacji).
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Jedna rzecz dla ciała: sen / spacer / posiłek.
            </li>
          </ul>

          <Reset60 lang="pl" />

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-zinc-200">
              Propozycje (konkret)
            </h3>

            <div className="mt-4 grid grid-cols-1 gap-3">
              <Link
                href="/spec/prawo"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Priorytet</p>
                <p className="mt-1 text-lg font-semibold text-zinc-100">
                  Prawnicy / mediacje
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Kontakty, alimenty, majątek, porozumienia. Papier daje spokój.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Otwórz →</p>
              </Link>

              <Link
                href="/spec/psychologowie"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Stabilizacja</p>
                <p className="mt-1 text-lg font-semibold text-zinc-100">
                  Psycholog
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Żeby nie podejmować decyzji z emocji.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Otwórz →</p>
              </Link>

              <Link
                href="/spec/grupy"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Nie bądź sam</p>
                <p className="mt-1 text-lg font-semibold text-zinc-100">
                  Grupy wsparcia
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Faceci po rozwodzie. Bez tłumaczenia się.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Otwórz →</p>
              </Link>

              <Link
                href="/spec/psychiatrzy"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Gdy jest źle</p>
                <p className="mt-1 text-lg font-semibold text-zinc-100">
                  Psychiatra
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Gdy sen siada, organizm nie ciągnie, objawy są zbyt mocne.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Otwórz →</p>
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/navimind?state=divorce"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              Chcę pogadać →
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Wróć
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Rozwód to proces. Twoim celem jest przejść go spokojnie i mądrze.
          </p>
        </section>
      </div>
    </main>
  );
}